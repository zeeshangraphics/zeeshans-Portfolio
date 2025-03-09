import React, { useState } from "react";
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
      title: "Starter Package",
      originalPrice: 55,
      price: calculateDiscountPrice(55),
      features: [
        "Best for: Startups & Small Businesses",
        "Delivery in 5-7 Days",
        "Logo Design",
        "Color Palette & Typography Guide",
        "Business Card Design",
        "Social Media Profile & Cover Design",
        "High-Resolution Files (PNG, JPG, PDF)",
      ],
    },
    {
      title: "Growth Package",
      originalPrice: 110,
      price: calculateDiscountPrice(110),
      features: [
        "Best for: Growing Businesses & Entrepreneurs",
        "Delivery in 7-10 Days",
        "Everything in Starter Package",
        "Logo Variations (Primary, Secondary & Icon)",
        "Mini Brand Guidelines (Colors, Fonts, Usage Rules)",
        "Instagram Highlight Icons (5 Custom Icons)",
        "Letterhead & Envelope Design",
        "Social Media Post Templates",
      ],
      featured: true,
    },
    {
      title: "Premium Package",
      originalPrice: 180,
      price: calculateDiscountPrice(180),
      features: [
        "Best for: Established Brands & Businesses",
        "Delivery in 10-14 Days",
        "Everything in Growth Package",
        "Full Brand Guidelines (30+ Pages)",
        "Website UI Concept (1 Homepage)",
        "Social Media Kit (10 Custom Posts + Highlight Covers)",
      ],
    },
    {
      title: "Basic Social Kit",
      originalPrice: 25,
      price: calculateDiscountPrice(25),
      features: [
        "10 Custom Social Media Posts",
        "Profile & Cover Design",
        "3 Instagram Highlight Icons",
      ],
    },
    {
      title: "Advanced Social Kit",
      originalPrice: 50,
      price: calculateDiscountPrice(50),
      features: [
        "20 Custom Social Media Posts",
        "Profile & Cover Design",
        "5 Instagram Highlight Icons",
        "Content Strategy Guide",
      ],
      featured: true,
    },
    {
      title: "Premium Social Kit",
      originalPrice: 75,
      price: calculateDiscountPrice(75),
      features: [
        "30 Custom Social Media Posts",
        "Profile & Cover Design",
        "10 Instagram Highlight Icons",
        "Reels Thumbnail Templates",
      ],
    },
  ];

  return (
    <motion.div
      className={`min-h-screen py-16 ${isDark ? "dark-mode" : ""}`}
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8"
          style={{ color: "var(--color-teal)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Our Services
        </motion.h2>
        <div className="w-24 h-1 bg-[var(--color-teal)] mx-auto mb-8 sm:mb-12"></div>

        <Services isDark={isDark} />
      </div>

      {/* Ramadan Offer Component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
      <RamadanOffer
          isDark={isDark}
          offerActive={offerActive}
          setOfferActive={setOfferActive}
        />
      </div>


      {/* Pricing Plans Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8"
          style={{ color: "var(--color-teal)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Branding Packages
        </motion.h2>
        <div className="w-24 h-1 bg-[var(--color-teal)] mx-auto mb-8 sm:mb-12"></div>

        

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
          {plans.slice(0, 3).map((plan) => (
            <PricingCard
              key={plan.title}
              plan={plan}
              isDark={isDark}
              offerActive={offerActive}
            />
          ))}
        </motion.div>
        
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 mt-16"
          style={{ color: "var(--color-teal)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Social Media Packages
        </motion.h2>
        <div className="w-24 h-1 bg-[var(--color-teal)] mx-auto mb-8 sm:mb-12"></div>
        
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
          {plans.slice(3, 6).map((plan) => (
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