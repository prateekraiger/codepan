import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

const customStyle = {
  background: "transparent",
  fontSize: 15,
  padding: 0,
  margin: 0,
  fontFamily:
    'Fira Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

const customPrismOverrides = `
  .glass-code .token.tag, .glass-code .token.keyword { color: #60a5fa !important; } /* Tailwind blue-400 */
  .glass-code .token.punctuation { color: #94a3b8 !important; } /* Tailwind slate-400 */
`;

const CodeCard = ({ code, filename = "Component.jsx", language = "jsx" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-blue-200/10 dark:from-white/10 dark:via-slate-900/30 dark:to-blue-900/10 backdrop-blur-xl shadow-2xl border border-blue-900/40 border-t border-gray-700/60 max-w-full w-full sm:w-[95vw] md:w-[700px] mx-auto my-6 overflow-hidden transition-transform hover:scale-[1.015] glass-card p-2 sm:p-4">
      <style>{customPrismOverrides}</style>
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800/80 border-b border-slate-700/60 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-red-500/40 mr-1" />
          <span className="inline-block w-2 h-2 rounded-full bg-yellow-400/40 mr-1" />
          <span className="inline-block w-2 h-2 rounded-full bg-green-400/40 mr-2" />
          <span className="text-xs text-slate-300 font-mono select-none">
            {filename}
          </span>
        </div>
        <button
          className="relative flex items-center justify-center p-2 text-slate-300 bg-slate-700/80 rounded hover:bg-slate-600/80 transition ml-2 group"
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? (
            <Check size={18} className="text-green-400 transition-all" />
          ) : (
            <Copy size={18} className="transition-all" />
          )}
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-slate-800/90 text-slate-200 px-2 py-1 rounded shadow pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {copied ? "Copied!" : "Copy to clipboard"}
          </span>
        </button>
      </div>
      {/* Code Block */}
      <div className="px-0 pb-6 pt-2 bg-slate-950/80 overflow-x-auto rounded-b-xl border-t border-slate-800/60 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            ...customStyle,
            whiteSpace: "pre",
            wordBreak: "break-word",
            overflowX: "auto",
            borderRadius: "0.75rem",
            padding: "1.5rem 1.25rem 1.5rem 1.25rem",
            background: "#0f172a99",
            minWidth: 0,
            fontSize: 15,
            boxShadow: "0 2px 16px 0 rgba(30,41,59,0.15)",
            border: "1px solid #33415599",
          }}
          wrapLongLines={true}
          showLineNumbers={false}
          PreTag="div"
        >
          {String(code)}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeCard;
