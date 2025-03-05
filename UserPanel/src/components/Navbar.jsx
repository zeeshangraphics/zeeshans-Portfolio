import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const navLinkStyle = ({ isActive }) => ({
    color: isActive
      ? "var(--color-teal)"
      : isDark
      ? "var(--color-grey)"
      : "var(--color-dark-grey)",
    transition: "color 0.3s ease",
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDark);
  }, [isDark]);

  // Portfolio categories matching the database values
  const portfolioCategories = [
    { display: "Branding", value: "branding" },
    { display: "Logo Design", value: "logo-design" },
    { display: "Social Media Design", value: "social-media" },
    { display: "Poster and Flyers", value: "poster-flyers" },
  ];

  return (
    <nav
      className="w-full fixed top-0 left-0 border-b z-50"
      style={{
        backgroundColor: isDark ? "var(--color-black)" : "#f5f5f5",
        borderColor: "var(--border-color)",
        transition: "all 0.3s ease",
      }}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-bold z-10"
          style={{
            color: "var(--color-teal)",
          }}
        >
          Muhammad Zeeshan
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/home" style={navLinkStyle} className="transition">
            Home
          </NavLink>

          {/* Portfolio Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center transition px-4 py-2 rounded-md"
              style={{
                color: isDark ? "var(--color-grey)" : "var(--color-dark-grey)",
                border: `2px solid var(--color-teal)`,
              }}
              aria-expanded={isDropdownOpen}
            >
              Portfolio <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            <div
              className="absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg z-10 overflow-hidden transition-all duration-300 origin-top"
              style={{
                backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
                border: `1px solid var(--color-teal)`,
                opacity: isDropdownOpen ? 1 : 0,
                visibility: isDropdownOpen ? "visible" : "hidden",
                transform: isDropdownOpen ? "scaleY(1)" : "scaleY(0)",
                transformOrigin: "top",
              }}
            >
              {portfolioCategories.map((category) => (
                <NavLink
                  key={category.value}
                  to={`/portfolio/${category.value}`}
                  style={navLinkStyle}
                  className="block px-4 py-3 transition-colors duration-200 hover:bg-[var(--color-teal)] hover:text-white"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {category.display}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink
            to="/about"
            style={navLinkStyle}
            className="transition-colors"
          >
            About
          </NavLink>

          <NavLink to="/contact" style={navLinkStyle} className="transition">
            Contact
          </NavLink>

          <NavLink to="/services" style={navLinkStyle} className="transition">
            Services
          </NavLink>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-200"
            style={{
              color: "var(--text-primary)",
              border: `1px solid var(--color-teal)`,
              backgroundColor: isDark ? "transparent" : "white",
            }}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5" style={{ color: "var(--color-teal)" }} />
            ) : (
              <Moon
                className="w-5 h-5"
                style={{ color: "var(--color-teal)" }}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-200"
            style={{
              color: "var(--text-primary)",
              border: `1px solid var(--color-teal)`,
              backgroundColor: isDark ? "transparent" : "white",
            }}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5" style={{ color: "var(--color-teal)" }} />
            ) : (
              <Moon
                className="w-5 h-5"
                style={{ color: "var(--color-teal)" }}
              />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full transition-colors duration-200"
            style={{
              color: "var(--text-primary)",
              border: `1px solid var(--color-teal)`,
              backgroundColor: isDark ? "transparent" : "white",
            }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-5 h-5" style={{ color: "var(--color-teal)" }} />
            ) : (
              <Menu
                className="w-5 h-5"
                style={{ color: "var(--color-teal)" }}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className="md:hidden absolute top-full left-0 w-full shadow-lg transition-all duration-300"
          style={{
            backgroundColor: isDark ? "var(--color-black)" : "#f5f5f5",
            borderTop: `1px solid var(--color-teal)`,
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden",
            transform: isOpen ? "translateY(0)" : "translateY(-10px)",
            height: isOpen ? "auto" : 0,
            overflow: "hidden",
          }}
        >
          <div className="flex flex-col p-4">
            <Link
              to="/home"
              className="py-3 transition-colors hover:text-teal-500"
              style={{
                color: isDark ? "var(--color-grey)" : "var(--color-dark-grey)",
              }}
              onClick={toggleMenu}
            >
              Home
            </Link>

            {/* Mobile Portfolio Dropdown */}
            <div ref={mobileDropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center w-full text-left py-3 transition-colors rounded-md my-2"
                style={{
                  color: isDark
                    ? "var(--color-grey)"
                    : "var(--color-dark-grey)",
                  border: `2px solid var(--color-teal)`,
                  padding: "8px 12px",
                }}
              >
                Portfolio <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              <div
                className="pl-4 space-y-0 rounded-md overflow-hidden mt-1 mb-2 transition-all duration-300 origin-top"
                style={{
                  borderLeft: `2px solid var(--color-teal)`,
                  backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
                  maxHeight: isDropdownOpen ? "1000px" : "0px",
                  opacity: isDropdownOpen ? 1 : 0,
                  visibility: isDropdownOpen ? "visible" : "hidden",
                  transform: isDropdownOpen ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top",
                }}
              >
                {portfolioCategories.map((category) => (
                  <Link
                    key={category.value}
                    to={`/portfolio/${category.value}`}
                    className="block py-3 px-3 transition-colors hover:bg-teal-500 hover:text-white"
                    style={{
                      color: isDark
                        ? "var(--color-grey)"
                        : "var(--color-dark-grey)",
                      borderBottom: "1px solid #eaeaea",
                    }}
                    onClick={() => {
                      setIsDropdownOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    {category.display}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="py-3 transition-colors hover:text-teal-500"
              style={{
                color: isDark ? "var(--color-grey)" : "var(--color-dark-grey)",
              }}
              onClick={toggleMenu}
            >
              About
            </Link>

            <Link
              to="/contact"
              className="py-3 transition-colors hover:text-teal-500"
              style={{
                color: isDark ? "var(--color-grey)" : "var(--color-dark-grey)",
              }}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/services"
              className="py-3 transition-colors hover:text-teal-500"
              style={{
                color: isDark ? "var(--color-grey)" : "var(--color-dark-grey)",
              }}
              onClick={toggleMenu}
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
