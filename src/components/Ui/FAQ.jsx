import React, { useState } from 'react'

const FAQ = () => {
    const [openFAQIndex, setOpenFAQIndex] = useState(null);
    const faqJson = [{
        "question": "Can I cancel the plan after purchase?",
        "answer": "We do not offer refunds on cancellations. For more details, please visit our <a href='https://navyaedu.com/setting?page=termservice' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline'>Terms & Conditions</a> page to view our cancellation and refund policy."
    },
    {
        "question": "How can I access the course materials?",
        "answer": "It's simple! After a successful purchase, you can access the course materials by <a href='https://navyaedu.com/signin/' target='_blank' rel='noopener noreferrer' class='text-blue-500 hover:underline'>logging</a> into your account. If you want to access them on a mobile device, click on the link for the <a href='https://play.google.com' class='text-blue-500 hover:underline'>Play Store</a> or <a href='https://www.apple.com/app-store/' class='text-blue-500 hover:underline'>App Store</a>."
    },
    {
        "question": "How can I use the EMI option?",
        "answer": "The availability and terms of EMI options depend on the banks partnered with our payment gateway. To find out more, visit the purchase page and select the EMI option to view the participating banks and their offerings."
    }
    ]


    // Function to toggle the FAQ answer
    const toggleFAQ = (index) => {
        setOpenFAQIndex(openFAQIndex === index ? null : index);
    };
    return (
        <section className="container mx-auto mt-8 mb-16">
            <h2 className="text-2xl font-semibold text-center mb-4">Frequently Asked Questions (FAQs)</h2>
            <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto">
                {faqJson.map((faq, index) => (
                    <div key={index} className="faq-item border-b border-gray-300">
                        <button
                            className="faq-question flex justify-between items-center w-full text-left text-xl font-semibold py-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{faq.question}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className={`w-5 h-5 transition-transform transform ${openFAQIndex === index ? "rotate-180" : ""
                                    }`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            className={`faq-answer px-4 py-2 text-gray-700 ${openFAQIndex === index ? "block" : "hidden"
                                }`}
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQ