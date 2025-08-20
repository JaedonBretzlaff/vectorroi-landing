"use client";

import React from 'react';

const NavigationBanner = () => {
  const quickLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-accent py-3">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-2 sm:mb-0">
            <h1 className="text-xl font-bold text-white">VectorROI</h1>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 justify-center">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-medium hover:underline transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBanner;
