import { useContext, useEffect, useState } from "react";
import {
  MdOutlineLanguage,
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdOutlineMenu,
} from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { ThemeContext } from "../Context/ThemeContext";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  // State Management
  const [openMenu, setOpenMenu] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("lang") || "en",
  );

  // Links Data
  const links = [
    {
      name: "home",
      path: "#home",
    },
    {
      name: "about",
      path: "#about",
    },
    {
      name: "skills",
      path: "#skills",
    },
    {
      name: "projects",
      path: "#projects",
    },
    {
      name: "contact",
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

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
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
          <ul className="flex items-center gap-8 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="text-slate-700 transition-colors duration-300 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                >
                  {t(`nav.${link.name}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Icons */}
        <div className="iconsBox flex items-center gap-2">
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
            className="toggleTheme cursor-pointer rounded-lg bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700 md:hidden"
          >
            {openMenu ? <IoMdClose /> : <MdOutlineMenu />}
          </div>
          {/* Language Switch */}
          <div
            onClick={handleLanguage}
            className="switchLanguage hidden cursor-pointer items-center space-x-1 rounded-lg bg-slate-100 p-2 text-slate-700 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700 md:flex rtl:space-x-reverse"
          >
            <MdOutlineLanguage />
            <p className="text-xs">{language === "en" ? "عربي" : "EN"}</p>
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
                  onClick={() => setOpenMenu(false)}
                  className="text-slate-700 transition-colors duration-300 hover:text-blue-400 dark:text-gray-300"
                >
                  {t(`nav.${link.name}`)}
                </a>
              </li>
            ))}
            <div
              onClick={() => {
                handleLanguage();
                setOpenMenu(false);
              }}
              className="switchLanguage flex items-center space-x-1 text-slate-700 dark:text-gray-300 rtl:space-x-reverse"
            >
              <MdOutlineLanguage />
              <p className="text-xs">
                {language === "en" ? "العربية" : "English"}
              </p>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
