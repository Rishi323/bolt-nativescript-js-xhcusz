import React from 'react';

const Testimonial = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <blockquote className="text-2xl font-medium text-center text-gray-800 mb-8">
          "This platform has revolutionized our user research process. We're able to gather insights faster and make data-driven decisions with confidence. It's become an indispensable tool for our entire product team."
        </blockquote>
        <div className="text-center">
          <p className="font-semibold text-purple-600">Sarah Johnson</p>
          <p className="text-gray-600">Lead UX Researcher, TechInnovate Inc.</p>
        </div>
        <div className="mt-8 text-center">
          <a href="#" className="text-purple-600 hover:text-purple-800 underline">Read full case study</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;