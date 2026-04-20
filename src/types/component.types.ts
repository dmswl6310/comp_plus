export type ControlType = "string" | "boolean" | "select";

export interface PropControl {
  type: ControlType;
  options?: string[]; // Used when type is 'select'
  label?: string; // Optional user-friendly label
}

export interface ComponentInfo<T = Record<string, unknown>> {
  id: string; // 라우팅이나 key로 쓸 고유id
  name: string; // UI에 보여질 실제 컴포넌트 이름
  tags?: string[]; // 검색/필터용 태그 (ex. form, basic)
  image?: string; // 썸네일 이미지

  updatedAt: Date; // 마지막 수정날짜
  description: string; // 컴포넌트 설명
  code: string; // 사용 예시 코드 (TypeScript)
  codeJs: string; // 사용 예시 코드 (JavaScript)
  examples: T[];
  propControls?: Record<string, PropControl>; // 동적 Playground 컨트롤 속성 (keyof T 기반)
  Component?: React.ElementType; // 동적 로딩된 실제 컴포넌트
}

export type ComponentTag = "form" | "basic" | "etc";
