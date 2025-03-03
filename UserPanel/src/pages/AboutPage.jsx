import React from "react";
import { useTheme } from "../context/ThemeContext";

const AboutPage = () => {
  const { isDark } = useTheme();

  const bgStyle = {
    backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
    borderLeft: "4px solid var(--color-teal)",
  };

  const itemStyle = {
    backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
  };

  return (
    <div
      className={`min-h-screen ${isDark ? "dark-mode" : ""}`}
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
    >
      <div className="relative pt-16 pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <h1
                className="text-4xl lg:text-6xl font-bold"
                style={{
                  color: isDark
                    ? "var(--color-grey)"
                    : "var(--color-dark-grey)",
                }}
              >
                Hello!
              </h1>
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  <span
                    className="font-bold text-xl"
                    style={{ color: "var(--color-teal)" }}
                  >
                    I'm Muhammad Zeeshan
                  </span>{" "}
                  . I am a graphic designer with expertise in creating logos,
                  brand identities, and visual branding. I collaborate closely
                  with clients to transform their visions and values into
                  striking designs that resonate.
                </p>
                <p className="text-sm leading-relaxed">
                  Beyond logos, I excel in diverse design projects, delivering
                  impactful solutions that help brands stand out. Committed to
                  excellence, I ensure every design leaves a timeless
                  impression.
                </p>
              </div>
            </div>

            {/* Simple circle profile image with teal outline */}
            <div className="hidden lg:flex justify-center items-center">
              <div
                className="relative w-64 h-64 rounded-full border-4 border-solid"
                style={{ borderColor: "var(--color-teal)" }}
              >
                <img
                  src="https://i.pinimg.com/564x/bd/da/b7/bddab779c1b5e0bded2f6e4face72dfd.jpg"
                  alt="Muhammad Zeeshan"
                  className="absolute inset-0 w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content in Cards Layout */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Experience Card */}
          <div
            className="p-6 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
            style={bgStyle}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--color-teal)" }}
            >
              Experience
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Taha Printing Services",
                  role: "Graphic Designer & Social Media Manager",
                  period: "September 2023 - March 2024",
                },
                {
                  title: "Evolution Multimedia firm",
                  role: "Logo Designer & Social Media Designer",
                  period: "February 2023 - March 2024",
                },
                {
                  title: "Visual Graphics",
                  role: "",
                  period: "",
                  isFreelance: true,
                  description:
                    "I'm the owner of Visual Graphics. I'm mostly creating content to attract my audience & also help them form my content. I upload my personal project daily basis on it",
                },
              ].map((exp, index) => (
                <div
                  key={index}
                  className="p-3 rounded transition-all hover:bg-opacity-10"
                  style={itemStyle}
                >
                  <h3 className="font-bold text-lg">
                    {exp.title}{" "}
                    {exp.isFreelance && (
                      <span className="font-normal text-sm">(Freelance)</span>
                    )}
                  </h3>
                  {exp.role && <p className="text-base">{exp.role}</p>}
                  {exp.period && (
                    <p className="text-xs opacity-75 mt-1">{exp.period}</p>
                  )}
                  {exp.description && (
                    <p className="mt-1 text-sm">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Creative Fields & Software Card */}
          <div className="space-y-6">
            {/* Creative Fields Card */}
            <div
              className="p-6 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
              style={bgStyle}
            >
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-teal)" }}
              >
                Creative Fields
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Logo Design",
                  "Branding Identity",
                  "Business Cards",
                  "Social Media Designer",
                  "Print Design, Flyers, Brouchers",
                  "Advertising Images Designer",
                  "Product Images Designer",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center space-x-2 p-2 rounded transition-all hover:bg-opacity-10"
                    style={itemStyle}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "var(--color-teal)" }}
                    ></span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Card */}
            <div
              className="p-6 rounded-lg shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
              style={bgStyle}
            >
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-teal)" }}
              >
                Software
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {[
                  {
                    name: "Adobe Photoshop",
                    color: "text-blue-600",
                    path: "M7.48,2.47c0-0.1,0.08-0.23,0.18-0.23h8.67c0.1,0,0.18,0.13,0.18,0.23v19.06c0,0.1-0.08,0.23-0.18,0.23H7.66 c-0.1,0-0.18-0.13-0.18-0.23V2.47z M5.53,2.16v19.68c0,0.71,0.56,1.23,1.26,1.23h10.42c0.7,0,1.26-0.52,1.26-1.23V2.16 c0-0.71-0.56-1.23-1.26-1.23H6.79C6.09,0.93,5.53,1.45,5.53,2.16z M0,4.54h2.44v14.92H0V4.54z M21.56,4.54H24v14.92h-2.44V4.54z",
                  },
                  {
                    name: "Adobe Illustrator",
                    color: "text-orange-500",
                    path: "M10.08,10.86c0.05-0.33,0.16-0.62,0.3-0.87s0.34-0.46,0.59-0.62c0.24-0.15,0.54-0.22,0.91-0.23 c0.23,0.01,0.44,0.05,0.63,0.13c0.2,0.09,0.38,0.21,0.52,0.36s0.25,0.33,0.34,0.53s0.13,0.42,0.14,0.64h1.79 c-0.02-0.47-0.11-0.9-0.28-1.29c-0.17-0.39-0.4-0.73-0.7-1.01c-0.3-0.28-0.65-0.5-1.06-0.66C12.94,7.63,12.49,7.55,12,7.55 c-0.47,0-0.9,0.08-1.29,0.23c-0.39,0.15-0.73,0.37-1.01,0.66s-0.5,0.63-0.66,1.01C8.89,9.83,8.8,10.25,8.8,10.68V13.5 c0,0.42,0.09,0.8,0.28,1.15c0.19,0.35,0.43,0.64,0.76,0.89s0.71,0.43,1.14,0.57c0.43,0.13,0.92,0.2,1.46,0.2 c0.55,0,1.01-0.08,1.39-0.23s0.71-0.36,0.99-0.61s0.49-0.54,0.65-0.86s0.27-0.66,0.32-1.02h-1.79c-0.19,0.48-0.3,0.87-0.97,0.87 c-0.21,0-0.41-0.03-0.61-0.1s-0.37-0.16-0.52-0.29s-0.26-0.28-0.35-0.45s-0.13-0.37-0.13-0.59V10.86z M15.95,14.56 c0.31-0.45,0.47-0.95,0.47-1.5V8.1h-1.71v4.96c0,0.2-0.04,0.4-0.11,0.59s-0.17,0.35-0.3,0.48s-0.28,0.24-0.47,0.32 s-0.39,0.12-0.62,0.11c-0.22-0.01-0.42-0.05-0.59-0.14s-0.33-0.19-0.44-0.34s-0.23-0.32-0.29-0.51s-0.1-0.4-0.1-0.62V8.1h-1.71 v4.96c0,0.55,0.16,1.05,0.47,1.5s0.71,0.76,1.17,0.94s0.98,0.27,1.51,0.27s1.05-0.09,1.51-0.27S15.64,15.01,15.95,14.56z M2.25,5.75c0,0.41,0.34,0.75,0.75,0.75h16.5c0.41,0,0.75-0.34,0.75-0.75S19.91,5,19.5,5H3C2.59,5,2.25,5.34,2.25,5.75z  M3,19.75h16.5c0.41,0,0.75-0.34,0.75-0.75S19.91,18.25,19.5,18.25H3c-0.41,0-0.75,0.34-0.75,0.75S2.59,19.75,3,19.75z",
                  },
                  {
                    name: "Capcut",
                    color: "text-purple-600",
                    path: "M18,20H6V4h12 M18,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M10,10.5 c0-0.83,0.67-1.5,1.5-1.5S13,9.67,13,10.5l-2.04,2.73L13,16h-1.5l-1.48-2.16L9,15.01H7.5l2.02-2.76L7.5,10h1.5l1.43,1.99L10,10.5z M20,20H4V3h16V20z",
                  },
                ].map((software) => (
                  <div
                    key={software.name}
                    className="flex items-center space-x-3 p-2 rounded transition-all hover:bg-opacity-10"
                    style={itemStyle}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className={software.color}
                    >
                      <path fill="currentColor" d={software.path} />
                    </svg>
                    <span className="text-sm">{software.name}</span>
                  </div>
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
