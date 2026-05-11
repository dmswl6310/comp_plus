import { useState } from "react";
import CodeBlock from "./CodeBlock";
import { EyeOff, Eye } from "lucide-react";

type TabType = "typescript" | "javascript" | "html";

const processCode = (rawCode: string, isHtml: boolean, hide: boolean) => {
  if (!hide || !rawCode) return rawCode;
  let processed = rawCode;
  if (isHtml) {
    processed = processed.replace(/\s+class="[^"]*"/g, '');
  } else {
    processed = processed.replace(/\s+className="[^"]*"/g, '');
    processed = processed.replace(/\s+className=\{[^}]*\}/g, '');
  }
  return processed;
};

const CodeTabs = ({ code, codeJs, htmlCode }: { code: string; codeJs?: string; htmlCode?: string }) => {
  const [tab, setTab] = useState<TabType>("typescript");
  const [hideStyles, setHideStyles] = useState(false);

  const rawCodeString = tab === "html" && htmlCode ? htmlCode : tab === "javascript" && codeJs ? codeJs : code;
  const displayCodeString = processCode(rawCodeString, tab === "html", hideStyles);

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex justify-between items-center border-b border-gray-100 pr-4">
        <div className="flex gap-4 px-4 pt-3 overflow-x-auto">
          <button 
            onClick={() => setTab("typescript")}
            className={`pb-3 px-1 text-sm font-medium transition-all relative whitespace-nowrap ${tab === 'typescript' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
          >
            React (TS)
            {tab === 'typescript' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-t-full"></div>}
          </button>
          {codeJs && (
            <button 
              onClick={() => setTab("javascript")}
              className={`pb-3 px-1 text-sm font-medium transition-all relative whitespace-nowrap ${tab === 'javascript' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
            >
              React (JS)
              {tab === 'javascript' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-t-full"></div>}
            </button>
          )}
          {htmlCode && (
            <button 
              onClick={() => setTab("html")}
              className={`pb-3 px-1 text-sm font-medium transition-all relative whitespace-nowrap ${tab === 'html' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
            >
              HTML
              {tab === 'html' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-t-full"></div>}
            </button>
          )}
        </div>
        <button
          onClick={() => setHideStyles(!hideStyles)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${hideStyles ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-gray-50 text-gray-500 border border-gray-100 hover:bg-gray-100 hover:text-gray-700'}`}
          title={hideStyles ? "스타일 표시하기" : "스타일 숨기고 로직만 보기"}
        >
          {hideStyles ? <Eye size={14} /> : <EyeOff size={14} />}
          {hideStyles ? "스타일 표시" : "스타일 숨기기"}
        </button>
      </div>
      <div className="relative">
         <CodeBlock code={displayCodeString} language={tab} />
      </div>
    </div>
  );
};

export default CodeTabs;
