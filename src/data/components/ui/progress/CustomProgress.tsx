export type CustomProgressProps = {
  label: string;
  value: number;
  color: "blue" | "green" | "indigo" | "amber";
};

export const CustomProgress = ({ label, value, color = "blue" }: CustomProgressProps) => {
  const clampedValue = Math.min(100, Math.max(0, Number(value)));

  const colorMap = {
    blue: { track: "bg-blue-100", fill: "bg-blue-600", text: "text-blue-600" },
    green: { track: "bg-green-100", fill: "bg-green-500", text: "text-green-600" },
    indigo: { track: "bg-indigo-100", fill: "bg-indigo-600", text: "text-indigo-600" },
    amber: { track: "bg-amber-100", fill: "bg-amber-500", text: "text-amber-600" },
  };

  const c = colorMap[color] || colorMap.blue;

  return (
    <div className="w-full max-w-sm space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className={`text-sm font-bold tabular-nums ${c.text}`}>{clampedValue}%</span>
      </div>
      <div className={`h-2.5 w-full rounded-full ${c.track} overflow-hidden`}>
        <div
          className={`h-full rounded-full transition-all duration-700 ease-out ${c.fill}`}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
};
