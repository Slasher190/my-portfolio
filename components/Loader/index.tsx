import React from "react";
import "./index.css";

interface LoaderProps {
  size?: "small" | "medium" | "large";
}

const Loader: React.FC<LoaderProps> = ({
  size = "medium",
}): React.ReactNode => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-16 h-16",
  };

  return <div className={`loader ${sizeClasses[size]}`}></div>;
};

export default Loader;
