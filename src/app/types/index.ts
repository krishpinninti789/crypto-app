type StatCardProps = {
  title: string;
  value: string;
  change: number;
  icon: React.ElementType;
  subtitle?: string;
  showInfo?: boolean;
};

type MiniChartProps = {
  data: number[];
};

type CryptoItemProps = {
  name: string;
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
  bgColor: string;
};

type SectionProps = {
  title: string;
  emoji: string;
  data: CryptoItemProps[];
};

type CryptocurrencyData = {
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
};

type NewCoinItem = {
  id: string;
  symbol: string;
  name: string;
  activated_at: string | null;
};

type TopMoveItem = {
  id: string;
  name: string;
  image: string;
  market_cap_rank: number;
  usd: number; // price
  usd_24h_vol: number;
};

type TrendingCoinItem = {
  id: string;
  symbol: string;
  name: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  score: number;
  price_btc: number;
};
