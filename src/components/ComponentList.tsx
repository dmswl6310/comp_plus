import { ComponentInfo } from "@/types/component.types";
import ComponentCard from "./ComponentCard";


const ComponentList=({items}: {items:ComponentInfo[]})=>{
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item)=>(<li><ComponentCard key={item.id} info={item}/></li>))}
        </ul>
    )
}

export default ComponentList;