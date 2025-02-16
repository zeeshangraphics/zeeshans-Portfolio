import React from "react";
import { useTheme } from "../context/ThemeContext";

const AboutPage = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen pb-10 ${
        isDark ? "bg-[#0C0C0C] text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 lg:px-8 pt-20">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-medium">About Me</h1>
            <div
              className={`h-px lg:w-1/3 w-auto opacity-50 ${
                isDark ? "bg-white" : "bg-black"
              }`}
            ></div>
          </div>

          {/* Main Content */}
          <div
            className={`space-y-8 ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <div className="space-y-4">
              <p className="text-md leading-relaxed">
                With over a decade behind the lens, I've developed a distinctive
                style that emphasizes the interplay between light and shadow. My
                journey in photography began in the streets of New York, where I
                learned to capture the raw energy and authentic moments that
                define urban life.
              </p>

              <p className="text-md leading-relaxed">
                My work has been featured in prestigious galleries across Europe
                and North America, and I've had the privilege of collaborating
                with leading brands in fashion and lifestyle photography.
              </p>
            </div>

            {/* Specializations Section */}
            <div className="space-y-4">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-medium text-black">
                  Specializations
                </h1>
                <div
                  className={`h-px lg:w-1/3 w-auto opacity-50 ${
                    isDark ? "bg-white" : "bg-black"
                  }`}
                ></div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-md">
                {[
                  "Portrait Photography",
                  "Urban Landscapes",
                  "Fashion Editorial",
                  "Black & White",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <span
                      className={`w-1 h-1 rounded-full ${
                        isDark ? "bg-white" : "bg-black"
                      }`}
                    ></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards Section */}
            <div className="space-y-4">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-medium text-black">
                  Recognition & Awards
                </h1>
                <div
                  className={`h-px lg:w-1/3 w-auto opacity-50 ${
                    isDark ? "bg-white" : "bg-black"
                  }`}
                ></div>
              </div>
              <div className="space-y-2 text-md">
                {[
                  "International Photography Awards - Gold Winner 2023",
                  "Featured Artist - Modern Photography Magazine",
                  "New York Arts Foundation Grant Recipient",
                ].map((award) => (
                  <p key={award} className="flex items-center space-x-2">
                    <span
                      className={`w-1 h-1 rounded-full ${
                        isDark ? "bg-white" : "bg-black"
                      }`}
                    ></span>
                    <span>{award}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
