import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDark]);

  // Portfolio categories matching the database values
  const portfolioCategories = [
    { display: "Branding", value: "branding" },
    { display: "Logo Design", value: "logo-design" },
    { display: "Social Media Design", value: "social-media" },
    { display: "Poster and Flyers", value: "poster-flyers" },
  ];

  // Dynamic dropdown text color based on theme
  const dropdownTextColor = isDark ? "text-[#594a3c]" : "text-text-primary";

  return (
    <nav className="w-full fixed top-0 left-0 border-b z-50 navbar">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="text-3xl z-10 lg:pl-12">
          Muhammad Zeeshan
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/home" className="transition hover:text-accent-primary">
            Home
          </Link>

          {/* Portfolio Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center transition hover:text-accent-primary"
              aria-expanded={isDropdownOpen}
            >
              Portfolio <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-border-color rounded-md shadow-lg z-10">
                {portfolioCategories.map((category) => (
                  <Link
                    key={category.value}
                    to={`/portfolio/${category.value}`}
                    className={`block px-4 py-2 ${dropdownTextColor} hover:bg-accent-primary hover:text-bg-main`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {category.display}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="transition hover:text-accent-primary">
            About
          </Link>

          <Link to="/contact" className="transition hover:text-accent-primary">
            Contact
          </Link>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition hover:bg-accent-secondary hover:text-bg-primary"
            aria-label="Toggle theme"
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
            className="p-2 mr-2 rounded-lg transition hover:bg-accent-secondary hover:text-bg-primary"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg transition hover:bg-accent-secondary hover:text-bg-primary"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full shadow-lg navbar">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                to="/home"
                className="transition hover:text-accent-primary"
                onClick={toggleMenu}
              >
                Home
              </Link>

              {/* Mobile Portfolio Dropdown */}
              <div>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center transition hover:text-accent-primary w-full text-left"
                >
                  Portfolio <ChevronDown className="w-4 h-4 ml-1" />
                </button>

                {isDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2 py-2 bg-white rounded-md border border-border-color">
                    {portfolioCategories.map((category) => (
                      <Link
                        key={category.value}
                        to={`/portfolio/${category.value}`}
                        className={`block py-1 px-3 ${dropdownTextColor} hover:text-accent-primary`}
                        onClick={toggleMenu}
                      >
                        {category.display}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="transition hover:text-accent-primary"
                onClick={toggleMenu}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="transition hover:text-accent-primary"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
