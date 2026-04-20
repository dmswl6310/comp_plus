import { CheckCircle, XCircle, Info, AlertTriangle } from "lucide-react";

export type CustomToastProps = {
  message: string;
  variant: "success" | "error" | "info" | "warning";
};

const config = {
  success: {
    icon: CheckCircle,
    bg: "bg-green-50",
    border: "border-green-200",
    icon_color: "text-green-500",
    text: "text-green-800",
  },
  error: {
    icon: XCircle,
    bg: "bg-red-50",
    border: "border-red-200",
    icon_color: "text-red-500",
    text: "text-red-800",
  },
  info: {
    icon: Info,
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon_color: "text-blue-500",
    text: "text-blue-800",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon_color: "text-amber-500",
    text: "text-amber-800",
  },
};

export const CustomToast = ({ message, variant = "info" }: CustomToastProps) => {
  const c = config[variant] || config.info;
  const Icon = c.icon;

  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 shadow-lg w-full max-w-sm ${c.bg} ${c.border}`}
    >
      <Icon size={20} className={`shrink-0 ${c.icon_color}`} />
      <p className={`text-sm font-medium ${c.text}`}>{message}</p>
    </div>
  );
};
