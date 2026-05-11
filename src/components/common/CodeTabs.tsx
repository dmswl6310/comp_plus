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
    <div className="flex flex-col h-full bg-white dark:bg-slate-900">
      <div className="flex justify-between items-center border-b border-gray-100 dark:border-slate-800 pr-4">
        <div className="flex gap-4 px-4 pt-3 overflow-x-auto">
          <button 
            onClick={() => setTab("typescript")}
            className={`pb-3 px-1 text-sm font-medium transition-all relative whitespace-nowrap ${tab === 'typescript' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'}`}
          >
            React (TS)
            {tab === 'typescript' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-gray-100 rounded-t-full"></div>}
          </button>
          {codeJs && (
            <button 
              onClick={() => setTab("javascript")}
              className={`pb-3 px-1 text-sm font-medium transition-all relative whitespace-nowrap ${tab === 'javascript' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'}`}
            >
              React (JS)
              {tab === 'javascript' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-gray-100 rounded-t-full"></div>}
            </button>
          )}
          {htmlCode && (
            <button 
              onClick={() => setTab("html")}
              className={`pb-3 px-1 text-sm font-medium transition-all relative whitespace-nowrap ${tab === 'html' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300'}`}
            >
              HTML
              {tab === 'html' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 dark:bg-gray-100 rounded-t-full"></div>}
            </button>
          )}
        </div>
        <button
          onClick={() => setHideStyles(!hideStyles)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${hideStyles ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50' : 'bg-gray-50 dark:bg-slate-800 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-gray-700 dark:hover:text-gray-200'}`}
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
