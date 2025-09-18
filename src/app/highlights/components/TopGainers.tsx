'use client'
import React from "react";
import Image from "next/image";
import { useTopGainers } from "@/app/hooks/useCryptoData";

const TopGainers = () => {
  const { data: items, isLoading, error } = useTopGainers();

  return (
    <section className="bg-white dark:bg-neutral-900 border rounded-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Top Gainers</h2>
        <span className="text-xs text-muted-foreground">24h</span>
      </div>

      {isLoading && (
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-8 rounded bg-gray-100 dark:bg-neutral-800 animate-pulse" />
          ))}
        </div>
      )}

      {!!error && (
        <p className="text-sm text-red-500">Failed to load top gainers.</p>
      )}

      {!isLoading && !error && (
        <div className="divide-y">
          {(items || []).map((coin) => (
            <div
              key={coin.id}
              className="flex items-center justify-between py-2 gap-3"
            >
              <div className="flex items-center gap-3 min-w-0">
                {coin.image && (
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                )}
                <div className="truncate">
                  <div className="text-sm font-medium truncate">{coin.name}</div>
                  <div className="text-xs text-muted-foreground">Rank #{coin.market_cap_rank}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm font-medium">
                  ${coin.usd?.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground">Vol ${coin.usd_24h_vol?.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TopGainers;
