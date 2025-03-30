import React, { useState, useEffect, useRef } from 'react';
import ElementRenderer from './ElementRenderer';
const Canvas = ({ 
  canvasRef, 
  handleDragOver, 
  handleDrop, 
  elements, 
  selectedElement, 
  setSelectedElement,
  removeElement,
  duplicateElement,
  moveElement,
  isGridVisible 
}) => {
  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0, elementId: null });
  const [dragOverClass, setDragOverClass] = useState('');
  const contextMenuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
        setContextMenu({ ...contextMenu, show: false });
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [contextMenu]);
  const handleElementClick = (e, id) => {
    e.stopPropagation();
    setSelectedElement(id);
    if (contextMenu.show) {
      setContextMenu({ ...contextMenu, show: false });
    }
  };
  const handleCanvasClick = (e) => {
    if (e.target === canvasRef.current) {
      setSelectedElement(null);
      if (contextMenu.show) {
        setContextMenu({ ...contextMenu, show: false });
      }
    }
  };
  const handleContextMenu = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedElement(id);
    setContextMenu({
      show: true,
      x: e.clientX,
      y: e.clientY,
      elementId: id
    });
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragOverClass('canvas-drag-over');
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOverClass('');
  };
  const handleCanvasDrop = (e) => {
    setDragOverClass('');
    handleDrop(e);
  };
  const handleMoveDown = (id) => {
    const index = elements.findIndex(el => el.id === id);
    if (index < elements.length - 1) {
      moveElement(index, index + 1);
    }
    setContextMenu({ ...contextMenu, show: false });
  };
  const handleMoveUp = (id) => {
    const index = elements.findIndex(el => el.id === id);
    if (index > 0) {
      moveElement(index, index - 1);
    }
    setContextMenu({ ...contextMenu, show: false });
  };
  const handleDuplicate = (id) => {
    const element = elements.find(el => el.id === id);
    if (element) {
      duplicateElement(element);
    }
    setContextMenu({ ...contextMenu, show: false });
  };
  const handleRemove = (id) => {
    removeElement(id);
    setContextMenu({ ...contextMenu, show: false });
  };
  return (
    <div className="flex-1 relative overflow-auto">
      <div 
        ref={canvasRef}
        className={`canvas-container h-full w-full overflow-auto p-8 ${isGridVisible ? 'grid-bg' : ''} ${dragOverClass}`}
        onClick={handleCanvasClick}
        onDragOver={handleDragOver}
        onDrop={handleCanvasDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        <div className="canvas-content max-w-5xl mx-auto bg-white min-h-[calc(100vh-10rem)] shadow-lg rounded border border-gray-200">
          {elements.map((element) => (
            <div
              key={element.id}
              className={`element-wrapper relative ${selectedElement === element.id ? 'element-selected' : ''}`}
              onClick={(e) => handleElementClick(e, element.id)}
              onContextMenu={(e) => handleContextMenu(e, element.id)}
            >
              <ElementRenderer element={element} />
              {selectedElement === element.id && (
                <div className="element-controls absolute top-0 right-0 p-1 bg-purple-100 rounded-bl">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleMoveUp(element.id); }}
                    className="text-purple-700 hover:text-purple-900 p-1"
                    title="Move Up"
                  >
                    ↑
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleMoveDown(element.id); }}
                    className="text-purple-700 hover:text-purple-900 p-1"
                    title="Move Down"
                  >
                    ↓
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleDuplicate(element.id); }}
                    className="text-purple-700 hover:text-purple-900 p-1"
                    title="Duplicate"
                  >
                    +
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleRemove(element.id); }}
                    className="text-red-600 hover:text-red-800 p-1"
                    title="Remove"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          ))}
          {}
          {elements.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 text-gray-500">
              <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              <h3 className="text-lg font-medium text-gray-600 mb-2">Your Canvas is Empty</h3>
              <p className="max-w-md text-gray-500 mb-4">
                Drag elements from the left sidebar onto the canvas to start building your layout, or click on an element in the sidebar to add it.
              </p>
            </div>
          )}
        </div>
      </div>
      {}
      {contextMenu.show && (
        <div 
          ref={contextMenuRef}
          className="absolute bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
          style={{ 
            top: `${contextMenu.y}px`, 
            left: `${contextMenu.x}px`,
            minWidth: '160px'
          }}
        >
          <div 
            className="px-4 py-2 hover:bg-purple-100 cursor-pointer text-gray-700"
            onClick={() => handleMoveUp(contextMenu.elementId)}
          >
            Move Up
          </div>
          <div 
            className="px-4 py-2 hover:bg-purple-100 cursor-pointer text-gray-700"
            onClick={() => handleMoveDown(contextMenu.elementId)}
          >
            Move Down
          </div>
          <div 
            className="px-4 py-2 hover:bg-purple-100 cursor-pointer text-gray-700"
            onClick={() => handleDuplicate(contextMenu.elementId)}
          >
            Duplicate
          </div>
          <div className="border-t border-gray-200 my-1"></div>
          <div 
            className="px-4 py-2 hover:bg-red-100 cursor-pointer text-red-600"
            onClick={() => handleRemove(contextMenu.elementId)}
          >
            Remove
          </div>
        </div>
      )}
    </div>
  );
};
export default Canvas; 