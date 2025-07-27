import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Heart, Sparkles, ArrowLeft, ArrowRight } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Track interval

  const features = [
    {
      icon: MessageCircle,
      title: "A Storyteller That Listens",
      description: "Booboo responds to your child's ideas, building stories together through natural conversation."
    },
    {
      icon: Heart,
      title: "A Library of Your Own Love",
      description: "Share your family's stories and traditions. Booboo weaves them into personalized tales."
    },
    {
      icon: Sparkles,
      title: "A Companion for Curiosity",
      description: "Every question becomes an adventure. Booboo nurtures wonder and learning through play."
    }
  ];

  // ⏲️ Start the interval
  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 3500);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // 🔁 Restart timer on feature change
  useEffect(() => {
    startInterval();
  }, [currentFeature]);

  const goToFeature = (index: number) => {
    setCurrentFeature((index + features.length) % features.length);
  };

  return (
    <section id="features-section" className="py-32 px-6 bg-[#f5f5f7] min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center relative">

          {/* Feature Icon */}
          <div className="w-20 h-20 mx-auto mb-8 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-500">
            {React.createElement(features[currentFeature].icon, {
              size: 32,
              className: "text-[#ff6b6b]"
            })}
          </div>

          {/* Feature Title */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-[1.1] transition-all duration-500">
            {features[currentFeature].title}
          </h3>

          {/* Feature Description */}
          <p className="text-lg md:text-xl font-light leading-[1.4] max-w-2xl mx-auto mb-12 text-[#86868b] transition-all duration-500">
            {features[currentFeature].description}
          </p>

          {/* Progress Dots */}
          <div className="flex justify-center space-x-3 mb-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToFeature(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform active:scale-[0.97] hover:shadow-md ${
                  index === currentFeature ? 'bg-[#ff6b6b]' : 'bg-[#ffbaba]'
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-[#ff6b6b] hover:bg-[#ffecec] rounded-full active:scale-[0.97] hover:shadow-md transition-all"
            onClick={() => goToFeature(currentFeature - 1)}
            aria-label="Previous Feature"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-[#ff6b6b] hover:bg-[#ffecec] rounded-full active:scale-[0.97] hover:shadow-md transition-all"
            onClick={() => goToFeature(currentFeature + 1)}
            aria-label="Next Feature"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
