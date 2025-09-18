import { NextResponse } from "next/server";

export async function GET() {
  try {
    const baseUrl = "https://pro-api.coingecko.com/api/v3";
    const url = `${baseUrl}/coins/top_gainers_losers`;

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

    const transformed = (data?.top_losers || []).map((c: any) => ({
      id: c.id,
      name: c.name,
      image: c.image,
      market_cap_rank: c.market_cap_rank,
      usd: c.usd,
      usd_24h_vol: c.usd_24h_vol,
    }));

    return NextResponse.json(transformed);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}


