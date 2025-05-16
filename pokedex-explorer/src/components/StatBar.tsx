import { useEffect, useState } from "react";

type StatBarProps = {
  statName: string;
  baseStat: number;
};

const MAX_STAT = 250;

function StatBar({ statName, baseStat }: StatBarProps) {
  const [width, setWidth] = useState(0);

  // Convert baseStat (0–100+) to a color from red to green
  const getColor = (stat: number) => {
    const value = Math.min(stat, 100);
    const hue = (value / 100) * 120; // 0 = red, 120 = green
    return `hsl(${hue}, 70%, 50%)`;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth((baseStat / MAX_STAT) * 100);
    }, 100);
    return () => clearTimeout(timeout);
  }, [baseStat]);

  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span className="capitalize text-sm text-gray-800">{statName}</span>
        <span className="text-sm text-gray-600">{baseStat}</span>
      </div>
      <div className="w-full h-4 bg-[#f1d5ce] rounded overflow-hidden">
        <div
          className="h-4 rounded transition-all duration-700 ease-out"
          style={{
            width: `${width}%`,
            backgroundColor: getColor(baseStat),
          }}
        />
      </div>
    </div>
  );
}

export default StatBar;
