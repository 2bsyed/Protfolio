import { forwardToFastAPI } from "@/lib/fastapi-proxy";

export const runtime = "nodejs";
export const maxDuration = 50;

export async function POST(request: Request) {
  return forwardToFastAPI(request, "/api/chat", 40_000);
}
