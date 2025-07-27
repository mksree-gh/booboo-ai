import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimationSection: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 px-6 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto">
        <h2
          className={`text-2xl md:text-3xl lg:text-4xl font-light text-center mb-12 leading-[1.15] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Passive Consumer or<br />
          <span className="font-normal">Active Creator?</span><br />
          <span className="text-booboo-red font-medium">The Choice is Yours.</span>
        </h2>
      </div>

      <div
        className={`w-full px-4 md:px-0 max-w-screen-md mx-auto ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <img
          src="/split-visual.png"
          alt="Split screen: consuming vs creating"
          className="w-full rounded-xl object-contain"
        />
      </div>

      <p
        className={`text-lg md:text-xl font-light leading-[1.4] text-center max-w-3xl mx-auto mt-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        In a world filled with content, the most valuable skill is the ability to create. 
        Booboo shifts your child from being a spectator to being the director, 
        teaching them that their words can build worlds.
      </p>
    </section>
  );
};

export default AnimationSection;
