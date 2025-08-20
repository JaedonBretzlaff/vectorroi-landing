"use client";

import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Define Your Ideal Customers',
      description: 'We work with you to identify your perfect client profile and build targeted lead lists.',
    },
    {
      id: 2,
      title: 'AI-Powered Outreach',
      description: 'Our AI writes personalized emails and sends them on your behalf using warmed-up domains.',
    },
    {
      id: 3,
      title: 'Book Meetings Automatically',
      description: 'Qualified prospects book directly on your calendar without any manual effort.',
    },
    {
      id: 4,
      title: 'Continuous Improvement',
      description: 'AI learns from campaign data and optimizes deliverability, timing, and copy in real time.',
    },
  ];

  return (
    <section className="bg-lightNeutral py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            How it works
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.id} className="text-center">
              <div className="mb-4">
                <span className="text-lg font-semibold text-primary">
                  Step {step.id}:
                </span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-primary leading-relaxed">
                {step.description}
              </p>
            </div>
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

export default HowItWorks;
