import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`w-full fixed top-0 left-0 border-b z-50 ${
        isDark
          ? "bg-[#0C0C0C] border-gray-600 text-white"
          : "bg-white border-gray-200 text-black"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          to="/"
          className={`text-3xl font-semibold z-10 pl-6 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Gallery", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`transition ${
                isDark
                  ? "text-white hover:text-gray-400"
                  : "text-black hover:text-gray-600"
              }`}
            >
              {item}
            </Link>
          ))}
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition ${
              isDark
                ? "text-white hover:bg-gray-700"
                : "text-black hover:bg-gray-200"
            }`}
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
            className={`p-2 mr-2 rounded-lg transition ${
              isDark
                ? "text-white hover:bg-gray-700"
                : "text-black hover:bg-gray-200"
            }`}
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-lg transition ${
              isDark
                ? "text-white hover:bg-gray-700"
                : "text-black hover:bg-gray-200"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`md:hidden absolute top-16 left-0 w-full shadow-lg ${
              isDark ? "bg-[#0C0C0C]" : "bg-white"
            }`}
          >
            <div className="flex flex-col space-y-4 p-4">
              {["Home", "Gallery", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className={`transition ${
                    isDark
                      ? "text-white hover:text-gray-400"
                      : "text-black hover:text-gray-600"
                  }`}
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
