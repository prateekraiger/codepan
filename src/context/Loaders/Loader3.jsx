import React from "react";

const Loader3 = () => {
  return (
    <div className="relative w-40 h-24 flex justify-center items-center">
      {/* Loaders */}
      <div className="loader w-40 h-24 bg-[#1e3f57] rounded-md animate-dot1"></div>
      <div className="loader w-36 h-20 bg-[#3c517d] rounded-md animate-dot2"></div>
      <div className="loader w-10 h-5 bg-[#6bb2cd] rounded-b-md absolute bottom-0"></div>

      {/* Custom animations */}
      <style>{`
        .loader {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 10;
          transform: translate(-50%, -50%);
        }

        @keyframes dot1 {
          3%,
          97% {
            width: 160px;
            height: 100px;
          }
          30%,
          36% {
            width: 80px;
            height: 120px;
          }
          63%,
          69% {
            width: 40px;
            height: 80px;
          }
        }

        @keyframes dot2 {
          3%,
          97% {
            height: 90px;
            width: 150px;
          }
          30%,
          36% {
            width: 70px;
            height: 96px;
          }
          63%,
          69% {
            width: 32px;
            height: 60px;
          }
        }

        @keyframes dot3 {
          3%,
          97% {
            height: 20px;
            width: 40px;
          }
          30%,
          36% {
            width: 8px;
            height: 8px;
            border-radius: 8px;
          }
          63%,
          69% {
            width: 16px;
            height: 4px;
            border-radius: 10px;
          }
        }

        .animate-dot1 {
          animation: dot1 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
        }

        .animate-dot2 {
          animation: dot2 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
        }

        .animate-dot3 {
          animation: dot3 3s cubic-bezier(0.55, 0.3, 0.24, 0.99) infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader3;
