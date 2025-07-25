import PreviewItem from "./PreviewItem";
import { ComponentTypeMap } from "@/data/componentsData";

type PlaygroundProps<K extends keyof ComponentTypeMap> = {
  componentType: K;
  examples: ComponentTypeMap[K][];
};

const Playground = <K extends keyof ComponentTypeMap>({
  componentType,
  examples,
}: PlaygroundProps<K>) => {
  return (
    <div>
      {examples.map((props, index) => (
        <PreviewItem
          key={index}
          componentType={componentType}
          componentProps={props}
        />
      ))}
    </div>
  );
};

export default Playground;
