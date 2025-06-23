import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import Button from "../context/Buttons/Button";
import CodeCard from "../components/CodeCard";
import ThanosButton from "../context/Buttons/ThanosButton";
import Background from "../backgrounds/Background";

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
    <div className=\"text-white\">\n      <ThanosSnapEffect>\n        <button className=\"inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm shadow-black/5 hover:bg-primary/90 h-9 px-4 py-2 gap-2\">\n          <Trash2 size={16} strokeWidth={2} />\n          Click to delete\n        </button>\n      </ThanosSnapEffect>\n    </div>\n  );\n}`,
  },
  // Add more components here
};

const MainLayout = () => {
  const [selected, setSelected] = useState("button");
  const [tab, setTab] = useState("preview");
  const comp = COMPONENTS[selected];

  return (
    <Background>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 pt-16">
          <Sidebar selected={selected} onSelect={setSelected} />
          <main className="flex-1 ml-0 md:ml-64 p-6 transition-all">
            <h1 className="text-3xl font-bold mb-4 text-slate-100">
              {comp.name}
            </h1>
            <div className="mb-4 flex gap-2">
              <button
                className={`px-3 py-1 rounded ${
                  tab === "preview"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-slate-200"
                }`}
                onClick={() => setTab("preview")}
              >
                Preview
              </button>
              <button
                className={`px-3 py-1 rounded ${
                  tab === "code"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-slate-200"
                }`}
                onClick={() => setTab("code")}
              >
                Code
              </button>
            </div>
            {tab === "preview" ? (
              <div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-2 ml-1">
                  Live Preview
                </div>
                <div className="p-8 rounded-xl border border-gray-700 bg-white/5 backdrop-blur-md shadow-xl flex justify-center items-center min-h-[120px] transition-all">
                  {comp.preview}
                </div>
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
    </Background>
  );
};

export default MainLayout;
