import Example from "./Example";
import { ComponentTypeMap } from "@/data/componentsData";

type PlaygroundProps<K extends keyof ComponentTypeMap> = {
  componentType: K;
  examples: ComponentTypeMap[K][];
};

const Examples = <K extends keyof ComponentTypeMap>({
  componentType,
  examples,
}: PlaygroundProps<K>) => {
  return (
    <div>
      {examples.map((props, index) => (
        <Example
          key={index}
          componentType={componentType}
          componentProps={props}
        />
      ))}
    </div>
  );
};

export default Examples;
