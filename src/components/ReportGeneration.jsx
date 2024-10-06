import React from 'react';
import { FaFileAlt, FaDownload, FaShare } from 'react-icons/fa';

const ReportGeneration = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Generate Report</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <label htmlFor="report-title" className="block text-gray-700 font-semibold mb-2">Report Title</label>
            <input type="text" id="report-title" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Enter report title" />
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Include Sections</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-purple-600" />
                <span className="ml-2">Executive Summary</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-purple-600" />
                <span className="ml-2">Methodology</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-purple-600" />
                <span className="ml-2">Key Findings</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-purple-600" />
                <span className="ml-2">Detailed Analysis</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-purple-600" />
                <span className="ml-2">Recommendations</span>
              </label>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Data Visualizations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-md p-4 flex items-center justify-center h-32">
                Chart 1 Placeholder
              </div>
              <div className="border border-gray-200 rounded-md p-4 flex items-center justify-center h-32">
                Chart 2 Placeholder
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 flex items-center">
              <FaFileAlt className="mr-2" /> Preview
            </button>
            <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300 flex items-center">
              <FaDownload className="mr-2" /> Generate Report
            </button>
            <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 flex items-center">
              <FaShare className="mr-2" /> Share
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportGeneration;