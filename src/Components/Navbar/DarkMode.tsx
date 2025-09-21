import React from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

const DarkMode: React.FC = () => {
  const [theme, setTheme] = React.useState<string>(
    (typeof localStorage !== 'undefined' && localStorage.getItem("theme")) || "light"
  );

  const element = typeof document !== 'undefined' ? document.documentElement : null;

  React.useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem("theme", theme);
    }
    if (!element) return;
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
  }, [theme, element]);

  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun
          className="text-2xl cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <BiSolidMoon
          className="text-2xl cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
};

export default DarkMode;
