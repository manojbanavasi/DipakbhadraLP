import React from 'react';
import { Play, TreeDeciduous } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-brand-light to-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in-up hover:scale-105 transition-transform cursor-default shadow-sm border border-green-200">
          <TreeDeciduous size={16} className="animate-float" />
          Grow Your Money Tree!
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight animate-fade-in-up [animation-delay:200ms]">
          Learn to Break Free From <span className="text-brand-blue">Financial Fatigue</span> & <span className="text-brand-orange underline decoration-wavy decoration-2 underline-offset-4">Awaken</span> True Freedom
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:400ms]">
          (from the UAE’s Leading Cashflow Clarity Coach)
        </p>

        {/* Video Placeholder */}
        <div className="relative aspect-video w-full bg-gray-900 rounded-2xl shadow-2xl mb-10 group cursor-pointer overflow-hidden border-4 border-white transform transition-all duration-500 hover:scale-[1.02] hover:shadow-brand-blue/20 animate-fade-in-up [animation-delay:600ms]">
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-20 h-20 bg-brand-orange/90 rounded-full flex items-center justify-center pl-1 group-hover:scale-110 group-hover:bg-brand-orange transition-all duration-300 shadow-lg shadow-orange-500/30">
              <Play fill="white" className="text-white w-8 h-8" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-white text-left z-20">
            <p className="font-bold text-lg">Watch: The Path to Alignment</p>
            <p className="text-sm opacity-80">2 min introduction</p>
          </div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10"></div>
          
          {/* Subtle thumbnail scaling on hover */}
          <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
        </div>

        <div className="space-y-6 animate-fade-in-up [animation-delay:800ms]">
          <p className="text-xl md:text-2xl font-medium text-gray-800 italic">
            "You’ve worked hard, earned well, achieved a lot… Yet, deep inside — you know something’s missing."
          </p>
          <p className="text-gray-600 text-lg">
            It’s time to stop chasing money — and start growing it peacefully.
          </p>
          
          <div className="pt-4">
             <a href="#register" className="btn-shine inline-block bg-brand-orange hover:bg-orange-600 text-white text-lg md:text-xl font-bold px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all transform hover:-translate-y-1 active:scale-95">
              Start Your Cashflow Awakening Now →
              <span className="block text-sm font-normal mt-1 opacity-90">(Register Now <span className="line-through decoration-red-500 text-red-200">AED 97</span> FREE)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};