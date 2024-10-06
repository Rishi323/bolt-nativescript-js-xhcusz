import React from 'react';
import { FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-primary">ResearchPal</h4>
            <p className="mb-4">Empowering researchers with AI-driven insights.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-primary transition duration-300"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-pink-primary transition duration-300"><FaLinkedinIn /></a>
              <a href="#" className="text-gray-400 hover:text-pink-primary transition duration-300"><FaYoutube /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-primary transition duration-300">Features</a></li>
              <li><a href="#" className="hover:text-pink-primary transition duration-300">Pricing</a></li>
              <li><a href="#" className="hover:text-pink-primary transition duration-300">Security</a></li>
              <li><a href="#" className="hover:text-pink-primary transition duration-300">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-primary transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-pink-primary transition duration-300">Careers</a></li>
              <li><a href="#" className="hover:text-pink-primary transition duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-pink-primary transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-800">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-pink-primary transition duration-300">Documentation</a></li>
              <li><a href="#" className="hover:text-pink-primary transition duration-300">Help Center</a></li>
              <li><a href="#" className="hover:text-pink-primary transition duration-300">Webinars</a></li>
              <li><a href="#" className="hover:text-pink-primary transition duration-300">API</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p>&copy; 2023 ResearchPal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;