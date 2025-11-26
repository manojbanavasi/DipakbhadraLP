import React from 'react';
import { CheckSquare } from 'lucide-react';

export const Deliverables: React.FC = () => {
  return (
    <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
           <div className="inline-block p-3 bg-white/10 rounded-xl mb-4">
              <span className="text-3xl">💼</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-bold mb-4">
             Inside The Cashflow Awakening™ Masterclass,<br/>You’ll Learn To…
           </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
          <ul className="space-y-6">
            {[
              "Discover your money personality & mindset traps",
              "Build your 90-Day Clarity Compass™",
              "Play the Cashflow Game™ & learn by doing",
              "Rewire limiting beliefs about wealth",
              "Design peaceful, predictable prosperity"
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="bg-brand-orange rounded-full p-1 mt-1">
                    <CheckSquare size={16} className="text-white" />
                </div>
                <span className="text-lg md:text-xl font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-12">
            <p className="text-brand-gold text-lg font-semibold italic mb-8">
                🎯 You’ll move from scattered finances → structured freedom.
            </p>
            <a href="#register" className="inline-block bg-brand-orange hover:bg-white hover:text-brand-orange text-white px-10 py-4 rounded-full font-bold text-xl transition-all shadow-lg transform hover:scale-105">
                Start Your Cashflow Awakening Now →
                <span className="block text-sm font-normal opacity-80">(Register Now FREE)</span>
            </a>
        </div>
      </div>
    </section>
  );
};