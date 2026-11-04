const backendBase = (
  process.env.FASTAPI_URL ||
  (process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000" : "")
).replace(/\/$/, "");

export async function forwardToFastAPI(request: Request, path: "/api/chat" | "/api/contact", timeoutMs: number) {
  if (!backendBase) {
    return Response.json({ detail: "The portfolio API is not configured yet." }, { status: 503 });
  }

  const body = await request.text();
  if (new TextEncoder().encode(body).byteLength > 12_000) {
    return Response.json({ detail: "Request is too large." }, { status: 413 });
  }

  try {
    const upstream = await fetch(`${backendBase}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(timeoutMs),
    });

    return new Response(upstream.body, {
      status: upstream.status,
      headers: {
        "Content-Type": upstream.headers.get("Content-Type") || "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const timedOut = error instanceof DOMException && error.name === "TimeoutError";
    return Response.json(
      { detail: timedOut ? "The portfolio API took too long to respond." : "The portfolio API is temporarily unavailable." },
      { status: timedOut ? 504 : 502 },
    );
  }
}
