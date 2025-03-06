import React, { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Plus, Clock, Layout, ChevronDown, Quote } from "lucide-react";
import Services from "../components/Services";

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
        className="relative min-h-screen w-full flex items-center  justify-center overflow-hidden"
      >
        <motion.div
          className="relative z-10 max-w-7xl w-full px-4 mx-auto"
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
              hi there,
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left mt-2"
              style={{ color: "var(--color-teal)" }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm Muhammad Zeeshan
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

        {/* Scroll indicator*/}
        <motion.div
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          onClick={() => {
            const aboutSection = document.getElementById("about-section");
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown size={28} style={{ color: "var(--color-teal)" }} />
        </motion.div>
      </div>

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
              <h2
                className="text-3xl sm:text-3xl md:text-5xl font-bold"
                style={{ color: "var(--color-teal)" }}
              >
                Visual Storytelling
              </h2>
              <div
                className="w-32 h-1.5"
                style={{ backgroundColor: "var(--color-teal)" }}
              ></div>
              <p className="text-xl md:text-xl lg:text-2xl leading-relaxed">
                I can bring your creative vision to life. Whether you need
                branding, web design, or a complete visual identity, I'm here to
                help you stand out in today's competitive market.
              </p>
              <p className="text-md md:text-md lg:text-xl leading-relaxed opacity-80">
                With years of experience and a keen eye for detail, I craft
                designs that resonate with your audience and communicate your
                brand's unique story in a compelling way.
              </p>
              <Link to="/about">
                <button
                  className="px-10 py-4 rounded-lg font-medium text-xl transition-all duration-300 mt-6"
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--text-primary)",
                    border: "2px solid var(--color-teal)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--color-teal)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                >
                  Learn More
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="w-full py-16 md:py-24">
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "var(--color-teal)" }}
            >
              My Services
            </h2>
            <div
              className="w-32 h-1 mx-auto mt-5"
              style={{ backgroundColor: "var(--color-teal)" }}
            ></div>
          </motion.div>

          <Services isDark={isDark} />
        </div>
      </div>

      {/* Testimonials Section */}
      <div
        className="w-full py-16 md:py-24 bg-opacity-5"
        style={{ backgroundColor: isDark ? "#ffffff0d" : "#00000005" }}
      >
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "var(--color-teal)" }}
            >
              Client Testimonials
            </h2>
            <div
              className="w-32 h-1 mx-auto mt-5"
              style={{ backgroundColor: "var(--color-teal)" }}
            ></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-lg flex flex-col h-full relative"
                style={bgStyle}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-10%" }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-gray-700 font-medium text-lg bg-gray-200">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-xs opacity-70">{testimonial.role}</p>
                    <p className="text-xs opacity-70">{testimonial.company}</p>
                  </div>
                </div>
                <p className="italic text-sm leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="absolute bottom-4 right-4 opacity-10">
                  <Quote size={32} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Stats Section */}
      <div
        className="w-full py-16 md:py-24 bg-opacity-5"
        style={{ backgroundColor: isDark ? "#ffffff0d" : "#00000005" }}
      >
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "var(--color-teal)" }}
            >
              Portfolio Highlights
            </h2>
            <div
              className="w-32 h-1 mx-auto mt-5"
              style={{ backgroundColor: "var(--color-teal)" }}
            ></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {portfolioStats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full"
                style={bgStyle}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.15,
                }}
                viewport={{ once: true, margin: "-5%" }}
              >
                <div
                  className="mb-4 w-16 h-16 flex items-center justify-center rounded-full"
                  style={{
                    color: "var(--color-teal)",
                    border: "2px solid var(--color-teal)",
                  }}
                >
                  {stat.icon}
                </div>
                <h3
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--color-teal)" }}
                >
                  {stat.value}
                </h3>
                <p className="text-lg opacity-70">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="w-full py-16 md:py-24 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl px-4 mx-auto">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "var(--color-teal)" }}
          >
            Ready to elevate your brand?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Let's collaborate to create designs that captivate and convert. Your
            vision, enhanced by my expertise.
          </p>
          <Link to="/contact">
            <button
              className="px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300"
              style={{
                color: "white",
                border: "2px solid var(--color-teal)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-teal)";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              Get In Touch
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
