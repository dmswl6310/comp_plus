import { componentMap, ComponentTypeMap } from "@/data/componentsData";

type PreviewItemProps<K extends keyof ComponentTypeMap> = {
  componentType: K;
  componentProps: ComponentTypeMap[K];
};

const PreviewItem = <K extends keyof ComponentTypeMap>({
  componentType,
  componentProps,
}: PreviewItemProps<K>) => {
  const Component = componentMap[componentType] as React.ComponentType<
    ComponentTypeMap[K]
  >;

  return (
    <div className="preview">
      {/* <div className="example-code">
      {`<${Component.name} ${Object.entries(componentProps).map(...)} />`}
    </div> */}
      <div className="rendered-result">
        <Component {...componentProps} />
      </div>
    </div>
  );
};

export default PreviewItem;
