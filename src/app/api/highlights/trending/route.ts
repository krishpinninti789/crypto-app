import { NextResponse } from "next/server";

export async function GET() {
  try {
    const baseUrl = "https://pro-api.coingecko.com/api/v3";
    const url = `${baseUrl}/search/trending`;

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

    const transformed = (data?.coins || []).map((c: any) => ({
      id: c.item?.id,
      symbol: c.item?.symbol,
      name: c.item?.name,
      market_cap_rank: c.item?.market_cap_rank,
      thumb: c.item?.thumb,
      small: c.item?.small,
      large: c.item?.large,
      score: c.item?.score,
      price_btc: c.item?.price_btc,
    }));

    return NextResponse.json(transformed);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}


