import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { ChevronDown, ChevronUp } from 'lucide-react'

function FAQsSection() {
    const { isDark } = useTheme();
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqsData = [
        {
            question: "What design services do you offer?",
            answer: "I offer logo design, brand identity design, social media branding, and visual branding services. Every project is tailored to match the brand’s unique identity and vision."
        },
        {
            question: "How long does it take to complete a logo or branding project?",
            answer: "The timeline depends on the complexity of the project and client requirements. Typically, a logo design project takes 3-7 days, while a full branding project can take 1-2 weeks."
        },
        {
            question: "Do you offer revisions?",
            answer: "Yes, I provide multiple revisions to ensure the design meets your expectations. Each package includes a specific number of revisions."
        },
        {
            question: "What is the process for getting a brand identity designed?",
            answer: "First, I gather details about your brand and vision. Then, I conduct research and brainstorming to develop design concepts. Based on your feedback, I refine the design and deliver the final files."
        }
    ];

    const bgStyle = {
        backgroundColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
        borderLeft: "4px solid var(--color-teal)",
    };

    return (
        <div
            className="w-full py-16 md:py-24"
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
                        Frequently Asked Questions
                    </h2>
                    <div
                        className="w-32 h-1 mx-auto mt-5"
                        style={{ backgroundColor: "var(--color-teal)" }}
                    ></div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {faqsData.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="mb-6 rounded-lg shadow-lg overflow-hidden"
                            style={bgStyle}
                            initial={{ opacity: 0.5, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-5%" }}
                        >
                            <button
                                className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <h3 className="font-semibold text-lg">
                                    {faq.question}
                                </h3>
                                <div
                                    className="ml-4 transition-transform duration-300"
                                    style={{
                                        color: "var(--color-teal)",
                                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                                    }}
                                >
                                    {openIndex === index ? (
                                        <ChevronUp size={24} />
                                    ) : (
                                        <ChevronDown size={24} />
                                    )}
                                </div>
                            </button>
                            
                            <div
                                className="overflow-hidden transition-all duration-300"
                                style={{
                                    maxHeight: openIndex === index ? '500px' : '0',
                                    opacity: openIndex === index ? 1 : 0
                                }}
                            >
                                <div className="p-6 pt-0">
                                    <p className="text-sm opacity-90">{faq.answer}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQsSection