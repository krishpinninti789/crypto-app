import { useQuery } from "@tanstack/react-query";



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

// New Coins


async function fetchNewCoins(): Promise<NewCoinItem[]> {
  const res = await fetch("/api/highlights/new");
  if (!res.ok) throw new Error("Failed to fetch new coins");
  return res.json();
}

export function useNewCoins() {
  return useQuery({
    queryKey: ["highlights", "new"],
    queryFn: fetchNewCoins,
    staleTime: 60 * 1000,
  });
}

// Top gainers/losers


async function fetchTopGainers(): Promise<TopMoveItem[]> {
  const res = await fetch("/api/highlights/gainers");
  if (!res.ok) throw new Error("Failed to fetch top gainers");
  return res.json();
}

export function useTopGainers() {
  return useQuery({
    queryKey: ["highlights", "gainers"],
    queryFn: fetchTopGainers,
    staleTime: 60 * 1000,
  });
}

async function fetchTopLosers(): Promise<TopMoveItem[]> {
  const res = await fetch("/api/highlights/losers");
  if (!res.ok) throw new Error("Failed to fetch top losers");
  return res.json();
}

export function useTopLosers() {
  return useQuery({
    queryKey: ["highlights", "losers"],
    queryFn: fetchTopLosers,
    staleTime: 60 * 1000,
  });
}



async function fetchTrendingCoins(): Promise<TrendingCoinItem[]> {
  const res = await fetch("/api/highlights/trending");
  if (!res.ok) throw new Error("Failed to fetch trending coins");
  return res.json();
}

export function useTrendingCoins() {
  return useQuery({
    queryKey: ["highlights", "trending"],
    queryFn: fetchTrendingCoins,
    staleTime: 60 * 1000,
  });
}

export async function getCoinDetails(id: string) {
  const base = "https://api.coingecko.com/api/v3/coins/";
  const res = await fetch(`${base}${id}`, {
    // Cache for 2 minutes; revalidate on navigation
    next: { revalidate: 120 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch coin details");
  }
  return res.json();
}