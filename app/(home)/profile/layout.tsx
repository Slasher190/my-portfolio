"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import profilePic from "@app/Assets/Images/nancy.png";
import useScreenSize, { Device } from "@app/hooks/useScreenSize";
// import LinearProgressBar from "@app/components/ProgressBar/LinearProgressBar";
// import CircularProgressBar from "@app/components/ProgressBar/CircularProgressBar";
import ProfileProgressBar from "@app/components/ProgressBar/ProfileProgressBar";
import MenuItem from "@app/components/Ui/MenuItem";
import { FaUser, FaLock, FaBell, FaDollarSign } from "react-icons/fa";
import { usePathname } from "next/navigation";

const ProfileLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const screenSize: Device = useScreenSize();
  const path = usePathname();
  const menuItems = [
    { icon: <FaUser />, text: "Personal Info", link: "/profile/profile-info" },
    {
      icon: <FaLock />,
      text: "Security Settings",
      link: "/profile/security-setting",
    },
    { icon: <FaBell />, text: "Notifications", link: "/profile/notification" },
    { icon: <FaDollarSign />, text: "Payments", link: "/profile/payment" },
  ];
  return (
    <div className="grid lg:grid-cols-3 gap-8 p-8 h[100%] grid-cols-1">
      <div className="col-span-1 text-black bg-surface rounded-lg shadow-flat self-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 max-h-fit">
          <div
            className={`py-10 ${screenSize === "tablet" && "p-10"} rounded-lg col-span-1 flex flex-col items-center`}
          >
            <div
              className="relative lg:w-[174px] lg:h-[174px] w-[111px] h-[111px] rounded-full flex items-center justify-center lg:p-[8px] p-[5px] m-0 mx-auto mb-8"
              style={{
                background:
                  "conic-gradient(from -35.18deg at 50% 50%, rgb(0, 108, 207) -154.36deg, rgb(255, 82, 82) 24.13deg, rgb(255, 177, 85) 118.76deg, rgb(0, 108, 207) 205.64deg, rgb(255, 82, 82) 384.13deg)",
              }}
            >
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <Image
                  src={profilePic.src}
                  alt="profile"
                  width={screenSize === "desktop" ? 164 : 101}
                  height={screenSize === "desktop" ? 164 : 101}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="text-center text-gray-900 dark:text-gray-100 mb-10">
              <h1 className="text-lg font-bold">Nancy</h1>
              <h2 className="font-semibold">nancy@190</h2>
            </div>
            <div className="w-[80%] flex justify-center">
              <ProfileProgressBar />
              {/* <LinearProgressBar />
              <CircularProgressBar /> */}
            </div>
            {/* Menu Items */}
          </div>
          <div className="max-w-[100%] flex justify-center">
            <div
              className={`pb-10  w-[80%] ${(screenSize === "mobile" || screenSize === "tablet") && "p-0 md:p-10"} col-span-1  flex  md:px-10`}
            >
              <div className="w-[100%] ">
                {menuItems.map((item, index) => (
                  <MenuItem
                    key={index}
                    icon={item.icon}
                    text={item.text}
                    active={item.link === path}
                    link={item.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 lg:col-span-2 col-span-1 row-auto max-h-fit text-black bg-surface rounded-lg shadow-flat h-auto">
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
