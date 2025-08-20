"use client";

import React from 'react';

const Contact = () => {
  return (
    <section className="bg-lightNeutral py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-primary mb-8">
            Ready to transform your lead generation? Let's discuss how VectorROI can help your business.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-sm">
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
              className="bg-accent text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
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
