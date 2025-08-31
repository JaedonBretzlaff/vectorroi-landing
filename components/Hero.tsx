"use client";

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-background py-16 sm:py-20 lg:py-24">
      {/* Colored Banner Section */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-primary via-accent to-primary opacity-10"></div>
      
      {/* Banner with blue text - no background fill */}
      <div className="absolute top-8 left-8 right-8 z-10">
        <div className="flex flex-col sm:flex-row items-center justify-start">
          {/* Logo and Title in top left */}
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <img
              src="/logo.svg"
              alt="VectorROI Logo"
              className="h-20 w-auto"
            />
            {/* Company Name - Made Bigger */}
            <h1 className="text-4xl sm:text-5xl font-bold text-primary">VectorROI</h1>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-accent font-medium tracking-wide uppercase">
                lead generation service
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Book More High-Value Client Meetings on Autopilot
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-primary max-w-2xl">
              Our AI-powered email automation platform turns cold leads into sales-ready conversations so your agency can close more deals without the endless outreach grind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => alert('Clicked!')}
                className="bg-accent text-white px-12 py-4 rounded-lg font-semibold hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 shadow-lg"
              >
                Book Your Free Consultation
              </button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="order-first lg:order-last">
            <div className="relative">
              <Image
                src="/hero.jpg"
                alt="VectorROI Hero Image"
                width={800}
                height={600}
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                priority
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-primary/5 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background shadowing/contrast elements spread throughout the page */}
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
      </div>
    </section>
  );
};

export default Hero;
