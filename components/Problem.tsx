import React from 'react';
import { TrendingDown, Briefcase, Frown, Compass, CheckCircle2 } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image/Graphic */}
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-orange/10 rounded-full z-0"></div>
             <div className="relative z-10 bg-brand-light p-8 rounded-2xl border border-gray-100 shadow-lg">
                <h3 className="text-2xl font-bold text-brand-blue mb-6 flex items-center gap-2">
                   <span className="text-3xl">🌸</span> This Is For You If...
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <TrendingDown className="text-blue-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">You're earning well, yet feeling financially stuck.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Briefcase className="text-brown-500 mt-1 flex-shrink-0 text-amber-700" />
                    <span className="text-gray-700">Working harder but not feeling freer.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Frown className="text-gray-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Tired of uncertainty and burnout.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Compass className="text-brand-orange mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-semibold">Ready to build true wealth — with clarity, peace, and purpose.</span>
                  </li>
                </ul>
             </div>
          </div>

          {/* Right Column: The Core Truth */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              You don’t need more income. <br/>
              <span className="text-brand-orange">You need alignment.</span>
            </h2>
            <div className="h-1 w-20 bg-brand-blue mx-auto md:mx-0 mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Most professionals try to solve financial stress by working harder. But if your inner system is misaligned, more money just leads to more stress. 
            </p>
            <div className="bg-brand-blue text-white p-6 rounded-xl shadow-md inline-block">
              <p className="font-medium text-lg">
                ✨ "Wealth doesn’t start in your wallet. It starts in your awareness."
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};