import React from 'react';

const LogoRow = () => {
  const logos = [
    { id: 1, name: 'Company 1' },
    { id: 2, name: 'Company 2' },
    { id: 3, name: 'Company 3' },
    { id: 4, name: 'Company 4' },
    { id: 5, name: 'Company 5' },
    { id: 6, name: 'Company 6' },
  ];

  return (
    <section className="bg-lightNeutral py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-secondary/70">
            Trusted by Industry Leaders
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-12 bg-secondary/20 rounded flex items-center justify-center">
                <span className="text-secondary/60 font-medium text-sm">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoRow;


