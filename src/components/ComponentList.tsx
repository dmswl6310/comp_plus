import { ComponentInfo } from "@/types/component.types";
import ComponentCard from "./ComponentCard";
import LazyCard from "./LazyCard";

const ComponentList = ({ items }: { items: ComponentInfo[] }) => {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <li key={item.id}>
          <LazyCard>
            <ComponentCard info={item} />
          </LazyCard>
        </li>
      ))}
    </ul>
  );
};

export default ComponentList;
