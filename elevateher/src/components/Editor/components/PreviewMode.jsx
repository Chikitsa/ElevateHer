import React from 'react';
const PreviewSectionRenderer = ({ element }) => {
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
          <div className="bg-white p-6 rounded-md shadow border-2 border-dashed border-gray-300">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-bold capitalize">{element.type || 'Unknown'} Section</h3>
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
    <div className="mb-6">
      {renderContent()}
    </div>
  );
};
const PreviewMode = ({ elements, handlePreview }) => {
  return (
    <div className="flex-1 flex flex-col bg-gray-100">
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Preview Mode</h1>
        <button 
          onClick={handlePreview}
          className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Editor
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto  bg-white shadow-md rounded-md p-8">
          {elements.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>No content to preview. Add elements to your page first.</p>
            </div>
          ) : (
            elements.map((element) => (
              <PreviewSectionRenderer 
                key={element.id} 
                element={element} 
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default PreviewMode; 