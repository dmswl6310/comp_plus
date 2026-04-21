import { Link, Navigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { componentsData } from "@/data/componentsData";
import Examples from "./Examples";
import CodeTabs from "./common/CodeTabs";

import { renderToStaticMarkup } from "react-dom/server";

// 간단한 HTML 포매터 (태그 사이에 줄바꿈과 들여쓰기 추가)
const formatHTML = (html: string) => {
  let formatted = "";
  let indent = "";
  
  html.split(/>\s*</).forEach((element) => {
    if (element.match(/^\/\w/)) {
      indent = indent.substring(2);
    }
    
    formatted += indent + "<" + element + ">\n";
    
    // input, img, br, hr 등의 닫는 태그가 없는 태그는 들여쓰기를 증가시키지 않음
    if (element.match(/^<?\w[^>]*[^\/]$/) && !element.startsWith("input") && !element.startsWith("img") && !element.startsWith("br") && !element.startsWith("hr") && !element.startsWith("path") && !element.startsWith("circle") && !element.startsWith("line") && !element.startsWith("polyline")) {
      indent += "  ";
    }
  });
  
  return formatted.substring(1, formatted.length - 2).trim();
};

const ComponentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const detail = componentsData.find((c) => c.id === id);
  
  if (!detail) return <Navigate to="/not-found" replace />;

  const htmlCode = detail.Component && detail.examples?.length > 0
    ? formatHTML(renderToStaticMarkup(<detail.Component {...detail.examples[0]} />))
    : "";

  return (
    <div className="animate-fade-up max-w-6xl mx-auto">
      <div className="mb-8">
        <Link 
          to="/components" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors bg-white hover:bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm mb-6"
        >
          <ChevronLeft size={16} className="mr-1" />
          목록으로 돌아가기
        </Link>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">{detail.name}</h1>
        <p className="mt-4 text-lg text-gray-500 leading-relaxed max-w-3xl">{detail.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {detail.tags?.map((tag) => (
            <span key={tag} className="rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 mb-20">
        <div className="lg:col-span-7 space-y-10">
          <section>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-6 w-1.5 bg-blue-600 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">미리보기 및 테스트</h2>
            </div>
            <Examples componentInfo={detail} examples={detail.examples} />
          </section>
        </div>
        
        <div className="lg:col-span-5">
          <section className="sticky top-8 lg:mt-0 mt-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-6 w-1.5 bg-gray-900 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-900">소스 코드</h2>
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:border-gray-300 transition-colors">
              <CodeTabs code={detail.code} codeJs={detail.codeJs} htmlCode={htmlCode} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;
