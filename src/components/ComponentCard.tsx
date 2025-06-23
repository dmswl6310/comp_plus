import { ComponentInfo } from "@/types/component.types";


const ComponentCard=({info}:{info:ComponentInfo})=>{
    return (
        <div className="border p-4 bg-white shadow hover:shadow-md transition flex flex-col gap-4 ">
            <div className="w-full aspect-[4/3] overflow-hidden bg-gray-50">
            <img src={info.image}
            alt={`${info.name}`}
            className="w-full h-full object-contiain p-4"
            />
            </div>
            <h3 className="text-gray-800 font-bold">{info.name}</h3>
            {info.tags&&(
            <p className="text-xs italic text-gray-500">
            {info.tags.join(', ')}
            </p>
            )}
            <p className="text-gray-600">{info.description}</p>
        </div>
    )
}

export default ComponentCard;