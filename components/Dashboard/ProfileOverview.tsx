import React from "react";
import { FaBars, FaVideo } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const ProfileOverview: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 relative bottom-[35px] border-b-gray-400 pb-4  border-b">
      <div className="flex flex-wrap items-center gap-2 md:gap-6">
        <div className="border rounded-[50%] border-white border-[2]">
          <img
            className="h-[140px] min-h-[140px] rounded-[50%] w-[140px] min-w-[140px] "
            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
            alt=""
          />
        </div>
        <div className="pt-3">
          <p className="text-[32px] font-semibold ">Abhishek Kumar Sharma</p>
          <p>I&apos;m a Full stack developer with zero knowledge.</p>
        </div>
        <div className="flex md:ml-auto pt-3 gap-6">
          <div className="w-[150px] cursor-pointer border-white border-[1.5px] bg-gray-600 gap-4 font-semibold py-2 rounded-[8px] flex justify-center items-center">
            <FaVideo className="text-gray-800 text-[20px]" />
            <p>Video Call</p>
          </div>
          <div className="w-[150px] cursor-pointer border-white border-[1.5px] bg-gray-600 gap-4 font-semibold py-2 rounded-[8px] flex justify-center items-center">
            <FaMessage className="text-gray-800 text-[20px]" />
            <p>Message</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex max-w-[70%] flex-col gap-2">
          <p className="text-[28px] font-semibold ">Experience</p>
          <p>I&apos;m Specialized in coding after smoking lots of weed.</p>
        </div>
        <div className="ml-auto cursor-pointer">
          <FaBars />
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
