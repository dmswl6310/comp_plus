export type CustomListProps = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

export const CustomList = ({
  first,
  second,
  third,
  fourth,
}: CustomListProps) => {
  return (
    <ul className="w-full max-w-md rounded-2xl bg-white border border-gray-100 shadow-sm divide-y divide-gray-50 overflow-hidden">
      {[first, second, third, fourth].map((item, index) => (
        <li 
          key={index}
          className="group flex items-center justify-between px-5 py-4 hover:bg-blue-50/50 transition-colors cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {index + 1}
            </span>
            <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
              {item}
            </span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 group-hover:text-blue-500 transition-colors"><path d="m9 18 6-6-6-6"/></svg>
        </li>
      ))}
    </ul>
  );
};
