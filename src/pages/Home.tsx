import { Link } from "react-router-dom";
import { ArrowRight, LayoutTemplate, Zap, Palette } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col gap-24 py-12 lg:py-24 animate-fade-up">
      <section className="flex flex-col items-center text-center max-w-3xl mx-auto gap-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          v1.0 업데이트 완료
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight break-keep">
          당신의 UI 설계를 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">더 빠르고 완벽하게</span>
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 font-light max-w-2xl px-4 break-keep">
          UI 컴포넌트를 위한 전용 플레이그라운드입니다. 라이브 프리뷰와 깔끔한 코드 조각으로 React 컴포넌트를 탐색하고 즉시 프로젝트에 적용해 보세요.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto px-4">
          <Link 
            to="/components" 
            className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5"
          >
            컴포넌트 둘러보기
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 transition-all hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5"
          >
            Github
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4 break-keep">
        {[
          {
            icon: LayoutTemplate,
            title: "바로 사용 가능",
            desc: "별도의 셋업 없이 실무에 바로 투입할 수 있도록 다듬어진 완성도 높은 컴포넌트들을 제공합니다."
          },
          {
            icon: Zap,
            title: "라이브 프리뷰",
            desc: "코드를 복사하기 전, 샌드박스에서 컴포넌트의 Props 값들을 직접 변경하며 상호작용 결과를 확인해보세요."
          },
          {
            icon: Palette,
            title: "깔끔한 디자인",
            desc: "모던한 디자인 원칙을 바탕으로 화이트 톤의 밝고 직관적인 UI 경험(UX)을 지향합니다."
          }
        ].map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <feature.icon size={24} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
