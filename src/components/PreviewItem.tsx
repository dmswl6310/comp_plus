type PreviewItemProps<T extends object> = {
  rcomponent: React.ComponentType<T>;
  componentProps: T;
};

const PreviewItem = <T extends object>({
  rcomponent: Component,
  componentProps,
}: PreviewItemProps<T>) => (
  <div className="preview">
    {/* <div className="example-code">
      {`<${Component.name} ${Object.entries(componentProps).map(...)} />`}
    </div> */}
    <div className="rendered-result">
      <Component {...componentProps} />
    </div>
  </div>
);

export default PreviewItem;
