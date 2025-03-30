import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import Testimonials from '../components/Common/Testimonials';
import { Link } from 'react-router-dom';

const PricingTier = ({ name, price, features, recommended, cta }) => {
  return (
    <div 
      className={`relative flex flex-col rounded-2xl shadow-xl overflow-hidden ${
        recommended ? 'border-2 border-pink-500 transform scale-105 z-10 bg-white' : 'bg-white'
      }`}
    >
      {recommended && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 py-2 text-white text-center text-sm font-medium">
          Most Popular
        </div>
      )}
      
      <div className={`px-6 py-8 ${recommended ? 'pt-12' : 'pt-8'}`}>
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-extrabold text-gray-900">${price}</span>
          <span className="ml-1 text-xl font-medium text-gray-500">/month</span>
        </div>
        
        <ul className="mt-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="ml-3 text-base text-gray-700">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="px-6 py-8 bg-gray-50 border-t border-gray-200">
        <Link
          to="/templates"
          className={`block w-full text-center px-6 py-3 rounded-md shadow ${
            recommended
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
              : 'bg-white text-pink-600 border border-pink-600 hover:bg-pink-50'
          } font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-200`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const pricingTiers = {
    monthly: [
      {
        name: 'Starter',
        price: '0',
        features: [
          '1 website',
          'Basic templates',
          'Drag & drop editor',
          'Mobile responsive',
          'ElevateHer branding'
        ],
        recommended: false,
        cta: 'Start for free'
      },
      {
        name: 'Professional',
        price: '19',
        features: [
          'Up to 3 websites',
          'Premium templates',
          'Advanced customization',
          'Custom domain',
          'Remove ElevateHer branding',
          'Priority support'
        ],
        recommended: true,
        cta: 'Get started'
      },
      {
        name: 'Business',
        price: '49',
        features: [
          'Unlimited websites',
          'All premium templates',
          'E-commerce features',
          'SEO tools',
          'Analytics integration',
          'Design consultation',
          '24/7 VIP support'
        ],
        recommended: false,
        cta: 'Contact us'
      }
    ],
    yearly: [
      {
        name: 'Starter',
        price: '0',
        features: [
          '1 website',
          'Basic templates',
          'Drag & drop editor',
          'Mobile responsive',
          'ElevateHer branding'
        ],
        recommended: false,
        cta: 'Start for free'
      },
      {
        name: 'Professional',
        price: '15',
        features: [
          'Up to 3 websites',
          'Premium templates',
          'Advanced customization',
          'Custom domain',
          'Remove ElevateHer branding',
          'Priority support'
        ],
        recommended: true,
        cta: 'Get started'
      },
      {
        name: 'Business',
        price: '39',
        features: [
          'Unlimited websites',
          'All premium templates',
          'E-commerce features',
          'SEO tools',
          'Analytics integration',
          'Design consultation',
          '24/7 VIP support'
        ],
        recommended: false,
        cta: 'Contact us'
      }
    ],
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Simple, transparent pricing
              </span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our award-winning website builder and hosting.
            </p>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="relative bg-white rounded-full p-1 flex">
              <button
                type="button"
                className={`${
                  billingCycle === 'monthly'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-500'
                } relative py-2 px-6 rounded-full text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly billing
              </button>
              <button
                type="button"
                className={`${
                  billingCycle === 'yearly'
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-500'
                } ml-0.5 relative py-2 px-6 rounded-full text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500`}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly billing
                <span className="absolute -top-2 -right-12 px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-800 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
          
          <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-6">
            {pricingTiers[billingCycle].map((tier, index) => (
              <PricingTier key={index} {...tier} />
            ))}
          </div>
          
          <div className="mt-20 bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900">Frequently asked questions</h2>
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Can I cancel my subscription?</h3>
                <p className="mt-2 text-base text-gray-600">
                  Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to your plan until the end of your billing period.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">What payment methods do you accept?</h3>
                <p className="mt-2 text-base text-gray-600">
                  We accept all major credit cards, PayPal, and Apple Pay.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Do I need technical skills to use ElevateHer?</h3>
                <p className="mt-2 text-base text-gray-600">
                  Not at all! Our website builder is designed to be easy to use for everyone, regardless of technical background.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
          <Testimonials />
        </div>
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <img src="/logo.svg" alt="ElevateHer" className="h-10 w-auto" />
            <p className="mt-4 text-gray-500 text-center">© 2025 ElevateHer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;
