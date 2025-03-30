import React, { useState, useEffect } from 'react';
const LeftSidebar = ({ componentLibrary, handleDragStart, addElement }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Layout');
  const [favorites, setFavorites] = useState([]);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const filterComponents = (components) => {
    if (!searchTerm.trim()) return components;
    return components.filter(component => 
      component.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      component.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  useEffect(() => {
    const savedFavorites = localStorage.getItem('componentFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);
  const toggleFavorite = (type) => {
    const newFavorites = favorites.includes(type)
      ? favorites.filter(fav => fav !== type)
      : [...favorites, type];
    setFavorites(newFavorites);
    localStorage.setItem('componentFavorites', JSON.stringify(newFavorites));
  };
  const onDragStart = (e, type, category) => {
    const componentData = {
      type,
      category,
      source: 'component-library',
      clientX: e.clientX,
      clientY: e.clientY,
      offsetX: e.nativeEvent.offsetX,
      offsetY: e.nativeEvent.offsetY,
      timestamp: Date.now()
    };
    e.dataTransfer.setData('application/json', JSON.stringify(componentData));
    e.dataTransfer.setData('text/plain', type);
    e.dataTransfer.setData('type', type);
    e.dataTransfer.setData('category', category);
    e.dataTransfer.setData('component/position', JSON.stringify({
      x: e.clientX,
      y: e.clientY
    }));
    e.dataTransfer.effectAllowed = 'copy';
    const dragImage = document.createElement('div');
    dragImage.className = 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-3 rounded-lg shadow-xl font-medium';
    dragImage.innerHTML = `Add ${type}`;
    dragImage.style.position = 'absolute';
    dragImage.style.top = '-1000px';
    dragImage.style.opacity = '0.95';
    dragImage.style.pointerEvents = 'none';
    dragImage.style.zIndex = '9999';
    dragImage.style.backdropFilter = 'blur(4px)';
    document.body.appendChild(dragImage);
    e.dataTransfer.setDragImage(dragImage, 30, 20);
    setTimeout(() => {
      document.body.removeChild(dragImage);
    }, 0);
    if (handleDragStart) {
      handleDragStart(e, type, category, componentData);
    }
  };
  const renderComponentItem = (component, category) => (
    <div 
      key={`${category}-${component.type}`}
      className="group relative bg-white border border-gray-200 hover:border-transparent hover:ring-2 hover:ring-purple-500/50 dark:bg-gray-800 dark:border-gray-700 rounded-xl p-3.5 flex items-center shadow-sm hover:shadow-xl cursor-grab active:cursor-grabbing transition-all duration-300 ease-in-out transform hover:scale-[1.01]"
      draggable="true"
      onDragStart={(e) => onDragStart(e, component.type, category)}
      onClick={() => addElement(component.type)}
      data-component-type={component.type}
      data-component-category={category}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-600 dark:text-purple-400 mr-4 flex-shrink-0 transition-all duration-300 group-hover:shadow-md">
        {component.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-gray-900 dark:text-white truncate text-sm">{component.label}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{component.description}</div>
        <div className="mt-1.5 flex items-center flex-wrap gap-1.5">
          <span className="inline-flex items-center text-xs px-2.5 py-0.5 rounded-full bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-700 dark:text-purple-300 font-medium">
            {category}
          </span>
          {favorites.includes(component.type) && (
            <span className="inline-flex items-center text-xs px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 text-amber-700 dark:text-amber-300 font-medium">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              Favorite
            </span>
          )}
        </div>
      </div>
      <button 
        className="flex-shrink-0 ml-2 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-200"
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(component.type);
        }}
        aria-label={favorites.includes(component.type) ? "Remove from favorites" : "Add to favorites"}
      >
        <svg 
          className={`w-5 h-5 transition-all duration-300 ${favorites.includes(component.type) ? "text-amber-500 scale-110" : "text-gray-400"}`} 
          fill={favorites.includes(component.type) ? "currentColor" : "none"} 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </button>
    </div>
  );
  useEffect(() => {
    const handleDragOver = (e) => {
      e.preventDefault();
      e.stopPropagation();
      e.dataTransfer.dropEffect = 'copy';
      if (e.target.classList && !e.target.classList.contains('drag-over') && e.target.classList.contains('drop-zone')) {
        e.target.classList.add('drag-over');
      }
    };
    const handleDragLeave = (e) => {
      if (e.target.classList && e.target.classList.contains('drag-over')) {
        e.target.classList.remove('drag-over');
      }
    };
    const handleDrop = (e) => {
      e.preventDefault();
      if (e.target.classList && e.target.classList.contains('drag-over')) {
        e.target.classList.remove('drag-over');
      }
      const dropX = e.clientX;
      const dropY = e.clientY;
      const positionData = {
        x: dropX,
        y: dropY,
        targetId: e.target.id || null,
        targetClassName: e.target.className || null,
        timestamp: Date.now()
      };
      sessionStorage.setItem('lastDropPosition', JSON.stringify(positionData));
    };
    document.addEventListener('dragover', handleDragOver);
    document.addEventListener('dragleave', handleDragLeave);
    document.addEventListener('drop', handleDrop);
    const style = document.createElement('style');
    style.innerHTML = `
      .drop-zone { 
        position: relative;
        transition: all 0.2s ease;
      }
      .drop-zone.drag-over { 
        outline: none;
        box-shadow: inset 0 0 0 2px rgba(168, 85, 247, 0.6), 0 0 20px rgba(168, 85, 247, 0.25);
        background-color: rgba(168, 85, 247, 0.08);
      }
      @keyframes pulse-border {
        0% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(168, 85, 247, 0); }
        100% { box-shadow: 0 0 0 0 rgba(168, 85, 247, 0); }
      }
      .drop-zone.drag-over::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit;
        pointer-events: none;
        animation: pulse-border 1.5s infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.removeEventListener('dragover', handleDragOver);
      document.removeEventListener('dragleave', handleDragLeave);
      document.removeEventListener('drop', handleDrop);
      document.head.removeChild(style);
    };
  }, []);
  const Header = () => (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-3.5 flex items-center border-b border-gray-700/50">
      <button
        className="group flex items-center text-sm hover:text-purple-300 transition-colors duration-200"
        onClick={() => {}}
      >
        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200 mr-2">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"></path>
          </svg>
        </div>
        <span className="font-medium">Back to Templates</span>
      </button>
      <div className="ml-auto">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-200"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isCollapsed ? "M13 5l7 7-7 7M5 5l7 7-7 7" : "M11 19l-7-7 7-7M19 19l-7-7 7-7"} />
          </svg>
        </button>
      </div>
    </div>
  );
  return (
    <div className={`flex flex-col h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <Header />
      {!isCollapsed && (
        <>
          <div className="p-4">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                <span className="mr-2">Components</span>
                <div className="flex h-5 items-center">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                  </span>
                </div>
              </h1>
            </div>
            <div className={`relative mb-5 ${isSearchFocused ? 'ring-2 ring-purple-500 rounded-full shadow-md' : ''}`}>
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <svg className={`w-4 h-4 ${isSearchFocused ? 'text-purple-500' : 'text-gray-400'} transition-colors duration-200`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search components..."
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-700 rounded-full focus:outline-none focus:border-transparent text-gray-800 dark:text-white bg-white dark:bg-gray-800 placeholder-gray-400 dark:placeholder-gray-500 text-sm transition-all duration-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              {searchTerm && (
                <button
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  onClick={() => setSearchTerm('')}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              )}
            </div>
            <div className="flex items-center mb-5">
              <label className="inline-flex items-center cursor-pointer">
                <div className={`relative w-11 h-6 rounded-full transition-colors duration-300 ease-in-out ${showFavoritesOnly ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'}`}>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={showFavoritesOnly}
                    onChange={() => setShowFavoritesOnly(!showFavoritesOnly)}
                  />
                  <div className={`absolute w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${showFavoritesOnly ? 'translate-x-5' : 'translate-x-1'} top-0.5 ring-0 hover:ring-2 hover:ring-gray-200 dark:hover:ring-gray-600`} />
                </div>
                <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                  <svg className={`w-4 h-4 mr-1.5 ${showFavoritesOnly ? 'text-amber-500' : 'text-gray-400'} transition-colors duration-300`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  Favorites only
                </span>
              </label>
            </div>
            <div className="mb-5">
              <div className="flex overflow-x-auto pb-1 gap-1.5 -mx-1 px-1 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
                {Object.keys(componentLibrary).map(category => (
                  <button
                    key={category}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 ${
                      activeCategory === category 
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md transform hover:translate-y-0' 
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transform hover:-translate-y-0.5'
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-4 pt-0 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
            <div className="flex items-center justify-between mb-3.5">
              <h2 className="text-sm font-semibold text-gray-800 dark:text-white flex items-center">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 mr-2"></span>
                {activeCategory} Components
              </h2>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-full">
                {componentLibrary[activeCategory]?.filter(comp => !showFavoritesOnly || favorites.includes(comp.type)).length || 0} items
              </span>
            </div>
            <div className="space-y-3.5 pb-4">
              {componentLibrary[activeCategory]?.filter(comp => 
                !showFavoritesOnly || favorites.includes(comp.type)
              ).map(component => renderComponentItem(component, activeCategory))}
              {componentLibrary[activeCategory]?.filter(comp => 
                !showFavoritesOnly || favorites.includes(comp.type)
              ).length === 0 && (
                <div className="text-center py-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700/50 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mx-auto flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                  </div>
                  <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">No components found</h3>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Try selecting a different category or add some favorites.</p>
                  <button
                    className="mt-4 inline-flex items-center px-3.5 py-2 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    onClick={() => setShowFavoritesOnly(false)}
                  >
                    Show all components
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
      {isCollapsed && (
        <div className="flex-1 flex flex-col items-center py-4 space-y-4 overflow-y-auto">
          {Object.keys(componentLibrary).map(category => (
            <button
              key={category}
              className={`w-10 h-10 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-200 ${
                activeCategory === category 
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-md' 
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category)}
              title={category}
            >
              {category.charAt(0)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default LeftSidebar; 