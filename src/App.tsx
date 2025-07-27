import React from 'react';
import HeroSection from './components/HeroSection';
import AnimationSection from './components/AnimationSection';
import FeaturesSection from './components/FeaturesSection';
import LegacySection from './components/LegacySection';
import InteractiveForm from './components/InteractiveForm';
import StickyTimerBar from "./components/StickyTimerBar";
import Footer from './components/Footer'; 

function App() {
  return (
    <>
      <StickyTimerBar />
      <main className="pt-12 sm:pt-14">
        <div className="min-h-screen bg-white text-[#1d1d1f] font-['Inter',sans-serif] font-light">
          <HeroSection />
          <AnimationSection />
          <FeaturesSection />
          <LegacySection />
          <InteractiveForm />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
