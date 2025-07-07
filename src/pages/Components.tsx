import PageTitle from "@/components/common/PageTitle";
import ComponentList from "@/components/ComponentList";
import { componentsData } from "@/data/componentsData";

const Components = () => {
  return (
    <div>
      <PageTitle title="Components" />
      <ComponentList items={componentsData} />
    </div>
  );
};

export default Components;
