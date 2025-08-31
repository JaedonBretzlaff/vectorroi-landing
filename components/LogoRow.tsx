import React from 'react';

const LogoRow = () => {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-secondary/70">
            Trusted by Industry Leaders
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src="/logo.svg"
                alt="Partner logo"
                className="h-12 w-auto opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoRow;


