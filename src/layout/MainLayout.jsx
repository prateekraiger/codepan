import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Button from "../components/Button";
import CodeCard from "../components/CodeCard";

const COMPONENTS = {
  button: {
    name: "Button",
    preview: <Button>Click Me</Button>,
    code: `<button className=\"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200\">Click Me</button>`,
  },
  // Add more components here
};

const MainLayout = () => {
  const [selected, setSelected] = useState("button");
  const [tab, setTab] = useState("preview");
  const comp = COMPONENTS[selected];

  const handleCopy = () => {
    navigator.clipboard.writeText(comp.code);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="flex flex-1 pt-16">
        <Sidebar selected={selected} onSelect={setSelected} />
        <main className="flex-1 ml-0 md:ml-64 p-6 transition-all">
          <h1 className="text-3xl font-bold mb-4">{comp.name}</h1>
          <div className="mb-4 flex gap-2">
            <button
              className={`px-3 py-1 rounded ${
                tab === "preview" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setTab("preview")}
            >
              Preview
            </button>
            <button
              className={`px-3 py-1 rounded ${
                tab === "code" ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setTab("code")}
            >
              Code
            </button>
          </div>
          {tab === "preview" ? (
            <div className="p-8 border rounded bg-gray-50 flex justify-center items-center min-h-[120px]">
              {comp.preview}
            </div>
          ) : (
            <div className="relative">
              <CodeCard
                code={comp.code}
                filename={`${comp.name}.jsx`}
                language="jsx"
              />
              <button
                className="absolute top-2 right-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs"
                onClick={handleCopy}
              >
                Copy
              </button>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
