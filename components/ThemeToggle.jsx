import { useState } from "react";
import Icons from "./Icons";

const ThemeToggle = ({ setTheme, theme }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="theme">
      <ul className="flex gap-5">
        <li className="relative">
          <span
            onClick={() => setShowMenu(!showMenu)}
            className={`text-lg flex items-center relative gap-1 cursor-pointer rounded-md p-3 transition-all duration-300 hover:text-main hover:bg-background dark:hover:bg-background-dark`}
          >
            {theme == "dark" ? <Icons.Sun /> : <Icons.Moon />}
          </span>
          <ul
            className={`absolute z-50 bg-background-white dark:bg-background-black transition-all duration-300 right-0 rounded-md  ${
              showMenu ? "top-[2.85rem]" : "-top-96"
            }`}
          >
            <li className="w-32 p-1">
              <span
                onClick={() => {
                  setTheme("light");
                  setShowMenu(false);
                  window.localStorage.setItem("theme", "light");
                }}
                className="text-lg transition-all duration-300 hover:text-main hover:bg-background-white dark:hover:bg-background-dark px-3 py-1 rounded-md flex items-center gap-1 cursor-pointer"
              >
                <Icons.Sun /> Light
              </span>
            </li>
            <li className="w-32 p-1">
              <span
                onClick={() => {
                  setTheme("dark");
                  setShowMenu(false);
                  window.localStorage.setItem("theme", "dark");
                }}
                className="text-lg transition-all duration-300 hover:text-main hover:bg-background-white dark:hover:bg-background-dark px-3 py-1 rounded-md flex items-center gap-1 cursor-pointer"
              >
                <Icons.Moon /> Dark
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ThemeToggle;
