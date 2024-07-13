"use client";
import React, { useState } from "react";

const LinearProgressBar = () => {
  const [progress, setProgress] = useState(40);

  const increaseProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  const decreaseProgress = () => {
    setProgress((prev) => (prev > 0 ? prev - 10 : 0));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full flex items-center space-x-2 max-w-[380px]">
        <div className="w-full bg-gray-300 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{
              width: `${progress}%`,
              transition: "width 0.3s ease-in-out",
            }}
          ></div>
        </div>
        <span className="text-sm font-medium">{progress}%</span>
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

export default LinearProgressBar;
