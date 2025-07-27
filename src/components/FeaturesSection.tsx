import React from 'react';

const cards = [
  {
    title: 'The Project Partner',
    description:
      'From planning a drawing to outlining a school report, Booboo helps organize thoughts and structure ideas.',
    image: '/card1.png',
  },
  {
    title: 'The Homework Helper',
    description:
      'Stuck on a concept? Booboo can explain complex topics like "Why is the sky blue?" in simple, conversational terms.',
    image: '/card2.png',
  },
  {
    title: 'The Storyteller',
    description:
      'Teach Booboo your family\'s unique history, and it becomes a living library, weaving your legacy into daily play.',
    image: '/card3.png',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-light mb-12 leading-tight">
      A <span className="text-booboo-red font-medium">Launchpad</span> for Every <span className="text-booboo-red font-medium">Curiosity.</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-pink-50 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
        <img src="/card1.png" alt="Project Partner" className="w-56 h-56 object-contain mb-4" />
        <h3 className="text-lg font-semibold mb-2">The Project Partner</h3>
        <p className="text-sm text-gray-700">
          From planning a drawing to outlining a school report, Booboo helps organize thoughts and structure ideas.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-pink-50 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
        <img src="/card2.png" alt="Homework Helper" className="w-56 h-56 object-contain mb-4" />
        <h3 className="text-lg font-semibold mb-2">The Homework Helper</h3>
        <p className="text-sm text-gray-700">
          Stuck on a concept? Booboo can explain complex topics like "Why is the sky blue?" in simple, conversational terms.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-pink-50 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
        <img src="/card3.png" alt="Storyteller" className="w-56 h-56 object-contain mb-4" />
        <h3 className="text-lg font-semibold mb-2">The Storyteller</h3>
        <p className="text-sm text-gray-700">
          Teach Booboo your family's unique history, and it becomes a living library, weaving your legacy into daily play.
        </p>
      </div>
    </div>
  </div>
</section>
  );
};

export default FeaturesSection;
