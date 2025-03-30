import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TopBar from './components/TopBar';
import LeftSidebar from './components/LeftSidebar';
import Canvas from './components/Canvas';
import RightSidebar from './components/RightSidebar';
import PreviewMode from './components/PreviewMode';
import SuccessNotification from './components/SuccessNotification';
import { templates } from '../../data/templates';
const SectionRenderer = ({ element, onSelect, isSelected, onMoveUp, onMoveDown, onDelete, isFirst, isLast, onDragStart }) => {
  const renderContent = () => {
    switch(element.type) {
      case 'hero':
        return (
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-md">
            <h2 className="text-3xl font-bold">{element.content.heading}</h2>
            <p className="mt-2">{element.content.subheading}</p>
            <button className="mt-4 bg-white text-purple-600 px-4 py-2 rounded-md">
              {element.content.ctaText}
            </button>
          </div>
        );
      case 'features':
        return (
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-2xl font-bold text-center mb-6">{element.content.heading}</h3>
            <div className="grid grid-cols-3 gap-4">
              {element.content.items?.map((item, idx) => (
                <div key={idx} className="p-4 border rounded-md">
                  <div className="text-purple-600 mb-2">{item.icon || '✨'}</div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'testimonials':
        return (
          <div className="bg-gray-50 p-6 rounded-md">
            <h3 className="text-2xl font-bold text-center mb-6">{element.content.heading}</h3>
            <div className="grid grid-cols-2 gap-6">
              {element.content.items?.map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-md shadow">
                  <p className="italic mb-4">"{item.quote}"</p>
                  <div className="flex items-center">
                    {item.avatar && <img src={item.avatar} alt={item.author} className="w-10 h-10 rounded-full mr-3" />}
                    <div>
                      <p className="font-bold">{item.author}</p>
                      <p className="text-sm text-gray-600">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-2xl font-bold mb-4">{element.content.heading}</h3>
            <div className="flex">
              {element.content.image && (
                <img src={element.content.image} alt="About" className="w-1/3 rounded-md mr-6" />
              )}
              <div>
                <p className="mb-4">{element.content.bio}</p>
                {element.content.skills && (
                  <div className="flex flex-wrap gap-2">
                    {element.content.skills.map((skill, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      case 'gallery':
        return (
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-2xl font-bold mb-6">{element.content.heading}</h3>
            <div className="grid grid-cols-3 gap-4">
              {element.content.items?.map((item, idx) => (
                <div key={idx} className="overflow-hidden rounded-md">
                  <img src={item.image} alt={item.caption} className="w-full h-48 object-cover" />
                  <p className="p-2 text-center text-sm">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'products':
        return (
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-2xl font-bold mb-2">{element.content.heading}</h3>
            <p className="text-gray-600 mb-6">{element.content.subheading}</p>
            <div className="grid grid-cols-3 gap-6">
              {element.content.items?.map((item, idx) => (
                <div key={idx} className="border rounded-md overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <div className="mt-3 flex justify-between items-center">
                      <div>
                        <span className="font-bold">${item.price}</span>
                        {item.discountPrice && (
                          <span className="ml-2 text-gray-500 line-through">${item.discountPrice}</span>
                        )}
                      </div>
                      {item.badge && (
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'blog':
        return (
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-2xl font-bold mb-6">{element.content.heading}</h3>
            <div className="grid grid-cols-3 gap-6">
              {element.content.items?.map((item, idx) => (
                <div key={idx} className="border rounded-md overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    {element.content.showExcerpt && (
                      <p className="text-gray-600 mt-2 text-sm">{item.excerpt}</p>
                    )}
                    {element.content.showDate && (
                      <p className="text-gray-500 text-xs mt-2">{item.date} · {item.readTime} read</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'services':
        return (
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-2xl font-bold mb-2">{element.content.heading}</h3>
            <p className="text-gray-600 mb-6">{element.content.subheading}</p>
            <div className="grid grid-cols-3 gap-5">
              {element.content.items?.map((item, idx) => (
                <div key={idx} className="border rounded-md p-4">
                  {item.image && <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md mb-4" />}
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                  {item.price && (
                    <p className="mt-3 font-bold">${item.price} {item.currency}</p>
                  )}
                  {item.ctaText && (
                    <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md w-full">
                      {item.ctaText}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      case 'payment':
        return (
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-2xl font-bold mb-2">{element.content.heading}</h3>
            <p className="text-gray-600 mb-6">{element.content.subheading}</p>
            <div className="grid grid-cols-3 gap-5">
              {element.content.items?.map((item, idx) => (
                <div key={idx} className={`border rounded-md p-5 ${item.recommended ? 'border-purple-500 ring-2 ring-purple-200' : ''}`}>
                  {item.recommended && (
                    <div className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full inline-block mb-3">
                      Recommended
                    </div>
                  )}
                  <h4 className="font-bold text-xl">{item.name}</h4>
                  <div className="mt-2 mb-4">
                    {item.price && (
                      <span className="text-3xl font-bold">${item.price}</span>
                    )}
                    {item.billingPeriod && (
                      <span className="text-gray-500">/{item.billingPeriod}</span>
                    )}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {item.features?.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-md w-full">
                    {item.ctaText || 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'cta':
        return (
          <div className={`p-8 rounded-md text-center ${element.content.backgroundColor ? `bg-${element.content.backgroundColor}` : 'bg-purple-100'}`}>
            <h3 className="text-2xl font-bold mb-2">{element.content.heading}</h3>
            <p className="text-gray-600 mb-6">{element.content.subheading}</p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md font-bold">
              {element.content.ctaText}
            </button>
            {element.content.showEmailForm && (
              <div className="mt-6 flex justify-center">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 border rounded-l-md w-64 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <button className="bg-purple-600 text-white px-4 py-2 rounded-r-md">
                  Subscribe
                </button>
              </div>
            )}
          </div>
        );
      case 'newsletter':
        return (
          <div className={`p-8 rounded-md ${element.content.backgroundColor ? `bg-${element.content.backgroundColor}` : 'bg-purple-100'}`}>
            <h3 className="text-2xl font-bold mb-2">{element.content.heading}</h3>
            <p className="text-gray-600 mb-6">{element.content.subheading}</p>
            <div className="flex flex-col sm:flex-row gap-2">
              {element.content.showNameField && (
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="px-4 py-2 border rounded-md sm:rounded-r-none flex-1 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
              )}
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 border rounded-md sm:rounded-l-none sm:rounded-r-none flex-1 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md sm:rounded-l-none whitespace-nowrap">
                {element.content.buttonText || 'Subscribe'}
              </button>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="bg-white p-6 rounded-md shadow border-2 border-dashed border-blue-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Analytics Tracking</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {element.content.provider}
              </span>
            </div>
            <div className="mb-4">
              <p className="text-gray-600">Tracking ID: {element.content.trackingId || 'Not set'}</p>
              {element.content.enabledFeatures && (
                <div className="mt-3">
                  <p className="font-medium text-gray-700 mb-2">Enabled Features:</p>
                  <div className="flex flex-wrap gap-2">
                    {element.content.enabledFeatures.map((feature, idx) => (
                      <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 bg-gray-50 rounded-md border border-gray-200">
              <div className="flex items-center text-gray-500 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Analytics will be applied site-wide</span>
              </div>
              <p className="text-sm text-gray-500">
                The tracking code will be automatically inserted in the head or body of your website.
              </p>
            </div>
          </div>
        );
      case 'text':
      case 'image':
      case 'section':
      case 'columns':
      case 'button':
      case 'form':
      case 'testimonial':
      case 'pricing':
      case 'divider':
      case 'spacer':
      case 'video':
      case 'faq':
      case 'team':
      case 'stats':
      case 'countdown':
      case 'map':
      case 'social':
      case 'navbar':
      case 'footer':
      case 'menu':
      case 'booking':
      case 'story':
      case 'checkout':
      case 'expertise':
      case 'process':
      case 'subscription':
      case 'ordering':
      case 'schedule':
      case 'membership':
      case 'categories':
      case 'monetization':
      case 'courses':
      case 'packages':
      case 'calculator':
      case 'fee':
      case 'heading':
      case 'list':
      case 'productGrid':
      case 'cart':
      case 'reviews':
      case 'seo':
      case 'popup':
      case 'tabs':
      case 'accordion':
      case 'slider':
        return (
          <div className="bg-white p-6 rounded-md shadow border-2 border-dashed border-gray-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold capitalize">{element.type} Section</h3>
            </div>
            {element.content && typeof element.content === 'object' && element.content.heading && (
              <h4 className="text-lg font-medium mb-2">{element.content.heading}</h4>
            )}
            {element.content && typeof element.content === 'object' && element.content.subheading && (
              <p className="text-gray-600 mb-4">{element.content.subheading}</p>
            )}
            {typeof element.content === 'string' && (
              <p className="text-gray-700">{element.content}</p>
            )}
            <div className="mt-4 p-3 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-500">
                {element.type} content will be displayed here in the published site.
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white p-6 rounded-md shadow border-2 border-dashed border-yellow-300">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="text-xl font-bold text-yellow-800">{element.type || 'Unknown'} Section</h3>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-500">
                This section will be rendered properly in the published site.
              </p>
            </div>
          </div>
        );
    }
  };
  return (
    <div 
      className={`mb-6 relative ${isSelected ? 'ring-2 ring-purple-500' : ''}`}
      onClick={() => onSelect(element.id)}
    >
      {renderContent()}
      <div className="absolute top-2 right-2 bg-white rounded-full shadow px-2 py-1 text-xs text-gray-500">
        {element.type}
      </div>
      {}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 z-20">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onMoveUp(element.id);
          }}
          disabled={isFirst}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center border-2 ${
            isFirst ? 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300' : 'bg-white text-indigo-600 hover:bg-indigo-100 hover:text-indigo-800 border-indigo-200 hover:border-indigo-400'
          }`}
          title="Move up"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onMoveDown(element.id);
          }}
          disabled={isLast}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center border-2 ${
            isLast ? 'bg-gray-200 text-gray-400 cursor-not-allowed border-gray-300' : 'bg-white text-indigo-600 hover:bg-indigo-100 hover:text-indigo-800 border-indigo-200 hover:border-indigo-400'
          }`}
          title="Move down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onDelete(element.id);
          }}
          className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center border-2 bg-white text-red-500 hover:bg-red-50 hover:text-red-700 border-red-200 hover:border-red-400"
          title="Delete"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
        </button>
      </div>
      {}
      <div 
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3 cursor-move group ${
          isSelected ? 'opacity-100' : 'opacity-40 hover:opacity-100'
        }`}
        onMouseDown={(e) => {
          const parentElement = e.currentTarget.parentNode;
          parentElement.setAttribute('draggable', 'true');
          parentElement.addEventListener('dragend', () => {
            parentElement.removeAttribute('draggable');
          }, { once: true });
          setTimeout(() => {
            onDragStart(e, element.id);
          }, 0);
        }}
      >
        <div className="bg-white p-2 rounded-full shadow-md border flex items-center justify-center group-hover:bg-purple-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        </div>
      </div>
    </div>
  );
};
const DragDropEditor = () => {
  const { templateId } = useParams();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [elements, setElements] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedComponent, setDraggedComponent] = useState(null);
  const [showPublishSuccess, setShowPublishSuccess] = useState(false);
  const [siteName, setSiteName] = useState('My Website');
  const [templateName, setTemplateName] = useState('');
  const [templateCategory, setTemplateCategory] = useState('business');
  const [showPreview, setShowPreview] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const [draggedElementId, setDraggedElementId] = useState(null);
  const [dragOverElementId, setDragOverElementId] = useState(null);
  const loadTemplate = async (templateId) => {
    try {
      setIsLoading(true);
      const id = typeof templateId === 'string' ? parseInt(templateId, 10) : templateId;
      let templatesData = templates;
      if (!templatesData || templatesData.length === 0) {
        console.log("No templates found");
      }
      const template = templatesData.find(t => t.id === id);
      if (!template) {
        throw new Error(`Template with ID ${id} not found. Available IDs: ${templatesData.map(t => t.id).join(', ')}`);
      }
      setSelectedTemplate(template);
      setElements(template.sections || []);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      console.error('Error loading template:', err);
      setIsLoading(false);
      setError(`Failed to load template: ${err.message}`);
    }
  };
  useEffect(() => {
    if (templateId) {
      loadTemplate(templateId);
    } else {
      setIsLoading(false);
    }
  }, [templateId, navigate]);
  const addElement = (type) => {
    let newContent = {};
    switch(type) {
      case 'text':
        newContent = 'Edit this text';
        break;
      case 'image':
        newContent = 'https://via.placeholder.com/400x300';
        break;
      case 'hero':
        newContent = {
          heading: 'Welcome to Your Website',
          subheading: 'Add your tagline here',
          ctaText: 'Get Started',
          theme: {from: 'purple-600', to: 'pink-600'}
        };
        break;
      case 'section':
        newContent = {
          heading: 'Section Title',
          content: 'Add your section content here. This could be a paragraph about your services, company, or any important information you want to share with your visitors.'
        };
        break;
      case 'columns':
        newContent = {
          columns: [
            { heading: 'Column 1', content: 'Content for column 1' },
            { heading: 'Column 2', content: 'Content for column 2' }
          ]
        };
        break;
      case 'button':
        newContent = {
          text: 'Click Me',
          url: '#',
          style: 'primary'
        };
        break;
      case 'form':
        newContent = {
          title: 'Contact Form',
          fields: [
            { type: 'text', label: 'Name', placeholder: 'Enter your name' },
            { type: 'email', label: 'Email', placeholder: 'Enter your email' },
            { type: 'textarea', label: 'Message', placeholder: 'Enter your message' }
          ],
          submitText: 'Submit'
        };
        break;
      case 'features':
        newContent = {
          heading: 'Key Features',
          items: [
            { title: 'Feature 1', description: 'Feature description', icon: '✨' },
            { title: 'Feature 2', description: 'Feature description', icon: '✨' },
            { title: 'Feature 3', description: 'Feature description', icon: '✨' }
          ],
          layout: 'grid'
        };
        break;
      case 'testimonial':
        newContent = {
          quote: 'This product changed my life!',
          author: 'Jane Doe',
          role: 'CEO, Example Company',
          avatar: 'https://via.placeholder.com/150'
        };
        break;
      case 'pricing':
        newContent = {
          title: 'Pricing Plans',
          description: 'Choose the perfect plan for your needs',
          plans: [
            { name: 'Basic', price: '$9.99', period: 'monthly', features: ['Feature 1', 'Feature 2'] },
            { name: 'Pro', price: '$19.99', period: 'monthly', features: ['Feature 1', 'Feature 2', 'Feature 3'] }
          ]
        };
        break;
      case 'cta':
        newContent = {
          heading: 'Ready to get started?',
          subheading: 'Join thousands of satisfied customers today.',
          buttonText: 'Sign Up Now',
          buttonUrl: '#'
        };
        break;
      case 'divider':
        newContent = {
          style: 'solid',
          color: 'gray-300',
          spacing: 'my-8'
        };
        break;
      case 'spacer':
        newContent = {
          height: '80px'
        };
        break;
      case 'video':
        newContent = {
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          title: 'Video Title'
        };
        break;
      case 'gallery':
        newContent = {
          images: [
            { url: 'https://via.placeholder.com/400x300', caption: 'Image 1' },
            { url: 'https://via.placeholder.com/400x300', caption: 'Image 2' },
            { url: 'https://via.placeholder.com/400x300', caption: 'Image 3' }
          ]
        };
        break;
      case 'faq':
        newContent = {
          title: 'Frequently Asked Questions',
          items: [
            { question: 'What is your product?', answer: 'Our product is amazing!' },
            { question: 'How does it work?', answer: 'It works very well!' }
          ]
        };
        break;
      case 'team':
        newContent = {
          title: 'Our Team',
          members: [
            { name: 'John Doe', role: 'CEO', photo: 'https://via.placeholder.com/150', bio: 'John has 15 years of experience.' },
            { name: 'Jane Smith', role: 'CTO', photo: 'https://via.placeholder.com/150', bio: 'Jane is an expert in technology.' }
          ]
        };
        break;
      case 'stats':
        newContent = {
          title: 'Our Impact',
          stats: [
            { value: '1000+', label: 'Customers' },
            { value: '50+', label: 'Countries' },
            { value: '10M+', label: 'Revenue' }
          ]
        };
        break;
      case 'countdown':
        newContent = {
          title: 'Launching Soon',
          targetDate: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString()
        };
        break;
      case 'map':
        newContent = {
          address: '123 Example St, San Francisco, CA',
          zoom: 15,
          height: '400px'
        };
        break;
      case 'social':
        newContent = {
          title: 'Follow Us',
          networks: [
            { name: 'Facebook', url: 'https://facebook.com/' },
            { name: 'Twitter', url: 'https://twitter.com/' },
            { name: 'Instagram', url: 'https://instagram.com/' }
          ]
        };
        break;
      case 'navbar':
        newContent = {
          brand: 'Your Brand',
          links: [
            { text: 'Home', url: '#' },
            { text: 'About', url: '#about' },
            { text: 'Services', url: '#services' },
            { text: 'Contact', url: '#contact' }
          ]
        };
        break;
      case 'footer':
        newContent = {
          companyName: 'Your Company',
          tagline: 'Your company tagline',
          showSocialLinks: true,
          socialLinks: [],
          showNavLinks: true,
          navLinks: [],
          copyright: '2023 Your Company. All rights reserved.'
        };
        break;
      case 'analytics':
        newContent = {
          provider: 'Google Analytics',
          trackingId: 'UA-XXXXXXXX-X',
          enabledFeatures: ['Pageviews', 'Events', 'User Demographics'],
          anonymizeIp: true,
          cookieConsent: true
        };
        break;
      default:
        newContent = 'New element';
    }
    const newElement = {
      id: Date.now(),
      type,
      content: newContent,
    };
    setElements([...elements, newElement]);
    setSelectedElement(newElement.id);
  };
  const handleDragStart = (e, componentType) => {
    setIsDragging(true);
    setDraggedComponent(componentType);
    const dragImage = document.createElement('div');
    dragImage.className = 'bg-purple-100 text-purple-800 p-2 rounded shadow';
    dragImage.innerHTML = `Add ${componentType}`;
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 0, 0);
    setTimeout(() => {
      document.body.removeChild(dragImage);
    }, 0);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (canvasRef.current && draggedComponent) {
      addElement(draggedComponent);
      setDraggedComponent(null);
    }
  };
  const handlePublish = () => {
    setShowPublishSuccess(true);
    setTimeout(() => {
      setShowPublishSuccess(false);
    }, 4000);
  };
  const handleSave = () => {
    if (selectedTemplate) {
      const updatedTemplate = {
        ...selectedTemplate,
        name: templateName,
        category: templateCategory,
        sections: elements.map(element => ({
          type: element.type,
          content: element.content
        })),
        lastModified: new Date().toISOString()
      };
      const savedTemplates = JSON.parse(localStorage.getItem('elevateher_templates') || '[]');
      const existingTemplateIndex = savedTemplates.findIndex(t => t.id === updatedTemplate.id);
      if (existingTemplateIndex >= 0) {
        savedTemplates[existingTemplateIndex] = updatedTemplate;
      } else {
        savedTemplates.push(updatedTemplate);
      }
      localStorage.setItem('elevateher_templates', JSON.stringify(savedTemplates));
      console.log('Template saved to localStorage:', updatedTemplate);
      window.dispatchEvent(new Event('templatessaved'));
      setShowPublishSuccess(true);
      setTimeout(() => {
        setShowPublishSuccess(false);
      }, 3000);
    }
  };
  const updateElementContent = (id, content) => {
    const updatedElements = elements.map(el =>
      el.id === id ? { ...el, content } : el
    );
    setElements(updatedElements);
  };
  const handlePreview = () => {
    setShowPreview(!showPreview);
  };
  const removeElement = (id) => {
    setElements(elements.filter(el => el.id !== id));
    if (selectedElement === id) {
      setSelectedElement(null);
    }
  };
  const duplicateElement = (element) => {
    const newElement = {
      ...element,
      id: Date.now(),
    };
    setElements([...elements, newElement]);
  };
  const moveElement = (fromIndex, toIndex) => {
    const updatedElements = [...elements];
    const [movedElement] = updatedElements.splice(fromIndex, 1);
    updatedElements.splice(toIndex, 0, movedElement);
    setElements(updatedElements);
  };
  const moveElementUp = (id) => {
    const elementIndex = elements.findIndex(el => el.id === id);
    if (elementIndex > 0) {
      const newElements = [...elements];
      const temp = newElements[elementIndex];
      newElements[elementIndex] = newElements[elementIndex - 1];
      newElements[elementIndex - 1] = temp;
      setElements(newElements);
    }
  };
  const moveElementDown = (id) => {
    const elementIndex = elements.findIndex(el => el.id === id);
    if (elementIndex < elements.length - 1) {
      const newElements = [...elements];
      const temp = newElements[elementIndex];
      newElements[elementIndex] = newElements[elementIndex + 1];
      newElements[elementIndex + 1] = temp;
      setElements(newElements);
    }
  };
  const handleElementDragStart = (e, id) => {
    setDraggedElementId(id);
    setSelectedElement(id);
    e.dataTransfer.effectAllowed = 'move';
    const dragPreview = document.createElement('div');
    dragPreview.className = 'bg-white p-3 rounded-md shadow-lg border-2 border-purple-400';
    dragPreview.innerHTML = `<div class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
      <span>Moving ${elements.find(el => el.id === id)?.type || 'Section'}</span>
    </div>`;
    document.body.appendChild(dragPreview);
    e.dataTransfer.setDragImage(dragPreview, 20, 20);
    setTimeout(() => {
      document.body.removeChild(dragPreview);
    }, 0);
  };
  const handleElementDragOver = (e, id) => {
    e.preventDefault();
    if (draggedElementId !== id) {
      setDragOverElementId(id);
    }
  };
  const handleElementDrop = (e, id) => {
    e.preventDefault();
    if (draggedElementId && draggedElementId !== id) {
      const sourceIndex = elements.findIndex(el => el.id === draggedElementId);
      const targetIndex = elements.findIndex(el => el.id === id);
      if (sourceIndex !== -1 && targetIndex !== -1) {
        const newElements = [...elements];
        const [removed] = newElements.splice(sourceIndex, 1);
        newElements.splice(targetIndex, 0, removed);
        setElements(newElements);
      }
    }
    setDraggedElementId(null);
    setDragOverElementId(null);
  };
  const handleElementDragEnd = () => {
    setDraggedElementId(null);
    setDragOverElementId(null);
  };
  const componentLibrary = {
    'Layout': [
      { type: 'hero', label: 'Hero Section', icon: '✨', description: 'Main banner with CTA' },
      { type: 'section', label: 'Section', icon: '📄', description: 'Container for content' },
      { type: 'columns', label: 'Columns', icon: '🔲', description: 'Multi-column layout' },
      { type: 'navbar', label: 'Navigation Bar', icon: '🧭', description: 'Site navigation menu' },
      { type: 'footer', label: 'Footer', icon: '🏁', description: 'Page footer with links' },
      { type: 'spacer', label: 'Spacer', icon: '↕️', description: 'Add vertical space' },
      { type: 'divider', label: 'Divider', icon: '〰️', description: 'Horizontal line separator' }
    ],
    'Content': [
      { type: 'text', label: 'Text Block', icon: '📝', description: 'Add paragraph text' },
      { type: 'heading', label: 'Heading', icon: '🔤', description: 'Section title' },
      { type: 'image', label: 'Image', icon: '🖼️', description: 'Add a single image' },
      { type: 'video', label: 'Video', icon: '🎬', description: 'Embed a video' },
      { type: 'button', label: 'Button', icon: '👆', description: 'Call-to-action button' },
      { type: 'list', label: 'List', icon: '📋', description: 'Bulleted or numbered list' },
      { type: 'gallery', label: 'Gallery', icon: '🏞️', description: 'Image collection' }
    ],
    'Features': [
      { type: 'features', label: 'Features Grid', icon: '🔍', description: 'Highlight key features' },
      { type: 'testimonial', label: 'Testimonial', icon: '💬', description: 'Customer quote' },
      { type: 'pricing', label: 'Pricing Table', icon: '💰', description: 'Compare pricing options' },
      { type: 'stats', label: 'Statistics', icon: '📊', description: 'Display key metrics' },
      { type: 'team', label: 'Team Members', icon: '👥', description: 'Showcase your team' },
      { type: 'faq', label: 'FAQ Section', icon: '❓', description: 'Frequently asked questions' },
      { type: 'cta', label: 'Call to Action', icon: '📢', description: 'Conversion section' }
    ],
    'Interactive': [
      { type: 'form', label: 'Contact Form', icon: '📨', description: 'User input form' },
      { type: 'map', label: 'Map', icon: '🗺️', description: 'Embed a location map' },
      { type: 'social', label: 'Social Media', icon: '📱', description: 'Social media links' },
      { type: 'countdown', label: 'Countdown', icon: '⏱️', description: 'Event countdown timer' },
      { type: 'tabs', label: 'Tabs', icon: '📑', description: 'Tabbed content sections' },
      { type: 'accordion', label: 'Accordion', icon: '🪗', description: 'Collapsible content panels' },
      { type: 'slider', label: 'Slider', icon: '🔄', description: 'Image or content carousel' }
    ],
    'E-Commerce': [
      { type: 'product', label: 'Product Card', icon: '🛍️', description: 'Product display' },
      { type: 'productGrid', label: 'Product Grid', icon: '📦', description: 'Multiple products layout' },
      { type: 'cart', label: 'Shopping Cart', icon: '🛒', description: 'Cart summary' },
      { type: 'checkout', label: 'Checkout Form', icon: '💳', description: 'Payment checkout' },
      { type: 'reviews', label: 'Product Reviews', icon: '⭐', description: 'Customer reviews' }
    ],
    'Marketing': [
      { type: 'analytics', label: 'Analytics', icon: '📊', description: 'Website analytics tracking' },
      { type: 'seo', label: 'SEO Settings', icon: '🔍', description: 'Search engine optimization' },
      { type: 'popup', label: 'Popup', icon: '💬', description: 'Marketing popup or modal' },
      { type: 'newsletter', label: 'Newsletter Signup', icon: '✉️', description: 'Email subscription form' }
    ]
  };
  const CanvasWithSections = ({ 
    canvasRef, 
    handleDragOver, 
    handleDrop, 
    elements, 
    selectedElement, 
    setSelectedElement, 
    removeElement, 
    duplicateElement, 
    moveElement, 
    moveElementUp, 
    moveElementDown,
    handleElementDragStart,
    handleElementDragOver,
    handleElementDrop,
    handleElementDragEnd
  }) => {
    return (
      <div 
        ref={canvasRef}
        className="flex-1 p-6 overflow-y-auto bg-gray-100"
        onDragOver={(e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = 'move';
        }}
        onDrop={handleDrop}
      >
        <div className="mx-auto max-w-4xl bg-white shadow-md rounded-md p-8 min-h-[800px]">
          {elements.length === 0 ? (
            <div className="border-2 border-dashed border-gray-300 rounded-md p-12 text-center">
              <p className="text-gray-500 mb-4">Drag and drop elements here to build your page</p>
              <p className="text-gray-400 text-sm">Or choose from the component library on the left</p>
            </div>
          ) : (
            elements.map((element, index) => (
              <div 
                key={element.id}
                id={`element-${element.id}`}
                className={`relative ${dragOverElementId === element.id ? 'border-t-4 border-purple-400 pt-2' : ''}`}
                onDragOver={(e) => handleElementDragOver(e, element.id)}
                onDrop={(e) => handleElementDrop(e, element.id)}
                onDragEnd={handleElementDragEnd}
              >
                <SectionRenderer 
                  element={element}
                  isSelected={selectedElement === element.id}
                  onSelect={setSelectedElement}
                  onMoveUp={moveElementUp}
                  onMoveDown={moveElementDown}
                  onDelete={removeElement}
                  isFirst={index === 0}
                  isLast={index === elements.length - 1}
                  onDragStart={(e) => handleElementDragStart(e, element.id)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <TopBar 
        navigate={navigate}
        templateName={templateName}
        setTemplateName={setTemplateName}
        handlePreview={handlePreview}
        handleSave={handleSave}
      />
      {isLoading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin w-16 h-16 border-4 border-gray-300 border-t-purple-600 rounded-full mb-4"></div>
            <p className="text-gray-600 text-lg">Loading template...</p>
          </div>
        </div>
      ) : error ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md px-6 py-8 bg-white rounded-lg shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Template Error</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <button 
              onClick={() => navigate('/templates')}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Go to Templates
            </button>
          </div>
        </div>
      ) : showPreview ? (
        <PreviewMode 
          elements={elements}
          handlePreview={handlePreview}
        />
      ) : (
        <div className="flex-1 flex overflow-hidden">
          <LeftSidebar 
            componentLibrary={componentLibrary}
            handleDragStart={handleDragStart}
            addElement={addElement}
          />
          <CanvasWithSections 
            canvasRef={canvasRef}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
            elements={elements}
            selectedElement={selectedElement}
            setSelectedElement={setSelectedElement}
            removeElement={removeElement}
            duplicateElement={duplicateElement}
            moveElement={moveElement}
            moveElementUp={moveElementUp}
            moveElementDown={moveElementDown}
            handleElementDragStart={handleElementDragStart}
            handleElementDragOver={handleElementDragOver}
            handleElementDrop={handleElementDrop}
            handleElementDragEnd={handleElementDragEnd}
          />
          <RightSidebar 
            selectedElement={selectedElement}
            elements={elements}
            updateElementContent={updateElementContent}
          />
        </div>
      )}
      <SuccessNotification 
        show={showPublishSuccess}
        message="Changes saved successfully!"
      />
    </div>
  );
};
export default DragDropEditor;
