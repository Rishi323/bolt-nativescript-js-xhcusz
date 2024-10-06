import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import SessionAnalysis from './components/SessionAnalysis';
import SurveyCreation from './components/SurveyCreation';
import ReportGeneration from './components/ReportGeneration';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Features />
      <Dashboard />
      <SessionAnalysis />
      <SurveyCreation />
      <ReportGeneration />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;