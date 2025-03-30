import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <header 
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {}
          <Link to="/" className="flex items-center space-x-2 z-10">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              E
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              ElevateHer
            </span>
          </Link>
          {}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/templates" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/templates') 
                  ? 'text-pink-600 border-b-2 border-pink-600' 
                  : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              Templates
            </Link>
            <Link 
              to="/analytics" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/analytics') 
                  ? 'text-pink-600 border-b-2 border-pink-600' 
                  : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              Analytics
            </Link>
            <Link 
              to="/pricing" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/pricing') 
                  ? 'text-pink-600 border-b-2 border-pink-600' 
                  : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/blog" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/blog') 
                  ? 'text-pink-600 border-b-2 border-pink-600' 
                  : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/support" 
              className={`font-medium transition-colors duration-200 ${
                isActive('/support') 
                  ? 'text-pink-600 border-b-2 border-pink-600' 
                  : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              Support
            </Link>
          </nav>
          {}
          <button 
            className="md:hidden z-10 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 flex items-center justify-center relative">
              <span 
                className={`block absolute h-0.5 w-6 bg-gray-900 transform transition duration-300 ease-in-out ${
                  isOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              ></span>
              <span 
                className={`block absolute h-0.5 bg-gray-900 transform transition duration-300 ease-in-out ${
                  isOpen ? 'w-0' : 'w-6'
                }`}
              ></span>
              <span 
                className={`block absolute h-0.5 w-6 bg-gray-900 transform transition duration-300 ease-in-out ${
                  isOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
      {}
      <div 
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-4 text-2xl">
          <Link 
            to="/" 
            className="font-medium text-gray-900 hover:text-pink-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/templates" 
            className="font-medium text-gray-900 hover:text-pink-600"
            onClick={() => setIsOpen(false)}
          >
            Templates
          </Link>
          <Link 
            to="/analytics" 
            className="font-medium text-gray-900 hover:text-pink-600"
            onClick={() => setIsOpen(false)}
          >
            Analytics
          </Link>
          <Link 
            to="/pricing" 
            className="font-medium text-gray-900 hover:text-pink-600"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            to="/blog" 
            className="font-medium text-gray-900 hover:text-pink-600"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/support" 
            className="font-medium text-gray-900 hover:text-pink-600"
            onClick={() => setIsOpen(false)}
          >
            Support
          </Link>
          <div className="pt-6 flex flex-col space-y-4 w-64">
            <button className="px-4 py-2 font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors duration-200">
              Sign In
            </button>
            <Link 
              to="/templates" 
              className="px-5 py-2 rounded-full font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
