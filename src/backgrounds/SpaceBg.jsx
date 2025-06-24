import React, { useEffect, useState, useMemo } from "react";

const Star = ({ star }) => (
  <div
    className="absolute rounded-full bg-white animate-pulse"
    style={{
      left: `${star.x}%`,
      top: `${star.y}%`,
      width: `${star.size}px`,
      height: `${star.size}px`,
      opacity: star.opacity,
      animationDelay: `${star.twinkleDelay}s`,
      animationDuration: "3s",
    }}
  />
);

const ShootingStar = ({ delay, position }) => (
  <div
    className={`absolute w-1 h-1 bg-white rounded-full animate-ping opacity-70`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: "4s",
      top: position.top,
      left: position.left,
    }}
  />
);

const SpaceBg = ({ children }) => {
  const [stars, setStars] = useState([]);
  const [shootingStarsState, setShootingStarsState] = useState([]);

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
      {/* Deep space background with subtle gradient */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-black"></div>

      {/* Stars Layer */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <Star key={star.id} star={star} />
        ))}
      </div>

      {/* Shooting Stars */}
      <div className="absolute inset-0">
        {shootingStars.map((shootingStar, index) => (
          <ShootingStar
            key={index}
            delay={shootingStar.delay}
            position={shootingStar.position}
          />
        ))}
      </div>

      {/* Nebula Effect - Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-transparent to-blue-900/40" />

      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpaceBg;
