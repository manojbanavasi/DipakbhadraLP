import React from 'react';
import { Eye, ShieldCheck, Rocket } from 'lucide-react';

export const Framework: React.FC = () => {
  return (
    <section id="framework" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block p-3 rounded-full bg-orange-100 mb-4 animate-bounce duration-3000">
            <span className="text-3xl">🧭</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
          The Cashflow Awakening™ Framework
        </h2>
        <p className="text-xl text-gray-600 mb-12">Your 3-Step Path from Confusion to Clarity</p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-orange hover-card-lift">
            <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-brand-orange group-hover:scale-110 transition-transform duration-300">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">1️⃣ Clarity</h3>
            <h4 className="text-lg font-semibold text-brand-blue mb-4">See the Pattern</h4>
            <p className="text-gray-600 mb-6">
              Uncover your hidden money leaks, emotional money loops, and unconscious beliefs that silently block your growth.
            </p>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <span className="flex items-center gap-2 text-sm font-bold text-brand-orange">
                💡 Awareness brings opportunity.
              </span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-blue hover-card-lift">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-brand-blue group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">2️⃣ Confidence</h3>
            <h4 className="text-lg font-semibold text-brand-blue mb-4">Rewire The Inner System</h4>
            <p className="text-gray-600 mb-6">
              Build a peaceful 90-Day Cashflow Plan™ that automates savings, smart spending, and consistent inflows.
            </p>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <span className="flex items-center gap-2 text-sm font-bold text-brand-blue">
                💡 Structure brings security.
              </span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-gold hover-card-lift">
            <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 text-yellow-600 group-hover:scale-110 transition-transform duration-300">
              <Rocket size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">3️⃣ Courage</h3>
            <h4 className="text-lg font-semibold text-brand-blue mb-4">Take Aligned Action</h4>
            <p className="text-gray-600 mb-6">
              Learn the Cashflow Game™ and Abundance Engine™ to multiply your income without multiplying stress.
            </p>
            <div className="mt-auto pt-4 border-t border-gray-100">
              <span className="flex items-center gap-2 text-sm font-bold text-yellow-600">
                💡 Flow brings freedom.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};