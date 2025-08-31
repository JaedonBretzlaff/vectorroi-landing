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
    <section className="relative bg-background py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background shadowing/contrast elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left area */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-8 rounded-full blur-3xl"></div>
        
        {/* Top right area */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent opacity-7 rounded-full blur-3xl"></div>
        
        {/* Middle left area */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent opacity-6 rounded-full blur-2xl"></div>
        
        {/* Middle right area */}
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary opacity-7 rounded-full blur-2xl"></div>
        
        {/* Bottom left area */}
        <div className="absolute bottom-0 left-0 w-88 h-88 bg-accent opacity-5 rounded-full blur-3xl"></div>
        
        {/* Bottom right area */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-6 rounded-full blur-3xl"></div>
        
        {/* Center area */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-primary opacity-4 rounded-full blur-xl"></div>
        
        {/* Modern geometric elements */}
        {/* Clean lines */}
        <div className="absolute top-1/4 left-1/4 w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-px bg-gradient-to-l from-transparent via-accent to-transparent opacity-25"></div>
        <div className="absolute bottom-1/3 left-1/4 w-18 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"></div>
        <div className="absolute top-2/3 right-1/3 w-14 h-px bg-gradient-to-l from-transparent via-primary to-transparent opacity-25"></div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-80 h-1 bg-accent mx-auto rounded-full"></div>
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
            className="bg-accent text-white px-12 py-4 rounded-lg font-semibold hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Book Your Free Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
