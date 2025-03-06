```jsx
import React, { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Plus, Clock, Layout, ChevronDown, Quote } from "lucide-react";
import Services from "../components/Services";
// Import the new component
import ContinuousImageCarousel from "../components/ContinuousImageCarousel";

const HomePage = () => {
  const { isDark } = useTheme();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const bgStyle = {
    backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
    borderLeft: "4px solid var(--color-teal)",
  };

  // Keep the same images array
  const carouselImages = [
    "/Macbook.jpg",
    "/Logo2.jpg",
    "/Gamepad.jpg",
    "/Logo9.jpg",
    "/Mouse.jpg",
    "/pic2.jpg",
    "/pic3.jpg",
    "/pic.jpg",
    "/Watch1.jpg",
    "/Macbook.jpg",
    "/Logo2.jpg",
    "/Gamepad.jpg",
    "/Logo9.jpg",
    "/Mouse.jpg",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "Elevate Brands",
      content:
        "Muhammad's eye for detail transformed our brand identity. The logo design perfectly captures our company ethos while remaining timeless and versatile.",
      initials: "SJ",
    },
    {
      name: "David Chen",
      role: "Startup Founder",
      company: "TechSphere",
      content:
        "Working with Muhammad was effortless. He took my vague ideas and transformed them into a cohesive visual identity that has helped my startup stand out in a crowded market.",
      initials: "DC",
    },
    {
      name: "Amina Patel",
      role: "Creative Director",
      company: "Artisan Studios",
      content:
        "The social media designs Muhammad created for our campaign exceeded expectations. Our engagement increased by 47% in the first month of implementation.",
      initials: "AP",
    },
    {
      name: "Michael Rodriguez",
      role: "Owner",
      company: "Rodriguez Photography",
      content:
        "As a fellow creative professional, I'm extremely particular about design. Muhammad understood my vision immediately and delivered a brand identity that perfectly represents my photography style.",
      initials: "MR",
    },
  ];

  const portfolioStats = [
    {
      title: "Happy Clients",
      value: "50+",
      icon: <Users size={24} />,
    },
    {
      title: "Projects Completed",
      value: "100+",
      icon: <Plus size={24} />,
    },
    {
      title: "Years of Experience",
      value: "5+",
      icon: <Clock size={24} />,
    },
    {
      title: "Services",
      value: "4+",
      icon: <Layout size={24} />,
    },
  ];

  return (
    <div
      className={`${isDark ? "dark-mode" : ""} w-full overflow-hidden`}
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
    >
      {/* Hero Section with updated text */}
      <div
        ref={heroRef}
        className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Hero content wrapper */}
        <div className="relative z-10 max-w-7xl w-full px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side: Text content */}
          <motion.div
            style={{
              opacity: heroOpacity,
              scale: heroScale,
              y: heroY,
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <motion.p
                className="text-lg sm:text-xl md:text-2xl font-medium text-center md:text-left"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Hi there, I'm
              </motion.p>

              <motion.h1
                className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left mt-2"
                style={{ color: "var(--color-teal)" }}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Muhammad Zeeshan
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl mt-6 md:mt-8 max-w-3xl text-center md:text-left"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                A graphic designer passionate about creating visual experiences
                that captivate audiences and elevate brands. I transform ideas
                into meaningful design that speaks volumes.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right side: New ContinuousImageCarousel component */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <ContinuousImageCarousel images={carouselImages} isDark={isDark} />
          </motion.div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      {/* About Section with circular image */}
      <div id="about-section" className="w-full py-16 md:py-24">
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div
                className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-full md:h-auto aspect-square rounded-full border-4 border-solid overflow-hidden shadow-xl"
                style={{ borderColor: "var(--color-teal)" }}
              >
                <img
                  src="https://i.pinimg.com/564x/bd/da/b7/bddab779c1b5e0bded2f6e4face72dfd.jpg"
                  alt="Muhammad Zeeshan"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-8 md:col-span-2 md:pl-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Content remains the same */}
              {/* ... */}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Remaining sections stay the same */}
      {/* ... */}
    </div>
  );
};

export default HomePage;