interface CoinRowProps {
  name: string;
  price: string;
  change: string;
  icon: string;
}

export function CoinRow({ name, price, change, icon }: CoinRowProps) {
  const isPositive = change.startsWith("+");
  const isNegative = change.startsWith("-");

  return (
    <div className="grid grid-cols-3 gap-4 py-2 text-sm hover:bg-muted/50 rounded-md px-2 -mx-2 transition-colors">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs">
          {icon}
        </div>
        <span className="font-medium text-foreground">{name}</span>
      </div>
      <span className="text-foreground font-mono">{price}</span>
      <span
        className={`font-medium ${
          isPositive
            ? "text-green-500"
            : isNegative
            ? "text-red-500"
            : "text-muted-foreground"
        }`}
      >
        {change}
      </span>
    </div>
  );
}
