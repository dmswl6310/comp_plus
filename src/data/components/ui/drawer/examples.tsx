import { CustomDrawerProps } from "./CustomDrawer";

export const drawerExamples: CustomDrawerProps[] = [
  {
    position: "right",
    title: "설정 메뉴",
    trigger: (
      <button className="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors shadow-md">
        사이드바 열기
      </button>
    ),
    children: (
      <div className="space-y-4">
        <p>여기에 다양한 필터나 설정 폼을 넣을 수 있습니다.</p>
        <div className="h-20 bg-gray-100 rounded-lg"></div>
        <div className="h-20 bg-gray-100 rounded-lg"></div>
        <div className="h-20 bg-gray-100 rounded-lg"></div>
      </div>
    ),
  },
];
