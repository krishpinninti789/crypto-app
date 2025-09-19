import { Card } from "@/components/ui/card";
import { CryptoSection } from "./CryptoSection";
import { UnlockRow } from "./UnlockRow";

// Mock data based on the screenshot
const trendingCoins = [
  { name: "Aster", price: "$0.5737", change: "-35.5%", icon: "🟡" },
  { name: "Mubarak", price: "$0.03898", change: "+10.2%", icon: "🟢" },
  { name: "Linea", price: "$0.02815", change: "+8.0%", icon: "🔵" },
  { name: "Undeads Games", price: "$1.62", change: "-10.3%", icon: "🎮" },
  { name: "STBL", price: "$0.1989", change: "+55.1%", icon: "⚫" },
  { name: "Hyperliquid", price: "$57.97", change: "-1.4%", icon: "❌" },
  { name: "Lombard", price: "$0.9849", change: "-42.0%", icon: "🟢" },
  { name: "Pudgy Penguins", price: "$0.03843", change: "+4.4%", icon: "🐧" },
];

const topGainers = [
  { name: "Worthless", price: "$0.04398", change: "+115.3%", icon: "⚫" },
  {
    name: "DuckChain Token",
    price: "$0.009874",
    change: "+108.0%",
    icon: "🟡",
  },
  { name: "STBL", price: "$0.1989", change: "+55.1%", icon: "⚫" },
  { name: "Syndicate", price: "$1.08", change: "+4.1%", icon: "🔘" },
  { name: "Naoris Protocol", price: "$0.08061", change: "+37.0%", icon: "🟢" },
  { name: "OORT", price: "$0.08081", change: "+37.9%", icon: "🔵" },
  { name: "Nosana", price: "$0.9681", change: "+32.6%", icon: "🟢" },
  { name: "APX", price: "$0.5864", change: "+28.4%", icon: "🟣" },
];

const topLosers = [
  { name: "OpenVPP", price: "$0.09123", change: "-54.5%", icon: "🟢" },
  { name: "Mavryk Network", price: "$0.2231", change: "-51.4%", icon: "🔵" },
  { name: "PUP Token", price: "$0.09695", change: "-44.7%", icon: "🐕" },
  { name: "Hegic", price: "$0.04595", change: "-44.1%", icon: "⚫" },
  { name: "Lombard", price: "$0.9849", change: "-42.0%", icon: "🟢" },
  { name: "Aster", price: "$0.5737", change: "-35.5%", icon: "🟡" },
  { name: "Tharwa", price: "$0.007413", change: "-23.7%", icon: "🟡" },
  { name: "Slash Vision Labs", price: "$0.0266", change: "-18.0%", icon: "⚫" },
];

const newCoins = [
  { name: "Ratecoin", price: "$0.0001404", change: "+0.5%", icon: "❌" },
  {
    name: "AUSSIE BAG WORKERS",
    price: "$0.0008632",
    change: "+32.5%",
    icon: "🟤",
  },
  {
    name: "Make America Mog A...",
    price: "$0.00003168",
    change: "+16.5%",
    icon: "❤️",
  },
];

const incomingUnlocks = [
  { name: "Pixels", nextUnlock: "0D 07H 45M 19S", icon: "🟢" },
  { name: "MMX", nextUnlock: "0D 21H 45M 19S", icon: "⚫" },
  { name: "Velo", nextUnlock: "0D 21H 45M 19S", icon: "❤️" },
];

const mostViewed = [
  { name: "Undeads Games", price: "$1.62", change: "-10.3%", icon: "🎮" },
  { name: "Hyperliquid", price: "$57.97", change: "-1.4%", icon: "❌" },
  { name: "Pudgy Penguins", price: "$0.03843", change: "+4.4%", icon: "🐧" },
];

export function CryptoDashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CryptoSection
          title="🔥 Trending Coins"
          coins={trendingCoins}
          showMoreLink
        />
        <CryptoSection title="📈 Top Gainers" coins={topGainers} showMoreLink />
        <CryptoSection title="🔻 Top Losers" coins={topLosers} showMoreLink />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CryptoSection title="✨ New Coins" coins={newCoins} showMoreLink />
        <div>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">
                🔓 Incoming Token Unlocks
              </h2>
              <button className="text-sm text-muted-foreground hover:text-foreground">
                more →
              </button>
            </div>
            <div className="space-y-1">
              <div className="grid grid-cols-3 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b">
                <span>Coin</span>
                <span>Next Unlock Date</span>
                <span></span>
              </div>
              {incomingUnlocks.map((unlock, index) => (
                <UnlockRow key={index} {...unlock} />
              ))}
            </div>
          </Card>
        </div>
        <CryptoSection title="👁️ Most Viewed" coins={mostViewed} showMoreLink />
      </div>
    </div>
  );
}
