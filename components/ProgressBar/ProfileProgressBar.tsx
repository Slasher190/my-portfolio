"use client";
import React, { useEffect, useState } from "react";

const ProfileProgressBar: React.FC<{ progressState?: number }> = ({
  progressState,
}) => {
  const [progress, setProgress] = useState(90);
  useEffect(() => {
    if (progressState) setProgress(progressState);
  }, [progressState]);
  return (
    <div className="flex flex-col w-full items-start space-y-2 xl:w-[calc(100%-80px)]">
      <div className="relative w-full h-8 rounded-full bg-gradient-to-r from-[#ffb15580] via-[#ffb15580] to-[#ffb15580]">
        <div
          className="absolute top-0 left-0 h-8 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-500"
          style={{
            width: `${progress}%`,
            transition: "width 0.3s ease-in-out",
          }}
        >
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white font-semibold">
            {progress}%
          </div>
        </div>
      </div>
      <h1 className="text-sm text-center w-full font-semibold text-gray-700 dark:text-gray-100">
        Fullness of your profile
      </h1>
    </div>
  );
};

export default ProfileProgressBar;
