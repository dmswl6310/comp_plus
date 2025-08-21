import PageTitle from "@/components/common/PageTitle";
import { componentsData } from "@/data/componentsData";
import { Navigate, useParams } from "react-router-dom";
import Examples from "./Examples";
import CodeTabs from "./common/CodeTabs";
import ComponentMeta from "./common/ComponentMeta";

const ComponentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const detail = componentsData.find((c) => c.id === id);
  if (!detail) return <Navigate to="/not-found" replace />;

  return (
    <div>
      <PageTitle title={detail.name} />
      <div className="flex flex-col gap-4">
        <ComponentMeta info={detail} />
        <CodeTabs code={detail.code} />
        <Examples componentType={detail.id} examples={detail.examples} />
      </div>
    </div>
  );
};

export default ComponentDetail;
