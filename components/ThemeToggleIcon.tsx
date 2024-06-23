"use client";

import useDarkMode from "@app/hooks/useDarkMode";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeToggle: React.FC = () => {
  const [colorTheme, toggleTheme] = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
    >
      {colorTheme !== "light" ? (
        <MdDarkMode className="text-black" />
      ) : (
        <MdOutlineLightMode />
      )}
    </button>
  );
};

export default ThemeToggle;
