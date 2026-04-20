export type CustomCardProps = {
  title: string;
  description: string;
  footerText: string;
};

export const CustomCard = ({ title, description, footerText }: CustomCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm w-full max-w-sm transition-all hover:shadow-md hover:border-gray-300">
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 tracking-tight">{title}</h3>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="bg-gray-50/80 px-6 py-4 border-t border-gray-100 flex items-center justify-between">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{footerText}</p>
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
};
