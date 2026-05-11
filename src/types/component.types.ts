export type ControlType = "string" | "boolean" | "select" | "number" | "color" | "radio" | "textarea";
export type ComponentCategory = "ui" | "blocks" | "templates";

export interface PropControl {
  type: ControlType;
  options?: string[]; // Used when type is 'select' or 'radio'
  label?: string; // Optional user-friendly label
  min?: number; // Used when type is 'number'
  max?: number; // Used when type is 'number'
  step?: number; // Used when type is 'number'
}

export interface ComponentInfo<T = Record<string, any>> {
  id: string; // 라우팅이나 key로 쓸 고유id
  name: string; // UI에 보여질 실제 컴포넌트 이름
  category?: ComponentCategory; // ui | blocks | templates
  tags?: string[]; // 검색/필터용 태그
  aliases?: string[]; // 검색 보조 키워드
  image?: string; // 썸네일 이미지

  updatedAt: Date; // 마지막 수정날짜
  description: string; // 컴포넌트 설명
  usage?: string; // 상세 페이지에 보여줄 사용 가이드 (Markdown 형식)
  
  code: string; // 사용 예시 코드 (TypeScript)
  codeJs: string; // 사용 예시 코드 (JavaScript)
  
  examples: T[];
  propControls?: Partial<Record<keyof T, PropControl>>; // 동적 Playground 컨트롤 속성
  Component?: React.ElementType; // 동적 로딩된 실제 컴포넌트
}
