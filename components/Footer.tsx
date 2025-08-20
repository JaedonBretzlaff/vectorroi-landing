import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Logo/Company */}
          <div>
            <h3 className="text-xl font-bold mb-4">VectorROI</h3>
            <p className="text-white/80 leading-relaxed">
              Automate your outreach and book more high-value client meetings on autopilot.
            </p>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">𝕏</div>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">in</div>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">✉</div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} VectorROI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


