import { NextResponse } from "next/server";

const ENDPOINT =
  process.env.CONTACT_API_URL ?? "http://localhost:4000/api/v1/contact";

type ApiError = {
  message?: string | string[];
};

/**
 * Thin server side proxy. The browser posts here, this forwards to the NestJS
 * API, so the API URL never ships to the client and CORS stays out of it.
 */
export async function POST(request: Request): Promise<NextResponse> {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const body = (await response.json().catch(() => ({}))) as ApiError;
      const message = Array.isArray(body.message)
        ? body.message[0]
        : (body.message ?? "Something went wrong, try again");
      return NextResponse.json({ error: message }, { status: response.status });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not reach the server, try emailing me directly" },
      { status: 502 },
    );
  }
}
