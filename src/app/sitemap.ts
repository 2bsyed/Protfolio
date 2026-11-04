import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { publishedRoutes } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteUrl().origin;
  return publishedRoutes.filter((path) => path !== "/cv").map((path) => ({
    url: new URL(path, origin).toString(),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.startsWith("/work/") ? 0.8 : 0.6,
  }));
}
