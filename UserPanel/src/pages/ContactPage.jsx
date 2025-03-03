import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const { isDark } = useTheme();
  const [hoveredButton, setHoveredButton] = useState(false);
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

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: isDark ? "#1a1a1a" : "#ffffff",
    color: isDark ? "var(--color-grey)" : "var(--color-dark-grey)",
    border: "2px solid var(--color-teal)",
    borderRadius: "6px",
    outline: "none",
    transition: "all 0.3s ease",
  };

  return (
    <div
      className={`min-h-screen lg:pt-16 ${isDark ? "dark-mode" : ""}`}
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-primary)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h1
              className="text-5xl lg:text-6xl font-bold"
              style={{ color: "var(--color-teal)" }}
            >
              Contact Me
            </h1>
            <div
              className="divider"
              style={{
                height: "2px",
                backgroundColor: "var(--color-teal)",
                width: "1/3",
              }}
            ></div>
            <h2 className="text-2xl font-semibold">Get in touch</h2>
            <div className="space-y-4">
              <div>
                <p className="opacity-80">Email:</p>
                <a
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
                >
                  info.muhammadzeeshan53@gmail.com
                </a>
              </div>
              <div>
                <p className="opacity-80">Phone:</p>
                <a
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
                >
                  (+92) 370 4016847
                </a>
              </div>
            </div>
            <p>
              Let's bring your creative vision to life. Whether you need
              branding, web design, or a complete visual identity, I'm here to
              help you stand out in today's competitive market.
            </p>
          </div>

          {/* Contact Form Fields */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                style={inputStyle}
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                style={inputStyle}
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              style={inputStyle}
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              style={{ ...inputStyle, resize: "none" }}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
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
                transition: "all 0.3s ease",
                opacity: isSubmitting ? 0.7 : 1,
              }}
              onMouseEnter={() => setHoveredButton(true)}
              onMouseLeave={() => setHoveredButton(false)}
              disabled={isSubmitting}
            >
              {isSubmitting && (
                <span
                  className="inline-block mr-2"
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    border: "2px solid transparent",
                    borderTopColor: hoveredButton
                      ? "white"
                      : "var(--color-teal)",
                    borderLeftColor: hoveredButton
                      ? "white"
                      : "var(--color-teal)",
                    animation: "spin 1s linear infinite",
                  }}
                ></span>
              )}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
