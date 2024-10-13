import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 glow">Get in Touch</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <a href="mailto:your.email@example.com" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;