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
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "David Chen",
      role: "Startup Founder",
      company: "TechSphere",
      content:
        "Working with Muhammad was effortless. He took my vague ideas and transformed them into a cohesive visual identity that has helped my startup stand out in a crowded market.",
      avatar: "https://i.pravatar.cc/150?img=53",
    },
    {
      name: "Amina Patel",
      role: "Creative Director",
      company: "Artisan Studios",
      content:
        "The social media designs Muhammad created for our campaign exceeded expectations. Our engagement increased by 47% in the first month of implementation.",
      avatar: "https://i.pravatar.cc/150?img=44",
    },
    {
      name: "Michael Rodriguez",
      role: "Owner",
      company: "Rodriguez Photography",
      content:
        "As a fellow creative professional, I'm extremely particular about design. Muhammad understood my vision immediately and delivered a brand identity that perfectly represents my photography style.",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content:
        "Zeeshan transformed our brand identity completely. His attention to detail and creative vision helped us stand out in a crowded market.",
      avatar: "https://i.pravatar.cc/150?img=23",
    },
    {
      name: "David Smith",
      role: "Product Manager",
      company: "Pell Software",
      content:
        "His designs consistently deliver impact. The visual identity he created increased our engagement by 40%.",
      avatar: "https://i.pravatar.cc/150?img=11",
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
      {/* Hero Section with parallax effect */}
      <div
        ref={heroRef}
        className="relative min-h-screen w-full flex items-center mt-3 justify-center overflow-hidden"
      >
        <motion.div
          className="relative z-10 w-full px-6 sm:px-12 md:px-24"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
        >
          <motion.div
            className="max-w-7xl px-4 mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.h1
              className="text-5xl sm:text-4xl md:text-7xl lg:text-8xl font-bold leading-tight text-center md:text-left"
              style={{ color: "var(--color-teal)" }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming <br className="hidden md:block" />
              <span className="block mt-2">Ideas into Art</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl mt-6 md:mt-8 max-w-3xl text-center md:text-left"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Crafting visual experiences that captivate audiences and elevate
              brands. Where creativity meets purpose.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
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
            style={{ color: "var(--color-teal)" }}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>

      {/* About Section with larger image */}
      <div className="w-full py-12 md:py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Larger image on left */}
            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div
                className="relative w-80 h-80 sm:w-96 sm:h-96 border-4 border-solid overflow-hidden"
                style={{ borderColor: "var(--color-teal)" }}
              >
                <img
                  src="https://i.pinimg.com/564x/bd/da/b7/bddab779c1b5e0bded2f6e4face72dfd.jpg"
                  alt="Muhammad Zeeshan"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Text on right with improved copy */}
            <motion.div
              className="space-y-6 md:space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold"
                style={{ color: "var(--color-teal)" }}
              >
                Visual Storytelling
              </h2>
              <div
                className="w-20 h-1"
                style={{ backgroundColor: "var(--color-teal)" }}
              ></div>
              <p className="text-lg md:text-xl leading-relaxed">
                I can bring your creative vision to life. Whether you need
                branding, web design, or a complete visual identity, I'm here to
                help you stand out in today's competitive market.
              </p>
              <Link to="/about">
                <button
                  className="px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 mt-4"
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
      <div className="w-full py-12 md:py-16 px-6 sm:px-12 md:px-16">
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl flex flex-col items-center text-center"
                style={bgStyle}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div
                  className="mb-4 w-16 h-16 flex items-center justify-center rounded-full"
                  style={{
                    color: "var(--color-teal)",
                    border: "2px solid var(--color-teal)",
                  }}
                >
                  {service.icon}
                </div>
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

      {/* Testimonials Section - Vertical Cards */}
      <div
        className="w-full py-12 md:py-16 px-6 sm:px-12 md:px-16 bg-opacity-5"
        style={{ backgroundColor: isDark ? "#ffffff0d" : "#00000005" }}
      >
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
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

          {/* Vertical testimonial cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl flex flex-col"
                style={bgStyle}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-xs opacity-70">{testimonial.role}</p>
                    <p className="text-xs opacity-70">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="italic text-sm leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>

                {/* Quotation mark */}
                <div className="absolute bottom-4 right-4 opacity-10">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

       {/* Portfolio Stats Section */}
       <div
        className="w-full py-20 md:py-28 px-6 sm:px-12 md:px-16 bg-opacity-5"
        style={{ backgroundColor: isDark ? "#ffffff0d" : "#00000005" }}
      >
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioStats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl flex flex-col items-center text-center"
                style={bgStyle}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div 
                  className="mb-4 w-16 h-16 flex items-center justify-center rounded-full"
                  style={{ color: "var(--color-teal)", border: "2px solid var(--color-teal)" }}
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
        className="w-full py-20 md:py-28 px-6 sm:px-12 md:px-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-5xl mx-auto">
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
