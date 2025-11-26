import React from 'react';
import { Blocker } from '../types';
import { RefreshCcw, Lock, Target, TrendingUp, Zap, Users } from 'lucide-react';

const blockers: (Blocker & { icon: React.ElementType })[] = [
  {
    id: 1,
    title: "Emotional Money Loops",
    problem: "You earn → spend → feel guilty → repeat.",
    solution: "Awareness breaks the cycle.",
    icon: RefreshCcw
  },
  {
    id: 2,
    title: "Fear of Losing Control",
    problem: "You save but can’t relax, as if money might vanish overnight.",
    solution: "Control creates calm.",
    icon: Lock
  },
  {
    id: 3,
    title: "Unaligned Goals",
    problem: "You chase numbers that don’t reflect your purpose.",
    solution: "Alignment brings direction.",
    icon: Target
  },
  {
    id: 4,
    title: "Overworking Without Growth",
    problem: "You’re scaling effort, not income.",
    solution: "Systems create scalability.",
    icon: TrendingUp
  },
  {
    id: 5,
    title: "Ignoring Money Energy",
    problem: "You handle money logically, not energetically.",
    solution: "Energy directs economy.",
    icon: Zap
  },
  {
    id: 6,
    title: "Lack of Mentorship",
    problem: "You’re trying to “figure it out” alone.",
    solution: "Guidance shortens the gap.",
    icon: Users
  }
];

export const Blockers: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-4xl block mb-4 animate-pulse">🌙</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            6 Things That Keep You <span className="text-brand-blue">Financially Stuck</span>
          </h2>
          <p className="text-lg text-gray-500">(Still not feeling free despite earning well?)</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blockers.map((blocker) => (
            <div key={blocker.id} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover-card-lift group">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white p-2 rounded-full shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                  <blocker.icon className="text-brand-blue group-hover:text-white w-6 h-6 transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">{blocker.id}. {blocker.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 h-12">{blocker.problem}</p>
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-orange bg-orange-50 p-2 rounded-lg group-hover:bg-orange-100 transition-colors">
                <span className="text-lg">✨</span> {blocker.solution}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-brand-blue flex items-center justify-center gap-2">
                <span>💡</span> If You Don’t Heal Your Money Pattern…
            </h3>
            
            <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <div className="bg-red-50 text-red-800 p-4 rounded-lg font-medium border border-red-100 transform transition-transform hover:scale-105">
                    ❌ Earning without freedom
                </div>
                <div className="bg-red-50 text-red-800 p-4 rounded-lg font-medium border border-red-100 transform transition-transform hover:scale-105">
                    ❌ Saving without peace
                </div>
                <div className="bg-red-50 text-red-800 p-4 rounded-lg font-medium border border-red-100 transform transition-transform hover:scale-105">
                    ❌ Growing without direction
                </div>
            </div>
            
            <p className="mt-8 text-xl text-gray-800 font-medium">
                But the moment you choose clarity, you stop surviving and start <span className="italic text-brand-blue">expanding</span>.
            </p>
        </div>
      </div>
    </section>
  );
};