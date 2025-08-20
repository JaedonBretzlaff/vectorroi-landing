"use client";

import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Sales Director, TechCorp',
      quote: 'VectorROI has transformed our lead generation process. We\'re booking 3x more meetings with high-value prospects.',
      avatar: '👩‍💼',
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Founder, GrowthStart',
      quote: 'The automation is incredible. I can focus on closing deals instead of spending hours on outreach.',
      avatar: '👨‍💻',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'VP Sales, ScaleUp Inc',
      quote: 'Finally, a tool that actually delivers on its promises. Our pipeline has never been stronger.',
      avatar: '👩‍💼',
    },
  ];

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 border border-primary rounded-xl shadow-sm bg-white"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-primary/70">{testimonial.title}</p>
                </div>
              </div>
              <blockquote className="text-primary italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
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

export default Testimonials;
