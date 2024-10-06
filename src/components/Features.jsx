import React from 'react';
import { FaSearch, FaChartBar, FaTags, FaVideo, FaUserFriends, FaLightbulb } from 'react-icons/fa';

const Feature = ({ icon, title, description }) => (
  <div className="flex flex-col items-start p-6 bg-white rounded-lg shadow-md">
    <div className="text-4xl text-purple-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Empower Your User Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={<FaSearch />}
            title="AI-Powered Insights"
            description="Leverage machine learning to automatically analyze and categorize user feedback, saving time and uncovering hidden patterns."
          />
          <Feature
            icon={<FaChartBar />}
            title="Advanced Analytics"
            description="Visualize user data with interactive charts and graphs, making it easy to identify trends and present findings to stakeholders."
          />
          <Feature
            icon={<FaTags />}
            title="Smart Tagging System"
            description="Organize your research with an intelligent tagging system that suggests relevant tags and helps maintain consistency across projects."
          />
          <Feature
            icon={<FaVideo />}
            title="User Session Recordings"
            description="Capture and analyze user interactions with session recordings, complete with heatmaps and clickstream data for deeper insights."
          />
          <Feature
            icon={<FaUserFriends />}
            title="Collaborative Workspace"
            description="Foster teamwork with shared projects, real-time commenting, and role-based access control for seamless collaboration."
          />
          <Feature
            icon={<FaLightbulb />}
            title="Insight Repository"
            description="Build a centralized knowledge base of user insights that's easily searchable and helps inform future product decisions."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;