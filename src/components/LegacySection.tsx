import React, { useEffect, useRef, useState } from 'react';

const LegacySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      className="py-20 px-6 bg-[#f5f5f7] transition-all duration-1000"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image block */}
        <div
          className={`order-2 md:order-1 transition-all duration-1000 ease-out ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-8'
          }`}
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-md transform active:scale-[0.97] transition-all">
            <img
              src="https://images.pexels.com/photos/8715018/pexels-photo-8715018.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Booboo toy on shelf with family photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text block */}
        <div
          className={`order-1 md:order-2 transition-all duration-1000 delay-300 ease-out ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            Teach Booboo your history.
            <br />
            <span className="font-normal text-arrow text-booboo-red">It will share your legacy.</span>
          </h2>

          <p className="text-lg font-light leading-relaxed text-text-muted">
            Use the simple companion app to record the story of how Grandpa immigrated, 
            the lullaby you were sung as a child, or the meaning behind your family's traditions. 
            Booboo learns these stories and weaves them into conversation—making your family's 
            unique culture a part of daily play.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegacySection;
