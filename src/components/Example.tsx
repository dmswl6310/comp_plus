import { componentMap, ComponentTypeMap } from "@/data/componentsData";
import React from "react";
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
  const [propsState, setPropsState] = useState(componentProps);
  const handleChange = (key: string, newValue: string) => {
    setPropsState((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  return (
    <div className="preview">
      <div className="example-code">
        <span>{`<${Component.name} `}</span>
        {Object.entries(propsState).map(([key, val]) => (
          <span key={key}>
            {key}=
            <input
              value={String(val)}
              onChange={(e) => handleChange(key, e.target.value)}
            />
          </span>
        ))}
        {`/>`}
      </div>
      <button onClick={() => setIsExecuted(true)}>버튼</button>
      {isExecuted ? (
        <div className="rendered-result">
          <Component {...propsState} />
        </div>
      ) : null}
    </div>
  );
};

export default Example;
