import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function AboutSecion() {
  return (
    <div id="about-section" className="w-full py-16 md:py-24">
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center"
            initial={{ opacity: 0.5 }} // Changed from 0 to 0.5
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }} // Reduced duration
            viewport={{ once: true, margin: "-50px" }} // Reduced margin for earlier triggering
          >
            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0.5, x: -25 }} // Reduced x offset and increased initial opacity
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div
                className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-full md:h-auto aspect-square rounded-full border-4 border-solid overflow-hidden shadow-xl"
                style={{ borderColor: "var(--color-teal)" }}
              >
                <img
                  src="/profile.jpg"
                  alt="Muhammad Zeeshan"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>

            <motion.div
              className="space-y-8 md:col-span-2 md:pl-8"
              initial={{ opacity: 0.5, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }} 
              viewport={{ once: true, margin: "-50px" }}
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
  )
}

export default AboutSecion