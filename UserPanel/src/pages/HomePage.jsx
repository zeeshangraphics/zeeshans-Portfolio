import React, { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Plus, Clock, Layout, Quote } from "lucide-react";
import Services from "../components/Services";
import ContinuousImageCarousel from "../components/ContinuousImageCraousel";
import HeroSection from "../components/HeroSection";
import AboutSecion from "../components/AboutSecion";
import ServicesSection from "../components/ServicesSection";
import TestimonialSection from "../components/TestimonialSection";
import PortfolioStats from "../components/PortfolioStats";
import CTASection from "../components/CTASection";

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
      <CTASection />
    </main>
  );
};

export default HomePage;