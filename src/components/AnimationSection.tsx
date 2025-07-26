import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimationSection: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 
          className={`text-3xl md:text-4xl lg:text-5xl font-light text-center mb-12 leading-[1.1] transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          Nurture their imagination,<br />
          <span className="font-normal">not their screen habit.</span>
        </h2>
        
        {/* Animation Container */}
        <div className="relative h-48 md:h-64 mb-12 overflow-hidden">
          <div 
            className={`absolute inset-0 flex items-center justify-center transition-all duration-2000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Phone dissolving animation */}
            <div className={`relative transform transition-all duration-2000 ${isVisible ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
              <div className="w-24 h-44 bg-[#1d1d1f] rounded-xl flex items-center justify-center">
                <div className="w-20 h-36 bg-[#007aff] rounded-lg"></div>
              </div>
            </div>
            
            {/* Plant growing animation */}
            <div className={`absolute transform transition-all duration-2000 delay-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
              <svg width="160" height="160" viewBox="0 0 200 200" className="text-[#30d158]">
                <path 
                  d="M100 180 Q100 140 80 120 Q60 100 40 80 M100 180 Q100 140 120 120 Q140 100 160 80 M100 180 L100 200" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  fill="none"
                  className={`transition-all duration-2000 ${isVisible ? 'stroke-dasharray-none' : 'stroke-dasharray-1000 stroke-dashoffset-1000'}`}
                />
                <circle cx="40" cy="80" r="8" fill="currentColor" className={`transition-all duration-500 delay-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
                <circle cx="160" cy="80" r="8" fill="currentColor" className={`transition-all duration-500 delay-2500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
              </svg>
            </div>
          </div>
        </div>
        
        <p 
          className={`text-lg md:text-xl font-light leading-[1.4] text-center max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          Booboo replaces the passive glare of a screen with the active magic of conversation, 
          helping your child build the vocabulary, confidence, and curiosity to thrive.
        </p>
      </div>
    </section>
  );
};

export default AnimationSection;