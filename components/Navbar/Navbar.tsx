import React from "react";
import {
  AiOutlineGithub,
  AiOutlineBell,
  AiOutlineSetting,
  AiOutlineUser,
  AiOutlineFullscreen,
  AiOutlineFilter,
  AiOutlineSearch,
} from "react-icons/ai";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center h-[100px] w-full p-8 bg-[#1e2142] text-white">
      <div className="flex-[0.5] px-4 py-2 rounded-[40px] bg-[#2c2f58] flex items-center">
        <AiOutlineSearch />
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 px-4 rounded-full bg-transparent  text-white placeholder-white focus:outline-none"
        />
        <AiOutlineFilter className="ml-2 text-xl" />
      </div>
      <div className="flex ml-auto items-center gap-4">
        <button className="flex items-center gap-2 px-4 py-3 bg-[black] border-white border-2 rounded-full hover:bg-[#3c3f68]">
          <AiOutlineGithub />
          <span>GitHub</span>
        </button>
        <AiOutlineFullscreen className="cursor-pointer text-[30px]" />
        <AiOutlineBell className="cursor-pointer text-[30px]" />
        <AiOutlineSetting className="cursor-pointer text-[30px]" />
        <AiOutlineUser className="cursor-pointer text-[30px]" />
        <span className="flex font-semibold items-center">Chris J</span>
      </div>
    </nav>
  );
};

export default Navbar;
