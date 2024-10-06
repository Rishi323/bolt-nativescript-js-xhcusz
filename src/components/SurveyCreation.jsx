import React from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const SurveyCreation = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Create New Survey</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <label htmlFor="survey-title" className="block text-gray-700 font-semibold mb-2">Survey Title</label>
            <input type="text" id="survey-title" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Enter survey title" />
          </div>
          <div className="mb-6">
            <label htmlFor="survey-description" className="block text-gray-700 font-semibold mb-2">Description</label>
            <textarea id="survey-description" rows="3" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Enter survey description"></textarea>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Questions</h3>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-md p-4">
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 mb-2" placeholder="Enter question" />
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600">
                  <option>Multiple Choice</option>
                  <option>Short Answer</option>
                  <option>Long Answer</option>
                  <option>Rating Scale</option>
                </select>
              </div>
            </div>
            <button className="mt-4 flex items-center text-purple-600 hover:text-purple-800">
              <FaPlus className="mr-2" /> Add Question
            </button>
          </div>
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">Create Survey</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveyCreation;