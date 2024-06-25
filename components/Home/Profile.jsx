"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// import cover_image from "../../Assets/Images/cover_image.webp";
import profile from "@app/Assets/Images/nancy.png";

import ControlPanel from "./ControlPanel";
import About from "./About";

export default function Profile({ cover_image }) {
  const [imageExists, setImageExists] = useState(true);

  useEffect(() => {
    const img = new window.Image();
    img.src = cover_image?.src;
    img.onload = () => setImageExists(true);
    img.onerror = () => setImageExists(false);
  }, [cover_image?.src]);

  return (
    <div>
      <div
        style={{
          background: imageExists
            ? `url(${cover_image?.src})`
            : "linear-gradient(to left top, #ff7e5f, #feb47b)",
          backgroundSize: "100% 100%",
        }}
        className="h-[300px] w-[80vw] flex flex-col gap-[40px] items-start relative"
      ></div>
      <div className="pl-4 flex flex-col gap-[50px]">
        <div className="flex w-full gap-[40px] items-center relative ">
          <div>
            <Image
              src={profile}
              height={150}
              width={150}
              alt=""
              className="rounded-[50%] !h-[150px] !w-[150px]"
            />
          </div>
          <div>
            <h1 className="text-[32px] font-semibold text-black">Nancy</h1>
            <p className="text-[18px] font-[500] text-gray-500 ">
              I&lsquo;m a Mern stack developer
            </p>
          </div>
          <div className="ml-auto">
            <ControlPanel />
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h1 className="text-[32px] font-semibold text-black">Experience</h1>
          <p className="text-[18px] font-[500] text-gray-500 ">
            I am a full stack developer.
          </p>
        </div>
      </div>

      <div>
        <About />
      </div>
    </div>
  );
}
