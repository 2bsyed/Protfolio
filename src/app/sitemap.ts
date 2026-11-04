import type { MetadataRoute } from "next";
import { publishedRoutes } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return publishedRoutes.filter((path) => path !== "/cv").map((path) => ({
    url: new URL(path, origin).toString(),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path.startsWith("/work/") ? 0.8 : 0.6,
  }));
}
