import Image from "next/image";
import cover_image from "../../Assets/Images/cover_image.webp";
import profile from "@app/Assets/Images/profile.jpeg";
import ControlPanel from "./ControlPanel";
import About from "./About";
export default function Profile() {
  return (
    <div>
      <div
        style={{
          background: `url(${cover_image.src})`,
          backgroundSize: "100% 100%",
        }}
        className="h-[300px] w-[80vw] flex flex-col gap-[40px] items-start"
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
            <h1 className="text-[32px] font-semibold text-black">
              Abhishek Kumar
            </h1>
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
