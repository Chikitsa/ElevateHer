import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TemplateCard = ({ template }) => {
  const navigate = useNavigate();
  
  const handleUseTemplate = (e) => {
    e.preventDefault();
    navigate(`/editor/${template.id}`);
  };
  
  const handlePreview = (e) => {
    e.preventDefault();
    navigate(`/editor/${template.id}`);
  };
  
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={template.thumbnail} 
          alt={template.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <button 
              onClick={handleUseTemplate}
              className="block w-full text-center py-2 px-4 bg-pink-600 hover:bg-pink-700 text-white rounded-md font-medium transition-colors"
            >
              Use Template
            </button>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{template.name}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{template.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
            {template.sections.length} Sections
          </span>
          <button 
            onClick={handlePreview}
            className="text-pink-600 hover:text-pink-700 text-sm font-medium flex items-center transition-colors"
          >
            Preview
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const TemplateList = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // In a real application, you would fetch this from your API
    fetch('http://localhost:4000/templates')
      .then(response => {
        if (!response.ok) {
          // Fallback to local data if API is not available
          throw new Error('API not available');
        }
        const data = response.json();
        return data;
      })
      .catch(() => {
        console.log('Using fallback template data');
        // Fallback data for development
        return [
          {
            id: "business-professional",
            name: "Business Professional",
            description: "A clean, modern template perfect for corporate websites, startups, and professional services.",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            categories: ["business", "professional"],
            sections: Array(8).fill(null)
          },
          {
            id: "creative-portfolio",
            name: "Creative Portfolio",
            description: "Showcase your creative work with this visually striking template designed for artists, designers, and photographers.",
            thumbnail: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            categories: ["creative", "portfolio"],
            sections: Array(6).fill(null)
          },
          {
            id: "online-store",
            name: "Online Store",
            description: "Start selling your products online with this conversion-optimized e-commerce template.",
            thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            categories: ["ecommerce", "business"],
            sections: Array(10).fill(null)
          },
          {
            id: "wellness-coaching",
            name: "Wellness & Coaching",
            description: "Perfect for coaches, wellness professionals, and personal brands with a clean, inviting design.",
            thumbnail: "https://images.unsplash.com/photo-1545205445-638366659a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            categories: ["health", "service"],
            sections: Array(7).fill(null)
          },
          {
            id: "personal-blog",
            name: "Personal Blog",
            description: "Share your thoughts and stories with this elegant blog template designed for content creators.",
            thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            categories: ["blog", "personal"],
            sections: Array(5).fill(null)
          },
          {
            id: "restaurant-cafe",
            name: "Restaurant & Café",
            description: "Showcase your menu, ambiance, and location with this appetizing template for food establishments.",
            thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            categories: ["food", "service"],
            sections: Array(9).fill(null)
          }
        ];
      })
      .then(data => {
        console.log('Templates loaded:', data);
        setTemplates(data.templates);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading templates:', err);
        setError('Failed to load templates. Please try again.');
        setLoading(false);
      });
  }, []);

  // Extract all unique categories from templates
  const categories = ['all', ...new Set(templates.flatMap(template => template.categories || []))];
  
  // Filter templates by active category
  const filteredTemplates = activeCategory === 'all'
    ? templates
    : templates.filter(template => template.categories && template.categories.includes(activeCategory));

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin w-12 h-12 border-4 border-gray-300 border-t-purple-600 rounded-full"></div>
        <p className="mt-4 text-gray-600">Loading templates...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-center py-12 bg-red-50 rounded-lg border border-red-100 p-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <p className="text-red-800">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Category filter */}
      <div className="mb-8">
        <h3 className="text-lg font-medium text-gray-700 mb-3">Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {/* Templates grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTemplates.map(template => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
      
      {/* Empty state */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No templates found</h3>
          <p className="text-gray-600 mb-4">No templates match the selected category.</p>
          <button 
            onClick={() => setActiveCategory('all')}
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            View all templates
          </button>
        </div>
      )}
    </div>
  );
};

export default TemplateList; 