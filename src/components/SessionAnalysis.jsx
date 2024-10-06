import React from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';

const SessionAnalysis = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">User Session Analysis</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <div className="bg-gray-300 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Session Replay Video</span>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <button className="p-2 bg-purple-600 text-white rounded-full"><FaBackward /></button>
            <button className="p-2 bg-purple-600 text-white rounded-full"><FaPlay /></button>
            <button className="p-2 bg-purple-600 text-white rounded-full"><FaPause /></button>
            <button className="p-2 bg-purple-600 text-white rounded-full"><FaForward /></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Interaction Heatmap</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Heatmap Visualization</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Session Details</h3>
              <ul className="space-y-2">
                <li><strong>User ID:</strong> U12345</li>
                <li><strong>Date:</strong> May 15, 2023</li>
                <li><strong>Duration:</strong> 15:32</li>
                <li><strong>Pages Visited:</strong> 7</li>
                <li><strong>Conversion:</strong> Yes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SessionAnalysis;