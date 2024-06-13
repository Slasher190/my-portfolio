"use client";

import React from "react";
import {
  FaHome,
  FaTachometerAlt,
  FaProjectDiagram,
  FaTasks,
  FaChartBar,
  FaUser,
} from "react-icons/fa";
import { MdPeople, MdStars, MdNewReleases } from "react-icons/md";
import NavItem from "./NavItem";

// Define the types for the navigation links
interface SubLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface NavLink {
  href: string;
  label: string;
  icon: React.ReactNode;
  subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
  {
    href: "/",
    label: "Home",
    icon: <FaHome className="mr-2" />,
    subLinks: [
      {
        href: "/designers/all",
        label: "All designers",
        icon: <FaUser className="mr-2" />,
      },
      {
        href: "/designers/popular",
        label: "Popular",
        icon: <MdStars className="mr-2" />,
      },
      {
        href: "/designers/recent",
        label: "Recently added",
        icon: <MdNewReleases className="mr-2" />,
      },
    ],
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: <FaTachometerAlt className="mr-2" />,
    subLinks: [
      {
        href: "/designers/all",
        label: "All designers",
        icon: <FaUser className="mr-2" />,
      },
      {
        href: "/designers/popular",
        label: "Popular",
        icon: <MdStars className="mr-2" />,
      },
      {
        href: "/designers/recent",
        label: "Recently added",
        icon: <MdNewReleases className="mr-2" />,
      },
    ],
  },
  {
    href: "/projects",
    label: "Projects",
    icon: <FaProjectDiagram className="mr-2" />,
    subLinks: [
      {
        href: "/designers/all",
        label: "All designers",
        icon: <FaUser className="mr-2" />,
      },
      {
        href: "/designers/popular",
        label: "Popular",
        icon: <MdStars className="mr-2" />,
      },
      {
        href: "/designers/recent",
        label: "Recently added",
        icon: <MdNewReleases className="mr-2" />,
      },
    ],
  },
  {
    href: "/tasks",
    label: "Tasks",
    icon: <FaTasks className="mr-2" />,
    subLinks: [
      {
        href: "/designers/all",
        label: "All designers",
        icon: <FaUser className="mr-2" />,
      },
      {
        href: "/designers/popular",
        label: "Popular",
        icon: <MdStars className="mr-2" />,
      },
      {
        href: "/designers/recent",
        label: "Recently added",
        icon: <MdNewReleases className="mr-2" />,
      },
    ],
  },
  {
    href: "/reporting",
    label: "Reporting",
    icon: <FaChartBar className="mr-2" />,
    subLinks: [
      {
        href: "/designers/all",
        label: "All designers",
        icon: <FaUser className="mr-2" />,
      },
      {
        href: "/designers/popular",
        label: "Popular",
        icon: <MdStars className="mr-2" />,
      },
      {
        href: "/designers/recent",
        label: "Recently added",
        icon: <MdNewReleases className="mr-2" />,
      },
    ],
  },
  {
    href: "/designers",
    label: "Designers",
    icon: <MdPeople className="mr-2" />,
    subLinks: [
      {
        href: "/designers/all",
        label: "All designers",
        icon: <FaUser className="mr-2" />,
      },
      {
        href: "/designers/popular",
        label: "Popular",
        icon: <MdStars className="mr-2" />,
      },
      {
        href: "/designers/recent",
        label: "Recently added",
        icon: <MdNewReleases className="mr-2" />,
      },
    ],
  },
];

const Sidebar: React.FC = () => {
  return (
    <div className="flex w-[20vw] flex-col h-screen p-4 bg-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl text-black font-bold">Untitled UI</h1>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full text-gray-700 font-bold p-2 border rounded-lg"
        />
      </div>
      <nav className="flex flex-col flex-1 space-y-2">
        {navLinks.map((link) => (
          <NavItem key={link.label} link={link} />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
