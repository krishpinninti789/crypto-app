import { Card } from "@/components/ui/card";
import { CoinRow } from "./CoinRow";

interface Coin {
  name: string;
  price: string;
  change: string;
  icon: string;
}

interface CryptoSectionProps {
  title: string;
  coins: Coin[];
  showMoreLink?: boolean;
}

export function CryptoSection({
  title,
  coins,
  showMoreLink,
}: CryptoSectionProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        {showMoreLink && (
          <button className="text-sm text-muted-foreground hover:text-foreground">
            more →
          </button>
        )}
      </div>
      <div className="space-y-1">
        <div className="grid grid-cols-3 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b">
          <span>Coin</span>
          <span>Price</span>
          <span>24h</span>
        </div>
        {coins.map((coin, index) => (
          <CoinRow key={index} {...coin} />
        ))}
      </div>
    </Card>
  );
}
