import { useQuery } from "@tanstack/react-query";

export interface CryptocurrencyData {
  id: string;
  rank: number;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  sparkline_in_7d: number[];
}

async function fetchCryptocurrencyData(): Promise<CryptocurrencyData[]> {
  const response = await fetch("/api/coins", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch cryptocurrency data");
  }

  return response.json();
}

export function useCryptocurrencyData() {
  return useQuery({
    queryKey: ["cryptocurrency-data"],
    queryFn: fetchCryptocurrencyData,
    staleTime: 60 * 1000, // 1 minute
    gcTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 60 * 1000, // Refetch every minute
  });
}
