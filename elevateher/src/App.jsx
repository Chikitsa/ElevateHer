import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Hero from './components/Landing/Hero';
import ProjectExpectations from './components/Landing/ProjectExpectations';
import DragDropEditor from './components/Editor/DragDropEditor';
import TemplateList from './components/Common/TemplateList';
import TemplateCard from './components/Templates/TemplateCard';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Support from './pages/Support';
import Testimonials from './components/Common/Testimonials';
import Dashboard from './components/Analytics/Dashboard';
import { templates } from './data/templates';

function App() {
  const [savedTemplates, setSavedTemplates] = useState([]);
  const [templatesLoaded, setTemplatesLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
 




  
  useEffect(() => {
    // Load saved templates from localStorage
    const loadSavedTemplates = () => {
      try {
        const templates = JSON.parse(localStorage.getItem('elevateher_templates') || '[]');
        setSavedTemplates(templates);
        setTemplatesLoaded(true);
      } catch (error) {
        console.error('Error loading saved templates:', error);
        setSavedTemplates([]);
        setTemplatesLoaded(true);
      }
    };
    
    loadSavedTemplates();
    
    // Add event listener to update templates when storage changes
    window.addEventListener('storage', loadSavedTemplates);
    // Add event listener for custom event from the editor
    window.addEventListener('templatessaved', loadSavedTemplates);
    
    return () => {
      window.removeEventListener('storage', loadSavedTemplates);
      window.removeEventListener('templatessaved', loadSavedTemplates);
    };
  }, []);

  // Handle template deletion
  const handleDeleteTemplate = (templateId) => {
    setSavedTemplates(savedTemplates.filter(template => template.id !== templateId));
    // Note: The actual localStorage update is handled in the TemplateCard component
  };
  
  // Get all unique categories from templates
  const categories = ['all', ...new Set(templates.map(template => template.category).filter(Boolean))];
  
  // Filter templates by category
  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(template => template.category === activeCategory);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={
            <div>
              <Header />
              <Hero />
              <ProjectExpectations />
              <div className="container mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-12">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                    Featured Templates
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {templates.slice(0, 3).map(template => (
                    <TemplateCard 
                      key={template.id} 
                      template={template} 
                    />
                  ))}
                </div>
                <div className="mt-20">
                  <Testimonials />
                </div>
              </div>
            </div>
          } />
          <Route path="/templates" element={
            <>
              <Header />
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-2 text-gray-800">Website Templates</h1>
                <p className="text-gray-600 mb-8">Choose from our professionally designed templates to get started quickly</p>
                <ProjectExpectations />
                <TemplateList />
              </div>
            </>
          } />
          <Route path="/analytics" element={
            <div className="container mx-auto px-4 py-8">
              <Dashboard />
            </div>
          } />
          <Route path="/editor/:templateId" element={
            <div>
              <Header />
              <DragDropEditor />
            </div>
          } />
          <Route path="/pricing" element={
            <div>
              <Header />
              <Pricing />
            </div>
          } />
          <Route path="/blog" element={
            <div>
              <Header />
              <Blog />
            </div>
          } />
          <Route path="/blog/:id" element={
            <div>
              <Header />
              <Blog />
            </div>
          } />
          <Route path="/support" element={
            <div>
              <Header />
              <Support />
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
