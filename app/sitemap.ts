import type { MetadataRoute } from "next";
import { services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.SITE_URL ?? "http://localhost:3000";
  const routes = ["", "/usluge", "/radovi", "/o-nama", "/rezervacija", "/kontakt"];
  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8,
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/usluge/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}

