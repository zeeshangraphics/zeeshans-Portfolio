"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import Services from "../components/Services";

export default function ServicesPage() {
  const { isDark } = useTheme();

  const plans = [
    {
      title: "Branding",
      price: 100,
      features: [
        "1 Logo Design",
        "Basic Brand Guidelines",
        "Social Media Design (2 Posts)",
        "Profile Picture Design",
      ],
    },
    {
      title: "Package",
      price: 250,
      features: [
        "2 Logo Variations",
        "Comprehensive Brand Guidelines",
        "Social Media Design (5 Posts)",
        "Business Card Design",
        "Flyer or Poster Design",
      ],
    },
    {
      title: "Logo Design",
      price: 500,
      features: [
        "3 Logo Designs with Full Usage Rights",
        "Complete Branding Kit",
        "Social Media Design (10 Posts)",
        "Business Stationery Package",
      ],
    },
  ];

  const bgStyle = {
    backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
    borderLeft: "4px solid var(--color-teal)",
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`min-h-screen pt-16 ${isDark ? "dark-mode" : ""}`}
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-center mb-12"
          style={{ color: "var(--color-teal)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My Services
        </motion.h1>
        <div className="w-24 h-1 bg-[var(--color-teal)] mx-auto mb-12"></div>

        <Services isDark={isDark} />
      </div>

      {/* Pricing Plans Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <motion.h2
          className="text-4xl lg:text-5xl font-bold text-center mb-12"
          style={{ color: "var(--color-teal)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Design Packages
        </motion.h2>
        <div className="w-24 h-1 bg-[var(--color-teal)] mx-auto mb-12"></div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.title}
              className={"p-6 rounded-lg shadow-lg text-center relative"}
              style={bgStyle}
              variants={cardVariants}
              whileHover="hover"
            >
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-teal)" }}
              >
                {plan.title}
              </h3>
              <div className="text-3xl font-bold mb-6">${plan.price}</div>
              <ul className="space-y-3 mb-6 text-sm">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-center space-x-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--color-teal)"
                      strokeWidth="2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact">
                <motion.div
                  className="w-full py-3 rounded-lg font-bold border-2 border-teal-500 cursor-pointer text-center"
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--color-teal)",
                  }}
                  whileHover={{
                    backgroundColor: "var(--color-teal)",
                    color: "white",
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buy Plan
                </motion.div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
