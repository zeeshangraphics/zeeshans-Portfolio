import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RamadanOffer = ({ isDark, offerActive, setOfferActive }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate discount percentages
  const calculateDiscountPrice = (originalPrice) => {
    const discountPercent = 25; // 25%
    const discountedPrice =
      originalPrice - originalPrice * (discountPercent / 100);
    return Math.floor(discountedPrice);
  };

  // Card and animation styles
  const cardStyle = () => ({
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

  const offerBannerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  useEffect(() => {
    const endDate = new Date(2025, 2, 31, 23, 59, 59); // March 31, 2025 at 23:59:59
    const endTime = endDate.getTime();

    const timerInterval = setInterval(() => {
      const now = new Date();
      const difference = endTime - now;

      if (difference <= 0) {
        clearInterval(timerInterval);
        setOfferActive(false);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [setOfferActive]);

  if (!offerActive) return null;

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      variants={offerBannerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="relative overflow-hidden"
        style={cardStyle()}
        whileHover="hover"
        variants={cardVariants}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-[var(--color-teal)] opacity-5"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1 bg-[var(--color-teal)]"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1 bg-[var(--color-teal)]"></div>

        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-8 lg:mb-0 text-center lg:text-left">
              <h3
                className="text-2xl sm:text-3xl font-bold mb-3"
                style={{ color: "var(--color-teal)" }}
              >
                Ramadan Kareem
              </h3>
              <div className="w-16 h-1 bg-[var(--color-teal)] mx-auto lg:mx-0 mb-4"></div>
              <p className="text-base sm:text-lg mb-4">
                Celebrate the holy month with special offers
              </p>
              <div className="inline-block bg-[var(--color-teal)] text-white font-bold px-4 sm:px-6 py-2 rounded-lg">
                25% OFF All Packages
              </div>
            </div>

            <div className="text-center">
              <div
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-lg mb-4 border-2"
                style={{ borderColor: "var(--color-teal)" }}
              >
                <p
                  className="text-xs sm:text-sm uppercase font-bold mb-1 sm:mb-2"
                  style={{ color: "var(--color-teal)" }}
                >
                  Limited Time Offer
                </p>
              </div>

              <div className="flex space-x-2 sm:space-x-4">
                <div className="text-center">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-lg text-lg sm:text-2xl font-bold mb-1"
                    style={{
                      backgroundColor: "var(--color-teal)",
                      color: "white",
                    }}
                  >
                    {timeRemaining.days}
                  </div>
                  <p className="text-xs uppercase">Days</p>
                </div>
                <div className="text-center">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-lg text-lg sm:text-2xl font-bold mb-1"
                    style={{
                      backgroundColor: "var(--color-teal)",
                      color: "white",
                    }}
                  >
                    {timeRemaining.hours}
                  </div>
                  <p className="text-xs uppercase">Hours</p>
                </div>
                <div className="text-center">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-lg text-lg sm:text-2xl font-bold mb-1"
                    style={{
                      backgroundColor: "var(--color-teal)",
                      color: "white",
                    }}
                  >
                    {timeRemaining.minutes}
                  </div>
                  <p className="text-xs uppercase">Min</p>
                </div>
                <div className="text-center">
                  <div
                    className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-lg text-lg sm:text-2xl font-bold mb-1"
                    style={{
                      backgroundColor: "var(--color-teal)",
                      color: "white",
                    }}
                  >
                    {timeRemaining.seconds}
                  </div>
                  <p className="text-xs uppercase">Sec</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RamadanOffer;
