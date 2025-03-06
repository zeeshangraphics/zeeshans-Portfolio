import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'


function CTASection() {
    const { isDark } = useTheme();
  return (
    <motion.div
        className="w-full py-16 md:py-24 text-center"
        initial={{ opacity: 0.5 }} // Increased initial opacity
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }} // Reduced duration
        viewport={{ once: true, margin: "-50px" }} // Reduced margin
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
                border: "2px solid var(--color-teal)",
                color: isDark ? "white" : "var(--color-dark-grey)",
                backgroundColor: "transparent", // Add explicit background color
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-teal)";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = isDark ? "white" : "var(--color-dark-grey)";
              }}
            >
              Get In Touch
            </button>
          </Link>
        </div>
      </motion.div>
  )
}

export default CTASection