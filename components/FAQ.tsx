"use client";

import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: 'What makes this different?',
      answer: 'VectorROI combines AI-powered personalization with proven outreach sequences to deliver results that generic automation tools simply can\'t match. Our system learns from your data and continuously optimizes for better performance.',
    },
    {
      id: 2,
      question: 'Onboarding',
      answer: 'Getting started is simple. Our team will help you set up your first campaign within 48 hours, and you\'ll be seeing results in < 5 days from contract to live test send. We provide comprehensive training and ongoing support.',
    },
    {
      id: 3,
      question: 'Pricing',
      answer: 'Flat retainer: $3,000/mo (unlimited outreach + booking guarantee).',
    },
    {
      id: 4,
      question: 'Contract',
      answer: 'We believe in earning your business every month. All our plans are month-to-month with no long-term contracts or hidden fees. You can cancel anytime with no questions asked.',
    },
  ];

  return (
    <section className="bg-lightNeutral py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4 mb-12">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group bg-white rounded-lg border border-primary overflow-hidden"
            >
              <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-lightNeutral transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset">
                <span className="font-semibold text-primary">{faq.question}</span>
                <span className="text-primary text-xl transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-4 pb-4">
                <p className="text-primary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => alert('Clicked!')}
            className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Book Your Free Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
