import React from 'react';
import { Menu } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer hover:opacity-80 transition-opacity">
             {/* Logo Representation */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold border-2 border-brand-orange shadow-md">
                $
              </div>
              <div className="flex flex-col">
                <span className="text-brand-blue font-bold text-lg leading-tight tracking-wide">CASHFLOW</span>
                <span className="text-brand-orange font-semibold text-xs tracking-widest">CLARITY HUB</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-brand-blue font-medium transition-colors hover:underline decoration-brand-orange decoration-2 underline-offset-4">About Dipak</a>
            <a href="#framework" className="text-gray-600 hover:text-brand-blue font-medium transition-colors hover:underline decoration-brand-orange decoration-2 underline-offset-4">The Framework</a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand-blue font-medium transition-colors hover:underline decoration-brand-orange decoration-2 underline-offset-4">Success Stories</a>
            <a href="#register" className="btn-shine bg-brand-orange hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-orange-500/25">
              Register Now
            </a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-brand-blue transition-colors p-2">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};