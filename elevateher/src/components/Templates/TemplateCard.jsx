import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const TemplateCard = ({ template, onDelete }) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const isSavedTemplate = template.lastModified !== undefined;
  const formattedDate = isSavedTemplate && new Date(template.lastModified).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  const handleDelete = (e) => {
    e.stopPropagation();
    if (!onDelete) return;
    const confirmDelete = window.confirm(`Are you sure you want to delete "${template.name}"?`);
    if (confirmDelete) {
      const savedTemplates = JSON.parse(localStorage.getItem('elevateher_templates') || '[]');
      const updatedTemplates = savedTemplates.filter(t => t.id !== template.id);
      localStorage.setItem('elevateher_templates', JSON.stringify(updatedTemplates));
      onDelete(template.id);
      window.dispatchEvent(new Event('templatessaved'));
    }
  };
  const handleDuplicate = (e) => {
    e.stopPropagation();
    const duplicate = {
      ...template,
      id: Date.now(),
      name: `${template.name} (Copy)`,
      lastModified: new Date().toISOString()
    };
    const savedTemplates = JSON.parse(localStorage.getItem('elevateher_templates') || '[]');
    savedTemplates.push(duplicate);
    localStorage.setItem('elevateher_templates', JSON.stringify(savedTemplates));
    window.dispatchEvent(new Event('templatessaved'));
  };
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full animate-fade-in">
      {}
      <div className="relative w-full aspect-[16/10] overflow-hidden group">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-pulse rounded bg-gray-200 w-full h-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="animate-spin h-8 w-8 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          </div>
        )}
        <img
          src={template.thumbnail || 'https://via.placeholder.com/640x360?text=Template+Preview'}
          alt={template.name}
          className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/640x360?text=No+Preview+Available';
            setImageLoaded(true);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/30"></div>
        {}
        <div className="absolute top-0 left-0 w-full p-3 flex justify-between">
          {template.category && (
            <span className="px-3 py-1 text-xs bg-white/90 text-purple-700 rounded-md font-medium shadow-sm">
              {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
            </span>
          )}
          {isSavedTemplate && (
            <span className="px-3 py-1 text-xs bg-purple-600 text-white rounded-md font-medium flex items-center shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Your Design
            </span>
          )}
        </div>
        {}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
          <button
            onClick={() => navigate(`/editor/${template.id}`)}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md transition-colors duration-200 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Quick Edit
          </button>
        </div>
      </div>
      {}
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{template.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{template.description}</p>
        {isSavedTemplate && formattedDate && (
          <p className="text-xs text-gray-500 mb-3">
            <span className="inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Last modified: {formattedDate}
            </span>
          </p>
        )}
      </div>
      {}
      <div className="px-4 pb-4 mt-auto">
        <div className="flex gap-2">
          <button
            onClick={() => navigate(`/editor/${template.id}`)}
            className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-sm font-medium rounded-md transition-all duration-200 flex items-center justify-center shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Use Template
          </button>
        </div>
        {}
        {isSavedTemplate && (
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleDuplicate}
              className="flex-1 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md transition-colors duration-200 flex items-center justify-center shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Duplicate
            </button>
            <button
              onClick={handleDelete}
              className="flex-1 py-2 bg-red-100 hover:bg-red-200 text-red-700 text-sm font-medium rounded-md transition-colors duration-200 flex items-center justify-center shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default TemplateCard;
