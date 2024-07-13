"use client";
import React, { useState } from "react";

const CircularProgressBar = () => {
  const [progress, setProgress] = useState(40);

  const increaseProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  const decreaseProgress = () => {
    setProgress((prev) => (prev > 0 ? prev - 10 : 0));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* <h2 className="text-lg font-semibold">Dynamic Progress</h2> */}
      <div className="relative flex items-center justify-center">
        <svg className="w-24 h-24">
          <circle
            className="text-gray-300"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="36"
            cx="48"
            cy="48"
          />
          <circle
            className="text-blue-600"
            strokeWidth="8"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="36"
            cx="48"
            cy="48"
            style={{
              strokeDasharray: 226,
              strokeDashoffset: 226 - (226 * progress) / 100,
              transition: "stroke-dashoffset 0.5s ease-in-out",
            }}
          />
        </svg>
        <div className="absolute text-xl font-semibold">{progress}%</div>
      </div>

      <div className="flex space-x-2">
        <button
          onClick={decreaseProgress}
          className="px-4 py-2 bg-gray-200 rounded-lg border border-blue-600 text-blue-600"
        >
          -
        </button>
        <button
          onClick={increaseProgress}
          className="px-4 py-2 bg-gray-200 rounded-lg border border-blue-600 text-blue-600"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CircularProgressBar;
