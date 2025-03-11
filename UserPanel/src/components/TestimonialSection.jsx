import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Quote } from 'lucide-react'

function TestimonialSection() {
    const { isDark } = useTheme();
    const bgStyle = {
        backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
        borderLeft: "4px solid var(--color-teal)",
    };
    
    const testimonials = [
        {
            name: "Aznair Tariq",
            role: "CEO",
            company: "Lead Studio",
            content:
                "I hired Muhammad Zeeshan to design my Linkedin banner and our agency banner, and he did an excellent job. His creativity, proffeionalism, and attention to detail are outstanding. I highly recommend him.",
            image: "/aznair.jpg", // Add the path to the actual image
            initials: "AT", // Keep as fallback
        },
        {
            name: "Najam ul Sehar",
            role: "Blog Writer",
            company: "Freelancer",
            content: "Zeeshan is a great graphic designer. I really appericiate his designing skills. I recommend zeeshan to alll the people out there who need outclass graphics and designing services. I would definitely want to work again with him",
            image: "/najam.jpg", // Add the path to the actual image
            initials: "NS", // Keep as fallback
        },
        {
            name: "Muhammad Rizwan",
            role: "Creative Director",
            company: "Artisan Studios",
            content:
                "The social media designs Muhammad created for our campaign exceeded expectations. Our engagement increased by 47% in the first month of implementation.",
            image: "/rizwan.jpg", // Add the path to the actual image
            initials: "MR", // Keep as fallback
        },
        {
            name: "Ahmad Amin",
            role: "Owner",
            company: "Authority Node",
            content:
                "As a fellow creative professional, I'm extremely particular about design. Muhammad understood my vision immediately and delivered a brand identity that perfectly represents my photography style.",
            image: "/ahmad.jpg", // Add the path to the actual image
            initials: "AA", // Keep as fallback
        },
    ];

    return (
        <div
            className="w-full py-16 md:py-24 bg-opacity-5"
            style={{ backgroundColor: isDark ? "#ffffff0d" : "#00000005" }}
        >
            <div className="max-w-7xl px-4 mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0.5, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, margin: "-5%" }}
                >
                    <h2
                        className="text-4xl md:text-5xl font-bold"
                        style={{ color: "var(--color-teal)" }}
                    >
                        Client Testimonials
                    </h2>
                    <div
                        className="w-32 h-1 mx-auto mt-5"
                        style={{ backgroundColor: "var(--color-teal)" }}
                    ></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="p-6 rounded-lg shadow-lg flex flex-col h-full relative"
                            style={bgStyle}
                            initial={{ opacity: 0.5, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-5%" }}
                        >
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden">
                                    {testimonial.image ? (
                                        <img
                                            src={testimonial.image}
                                            alt={`${testimonial.name}'s photo`}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                // If image fails to load, show initials as fallback
                                                e.target.parentNode.innerHTML = `<div class="w-16 h-16 rounded-full flex items-center justify-center text-gray-700 font-medium text-lg bg-gray-200">${testimonial.initials}</div>`;
                                            }}
                                        />
                                    ) : (
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-gray-700 font-medium text-lg bg-gray-200">
                                            {testimonial.initials}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-semibold">{testimonial.name}</h3>
                                    <p className="text-xs opacity-70">{testimonial.role}</p>
                                    <p className="text-xs opacity-70">{testimonial.company}</p>
                                </div>
                            </div>
                            <p className="italic text-sm">
                                {testimonial.content}
                            </p>
                            <div className="absolute bottom-4 right-4 opacity-10">
                                <Quote size={32} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection