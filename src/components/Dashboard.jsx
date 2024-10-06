import React from 'react';
import { FaChartLine, FaUserFriends, FaClipboardList, FaLightbulb } from 'react-icons/fa';

const MetricCard = ({ icon, title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <div className="text-3xl text-purple-600 mr-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-3xl font-bold text-purple-800">{value}</p>
  </div>
);

const Dashboard = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Research Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard icon={<FaUserFriends />} title="Total Participants" value="1,234" />
          <MetricCard icon={<FaClipboardList />} title="Active Studies" value="12" />
          <MetricCard icon={<FaChartLine />} title="Insights Generated" value="567" />
          <MetricCard icon={<FaLightbulb />} title="Key Findings" value="89" />
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Recent Insights</h3>
          <ul className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
            <li className="p-4 hover:bg-gray-50">
              <h4 className="font-semibold text-purple-600">User onboarding friction points identified</h4>
              <p className="text-gray-600">3 days ago • Mobile App Study</p>
            </li>
            <li className="p-4 hover:bg-gray-50">
              <h4 className="font-semibold text-purple-600">New feature adoption rate analysis</h4>
              <p className="text-gray-600">5 days ago • Product Usage Study</p>
            </li>
            <li className="p-4 hover:bg-gray-50">
              <h4 className="font-semibold text-purple-600">Customer satisfaction drivers revealed</h4>
              <p className="text-gray-600">1 week ago • NPS Follow-up Study</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;