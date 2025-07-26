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
      // jsx: ts.JsxEmit.React,
    },
  });

  return result.outputText;
}

const TabContainer = ({ code }: { code: string }) => {
  const [tab, setTab] = useState<TabType>("typescript");

  const codeString = useMemo(() => {
    const result = tab == "javascript" ? transpileToJS(code) : code;
    return result;
  }, [code, tab]);

  return (
    <>
      <div className="mb-2 flex gap-2 border-b">
        <button onClick={() => setTab("typescript")}>Typescript</button>
        <button onClick={() => setTab("javascript")}>Javascript</button>
      </div>
      <CodeBlock code={codeString} language={tab} />
    </>
  );
};

export default TabContainer;
