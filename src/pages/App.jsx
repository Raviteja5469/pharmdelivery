import React, { useState } from 'react';
import { DroneNavbar } from '../components/DroneNavbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { SkyGridMap } from '../components/SkyGridMap';
import { Footer } from '../components/Footer';

export default function App() {
  const [isLanded, setIsLanded] = useState(false);

  const handleFooterInView = (inView) => {
    setIsLanded(inView);
  };

  return (
    <div className="relative min-h-screen bg-clinical-50 selection:bg-electric-teal selection:text-white overflow-x-hidden">
      <DroneNavbar isLanded={isLanded} />
      <main className="relative z-10 w-full">
        <Hero />
        <Features />
        <HowItWorks />
        <SkyGridMap />
      </main>
      <Footer onInViewChange={handleFooterInView} />
    </div>
  );
}
