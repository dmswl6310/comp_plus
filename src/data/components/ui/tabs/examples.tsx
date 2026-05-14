import { CustomTabsProps } from "./CustomTabs";

const defaultTabs = [
  {
    id: "account",
    label: "내 계정",
    content: "계정 설정을 변경할 수 있는 화면입니다.",
  },
  {
    id: "password",
    label: "비밀번호",
    content: "비밀번호를 안전하게 변경하세요.",
  },
  {
    id: "notifications",
    label: "알림",
    content: "이메일 알림 및 푸시 알림 설정을 관리합니다.",
  },
];

export const tabsExamples: CustomTabsProps[] = [
  {
    variant: "line",
    tabs: defaultTabs,
  },
  {
    variant: "pill",
    tabs: defaultTabs,
  },
];
