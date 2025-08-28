import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CTABanner = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle email submission logic here
    setEmail('');
  };

  return (
    <section className="w-full bg-gradient-to-r from-blue-800 to-blue-600 relative overflow-hidden">
      {/* Animated Background Dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-2 h-2 bg-white rounded-full animate-pulse top-1/4 left-1/4"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse top-3/4 left-1/3 animation-delay-1000"></div>
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full animate-pulse top-1/2 right-1/4 animation-delay-2000"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse top-1/4 right-1/3 animation-delay-1500"></div>
        <div className="absolute w-2 h-2 bg-white rounded-full animate-pulse bottom-1/4 left-1/2 animation-delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        <h2 className="text-5xl font-bold text-white mb-4">
          Transform Your Journey Today
        </h2>
        <p className="text-xl text-blue-100 mb-12">
          Start free, upgrade as you grow.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex bg-white rounded-lg overflow-hidden shadow-2xl">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-0 rounded-none bg-white text-gray-900 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0 px-6 py-4 text-lg"
              required
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white font-semibold px-8 py-4 text-lg rounded-none border-0"
            >
              Get Started Free
            </Button>
          </div>
        </form>

        <p className="text-blue-200 text-sm mt-4">
          No credit card required • Cancel anytime
        </p>
      </div>

      <style>{`
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default CTABanner;