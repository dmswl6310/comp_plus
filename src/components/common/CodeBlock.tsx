import copy from "copy-to-clipboard";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import * as ts from "typescript";

type CodeBlockProps = {
  code: string;
  language?: string;
};

export function transpileToJS(tsCode: string): string {
  const result = ts.transpileModule(tsCode, {
    compilerOptions: {
      target: ts.ScriptTarget.ESNext,
      module: ts.ModuleKind.ESNext,
    },
  });

  return result.outputText;
}

const CodeBlock = ({ code, language = "javascript" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <button onClick={handleCopy}>{copied ? "복사됨" : "복사"}</button>;
      <SyntaxHighlighter
        language="typescript"
        style={oneLight}
        wrapLines
        wrapLongLines
        customStyle={{
          borderRadius: "8px",
          padding: "1rem",
          fontSize: "0.875rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={oneLight}
        wrapLines
        wrapLongLines
        customStyle={{
          borderRadius: "8px",
          padding: "1rem",
          fontSize: "0.875rem",
        }}
      >
        {transpileToJS(code)}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
