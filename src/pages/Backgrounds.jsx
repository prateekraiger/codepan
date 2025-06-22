import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Blackbg from "../backgrounds/Blackbg";
import WhiteGridBg from "../backgrounds/WhiteGridBg";
import PurpleBg from "../backgrounds/PurpleBg";
import BlueGridBg from "../backgrounds/BlueGridBg";
import SpaceBg from "../backgrounds/SpaceBg";
import CodeCard from "../components/CodeCard";
import BgCards from "../comman/BgCard";
// Import more backgrounds as you add them

const backgrounds = [
  {
    name: "Black Background",
    Component: Blackbg,
    code: `<div className="relative h-full w-full bg-black">
  <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
  <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
</div>`,
  },
  {
    name: "White Grid Background",
    Component: WhiteGridBg,
    code: `<div className="relative h-full w-full">
  <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
</div>`,
  },
  {
    name: "Purple Background",
    Component: PurpleBg,
    code: `<div className="relative h-full w-full">
  <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
</div>`,
  },
  {
    name: "Blue Grid Background",
    Component: BlueGridBg,
    code: `<div className="relative h-full w-full bg-slate-950">
  <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
</div>`,
  },
  {
    name: "Space Background",
    Component: SpaceBg,
    code: `<SpaceBg />`, // SpaceBg is a complex animated background, so we just show the component usage
  },
  // Add more backgrounds here as { name, Component, code }
];

const Backgrounds = () => {
  const [preview, setPreview] = useState(null);
  const [codeModal, setCodeModal] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 p-8 pt-24">
        <h1 className="text-3xl font-bold mb-6">Tailwind Backgrounds</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {backgrounds.map(({ name, Component, code }) => (
            <BgCards
              key={name}
              title={name}
              description={"Preview of " + name}
              preview={
                <div className="w-full aspect-[3/1] h-32 rounded-lg overflow-hidden flex items-center justify-center relative">
                  <Component fullPage={false} />
                </div>
              }
              onPreview={() => setPreview({ name, Component })}
              onCode={() => setCodeModal({ name, code })}
            />
          ))}
        </div>
        {preview && (
          <div className="fixed inset-0 z-40 flex flex-col">
            <div className="absolute inset-0">
              <preview.Component fullPage />
            </div>
            <div className="relative z-50 flex flex-col items-center justify-center h-full">
              <button
                className="mt-8 px-6 py-2 bg-white/80 text-blue-700 font-bold rounded shadow hover:bg-white"
                onClick={() => setPreview(null)}
              >
                Close Preview
              </button>
            </div>
          </div>
        )}
        {codeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
              <h2 className="text-lg font-bold mb-2">{codeModal.name} Code</h2>
              <CodeCard
                code={codeModal.code}
                filename={`${codeModal.name.replace(/ /g, "")}.jsx`}
              />
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-semibold mr-2"
                onClick={() => handleCopy(codeModal.code)}
              >
                {copied ? "Copied!" : "Copy Code"}
              </button>
              <button
                className="mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 text-sm font-semibold"
                onClick={() => setCodeModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Backgrounds;
