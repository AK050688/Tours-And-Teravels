import React, { useState } from 'react';

const faqs = [
  {
    question: 'How do I book a trip?',
    answer: 'You can book a trip by browsing our destinations and selecting your preferred travel package. Then follow the booking instructions on the package page.',
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'Our cancellation policy varies by package. Please refer to the specific package details or contact our support team for assistance.',
  },
  {
    question: 'Do you offer group discounts?',
    answer: 'Yes, we offer group discounts for bookings of 5 or more people. Please contact us for more information.',
  },
  {
    question: 'How can I contact customer support?',
    answer: 'You can reach our customer support via the Contact Us page or by emailing support@toursandtravels.com.',
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h1>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6 border-b border-gray-300 pb-4">
            <button
              className="w-full text-left text-xl font-semibold text-gray-800"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
