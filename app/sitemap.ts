import type { MetadataRoute } from "next";
import { business } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy", "/consent"];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${business.siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.5,
  }));
}
