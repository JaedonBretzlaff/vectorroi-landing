"use client";

import React from 'react';
import Image from 'next/image';

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
      description: 'We handle CAN-SPAM compliance automatically with opt-out workflows and suppression lists, ensuring safety.',
    },
    {
      id: 3,
      icon: '❤️',
      title: 'Dedicated Support & Strategy',
      description: 'Quarterly deliverability audits and ongoing AI improvements ensure your campaigns keep performing at their best.',
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
        <div className="absolute top-1/4 right-16 w-16 h-px bg-gradient-to-l from-transparent via-accent to-transparent opacity-25"></div>
        <div className="absolute bottom-1/4 left-16 w-20 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
        <div className="absolute top-2/3 right-1/4 w-14 h-px bg-gradient-to-l from-transparent via-primary to-transparent opacity-25"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* What Makes Us Different Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            What Makes Us Different
          </h2>
          <div className="w-48 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        {/* Two-column layout with image and text */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-20">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-center">
            <div className="relative h-[30rem] w-full max-w-4xl border-2 border-primary/20 rounded-2xl shadow-lg">
              <Image
                src="/brain.png"
                alt="What Makes VectorROI Different"
                fill
                className="object-contain object-center rounded-2xl"
                priority
                sizes="(max-width: 1024px) 100vw, 47vw"
              />
            </div>
          </div>
          
          {/* Right side - Text */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl border border-primary/20 shadow-lg p-8 relative h-[30rem] flex items-center">
              <p className="text-lg text-primary leading-relaxed text-center">
                At VectorROI, our biggest differentiator is our adaptive outreach engine. Unlike traditional lead gen providers that rely on static lists and fixed campaigns, our system continuously learns and adapts from every interaction. This means smarter targeting, stronger personalization, and built-in deliverability safeguards that keep your emails landing in the inbox. The result is higher-quality leads, better response rates, and ultimately more meetings booked per dollar spent.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Button for What Makes Us Different */}
        <div className="text-center mb-20">
          <button
            onClick={() => alert('Clicked!')}
            className="bg-accent text-white px-12 py-4 rounded-lg font-semibold hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg"
          >
            Learn More About Our Approach
          </button>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why Choose Us?
          </h2>
          <div className="w-48 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        {/* Features in a centered layout */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex items-start space-x-4 p-6 border border-primary/20 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <div className="text-3xl text-primary flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-primary/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <button
            onClick={() => alert('Clicked!')}
            className="bg-accent text-white px-12 py-4 rounded-lg font-semibold hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Get a Pipeline Projection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
