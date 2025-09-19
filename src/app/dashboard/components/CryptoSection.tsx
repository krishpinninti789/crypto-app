import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

function CryptoItem({
  name,
  symbol,
  price,
  change,
  isPositive,
  bgColor,
}: CryptoItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className={`w-8 h-8 ${bgColor} rounded-full flex items-center justify-center`}
        >
          <span className="text-white text-xs font-bold">{symbol}</span>
        </div>
        <span className="font-medium text-gray-900">{name}</span>
      </div>
      <div className="text-right">
        <div className="font-medium text-gray-900">{price}</div>
        <div
          className={`text-sm ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? "▲" : "▼"} {change.replace("+", "").replace("-", "")}
        </div>
      </div>
    </div>
  );
}

export default function CryptoSection({ title, emoji, data }: SectionProps) {
  return (
    <Card className="p-6 bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">{emoji}</span>
          <h3 className="font-semibold text-gray-900">{title}</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-600 hover:text-gray-900"
        >
          View more <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      <div className="space-y-3">
        {data.map((item, index) => (
          <CryptoItem key={index} {...item} />
        ))}
      </div>
    </Card>
  );
}
