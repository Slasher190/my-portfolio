import React, { useState, ReactNode, FC } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface NavItemProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children?: ReactNode;
}

const NavItem: FC<NavItemProps> = ({ icon: Icon, label, children }) => {
  const [open, setOpen] = useState(false);

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
          {label}
        </div>
        {children && (
          <MdKeyboardArrowDown
            className={`transform transition-transform group-hover:text-blue-600 ${open ? "rotate-180" : ""}`}
          />
        )}
      </div>
      {children && (
        <div
          className={`overflow-hidden transition-all duration-300 ${open ? "max-h-40" : "max-h-0"}`}
        >
          <ul className="pl-8 mt-2">{children}</ul>
        </div>
      )}
    </li>
  );
};

export default NavItem;
