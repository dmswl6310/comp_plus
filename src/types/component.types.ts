export type ControlType = "string" | "boolean" | "select" | "number";

export interface PropControl {
  type: ControlType;
  options?: string[]; // Used when type is 'select'
  label?: string; // Optional user-friendly label
  min?: number; // Used when type is 'number'
  max?: number; // Used when type is 'number'
  step?: number; // Used when type is 'number'
}

export interface ComponentInfo<T = Record<string, unknown>> {
  id: string; // 라우팅이나 key로 쓸 고유id
  name: string; // UI에 보여질 실제 컴포넌트 이름
  tags?: string[]; // 검색/필터용 태그 (ex. form, basic)
  aliases?: string[]; // 한국어 검색 등 부가적인 문자열 검색에 잡힐 키워드들
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
