"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import ToggleButton from "@/app/Theme/ToggleButton"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const searchParam = params.get("search");
      if (searchParam) setSearchQuery(searchParam);
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "/" && !(e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")) {
        e.preventDefault();
        const searchInput = document.getElementById("header-search");
        if (searchInput) searchInput.focus();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (typeof window !== "undefined") {
      if (window.searchTimeout) clearTimeout(window.searchTimeout);
      window.searchTimeout = setTimeout(() => {
        triggerSearch(query);
      }, 300);
    }
  };

  const triggerSearch = (query) => {
    if (query.trim()) {
      if (window.location.pathname !== "/") {
        router.push(`/?search=${encodeURIComponent(query.trim())}`);
      } else {
        const url = new URL(window.location);
        url.searchParams.set("search", query.trim());
        window.history.pushState({}, "", url);
        window.dispatchEvent(new CustomEvent("headerSearch", { detail: { query: query.trim() } }));
      }
    } else if (window.location.pathname === "/") {
      const url = new URL(window.location);
      url.searchParams.delete("search");
      window.history.pushState({}, "", url);
      window.dispatchEvent(new CustomEvent("headerSearch", { detail: { query: "" } }));
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    triggerSearch(searchQuery);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Github", path: "https://github.com/MDATIK-3/Cryptography" },
    { name: "Contact Us", path: "/component/contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-gray-800 text-white transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-around">
          <Link href="/" className="font-bold text-xl flex items-center">
            <Image
              src="/images/logo1.png"
              alt="CipherAlgo Logo"
              width={30}
              height={30}
              className="rounded-md mr-2 shadow-md brightness-150"
            />
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-400 bg-clip-text text-transparent">CipherAlgo</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path} className="hover:text-cyan-400 transition-colors duration-200">
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block relative w-64 lg:w-80">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                id="header-search"
                type="text"
                placeholder="Search ciphers..."
                className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </form>
          </div>
          <ToggleButton/>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 md:hidden rounded-md hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-800 shadow-lg border-t border-gray-700">
          <nav className="container mx-auto px-4 py-4">
            <div className="mb-4">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search ciphers..."
                  className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
              </form>
            </div>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="block py-2 px-3 hover:bg-gray-700 hover:text-cyan-400 rounded-md transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
