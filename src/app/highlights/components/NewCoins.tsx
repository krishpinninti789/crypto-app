'use client'
import React from "react";
import { useNewCoins } from "@/app/hooks/useCryptoData";

const NewCoins = () => {
  const { data: items, isLoading, error } = useNewCoins();

  return (
    <section className="bg-white dark:bg-neutral-900 border rounded-lg p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">New Coins</h2>
        <span className="text-xs text-muted-foreground">Proxy by low cap</span>
      </div>

      {isLoading && (
        <div className="space-y-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-8 rounded bg-gray-100 dark:bg-neutral-800 animate-pulse" />
          ))}
        </div>
      )}

      {!!error && (
        <p className="text-sm text-red-500">Failed to load new coins.</p>
      )}

      {!isLoading && !error && (
        <div className="divide-y">
          {(items || []).map((coin) => (
            <div
              key={coin.id}
              className="flex items-center justify-between py-2 gap-3"
            >
              <div className="min-w-0">
                <div className="text-sm font-medium truncate">{coin.name}</div>
                <div className="text-xs text-muted-foreground uppercase">{coin.symbol}</div>
              </div>
              <div className="text-xs text-muted-foreground">
                {coin.activated_at ? new Date(coin.activated_at).toLocaleDateString() : ""}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default NewCoins;
