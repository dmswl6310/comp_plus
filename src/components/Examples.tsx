import Example from "./Example";
import { ComponentInfo } from "@/types/component.types";

type ExamplesProps = {
  componentInfo: ComponentInfo;
  examples: Record<string, unknown>[];
};

const Examples = ({
  componentInfo,
  examples,
}: ExamplesProps) => {
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
