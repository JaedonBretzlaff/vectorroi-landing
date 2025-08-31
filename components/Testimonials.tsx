"use client";

import React from 'react';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background shadowing/contrast elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left area */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-6 rounded-full blur-3xl"></div>
        
        {/* Top right area */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent opacity-5 rounded-full blur-3xl"></div>
        
        {/* Middle left area */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent opacity-4 rounded-full blur-2xl"></div>
        
        {/* Middle right area */}
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary opacity-5 rounded-full blur-2xl"></div>
        
        {/* Bottom left area */}
        <div className="absolute bottom-0 left-0 w-88 h-88 bg-accent opacity-3 rounded-full blur-3xl"></div>
        
        {/* Bottom right area */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-4 rounded-full blur-3xl"></div>
        
        {/* Center area */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-primary opacity-2 rounded-full blur-xl"></div>
        
        {/* Modern geometric elements */}
        {/* Clean lines */}
        <div className="absolute top-1/4 left-1/6 w-16 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-25"></div>
        <div className="absolute top-1/4 right-1/6 w-18 h-px bg-gradient-to-l from-transparent via-accent to-transparent opacity-25"></div>
        <div className="absolute top-1/2 left-1/4 w-14 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-20"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-px bg-gradient-to-l from-transparent via-primary to-transparent opacity-20"></div>
        <div className="absolute top-2/3 left-1/6 w-20 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Outsmart. Outbuild. Outlast.
          </h2>
          <div className="w-72 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Quote Section */}
          <div className="p-8 border border-primary/20 rounded-2xl shadow-lg bg-white">
            <blockquote className="text-primary leading-relaxed text-lg sm:text-xl mb-8">
              We are not here to charm you; we are here to build what works. I co-founded VectorROI because most growth agencies are reactive, bloated, and allergic to accountability. We take a different route, we engineer precision systems that create net-new pipeline on command.
              <br /><br />
              Hype is noise, control is power. Our entire model exists for one goal, to help disciplined B2B SaaS founders dominate their category through clarity, speed, and relentless execution.
              <br /><br />
              You will never see us chasing trends. We build machines that outlive them.
            </blockquote>
            
            <div className="flex items-center justify-center">
              <div className="text-center">
                <h4 className="font-semibold text-primary text-lg">Richie Sakhon</h4>
                <p className="text-sm text-primary/70">Co-founder of VectorROI</p>
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="flex justify-center lg:justify-center">
            <div className="relative w-full max-w-3xl h-[30rem] border-2 border-primary/20 rounded-2xl shadow-lg">
              <Image
                src="/blank.png"
                alt="Precision engineering and systems"
                fill
                className="object-contain rounded-2xl"
                priority
                sizes="(max-width: 1024px) 100vw, 47vw"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button
            onClick={() => alert('Clicked!')}
            className="bg-accent text-white px-12 py-4 rounded-lg font-semibold hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Book Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
