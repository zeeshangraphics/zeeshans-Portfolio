import React from 'react'
import { motion } from 'framer-motion'
import { Users, Plus, Clock, Layout } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'


function PortfolioStats() {
    const { isDark } = useTheme();

    const bgStyle = {
        backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
        borderLeft: "4px solid var(--color-teal)",
      };

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
        className="w-full py-16 md:py-24 bg-opacity-5"
        style={{ backgroundColor: isDark ? "#ffffff0d" : "#00000005" }}
      >
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0.5, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "-5%" }}
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
                initial={{ opacity: 0.5, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.1,
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
  )
}

export default PortfolioStats