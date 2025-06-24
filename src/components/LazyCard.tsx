import { useInView } from "react-intersection-observer";

const LazyCard = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // 10%만 보여도 렌더링
  });

  return (
    <div ref={ref}>
      {inView ? children : <div className="h-[300px] rounded-lg bg-gray-50" />}
    </div>
  );
};

export default LazyCard;
