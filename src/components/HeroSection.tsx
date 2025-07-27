import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const onClose = () => {
  setShowVideo(false);
};


  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Video Overlay */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative w-full max-w-3xl p-4">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setShowVideo(false)}
            >
              ✕
            </button>
            <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
              
              <div className="relative w-full max-w-3xl p-4">
                <iframe
                  className="w-full aspect-video rounded-lg"
                  src={`https://www.youtube.com/embed/HoNPWZLKzJI?autoplay=1`}
                  title="Booboo Demo"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <button
                  className="absolute top-4 right-4 text-white text-3xl"
                  onClick={onClose}
                >
                  &times;
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto animate-fade-in">
        <img src="/logo.png" alt="Booboo Logo" className="mx-auto mb-6 h-56 w-auto" />

        <h1
          className={`text-4xl md:text-6xl font-extralight leading-tight mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Give Your Child <br />
          <span className="font-normal text-booboo-red">Their First Superpower.</span>
        </h1>

        <p
          className={`text-lg md:text-xl font-light leading-relaxed mb-10 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Meet Booboo. The playful AI companion that teaches your child how to think, create, and thrive by mastering the new language of creativity: prompting.
        </p>

        <button
          onClick={() => setShowVideo(true)}
          className={`bg-[#ff6b6b] text-white px-8 py-3 rounded-full font-semibold shadow-md transform active:scale-[0.97] hover:shadow-lg transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          ▶ Watch Demo
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
