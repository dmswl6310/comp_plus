import { useState } from "react";

export type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export type CustomAccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
};

export const CustomAccordion = ({ items = [], allowMultiple = false }: CustomAccordionProps) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  if (!items || items.length === 0) {
    return <div className="text-gray-400 text-sm">항목이 없습니다.</div>;
  }

  return (
    <div className="w-full max-w-md border border-gray-200 dark:border-slate-800 rounded-xl divide-y divide-gray-200 dark:divide-slate-800 overflow-hidden bg-white dark:bg-slate-900">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div key={item.id} className="group">
            <button
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:bg-gray-50 dark:focus-visible:bg-slate-800 transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/50"
            >
              <span className="font-medium text-gray-900 dark:text-slate-100 text-sm">
                {item.title}
              </span>
              <svg
                className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-4 pt-1 text-sm text-gray-600 dark:text-gray-400">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
