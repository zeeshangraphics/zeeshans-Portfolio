import React, { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

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
  const services = [
    {
      title: "Branding",
      description:
        "Crafting unique brand identities that tell your story and stand out.",
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
        "Creating memorable logos that capture your brand's essence and vision.",
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
        "Engaging visual content that boosts your social media presence and interaction.",
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
        "Compelling print designs that grab attention and communicate your message effectively.",
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

  const portfolioStats = [
    {
      title: "Happy Clients",
      value: "50+",
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
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Projects Completed",
      value: "100+",
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
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      ),
    },
    {
      title: "Years of Experience",
      value: "5+",
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
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Services",
      value: "4+",
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
          <path d="M6 9H6.01" />
          <path d="M6 13H6.01" />
          <path d="M10 9H10.01" />
          <path d="M10 13H10.01" />
          <path d="M14 9H14.01" />
          <path d="M14 13H14.01" />
          <path d="M18 9H18.01" />
          <path d="M18 13H18.01" />
          <path d="M2 16V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
        </svg>
      ),
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
        className="relative min-h-screen w-full flex items-center mt-3 justify-center overflow-hidden"
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
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: "var(--color-teal)" }}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>

      {/* About Section with circular image - Updated grid ratio to 1:2 */}
      <div id="about-section" className="w-full py-16 md:py-24">
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center" // Removed gap between columns
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Circular image - Takes 1 column - Increased size, removed padding/margin */}
            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div
                className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-full md:h-auto aspect-square rounded-full border-4 border-solid overflow-hidden shadow-xl" // Increased size, added aspect-square for responsiveness
                style={{ borderColor: "var(--color-teal)" }}
              >
                <img
                  src="https://i.pinimg.com/564x/bd/da/b7/bddab779c1b5e0bded2f6e4face72dfd.jpg"
                  alt="Muhammad Zeeshan"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text content - Takes 2 columns */}
            <motion.div
              className="space-y-8 md:col-span-2 md:pl-8" // Added left padding to create space from image
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
                  className="px-10 py-4 rounded-lg font-medium text-xl transition-all duration-300 mt-6" // Removed hover:scale-105
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

      {/* Services Section - Enhanced smooth animations */}
      <div className="w-full py-16 md:py-24">
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth easing
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-lg transition-all duration-500 hover:translate-y-[-5px] hover:shadow-xl flex flex-col items-center text-center h-full"
                style={bgStyle}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  mass: 1,
                  delay: index * 0.1,
                }}
                viewport={{ once: true, margin: "-5%" }}
                whileHover={{
                  y: -8,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  },
                }}
              >
                <motion.div
                  className="mb-4 w-16 h-16 flex items-center justify-center rounded-full"
                  style={{
                    color: "var(--color-teal)",
                    border: "2px solid var(--color-teal)",
                  }}
                  initial={{ scale: 0.8, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.2 + index * 0.1,
                  }}
                >
                  {service.icon}
                </motion.div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ color: "var(--color-teal)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm opacity-70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section - Enhanced smooth animations */}
      <div
        className="w-full py-16 md:py-24 bg-opacity-5"
        style={{ backgroundColor: isDark ? "#ffffff0d" : "#00000005" }}
      >
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth easing
            }}
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

          {/* Responsive testimonial cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl flex flex-col h-full relative"
                style={bgStyle}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 20,
                  delay: index * 0.15,
                }}
                viewport={{ once: true, margin: "-5%" }}
              >
                <motion.div
                  className="flex items-center space-x-3 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-gray-700 font-medium text-lg bg-gray-200"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.4 + index * 0.15,
                    }}
                  >
                    {testimonial.initials}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-xs opacity-70">{testimonial.role}</p>
                    <p className="text-xs opacity-70">{testimonial.company}</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex-grow"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.7 }}
                >
                  <p className="italic text-sm leading-relaxed">
                    {testimonial.content}
                  </p>
                </motion.div>

                {/* Animated Quotation mark */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-10"
                  initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
                  whileInView={{ opacity: 0.1, scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.6 + index * 0.15,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 21c3.8-2.2 6-4.8 6-8.5 0-4.4-3.6-8-8-8" />
                    <path d="M15 21c3.8-2.2 6-4.8 6-8.5 0-4.4-3.6-8-8-8" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Stats Section - Enhanced smooth animations */}
      <div
        className="w-full py-16 md:py-24 bg-opacity-5"
        style={{ backgroundColor: isDark ? "#ffffff0d" : "#00000005" }}
      >
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth easing
            }}
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
                className="p-6 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl flex flex-col items-center text-center h-full"
                style={bgStyle}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 20,
                  delay: index * 0.15,
                }}
                viewport={{ once: true, margin: "-5%" }}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                  },
                }}
              >
                <motion.div
                  className="mb-4 w-16 h-16 flex items-center justify-center rounded-full"
                  style={{
                    color: "var(--color-teal)",
                    border: "2px solid var(--color-teal)",
                  }}
                  initial={{ scale: 0, rotate: -15 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.3 + index * 0.15,
                  }}
                >
                  {stat.icon}
                </motion.div>
                <motion.h3
                  className="text-3xl font-bold mb-2"
                  style={{ color: "var(--color-teal)" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.15,
                    duration: 0.8,
                  }}
                >
                  {stat.value}
                </motion.h3>
                <motion.p
                  className="text-lg opacity-70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.7 }}
                  transition={{
                    delay: 0.6 + index * 0.15,
                    duration: 0.8,
                  }}
                >
                  {stat.title}
                </motion.p>
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
                backgroundColor: "var(--color-teal)",
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
