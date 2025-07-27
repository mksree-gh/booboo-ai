import React from 'react';

const StickyTimerBar: React.FC = () => {
  const handleScrollToForm = () => {
    const section = document.getElementById('cta-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-red-600 text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-center animate-pulse">
        <p className="text-lg sm:text-xl font-semibold">
          🚨 Early Access is Almost Full — Secure Your Spot Now!
        </p>
        <button
          onClick={handleScrollToForm}
          className="bg-white text-red-600 font-bold px-5 py-2 rounded-full shadow hover:bg-yellow-100 transition-all duration-200 text-sm sm:text-base"
        >
          Sign Up Now →
        </button>
      </div>
    </div>
  );
};

export default StickyTimerBar;
