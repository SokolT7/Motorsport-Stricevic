import { createCalendarBooking } from "@/lib/googleCalendar";
import { services } from "@/lib/site";

type BookingPayload = {
  service?: string;
  vehicleType?: string;
  vehicle?: string;
  condition?: string;
  name?: string;
  phone?: string;
  email?: string;
  requestedStart?: string;
  timeZone?: string;
};

const REQUEST_BLOCK_MINUTES = 120;

function clean(value: string | undefined, maxLength: number) {
  return value?.replace(/[<>]/g, "").trim().slice(0, maxLength) ?? "";
}

export async function POST(request: Request) {
  let body: BookingPayload;
  try {
    body = (await request.json()) as BookingPayload;
  } catch {
    return Response.json({ message: "Neispravan zahtjev." }, { status: 400 });
  }

  const service = services.find((item) => item.slug === body.service);
  const name = clean(body.name, 100);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const vehicleType = clean(body.vehicleType, 80);
  const vehicle = clean(body.vehicle, 120);
  const condition = clean(body.condition, 1200);
  const start = new Date(body.requestedStart ?? "");

  if (
    !service ||
    !name ||
    !phone ||
    !email ||
    !vehicleType ||
    !vehicle ||
    !condition ||
    Number.isNaN(start.getTime()) ||
    start.getTime() < Date.now()
  ) {
    return Response.json({ message: "Provjerite obavezna polja i pokušajte ponovno." }, { status: 400 });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ message: "Unesite ispravnu e-mail adresu." }, { status: 400 });
  }

  const end = new Date(start.getTime() + REQUEST_BLOCK_MINUTES * 60_000);
  try {
    const event = await createCalendarBooking({
      summary: `[WEB ZAHTJEV] ${service.shortName} — ${vehicle}`,
      description: [
        `Klijent: ${name}`,
        `Telefon: ${phone}`,
        `E-mail: ${email}`,
        `Vrsta vozila: ${vehicleType}`,
        `Vozilo: ${vehicle}`,
        `Usluga: ${service.name}`,
        "",
        "Opis stanja / cilj:",
        condition,
        "",
        "Napomena: termin je privremen do ručne potvrde studija.",
      ].join("\n"),
      start: start.toISOString(),
      end: end.toISOString(),
      timeZone: body.timeZone === "Europe/Zagreb" ? body.timeZone : "Europe/Zagreb",
    });
    return Response.json({
      id: event.id,
      message: "Zahtjev je zabilježen. Javit ćemo vam se radi potvrde termina i konačne procjene.",
    });
  } catch (error) {
    const reason = error instanceof Error ? error.message : "unknown";
    if (reason === "calendar_not_configured") {
      return Response.json(
        { message: "Online kalendar još nije aktiviran." },
        { status: 503 },
      );
    }
    if (reason === "calendar_conflict") {
      return Response.json(
        { message: "Odabrani termin više nije slobodan. Odaberite drugi termin." },
        { status: 409 },
      );
    }
    return Response.json(
      { message: "Kalendar trenutačno nije dostupan. Pokušajte ponovno ili nas nazovite." },
      { status: 502 },
    );
  }
}

