import { ComponentInfo } from "@/types/component.types";

const ComponentCard = ({ info }: { info: ComponentInfo }) => {
  return (
    <div className="flex aspect-[4/5] flex-col gap-4 rounded-lg bg-white p-6 shadow-sm transition transition-all transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-md hover:ring hover:ring-gray-300">
      <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
        <img
          src={info.image}
          alt={`${info.name}`}
          className="object-contiain h-full w-full p-4"
        />
      </div>
      <h3 className="font-bold text-gray-800">{info.name}</h3>
      {info.tags && (
        <p className="text-xs text-gray-500 italic">{info.tags.join(", ")}</p>
      )}
      <p className="text-gray-600">{info.description}</p>
    </div>
  );
};

export default ComponentCard;
