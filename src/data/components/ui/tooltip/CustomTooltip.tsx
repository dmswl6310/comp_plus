import React, { ReactNode } from "react";

export type CustomTooltipProps = {
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
};

export const CustomTooltip = ({
  content,
  position = "top",
  children,
}: CustomTooltipProps) => {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "bottom-[-4px] left-1/2 -translate-x-1/2 border-t-gray-900 border-l-transparent border-r-transparent border-b-transparent",
    bottom: "top-[-4px] left-1/2 -translate-x-1/2 border-b-gray-900 border-l-transparent border-r-transparent border-t-transparent",
    left: "right-[-4px] top-1/2 -translate-y-1/2 border-l-gray-900 border-t-transparent border-b-transparent border-r-transparent",
    right: "left-[-4px] top-1/2 -translate-y-1/2 border-r-gray-900 border-t-transparent border-b-transparent border-l-transparent",
  };

  return (
    <div className="relative inline-flex group">
      {children}
      <div
        className={`absolute z-50 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none ${positionClasses[position]}`}
      >
        {content}
        <span
          className={`absolute border-[5px] ${arrowClasses[position]}`}
        ></span>
      </div>
    </div>
  );
};
