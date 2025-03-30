"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Menu, X, Moon, Sun, Search, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setIsDarkMode(savedTheme === "dark");
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setIsDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const handleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      dropdown: true,
      items: [
        { name: "Consulting", path: "/services/consulting" },
        { name: "Development", path: "/services/development" },
        { name: "Training", path: "/services/training" }
      ]
    },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900 shadow-md py-2"
          : "bg-white/95 dark:bg-gray-900/95 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-xl text-gray-800 dark:text-white flex items-center"
          >
            <Home className="mr-2" size={22} />
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
              CipherAlgo
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdown(item.name)}
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {item.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    {dropdownOpen === item.name && (
                      <div className="absolute top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-20">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => setDropdownOpen(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              href="/login"
              className="py-2 px-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm"
              >
              Sign In
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 lg:hidden rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isSearchOpen && (
          <div className="py-3 border-t border-gray-200 dark:border-gray-700 mt-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-lg">
          <nav className="container mx-auto px-4 py-3">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdown(item.name)}
                        className="flex items-center w-full text-left text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2"
                      >
                        {item.name}
                        <ChevronDown size={16} className="ml-2" />
                      </button>
                      {dropdownOpen === item.name && (
                        <div className="pl-4 mt-1 border-l-2 border-gray-200 dark:border-gray-700">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              className="block py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                              onClick={() => {
                                setDropdownOpen(null);
                                setIsMenuOpen(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <Link
                href="/login"
                className="py-2 px-4 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}