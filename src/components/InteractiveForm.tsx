import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';



interface Character {
  id: string;
  name: string;
  image: string;
  description: string;
}

const InteractiveForm: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedMotivations, setSelectedMotivations] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const characters: Character[] = [
    {
      id: 'bubo',
      name: 'Bubo the Bear',
      image: 'https://images.pexels.com/photos/4047166/pexels-photo-4047166.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A classic, cuddly bear'
    },
    {
      id: 'nova',
      name: 'Nova the Star',
      image: 'https://images.pexels.com/photos/8715133/pexels-photo-8715133.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A plush, magical star'
    },
    {
      id: 'gizmo',
      name: 'Gizmo the Bot',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A friendly, rounded robot'
    }
  ];

  const motivationOptions = [
    "Spark my child's imagination",
    "A fun, screen-free alternative",
    "Pass down our family stories",
    "Help with speech & vocabulary"
  ];

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
    setTimeout(() => setCurrentStep(2), 500);
  };

  const handleMotivationChange = (motivation: string) => {
    setSelectedMotivations(prev => {
      const newMotivations = prev.includes(motivation)
        ? prev.filter(m => m !== motivation)
        : [...prev, motivation];
      
      if (newMotivations.length > 0 && currentStep === 2) {
        setTimeout(() => setCurrentStep(3), 500);
      }
      
      return newMotivations;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      character: selectedCharacter,
      motivations: selectedMotivations,
      email
    });
  };

  return (
    <section id="cta-section" ref={ref} className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 leading-[1.1]">
            Which friend will join your family?
          </h2>
          <p className="text-lg font-light text-[#86868b]">
            Your choice will help us decide which Booboo to create first.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Step 1: Character Selection */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
            }`}
          >
            <div className="grid md:grid-cols-3 gap-6">
              {characters.map((character) => (
                <button
                  key={character.id}
                  type="button"
                  onClick={() => handleCharacterSelect(character)}
                  className={`relative group transition-all duration-200 transform active:scale-[0.97] rounded-3xl border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#007aff] ${
                    selectedCharacter?.id === character.id 
                      ? 'ring-2 ring-[#007aff] bg-[#e6f0ff]' 
                      : 'hover:ring-1 hover:ring-[#007aff] hover:ring-opacity-50 bg-white transform active:scale-[0.97] hover:shadow-md transition-all'
                  }`}
                >
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-sm">
                      <img 
                        src={character.image} 
                        alt={character.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-3 text-center px-2">
                      <h3 className="text-lg font-medium">{character.name}</h3>
                      <p className="text-[#86868b] text-sm mt-1">{character.description}</p>
                    </div>
                  </button>
                  
              ))}
            </div>
          </div>

          {/* Step 2: Motivation Question */}
          <div 
            className={`transition-all duration-1000 ${
              currentStep >= 2 ? 'opacity-100 transform translate-y-0 max-h-80' : 'opacity-0 transform translate-y-8 max-h-0 overflow-hidden'
            }`}
          >
            <div className="bg-[#f5f5f7] rounded-3xl p-8">
              <h3 className="text-xl font-light mb-6 text-center">
                What are you most excited for Booboo to do?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {motivationOptions.map((motivation) => (
                  <label 
                    key={motivation}
                    className="flex items-center space-x-3 p-4 rounded-2xl hover:bg-white cursor-pointer transition-colors duration-200"
                  >
                    <input
                      type="checkbox"
                      checked={selectedMotivations.includes(motivation)}
                      onChange={() => handleMotivationChange(motivation)}
                      className="w-4 h-4 text-[#007aff] border-2 border-[#d2d2d7] rounded focus:ring-[#007aff] focus:ring-2"
                    />
                    <span className="text-base font-light">{motivation}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Email Capture */}
          <div 
            className={`transition-all duration-1000 ${
              currentStep >= 3 ? 'opacity-100 transform translate-y-0 max-h-56' : 'opacity-0 transform translate-y-8 max-h-0 overflow-hidden'
            }`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
              <p className="text-lg font-light mb-6">
                Thank you! We'll let you know when{' '}
                <span className="font-medium text-[#007aff]">
                  {selectedCharacter?.name}
                </span>{' '}
                is ready for adoption.
              </p>
              
              <div className="max-w-sm mx-auto space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-3 border border-[#d2d2d7] rounded-full text-base font-light focus:border-[#007aff] focus:outline-none transition-colors duration-200"
                  required
                />
                
                <button
                  type="submit"
                  disabled={!email}
                  className="w-full bg-[#007aff] text-white px-8 py-3 rounded-full text-base font-medium hover:bg-[#0056cc] transition-all duration-200 hover:scale-[1.02] shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Join the Founders' Circle
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InteractiveForm;