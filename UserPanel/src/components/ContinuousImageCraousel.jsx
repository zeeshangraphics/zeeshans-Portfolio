import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ContinuousImageCarousel = ({ images, isDark }) => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [singleSetWidth, setSingleSetWidth] = useState(0);
  
  // Calculate total width of a single set of images
  useEffect(() => {
    // Calculate width based on image count (each image is 264px - 256px + 8px margin)
    const calculatedWidth = images.length * 264;
    setSingleSetWidth(calculatedWidth);
    setCarouselWidth(calculatedWidth * 2); // Double for the two sets
  }, [images]);

  return (
    <div className="w-full overflow-hidden">
      <div className="overflow-hidden relative">
        <motion.div
          className="flex"
          animate={{
            x: [`0px`, `-${singleSetWidth}px`],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Slower animation for smoother appearance
              ease: "linear",
            },
          }}
          style={{ 
            width: `${carouselWidth}px`,
            willChange: 'transform' // Performance optimization
          }}
        >
          {/* First set of images */}
          {images.map((image, index) => (
            <div 
              key={`first-${index}`} 
              className="mx-1 rounded-lg overflow-hidden h-64 w-64 flex-shrink-0"
              style={{ 
                boxShadow: isDark ? '0 4px 6px rgba(255, 255, 255, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'
              }}
            >
              <img 
                src={image} 
                alt={`Carousel image ${index}`} 
                className="w-full h-full object-cover"
                loading={index < 4 ? "eager" : "lazy"} // Load first few images eagerly
              />
            </div>
          ))}
          
          {/* Second set of identical images to create seamless loop */}
          {images.map((image, index) => (
            <div 
              key={`second-${index}`} 
              className="mx-1 rounded-lg overflow-hidden h-64 w-64 flex-shrink-0"
              style={{ 
                boxShadow: isDark ? '0 4px 6px rgba(255, 255, 255, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.1)',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)'
              }}
            >
              <img 
                src={image} 
                alt={`Carousel image ${index}`} 
                className="w-full h-full object-cover"
                loading="lazy" // Load second set lazily
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContinuousImageCarousel;