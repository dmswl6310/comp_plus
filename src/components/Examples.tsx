import Example from "./Example";
import { ComponentInfo } from "@/types/component.types";

type ExamplesProps<T = any> = {
  componentInfo: ComponentInfo<T>;
  examples: T[];
};

const Examples = <T extends Record<string, any>>({
  componentInfo,
  examples,
}: ExamplesProps<T>) => {
  return (
    <div>
      {examples.map((exampleData, index) => (
        <Example
          key={index}
          componentInfo={componentInfo}
          exampleData={exampleData}
        />
      ))}
    </div>
  );
};

export default Examples;
