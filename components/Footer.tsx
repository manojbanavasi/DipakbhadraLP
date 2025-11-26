import React from 'react';
import { X, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="register" className="bg-brand-blue text-white pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* The Cost Block */}
        <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl mb-16 -mt-32 border-4 border-brand-orange hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.25)] transition-shadow duration-500">
            <div className="flex justify-center mb-6">
                <span className="text-4xl animate-bounce">‍♂️</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">The Hidden Cost of Staying the Same</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8 text-left">
                <div className="flex items-center gap-2 p-2 rounded hover:bg-red-50 transition-colors">
                    <X className="text-red-500 w-6 h-6 flex-shrink-0" />
                    <span className="font-medium">Financial clutter → Mental fatigue</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded hover:bg-red-50 transition-colors">
                    <X className="text-red-500 w-6 h-6 flex-shrink-0" />
                    <span className="font-medium">Unclear goals → Unsteady growth</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded hover:bg-red-50 transition-colors">
                    <X className="text-red-500 w-6 h-6 flex-shrink-0" />
                    <span className="font-medium">Fear-driven decisions → Missed opportunities</span>
                </div>
            </div>

            <p className="text-xl text-gray-800 font-semibold mb-8">
                ✨ The shift from fear to freedom begins with <span className="italic underline">one decision</span>.
            </p>

            <button className="btn-shine w-full md:w-auto bg-brand-orange hover:bg-orange-600 text-white text-xl font-bold px-12 py-5 rounded-full shadow-xl transition-all transform hover:scale-105 active:scale-95 mb-4 hover:shadow-orange-500/40">
                Master Your Mindset. Multiply Your Momentum.
                <span className="block text-base font-normal opacity-90 mt-1">
                    (Register Now AED 97 / ₹199 Only)
                </span>
            </button>
            
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mt-4">
                <ShieldCheck size={16} className="text-green-500" />
                <span>100% Money-Back Guarantee</span>
            </div>
        </div>

        {/* Brand Footer */}
        <div className="flex items-center justify-center gap-3 mb-8 hover:scale-105 transition-transform duration-300">
             <div className="w-10 h-10 rounded-full bg-white text-brand-blue flex items-center justify-center font-bold shadow-lg">
                 $
             </div>
             <h3 className="text-2xl font-bold">Grow Your Money Tree. Live Abundantly.</h3>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-70 gap-4">
            <p>© 2025 Abundant Living Academy | All Rights Reserved</p>
            <div className="flex flex-col md:flex-row items-center gap-4">
                <a href="mailto:hello@cashflowclarityhub.com" className="flex items-center gap-2 hover:text-white transition-colors hover:scale-105">
                    <Mail size={14} /> hello@cashflowclarityhub.com
                </a>
                <span className="hidden md:inline">|</span>
                <a href="#" className="hover:text-white transition-colors hover:underline">Privacy Policy</a>
                <span className="hidden md:inline">|</span>
                <a href="#" className="hover:text-white transition-colors hover:underline">Refund Policy</a>
            </div>
        </div>
      </div>
    </footer>
  );
};