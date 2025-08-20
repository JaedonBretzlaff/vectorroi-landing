"use client";

import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '🔍',
      title: 'Transparent Campaign Analytics',
      description: 'Get full visibility on sends, opens, replies, and bookings through our white-label dashboard and Slack alerts.',
    },
    {
      id: 2,
      icon: '🛡️',
      title: 'Compliance Built-In',
      description: 'We handle GDPR and CASL regulations automatically with opt-out workflows and suppression lists, ensuring safety.',
    },
    {
      id: 3,
      icon: '❤️',
      title: 'Dedicated Support & Strategy',
      description: 'Quarterly deliverability audits and ongoing AI improvements ensure your campaigns keep performing at their best.',
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Why Choose Us?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="p-8 border border-primary rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <div className="text-4xl mb-4 text-primary flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-primary leading-relaxed text-center">
                {feature.description}
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

export default Features;
