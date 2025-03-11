import React, { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion} from "framer-motion";
import ContinuousImageCarousel from "../components/ContinuousImageCraousel";


function HeroSection() {
    const { isDark } = useTheme();

    const carouselImages = [
        "/Macbook.jpg",
        "/Gamepad.jpg",
        "/Logo9.jpg",
        "/Mouse.jpg",
        "/pic2.jpg",
        "/pic3.jpg",
        "/pic.jpg",
        "/Watch1.jpg",
      ];

      const carouselImages2 = [
        "/Macbook.jpg",
        "/Gamepad.jpg",
        "/Logo9.jpg",
        "/Mouse.jpg",
        "/pic2.jpg",
        "/pic3.jpg",
        "/pic.jpg",
        "/Watch1.jpg",
      ];

    

  return (
    <div
    className="min-h-screen w-full flex flex-col justify-center items-center overflow-hidden"
  >
    {/* Content wrapper */}
    <div className="max-w-7xl w-full px-4 mx-auto flex flex-col items-center ">
      <div className="w-full mb-12">
        <div
          className="max-w-3xl mx-auto md:mx-0 lg:pt-8"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-center md:text-left">
            Hi there, I'm
          </p>

          <h1
            className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center md:text-left mt-2"
            style={{ color: "var(--color-teal)" }}
          >
            Muhammad Zeeshan
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mt-6 md:mt-8 max-w-3xl text-center md:text-left">
            A graphic designer passionate about creating visual experiences
            that captivate audiences and elevate brands. I transform ideas
            into meaningful design that speaks volumes.
          </p>
        </div>
      </div>


      <div
        className="w-full"
      >
        <ContinuousImageCarousel firstRowImages={carouselImages} secondRowImages={carouselImages2} isDark={isDark} />
      </div>
    </div>
  </div>
  )
}

export default HeroSection