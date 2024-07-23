"use client";

import React, { useState } from "react";
import {
  AiOutlineBell,
  AiOutlineSetting,
  AiOutlineUser,
  // AiOutlineFullscreen,
  AiOutlineFilter,
  AiOutlineSearch,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import ThemeToggleIcon from "@app/components/ThemeToggleIcon";
import FloatingSearch from "./FloatingSearch"; // Adjust the import path as needed

interface NavbarProps {
  setMobile: React.Dispatch<React.SetStateAction<boolean>>;
  mobile: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ setMobile, mobile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center h-[80px] w-full p-2 gap-3 md:p-8 bg-light-background dark:bg-dark-surface text-gray-600 dark:text-gray-400">
      <div
        className={`text-[24px] ${mobile ? "hidden" : ""} md:hidden cursor-pointer`}
        onClick={() => setMobile(!mobile)}
      >
        <FaBars />
      </div>
      <div className="hidden md:flex-[0.5] px-4 py-2 rounded-[40px] bg-light-surface dark:bg-dark-background md:flex items-center">
        <AiOutlineSearch />
        <input
          type="text"
          placeholder="Search"
          className="w-full p-1 px-4 rounded-full bg-transparent text-gray-600 dark:text-gray-400 placeholder-gray-600 dark:placeholder-gray-400 focus:outline-none"
        />
        <AiOutlineFilter className="ml-2 text-xl" />
      </div>
      <div className="flex md:hidden gap-3">
        <NavbarIcon Icon={AiOutlineBell} />
        <NavbarIcon
          onClick={() => setIsModalOpen(true)}
          Icon={AiOutlineSearch}
        />
        <NavbarIcon Icon={AiOutlineSetting} />
      </div>
      <div className="hidden md:flex ml-auto items-center gap-4">
        {/* <NavbarIcon Icon={AiOutlineFullscreen} /> */}
        <ThemeToggleIcon />
        <NavbarIcon Icon={AiOutlineBell} />
        <NavbarIcon Icon={AiOutlineSetting} />
        <NavbarIcon Icon={AiOutlineUser} />
        <span className="flex font-semibold items-center">Chris J</span>
      </div>
      <div className="md:hidden">
        <AiOutlineUser className="cursor-pointer text-[30px]" />
      </div>

      {/* Include the FloatingSearch modal */}
      <FloatingSearch
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </nav>
  );
};

interface NavbarIconProps {
  Icon: React.ElementType;
  onClick?: () => void;
}

const NavbarIcon: React.FC<NavbarIconProps> = ({ Icon, onClick }) => (
  <Icon
    className="cursor-pointer text-[24px] md:text-[30px]"
    onClick={onClick}
  />
);

export default Navbar;
