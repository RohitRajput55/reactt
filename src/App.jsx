import React, { useState, useRef } from "react";

const FAQ = () => {
  const [selected, setSelected] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-5">
      <h2 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, i) => (
          <div key={i} className="border-b border-gray-200 pb-3">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(i)}
            >
              <h3 className="text-lg text-gray-600 font-medium">{item.question}</h3>
              <span className="text-lg">{selected === i ? "-" : "+"}</span>
            </div>
            <div
              ref={(el) => (contentRefs.current[i] = el)}
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                selected === i ? "max-h-screen" : "max-h-0"
              }`}
              style={{ maxHeight: selected === i ? `${contentRefs.current[i]?.scrollHeight}px` : "0px" }}
            >
              <div className="mt-3 text-gray-600">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "How can I trust your cargo shipping service?",
    answer: "At Y & H Cargo Pvt. Ltd., trust is our foundation. We ensure the safety and security of your cargo through advanced tracking systems, rigorous quality checks, and a proven track record of reliable deliveries. Our commitment to transparency and customer satisfaction has earned us the trust of businesses worldwide."
  },
  {
    question: "What sets your freight service apart from others?",
    answer: "Our freight service stands out for its personalized approach and comprehensive solutions. From tailored shipping options to real-time updates and dedicated customer support, we prioritize your unique requirements. We believe in going beyond expectations to deliver a seamless and unparalleled cargo experience."
  },
  {
    question: "Is Air Cargo Charges For Packaging High?",
    answer: "Air cargo charges for packaging can vary depending on the size, weight, and nature of the goods being shipped. While air freight rates are generally higher than ocean freight, the packaging charges themselves are typically not significantly higher. The cost of packaging is usually a small portion of the overall air freight charges."
  },
  {
    question: "Can I track my cargo in real-time?",
    answer: "Yes, we provide advanced tracking systems that enable you to monitor your cargo's journey in real-time. Our technology ensures visibility, allowing you to stay informed about the location, status, and estimated delivery time of your shipments. We prioritize transparency to give you peace of mind."
  },
  {
    question: "How do you ensure the timely delivery of cargo?",
    answer: "Timely delivery is our top priority. We employ efficient logistics processes, strategic partnerships, and a global network to streamline cargo movements. Our team is dedicated to meeting deadlines and optimizing routes, ensuring that your cargo arrives on time, every time. Your business success is our commitment."
  }
];

export default FAQ;
