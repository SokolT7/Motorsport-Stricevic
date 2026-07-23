type CalendarBooking = {
  summary: string;
  description: string;
  start: string;
  end: string;
  timeZone: string;
};

let cachedToken: { value: string; expiresAt: number } | null = null;

function encodeBase64Url(input: string | ArrayBuffer) {
  const bytes = typeof input === "string" ? new TextEncoder().encode(input) : new Uint8Array(input);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodePem(pem: string) {
  const normalized = pem.replace(/\\n/g, "\n");
  const body = normalized
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "");
  const binary = atob(body);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0)).buffer;
}

async function getAccessToken() {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) return cachedToken.value;

  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!email || !privateKey) throw new Error("calendar_not_configured");

  const now = Math.floor(Date.now() / 1000);
  const header = encodeBase64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = encodeBase64Url(
    JSON.stringify({
      iss: email,
      scope: "https://www.googleapis.com/auth/calendar",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    }),
  );
  const unsignedToken = `${header}.${payload}`;
  const key = await crypto.subtle.importKey(
    "pkcs8",
    decodePem(privateKey),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(unsignedToken),
  );
  const assertion = `${unsignedToken}.${encodeBase64Url(signature)}`;
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  if (!response.ok) throw new Error("calendar_auth_failed");
  const token = (await response.json()) as { access_token: string; expires_in: number };
  cachedToken = {
    value: token.access_token,
    expiresAt: Date.now() + token.expires_in * 1000,
  };
  return token.access_token;
}

export async function createCalendarBooking(booking: CalendarBooking) {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  if (!calendarId) throw new Error("calendar_not_configured");
  const token = await getAccessToken();
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const availabilityResponse = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
    method: "POST",
    headers,
    body: JSON.stringify({
      timeMin: booking.start,
      timeMax: booking.end,
      timeZone: booking.timeZone,
      items: [{ id: calendarId }],
    }),
  });
  if (!availabilityResponse.ok) throw new Error("calendar_check_failed");
  const availability = (await availabilityResponse.json()) as {
    calendars?: Record<string, { busy?: unknown[] }>;
  };
  if ((availability.calendars?.[calendarId]?.busy?.length ?? 0) > 0) {
    throw new Error("calendar_conflict");
  }

  const eventResponse = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        summary: booking.summary,
        description: booking.description,
        status: "tentative",
        visibility: "private",
        start: { dateTime: booking.start, timeZone: booking.timeZone },
        end: { dateTime: booking.end, timeZone: booking.timeZone },
        source: { title: "Motorsport Stričević web", url: process.env.SITE_URL ?? "https://example.com" },
      }),
    },
  );
  if (!eventResponse.ok) throw new Error("calendar_create_failed");
  return (await eventResponse.json()) as { id: string };
}

