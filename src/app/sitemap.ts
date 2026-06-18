import type { MetadataRoute } from "next";

const BASE = "https://sairamthedev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date("2024-06-18"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
