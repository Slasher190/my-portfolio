// hooks/useScreenSize.ts
import { useState, useEffect } from "react";

const getDeviceConfig = (width: number): "mobile" | "tablet" | "desktop" => {
  if (width < 768) {
    return "mobile";
  } else if (width >= 768 && width <= 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
};

const useScreenSize = (): "mobile" | "tablet" | "desktop" => {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">(
    () => getDeviceConfig(window.innerWidth)
  );

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
