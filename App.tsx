import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Framework } from './components/Framework';
import { Blockers } from './components/Blockers';
import { Deliverables } from './components/Deliverables';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-brand-orange selection:text-white">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Framework />
        <Blockers />
        <Deliverables />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;