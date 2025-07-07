import PageTitle from "@/components/common/PageTitle";
import { componentsData } from "@/data/componentsData";
import { Navigate, useParams } from "react-router-dom";

const ComponentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const componentDetail = componentsData.find((item) => item.id === id);

  if (!componentDetail) return <Navigate to="/not-found" />;

  return (
    <div>
      <PageTitle title={componentDetail.name} />
      <div>{componentDetail.description}</div>
    </div>
  );
};

export default ComponentDetail;
