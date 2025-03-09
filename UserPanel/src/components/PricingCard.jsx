import React from "react";
import { motion } from "framer-motion";

const PricingCard = ({ plan, isDark, offerActive }) => {
  const cardStyle = (isFeatured = false) => ({
    backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
    borderLeft: "4px solid var(--color-teal)",
    borderRadius: "12px",
    transition: "all 0.3s ease",
  });

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
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    rest: {
      backgroundColor: "transparent",
      color: "var(--color-teal)",
      transition: { duration: 0.2 },
    },
    hover: {
      backgroundColor: "var(--color-teal)",
      color: "white",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className={`p-4 sm:p-6 md:p-8 shadow-lg text-center relative overflow-hidden ${
        plan.featured ? "z-10" : ""
      }`}
      style={cardStyle(plan.featured)}
      variants={cardVariants}
      whileHover="hover"
    >
      {offerActive && (
        <div className="absolute -right-14 top-8 bg-[var(--color-teal)] text-white text-xs font-bold px-12 py-1 rotate-45">
          RAMADAN OFFER
        </div>
      )}

      <h3
        className="text-xl sm:text-2xl font-bold mb-4"
        style={{ color: "var(--color-teal)" }}
      >
        {plan.title}
      </h3>

      <div className="flex flex-col items-center justify-center mb-6">
        {offerActive ? (
          <>
            <div className="flex items-center mb-2">
              <span className="text-xs line-through opacity-60 mr-1">
                $
              </span>
              <span className="text-xl sm:text-2xl line-through opacity-60">
                {plan.originalPrice}
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm mr-1">$</span>
              <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
            </div>
          </>
        ) : (
          <div className="flex items-center">
            <span className="text-sm mr-1">$</span>
            <span className="text-3xl sm:text-4xl font-bold">
              {plan.originalPrice}
            </span>
          </div>
        )}
      </div>

      <div
        className="w-12 h-1 mx-auto mb-6"
        style={{ backgroundColor: "var(--color-teal)" }}
      ></div>
      
      <ul className="space-y-4 mb-8 text-xs sm:text-sm">
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start justify-start space-x-3 text-left"
            style={{ color: "var(--text-primary)" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-teal)"
              strokeWidth="2"
              className="flex-shrink-0 mt-0.5"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <a href="/contact" className="block">
        <motion.div
          className="w-full py-2 sm:py-3 rounded-lg font-bold border-2 border-[var(--color-teal)] cursor-pointer text-center mt-4"
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
        >
          Get Started
        </motion.div>
      </a>
    </motion.div>
  );
};

export default PricingCard;