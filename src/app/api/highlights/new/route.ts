import { NextResponse } from "next/server";

export async function GET() {
  try {
    const baseUrl = "https://pro-api.coingecko.com/api/v3";
    const url = `${baseUrl}/coins/list/new`;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    const apiKey = process.env.COINGECKO_API_KEY;
    if (apiKey) headers["x-cg-pro-api-key"] = apiKey;

    const res = await fetch(url, { headers, next: { revalidate: 60 } });
    if (!res.ok) {
      throw new Error(`CoinGecko API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();

    const transformed = (data || []).map((c: any) => ({
      id: c.id,
      symbol: c.symbol,
      name: c.name,
      activated_at: c.activated_at ?? null,
    }));

    return NextResponse.json(transformed);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}


