import { componentMap, ComponentTypeMap } from "@/data/componentsData";
import { useState } from "react";

type ExampleProps<K extends keyof ComponentTypeMap> = {
  componentType: K;
  componentProps: ComponentTypeMap[K];
};

const Example = <K extends keyof ComponentTypeMap>({
  componentType,
  componentProps,
}: ExampleProps<K>) => {
  const Component = componentMap[componentType] as React.ComponentType<
    ComponentTypeMap[K]
  >;
  const [isExecuted, setIsExecuted] = useState(false);

  return (
    <div className="preview">
      <div className="example-code">
        {`<${Component.name} ${Object.entries(componentProps)
          .map(([key, value]) => `${key}="${value}"`)
          .join(" ")} />`}
      </div>
      <button onClick={() => setIsExecuted(true)}>버튼</button>
      {isExecuted ? (
        <div className="rendered-result">
          <Component {...componentProps} />
        </div>
      ) : null}
    </div>
  );
};

export default Example;
