import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white glow">Portfolio</a>
        <ul className="flex space-x-6">
          <li><a href="#about" className="text-white hover:text-purple-400 transition-colors">About</a></li>
          <li><a href="#work" className="text-white hover:text-purple-400 transition-colors">Work</a></li>
          <li><a href="#projects" className="text-white hover:text-purple-400 transition-colors">Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-purple-400 transition-colors">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;