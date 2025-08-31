"use client";

import React from 'react';

const Contact = () => {
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
      </div>

      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-primary mb-8">
            Ready to transform your lead generation? Let's discuss how VectorROI can help your business.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-2xl border-2 border-primary/20 hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.02]">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Contact Information</h3>
            <div className="space-y-3 text-primary">
              <p>📧 hello@vectorroi.com</p>
              <p>📱 +1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => alert('Contact form would open here!')}
              className="bg-accent text-white px-12 py-4 rounded-lg font-semibold hover:bg-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Send Us a Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
