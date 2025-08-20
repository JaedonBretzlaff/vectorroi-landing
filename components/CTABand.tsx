"use client";

import React from 'react';

const CTABand = () => {
  return (
    <section className="bg-accent py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
            Start Booking More Meetings Today
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => alert('Clicked!')}
              className="bg-white text-accent px-8 py-4 rounded-lg font-semibold hover:bg-lightNeutral transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent"
            >
              Get Started
            </button>
            <button
              onClick={() => alert('Clicked!')}
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
