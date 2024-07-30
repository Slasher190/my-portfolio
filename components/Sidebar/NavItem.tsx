import useScreenSize from "@app/hooks/useScreenSize";
import React, { useState, ReactNode, FC } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface NavItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  mobile: boolean;
  children?: ReactNode;
  open1: boolean;
}

const NavItem: FC<NavItemProps> = ({
  icon: Icon,
  label,
  children,
  open1,
  mobile,
}) => {
  const [open, setOpen] = useState(false);
  const screen = useScreenSize();

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <li className="mb-4">
      <div
        className="group flex items-center justify-between p-2 text-gray-400 rounded-md cursor-pointer hover:text-blue-600"
        onClick={toggleMenu}
      >
        <div className="flex items-center">
          <Icon className="mr-3 text-[24px] text-gray-500 group-hover:text-blue-600" />
          {(open1 || screen === "desktop" || mobile) && label}
        </div>
        {children && (open1 || screen === "desktop") && (
          <MdKeyboardArrowDown
            className={`transform transition-transform group-hover:text-blue-600 ${open ? "rotate-180" : ""}`}
          />
        )}
      </div>
      {children && (
        <div
          className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40" : "max-h-0"}`}
        >
          <ul className="pl-9 mt-2 ">{children}</ul>
        </div>
      )}
    </li>
  );
};

export default NavItem;
