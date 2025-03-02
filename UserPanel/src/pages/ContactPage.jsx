import React, { useState } from "react";
import SocialSidebar from "../components/Sidebar";
import Swal from "sweetalert2";
import { useTheme } from "../context/ThemeContext";

const ContactPage = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "6ac0c56b-a72f-4c05-ac07-e6b69a934d81");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title:
            "<h2 style='font-size: 1.2rem; margin-bottom: 10px;'>Message sent successfully!</h2>",
          icon: "success",
          draggable: true,
          width: "300px",
        });
        event.target.reset();
      }
    } catch (error) {
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

  return (
    <div className="min-h-screen lg:pt-16 relative">
      <SocialSidebar />
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h1 className="text-5xl lg:text-6xl font-bold">Contact Me</h1>
            </div>

            <div className="divider"></div>

            <h2 className="text-2xl font-semibold">Get in touch</h2>

            <div className="space-y-4">
              <div>
                <p className="opacity-80">Email:</p>
                <a
                  href="mailto:info.muhammadzeeshan53@gmail.com"
                  className="hover:text-accent-primary"
                >
                  info.muhammadzeeshan53@gmail.com
                </a>
              </div>

              <div>
                <p className="opacity-80">Phone:</p>
                <a
                  href="tel:(+92) 370 4016847"
                  className="hover:text-accent-primary"
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
              <div>
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div>
                <input type="email" name="email" placeholder="Email" required />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn flex items-center justify-center"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="inline-block w-5 h-5 border-2 border-transparent border-t-current border-l-current rounded-full animate-spin mr-2"></span>
              ) : null}
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
