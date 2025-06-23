/**
 * Highly inspired by Mikhail Bespalov's codepen
 * https://codepen.io/Mikhail-Bespalov/pen/yLmpxOG
 */

import { useRef } from "react";
import {
  m,
  useAnimate,
  useMotionValue,
  useMotionValueEvent,
} from "motion/react";

const DURATION_SECONDS = 0.6;
const MAX_DISPLACEMENT = 300;
const OPACITY_CHANGE_START = 0.5;
const transition = {
  duration: DURATION_SECONDS,
  ease: (time) => 1 - Math.pow(1 - time, 3),
};

export function ThanosSnapEffect({ children }) {
  const [scope, animate] = useAnimate();
  const displacementMapRef = useRef(null);
  const dissolveTargetRef = useRef(null);
  const displacement = useMotionValue(0);

  useMotionValueEvent(displacement, "change", (latest) => {
    displacementMapRef.current?.setAttribute("scale", latest.toString());
  });

  const handleClick = async () => {
    if (scope.current.dataset.isAnimating === "true") return;
    scope.current.dataset.isAnimating = "true";

    await Promise.all([
      animate(
        dissolveTargetRef.current,
        { scale: 1.2, opacity: [1, 1, 0] },
        { ...transition, times: [0, OPACITY_CHANGE_START, 1] }
      ),
      animate(displacement, MAX_DISPLACEMENT, transition),
    ]);

    setTimeout(() => {
      animate(
        dissolveTargetRef.current,
        { scale: 1, opacity: 1 },
        { duration: 0 }
      );
      displacement.set(0);
      scope.current.dataset.isAnimating = "false";
    }, 500);
  };

  return (
    <div ref={scope}>
      <m.div
        ref={dissolveTargetRef}
        onClick={handleClick}
        className="cursor-pointer filter-[url(#dissolve-filter)]"
      >
        {children}
      </m.div>
      <svg width="0" height="0" className="absolute -z-1">
        <defs>
          <filter
            id="dissolve-filter"
            x="-300%"
            y="-300%"
            width="600%"
            height="600%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.015"
              numOctaves="1"
              result="bigNoise"
            />
            <feComponentTransfer in="bigNoise" result="bigNoiseAdjusted">
              <feFuncR type="linear" slope="0.5" intercept="-0.2" />
              <feFuncG type="linear" slope="3" intercept="-0.6" />
            </feComponentTransfer>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="1"
              numOctaves="2"
              result="fineNoise"
            />
            <feMerge result="combinedNoise">
              <feMergeNode in="bigNoiseAdjusted" />
              <feMergeNode in="fineNoise" />
            </feMerge>
            <feDisplacementMap
              ref={displacementMapRef}
              in="SourceGraphic"
              in2="combinedNoise"
              scale="0"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
