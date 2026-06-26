"use client";

import { useEffect, useState } from "react";

const AnimatedPrice = ({ value }: { value: number }) => {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const start = display;
    const end = value;
    const duration = 300;

    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = start + (end - start) * progress;
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [value]);

  return <>{display.toFixed(2)}</>;
};

export default AnimatedPrice;
