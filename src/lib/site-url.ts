export function getSiteUrl(): URL {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configuredUrl) return new URL(configuredUrl);

  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProductionUrl) return new URL(`https://${vercelProductionUrl}`);

  if (process.env.NODE_ENV === "production") return new URL("https://2bsyed.vercel.app");
  return new URL("http://localhost:3000");
}
