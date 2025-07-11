import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Blackbg from "../backgrounds/Blackbg";
import WhiteGridBg from "../backgrounds/WhiteGridBg";
import PurpleBg from "../backgrounds/PurpleBg";
import BlueGridBg from "../backgrounds/BlueGridBg";
import SpaceBg from "../backgrounds/SpaceBg";
import BgCards from "../comman/BgCard";
import CodeCard from "../components/CodeCard";

const backgrounds = [
  {
    name: "Black Background",
    Component: Blackbg,
    code: `import React from "react";

const BlackBackground = () => {
  return (
    <div className="relative h-full w-full bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </div>
  );
};

export default BlackBackground;`,
  },
  {
    name: "White Grid Background",
    Component: WhiteGridBg,
    code: `import React from "react";

const WhiteGridBackground = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
    </div>
  );
};

export default WhiteGridBackground;`,
  },
  {
    name: "Purple Background",
    Component: PurpleBg,
    code: `import React from "react";

const PurpleBackground = () => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    </div>
  );
};

export default PurpleBackground;`,
  },
  {
    name: "Blue Grid Background",
    Component: BlueGridBg,
    code: `import React from "react";

const BlueGridBackground = () => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </div>
  );
};

export default BlueGridBackground;`,
  },
  {
    name: "Space Background",
    Component: SpaceBg,
    code: `import React, { useEffect, useState, useMemo } from "react";

const Star = ({ star }) => (
  <div
    className="absolute rounded-full bg-white animate-pulse"
    style={{
      left: \`\${star.x}%\`,
      top: \`\${star.y}%\`,
      width: \`\${star.size}px\`,
      height: \`\${star.size}px\`,
      opacity: star.opacity,
      animationDelay: \`\${star.twinkleDelay}s\`,
      animationDuration: "3s",
    }}
  />
);

const ShootingStar = ({ delay, position }) => (
  <div
    className={\`absolute w-1 h-1 bg-white rounded-full animate-ping opacity-70\`}
    style={{
      animationDelay: \`\${delay}s\`,
      animationDuration: "4s",
      top: position.top,
      left: position.left,
    }}
  />
);

const SpaceBackground = ({ children }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const starCount = 80;
      const newStars = Array.from({ length: starCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleDelay: Math.random() * 4,
      }));

      setStars(newStars);
    };

    generateStars();
  }, []);

  const shootingStars = useMemo(
    () => [
      { delay: 2, position: { top: "20%", left: "10%" } },
      { delay: 6, position: { top: "40%", left: "80%" } },
      { delay: 10, position: { top: "68%", left: "33%" } },
    ],
    []
  );

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black"></div>
      <div className="absolute inset-0">
        {stars.map((star) => (
          <Star key={star.id} star={star} />
        ))}
      </div>
      <div className="absolute inset-0">
        {shootingStars.map((shootingStar, index) => (
          <ShootingStar
            key={index}
            delay={shootingStar.delay}
            position={shootingStar.position}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-blue-900/40" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpaceBackground;`,
  },
];

const Backgrounds = () => {
  const [activeBg, setActiveBg] = useState(null);
  const [codeModal, setCodeModal] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const ActiveBgComponent = activeBg
    ? backgrounds.find((bg) => bg.name === activeBg)?.Component
    : null;

  return (
    <div
      className={`flex flex-col min-h-screen relative ${
        !activeBg ? "bg-neutral-950" : ""
      }`}
    >
      {ActiveBgComponent && (
        <div className="fixed inset-0 w-full h-full z-0">
          <ActiveBgComponent />
        </div>
      )}
      {activeBg && (
        <button
          onClick={() => setActiveBg(null)}
          className="fixed top-24 right-6 bg-slate-800/80 text-white backdrop-blur-sm px-4 py-2 rounded-lg z-50 hover:bg-slate-700 transition-colors"
        >
          Close Preview
        </button>
      )}
      <Header />
      {!activeBg && (
        <>
          <main className="flex-1 p-4 sm:p-8 pt-28 relative z-10">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-slate-100 drop-shadow-lg text-center tracking-tight">
                Tailwind Backgrounds
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {backgrounds.map(({ name, Component, code }) => (
                  <BgCards
                    key={name}
                    title={name}
                    preview={
                      <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center relative">
                        <Component />
                      </div>
                    }
                    onPreview={() => setActiveBg(name)}
                    onCode={() => setCodeModal({ name, code })}
                  />
                ))}
              </div>
            </div>
          </main>
          <Footer />
        </>
      )}

      {codeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-neutral-900 rounded-2xl shadow-2xl p-6 max-w-lg w-full relative text-slate-100 border border-blue-900/40">
            <h2 className="text-xl font-bold mb-4 text-center text-slate-100">
              {codeModal.name}
            </h2>
            <CodeCard code={codeModal.code} />
            <div className="flex gap-4 mt-4 justify-center">
              <button
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                onClick={() => handleCopy(codeModal.code)}
              >
                {copied ? "Copied!" : "Copy Code"}
              </button>
              <button
                className="px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 font-semibold"
                onClick={() => setCodeModal(null)}
              >
                Close
              </button>
            </div>
            <button
              onClick={() => setCodeModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Backgrounds;
