import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center text-center px-4">
      <div>
        <img src="https://avatars.githubusercontent.com/u/your-github-username" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-6 glow" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 glow">I'm a Software Engineer</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          A self-taught MERN developer, focusing on the frontend for 2+ years now.
          I create responsive web applications that create an experience for
          users across mobile and desktop platforms.
        </p>
        <a href="#work" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;