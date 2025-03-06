import React from 'react'
import { motion } from 'framer-motion'
import Services from './Services'
import { useTheme } from '../context/ThemeContext'


function ServicesSection() {
    const { isDark } = useTheme()
  return (
    <div className="w-full py-16 md:py-24">
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0.5, y: 25 }} // Reduced y offset and increased initial opacity
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }} // Reduced duration
            viewport={{ once: true, margin: "-5%" }} // Reduced margin
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
  )
}

export default ServicesSection