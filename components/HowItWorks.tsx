"use client";

import React from 'react';
import Image from 'next/image';

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
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
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
        <div className="absolute top-1/4 left-1/4 w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-25"></div>
        <div className="absolute top-3/4 left-1/4 w-14 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-35"></div>
        
        {/* Right side accent lines */}
        <div className="absolute top-1/4 right-1/4 w-20 h-px bg-gradient-to-l from-transparent via-accent to-transparent opacity-25"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-px bg-gradient-to-l from-transparent via-primary to-transparent opacity-20"></div>
        <div className="absolute top-3/4 right-1/4 w-18 h-px bg-gradient-to-l from-transparent via-accent to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            How it works
          </h2>
          <div className="w-40 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        {/* Main content with image and steps */}
        <div className="grid lg:grid-cols-15 gap-12 items-center">
          {/* Left side - Steps */}
          <div className="lg:col-span-8">
            <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Step Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg font-bold">
                        {step.id}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-primary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Arrow connecting to next step */}
              {index < steps.length - 1 && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full z-20">
                  <div className="flex flex-col items-center">
                    {/* Arrow line */}
                    <div className="w-0.5 h-6 bg-gradient-to-b from-primary to-accent"></div>
                    {/* Arrow head */}
                    <div className="w-0 h-0 border-t-3 border-t-accent border-l-2 border-l-transparent border-r-2 border-r-transparent mt-1"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
            </div>
          </div>
          
          {/* Right side - Process Image */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="relative h-[30rem] w-full max-w-3xl border-2 border-primary/20 rounded-2xl shadow-lg">
              <Image
                src="/define.png"
                alt="How VectorROI works"
                fill
                className="object-contain rounded-2xl"
                priority
                sizes="(max-width: 1024px) 100vw, 47vw"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <button
            onClick={() => alert('Clicked!')}
            className="bg-accent text-white px-12 py-4 rounded-lg font-semibold hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg"
          >
            Start Booking More Meetings
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
