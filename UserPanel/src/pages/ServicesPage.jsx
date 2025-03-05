"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function ServicesPage() {
  const { isDark } = useTheme();

  const services = [
    {
      title: "Branding",
      description:
        "Comprehensive branding solutions that transform your business identity. We create cohesive visual narratives that communicate your unique story, values, and vision across all touchpoints.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      ),
    },
    {
      title: "Logo Design",
      description:
        "Innovative logo creation that captures the essence of your brand. We design memorable, versatile logos that stand out in a crowded marketplace and create instant brand recognition.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      title: "Social Media Design",
      description:
        "Dynamic social media visual strategies that boost engagement and build your online presence. From eye-catching posts to cohesive feed aesthetics, we create content that tells your brand's story.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="12" y1="9" x2="12" y2="15" />
        </svg>
      ),
    },
    {
      title: "Flyers & Posters",
      description:
        "Print design that makes a lasting impression. We craft visually compelling flyers and posters that communicate your message effectively, ensuring maximum visual impact and audience engagement.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8l-7 7v11a2 2 0 0 0 2 2z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      ),
    },
  ];

  const plans = [
    {
      title: "Starter Package",
      price: 100,
      features: [
        "1 Logo Design",
        "Basic Brand Guidelines",
        "Social Media Design (2 Posts)",
        "Profile Picture Design",
      ],
    },
    {
      title: "Pro Package",
      price: 250,
      features: [
        "2 Logo Variations",
        "Comprehensive Brand Guidelines",
        "Social Media Design (5 Posts)",
        "Business Card Design",
        "Flyer or Poster Design"
      ],
    },
    {
      title: "Premium Package",
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
        <div className="w-24 h-1 bg-teal-500 mx-auto mb-12"></div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="p-6 rounded-lg shadow-lg text-center"
              style={bgStyle}
              variants={cardVariants}
              whileHover="hover"
            >
              <div
                className="mb-4 flex justify-center"
                style={{ color: "var(--color-teal)" }}
              >
                {service.icon}
              </div>
              <h2
                className="text-xl font-bold mb-2"
                style={{ color: "var(--color-teal)" }}
              >
                {service.title}
              </h2>
              <p className="text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
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
