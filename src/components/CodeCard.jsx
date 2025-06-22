import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeCard = ({ code, filename = "Component.jsx", language = "jsx" }) => (
  <div className="relative rounded-lg bg-slate-900 p-2">
    <div className="relative flex text-center">
      <div className="flex pl-3.5 pt-3">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20"
        >
          <circle r={12} cy={12} cx={12} />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20"
        >
          <circle r={12} cy={12} cx={12} />
        </svg>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20"
        >
          <circle r={12} cy={12} cx={12} />
        </svg>
      </div>
      <span className="absolute inset-x-0 top-2 text-xs text-slate-500">
        {filename}
      </span>
    </div>
    <div className="mt-5 space-y-1.5 px-5 pb-10">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          background: "transparent",
          fontSize: 13,
          padding: 0,
          margin: 0,
        }}
        wrapLongLines
        showLineNumbers={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  </div>
);

export default CodeCard;
