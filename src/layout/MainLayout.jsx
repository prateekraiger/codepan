import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Button from "../context/Buttons/Button";
import CodeCard from "../components/CodeCard";
import ThanosButton from "../context/Buttons/ThanosButton";

const COMPONENTS = {
  button: {
    name: "Button",
    preview: <Button>Click Me</Button>,
    code: `<button className=\"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-200\">Click Me</button>`,
  },
  thanos: {
    name: "Thanos Button",
    preview: <ThanosButton />,
    code: `import { Trash2 } from "lucide-react";
import { ThanosSnapEffect } from "../../components/thanos-snap-effect";

export default function ThanosButton() {
  return (
    <div className="text-white">
      <ThanosSnapEffect>
        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-9 px-4 py-2 gap-2">
          <Trash2 size={16} strokeWidth={2} />
          Click to delete
        </button>
      </ThanosSnapEffect>
    </div>
  );
}`,
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
    <div className="flex flex-col min-h-screen">
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
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
