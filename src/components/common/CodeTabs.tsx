import { useState } from "react";
import CodeBlock from "./CodeBlock";

type TabType = "typescript" | "javascript" | "html";

const CodeTabs = ({ code, codeJs, htmlCode }: { code: string; codeJs?: string; htmlCode?: string }) => {
  const [tab, setTab] = useState<TabType>("typescript");

  const codeString = tab === "html" && htmlCode ? htmlCode : tab === "javascript" && codeJs ? codeJs : code;

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex gap-4 border-b border-gray-100 px-4 pt-3 overflow-x-auto">
        <button 
          onClick={() => setTab("typescript")}
          className={`pb-3 px-1 text-sm font-medium transition-all relative whitespace-nowrap ${tab === 'typescript' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
        >
          TypeScript
          {tab === 'typescript' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-t-full"></div>}
        </button>
        {codeJs && (
          <button 
            onClick={() => setTab("javascript")}
            className={`pb-3 px-1 text-sm font-medium transition-all relative whitespace-nowrap ${tab === 'javascript' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
          >
            JavaScript
            {tab === 'javascript' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-t-full"></div>}
          </button>
        )}
        {htmlCode && (
          <button 
            onClick={() => setTab("html")}
            className={`pb-3 px-1 text-sm font-medium transition-all relative whitespace-nowrap ${tab === 'html' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
          >
            HTML (Tailwind)
            {tab === 'html' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-t-full"></div>}
          </button>
        )}
      </div>
      <div className="relative">
         <CodeBlock code={codeString} language={tab} />
      </div>
    </div>
  );
};

export default CodeTabs;
