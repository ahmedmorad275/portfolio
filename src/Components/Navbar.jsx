import { useContext, useEffect, useState } from "react";
import {
  MdOutlineLanguage,
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdOutlineMenu,
} from "react-icons/md";
import { motion } from "motion/react";
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
      name: "Experience",
      path: "#experience",
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
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md shadow-lg bg-white/90 dark:bg-slate-900/90"
          : "bg-transparent"
      }`}
    >
      <div className="px-2 container mx-auto flex justify-between h-14 items-center">
        {/* Logo */}
        <div className="cursor-default text-2xl font-bold text-gray-800 dark:text-white">
          <p>
            <span className="text-blue-600">{"<"}</span>AM
            <span className="text-blue-600">{"/>"}</span>
          </p>
        </div>
        {/* Links */}
        <div className="linksBox hidden md:block">
          <ul className="flex space-x-8 items-center text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="dark:text-gray-300 text-slate-700 hover:text-blue-600 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Icons */}
        <div className="iconsBox flex gap-4 items-center">
          {/* Theme Toggle */}
          <div
            onClick={handleThemeClick}
            className="toggleTheme cursor-pointer p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </div>
          {/* Menu on Mobile */}
          <div
            onClick={handleMenuClick}
            className="toggleTheme md:hidden cursor-pointer p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {openMenu ? <IoMdClose /> : <MdOutlineMenu />}
          </div>
          {/* Language Switch */}
          <div className="switchLanguage hidden cursor-pointer md:flex items-center space-x-1 rtl:space-x-reverse p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
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
                  className="dark:text-gray-300 text-slate-700 hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <div className="switchLanguage flex items-center space-x-1 rtl:space-x-reverse text-slate-700 dark:text-gray-300">
              <MdOutlineLanguage />
              <p className="text-xs">العربية</p>
            </div>
          </ul>
        </div>
      )}
    </motion.nav>
  );
}
