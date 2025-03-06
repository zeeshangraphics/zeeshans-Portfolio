"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactPage = () => {
  const { isDark } = useTheme();
  const [hoveredButton, setHoveredButton] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        Swal.fire({
          title:
            "<h2 style='font-size: 1.2rem; margin-bottom: 10px;'>Message sent successfully!</h2>",
          icon: "success",
          draggable: true,
          width: "300px",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        title:
          "<h2 style='font-size: 1.2rem; margin-bottom: 10px;'>Something went wrong!</h2>",
        icon: "error",
        draggable: true,
        width: "300px",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Styles
  const bgStyle = {
    backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
    borderLeft: "4px solid var(--color-teal)",
  };

  const inputStyle = (isFocused) => ({
    width: "100%",
    padding: "12px 16px",
    backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
    color: isDark ? "var(--color-grey)" : "var(--color-dark-grey)",
    border: isFocused
      ? "2px solid var(--color-teal)"
      : `2px solid ${isDark ? "#333" : "#e0e0e0"}`,
    borderRadius: "6px",
    outline: "none",
    transition: "all 0.3s ease",
  });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const formItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  return (
    <motion.div
      className={`min-h-screen lg:pt-16 lg:pl-10 ${isDark ? "dark-mode" : ""}`}
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <motion.form
          onSubmit={onSubmit}
          className="grid md:grid-cols-2 gap-16"
          variants={staggerContainer}
        >
          {/* Contact Information */}
          <motion.div className="space-y-8" variants={staggerContainer}>
            <motion.h1
              className="text-5xl lg:text-6xl font-bold"
              style={{ color: "var(--color-teal)" }}
              variants={fadeIn}
              custom={1}
            >
              Contact Me
            </motion.h1>

            <motion.div
              className="divider"
              style={{
                height: "2px",
                backgroundColor: "var(--color-teal)",
                width: "1/3",
              }}
              initial={{ width: 0 }}
              animate={{ width: "33%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.h2
              className="text-2xl font-semibold"
              variants={fadeIn}
              custom={2}
            >
              Get in touch
            </motion.h2>

            {/* Email Card */}
            <motion.div
              className="p-4 rounded-lg shadow-lg"
              style={bgStyle}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center space-x-3">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "var(--color-teal)" }}
                  variants={iconVariants}
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </motion.svg>
                <motion.div variants={fadeIn} custom={3}>
                  <p className="opacity-80">Email:</p>
                  <motion.a
                    href="mailto:info.muhammadzeeshan53@gmail.com"
                    style={{
                      color: "var(--text-primary)",
                      transition: "duration-300",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.color = "var(--color-teal)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.color = "var(--text-primary)")
                    }
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    info.muhammadzeeshan53@gmail.com
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="p-4 rounded-lg shadow-lg"
              style={bgStyle}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center space-x-3">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "var(--color-teal)" }}
                  variants={iconVariants}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </motion.svg>
                <motion.div variants={fadeIn} custom={4}>
                  <p className="opacity-80">Phone:</p>
                  <motion.a
                    href="tel:(+92) 370 4016847"
                    style={{
                      color: "var(--text-primary)",
                      transition: "duration-300",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.color = "var(--color-teal)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.color = "var(--text-primary)")
                    }
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    (+92) 370 4016847
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form Fields */}
          <motion.div className="space-y-6" variants={staggerContainer}>
            <motion.h2
              className="text-3xl font-bold text-center mb-4"
              style={{ color: "var(--color-teal)" }}
              variants={fadeIn}
              custom={0}
            >
              Send Us a Message
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={staggerContainer}
            >
              <motion.div variants={formItemVariants} custom={0}>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  style={inputStyle(focusedField === "name")}
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <motion.div variants={formItemVariants} custom={1}>
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  style={inputStyle(focusedField === "email")}
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>

            <motion.div variants={formItemVariants} custom={2}>
              <motion.input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                style={inputStyle(focusedField === "subject")}
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField(null)}
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div variants={formItemVariants} custom={3}>
              <motion.textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
                style={{
                  ...inputStyle(focusedField === "message"),
                  resize: "none",
                }}
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div variants={formItemVariants} custom={4}>
              <motion.button
                type="submit"
                className="btn flex items-center justify-center"
                style={{
                  padding: "12px 24px",
                  backgroundColor: hoveredButton
                    ? "var(--color-teal)"
                    : "transparent",
                  color: hoveredButton ? "white" : "var(--text-primary)",
                  border: "2px solid var(--color-teal)",
                  borderRadius: "6px",
                  fontWeight: "500",
                  cursor: isSubmitting ? "wait" : "pointer",
                  opacity: isSubmitting ? 0.7 : 1,
                  transition: "background-color 0.2s ease, color 0.2s ease", 
                }}
                onMouseEnter={() => setHoveredButton(true)}
                onMouseLeave={() => setHoveredButton(false)}
                disabled={isSubmitting}
                variants={buttonVariants}
                whileTap="tap" // Keeping only whileTap
              >
                {!isSubmitting && (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={hoveredButton ? "white" : "var(--color-teal)"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </motion.svg>
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
