import React from "react";
import SocialSidebar from "../components/Sidebar";
import Swal from "sweetalert2";

const ContactPage = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6ac0c56b-a72f-4c05-ac07-e6b69a934d81");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

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
    }
    event.target.reset();
  };

  return (
    <div className="min-h-screen bg-[#0C0C0C] lg:pt-16 relative">
      <SocialSidebar />
      <div className="max-w-screen-xl mx-auto px-4 py-16">
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl text-white">Contact Me</h1>
            <div className="h-px w-auto bg-white opacity-50"></div>
            <h2 className="text-2xl font-semibold text-white">Get in touch</h2>

            <div className="space-y-4">
              <div>
                <p className="text-gray-400">Email:</p>
                <a
                  href="mailto:name@domain.com"
                  className="text-white hover:text-gray-300"
                >
                  name@domain.com
                </a>
              </div>

              <div>
                <p className="text-gray-400">Phone:</p>
                <a
                  href="tel:(555)123-4567"
                  className="text-white hover:text-gray-300"
                >
                  (555)123-4567
                </a>
              </div>
            </div>

            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet
              pharetra.
            </p>
          </div>

          {/* Contact Form Fields */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-3 border border-x-white bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 border border-x-white bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className="w-full p-3 border border-x-white bg-transparent text-white placeholder-gray-500 focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-2 text-white hover:bg-gray-200 hover:text-black transition-colors bg-transparent border border-x-white"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
