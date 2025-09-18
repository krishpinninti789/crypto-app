import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Always use the free CoinGecko API endpoint
    const baseUrl = "https://api.coingecko.com/api/v3";
    const url = `${baseUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h,24h,7d`;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };
    const apiKey = process.env.COINGECKO_API_KEY;

    if (apiKey) {
      headers["x-cg-demo-api-key"] = apiKey; //for security
    }

    const response = await fetch(url, {
      headers,
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error(
          `Authentication failed. Please check your API key or use the free tier.`
        );
      } else if (response.status === 429) {
        throw new Error(`Rate limit exceeded. Please try again later.`);
      } else {
        throw new Error(
          `CoinGecko API error: ${response.status} - ${response.statusText}`
        );
      }
    }

    const data = await response.json();

    // Transform the data to match our interface
    const transformedData = data.map((coin: any, index: number) => ({
      id: coin.id,
      rank: index + 1,
      symbol: coin.symbol.toUpperCase(),
      name: coin.name,
      image: coin.image,
      current_price: coin.current_price,
      market_cap: coin.market_cap,
      total_volume: coin.total_volume,
      high_24h: coin.high_24h,
      low_24h: coin.low_24h,
      price_change_24h: coin.price_change_24h,
      price_change_percentage_1h_in_currency:
        coin.price_change_percentage_1h_in_currency,
      price_change_percentage_24h_in_currency:
        coin.price_change_percentage_24h_in_currency,
      price_change_percentage_7d_in_currency:
        coin.price_change_percentage_7d_in_currency,
      sparkline_in_7d: coin.sparkline_in_7d?.price || [],
    }));

    console.log(
      " Successfully fetched",
      transformedData.length,
      "cryptocurrencies"
    );
    return NextResponse.json(transformedData);
  } catch (error) {
    console.error(" Error fetching cryptocurrency data:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch cryptocurrency data",
        message:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
