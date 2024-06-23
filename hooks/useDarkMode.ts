"use client";

import { useAppDispatch, useAppSelector } from "@app/redux/store/hooks";
import { RootState } from "@app/redux/store/store";
import { useEffect } from "react";
import { setTheme } from "@app/redux/slices/themeSlice";

export function useDarkMode() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state: RootState) => state.theme.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const toggleTheme = () => {
    const newTheme = colorTheme;
    dispatch(setTheme(newTheme));
  };

  return [colorTheme, toggleTheme] as const;
}
export default useDarkMode;
