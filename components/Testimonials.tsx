import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 flex items-center justify-center gap-2">
            <span className="text-3xl animate-bounce">💬</span> What Others Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl relative hover-card-lift border border-gray-100">
                <Quote className="text-brand-blue/20 absolute top-4 left-4 w-12 h-12 transform -scale-x-100" />
                <p className="text-gray-700 italic relative z-10 mb-6 pt-4 text-lg">
                    “For the first time, I feel in control of my finances.”
                </p>
                <div className="font-bold text-brand-blue flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange text-xs font-bold">AD</div>
                    Anita, Dubai
                </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl relative hover-card-lift border border-gray-100">
                <Quote className="text-brand-blue/20 absolute top-4 left-4 w-12 h-12 transform -scale-x-100" />
                <p className="text-gray-700 italic relative z-10 mb-6 pt-4 text-lg">
                    “I stopped chasing money and started attracting it.”
                </p>
                <div className="font-bold text-brand-blue flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange text-xs font-bold">SA</div>
                    Sameer, Abu Dhabi
                </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl relative hover-card-lift border border-gray-100">
                <Quote className="text-brand-blue/20 absolute top-4 left-4 w-12 h-12 transform -scale-x-100" />
                <p className="text-gray-700 italic relative z-10 mb-6 pt-4 text-lg">
                    “This class gave me calm, clarity, and cashflow.”
                </p>
                <div className="font-bold text-brand-blue flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange text-xs font-bold">RS</div>
                    Rakesh, Sharjah
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};