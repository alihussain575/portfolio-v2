import React from 'react';

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc.',
    period: '2021 - Present',
    description: 'Leading frontend development for cutting-edge web applications.',
  },
  {
    title: 'Frontend Developer',
    company: 'Web Solutions Co.',
    period: '2019 - 2021',
    description: 'Developed responsive and interactive user interfaces for various clients.',
  },
  {
    title: 'Junior Web Developer',
    company: 'Digital Creations LLC',
    period: '2018 - 2019',
    description: 'Assisted in the development of websites and web applications.',
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    period: '2017 - 2018',
    description: 'Created custom websites for small businesses and individuals.',
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center glow">Work Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-purple-400 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;