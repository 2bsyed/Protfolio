import { forwardToFastAPI } from "@/lib/fastapi-proxy";

export const runtime = "nodejs";
export const maxDuration = 30;

export async function POST(request: Request) {
  return forwardToFastAPI(request, "/api/contact", 25_000);
}
