import React from "react";
import { useTheme } from "../context/ThemeContext";

const AboutPage = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen pb-10 ${isDark ? "dark-mode" : ""}`}
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 lg:px-8 pt-20">
        <div className="space-y-12">
          {/* Header Section */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-medium">Hello!</h1>
            <div
              className="h-px lg:w-1/3 w-auto opacity-50"
              style={{ backgroundColor: "var(--text-primary)" }}
            ></div>
          </div>

          {/* Main Content */}
          <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>
            <div className="space-y-4">
              <p className="text-md leading-relaxed">
                <span
                  style={{ color: "var(--accent-primary)", fontWeight: "bold" }}
                >
                  Muhammad Zeeshan
                </span>{" "}
                is a graphic designer with expertise in creating logos, brand
                identities, and visual branding. He collaborates closely with
                clients to transform their visions and values into striking
                designs that resonate.
              </p>

              <p className="text-md leading-relaxed">
                Beyond logos, he excels in diverse design projects, delivering
                impactful solutions that help brands stand out. Committed to
                excellence, Muhammad ensures every design leaves a timeless
                impression.
              </p>
            </div>

            {/* Experience Section */}
            <div className="space-y-4">
              <div className="space-y-4">
                <h1
                  className="text-3xl lg:text-4xl font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  Experience
                </h1>
                <div
                  className="h-px lg:w-1/3 w-auto opacity-50"
                  style={{ backgroundColor: "var(--text-primary)" }}
                ></div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold">Taha Printing Services</h3>
                  <p>Graphic Designer & Social Media Manager</p>
                  <p className="text-sm">September 2023 - March 2024</p>
                </div>
                <div>
                  <h3 className="font-bold">Evolution Multimedia firm</h3>
                  <p>Logo Designer & Social Media Designer</p>
                  <p className="text-sm">February 2023 - March 2024</p>
                </div>
                <div>
                  <h3 className="font-bold">
                    Visual Graphics{" "}
                    <span className="font-normal">(Freelance)</span>
                  </h3>
                  <p className="text-sm">
                    I'm the owner of Visual Graphics. I'm mostly creating
                    content to attract my audience & also help them form my
                    content. I upload my personal project daily basis on it
                  </p>
                </div>
              </div>
            </div>

            {/* Creative Fields Section */}
            <div className="space-y-4">
              <div className="space-y-4">
                <h1
                  className="text-3xl lg:text-4xl font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  Creative Fields
                </h1>
                <div
                  className="h-px lg:w-1/3 w-auto opacity-50"
                  style={{ backgroundColor: "var(--text-primary)" }}
                ></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Logo Design",
                  "Branding Identity",
                  "Business Cards",
                  "Social Media Designer",
                  "Print Design, Flyers, Brouchers",
                  "Advertising Images Designer",
                  "Product Images Designer",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: "var(--accent-primary)" }}
                    ></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Software Section */}
            <div className="space-y-4">
              <div className="space-y-4">
                <h1
                  className="text-3xl lg:text-4xl font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  Software
                </h1>
                <div
                  className="h-px lg:w-1/3 w-auto opacity-50"
                  style={{ backgroundColor: "var(--text-primary)" }}
                ></div>
              </div>
              <div className="space-y-2">
                {["Adobe Photoshop", "Adobe Illustrator", "Capcut"].map(
                  (software) => (
                    <p key={software} className="flex items-center space-x-2">
                      <span
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: "var(--accent-primary)" }}
                      ></span>
                      <span>{software}</span>
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
