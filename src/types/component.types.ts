export interface ComponentInfo<T> {
  id: string; // 라우팅이나 key로 쓸 고유id
  name: string; // UI에 보여질 실제 컴포넌트 이름
  tags?: string[]; // 검색/필터용 태그 (ex. form, basic)
  image: string;

  updatedAt: Date; // 마지막 수정날짜
  description: string; // 컴포넌트 설명
  code: string; // 사용 예시 코드

  component: React.ComponentType<T>;
  examples: T[];
}

export type ComponentTag = "form" | "basic" | "etc";

/** 예제 코드 타입 */ export interface ComponentExample {
  description: string;
  code: string;
  livePreview?: boolean; // 향후 렌더링 여부 구분에도 활용 가능
}
