import React, { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "../components/AppSidebar";
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
    <SidebarProvider>
      <Background>
        <div className="flex flex-col min-h-screen">
          <Header showSidebarTrigger={true} />
          <div className="flex flex-1 flex-col md:flex-row pt-16">
            <AppSidebar selected={selected} setSelected={setSelected} />
            <main className="flex-1 md:ml-64 p-2 sm:p-4 md:p-6 transition-all flex flex-col items-center w-full">
              <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-100 text-center w-full">
                {comp.name}
              </h1>
              <div className="mb-4 flex gap-2 justify-center w-full">
                <button
                  className={`bg-blue-950 text-blue-400 border border-blue-400 font-medium overflow-hidden relative px-4 py-2 rounded-md border-b-4 group outline-none duration-300
                    ${
                      tab === "preview"
                        ? "brightness-150 border-t-4 border-b border-blue-400"
                        : "hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75"
                    }
                  `}
                  onClick={() => setTab("preview")}
                >
                  <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Preview
                </button>
                <button
                  className={`bg-blue-950 text-blue-400 border border-blue-400 font-medium overflow-hidden relative px-4 py-2 rounded-md border-b-4 group outline-none duration-300
                    ${
                      tab === "code"
                        ? "brightness-150 border-t-4 border-b border-blue-400"
                        : "hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75"
                    }
                  `}
                  onClick={() => setTab("code")}
                >
                  <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  Code
                </button>
              </div>
              {tab === "preview" ? (
                <div className="w-full flex flex-col items-center">
                  <div className="text-xs uppercase tracking-widest text-gray-400 mb-2 ml-1 text-center w-full">
                    Live Preview
                  </div>
                  <div className="w-full max-w-lg p-4 sm:p-8 rounded-2xl border border-gray-700 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-2xl flex justify-center items-center min-h-[120px] transition-all glass-card">
                    {comp.preview}
                  </div>
                </div>
              ) : (
                <div className="relative w-full flex flex-col items-center">
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
    </SidebarProvider>
  );
};

export default MainLayout;
