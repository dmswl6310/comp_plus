import { PropControl } from "@/types/component.types";

type PropsTableProps = {
  controls: Partial<Record<string, PropControl>>;
};

const PropsTable = ({ controls }: PropsTableProps) => {
  const keys = Object.keys(controls || {});
  
  if (keys.length === 0) return null;

  return (
    <div className="overflow-x-auto w-full rounded-xl border border-gray-200 bg-white shadow-sm mt-8">
      <table className="w-full text-left text-sm text-gray-600">
        <thead className="bg-gray-50/80 border-b border-gray-200 text-gray-900 font-semibold uppercase text-xs tracking-wider">
          <tr>
            <th className="px-6 py-4 rounded-tl-xl">Prop Name</th>
            <th className="px-6 py-4">Type</th>
            <th className="px-6 py-4">Options / Range</th>
            <th className="px-6 py-4 rounded-tr-xl">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {keys.map((key) => {
            const ctrl = controls[key];
            if (!ctrl) return null;
            
            return (
              <tr key={key} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 font-mono text-sm text-blue-600 font-medium">
                  {key}
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                    {ctrl.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {(ctrl.type === "select" || ctrl.type === "radio") && ctrl.options ? (
                    <div className="flex flex-wrap gap-1">
                      {ctrl.options.map(opt => (
                        <span key={opt} className="inline-block px-1.5 py-0.5 border border-gray-200 rounded text-xs bg-white">"{opt}"</span>
                      ))}
                    </div>
                  ) : ctrl.type === "number" ? (
                    <span className="text-xs">
                      {ctrl.min !== undefined && `min: ${ctrl.min} `}
                      {ctrl.max !== undefined && `max: ${ctrl.max} `}
                      {ctrl.step !== undefined && `step: ${ctrl.step}`}
                    </span>
                  ) : (
                    <span className="text-gray-300">-</span>
                  )}
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {ctrl.label || <span className="text-gray-300">-</span>}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
