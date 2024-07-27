import React from "react";

const ExperienceCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 border border-gray-400 rounded-[12px] p-4">
      <div className="flex gap-3">
        <img
          className="h-[60px] w-[60px] rounded-[50%] "
          src="https://img.freepik.com/free-vector/gradient-ui-ux-elements-background_23-2149056159.jpg"
          alt=""
        />
        <div>
          <p className="text-[20px] font-[500]">UI/UX Designer</p>
          <p className="text-gray-400">Google</p>
        </div>
      </div>
      <p className="text-gray-400 text-[18px]">May 2023 - June 2024</p>
    </div>
  );
};

export default ExperienceCard;
