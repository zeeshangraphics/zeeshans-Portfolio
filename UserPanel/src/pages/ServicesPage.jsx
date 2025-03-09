import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import Services from "../components/Services";
import RamadanOffer from "../components/RamadanOffer";
import PricingCard from "../components/PricingCard";

export default function ServicesPage() {
  const { isDark } = useTheme();
  const [offerActive, setOfferActive] = useState(true);

  // Calculate discount percentages
  const calculateDiscountPrice = (originalPrice) => {
    const discountPercent = 25; // 25%
    const discountedPrice =
      originalPrice - originalPrice * (discountPercent / 100);
    return Math.floor(discountedPrice);
  };

  const plans = [
    {
      title: "Branding",
      originalPrice: 100,
      price: calculateDiscountPrice(100),
      features: [
        "1 Logo Design",
        "Basic Brand Guidelines",
        "Social Media Design (2 Posts)",
        "Profile Picture Design",
      ],
    },
    {
      title: "Package",
      originalPrice: 250,
      price: calculateDiscountPrice(250),
      features: [
        "2 Logo Variations",
        "Comprehensive Brand Guidelines",
        "Social Media Design (5 Posts)",
        "Business Card Design",
        "Flyer or Poster Design",
      ],
      featured: true,
    },
    {
      title: "Logo Design",
      originalPrice: 500,
      price: calculateDiscountPrice(500),
      features: [
        "3 Logo Designs with Full Usage Rights",
        "Complete Branding Kit",
        "Social Media Design (10 Posts)",
        "Business Stationery Package",
      ],
    },
  ];

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8"
          style={{ color: "var(--color-teal)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Design Packages
        </motion.h2>
        <div className="w-24 h-1 bg-[var(--color-teal)] mx-auto mb-8 sm:mb-12"></div>

        <Services isDark={isDark} />
      </div>

      {/* Pricing Plans Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8"
          style={{ color: "var(--color-teal)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Design Packages
        </motion.h2>
        <div className="w-24 h-1 bg-[var(--color-teal)] mx-auto mb-8 sm:mb-12"></div>

        {/* Ramadan Offer Component */}
        <RamadanOffer
          isDark={isDark}
          offerActive={offerActive}
          setOfferActive={setOfferActive}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
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
            <PricingCard
              key={plan.title}
              plan={plan}
              isDark={isDark}
              offerActive={offerActive}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
