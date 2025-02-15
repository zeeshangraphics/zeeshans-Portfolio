import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white pb-10">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 pt-20">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-5xl font-light">About Me</h1>
            <div className="h-px lg:w-1/3 w-auto bg-white opacity-50"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-8 text-gray-300">
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
                <h1 className="text-3xl lg:text-4xl font-light">
                  Specializations
                </h1>
                <div className="h-px lg:w-1/3 w-auto bg-white opacity-50"></div>
              </div>{" "}
              <div className="grid grid-cols-2 gap-4 text-md">
                <div className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span>Portrait Photography</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span>Urban Landscapes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span>Fashion Editorial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span>Black & White</span>
                </div>
              </div>
            </div>

            {/* Awards Section */}
            <div className="space-y-4">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-4xl font-light">
                  Recognition & Awards
                </h1>
                <div className="h-px lg:w-1/3 w-auto bg-white opacity-50"></div>
              </div>
              <div className="space-y-2 text-md">
                <p className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span>
                    International Photography Awards - Gold Winner 2023
                  </span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span>Featured Artist - Modern Photography Magazine</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span>New York Arts Foundation Grant Recipient</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
