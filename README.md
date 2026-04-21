# Uikki✦Uikki

React + TypeScript + Vite 기반으로 만든 **UI 컴포넌트 갤러리 & 플레이그라운드** 프로젝트입니다.

현재 프로젝트는 단순 문서 사이트보다, **컴포넌트 목록 탐색 → 상세 설명 확인 → 코드 확인 및 복사 → props 조작 기반 라이브 프리뷰 테스트**까지 한 흐름으로 경험할 수 있게 구성되어 있습니다.

---

## 1. 프로젝트 목적

직접 만든 UI 컴포넌트들을 한곳에 모아:

- 어떤 컴포넌트가 있는지 빠르게 탐색하고
- 각 컴포넌트의 설명과 태그를 확인하고
- TypeScript / JavaScript 코드를 확인하고 복사하고
- props 값을 직접 바꿔가며 렌더링 결과를 테스트할 수 있도록

구성한 개인 컴포넌트 아카이브 프로젝트입니다.

---

## 2. 기술 스택

### Core
- React 19
- TypeScript
- Vite
- React Router DOM

### UI / Styling
- Tailwind CSS v4
- Lucide React
- @fontsource/inter

### Code Preview / Utilities
- react-syntax-highlighter
- copy-to-clipboard

### Tooling
- ESLint
- Prettier
- vite-plugin-pwa

---

## 3. 현재 구현된 주요 기능

### 1) 랜딩 페이지
- 프로젝트 소개용 히어로 섹션
- 주요 특징 요약 카드
- 컴포넌트 목록 페이지로 이동 가능한 CTA 버튼

### 2) 컴포넌트 목록 페이지
- 등록된 모든 컴포넌트 카드 조회
- `ui / blocks / templates` 카테고리 기준 탐색
- 이름 / 설명 기준 검색
- 태그 기반 필터링
- 결과 없음 상태 UI 제공

### 3) 컴포넌트 상세 페이지
- 컴포넌트 이름, 설명, 태그 표시
- TypeScript / JavaScript 코드 탭 제공
- 코드 복사 기능 제공
- example 데이터 기반 라이브 프리뷰 제공

### 4) props 동적 테스트 플레이그라운드
- example별 렌더링 결과 확인
- `propControls` 설정에 따라 입력 UI 자동 생성
- 미리보기 전용 다크 모드 토글
- 데스크탑 / 모바일 폭 전환 시뮬레이터
- 현재 지원 컨트롤 타입:
  - `string`
  - `boolean`
  - `select`
  - `number`

### 5) 갤러리 내부 Dogfooding
- 코드 복사 시 실제 `Toast` 컴포넌트를 사용하는 알림 노출

### 6) 자동 등록 구조
- `import.meta.glob`으로 `src/data/components/*/*/index.ts`를 자동 수집
- 중앙 파일에서 수동 배열을 계속 늘리지 않아도 되도록 개선됨

---

## 4. 현재 포함된 컴포넌트

현재 `src/data/components/*/*/index.ts` 기준 등록된 컴포넌트는 총 **10개**입니다.

- Button
- Input
- Card
- Badge
- List
- Toggle
- Avatar
- Toast
- Progress
- Modal

---

## 5. 라우팅 구조

현재 라우팅은 `src/main.tsx`에서 `createBrowserRouter`로 구성되어 있습니다.

```txt
/
├─ /                  -> Home
├─ /components        -> Components
└─ /components/:id    -> ComponentDetail
```

---

## 6. 프로젝트 구조

```txt
src/
├─ components/
│  ├─ common/                 # Header, Footer, CodeTabs, CodeBlock, ToastProvider 등 공통 UI
│  ├─ preview/                # PreviewShell 등 미리보기 전용 shell
│  ├─ ComponentCard.tsx       # 목록 카드
│  ├─ ComponentList.tsx       # 목록 그리드
│  ├─ ComponentDetail.tsx     # 상세 페이지 화면
│  ├─ Examples.tsx            # example 목록 렌더링
│  └─ Example.tsx             # 단일 example + props playground
│
├─ data/
│  ├─ components/             # category별 컴포넌트 등록 단위
│  │  ├─ ui/
│  │  │  ├─ button/
│  │  │  │  ├─ CustomButton.tsx
│  │  │  │  ├─ examples.tsx
│  │  │  │  ├─ meta.ts
│  │  │  │  └─ index.ts
│  │  ├─ blocks/
│  │  └─ templates/
│  │  └─ ...
│  └─ componentsData.ts       # import.meta.glob 기반 중앙 registry
│
├─ pages/
│  ├─ Home.tsx
│  ├─ Components.tsx
│  └─ NotFound.tsx
│
├─ types/
│  └─ component.types.ts      # ComponentInfo, PropControl 등 타입 정의
│
├─ App.tsx
├─ main.tsx
└─ styles.css
```

---

## 7. 데이터 구조와 등록 방식

이 프로젝트의 핵심은 **컴포넌트별 폴더 단위 등록 구조**입니다.

각 컴포넌트는 보통 아래 파일들로 구성됩니다.

```txt
src/data/components/[category]/[component-name]/
├─ CustomXxx.tsx     # 실제 컴포넌트 구현
├─ examples.tsx      # 미리보기용 example props 배열
├─ meta.ts           # 이름, 설명, category, 태그, 썸네일, propControls 등 메타데이터
└─ index.ts          # 최종 ComponentInfo 형태로 export
```

예를 들어 `index.ts`는 대략 이런 역할을 합니다.

- `meta.ts` 가져오기
- `?raw` / `?jsx-raw`를 통해 코드 문자열 가져오기
- `examples.tsx` 가져오기
- 실제 React 컴포넌트 참조 연결
- 최종 `ComponentInfo<T>` 객체를 `default export`

---

## 8. 중앙 registry 구조

`src/data/componentsData.ts`는 현재 프로젝트의 중앙 registry 역할을 합니다.

### 현재 방식
- `import.meta.glob("./components/*/*/index.ts", { eager: true })`
- `ui / blocks / templates` 아래 각 컴포넌트 폴더의 `default export`를 자동 수집
- 수집된 값을 `componentsData` 배열로 변환
- `Component`가 있는 항목만 추려 `componentMap` 생성

즉, 예전처럼 중앙 파일에 `componentsData`, `componentMap`, 타입 맵, union 타입을 모두 수동으로 늘리는 구조에서 벗어나,
**카테고리 폴더 아래의 `index.ts`만 잘 작성하면 registry에 자동으로 포함되는 방향**으로 정리된 상태입니다.

---

## 9. 상세 페이지 렌더링 흐름

### 1) 상세 데이터 조회
`ComponentDetail.tsx`

- URL 파라미터에서 `id`를 읽음
- `componentsData.find((c) => c.id === id)`로 대상 컴포넌트를 찾음
- 없으면 `/not-found`로 리다이렉트

### 2) 화면 구성
찾은 `detail` 객체를 기준으로 아래 UI를 렌더링합니다.

- 제목 / 설명 / 태그
- `Examples` : 미리보기 및 props 테스트 영역
- `CodeTabs` : TypeScript / JavaScript 코드 표시 영역

---

## 10. 플레이그라운드 동작 방식

`Example.tsx`가 실제 플레이그라운드 로직을 담당합니다.

### 동작 순서
1. 현재 컴포넌트의 실제 React 컴포넌트를 가져옴
2. 선택된 example 데이터를 초기 props 상태로 설정
3. PreviewShell에서 라이트/다크, 디바이스 폭(Desktop/Mobile)을 전환
4. `propControls`를 기준으로 입력 UI를 생성
5. 값이 바뀌면 `propsState`를 갱신
6. 변경된 props로 컴포넌트를 다시 렌더링

### 예시
`meta.ts`에서 아래처럼 컨트롤 타입을 정의할 수 있습니다.

```ts
propControls: {
  placeholder: { type: "string" },
  type: { type: "select", options: ["text", "password", "email"] },
  disabled: { type: "boolean" },
}
```

이 설정을 바탕으로 상세 페이지에서 자동으로 입력창 / 셀렉트 / 토글 UI가 렌더링됩니다.

또한 현재 PreviewShell에서는:
- 다크/라이트 미리보기 토글
- 데스크탑/모바일 폭 시뮬레이터

를 컴포넌트 단위로 바로 테스트할 수 있습니다.

---

## 11. 코드 보기 구조

### TypeScript 코드
- `CustomXxx.tsx?raw`로 문자열을 가져와 표시

### JavaScript 코드
- `CustomXxx.tsx?jsx-raw`를 통해 변환된 코드를 문자열로 가져와 표시

이를 위해 `vite.config.ts`에 커스텀 `rawJsPlugin()`이 들어 있습니다.

이 플러그인은:
- `?jsx-raw` 요청을 감지하고
- 파일 내용을 읽은 뒤
- esbuild로 변환하고
- 결과를 문자열로 export 합니다.

덕분에 상세 페이지에서 TypeScript / JavaScript 탭을 나눠 보여줄 수 있습니다.

추가로 코드 복사 버튼은 갤러리 내부의 `ToastProvider`와 연결되어 있어,
복사 시 실제 `Toast` 컴포넌트를 사용한 알림이 우측 하단에 나타납니다.

---

## 12. 타입 구조

핵심 타입은 `src/types/component.types.ts`에 있습니다.

### `ComponentInfo<T>`
각 컴포넌트를 문서화/렌더링하기 위한 공통 타입입니다.

주요 필드:
- `id`
- `name`
- `category`
- `description`
- `tags`
- `aliases`
- `image`
- `updatedAt`
- `code`
- `codeJs`
- `examples`
- `propControls`
- `Component`

### `PropControl`
플레이그라운드에서 어떤 입력 UI를 만들지 정의하는 타입입니다.

---

## 13. 실행 방법

### 1) 설치
```bash
npm install
```

### 2) 개발 서버 실행
```bash
npm run dev
```

---

## 14. 컴포넌트 추가 방법

새 컴포넌트를 추가할 때는 아래 흐름으로 작업하면 됩니다.

### 1) 새 폴더 생성
```txt
src/data/components/ui/my-component/
```

### 2) 파일 구성
- `CustomMyComponent.tsx`
- `examples.tsx`
- `meta.ts`
- `index.ts`

### 3) `index.ts`에서 `ComponentInfo` 형태로 export
`default export`만 맞춰주면 `componentsData.ts`의 `import.meta.glob`이 자동으로 수집합니다.

향후 규모가 커지면:
- `ui` : 작은 기본 컴포넌트
- `blocks` : 조합형 섹션/패턴
- `templates` : 페이지 단위 화면

처럼 분류해서 추가하면 됩니다.


---

## 15. 현재 프로젝트 상태 요약

현재 프로젝트는 다음 단계까지 와 있습니다.

- 컴포넌트 목록/상세/코드/프리뷰 기본 흐름 완성
- 검색 및 태그 필터 기능 추가 완료
- 카테고리(`ui / blocks / templates`) 기반 자동 등록 구조 도입
- props 기반 인터랙티브 테스트 UI 적용
- 다크 모드 / 반응형 preview shell 적용
- Toast 컴포넌트 dogfooding 적용
- TypeScript / JavaScript 코드 동시 제공 구조 반영

---

## 16. 앞으로 개선하면 좋은 점

현재 구조 기준으로 다음 리팩토링 포인트가 보입니다.

### 1) `ComponentInfo<T = any>` 정교화
- 현재 `Examples.tsx`, `Example.tsx` 일부에서 `any` 사용 중
- 플레이그라운드 타입 안정성을 더 높일 여지가 있음

### 2) 플레이그라운드 컨트롤 고도화
- 현재는 `string`, `boolean`, `select` 중심
- 추후 `number`, `color`, `textarea`, `radio`, `children` 등 확장 가능

### 3) 컴포넌트 상세 페이지 분리
- 현재 `ComponentDetail.tsx`가 상세 데이터 선택 + 화면 조립을 함께 담당
- 섹션 단위 컴포넌트 분리 여지 있음

### 4) 검색 UX 보강
- 현재 목록 페이지 내부 검색은 구현됨
- 헤더 검색과 연동하거나 정렬/카테고리 기능 추가 가능

### 5) 문서 품질 향상
- 각 컴포넌트별 사용 가이드, props 표, 사용 시 주의사항 등을 추가하면 더 좋은 문서 사이트가 될 수 있음

---
