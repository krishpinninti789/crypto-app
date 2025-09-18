import { getCoinDetails } from "@/app/hooks/useCryptoData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TrendingDown,
  TrendingUp,
  Star,
  Share2,
  Info,
  DollarSign,
  Activity,
  BarChart3,
  Coins,
  Percent,
  Users,
  Globe,
} from "lucide-react";
import StatCard from "../../components/StatCard";

export default async function CoinDetailsPage({ params }: { params: any }) {
  const coin = await getCoinDetails(params.id);

  const price = coin.market_data?.current_price?.usd ?? 0;
  const priceChange24h = coin.market_data?.price_change_percentage_24h ?? 0;
  const marketCapChange =
    coin.market_data?.market_cap_change_percentage_24h ?? 0;
  const volumeChange = coin.market_data?.total_volume?.usd
    ? (coin.market_data.total_volume.usd / coin.market_data.market_cap?.usd) *
      100
    : 0;
  const isPositive = priceChange24h >= 0;

  const calculateVolumeToMarketCapRatio = () => {
    const volume = coin.market_data?.total_volume?.usd || 0;
    const marketCap = coin.market_data?.market_cap?.usd || 1;
    return ((volume / marketCap) * 100).toFixed(2);
  };

  return (
    <main className="container font-mono mx-auto px-4 py-8 space-y-8">
      {/* Main Header Card */}
      <Card className="rounded-2xl shadow-xl border border-gray-200 font-mono bg-white">
        <CardContent className="p-8 space-y-8">
          {/* Header Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={coin.image?.large}
                  alt={coin.name}
                  className="w-16 h-16 rounded-full ring-4 ring-white dark:ring-slate-800 shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  #{coin.market_cap_rank}
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {coin.name}
                </h1>
                <p className="text-lg text-blue-600 uppercase font-bold tracking-wider">
                  {coin.symbol}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-yellow-100 hover:from-yellow-100 hover:to-yellow-200 text-yellow-700 transition-all duration-200 hover:shadow-md">
                <Star className="w-4 h-4" /> Watchlist
              </button>
              <button className="p-3 rounded-xl border-2 border-slate-200 bg-white hover:bg-slate-50 transition-all duration-200 hover:shadow-md ">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Price Section */}
          <div className="flex items-baseline gap-6">
            <span className="text-5xl font-bold text-gray-900">
              $
              {price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-base font-bold shadow-sm ${
                isPositive
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {isPositive ? (
                <TrendingUp className="w-5 h-5" />
              ) : (
                <TrendingDown className="w-5 h-5" />
              )}
              {Math.abs(priceChange24h).toFixed(2)}%
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Market Cap"
          value={`$${
            coin.market_data?.market_cap?.usd?.toLocaleString() || "0"
          }`}
          change={marketCapChange}
          icon={DollarSign}
          showInfo={true}
        />

        <StatCard
          title="Volume (24h)"
          value={`$${
            coin.market_data?.total_volume?.usd?.toLocaleString() || "0"
          }`}
          change={volumeChange}
          icon={Activity}
          showInfo={true}
        />

        <StatCard
          title="FDV"
          value={`$${
            coin.market_data?.fully_diluted_valuation?.usd?.toLocaleString() ||
            "N/A"
          }`}
          icon={BarChart3}
          change={0}
          subtitle="Fully Diluted Valuation"
          showInfo={true}
        />

        <StatCard
          title="Vol/Mkt Cap (24h)"
          value={`${calculateVolumeToMarketCapRatio()}%`}
          icon={Percent}
          change={0}
          subtitle="Volume to Market Cap Ratio"
          showInfo={true}
        />

        <StatCard
          title="Total Supply"
          value={`${
            coin.market_data?.total_supply?.toLocaleString() || "N/A"
          } ${coin.symbol?.toUpperCase()}`}
          icon={Coins}
          change={0}
        />

        <StatCard
          title="Max. Supply"
          value={coin.market_data?.max_supply?.toLocaleString() || "∞"}
          icon={Globe}
          subtitle={
            coin.market_data?.max_supply
              ? `${coin.symbol?.toUpperCase()}`
              : "No maximum supply"
          }
          change={0}
        />
      </div>

      {/* Additional Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StatCard
          title="Circulating Supply"
          value={`${
            coin.market_data?.circulating_supply?.toLocaleString() || "0"
          } ${coin.symbol?.toUpperCase()}`}
          icon={Users}
          subtitle={`${(
            (coin.market_data?.circulating_supply /
              coin.market_data?.total_supply) *
              100 || 0
          ).toFixed(1)}% of total supply`}
          change={0}
        />
      </div>
    </main>
  );
}
