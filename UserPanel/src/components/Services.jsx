import React from "react";
import { motion } from "framer-motion";
import { Tag, Box, PlusSquare, FileText } from "lucide-react";

const Services = ({ isDark }) => {
  const bgStyle = {
    backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
    borderLeft: "4px solid var(--color-teal)",
  };

  const services = [
    {
      title: "Branding",
      description:
        "Crafting unique brand identities that tell your story and stand out.",
      icon: <Tag size={24} />,
    },
    {
      title: "Logo Design",
      description:
        "Creating memorable logos that capture your brand's essence and vision.",
      icon: <Box size={24} />,
    },
    {
      title: "Social Media Design",
      description:
        "Engaging visual content that boosts your social media presence and interaction.",
      icon: <PlusSquare size={24} />,
    },
    {
      title: "Flyers & Posters",
      description:
        "Compelling print designs that grab attention and communicate your message effectively.",
      icon: <FileText size={24} />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "0px" }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
    >
      {services.map((service, index) => (
        <div
          key={index}
          className="p-6 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl flex flex-col items-center text-center h-full"
          style={bgStyle}
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
          <p className="text-sm">{service.description}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default Services;
