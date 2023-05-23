import Image from "next/image";
import Logo from "public/favicon.png";
import Link from "next/link";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { BtnPrimary as Btn } from "./ui/Btns";
import ThemeToggle from "./ThemeToggle";

const Header = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState({});
  const [ShowToggle, SetShowToggle] = useState(false);

  const links = [
    {
      title: "Portfolio",
      url: "#",
      subMenu: [
        {
          title: "Home",
          url: "/",
        },
        {
          title: "Skills",
          url: "/#skills",
        },
        {
          title: "Works",
          url: "/#work",
        },
      ],
    },
    {
      title: "Blog",
      url: "#",
      subMenu: [
        {
          title: "Blogs",
          url: "/blog",
        },
        {
          title: "Category",
          url: "/blog/category",
        },
      ],
    },
    {
      title: "Tools",
      url: "#",
    },
  ];

  return (
    <div className="bg-background-white dark:bg-background-black fixed top-0 left-0 z-40 w-full">
      <div className="container flex justify-between items-center relative">
        <div className="logo py-2">
          <Image src={Logo} width={40} alt="logo" />
        </div>
        <div
          className={`links transition-all duration-300 absolute md:relative left-0 md:ml-16 ${
            ShowToggle ? "top-[55px]" : "-top-96"
          } md:top-auto bg-background-white dark:bg-background-black rounded-md w-full`}
        >
          <ul className={`flex gap-0 md:gap-5 flex-col md:flex-row`}>
            {links.map((link, i) => (
              <li className="relative" key={i}>
                {link.subMenu ? (
                  <span
                    className={`text-lg flex items-center cursor-pointer relative gap-1 p-3 transition-all duration-300after:bg-main after:w-full after:h-1 after:rounded-lg after:transition-all after:duration-300 hover:after:bg-main after:absolute after:bottom-0 after:left-0`}
                    onClick={() => {
                      setShowMenu({ [i]: !showMenu[i] });
                    }}
                  >
                    {link.title}
                    {link.subMenu && <AiOutlineDown />}
                  </span>
                ) : (
                  <Link
                    href={link.url}
                    className={`text-lg flex items-center relative gap-1 p-3 transition-all duration-300  after:bg-main hover:text-main after:w-full after:h-1 after:rounded-lg after:transition-all after:duration-300 hover:after:bg-main after:absolute after:bottom-0 after:left-0`}
                    onClick={() => {
                      setShowMenu({ [i]: !showMenu[i] });
                    }}
                  >
                    {link.title}
                  </Link>
                )}
                {link.subMenu && (
                  <ul
                    className={`md:absolute z-50 mt-2 w-[95%] md:w-auto rounded-lg m-auto bg-background md:bg-background-white dark:bg-background-dark md:dark:bg-background-black p-3 transition-all duration-300 right-0${
                      showMenu[i]
                        ? " block md:top-[2.85rem]"
                        : " hidden md:-top-96"
                    }`}
                  >
                    {link.subMenu.map((menu) => (
                      <li className="w-32 p-1" key={Math.random()}>
                        <Link
                          href={menu.url}
                          className="text-lg transition-all duration-300 hover:text-main"
                        >
                          {menu.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="gap-3 items-center flex">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <Btn href="/#contact" text="Contact" />
          <AiOutlineMenu
            onClick={() => SetShowToggle(!ShowToggle)}
            className="text-2xl md:hidden w-10 h-10 p-2 flex items-center relative gap-1 cursor-pointer rounded-md transition-all duration-300 hover:text-main hover:bg-background dark:hover:bg-background-dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
