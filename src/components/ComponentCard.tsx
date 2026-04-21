import { ComponentInfo } from "@/types/component.types";
import { Link } from "react-router-dom";

const categoryLabel = {
  ui: "UI",
  blocks: "Blocks",
  templates: "Templates",
} as const;

const ComponentCard = ({ info }: { info: ComponentInfo }) => {
  return (
    <Link to={`/components/${info.id}`}>
      <div className="flex aspect-[4/5] flex-col gap-4 bg-white p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:rounded-lg hover:shadow-md hover:ring hover:ring-gray-300">
        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
          <img
            src={info.image}
            alt={`${info.name}`}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-gray-900">{info.name}</h3>
          {info.category && (
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
              {categoryLabel[info.category]}
            </span>
          )}
        </div>
        {info.tags && (
          <p className="-mt-2 text-xs text-gray-500 italic">
            {info.tags.join(", ")}
          </p>
        )}
        <p className="text-sm text-gray-700">{info.description}</p>
      </div>
    </Link>
  );
};

export default ComponentCard;
