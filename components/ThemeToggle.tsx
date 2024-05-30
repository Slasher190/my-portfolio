// components/ThemeToggle.tsx

import useDarkMode from "@app/hooks/useDarkMode";

const ThemeToggle: React.FC = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <button
      onClick={() => setTheme(colorTheme)}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
    >
      Toggle {colorTheme} mode
    </button>
  );
};

export default ThemeToggle;
