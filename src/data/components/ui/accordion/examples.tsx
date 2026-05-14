import { CustomAccordionProps } from "./CustomAccordion";

const defaultItems = [
  {
    id: "item-1",
    title: "Uikki 갤러리는 무료인가요?",
    content: "네, 완전히 무료이며 상업적 용도로도 자유롭게 사용하실 수 있습니다. 원하시는 컴포넌트를 복사해서 프로젝트에 붙여넣기만 하세요.",
  },
  {
    id: "item-2",
    title: "다른 프레임워크도 지원하나요?",
    content: "현재는 React와 Tailwind CSS 환경에 최적화되어 있습니다. 하지만 HTML 탭을 통해 순수 마크업을 복사하여 Vue나 Svelte에서 쉽게 응용하실 수 있습니다.",
  },
  {
    id: "item-3",
    title: "의존성(Dependencies)이 있나요?",
    content: "Uikki의 모든 컴포넌트는 무거운 외부 라이브러리 없이 순수 React 상태와 Tailwind CSS만으로 동작하도록 설계되어 압도적으로 가볍습니다.",
  },
];

export const accordionExamples: CustomAccordionProps[] = [
  {
    items: defaultItems,
    allowMultiple: false,
  },
];
