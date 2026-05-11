import copy from "copy-to-clipboard";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check, Download } from "lucide-react";
import { useToast } from "./ToastProvider";
import { useTheme } from "./ThemeProvider";

type CodeBlockProps = {
  code: string;
  language?: string;
};

const CodeBlock = ({ code, language }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const { theme } = useTheme();

  const handleCopy = () => {
    copy(code);
    setCopied(true);
    toast("✅ 클립보드에 복사되었습니다.", "success");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const extension = language === "html" ? "html" : language === "javascript" ? "jsx" : "tsx";
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Component.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast("📦 소스 코드가 다운로드되었습니다.", "success");
  };

  const isDarkMode = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div className="relative group text-sm w-full overflow-hidden">
      <div className="absolute right-3 top-3 z-10 flex gap-2">
        <button 
          onClick={handleDownload}
          className="flex h-8 w-8 items-center justify-center rounded-md bg-white/80 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 text-gray-500 dark:text-gray-400 shadow-sm backdrop-blur-sm transition-all hover:bg-white dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 opacity-0 group-hover:opacity-100"
          title="소스 코드 다운로드"
        >
          <Download size={14} />
        </button>
        <button 
          onClick={handleCopy}
          className="flex h-8 w-8 items-center justify-center rounded-md bg-white/80 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-700 text-gray-500 dark:text-gray-400 shadow-sm backdrop-blur-sm transition-all hover:bg-white dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 opacity-0 group-hover:opacity-100"
          title="코드 복사"
        >
          {copied ? <Check size={14} className="text-green-600 dark:text-green-400" /> : <Copy size={14} />}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={isDarkMode ? oneDark : oneLight}
        wrapLines
        wrapLongLines
        customStyle={{
          margin: 0,
          padding: "1.25rem",
          fontSize: "0.875rem",
          backgroundColor: isDarkMode ? "#0f172a" : "#ffffff",
          fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
