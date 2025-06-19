import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';

const achievements = [
  {
    title: 'State Level Football Champions',
    description: 'Won the Rajasthan State Under-17 Football Championship 2024.',
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: '100% Board Results',
    description: 'Our 12th grade batch achieved a 100% pass rate for 5 consecutive years.',
    icon: <Star className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: 'Best Eco Club',
    description: 'Recognized as the Best Eco Club by the district in 2023.',
    icon: <Award className="w-8 h-8 text-yellow-500" />,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-blue-900 mb-8 text-center border-b-2 border-blue-900 inline-block pb-1">
          Achievements
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <h3 className="text-xl font-bold text-blue-800">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
