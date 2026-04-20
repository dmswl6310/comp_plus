export type CustomToggleProps = {
  label: string;
  checked: boolean;
};

export const CustomToggle = ({ label, checked }: CustomToggleProps) => {
  const isChecked = String(checked) === "true" || checked === true;

  return (
    <label className="inline-flex items-center gap-3 cursor-pointer group select-none">
      <div className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${isChecked ? "bg-blue-600" : "bg-gray-200"}`}>
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${isChecked ? "translate-x-6" : "translate-x-0"}`}
        />
      </div>
      {label && (
        <span className={`text-sm font-medium transition-colors ${isChecked ? "text-gray-900" : "text-gray-500"}`}>
          {label}
        </span>
      )}
    </label>
  );
};
