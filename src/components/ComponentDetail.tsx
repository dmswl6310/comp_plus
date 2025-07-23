import PageTitle from "@/components/common/PageTitle";
import { componentsData } from "@/data/componentsData";
import { Navigate, useParams } from "react-router-dom";
import CodeBlock from "./common/CodeBlock";
import Playground from "./Playground";

const ComponentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const componentDetail = componentsData.find((item) => item.id === id);

  if (!componentDetail) return <Navigate to="/not-found" />;

  // const { component: RenderComponent, examples } = componentDetail;

  return (
    <div>
      <PageTitle title={componentDetail.name} />
      <div className="flex flex-col gap-4">
        <p className="text-sm text-gray-700">{componentDetail.description}</p>
        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-50">
          <img
            src={componentDetail.image}
            alt={`${componentDetail.name}`}
            className="object-contiain h-full w-full"
          />
        </div>
        <div className="flex justify-between">
          {componentDetail.tags && (
            <p className="-mt-2 text-xs text-gray-500 italic">
              {componentDetail.tags.join(", ")}
            </p>
          )}
          <p className="-mt-2 text-xs text-gray-500 italic">
            {componentDetail.updatedAt.toDateString()}
          </p>
        </div>
        <div>
          <CodeBlock code={componentDetail.code} />
        </div>
        <Playground
          renderComponent={componentDetail.component}
          propsItems={componentDetail.examples}
        />
      </div>
    </div>
  );
};

export default ComponentDetail;
