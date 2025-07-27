import React from 'react';
import HeroSection from './components/HeroSection';
import AnimationSection from './components/AnimationSection';
import FeaturesSection from './components/FeaturesSection';
import LegacySection from './components/LegacySection';
import InteractiveForm from './components/InteractiveForm';
import Footer from './components/Footer'; 

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] font-['Inter',sans-serif] font-light">
      <HeroSection />
      <AnimationSection />
      <FeaturesSection />
      <LegacySection />
      <InteractiveForm />
      <Footer />
    </div>
  );
}

export default App;