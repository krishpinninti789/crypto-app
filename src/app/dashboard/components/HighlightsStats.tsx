"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { topGainersData, topLosersData, trendingData } from "@/app/constants";
import CryptoSection from "./CryptoSection";

export default function HighlightStats() {
  const [showHighlights, setShowHighlights] = useState(true);

  // Only use the existing Highlights button for toggling

  return (
    <div className=" bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Cryptocurrency Prices by Market Cap
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Highlights</span>
            <button
              onClick={() => setShowHighlights(!showHighlights)}
              className={`w-10 h-6 rounded-full flex items-center px-1 transition-colors ${
                showHighlights
                  ? "bg-green-500 justify-end"
                  : "bg-gray-300 justify-start"
              }`}
            >
              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                {showHighlights ? (
                  <svg
                    className="w-2 h-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-2 h-2 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8">
          The global cryptocurrency market cap today is $4.2 Trillion, a{" "}
          <span className="text-green-600 font-medium">▲ 0.3%</span> change in
          the last 24 hours.{" "}
          <button className="text-blue-600 hover:underline">Read more</button>
        </p>

        {/* Main Content Grid */}
        {showHighlights ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Side - Market Stats */}
            <div className="lg:col-span-2">
              <div className="flex space-x-4">
                {/* Trending Section */}
                <CryptoSection
                  title="Trending"
                  emoji="🔥"
                  data={trendingData}
                />
                {/* Top Gainers Section */}
                <CryptoSection
                  title="Top Gainers"
                  emoji="🚀"
                  data={topGainersData}
                />
                {/* Top Losers Section */}
                <CryptoSection
                  title="Top Losers"
                  emoji="📉"
                  data={topLosersData}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-32 text-lg font-semibold text-[var(--color-primary)]">
            view Highlights
          </div>
        )}
      </div>
    </div>
  );
}

export { HighlightStats };
