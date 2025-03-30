import React from 'react';
import ElementPropertyEditor from './ElementPropertyEditor';
const RightSidebar = ({ selectedElement, elements, updateElementContent }) => {
  return (
    <div className="w-72 bg-white border-l border-gray-200 flex flex-col overflow-hidden shadow-sm">
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <h2 className="text-sm font-semibold text-gray-800">Properties</h2>
        <p className="text-xs text-gray-500 mt-1">Edit selected element</p>
      </div>
      <div className="flex-1 overflow-y-auto">
        {selectedElement ? (
          elements.find(el => el.id === selectedElement) ? (
            <ElementPropertyEditor 
              element={elements.find(el => el.id === selectedElement)} 
              updateElementContent={updateElementContent}
            />
          ) : (
            <div className="p-4 text-gray-500 text-sm">Element not found.</div>
          )
        ) : (
          <div className="p-4 text-center">
            <div className="mt-6 mb-6">
              <svg className="mx-auto h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm font-medium">Select an element to edit its properties</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default RightSidebar; 