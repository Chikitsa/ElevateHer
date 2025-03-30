import React from 'react';
const TopBar = ({ 
  navigate, 
  templateName, 
  setTemplateName, 
  handlePreview, 
  handleSave,
  canUndo,
  canRedo,
  handleUndo,
  handleRedo,
  handleExport,
  handleImport,
  isGridVisible,
  toggleGrid
}) => {
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const cmdKey = isMac ? '⌘' : 'Ctrl';
  const shortcuts = {
    undo: `${cmdKey}+Z`,
    redo: isMac ? `${cmdKey}+Shift+Z` : `${cmdKey}+Y`,
    save: `${cmdKey}+S`,
    preview: `${cmdKey}+P`
  };
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/templates')}
          className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span>Back to Templates</span>
        </button>
        <div className="h-6 border-l border-gray-300"></div>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-600 font-medium">Template Name:</span>
          <input
            type="text"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
            className="p-2 text-sm border border-gray-300 rounded-md focus:border-purple-500 focus:ring-2 focus:ring-purple-200 bg-white text-gray-800 transition-colors"
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4 space-x-1">
          <button
            onClick={handleUndo}
            disabled={!canUndo}
            className={`p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors ${!canUndo ? 'opacity-50 cursor-not-allowed' : ''}`}
            title={`Undo (${shortcuts.undo})`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
            </svg>
          </button>
          <button
            onClick={handleRedo}
            disabled={!canRedo}
            className={`p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors ${!canRedo ? 'opacity-50 cursor-not-allowed' : ''}`}
            title={`Redo (${shortcuts.redo})`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6"></path>
            </svg>
          </button>
          <div className="h-6 border-l border-gray-300 mx-1"></div>
          <button
            onClick={toggleGrid}
            className={`p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors ${isGridVisible ? 'bg-gray-100' : ''}`}
            title={isGridVisible ? "Hide Grid" : "Show Grid"}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zm0 8a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2z"></path>
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-3">
          <div className="dropdown relative">
            <button
              className="px-3 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700 font-medium transition-colors flex items-center"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
              </svg>
              More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="dropdown-menu absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 hidden py-1 z-10">
              <div className="px-4 py-2 text-xs text-gray-500 uppercase">Actions</div>
              <button 
                onClick={handleExport}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between group"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                  </svg>
                  Export Template
                </div>
              </button>
              <button 
                onClick={handleImport}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center justify-between group"
              >
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                  Import Template
                </div>
              </button>
              <div className="border-t border-gray-200 my-1"></div>
              <div className="px-4 py-2 text-xs text-gray-500 uppercase">Keyboard Shortcuts</div>
              <div className="px-4 py-2 text-sm text-gray-700 flex items-center justify-between">
                <span>Undo</span>
                <kbd className="ml-2 bg-gray-100 px-2 py-1 text-xs rounded">{shortcuts.undo}</kbd>
              </div>
              <div className="px-4 py-2 text-sm text-gray-700 flex items-center justify-between">
                <span>Redo</span>
                <kbd className="ml-2 bg-gray-100 px-2 py-1 text-xs rounded">{shortcuts.redo}</kbd>
              </div>
              <div className="px-4 py-2 text-sm text-gray-700 flex items-center justify-between">
                <span>Save</span>
                <kbd className="ml-2 bg-gray-100 px-2 py-1 text-xs rounded">{shortcuts.save}</kbd>
              </div>
              <div className="px-4 py-2 text-sm text-gray-700 flex items-center justify-between">
                <span>Preview</span>
                <kbd className="ml-2 bg-gray-100 px-2 py-1 text-xs rounded">{shortcuts.preview}</kbd>
              </div>
              <div className="px-4 py-2 text-sm text-gray-700 flex items-center justify-between">
                <span>Delete Element</span>
                <kbd className="ml-2 bg-gray-100 px-2 py-1 text-xs rounded">Delete</kbd>
              </div>
            </div>
          </div>
          <button
            onClick={handlePreview}
            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700 font-medium transition-colors flex items-center"
            title={`Preview (${shortcuts.preview})`}
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            Preview
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 text-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-sm font-medium flex items-center"
            title={`Save Changes (${shortcuts.save})`}
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
            </svg>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
export default TopBar; 