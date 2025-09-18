interface MiniChartProps {
  data: number[];
}

export function MiniChart({ data }: MiniChartProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - ((value - min) / range) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <div className="w-24 h-12">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        className="overflow-visible"
      >
        <polyline
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          points={points}
          className="drop-shadow-sm"
        />
      </svg>
    </div>
  );
}
