import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <nav className="w-full fixed top-0 left-0 border-b border-gray-200 dark:border-gray-600 z-50 bg-[#0C0C0C]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-semibold text-white dark:text-white z-10 pl-6"
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Gallery", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-white hover:text-gray-400 transition"
            >
              {item}
            </Link>
          ))}
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-white hover:bg-gray-700 transition"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-lg text-white hover:bg-gray-700 transition"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg text-white hover:bg-gray-700 transition"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-[#0C0C0C] shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              {["Home", "Gallery", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-white hover:text-gray-400 transition"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
