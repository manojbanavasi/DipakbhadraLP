import React from 'react';
import { Award, BookOpen, Globe, UserCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="md:w-1/3">
                {/* Placeholder for Dipak's Image */}
                <div className="aspect-[3/4] bg-gray-200 rounded-2xl overflow-hidden shadow-2xl relative">
                    <img 
                      src="https://picsum.photos/400/500?grayscale" 
                      alt="Dipak Bhadra" 
                      className="w-full h-full object-cover mix-blend-multiply opacity-80 bg-brand-blue"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue to-transparent p-6 pt-20 text-white">
                        <h3 className="text-2xl font-bold">Dipak Bhadra</h3>
                        <p className="text-brand-orange font-medium">Cashflow Clarity Coach</p>
                    </div>
                </div>
            </div>

            <div className="md:w-2/3">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl">🌱</span>
                    <h2 className="text-3xl font-bold text-gray-900">Why Learn From Dipak Bhadra?</h2>
                </div>
                
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    I help professionals and entrepreneurs align their <span className="font-bold text-brand-blue">Mindset, Money, and Momentum</span> so they can experience freedom, not just finances. For 30 years, I chased success across India, Oman & Dubai. Now I teach others how to stop running… and start flowing.
                </p>

                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                        <Award className="text-brand-orange w-8 h-8 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-gray-900">Certified Global Consultant</h4>
                            <p className="text-gray-600">Proctor Gallagher Institute (Bob Proctor)</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                        <BookOpen className="text-brand-orange w-8 h-8 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-gray-900">Author</h4>
                            <p className="text-gray-600">"Grow Your Money Tree" & "The ALIGNMENT Code for Entrepreneurs"</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                        <Globe className="text-brand-orange w-8 h-8 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-gray-900">Corporate Leadership</h4>
                            <p className="text-gray-600">30+ Years in India, Oman & Dubai</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                        <UserCheck className="text-brand-orange w-8 h-8 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-gray-900">Proven Track Record</h4>
                            <p className="text-gray-600">500+ Entrepreneurs Coached Across UAE & India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};