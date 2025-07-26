import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-apple-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] to-[#f5f5f7]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1257110/pexels-photo-1257110.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-white opacity-70"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        <h1 className={`text-4xl md:text-6xl font-extralight leading-tight mb-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Less screen time.<br />
          <span className="font-normal text-booboo-red">More storytime.</span>
        </h1>

        <p className={`text-lg md:text-xl font-light leading-relaxed mb-10 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Meet Booboo. The huggable AI companion that co-creates stories with your child,
          turning wonder into words.
        </p>

        <button
          onClick={() => {
            const section = document.getElementById('cta-section');
            section?.scrollIntoView({ behavior: 'smooth' });
          }}
          className={`bg-[#ff6b6b] text-white px-8 py-3 rounded-full font-semibold shadow-md transform active:scale-[0.97] hover:shadow-lg transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          Request an Invitation
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

