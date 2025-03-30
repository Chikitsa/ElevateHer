import React from 'react';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-b from-white to-primary-50">
      {}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-48 -left-24 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-20"></div>
      </div>
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center pt-20 pb-16">
          <h1 className="animate-slide-down text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Create Your Dream Website
            <span className="block mt-2">Without Writing Code</span>
          </h1>
          <p className="animate-slide-up text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Empower your business with beautiful, professional websites in minutes. 
            Perfect for entrepreneurs who want to focus on what matters most.
          </p>
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/templates')}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto"
            >
              Start Building Now
            </button>
            <button
              onClick={() => navigate('/templates')}
              className="px-8 py-4 rounded-full border-2 border-primary-600 text-primary-600 text-lg font-semibold hover:bg-primary-50 transition-all duration-200 w-full sm:w-auto"
            >
              View Templates
            </button>
          </div>
        </div>
        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16 animate-fade-in">
          {[
            {
              title: 'Drag & Drop Builder',
              description: 'Create your website with our intuitive drag and drop interface',
              icon: '🎨'
            },
            {
              title: 'Professional Templates',
              description: 'Start with beautiful, customizable templates designed for success',
              icon: '✨'
            },
            {
              title: 'Launch in Minutes',
              description: 'Go live with your website quickly and easily',
              icon: '🚀'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Hero;
