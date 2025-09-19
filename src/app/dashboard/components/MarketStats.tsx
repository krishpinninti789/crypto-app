import { Card } from "@/components/ui/card";

export default function MarketStats() {
  return (
    <div className="space-y-6">
      {/* Market Cap Card */}
      <Card className="p-6 bg-white">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              $4,203,578,433,388
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">Market Cap</span>
              <span className="text-green-600 font-medium">▲ 0.3%</span>
            </div>
          </div>
          <div className="w-32 h-16">
            <svg viewBox="0 0 120 60" className="w-full h-full">
              <path
                d="M5 45 L20 40 L35 35 L50 30 L65 25 L80 20 L95 15 L110 10"
                stroke="#10b981"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </Card>

      {/* Trading Volume Card */}
      <Card className="p-6 bg-white">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              $163,115,616,560
            </h2>
            <span className="text-gray-600">24h Trading Volume</span>
          </div>
          <div className="w-32 h-16">
            <svg viewBox="0 0 120 60" className="w-full h-full">
              <path
                d="M5 20 L20 25 L35 30 L50 35 L65 40 L80 45 L95 50 L110 55"
                stroke="#ef4444"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
        </div>
      </Card>
    </div>
  );
}
