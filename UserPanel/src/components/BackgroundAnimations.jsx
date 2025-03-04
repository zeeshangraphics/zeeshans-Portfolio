import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BackgroundAnimations = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Generate design elements
  const designElements = [
    {
      type: "circle",
      size: windowSize.width * 0.15,
      x: "10%",
      y: "20%",
      rotation: 360,
      duration: 120,
      delay: 0,
      color: "rgba(0, 226, 161, 0.08)",
    },
    {
      type: "circle",
      size: windowSize.width * 0.2,
      x: "85%",
      y: "70%",
      rotation: -360,
      duration: 150,
      delay: 5,
      color: "rgba(0, 226, 161, 0.05)",
    },
    {
      type: "square",
      size: windowSize.width * 0.1,
      x: "75%",
      y: "15%",
      rotation: 720,
      duration: 180,
      delay: 8,
      color: "rgba(0, 226, 161, 0.06)",
    },
    {
      type: "triangle",
      size: windowSize.width * 0.08,
      x: "15%",
      y: "75%",
      rotation: -720,
      duration: 200,
      delay: 12,
      color: "rgba(0, 226, 161, 0.07)",
    },
    {
      type: "pentagon",
      size: windowSize.width * 0.12,
      x: "50%",
      y: "85%",
      rotation: 540,
      duration: 160,
      delay: 18,
      color: "rgba(0, 226, 161, 0.04)",
    },
  ];

  // Render design element based on type
  const renderDesignElement = (element) => {
    switch (element.type) {
      case "circle":
        return (
          <motion.div
            className="absolute rounded-full"
            style={{
              width: element.size,
              height: element.size,
              top: element.y,
              left: element.x,
              backgroundColor: element.color,
              zIndex: 0,
            }}
            animate={{
              rotate: element.rotation,
              x: [0, 50, -50, 0],
              y: [0, -50, 50, 0],
            }}
            transition={{
              rotate: {
                duration: element.duration,
                repeat: Infinity,
                ease: "linear",
              },
              x: {
                duration: element.duration / 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              y: {
                duration: element.duration / 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              delay: element.delay,
            }}
          />
        );
      case "square":
        return (
          <motion.div
            className="absolute"
            style={{
              width: element.size,
              height: element.size,
              top: element.y,
              left: element.x,
              backgroundColor: element.color,
              zIndex: 0,
            }}
            animate={{
              rotate: element.rotation,
              x: [0, 70, -70, 0],
              y: [0, -40, 40, 0],
            }}
            transition={{
              rotate: {
                duration: element.duration,
                repeat: Infinity,
                ease: "linear",
              },
              x: {
                duration: element.duration / 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              y: {
                duration: element.duration / 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              delay: element.delay,
            }}
          />
        );
      case "triangle":
        return (
          <motion.div
            className="absolute"
            style={{
              width: 0,
              height: 0,
              top: element.y,
              left: element.x,
              borderLeft: `${element.size / 2}px solid transparent`,
              borderRight: `${element.size / 2}px solid transparent`,
              borderBottom: `${element.size}px solid ${element.color}`,
              zIndex: 0,
            }}
            animate={{
              rotate: element.rotation,
              x: [0, -60, 60, 0],
              y: [0, 60, -60, 0],
            }}
            transition={{
              rotate: {
                duration: element.duration,
                repeat: Infinity,
                ease: "linear",
              },
              x: {
                duration: element.duration / 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              y: {
                duration: element.duration / 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              delay: element.delay,
            }}
          />
        );
      case "pentagon":
        return (
          <motion.div
            className="absolute"
            style={{
              width: element.size,
              height: element.size,
              top: element.y,
              left: element.x,
              clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              backgroundColor: element.color,
              zIndex: 0,
            }}
            animate={{
              rotate: element.rotation,
              x: [0, 50, -50, 0],
              y: [0, -40, 40, 0],
            }}
            transition={{
              rotate: {
                duration: element.duration,
                repeat: Infinity,
                ease: "linear",
              },
              x: {
                duration: element.duration / 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              y: {
                duration: element.duration / 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              delay: element.delay,
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {designElements.map((element, index) => (
        <React.Fragment key={index}>
          {renderDesignElement(element)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BackgroundAnimations;
