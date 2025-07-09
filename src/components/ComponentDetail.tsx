import PageTitle from "@/components/common/PageTitle";
import { componentsData } from "@/data/componentsData";
import { Navigate, useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const ComponentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const componentDetail = componentsData.find((item) => item.id === id);

  if (!componentDetail) return <Navigate to="/not-found" />;

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
          <SyntaxHighlighter
            language="tsx"
            style={oneLight}
            wrapLines
            wrapLongLines
            customStyle={{
              borderRadius: "8px",
              padding: "1rem",
              fontSize: "0.875rem",
            }}
          >
            {componentDetail.code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;
