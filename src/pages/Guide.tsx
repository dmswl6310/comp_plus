import PageTitle from "@/components/common/PageTitle";
import { useSEO } from "@/hooks/useSEO";
import { Terminal, Copy, Download, CheckCircle2 } from "lucide-react";

const Guide = () => {
  useSEO({
    title: "사용 가이드",
    description: "Uikki 컴포넌트를 프로젝트에 설치하고 사용하는 방법을 안내합니다.",
  });

  return (
    <div className="animate-fade-up max-w-4xl mx-auto">
      <PageTitle 
        title="도움말 및 가이드" 
        description="Uikki 갤러리의 컴포넌트를 내 프로젝트에 가장 빠르고 우아하게 적용하는 방법을 알아보세요."
      />

      <div className="flex flex-col gap-12 mt-8">
        {/* Section 1: Introduction */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Download size={24} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100">1. CLI로 한 번에 설치하기 (추천)</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            shadcn/ui의 철학을 본받아, 무거운 npm 패키지를 설치할 필요 없이 <strong>원하는 컴포넌트의 소스 코드만 내 프로젝트로 쏙 빼오는</strong> CLI 도구를 제공합니다. 터미널에 아래 명령어만 치면 끝납니다!
          </p>
          
          <div className="bg-gray-900 rounded-xl p-5 mt-2 relative group flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3 text-gray-300 font-mono text-sm sm:text-base">
              <Terminal size={18} className="text-gray-500" />
              <span>
                <span className="text-blue-400">npx</span> uikki add <span className="text-emerald-400">ui/button</span>
              </span>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-5 mt-2 text-sm text-blue-800 dark:text-blue-300">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <CheckCircle2 size={16} /> CLI가 하는 일
            </h4>
            <ul className="list-disc list-inside space-y-1 ml-1 opacity-90">
              <li>Uikki 깃허브에서 원본 코드를 실시간으로 다운로드합니다.</li>
              <li>내 프로젝트의 <code className="bg-blue-100 dark:bg-blue-800/50 px-1.5 py-0.5 rounded">src/components/ui</code> 폴더 안에 파일을 예쁘게 만들어줍니다.</li>
              <li>바로 내 코드처럼 수정해서 쓸 수 있습니다!</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Manual Copy */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Copy size={24} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100">2. 직접 복사해서 사용하기</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            CLI를 쓰고 싶지 않거나, 특정 로직만 조금 참고하고 싶다면 화면에서 직접 코드를 복사하셔도 됩니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            <div className="border border-gray-200 dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-900 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-800 mb-4 text-gray-600 dark:text-gray-300 font-bold">1</div>
              <h3 className="font-semibold text-gray-900 dark:text-slate-100 mb-2">컴포넌트 탐색 및 테스트</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                원하는 컴포넌트를 찾아 클릭합니다. 놀이터(Playground) 화면에서 Props 옵션을 이것저것 바꿔보며 내 입맛에 맞는지 테스트합니다.
              </p>
            </div>
            <div className="border border-gray-200 dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-900 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-slate-800 mb-4 text-gray-600 dark:text-gray-300 font-bold">2</div>
              <h3 className="font-semibold text-gray-900 dark:text-slate-100 mb-2">코드 복사 탭 클릭</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                화면 하단에 있는 <strong>[Code] 탭</strong>을 클릭합니다. 우측 상단의 복사 버튼을 눌러 소스코드를 전체 복사한 뒤, 내 프로젝트에 붙여넣습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: FAQ */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 border-b border-gray-200 dark:border-slate-800 pb-4">자주 묻는 질문 (FAQ)</h2>
          
          <div className="space-y-6 mt-4">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-slate-100 mb-2">Q. Tailwind CSS가 꼭 필요한가요?</h3>
              <p className="text-gray-600 dark:text-gray-400">네, Uikki의 모든 컴포넌트는 Tailwind CSS 클래스 기반으로 스타일링되어 있습니다. 프로젝트에 Tailwind CSS가 설치되어 있어야 정상적으로 예쁘게 보입니다.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-slate-100 mb-2">Q. 다른 라이브러리(Framer Motion 등)를 설치해야 하나요?</h3>
              <p className="text-gray-600 dark:text-gray-400">아니요! Uikki의 핵심 철학은 <strong>Zero-dependency(무의존성)</strong> 입니다. 순수 React 상태와 CSS만을 이용하여 모든 애니메이션과 로직을 구현했으므로, 복사하자마자 무겁지 않게 바로 작동합니다.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-slate-100 mb-2">Q. 다크 모드를 지원하나요?</h3>
              <p className="text-gray-600 dark:text-gray-400">네, 완벽하게 지원합니다! 컴포넌트 코드 내부에 <code className="text-blue-500">dark:bg-slate-900</code> 와 같은 다크 모드용 Tailwind 클래스가 이미 모두 세팅되어 있습니다.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Guide;
