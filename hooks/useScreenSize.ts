"use client";
// hooks/useScreenSize.ts
import { useState, useEffect } from "react";

export type Device = "mobile" | "tablet" | "desktop";

const getDeviceConfig = (width: number): Device => {
  if (width < 768) {
    return "mobile";
  } else if (width >= 768 && width <= 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
};

const useScreenSize = (): Device => {
  const [screenSize, setScreenSize] = useState<Device>(() => {
    if (window) return getDeviceConfig(window.innerWidth);
    return "desktop";
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getDeviceConfig(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
