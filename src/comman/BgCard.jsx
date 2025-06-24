// BgCards.jsx
import React from "react";

const BgCards = ({ title, preview, onPreview, onCode }) => {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full">
      <div className="flex-grow h-48 relative">{preview}</div>
      <div className="p-4 bg-slate-900/50">
        <h3 className="text-slate-200 text-lg font-bold mb-3 text-center">
          {title}
        </h3>
        <div className="flex gap-3 justify-center">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 font-semibold transition-colors w-full"
            onClick={onPreview}
          >
            Preview
          </button>
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600 font-semibold transition-colors w-full"
            onClick={onCode}
          >
            Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default BgCards;
