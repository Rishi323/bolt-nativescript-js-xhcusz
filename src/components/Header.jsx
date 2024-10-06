import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-primary">ResearchPal</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-pink-primary transition duration-300">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-pink-primary transition duration-300">Features</a></li>
          <li><a href="#" className="text-gray-600 hover:text-pink-primary transition duration-300">Pricing</a></li>
          <li><a href="#" className="text-gray-600 hover:text-pink-primary transition duration-300">Resources</a></li>
        </ul>
        <button className="bg-pink-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-dark transition duration-300">Get ResearchPal free</button>
      </nav>
    </header>
  );
};

export default Header;