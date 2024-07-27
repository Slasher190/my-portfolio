import React from "react";

const Cover: React.FC = () => {
  return (
    <img
      src={
        "https://img.freepik.com/free-photo/abstract-colorful-splash-3d-background-generative-ai-background_60438-2521.jpg"
      }
      alt="Background"
      className="h-[250px] object-cover w-full"
    />
  );
};

export default Cover;
