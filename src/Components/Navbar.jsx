import { useContext, useEffect, useState } from "react";
import {
  MdOutlineLanguage,
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdOutlineMenu,
} from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { ThemeContext } from "../Context/ThemeContext";
import { FaWindowMinimize } from "react-icons/fa";

export default function Navbar() {
  // State Management
  const [openMenu, setOpenMenu] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  // Links Data
  const links = [
    {
      name: "Home",
      path: "#home",
    },
    {
      name: "About",
      path: "#about",
    },
    {
      name: "Skills",
      path: "#skills",
    },
    {
      name: "Projects",
      path: "#projects",
    },
    {
      name: "Contact",
      path: "#contact",
    },
  ];

  // Side Effects
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // UI Functions
  const handleMenuClick = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleThemeClick = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-lg backdrop-blur-md dark:bg-slate-900/90"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-14 items-center justify-between px-2">
        {/* Logo */}
        <div className="cursor-default text-2xl font-bold text-gray-800 dark:text-white">
          <p>
            <span className="text-blue-600">{"<"}</span>AM
            <span className="text-blue-600">{"/>"}</span>
          </p>
        </div>
        {/* Links */}
        <div className="linksBox hidden md:block">
          <ul className="flex items-center space-x-8 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="text-slate-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Icons */}
        <div className="iconsBox flex items-center gap-4">
          {/* Theme Toggle */}
          <div
            onClick={handleThemeClick}
            className="toggleTheme cursor-pointer rounded-lg bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700"
          >
            {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </div>
          {/* Menu on Mobile */}
          <div
            onClick={handleMenuClick}
            className="toggleTheme cursor-pointer rounded-lg bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-slate-200 md:hidden dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700"
          >
            {openMenu ? <IoMdClose /> : <MdOutlineMenu />}
          </div>
          {/* Language Switch */}
          <div className="switchLanguage hidden cursor-pointer items-center space-x-1 rounded-lg bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-slate-200 md:flex rtl:space-x-reverse dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700">
            <MdOutlineLanguage />
            <p className="text-xs">AR</p>
          </div>
        </div>
      </div>
      {/* Links Menu on Mobile */}
      {openMenu && (
        <div className="backdrop-blur-sm">
          <ul className="space-y-4 p-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="text-slate-700 transition-colors duration-300 hover:text-blue-400 dark:text-gray-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="switchLanguage flex items-center space-x-1 text-slate-700 rtl:space-x-reverse dark:text-gray-300">
              <MdOutlineLanguage />
              <p className="text-xs">العربية</p>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
