import { useEffect, useState } from "react";

type StatBarProps = {
  statName: string;
  baseStat: number;
};

const MAX_STAT = 250;

function StatBar({ statName, baseStat }: StatBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth((baseStat / MAX_STAT) * 100);
    }, 100); // delay for smooth transition
    return () => clearTimeout(timeout);
  }, [baseStat]);

  return (
    <div className="mb-2">
      <div className="flex justify-between mb-1">
        <span className="capitalize text-sm text-gray-800">{statName}</span>
        <span className="text-sm text-gray-600">{baseStat}</span>
      </div>
      <div className="w-full h-4 bg-[#f1d5ce] rounded">
        <div
          className="h-4 bg-[#c85250] rounded transition-all duration-700 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default StatBar;
