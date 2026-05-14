import React, { useState } from "react";

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export type CustomTabsProps = {
  tabs: TabItem[];
  defaultActiveId?: string;
  variant?: "line" | "pill";
};

export const CustomTabs = ({
  tabs = [],
  defaultActiveId,
  variant = "line",
}: CustomTabsProps) => {
  const [activeId, setActiveId] = useState<string>(
    defaultActiveId || (tabs.length > 0 ? tabs[0].id : "")
  );

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="w-full max-w-2xl">
      <div
        className={`flex space-x-1 overflow-x-auto ${
          variant === "line"
            ? "border-b border-gray-200 dark:border-slate-800"
            : "p-1 bg-gray-100 dark:bg-slate-800 rounded-xl"
        }`}
      >
        {tabs.map((tab) => {
          const isActive = activeId === tab.id;
          
          if (variant === "line") {
            return (
              <button
                key={tab.id}
                onClick={() => setActiveId(tab.id)}
                className={`py-3 px-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  isActive
                    ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {tab.label}
              </button>
            );
          }

          // pill variant
          return (
            <button
              key={tab.id}
              onClick={() => setActiveId(tab.id)}
              className={`flex-1 py-2 px-4 text-sm font-medium whitespace-nowrap rounded-lg transition-all ${
                isActive
                  ? "bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-white/50 dark:hover:bg-slate-700/50"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-gray-100 dark:border-slate-800 shadow-sm text-sm text-gray-600 dark:text-gray-400">
        {tabs.find((t) => t.id === activeId)?.content}
      </div>
    </div>
  );
};
