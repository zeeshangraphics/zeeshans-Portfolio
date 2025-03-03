import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className="py-12"
      style={{
        backgroundColor: isDark ? "#1a1a1a" : "#f0f0f0",
        color: "var(--text-primary)",
        borderTop: `1px solid ${isDark ? "#2a2a2a" : "#e0e0e0"}`,
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-bold"
              style={{ color: "var(--color-teal)" }}
            >
              Muhammad Zeeshan
            </h3>
            <p className="text-sm">
              A passionate graphic designer transforming ideas into visual
              masterpieces. Specializing in branding, logo design, and creative
              media solutions that help businesses stand out in today's
              competitive market.
            </p>
          </div>

          {/* Quick Links with Icons */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-semibold"
              style={{ color: "var(--color-teal)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                {
                  name: "Home",
                  path: "/home",
                  icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                },
                {
                  name: "About",
                  path: "/about",
                  icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                },
                {
                  name: "Portfolio",
                  path: "/portfolio",
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                },
                {
                  name: "Contact",
                  path: "/contact",
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                },
              ].map((link) => (
                <li key={link.name} className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
                    style={{ color: "var(--color-teal)" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={link.icon}
                    />
                  </svg>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "var(--text-primary)" }}
                    onMouseOver={(e) =>
                      (e.target.style.color = "var(--color-teal)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.color = "var(--text-primary)")
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-semibold"
              style={{ color: "var(--color-teal)" }}
            >
              Contact Me
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    color: "var(--color-teal)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:info.muhammadzeeshan53@gmail.com"
                  className="text-sm transition-colors duration-300"
                  style={{ color: "var(--text-primary)" }}
                  onMouseOver={(e) =>
                    (e.target.style.color = "var(--color-teal)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.color = "var(--text-primary)")
                  }
                >
                  info.muhammadzeeshan53@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    color: "var(--color-teal)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:(+92) 370 4016847"
                  className="text-sm transition-colors duration-300"
                  style={{ color: "var(--text-primary)" }}
                  onMouseOver={(e) =>
                    (e.target.style.color = "var(--color-teal)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.color = "var(--text-primary)")
                  }
                >
                  (+92) 370 4016847
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-4">
              {[
                {
                  name: "Facebook",
                  icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                  link: "https://www.facebook.com/yourprofile",
                },
                {
                  name: "Instagram",
                  icon: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
                },
                {
                  name: "Twitter",
                  icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                },
                {
                  name: "LinkedIn",
                  icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
                },
                {
                  name: "YouTube",
                  icon: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02l4.3-2.48-4.3-2.48v4.96z",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.1)",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "var(--color-teal)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = isDark
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.1)")
                  }
                  aria-label={social.name}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className="mt-12 pt-6 border-t text-center"
          style={{ borderColor: isDark ? "#2a2a2a" : "#e0e0e0" }}
        >
          <p className="opacity-70 text-sm md:text-base">
            © {new Date().getFullYear()} Muhammad Zeeshan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
