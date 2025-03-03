import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
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
          className="text-2xl md:text-3xl font-bold z-10 lg:pl-4"
          style={{
            color: "var(--color-teal)",
            fontFamily: "var(--font-display)",
          }}
        >
          Muhammad Zeeshan
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/home"
            className="transition hover:text-teal-500"
            style={{
              color: isDark ? "var(--color-grey)" : "var(--color-dark-grey)",
            }}
          >
            Home
          </Link>

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

            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg z-10 overflow-hidden"
                style={{
                  backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
                  border: `1px solid var(--color-teal)`,
                }}
              >
                {portfolioCategories.map((category) => (
                  <Link
                    key={category.value}
                    to={`/portfolio/${category.value}`}
                    className="block px-4 py-3 transition-colors duration-200 hover:bg-teal-500 hover:text-white"
                    style={{
                      color: isDark
                        ? "var(--color-grey)"
                        : "var(--color-dark-grey)",
                      borderBottom: "1px solid #eaeaea",
                    }}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {category.display}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/about"
            className="transition hover:text-teal-500"
            style={{
              color: isDark ? "var(--color-grey)" : "var(--color-dark-grey)",
            }}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="transition hover:text-teal-500"
            style={{
              color: isDark ? "var(--color-grey)" : "var(--color-dark-grey)",
            }}
          >
            Contact
          </Link>

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
        {isOpen && (
          <div
            className="md:hidden absolute top-full left-0 w-full shadow-lg"
            style={{
              backgroundColor: isDark ? "var(--color-black)" : "#f5f5f5",
              borderTop: `1px solid var(--color-teal)`,
            }}
          >
            <div className="flex flex-col p-4">
              <Link
                to="/home"
                className="py-3 transition-colors hover:text-teal-500"
                style={{
                  color: isDark
                    ? "var(--color-grey)"
                    : "var(--color-dark-grey)",
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

                {isDropdownOpen && (
                  <div
                    className="pl-4 space-y-0 rounded-md overflow-hidden mt-1 mb-2"
                    style={{
                      borderLeft: `2px solid var(--color-teal)`,
                      backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
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
                )}
              </div>

              <Link
                to="/about"
                className="py-3 transition-colors hover:text-teal-500"
                style={{
                  color: isDark
                    ? "var(--color-grey)"
                    : "var(--color-dark-grey)",
                }}
                onClick={toggleMenu}
              >
                About
              </Link>

              <Link
                to="/contact"
                className="py-3 transition-colors hover:text-teal-500"
                style={{
                  color: isDark
                    ? "var(--color-grey)"
                    : "var(--color-dark-grey)",
                }}
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
