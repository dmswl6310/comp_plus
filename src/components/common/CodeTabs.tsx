import { useMemo, useState } from "react";
import CodeBlock from "./CodeBlock";
import ts from "typescript";

type TabType = "typescript" | "javascript";

function transpileToJS(tsCode: string): string {
  const result = ts.transpileModule(tsCode, {
    compilerOptions: {
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.ESNext,
      jsx: ts.JsxEmit.Preserve,
    },
  });

  return result.outputText;
}

const CodeTabs = ({ code }: { code: string }) => {
  const [tab, setTab] = useState<TabType>("typescript");

  const jsCode = useMemo(() => transpileToJS(code), [code]);
  const codeString = tab === "javascript" ? jsCode : code;

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex gap-4 border-b border-gray-100 px-4 pt-3">
        <button 
          onClick={() => setTab("typescript")}
          className={`pb-3 px-1 text-sm font-medium transition-all relative ${tab === 'typescript' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
        >
          TypeScript
          {tab === 'typescript' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-t-full"></div>}
        </button>
        <button 
          onClick={() => setTab("javascript")}
          className={`pb-3 px-1 text-sm font-medium transition-all relative ${tab === 'javascript' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
        >
          JavaScript
          {tab === 'javascript' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-t-full"></div>}
        </button>
      </div>
      <div className="relative">
         <CodeBlock code={codeString} language={tab} />
      </div>
    </div>
  );
};

export default CodeTabs;
