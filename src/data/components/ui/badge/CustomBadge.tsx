export type CustomBadgeProps = {
  text: string;
  color: "blue" | "red" | "green" | "gray";
  variant: "solid" | "outline";
};

export const CustomBadge = ({ text, color = "blue", variant = "solid" }: CustomBadgeProps) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors";
  
  const solidColors = {
    blue: "bg-blue-100 text-blue-800",
    red: "bg-red-100 text-red-800",
    green: "bg-green-100 text-green-800",
    gray: "bg-gray-100 text-gray-800",
  };
  
  const outlineColors = {
    blue: "text-blue-600 ring-1 ring-inset ring-blue-500/10",
    red: "text-red-600 ring-1 ring-inset ring-red-500/10",
    green: "text-green-600 ring-1 ring-inset ring-green-500/10",
    gray: "text-gray-600 ring-1 ring-inset ring-gray-500/10",
  };

  const styleClass = variant === "solid" ? solidColors[color] : outlineColors[color];

  return (
    <span className={`${baseStyles} ${styleClass}`}>
      {text}
    </span>
  );
};
