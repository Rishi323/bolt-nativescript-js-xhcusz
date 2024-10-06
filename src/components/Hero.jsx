import React from 'react';

const Hero = () => {
  return (
    <section className="bg-purple-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 text-purple-800">Unlock the Power of User Research</h1>
        <p className="text-xl mb-10 max-w-2xl mx-auto text-purple-700">Transform raw data into actionable insights with our AI-driven user research platform. Understand your users like never before.</p>
        <div className="space-x-4">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
            Start Free Trial
          </button>
          <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition duration-300">
            Watch Demo
          </button>
        </div>
        <div className="mt-12">
          <img src="/hero-image.png" alt="ResearchPal Dashboard" className="mx-auto rounded-lg shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;