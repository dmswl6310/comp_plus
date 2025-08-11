import PageTitle from "@/components/common/PageTitle";
import { componentsData } from "@/data/componentsData";
import { Navigate, useParams } from "react-router-dom";
import Examples from "./Examples";
import CodeTabs from "./common/CodeTabs";
import ComponentDetailInfo from "./common/ComponentDetailInfo";

const ComponentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const componentDetail = componentsData.find((item) => item.id === id);
  if (!componentDetail) return <Navigate to="/not-found" replace />;

  return (
    <div>
      <PageTitle title={componentDetail.name} />
      <div className="flex flex-col gap-4">
        <ComponentDetailInfo componentDetail={componentDetail} />
        <CodeTabs code={componentDetail.code} />
        <Examples
          componentType={componentDetail.id}
          examples={componentDetail.examples}
        />
      </div>
    </div>
  );
};

export default ComponentDetail;
