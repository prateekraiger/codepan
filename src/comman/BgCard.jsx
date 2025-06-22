// BgCards.jsx
import React from "react";

const BgCards = ({
  title,
  description,
  preview,
  onPreview,
  onCode,
  children,
}) => {
  return (
    <div className="relative w-96 h-64 bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl border border-white/20 flex flex-col">
      <div className="w-full h-32 flex items-center justify-center bg-white">
        {preview}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-gray-800 text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-2 flex-1">{description}</p>
        {children}
        <div className="mt-2 flex gap-2">
          <button
            className="px-4 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 font-semibold"
            onClick={onPreview}
          >
            Preview
          </button>
          <button
            className="px-4 py-1 bg-gray-700 text-white rounded text-xs hover:bg-gray-900 font-semibold"
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
