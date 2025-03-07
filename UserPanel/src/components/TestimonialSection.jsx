import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Quote } from 'lucide-react'

function TestimonialSection() {
    const { isDark } = useTheme();
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
  return (
    <div
    className="w-full py-16 md:py-24 bg-opacity-5"
    style={{ backgroundColor: isDark ? "#ffffff0d" : "#00000005" }}
  >
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
            initial={{ opacity: 0.5, y: 25 }} // Reduced y offset and increased initial opacity
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} // Reduced duration
            viewport={{ once: true, margin: "-5%" }} // Reduced margin
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
            <p className="italic text-sm">
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
  )
}

export default TestimonialSection