"use client";

import { FormEvent, useMemo, useState } from "react";
import { services, siteConfig } from "@/lib/site";

type FormStatus =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

function localTimeInZoneToIso(date: string, time: string, timeZone: string) {
  const [year, month, day] = date.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const utcGuess = Date.UTC(year, month - 1, day, hour, minute, 0);
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  });
  const parts = Object.fromEntries(
    formatter.formatToParts(new Date(utcGuess)).map((part) => [part.type, part.value]),
  );
  const representedAsUtc = Date.UTC(
    Number(parts.year),
    Number(parts.month) - 1,
    Number(parts.day),
    Number(parts.hour),
    Number(parts.minute),
    Number(parts.second),
  );
  const offset = representedAsUtc - utcGuess;
  return new Date(utcGuess - offset).toISOString();
}

export function BookingForm({ defaultService }: { defaultService?: string }) {
  const [selectedService, setSelectedService] = useState(defaultService ?? services[0].slug);
  const [status, setStatus] = useState<FormStatus>({ kind: "idle" });
  const chosenService = useMemo(
    () => services.find((service) => service.slug === selectedService) ?? services[0],
    [selectedService],
  );
  const tomorrow = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toISOString().slice(0, 10);
  }, []);

  async function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "loading" });
    const form = new FormData(event.currentTarget);
    const date = String(form.get("date"));
    const time = String(form.get("time"));

    const payload = {
      service: selectedService,
      vehicleType: String(form.get("vehicleType")),
      vehicle: String(form.get("vehicle")),
      condition: String(form.get("condition")),
      name: String(form.get("name")),
      phone: String(form.get("phone")),
      email: String(form.get("email")),
      requestedStart: localTimeInZoneToIso(date, time, "Europe/Zagreb"),
      timeZone: "Europe/Zagreb",
    };

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) {
        throw new Error(result.message || "Zahtjev trenutačno nije moguće poslati.");
      }
      setStatus({
        kind: "success",
        message: result.message || "Zahtjev je zaprimljen. Javit ćemo vam se s potvrdom termina.",
      });
      event.currentTarget.reset();
      setSelectedService(defaultService ?? services[0].slug);
    } catch (error) {
      setStatus({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Došlo je do poteškoće. Molimo nazovite nas za dogovor termina.",
      });
    }
  }

  return (
    <form className="booking-form" onSubmit={submitBooking}>
      <div className="booking-intro">
        <span className="step-number">01</span>
        <div>
          <h2>Odaberite tretman</h2>
          <p>Pošaljite željeni termin. Zahtjev potvrđujemo nakon provjere vozila i trajanja usluge.</p>
        </div>
      </div>

      <fieldset className="service-options">
        <legend className="sr-only">Odaberite uslugu</legend>
        {services.map((service) => (
          <label key={service.slug} className={selectedService === service.slug ? "selected" : ""}>
            <input
              type="radio"
              name="service"
              value={service.slug}
              checked={selectedService === service.slug}
              onChange={(event) => setSelectedService(event.target.value)}
            />
            <span>{service.index}</span>
            <strong>{service.shortName}</strong>
            <small>{service.eyebrow}</small>
          </label>
        ))}
      </fieldset>

      <div className="selection-note">
        <span>Odabrano</span>
        <strong>{chosenService.name}</strong>
        <p>{chosenService.duration} · {chosenService.price}</p>
      </div>

      <div className="booking-intro booking-step">
        <span className="step-number">02</span>
        <div>
          <h2>Vozilo i željeni termin</h2>
          <p>Ovi podaci pomažu nam rezervirati realno vrijeme za kvalitetan rad.</p>
        </div>
      </div>

      <div className="form-grid">
        <label>
          Vrsta vozila
          <select name="vehicleType" required defaultValue="">
            <option value="" disabled>Odaberite</option>
            <option value="Mali/gradski automobil">Mali / gradski automobil</option>
            <option value="Limuzina/karavan">Limuzina / karavan</option>
            <option value="SUV/terenac">SUV / terenac</option>
            <option value="Sportsko/premium vozilo">Sportsko / premium vozilo</option>
            <option value="Motocikl">Motocikl</option>
            <option value="Plovilo">Plovilo</option>
          </select>
        </label>
        <label>
          Marka i model
          <input name="vehicle" type="text" placeholder="npr. BMW X5 M" required />
        </label>
        <label>
          Željeni datum
          <input name="date" type="date" min={tomorrow} required />
        </label>
        <label>
          Željeno vrijeme
          <select name="time" required defaultValue="">
            <option value="" disabled>Odaberite</option>
            <option value="08:00">08:00</option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
          </select>
        </label>
        <label className="form-full">
          Stanje vozila i što želite postići
          <textarea
            name="condition"
            rows={4}
            placeholder="Opišite mrlje, ogrebotine, postojeću zaštitu ili drugi važan detalj."
            required
          ></textarea>
        </label>
      </div>

      <div className="booking-intro booking-step">
        <span className="step-number">03</span>
        <div>
          <h2>Kontakt za potvrdu</h2>
          <p>Podatke koristimo isključivo za obradu ovog upita i dogovor termina.</p>
        </div>
      </div>

      <div className="form-grid">
        <label>
          Ime i prezime
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Telefon
          <input name="phone" type="tel" autoComplete="tel" placeholder="+385 …" required />
        </label>
        <label className="form-full">
          E-mail
          <input name="email" type="email" autoComplete="email" required />
        </label>
      </div>

      <label className="consent-row">
        <input type="checkbox" required />
        <span>
          Pročitao/la sam <a href="/politika-privatnosti">politiku privatnosti</a> i prihvaćam{" "}
          <a href="/uvjeti-rezervacije">uvjete rezervacije</a>.
        </span>
      </label>

      {status.kind === "success" && <p className="form-message success" role="status">{status.message}</p>}
      {status.kind === "error" && (
        <p className="form-message error" role="alert">
          {status.message} <a href={siteConfig.phoneHref}>Nazovite {siteConfig.phoneDisplay}</a>.
        </p>
      )}

      <button className="button button-accent booking-submit" type="submit" disabled={status.kind === "loading"}>
        {status.kind === "loading" ? "Provjeravamo…" : "Pošalji zahtjev za termin"}
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-footnote">
        Slanje zahtjeva nije konačna potvrda. Termin vrijedi nakon potvrde studija.
      </p>
    </form>
  );
}

