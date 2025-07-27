import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { supabase } from '../lib/supabase';

interface Character {
  id: string;
  name: string;
  image: string;
  description: string;
  sub: string;
}

const InteractiveForm: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [hoveredCharacterId, setHoveredCharacterId] = useState<string | null>(null);
  const [selectedMotivations, setSelectedMotivations] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const characters: Character[] = [
    {
      id: 'bubo',
      name: 'Booboo OG',
      image: '/Booboo.jpeg',
      description: 'A Unicorn',
      sub: 'The original dreamer. Magical and imaginative, with a rainbow horn that lights up with new ideas.',
    },
    {
      id: 'nova',
      name: 'Cosmo',
      image: '/cosmo.jpg',
      description: 'The Cosmic Companion',
      sub: 'Sleek and modern, a friendly explorer from the stars.',
    },
    {
      id: 'gizmo',
      name: 'Rowan',
      image: '/owl.jpg',
      description: 'The Forest Sage',
      sub: 'A gentle and wise owl, with soft, textured wings and big, thoughtful eyes.',
    },
  ];

  const motivationOptions = [
    "Spark my child's imagination",
    'A fun, screen-free alternative',
    'Pass down our family stories',
    'Help with speech & vocabulary',
  ];

  const handleCharacterSelect = (character: Character) => {
    setSelectedCharacter(character);
    setHoveredCharacterId(null);
    setTimeout(() => setCurrentStep(2), 500);
  };

  const handleMotivationChange = (motivation: string) => {
    setSelectedMotivations((prev) => {
      const updated = prev.includes(motivation)
        ? prev.filter((m) => m !== motivation)
        : [...prev, motivation];

      if (updated.length > 0 && currentStep === 2) {
        setTimeout(() => setCurrentStep(3), 500);
      }

      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!selectedCharacter || selectedMotivations.length === 0 || !trimmedEmail) {
      console.warn('Missing fields:', { selectedCharacter, selectedMotivations, trimmedEmail });
      return;
    }

    try {
      const { error } = await supabase.from('form_responses').insert([
        {
          character: selectedCharacter.name,
          motivations: selectedMotivations.join(', '),
          email: trimmedEmail,
        },
      ]);

      if (error) {
        console.error('Supabase error:', error.message);
      } else {
        setSubmitted(true);
        console.log('✅ Submitted successfully');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  return (
    <section id="cta-section" ref={ref} className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4 leading-tight">
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
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid md:grid-cols-3 gap-6">
              {characters.map((character) => {
                const isSelected = selectedCharacter?.id === character.id;
                const isHovered = hoveredCharacterId === character.id;

                return (
                  <button
                    key={character.id}
                    type="button"
                    onClick={() => handleCharacterSelect(character)}
                    onMouseEnter={() => setHoveredCharacterId(character.id)}
                    onMouseLeave={() => setHoveredCharacterId(null)}
                    className={`relative group bg-white px-4 py-3 rounded-2xl text-left transform transition-all active:scale-95 ${
                      isSelected
                        ? 'ring-2 ring-[#007aff] bg-[#e6f0ff]'
                        : 'hover:ring-1 hover:ring-[#007aff] hover:ring-opacity-40'
                    }`}
                  >
                    <div className="aspect-square rounded-xl overflow-hidden shadow-sm mb-3">
                      <img
                        src={character.image}
                        alt={character.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center px-2">
                      <h3 className="text-lg font-medium mb-1">{character.name}</h3>
                      <p className="text-sm text-[#86868b]">{character.description}</p>
                      <div className="md:hidden mt-2 text-sm text-[#444]">
                        {isSelected && character.sub}
                      </div>
                    </div>
                    <div
                      className={`hidden md:block absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 bg-white border border-[#d2d2d7] rounded-xl text-sm text-[#333] p-3 shadow-lg transition-opacity duration-300 z-20 ${
                        isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      {character.sub}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Motivation */}
          <div
            className={`transition-all duration-1000 ${
              currentStep >= 2 ? 'opacity-100 translate-y-0 max-h-80' : 'opacity-0 translate-y-8 max-h-0 overflow-hidden'
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
                    className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white cursor-pointer transition-colors duration-200"
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

          {/* Step 3: Email */}
          <div
            className={`transition-all duration-1000 ${
              currentStep >= 3 ? 'opacity-100 translate-y-0 max-h-56' : 'opacity-0 translate-y-8 max-h-0 overflow-hidden'
            }`}
          >
            <div className="bg-white rounded-3xl p-8 shadow text-center">
              {submitted ? (
                <div className="text-center px-4 py-10">
                  <h2 className="text-3xl font-bold mb-4">You're on the Waitlist!</h2>
                  <p className="text-lg font-light mb-6">
                    We’ll notify you when{' '}
                    <span className="font-medium text-[#007aff]">
                      {selectedCharacter?.name}
                    </span>{' '}
                    is ready for adoption.
                  </p>
                  <p className="text-md text-[#4d4d4d] mb-8 max-w-md mx-auto">
                    Thank you for joining our early access list. You'll be the first to meet Booboo and friends!
                  </p>
                  <p className="text-sm text-[#86868b] italic">
                    In the meantime, keep an eye on your inbox. Magical things are on the way ✨
                  </p>
                </div>
              ) : (
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
                    disabled={!email.trim()}
                    className="bg-[#007aff] text-white px-6 py-3 rounded-xl font-semibold transform active:scale-[0.97] hover:shadow-md transition-all duration-300"
                  >
                    Get Early Access
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default InteractiveForm;
