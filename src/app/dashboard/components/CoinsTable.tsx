"use client";

import { useCryptocurrencyData } from "@/app/hooks/useCryptoData";
import { Button } from "@/components/ui/button";
import {
  Star,
  TrendingUp,
  Settings,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { MiniChart } from "./MiniChart";

function formatCurrency(value: number): string {
  if (value >= 1e12) {
    return `$${(value / 1e12).toFixed(2)}T`;
  } else if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(2)}B`;
  } else if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(2)}M`;
  } else if (value >= 1000) {
    return `$${(value / 1000).toFixed(2)}K`;
  } else if (value >= 1) {
    return `$${value.toFixed(2)}`;
  } else {
    return `$${value.toFixed(6)}`;
  }
}

function formatPercentage(value: number | null): string {
  if (value === null || value === undefined) return "0.0%";
  return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
}

function getCoinIcon(symbol: string): { icon: string; color: string } {
  const iconMap: Record<string, { icon: string; color: string }> = {
    BTC: { icon: "₿", color: "text-orange-500" },
    ETH: { icon: "♦", color: "text-blue-600" },
    XRP: { icon: "✕", color: "text-gray-700" },
    USDT: { icon: "₮", color: "text-teal-600" },
    BNB: { icon: "◆", color: "text-yellow-500" },
    SOL: { icon: "◉", color: "text-purple-500" },
    USDC: { icon: "◎", color: "text-blue-500" },
    ADA: { icon: "₳", color: "text-blue-700" },
    AVAX: { icon: "▲", color: "text-red-500" },
    DOGE: { icon: "Ð", color: "text-yellow-600" },
  };

  return iconMap[symbol] || { icon: symbol.charAt(0), color: "text-gray-500" };
}

export function CryptocurrencyTable() {
  const {
    data: cryptocurrencies,
    isLoading,
    error,
    refetch,
    isRefetching,
  } = useCryptocurrencyData();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  const totalItems = cryptocurrencies?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = cryptocurrencies?.slice(startIndex, endIndex) || [];

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-center py-12">
          <div className="text-center space-y-4">
            <p className="text-red-600 font-medium">
              Failed to load cryptocurrency data
            </p>
            <p className="text-gray-500 text-sm">
              {error instanceof Error
                ? error.message
                : "Please check your internet connection and try again"}
            </p>
            <Button
              onClick={() => refetch()}
              disabled={isRefetching}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isRefetching ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Retrying...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const totalMarketCap =
    cryptocurrencies?.reduce(
      (sum: number, crypto: any) => sum + crypto.market_cap,
      0
    ) || 0;
  const formattedMarketCap = formatCurrency(totalMarketCap);

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Cryptocurrency Prices by Market Cap
          </h1>
          <p className="text-gray-600">
            The global cryptocurrency market cap today is {formattedMarketCap},
            a <span className="text-green-600 font-medium">▲ 0.8%</span> change
            in the last 24 hours.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Read more
            </a>
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Button
            variant="default"
            size="sm"
            className="bg-green-100 text-green-700 hover:bg-green-200"
          >
            <TrendingUp className="h-4 w-4 mr-1" />
            All
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600">
            📊 Highlights
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => refetch()}
            disabled={isRefetching}
            className="text-gray-600"
          >
            <RefreshCw
              className={`h-4 w-4 mr-1 ${isRefetching ? "animate-spin" : ""}`}
            />
            {isRefetching ? "Updating..." : "Refresh"}
          </Button>
        </div>
      </div>

      {/* Pagination Info */}
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div>
          Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of{" "}
          {totalItems} cryptocurrencies
        </div>
        <div className="flex items-center space-x-2">
          <span>
            Page {currentPage} of {totalPages}
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  #
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Coin
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  1h
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  24h
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  7d
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  24h Volume
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Market Cap
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last 7 Days
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((crypto: any) => {
                const coinIcon = getCoinIcon(crypto.symbol);
                const change1h = crypto.price_change_percentage_1h_in_currency;
                const change24h =
                  crypto.price_change_percentage_24h_in_currency;
                const change7d = crypto.price_change_percentage_7d_in_currency;

                return (
                  <tr key={crypto.id} className="hover:bg-gray-50">
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="p-0 h-auto"
                        >
                          <Star className="h-4 w-4 text-gray-400" />
                        </Button>
                        <span className="text-sm font-medium text-gray-900">
                          {crypto.rank}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                          {crypto.image ? (
                            <img
                              src={crypto.image || "/placeholder.svg"}
                              alt={crypto.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.innerHTML = `<div class="w-6 h-6 rounded-full flex items-center justify-center ${coinIcon.color} bg-gray-100"><span class="text-sm font-bold">${coinIcon.icon}</span></div>`;
                                }
                              }}
                            />
                          ) : (
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center ${coinIcon.color} bg-gray-100`}
                            >
                              <span className="text-sm font-bold">
                                {coinIcon.icon}
                              </span>
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {crypto.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {crypto.symbol}
                          </div>
                        </div>
                        <Button
                          size="sm"
                          className="bg-green-100 text-green-700 hover:bg-green-200 text-xs px-2 py-1 h-6"
                        >
                          Buy
                        </Button>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                      {formatCurrency(crypto.current_price)}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
                      <span
                        className={
                          change1h >= 0 ? "text-green-600" : "text-red-600"
                        }
                      >
                        {change1h >= 0 ? "▲" : "▼"}{" "}
                        {Math.abs(change1h || 0).toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
                      <span
                        className={
                          change24h >= 0 ? "text-green-600" : "text-red-600"
                        }
                      >
                        {change24h >= 0 ? "▲" : "▼"}{" "}
                        {Math.abs(change24h || 0).toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
                      <span
                        className={
                          change7d >= 0 ? "text-green-600" : "text-red-600"
                        }
                      >
                        {change7d >= 0 ? "▲" : "▼"}{" "}
                        {Math.abs(change7d || 0).toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                      {formatCurrency(crypto.total_volume)}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right text-sm text-gray-900">
                      {formatCurrency(crypto.market_cap)}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-right">
                      <MiniChart
                        data={crypto.sparkline_in_7d?.slice(-20) || []}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex  items-center justify-center">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="flex items-center space-x-1"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>

          <div className="flex items-center space-x-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <Button
                  key={pageNum}
                  variant={currentPage === pageNum ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(pageNum)}
                  className={`w-8 h-8 p-0 ${
                    currentPage === pageNum
                      ? "bg-vprimary text-white hover:bg-vprimary"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </Button>
              );
            })}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="flex items-center space-x-1"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
