import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaTiktok,
  FaPalette,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const { isDark } = useTheme();

  const quickLinks = [
    { name: "Home", path: "/home", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Portfolio", path: "/portfolio", icon: <FaBriefcase /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  const portfolioCategories = [
    { name: "Branding", path: "/portfolio/branding", icon: <FaPalette /> },
    {
      name: "Logo Design",
      path: "/portfolio/logo-design",
      icon: <FaPalette />,
    },
    {
      name: "Social Media Design",
      path: "/portfolio/social-media",
      icon: <FaPalette />,
    },
    {
      name: "Poster and Flyers",
      path: "/portfolio/poster-flyers",
      icon: <FaPalette />,
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/v_isualgraphics/",
    },
    {
      name: "Tiktok",
      icon: <FaTiktok />,
      link: "https://www.twitter.com/yourprofile",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/yourprofile",
    },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
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
              {quickLinks.map((link) => (
                <li key={link.name} className="flex items-center space-x-2">
                  <span
                    style={{ color: "var(--color-teal)", fontSize: "1rem" }}
                  >
                    {link.icon}
                  </span>
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

          {/* Portfolio Categories with Icons */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-semibold"
              style={{ color: "var(--color-teal)" }}
            >
               Categories
            </h3>
            <ul className="space-y-3">
              {portfolioCategories.map((category) => (
                <li key={category.name} className="flex items-center space-x-2">
                  <span
                    style={{ color: "var(--color-teal)", fontSize: "1rem" }}
                  >
                    {category.icon}
                  </span>
                  <Link
                    to={category.path}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "var(--text-primary)" }}
                    onMouseOver={(e) =>
                      (e.target.style.color = "var(--color-teal)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.color = "var(--text-primary)")
                    }
                  >
                    {category.name}
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
                <span
                  style={{
                    color: "var(--color-teal)",
                    flexShrink: 0,
                    marginTop: "4px",
                  }}
                >
                  <FaEnvelope />
                </span>
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
                <span
                  style={{
                    color: "var(--color-teal)",
                    flexShrink: 0,
                    marginTop: "4px",
                  }}
                >
                  <FaPhone />
                </span>
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
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.1)",
                  }}
                  aria-label={social.name}
                >
                  <div className="w-full h-full flex items-center justify-center group-hover:bg-[var(--color-teal)] rounded-full transition-colors duration-300">
                    {social.icon}
                  </div>
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
