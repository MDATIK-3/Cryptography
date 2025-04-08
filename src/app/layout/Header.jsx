"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        { name: "Training", path: "/services/training" },
      ],
    },
    { name: "Github", path: "https://github.com/MDATIK-3/Cryptography" },
    { name: "Contact Us", path: "/component/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-gray-800 text-white transition-all duration-300 ${
        isScrolled ? "shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-xl flex items-center">
            <Image
              src="/images/logo1.png"
              alt="CipherAlgo Logo"
              width={30}
              height={30}
              className="rounded-md mr-1 shadow-md scale-75 brightness-150"
            />
            <span className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400 hover:opacity-90 bg-clip-text text-transparent">
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
                      className="flex items-center hover:text-gray-200 transition-colors"
                    >
                      {item.name}
                      <ChevronDown size={16} className="ml-1" />
                    </button>
                    {dropdownOpen === item.name && (
                      <div className="absolute top-full mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-20">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.path}
                            className="block px-4 py-2 text-sm hover:bg-gray-700"
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
                    className="hover:text-cyan-500 transition-colors"
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
              className="p-2 rounded-full hover:bg-gray-200 bg-white text-gray-600"
              aria-label="Search"
            >
              <Search size={20} />
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
            className="p-2 lg:hidden rounded-md hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-800 shadow-md py-3 px-4 border-t border-gray-700">
            <div className="relative max-w-3xl mx-auto">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                autoFocus
              />
            </div>
          </div>
        )}
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-gray-800 shadow-lg">
          <nav className="container mx-auto px-4 py-3">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdown(item.name)}
                        className="flex items-center w-full text-left text-white hover:text-gray-200 py-2"
                      >
                        {item.name}
                        <ChevronDown size={16} className="ml-2" />
                      </button>
                      {dropdownOpen === item.name && (
                        <div className="pl-4 mt-1 border-l-2 border-gray-700">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              className="block py-2 text-white hover:text-gray-200"
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
                      className="block hover:text-gray-200 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center mt-6 pt-4 border-t border-gray-700">
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
