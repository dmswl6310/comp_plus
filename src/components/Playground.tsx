import PreviewItem from "./PreviewItem";

type PlaygroundProps<T extends object> = {
  renderComponent: React.ComponentType<T>;
  propsItems: T[];
};

const Playground = <T extends object>({
  renderComponent,
  propsItems,
}: PlaygroundProps<T>) => {
  return (
    <div>
      {propsItems.map((props, index) => (
        <PreviewItem
          key={index}
          rcomponent={renderComponent}
          componentProps={props}
        />
      ))}
    </div>
  );
};

export default Playground;
