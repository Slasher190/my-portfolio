"use client";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const CircularProgressBarButton: React.FC = () => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  return (
    <div className="space-y-4">
      <button
        onClick={increaseProgress}
        className={`relative mt-4 flex items-center justify-center px-3 py-3 text-black dark:text-white rounded-full transition-all duration-300 ease-in-out overflow-hidden ${
          progress === 100
            ? "border-green-500 border-2"
            : "border-blue-500 border-2"
        }`}
      >
        <span className="mr-4 z-10">Click me</span>
        <div className="relative flex items-center justify-center z-10">
          <svg className="w-8 h-8">
            <circle
              className="text-gray-300"
              strokeWidth="4"
              stroke="currentColor"
              fill="transparent"
              r="8"
              cx="12"
              cy="12"
            />
            <circle
              className={`${progress === 100 ? "text-green-500" : "text-blue-500"}`}
              strokeWidth="4"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="8"
              cx="12"
              cy="12"
              style={{
                strokeDasharray: 63,
                strokeDashoffset: 63 - (63 * progress) / 100,
                transition: "stroke-dashoffset 0.5s ease-in-out",
              }}
            />
          </svg>
        </div>
        <div
          className={`absolute bottom-0 left-0 w-full bg-gradient-to-t ${
            progress === 100
              ? "from-green-500 to-green-500"
              : "from-blue-500 to-blue-500"
          }`}
          style={{
            height: `${progress}%`,
            transition: "height 0.5s ease-in-out",
            zIndex: 0,
          }}
        ></div>
        {/* <div
          className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
        >
          {progress}%
        </div> */}
        <div
          className={`absolute top-0 left-0 h-full w-full bg-gradient-to-t ${
            progress === 100
              ? "hover:from-green-500 hover:to-green-500"
              : "hover:from-blue-500 hover:to-blue-500"
          } transition-all duration-300 ease-in-out`}
          style={{
            height: "0%",
            transition: "height 0.5s ease-in-out",
          }}
        ></div>
      </button>
    </div>
  );
};

export default CircularProgressBarButton;
