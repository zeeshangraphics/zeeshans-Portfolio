"use client";

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import PageHeading from "../components/PageHeading";

const ContactPage = () => {
  const { isDark } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
          title: "Message sent successfully!",
          icon: "success",
          width: "300px",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      Swal.fire({
        title: "Something went wrong!",
        icon: "error",
        width: "300px",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Styles
  const cardStyle = {
    backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
    borderLeft: "4px solid var(--color-teal)",
    height: "100%",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
    color: isDark ? "var(--color-grey)" : "var(--color-dark-grey)",
    border: `2px solid ${isDark ? "#333" : "#e0e0e0"}`,
    borderRadius: "6px",
    outline: "none",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    padding: "12px 24px",
    backgroundColor: "transparent",
    color: "var(--text-primary)",
    border: "2px solid var(--color-teal)",
    borderRadius: "6px",
    fontWeight: "500",
    cursor: isSubmitting ? "wait" : "pointer",
    opacity: isSubmitting ? 0.7 : 1,
  };

  const sectionHeadingStyle = {
    color: "var(--color-teal)",
    position: "relative",
    display: "inline-block",
    paddingBottom: "10px",
    marginBottom: "24px",
  };

  const headingUnderlineStyle = {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "60px",
    height: "3px",
    backgroundColor: "var(--color-teal)",
  };

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={`min-h-screen pt-8 lg:pt-16 px-4 lg:px-10 ${isDark ? "dark-mode" : ""}`}
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Custom Page Heading */}
      <motion.h2
                className="text-4xl lg:text-5xl font-bold text-center mb-8"
                style={{ color: "var(--color-teal)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Contact Page
              </motion.h2>
              <div className="w-24 h-1 bg-[var(--color-teal)] mx-auto mb-12"></div>

      <div className="max-w-screen-xl mx-auto pb-16">
        <motion.form
          onSubmit={onSubmit}
          className="grid md:grid-cols-2 gap-8 lg:gap-16"
          variants={staggerChildren}
        >
          {/* Contact Information */}
          <motion.div 
            className="flex flex-col justify-between space-y-6" 
            variants={fadeIn}
          >
            <div>
              <h2 style={sectionHeadingStyle} className="text-2xl md:text-3xl font-bold">
                Get in touch
              </h2>
              
              <div className="grid grid-cols-1 gap-6">
                {/* Email Card */}
                <motion.div
                  className="p-5 rounded-lg shadow-lg flex items-start"
                  style={cardStyle}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  variants={fadeIn}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--color-teal)", minWidth: "24px" }}
                    className="mt-1 mr-4"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div>
                    <p className="font-medium text-lg">Email:</p>
                    <motion.a
                      href="mailto:info.muhammadzeeshan53@gmail.com"
                      style={{ color: "var(--text-primary)" }}
                      className="opacity-80 hover:opacity-100"
                      whileHover={{ x: 5, color: "var(--color-teal)" }}
                    >
                      info.muhammadzeeshan53@gmail.com
                    </motion.a>
                  </div>
                </motion.div>

                {/* Phone Card */}
                <motion.div
                  className="p-5 rounded-lg shadow-lg flex items-start"
                  style={cardStyle}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  variants={fadeIn}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--color-teal)", minWidth: "24px" }}
                    className="mt-1 mr-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <p className="font-medium text-lg">Phone:</p>
                    <motion.a
                      href="tel:(+92) 370 4016847"
                      style={{ color: "var(--text-primary)" }}
                      className="opacity-80 hover:opacity-100"
                      whileHover={{ x: 5, color: "var(--color-teal)" }}
                    >
                      (+92) 370 4016847
                    </motion.a>
                  </div>
                </motion.div>

                {/* Address Card (New) */}
                <motion.div
                  className="p-5 rounded-lg shadow-lg flex items-start"
                  style={cardStyle}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  variants={fadeIn}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--color-teal)", minWidth: "24px" }}
                    className="mt-1 mr-4"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="font-medium text-lg">Address:</p>
                    <p className="opacity-80">
                      Lahore, Punjab, Pakistan
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Fields */}
          <motion.div 
            className="bg-[var(--bg-secondary)] p-6 rounded-lg shadow-lg" 
            style={{border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.05)"}}
            variants={fadeIn}
          >
            <h2 style={sectionHeadingStyle} className="text-2xl md:text-3xl font-bold">
              Send a Message
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.input
                type="text"
                name="name"
                placeholder="Name"
                required
                style={inputStyle}
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.01, borderColor: "var(--color-teal)" }}
                className="focus:border-[var(--color-teal)]"
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Email"
                required
                style={inputStyle}
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.01, borderColor: "var(--color-teal)" }}
                className="focus:border-[var(--color-teal)]"
              />
            </div>

            <motion.input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              style={inputStyle}
              value={formData.subject}
              onChange={handleChange}
              whileFocus={{ scale: 1.01, borderColor: "var(--color-teal)" }}
              className="mb-6 focus:border-[var(--color-teal)]"
            />

            <motion.textarea
              name="message"
              placeholder="Message"
              rows="6"
              required
              style={{
                ...inputStyle,
                resize: "none",
              }}
              value={formData.message}
              onChange={handleChange}
              whileFocus={{ scale: 1.01, borderColor: "var(--color-teal)" }}
              className="mb-6 focus:border-[var(--color-teal)]"
            />

            <motion.button
              type="submit"
              style={buttonStyle}
              className="group flex items-center"
              whileHover={{ backgroundColor: "var(--color-teal)", color: "white" }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {!isSubmitting && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 transition-transform group-hover:translate-x-1"
                >
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactPage;