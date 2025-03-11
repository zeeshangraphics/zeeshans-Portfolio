import React, { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const ContinuousImageCarousel = ({
  firstRowImages, // First set of images
  secondRowImages, // Second set of images
  isDark,
}) => {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const [singleSetWidth, setSingleSetWidth] = useState(0);

  // Memoize the tripled image arrays to prevent recreating on every render
  const tripledFirstRow = useMemo(
    () => [...firstRowImages, ...firstRowImages, ...firstRowImages],
    [firstRowImages]
  );
  const tripledSecondRow = useMemo(
    () => [...secondRowImages, ...secondRowImages, ...secondRowImages],
    [secondRowImages]
  );

  // Calculate total width of a single set of images
  useEffect(() => {
    const calculatedWidth1 = firstRowImages.length * 200;
    const calculatedWidth2 = secondRowImages.length * 200;
    const maxWidth = Math.max(calculatedWidth1, calculatedWidth2);

    setSingleSetWidth(maxWidth);
    setCarouselWidth(maxWidth * 3); // Triple for the three sets to ensure continuous appearance
  }, [firstRowImages, secondRowImages]);

  // Preload images when component mounts
  useEffect(() => {
    const imagesToPreload = [
      ...new Set([...firstRowImages, ...secondRowImages]),
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [firstRowImages, secondRowImages]);

  return (
    <div className="w-full overflow-hidden">
      {/* First row - moving left */}
      <div className="overflow-hidden relative mb-4">
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{
            x: [`0px`, `-${singleSetWidth}px`],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          style={{
            width: `${carouselWidth}px`,
            willChange: "transform",
          }}
        >
          {/* Three sets of images for first row */}
          {tripledFirstRow.map((image, index) => (
            <div
              key={`first-row-${index}`}
              className="mx-1 rounded-lg overflow-hidden h-40 w-40 flex-shrink-0"
              style={{
                boxShadow: isDark
                  ? "0 4px 6px rgba(255, 255, 255, 0.1)"
                  : "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: isDark
                  ? "1px solid rgba(255, 255, 255, 0.1)"
                  : "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={image}
                alt={`Carousel image ${index % firstRowImages.length}`}
                className="w-full h-full object-cover"
                // Load the first visible images immediately
                loading={index < 4 ? "eager" : "lazy"}
                // Prioritize the first visible images
                fetchpriority={index < 4 ? "high" : "auto"}
                // Set explicit dimensions to help browser reserve space
                width="160"
                height="160"
                // Add decoding attribute for performance
                decoding="async"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Second row - moving right (opposite direction) */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex"
          initial={{ x: -singleSetWidth }}
          animate={{
            x: [`-${singleSetWidth}px`, `0px`],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          style={{
            width: `${carouselWidth}px`,
            willChange: "transform",
          }}
        >
          {/* Three sets of images for second row */}
          {tripledSecondRow.map((image, index) => (
            <div
              key={`second-row-${index}`}
              className="mx-1 rounded-lg overflow-hidden h-40 w-40 flex-shrink-0"
              style={{
                boxShadow: isDark
                  ? "0 4px 6px rgba(255, 255, 255, 0.1)"
                  : "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: isDark
                  ? "1px solid rgba(255, 255, 255, 0.1)"
                  : "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={image}
                alt={`Carousel image ${index % secondRowImages.length}`}
                className="w-full h-full object-cover"
                // Use eager loading for first few visible images in second row too
                loading={index < 4 ? "eager" : "lazy"}
                fetchpriority={index < 4 ? "high" : "auto"}
                width="160"
                height="160"
                decoding="async"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Alternative version that accepts a single array but allows you to pass
// a split index for where to divide the images
const ContinuousImageCarouselWithSplit = ({
  images,
  splitIndex = null, // Optional: specify where to split the array
  isDark,
}) => {
  // If splitIndex is provided, use it; otherwise split in half
  const midPoint =
    splitIndex !== null ? splitIndex : Math.ceil(images.length / 2);
  const firstRowImages = images.slice(0, midPoint);
  const secondRowImages = images.slice(midPoint);

  return (
    <ContinuousImageCarousel
      firstRowImages={firstRowImages}
      secondRowImages={secondRowImages}
      isDark={isDark}
    />
  );
};

export { ContinuousImageCarousel as default, ContinuousImageCarouselWithSplit };
