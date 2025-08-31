import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Global contrast elements throughout the whole page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top section contrast */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary opacity-3 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/3 w-80 h-80 bg-accent opacity-2 rounded-full blur-3xl"></div>
        
        {/* Middle section contrast */}
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-accent opacity-3 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-0 w-88 h-88 bg-primary opacity-2 rounded-full blur-3xl"></div>
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-accent opacity-3 rounded-full blur-2xl"></div>
        
        {/* Bottom section contrast */}
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary opacity-2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent opacity-3 rounded-full blur-3xl"></div>
        
        {/* Additional scattered elements */}
        <div className="absolute top-1/4 left-1/6 w-48 h-48 bg-primary opacity-1 rounded-full blur-xl"></div>
        <div className="absolute top-3/4 right-1/6 w-56 h-56 bg-accent opacity-2 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/2 w-40 h-40 bg-primary opacity-2 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative z-10">
        <Hero />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  );
}
