import PageTitle from "@/components/common/PageTitle";
import ComponentList from "@/components/ComponentList";
import { componentData } from "@/data/componentDatas";

const Components = () => {
  return (
    <div>
      <PageTitle title="Components" />
      <ComponentList items={componentData} />
    </div>
  );
};

export default Components;
