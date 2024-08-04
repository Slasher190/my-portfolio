import React, { useState } from "react";

interface SlideButtonProps {
  direction: "horizontal" | "vertical";
  icon: string;
  label: string;
}

const SlideButton: React.FC<SlideButtonProps> = ({
  direction,
  icon,
  label,
}) => {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  return (
    <div className="space-y-4">
      {direction === "horizontal" ? (
        <div className="button-container button-slide-horizontal">
          <div className="slider slider-horizontal">
            <button
              onClick={increaseProgress}
              className="relative flex items-center justify-between px-3 py-3 text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-full transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center">
                <i className={`fa ${icon} mr-4`}></i>
                <div className="relative w-full">
                  <div
                    className="absolute bottom-0 left-0 w-full bg-blue-500"
                    style={{
                      height: `${progress}%`,
                      transition: "height 0.5s ease-in-out",
                    }}
                  ></div>
                </div>
              </div>
              <span className="z-10">{label}</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="button-container button-slide-vertical">
          <div className="slider-vertical">
            <button
              onClick={increaseProgress}
              className="relative flex flex-col items-center justify-center w-20 h-20 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-300 ease-in-out overflow-hidden"
            >
              <i className={`fa ${icon} front mb-2`}></i>
              <div className="relative w-full">
                <div
                  className="absolute bottom-0 left-0 w-full bg-blue-500"
                  style={{
                    height: `${progress}%`,
                    transition: "height 0.5s ease-in-out",
                  }}
                ></div>
              </div>
              <span className="back">{label}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideButton;
