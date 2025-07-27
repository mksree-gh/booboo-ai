import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CameraOff, Shield, Leaf, Users } from 'lucide-react';

const TrustSection: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  const trustItems = [
    {
      icon: CameraOff,
      text: "Zero Cameras. Full Stop.",
      delay: "delay-0"
    },
    {
      icon: Shield,
      text: "Your Data is Yours. Always.",
      delay: "delay-200"
    },
    {
      icon: Leaf,
      text: "Child-Safe, Non-Toxic Materials.",
      delay: "delay-400"
    },
    {
      icon: Users,
      text: "Parent-Controlled Experience.",
      delay: "delay-600"
    }
  ];

  return (
    <section ref={ref} className="py-16 px-6 bg-[#f5f5f7]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index}
              className={`text-center p-6 bg-white rounded-2xl shadow-sm transition-all duration-1000 ${item.delay} ${
                isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
              }`}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-booboo-red bg-opacity-10 rounded-full flex items-center justify-center">
                <item.icon size={24} className="text-booboo-red" />
              </div>
              <p className="text-base font-medium leading-[1.3]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;