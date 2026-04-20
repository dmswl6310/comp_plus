import { useInView } from "react-intersection-observer";

const LazyCard = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // 10%만 보여도 렌더링
  });

  return (
    <div ref={ref} className="h-full w-full">
      {inView ? (
        children
      ) : (
        <div className="flex aspect-[4/5] flex-col gap-4 bg-white p-6 shadow-sm rounded-lg border border-gray-50 animate-pulse">
          <div className="aspect-[4/3] w-full rounded-md bg-gray-100" />
          <div className="h-6 w-1/2 rounded bg-gray-100" />
          <div className="h-3 w-1/4 rounded bg-gray-100" />
          <div className="space-y-2 mt-auto">
             <div className="h-3 w-full rounded bg-gray-50" />
             <div className="h-3 w-5/6 rounded bg-gray-50" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyCard;
