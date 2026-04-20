import copy from "copy-to-clipboard";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

type CodeBlockProps = {
  code: string;
  language?: string;
};

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group text-sm">
      <div className="absolute right-3 top-3 z-10">
        <button 
          onClick={handleCopy}
          className="flex h-8 w-8 items-center justify-center rounded-md bg-white/80 border border-gray-200 text-gray-500 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/50 opacity-0 group-hover:opacity-100"
          title="코드 복사"
        >
          {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneLight}
        wrapLines
        wrapLongLines
        customStyle={{
          margin: 0,
          padding: "1.25rem",
          fontSize: "0.875rem",
          backgroundColor: "#ffffff",
          fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
