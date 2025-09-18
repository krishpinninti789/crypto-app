import { Button } from "@/components/ui/button";
import { Settings, User, Bookmark } from "lucide-react";

export function Header() {
  return (
    <div className="bg-gray-50 border-b border-gray-200 px-4 py-2">
      <div className="container mx-auto flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-6">
          <span>
            Coins: <strong className="text-gray-900">18,811</strong>
          </span>
          <span>
            Exchanges: <strong className="text-gray-900">1,377</strong>
          </span>
          <span>
            Market Cap: <strong className="text-gray-900">$4.19T</strong>
          </span>
          <span className="text-green-600">▲ 0.8%</span>
          <span>
            24h Vol: <strong className="text-gray-900">$210.853B</strong>
          </span>
          <span>
            Dominance: <strong className="text-gray-900">BTC 55.7%</strong>
          </span>
          <span>
            <strong className="text-gray-900">ETH 13.2%</strong>
          </span>
          <span>
            🔥 Gas: <strong className="text-gray-900">0.369 GWEI</strong>
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-gray-600">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-600">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
