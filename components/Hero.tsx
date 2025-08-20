"use client";

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      {/* Banner with blue text - no background fill */}
      <div className="absolute top-8 left-8 right-8 z-10">
        <div className="flex flex-col sm:flex-row items-center justify-start">
          {/* Logo and Title in top left */}
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-primary">
              <div className="relative w-8 h-8">
                {/* VectorROI Logo - Stylized V with upward arrow */}
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Main V shape with integrated upward arrow */}
                  <path 
                    d="M8 24 L16 8 L24 24 L16 8 L16 4" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    fill="none"
                    className="text-primary"
                  />
                  {/* Arrowhead */}
                  <path 
                    d="M16 4 L18 8 L14 8 Z" 
                    fill="currentColor"
                    className="text-primary"
                  />
                </svg>
              </div>
            </div>
            {/* Company Name - Made Bigger */}
            <h1 className="text-4xl sm:text-5xl font-bold text-primary">VectorROI</h1>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Book More High-Value Client Meetings on Autopilot
            </h1>
            <p className="text-lg sm:text-xl text-primary max-w-2xl">
              Our AI-powered email automation platform turns cold leads into sales-ready conversations so your agency can close more deals without the endless outreach grind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => alert('Clicked!')}
                className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Book Your Free Demo
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
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
