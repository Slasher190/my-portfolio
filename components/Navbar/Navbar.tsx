import React from "react";
import {
  FaGithub,
  FaBell,
  FaCog,
  FaUserCircle,
  FaExpandArrowsAlt,
  FaFilter,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center h-[100px] w-full p-8 bg-[#1e2142] text-white">
      <div className="flex-[0.5] flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 rounded-full bg-[#2c2f58] text-white placeholder-white focus:outline-none"
        />
        <FaFilter className="ml-2 text-xl" />
      </div>
      <div className="flex ml-auto items-center gap-4">
        <button className="flex items-center gap-2 p-2 bg-[#2c2f58] rounded-full hover:bg-[#3c3f68]">
          <FaGithub />
          <span>GitHub</span>
        </button>
        <FaExpandArrowsAlt className="cursor-pointer text-xl" />
        <FaBell className="cursor-pointer text-xl" />
        <FaCog className="cursor-pointer text-xl" />
        <FaUserCircle className="cursor-pointer text-xl" />
        <span className="flex items-center">Chris J</span>
      </div>
    </nav>
  );
};

export default Navbar;
