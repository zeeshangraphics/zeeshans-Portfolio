import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const HomePage = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-[#0C0C0C] text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Content Section */}
        <div className="lg:w-1/2 flex flex-col justify-center p-8 lg:pl-24 lg:pr-8">
          <div className="flex flex-col">
            <h1 className="text-3xl lg:text-5xl font-light mb-2">
              I'm John Doe
            </h1>
            <h2 className="text-lg lg:text-xl mb-6 font-light">
              Capturing moments | Creating art
            </h2>
            <p
              className={`text-sm mb-8 max-w-md ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Through the lens of my camera, I explore the interplay of light
              and shadow, revealing the hidden stories that surround us.
            </p>
            <div className="flex space-x-4">
              <Link to="/gallery">
                <button
                  className={`px-6 py-2 text-sm transition ${
                    isDark
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
                >
                  My Gallery
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className={`px-6 py-2 text-sm transition ${
                    isDark
                      ? "border border-white hover:bg-white hover:text-black"
                      : "border border-black hover:bg-black hover:text-white"
                  }`}
                >
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 relative">
          <div
            className={`absolute inset-0 bg-gradient-to-r z-10 ${
              isDark
                ? "from-[#0C0C0C] to-transparent lg:from-transparent"
                : "from-white to-transparent lg:from-transparent"
            }`}
          ></div>
          <img
            src="https://cdn.pixabay.com/photo/2023/01/18/13/09/camera-7726802_1280.jpg"
            alt="Dramatic portrait photography"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
