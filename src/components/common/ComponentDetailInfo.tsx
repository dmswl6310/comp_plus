import { ComponentInfoUnion } from "@/data/componentsData";

const ComponentDetailInfo = ({
  componentDetail,
}: {
  componentDetail: ComponentInfoUnion;
}) => {
  return (
    <div>
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
    </div>
  );
};

export default ComponentDetailInfo;
