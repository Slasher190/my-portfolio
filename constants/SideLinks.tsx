// constants/navItems.ts
import { ReactNode } from "react";
import {
  FaUser,
  FaChartBar,
  FaMap,
  FaTable,
  FaWpforms,
  FaTh,
} from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import { BsFillGridFill } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

export interface NavItemProps {
  icon: React.ComponentType;
  label: string;
  children?: ReactNode;
}

const navItems: NavItemProps[] = [
  { icon: RiDashboardFill, label: "NFT Dashboard" },
  { icon: FaChartBar, label: "Medical Dashboard" },
  {
    icon: IoIosApps,
    label: "Apps",
    children: (
      <li className="mb-2">
        <a href="#" className="flex items-center p-2 text-gray-400 rounded-md">
          Feed
        </a>
      </li>
    ),
  },
  {
    icon: FaUser,
    label: "Auth Pages",
    children: (
      <>
        <li className="mb-2">
          <a
            href="#"
            className="flex items-center p-2 text-gray-400 rounded-md"
          >
            Login
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="flex items-center p-2 text-gray-400 rounded-md"
          >
            Register
          </a>
        </li>
      </>
    ),
  },
  {
    icon: FaWpforms,
    label: "Forms",
    children: (
      <li className="mb-2">
        <a href="#" className="flex items-center p-2 text-gray-400 rounded-md">
          Basic Forms
        </a>
      </li>
    ),
  },
  { icon: FaTable, label: "Data Tables" },
  { icon: FaChartBar, label: "Charts" },
  { icon: FaMap, label: "Maps" },
  {
    icon: FaTh,
    label: "Pages",
    children: (
      <li className="mb-2 hover:text-blue-600">
        <a
          href="#"
          className="flex items-center p-2 text-gray-400 rounded-md hover:text-blue-600 bg-[rgba(0.5,0,0,0)]"
        >
          Profile
        </a>
      </li>
    ),
  },
  {
    icon: BsFillGridFill,
    label: "UI Components",
    children: (
      <>
        <li className="mb-2">
          <a
            href="#"
            className="flex items-center p-2 text-gray-400 rounded-md"
          >
            Buttons
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="flex items-center p-2 text-gray-400 rounded-md"
          >
            Cards
          </a>
        </li>
      </>
    ),
  },
];

export default navItems;
