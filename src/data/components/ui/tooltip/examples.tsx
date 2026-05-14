import { CustomTooltipProps } from "./CustomTooltip";

export const tooltipExamples: CustomTooltipProps[] = [
  {
    content: "툴팁입니다!",
    position: "top",
    children: (
      <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors">
        여기에 마우스를 올려보세요
      </button>
    ),
  },
  {
    content: "아래쪽에 표시됩니다",
    position: "bottom",
    children: (
      <span className="text-sm text-gray-500 underline cursor-help">
        도움말 보기
      </span>
    ),
  },
];
