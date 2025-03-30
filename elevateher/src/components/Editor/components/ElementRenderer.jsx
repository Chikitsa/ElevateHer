import React from 'react';
const ElementRenderer = ({ element }) => {
  const handleElementClick = (e) => {
    e.preventDefault();
  };
  switch (element.type) {
    case 'text':
      return (
        <div className="element-text p-4">
          <p>{element.content}</p>
        </div>
      );
    case 'heading':
      return (
        <div className="element-heading">
          {element.level === 'h1' && <h1 className={`text-4xl font-bold text-${element.align || 'left'}`}>{element.content}</h1>}
          {element.level === 'h2' && <h2 className={`text-3xl font-bold text-${element.align || 'left'}`}>{element.content}</h2>}
          {element.level === 'h3' && <h3 className={`text-2xl font-bold text-${element.align || 'left'}`}>{element.content}</h3>}
          {element.level === 'h4' && <h4 className={`text-xl font-bold text-${element.align || 'left'}`}>{element.content}</h4>}
          {element.level === 'h5' && <h5 className={`text-lg font-bold text-${element.align || 'left'}`}>{element.content}</h5>}
          {element.level === 'h6' && <h6 className={`text-base font-bold text-${element.align || 'left'}`}>{element.content}</h6>}
        </div>
      );
    case 'paragraph':
      return (
        <div className="element-paragraph">
          <p className={`mb-4 text-${element.align || 'left'}`}>{element.content}</p>
        </div>
      );
    case 'image':
      return (
        <div className="element-image">
          <img 
            src={element.src || element.content} 
            alt={element.alt || "Image"} 
            className="max-w-full" 
            style={{ 
              width: element.width ? `${element.width}px` : 'auto',
              height: element.height ? `${element.height}px` : 'auto',
            }} 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/400x300?text=Image+Error';
            }}
          />
        </div>
      );
    case 'button':
      return (
        <div className="element-button">
          <a 
            href={element.link || '#'} 
            onClick={handleElementClick}
            className={`inline-block px-6 py-2 rounded font-medium ${
              element.variant === 'primary' 
                ? 'bg-purple-600 text-white hover:bg-purple-700' 
                : element.variant === 'secondary'
                ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                : 'bg-white text-purple-600 border border-purple-600 hover:bg-purple-50'
            }`}
          >
            {element.text || element.content?.text || 'Button'}
          </a>
        </div>
      );
    case 'hero':
      return (
        <div className="element-hero relative p-10 bg-gradient-to-r from-purple-100 to-pink-100 overflow-hidden">
          {element.backgroundImage && (
            <div className="absolute inset-0">
              <img 
                src={element.backgroundImage} 
                alt="Background" 
                className="w-full h-full object-cover opacity-20"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
          <div className="relative z-10 max-w-3xl mx-auto text-center py-12">
            <h2 className="text-4xl font-bold mb-4">{element.heading || element.content?.heading || 'Hero Heading'}</h2>
            <p className="text-xl text-gray-700 mb-8">{element.subheading || element.content?.subheading || 'Hero subheading'}</p>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium">
              {element.ctaText || element.content?.ctaText || 'Call to Action'}
            </button>
          </div>
        </div>
      );
    case 'section':
      return (
        <div className="element-section p-4 bg-white">
          <h3 className="text-2xl font-bold mb-4">{element.heading || element.content?.heading || 'Section Heading'}</h3>
          <p className="text-gray-700">{element.content?.content || element.content || 'Section content'}</p>
        </div>
      );
    case 'columns':
      const columnsData = element.columns || element.content?.columns || [
        { heading: 'Column 1', content: 'Content for column 1' },
        { heading: 'Column 2', content: 'Content for column 2' }
      ];
      return (
        <div className="element-columns grid grid-cols-2 gap-4 p-4 bg-white">
          {columnsData.map((column, i) => (
            <div key={i} className="p-4 bg-white">
              <h3 className="text-xl font-bold mb-4">{column.heading}</h3>
              <p className="text-gray-700">{column.content}</p>
            </div>
          ))}
        </div>
      );
    case 'divider':
      return (
        <div className="element-divider my-6">
          <hr className={element.style === 'dashed' ? 'border-dashed' : element.style === 'dotted' ? 'border-dotted' : 'border-solid'} />
        </div>
      );
    case 'spacer':
      return (
        <div className="element-spacer" style={{ height: `${element.height || 50}px` }}></div>
      );
    case 'card':
      return (
        <div className="element-card rounded-lg overflow-hidden border border-gray-200 bg-white shadow">
          {(element.image || element.content?.image) && (
            <div className="card-image">
              <img 
                src={element.image || element.content?.image} 
                alt={element.title || element.content?.title || "Card"} 
                className="w-full object-cover" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/400x200?text=Card+Image';
                }}
              />
            </div>
          )}
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{element.title || element.content?.title || 'Card Title'}</h3>
            <p className="text-gray-700">{element.content?.content || element.content || 'Card content'}</p>
          </div>
        </div>
      );
    case 'form':
      const fields = element.fields || element.content?.fields || [];
      const submitText = element.submitText || element.content?.submitText || 'Submit';
      return (
        <div className="element-form p-6 border border-gray-200 rounded-lg bg-white shadow">
          {(element.title || element.content?.title) && (
            <h3 className="text-xl font-bold mb-4">{element.title || element.content?.title}</h3>
          )}
          <form onSubmit={(e) => e.preventDefault()}>
            {fields.map((field, i) => (
              <div key={i} className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor={field.id || `field-${i}`}>
                  {field.label}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id || `field-${i}`}
                    name={field.id || `field-${i}`}
                    rows="4"
                    required={field.required}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={field.placeholder || ''}
                  ></textarea>
                ) : (
                  <input
                    type={field.type || 'text'}
                    id={field.id || `field-${i}`}
                    name={field.id || `field-${i}`}
                    required={field.required}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder={field.placeholder || ''}
                  />
                )}
              </div>
            ))}
            <button 
              type="submit" 
              onClick={handleElementClick}
              className="px-6 py-2 bg-purple-600 text-white rounded font-medium hover:bg-purple-700"
            >
              {submitText}
            </button>
          </form>
        </div>
      );
    case 'features':
      const featuresItems = element.items || element.content?.items || [];
      const featuresLayout = element.layout || element.content?.layout || 'grid';
      const featuresHeading = element.heading || element.content?.heading || 'Features';
      return (
        <div className="element-features p-6 bg-white">
          <h3 className="text-2xl font-bold text-center mb-8">{featuresHeading}</h3>
          <div className={`grid ${featuresLayout === 'grid' ? 'grid-cols-3' : 'grid-cols-1'} gap-6`}>
            {featuresItems.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-4">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case 'testimonial':
      return (
        <div className="element-testimonial p-6 bg-white">
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl text-gray-300 mb-4">"</div>
            <p className="text-lg mb-4 italic">{element.quote || element.content?.quote || 'Testimonial quote'}</p>
            <div className="flex items-center">
              <img 
                src={element.avatar || element.content?.avatar || 'https://via.placeholder.com/150?text=A'} 
                alt={element.author || element.content?.author || 'Author'}
                className="w-12 h-12 rounded-full mr-3"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/150?text=A';
                }}
              />
              <div>
                <p className="font-semibold">{element.author || element.content?.author || 'Author Name'}</p>
                <p className="text-sm text-gray-600">{element.role || element.content?.role || 'Role'}</p>
              </div>
            </div>
          </div>
        </div>
      );
    case 'footer':
      const footerNavLinks = element.navLinks || element.content?.navLinks || [
        { text: 'Home', url: '#' },
        { text: 'About', url: '#about' },
        { text: 'Services', url: '#services' },
        { text: 'Contact', url: '#contact' }
      ];
      const footerSocialLinks = element.socialLinks || element.content?.socialLinks || [
        { name: 'Facebook', url: '#' },
        { name: 'Twitter', url: '#' },
        { name: 'Instagram', url: '#' },
        { name: 'LinkedIn', url: '#' }
      ];
      return (
        <div className="element-footer bg-gray-900 text-white py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-xl font-bold">
                  {element.companyName || element.content?.companyName || 'Your Company'}
                </h3>
                <p className="mt-2 text-gray-400">
                  {element.tagline || element.content?.tagline || 'Your company tagline'}
                </p>
              </div>
              {(element.showNavLinks || element.content?.showNavLinks !== false) && (
                <div className="mb-6 md:mb-0">
                  <ul className="flex flex-wrap justify-center space-x-6">
                    {footerNavLinks.map((link, i) => (
                      <li key={i}>
                        <a 
                          href={link.url} 
                          onClick={handleElementClick}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {link.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {(element.showSocialLinks || element.content?.showSocialLinks !== false) && (
                <div className="flex space-x-4">
                  {footerSocialLinks.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.url} 
                      onClick={handleElementClick}
                      className="text-gray-400 hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      <span className="text-lg">
                        {social.name === 'Facebook' && '📘'}
                        {social.name === 'Twitter' && '🐦'}
                        {social.name === 'Instagram' && '📷'}
                        {social.name === 'LinkedIn' && '🔗'}
                        {!['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].includes(social.name) && '🌐'}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
              <p>© {new Date().getFullYear()} {element.copyright || element.content?.copyright || 'All rights reserved.'}</p>
            </div>
          </div>
        </div>
      );
    case 'video':
      return (
        <div className="element-video">
          <iframe
            width={element.width || 560}
            height={element.height || 315}
            src={element.url || element.content?.url || 'https://www.youtube.com/embed/dQw4w9WgXcQ'}
            title={element.title || "Video"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    case 'icon':
      return (
        <div className="element-icon flex justify-center">
          {renderIcon(element.name || 'info', element.size || 'md', element.color || 'primary')}
        </div>
      );
    case 'gallery':
      const galleryItems = element.items || element.content?.items || [];
      const galleryLayout = element.layout || element.content?.layout || 'grid';
      const galleryHeading = element.heading || element.content?.heading || 'Gallery';
      const gallerySubheading = element.subheading || element.content?.subheading || '';
      const lightboxEnabled = element.lightbox || element.content?.lightbox || false;
      return (
        <div className="element-gallery p-6 bg-white">
          {galleryHeading && (
            <h3 className="text-2xl font-bold text-center mb-4">{galleryHeading}</h3>
          )}
          {gallerySubheading && (
            <p className="text-center text-gray-600 mb-8">{gallerySubheading}</p>
          )}
          <div className={`grid gap-4 ${
            galleryLayout === 'masonry' 
              ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-max' 
              : galleryLayout === 'columns' 
              ? 'grid-cols-1 md:grid-cols-2'
              : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          }`}>
            {galleryItems.map((item, i) => {
              let widthClass = '';
              if (galleryLayout === 'masonry') {
                widthClass = item.width === 'large' 
                  ? 'md:col-span-2' 
                  : item.width === 'small'
                  ? '' 
                  : '';
              }
              return (
                <div key={i} className={`gallery-item overflow-hidden group ${widthClass}`}>
                  <div className="relative h-0 pb-[75%] overflow-hidden rounded-lg bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.caption || ''}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x300?text=Image+Error';
                      }}
                    />
                    {(item.caption || item.category) && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white transition-opacity duration-300">
                        {item.caption && <p className="font-medium text-sm">{item.caption}</p>}
                        {item.category && <p className="text-xs opacity-75">{item.category}</p>}
                      </div>
                    )}
                    {lightboxEnabled && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 opacity-0 transition-all duration-300 group-hover:bg-opacity-30 group-hover:opacity-100">
                        <span className="p-2 bg-white rounded-full">
                          <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                          </svg>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    case 'about':
      const aboutBio = element.bio || element.content?.bio || 'About me content';
      const aboutImage = element.image || element.content?.image;
      const aboutHeading = element.heading || element.content?.heading || 'About Me';
      const aboutSkills = element.skills || element.content?.skills || [];
      const aboutLayout = element.layout || element.content?.layout || 'split';
      const aboutBgColor = element.backgroundColor || element.content?.backgroundColor || 'white';
      return (
        <div className={`element-about p-6 ${aboutBgColor !== 'white' ? `bg-${aboutBgColor}` : 'bg-white'}`}>
          <div className={`${aboutLayout === 'split' ? 'md:flex md:gap-8 items-center' : 'space-y-6 text-center'}`}>
            {aboutImage && (
              <div className={`${aboutLayout === 'split' ? 'md:w-2/5' : 'mx-auto max-w-sm'} mb-6 md:mb-0`}>
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src={aboutImage} 
                    alt={aboutHeading}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x400?text=Profile';
                    }}
                  />
                </div>
              </div>
            )}
            <div className={aboutLayout === 'split' ? 'md:w-3/5' : ''}>
              <h3 className="text-2xl font-bold mb-4">{aboutHeading}</h3>
              <div className="mb-6 text-gray-700 leading-relaxed">
                {aboutBio}
              </div>
              {aboutSkills.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold mb-3">Skills & Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {aboutSkills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    case 'services':
      const servicesItems = element.items || element.content?.items || [];
      const servicesHeading = element.heading || element.content?.heading || 'Our Services';
      const servicesSubheading = element.subheading || element.content?.subheading || '';
      const servicesLayout = element.layout || element.content?.layout || 'grid';
      return (
        <div className="element-services p-6 bg-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{servicesHeading}</h3>
            {servicesSubheading && (
              <p className="text-gray-600">{servicesSubheading}</p>
            )}
          </div>
          <div className={`grid gap-6 ${
            servicesLayout === 'cards' 
              ? 'grid-cols-1 md:grid-cols-3' 
              : servicesLayout === 'list'
              ? 'grid-cols-1' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {servicesItems.map((item, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                {item.image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title || ''} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x200?text=Service';
                      }}
                    />
                  </div>
                )}
                <div className="p-4">
                  <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex flex-wrap items-center justify-between">
                    {item.price && (
                      <div className="font-semibold text-purple-700">
                        {item.currency && item.currency === "USD" ? "$" : ""}{item.price}
                        {item.duration && <span className="text-sm text-gray-500 ml-1">/ {item.duration}</span>}
                      </div>
                    )}
                    {item.ctaText && (
                      <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm">
                        {item.ctaText}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'products':
      const productsItems = element.items || element.content?.items || [];
      const productsHeading = element.heading || element.content?.heading || 'Our Products';
      const productsSubheading = element.subheading || element.content?.subheading || '';
      const productsLayout = element.layout || element.content?.layout || 'grid';
      const showPrice = element.showPrice || element.content?.showPrice || true;
      const showAddToCart = element.showAddToCart || element.content?.showAddToCart || false;
      const productColumns = element.columns || element.content?.columns || 3;
      return (
        <div className="element-products p-6 bg-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{productsHeading}</h3>
            {productsSubheading && (
              <p className="text-gray-600">{productsSubheading}</p>
            )}
          </div>
          <div className={`grid gap-6 grid-cols-1 ${
            productColumns === 4 
              ? 'md:grid-cols-2 lg:grid-cols-4' 
              : productColumns === 2
              ? 'md:grid-cols-2' 
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {productsItems.map((item, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  {item.badge && (
                    <div className={`absolute top-2 right-2 px-2 py-1 text-xs font-bold rounded ${
                      item.badge === 'Sale' 
                        ? 'bg-red-500 text-white' 
                        : item.badge === 'New'
                        ? 'bg-green-500 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      {item.badge}
                    </div>
                  )}
                  <div className="h-52 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name || ''} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x300?text=Product';
                      }}
                    />
                  </div>
                </div>
                <div className="p-4">
                  {item.category && (
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {item.category}
                    </span>
                  )}
                  <h4 className="text-lg font-semibold mb-2 mt-1">{item.name}</h4>
                  {showPrice && (
                    <div className="flex items-center mb-3">
                      <span className="font-bold text-lg">
                        {item.currency && item.currency === "USD" ? "$" : ""}{item.price}
                      </span>
                      {item.discountPrice && (
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          {item.currency && item.currency === "USD" ? "$" : ""}{item.discountPrice}
                        </span>
                      )}
                    </div>
                  )}
                  {showAddToCart && (
                    <button className="w-full mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors text-sm">
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'menu':
      const menuItems = element.items || element.content?.items || [];
      const menuHeading = element.heading || element.content?.heading || 'Our Menu';
      const menuSubheading = element.subheading || element.content?.subheading || '';
      const menuLayout = element.layout || element.content?.layout || 'list';
      const menuCategories = element.categories || element.content?.categories || [];
      const activeCategory = element.activeCategory || element.content?.activeCategory || (menuCategories.length > 0 ? menuCategories[0] : '');
      const filteredMenuItems = activeCategory 
        ? menuItems.filter(item => item.category === activeCategory)
        : menuItems;
      return (
        <div className="element-menu p-6 bg-white">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">{menuHeading}</h3>
            {menuSubheading && (
              <p className="text-gray-600">{menuSubheading}</p>
            )}
          </div>
          {menuCategories.length > 0 && (
            <div className="flex flex-wrap justify-center mb-8 gap-2">
              {menuCategories.map((category, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === activeCategory
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
          <div className={`${
            menuLayout === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 gap-6' 
              : 'space-y-6'
          }`}>
            {filteredMenuItems.map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                {item.image && (
                  <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name || ''} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/150?text=Menu+Item';
                      }}
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold">{item.name}</h4>
                      {item.description && (
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      )}
                      {item.dietary && item.dietary.length > 0 && (
                        <div className="flex gap-1 mt-2">
                          {item.dietary.map((diet, j) => (
                            <span key={j} className="px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs">
                              {diet}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    {item.price && (
                      <div className="font-bold text-purple-700 ml-4">
                        {item.currency && item.currency === "USD" ? "$" : ""}{item.price}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'testimonials':
      const testimonialsItems = element.items || element.content?.items || [];
      const testimonialsHeading = element.heading || element.content?.heading || 'Testimonials';
      const testimonialsSubheading = element.subheading || element.content?.subheading || '';
      const testimonialsBgColor = element.backgroundColor || element.content?.backgroundColor || '';
      return (
        <div className={`element-testimonials p-6 ${testimonialsBgColor ? `bg-${testimonialsBgColor}` : 'bg-white'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{testimonialsHeading}</h3>
            {testimonialsSubheading && (
              <p className="text-gray-600 max-w-2xl mx-auto">{testimonialsSubheading}</p>
            )}
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
            {testimonialsItems.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl text-gray-300 mb-4">"</div>
                <p className="text-lg mb-6 italic text-gray-700">{item.quote}</p>
                <div className="flex items-center">
                  {item.avatar && (
                    <img 
                      src={item.avatar} 
                      alt={item.author || ''} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/48?text=A';
                      }}
                    />
                  )}
                  <div>
                    <p className="font-semibold">{item.author}</p>
                    {item.role && <p className="text-sm text-gray-500">{item.role}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'blog':
      const blogItems = element.items || element.content?.items || [];
      const blogHeading = element.heading || element.content?.heading || 'Latest Posts';
      const blogLayout = element.layout || element.content?.layout || 'grid';
      const showExcerpt = element.showExcerpt || element.content?.showExcerpt || true;
      const showDate = element.showDate || element.content?.showDate || true;
      const showReadMore = element.showReadMore || element.content?.showReadMore || true;
      return (
        <div className="element-blog p-6 bg-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">{blogHeading}</h3>
          </div>
          <div className={`grid gap-8 ${
            blogLayout === 'list' 
              ? 'grid-cols-1' 
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {blogItems.map((post, i) => (
              <div key={i} className={`blog-post ${post.featured ? 'border-2 border-purple-200 rounded-lg' : ''}`}>
                {post.image && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={post.image} 
                      alt={post.title || ''} 
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/400x250?text=Blog+Post';
                      }}
                    />
                  </div>
                )}
                <div className="px-2">
                  {post.category && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-2">
                      {post.category}
                    </span>
                  )}
                  <h4 className="text-xl font-bold mb-2">{post.title}</h4>
                  {showExcerpt && post.excerpt && (
                    <p className="text-gray-600 mb-3 line-clamp-3">{post.excerpt}</p>
                  )}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    {showDate && post.date && (
                      <span>{post.date}</span>
                    )}
                    {post.readTime && (
                      <span>{post.readTime} read</span>
                    )}
                  </div>
                  {showReadMore && (
                    <button className="mt-4 text-purple-600 font-medium hover:text-purple-800 transition-colors inline-flex items-center">
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'newsletter':
      const newsletterHeading = element.heading || element.content?.heading || 'Subscribe to Our Newsletter';
      const newsletterSubheading = element.subheading || element.content?.subheading || '';
      const buttonText = element.buttonText || element.content?.buttonText || 'Subscribe';
      const layout = element.layout || element.content?.layout || 'inline';
      const bgColor = element.backgroundColor || element.content?.backgroundColor || '';
      const showNameField = element.showNameField || element.content?.showNameField || false;
      return (
        <div className={`element-newsletter p-8 rounded-lg ${bgColor ? `bg-${bgColor}` : 'bg-gray-50'}`}>
          <div className={`${layout === 'card' ? 'text-center max-w-md mx-auto' : ''}`}>
            <h3 className="text-xl font-bold mb-2">{newsletterHeading}</h3>
            {newsletterSubheading && (
              <p className="text-gray-600 mb-6">{newsletterSubheading}</p>
            )}
            <form className={`${layout === 'inline' ? 'flex flex-wrap gap-3 items-end' : 'space-y-4'}`}>
              {showNameField && (
                <div className={layout === 'inline' ? 'flex-1 min-w-[200px]' : 'w-full'}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              )}
              <div className={layout === 'inline' ? 'flex-1 min-w-[200px]' : 'w-full'}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <button type="submit" className={`bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-700 transition-colors ${layout === 'inline' ? 'self-end' : 'w-full'}`}>
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      );
    case 'cta':
      const ctaHeading = element.heading || element.content?.heading || 'Call to Action';
      const ctaSubheading = element.subheading || element.content?.subheading || '';
      const ctaText = element.ctaText || element.content?.ctaText || 'Get Started';
      const ctaBgColor = element.backgroundColor || element.content?.backgroundColor || '';
      const ctaAlignment = element.alignment || element.content?.alignment || 'center';
      const showEmailForm = element.showEmailForm || element.content?.showEmailForm || false;
      return (
        <div className={`element-cta p-10 ${ctaBgColor ? `bg-${ctaBgColor}` : 'bg-purple-50'}`}>
          <div className={`max-w-3xl mx-auto text-${ctaAlignment}`}>
            <h3 className="text-2xl font-bold mb-3">{ctaHeading}</h3>
            {ctaSubheading && (
              <p className="text-gray-600 mb-6 text-lg">{ctaSubheading}</p>
            )}
            {showEmailForm ? (
              <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                  {ctaText}
                </button>
              </div>
            ) : (
              <button className="px-8 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors font-medium text-lg">
                {ctaText}
              </button>
            )}
          </div>
        </div>
      );
    case 'booking':
      const bookingHeading = element.heading || element.content?.heading || 'Book an Appointment';
      const bookingSubheading = element.subheading || element.content?.subheading || '';
      const bookingLayout = element.layout || element.content?.layout || 'form';
      const availabilityDays = element.availabilityDays || element.content?.availabilityDays || ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
      const availabilityHours = element.availabilityHours || element.content?.availabilityHours || '9:00 - 17:00';
      const serviceDuration = element.serviceDuration || element.content?.serviceDuration || 60;
      const bookingBgColor = element.backgroundColor || element.content?.backgroundColor || '';
      return (
        <div className={`element-booking p-6 rounded-lg ${bookingBgColor ? `bg-${bookingBgColor}` : 'bg-white'}`}>
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">{bookingHeading}</h3>
            {bookingSubheading && (
              <p className="text-gray-600">{bookingSubheading}</p>
            )}
          </div>
          {bookingLayout === 'calendar' ? (
            <div className="max-w-2xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Select a date</h4>
                  <div className="grid grid-cols-7 gap-1 mb-4">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                      <div key={i} className="text-center text-sm font-medium py-1">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: 35 }, (_, i) => (
                      <button
                        key={i}
                        className={`text-center py-2 rounded hover:bg-purple-50 ${
                          i % 7 === 0 || i % 7 === 6 || i < 7 || i > 27
                            ? 'text-gray-400'
                            : availabilityDays.includes(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i % 7])
                            ? 'text-gray-800'
                            : 'text-gray-400'
                        } ${
                          i === 15 ? 'bg-purple-100 text-purple-800 font-medium' : ''
                        }`}
                      >
                        {i + 1 > 31 ? i + 1 - 31 : i + 1}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">Available time slots ({availabilityHours})</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time, i) => (
                      <button
                        key={i}
                        className={`text-center py-2 border rounded hover:bg-purple-50 ${
                          i === 2 ? 'bg-purple-100 text-purple-800 border-purple-200' : 'border-gray-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                      Book Appointment
                    </button>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t text-sm text-gray-500">
                  <p>Duration: {serviceDuration} minutes</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                  <select
                    id="service"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option>Life Coaching (60 min)</option>
                    <option>Wellness Consultation (45 min)</option>
                    <option>Strategy Session (90 min)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                  <select
                    id="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option>Morning (9AM - 12PM)</option>
                    <option>Afternoon (1PM - 5PM)</option>
                    <option>Evening (6PM - 8PM)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <textarea
                    id="message"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors">
                    Request Booking
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      );
    default:
      return (
        <div className="p-4 border border-red-300 bg-red-50 text-red-700 rounded">
          Unknown element type: {element.type}
          <pre className="mt-2 text-xs overflow-auto max-h-32">
            {JSON.stringify(element, null, 2)}
          </pre>
        </div>
      );
  }
};
const renderIcon = (name, size, color) => {
  const sizeClass = 
    size === 'sm' ? 'w-4 h-4' : 
    size === 'lg' ? 'w-8 h-8' : 
    size === 'xl' ? 'w-12 h-12' : 
    'w-6 h-6';
  const colorClass = 
    color === 'primary' ? 'text-purple-600' :
    color === 'secondary' ? 'text-gray-600' :
    color === 'success' ? 'text-green-600' :
    color === 'danger' ? 'text-red-600' :
    color === 'warning' ? 'text-yellow-600' :
    color === 'info' ? 'text-blue-600' :
    color === 'light' ? 'text-gray-200' :
    color === 'dark' ? 'text-gray-800' :
    color === 'white' ? 'text-white' :
    'text-black';
  switch (name) {
    case 'star':
      return (
        <svg className={`${sizeClass} ${colorClass}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      );
    case 'heart':
      return (
        <svg className={`${sizeClass} ${colorClass}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
        </svg>
      );
    case 'check':
      return (
        <svg className={`${sizeClass} ${colorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      );
    case 'mail':
      return (
        <svg className={`${sizeClass} ${colorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      );
    default:
      return (
        <svg className={`${sizeClass} ${colorClass}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      );
  }
};
export default ElementRenderer; 