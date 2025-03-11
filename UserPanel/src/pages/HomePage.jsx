import React, { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import HeroSection from "../components/HeroSection";
import AboutSecion from "../components/AboutSecion";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import PortfolioStats from "../components/PortfolioStats";
import CTASection from "../components/CTASection";
import FAQsSection from "../components/FAQsSection";

const HomePage = () => {
  const { isDark } = useTheme();

  return (
    <main
      className={`${isDark ? "dark-mode" : ""} w-full overflow-hidden`}
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
    >
      <HeroSection />
      <AboutSecion />
      <ServicesSection />
      <TestimonialSection />
      <PortfolioStats />
      <FAQsSection />
      <CTASection />
    </main>
  );
};

export default HomePage;