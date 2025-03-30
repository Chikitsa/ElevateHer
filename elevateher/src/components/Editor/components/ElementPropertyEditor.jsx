import React from 'react';
const ElementPropertyEditor = ({ element, updateElementContent }) => {
  if (!element) return null;
  const formClasses = {
    input: "w-full p-2 rounded border border-gray-200 bg-white text-gray-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200",
    textarea: "w-full p-3 rounded border border-gray-200 bg-white text-gray-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200",
    select: "w-full p-2 rounded border border-gray-200 bg-white text-gray-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200",
    label: "block text-sm font-medium text-gray-700 mb-2",
    group: "mb-4",
    helpText: "mt-1 text-xs text-gray-500"
  };
  const content = element.content || {};
  const getContentValue = (contentObj, key, fallback = '') => {
    if (typeof contentObj === 'object' && contentObj !== null) {
      return contentObj[key] !== undefined ? contentObj[key] : fallback;
    }
    return fallback;
  };
  switch(element.type) {
    case 'text':
      return (
        <div className="p-4 space-y-4">
          <div className={formClasses.group}>
            <label className={formClasses.label}>Text Content</label>
            <textarea
              className={formClasses.textarea}
              value={typeof element.content === 'string' ? element.content : ''}
              onChange={(e) => updateElementContent(element.id, e.target.value)}
              rows={6}
            />
          </div>
        </div>
      );
    case 'heading':
      return (
        <div className="p-4 space-y-4">
          <div className={formClasses.group}>
            <label className={formClasses.label}>Heading Text</label>
            <textarea
              className={formClasses.textarea}
              value={typeof element.content === 'string' ? element.content : ''}
              onChange={(e) => updateElementContent(element.id, e.target.value)}
              rows={3}
            />
          </div>
          <div className={formClasses.group}>
            <label className={formClasses.label}>Heading Level</label>
            <select
              className={formClasses.select}
              value={element.level || 'h2'}
              onChange={(e) => {
                const updatedElement = {...element, level: e.target.value};
                updateElementContent(element.id, updatedElement.content);
              }}
            >
              <option value="h1">H1</option>
              <option value="h2">H2</option>
              <option value="h3">H3</option>
              <option value="h4">H4</option>
              <option value="h5">H5</option>
              <option value="h6">H6</option>
            </select>
          </div>
          <div className={formClasses.group}>
            <label className={formClasses.label}>Alignment</label>
            <select
              className={formClasses.select}
              value={element.align || 'left'}
              onChange={(e) => {
                const updatedElement = {...element, align: e.target.value};
                updateElementContent(element.id, updatedElement.content);
              }}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>
      );
    case 'paragraph':
      return (
        <div className="p-4 space-y-4">
          <div className={formClasses.group}>
            <label className={formClasses.label}>Paragraph Text</label>
            <textarea
              className={formClasses.textarea}
              value={typeof element.content === 'string' ? element.content : ''}
              onChange={(e) => updateElementContent(element.id, e.target.value)}
              rows={6}
            />
          </div>
          <div className={formClasses.group}>
            <label className={formClasses.label}>Alignment</label>
            <select
              className={formClasses.select}
              value={element.align || 'left'}
              onChange={(e) => {
                const updatedElement = {...element, align: e.target.value};
                updateElementContent(element.id, updatedElement.content);
              }}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
        </div>
      );
    case 'image':
      return (
        <div className="p-4 space-y-4">
          <div className={formClasses.group}>
            <label className={formClasses.label}>Image URL</label>
            <input
              type="text"
              className={formClasses.input}
              value={element.src || (typeof element.content === 'string' ? element.content : '')}
              onChange={(e) => {
                if (element.src !== undefined) {
                  const updatedElement = {...element, src: e.target.value};
                  updateElementContent(element.id, updatedElement.content);
                } else {
                  updateElementContent(element.id, e.target.value);
                }
              }}
              placeholder="Enter image URL"
            />
          </div>
          <div className={formClasses.group}>
            <label className={formClasses.label}>Alt Text</label>
            <input
              type="text"
              className={formClasses.input}
              value={element.alt || ''}
              onChange={(e) => {
                const updatedElement = {...element, alt: e.target.value};
                updateElementContent(element.id, updatedElement.content);
              }}
              placeholder="Enter alternative text"
            />
          </div>
          <div className={formClasses.group}>
            <label className={formClasses.label}>Width (px)</label>
            <input
              type="number"
              className={formClasses.input}
              value={element.width || 400}
              onChange={(e) => {
                const updatedElement = {...element, width: Number(e.target.value) || 400};
                updateElementContent(element.id, updatedElement.content);
              }}
              placeholder="Width in pixels"
            />
          </div>
          <div className={formClasses.group}>
            <label className={formClasses.label}>Height (px)</label>
            <input
              type="number"
              className={formClasses.input}
              value={element.height || 300}
              onChange={(e) => {
                const updatedElement = {...element, height: Number(e.target.value) || 300};
                updateElementContent(element.id, updatedElement.content);
              }}
              placeholder="Height in pixels"
            />
          </div>
          <div className="form-preview mt-3">
            <p className="text-sm text-gray-500 mb-2">Preview:</p>
            <img 
              src={element.src || (typeof element.content === 'string' ? element.content : 'https://via.placeholder.com/400x300')} 
              alt={element.alt || "Preview"} 
              className="max-w-full h-auto rounded border border-gray-200"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x300?text=Invalid+Image+URL';
              }} 
            />
          </div>
        </div>
      );
    case 'hero':
      const heroContent = typeof content === 'object' ? content : {};
      return (
        <div className="p-4 space-y-4">
          <div className={formClasses.group}>
            <label className={formClasses.label}>Heading</label>
            <input
              type="text"
              className={formClasses.input}
              value={element.heading || getContentValue(heroContent, 'heading', 'Welcome to Your Website')}
              onChange={(e) => {
                if (typeof content === 'object') {
                  updateElementContent(element.id, {
                    ...heroContent,
                    heading: e.target.value
                  });
                } else {
                  updateElementContent(element.id, {
                    heading: e.target.value,
                    subheading: element.subheading || 'Add your tagline here',
                    ctaText: element.ctaText || 'Get Started'
                  });
                }
              }}
              placeholder="Enter heading"
            />
          </div>
          <div className={formClasses.group}>
            <label className={formClasses.label}>Subheading</label>
            <input
              type="text"
              className={formClasses.input}
              value={element.subheading || getContentValue(heroContent, 'subheading', 'Add your tagline here')}
              onChange={(e) => {
                if (typeof content === 'object') {
                  updateElementContent(element.id, {
                    ...heroContent,
                    subheading: e.target.value
                  });
                } else {
                  updateElementContent(element.id, {
                    heading: element.heading || 'Welcome to Your Website',
                    subheading: e.target.value,
                    ctaText: element.ctaText || 'Get Started'
                  });
                }
              }}
              placeholder="Enter subheading"
            />
          </div>
          <div className={formClasses.group}>
            <label className={formClasses.label}>Button Text</label>
            <input
              type="text"
              className={formClasses.input}
              value={element.ctaText || getContentValue(heroContent, 'ctaText', 'Get Started')}
              onChange={(e) => {
                if (typeof content === 'object') {
                  updateElementContent(element.id, {
                    ...heroContent,
                    ctaText: e.target.value
                  });
                } else {
                  updateElementContent(element.id, {
                    heading: element.heading || 'Welcome to Your Website',
                    subheading: element.subheading || 'Add your tagline here',
                    ctaText: e.target.value
                  });
                }
              }}
              placeholder="Enter button text"
            />
          </div>
        </div>
      );
    case 'section':
      const sectionContent = typeof content === 'object' ? content : {};
      return (
        <div className="p-4 space-y-4">
          <div className={formClasses.group}>
            <label className={formClasses.label}>Heading</label>
            <input
              type="text"
              className={formClasses.input}
              value={element.heading || getContentValue(sectionContent, 'heading', 'Section Title')}
              onChange={(e) => {
                if (typeof content === 'object') {
                  updateElementContent(element.id, {
                    ...sectionContent,
                    heading: e.target.value
                  });
                } else {
                  updateElementContent(element.id, {
                    heading: e.target.value,
                    content: getContentValue(sectionContent, 'content', 'Add your section content here.')
                  });
                }
              }}
              placeholder="Enter heading"
            />
          </div>
          <div className={formClasses.group}>
            <label className={formClasses.label}>Content</label>
            <textarea
              className={formClasses.textarea}
              value={
                typeof sectionContent.content === 'string' ? sectionContent.content : 
                (typeof content === 'string' ? content : 
                getContentValue(sectionContent, 'content', 'Add your section content here.'))
              }
              onChange={(e) => {
                if (typeof content === 'object') {
                  updateElementContent(element.id, {
                    ...sectionContent,
                    content: e.target.value
                  });
                } else {
                  updateElementContent(element.id, {
                    heading: element.heading || 'Section Title',
                    content: e.target.value
                  });
                }
              }}
              rows={6}
              placeholder="Enter content"
            />
          </div>
        </div>
      );
    case 'button':
      const buttonContent = typeof content === 'object' ? content : {};
      return (
        <div className="p-4 space-y-4">
          <div className={formClasses.group}>
            <label className={formClasses.label}>Button Text</label>
            <input
              type="text"
              className={formClasses.input}
              value={
                element.text || 
                getContentValue(buttonContent, 'text', 'Button')
              }
              onChange={(e) => {
                if (typeof content === 'object') {
                  updateElementContent(element.id, {
                    ...buttonContent,
                    text: e.target.value
                  });
                } else {
                  updateElementContent(element.id, {
                    text: e.target.value,
                    url: element.link || '#',
                    style: element.variant || 'primary'
                  });
                }
              }}
              placeholder="Enter button text"
            />
          </div>
          <div className={formClasses.group}>
            <label className={formClasses.label}>URL</label>
            <input
              type="text"
              className={formClasses.input}
              value={
                element.link || 
                getContentValue(buttonContent, 'url', '#')
              }
              onChange={(e) => {
                if (typeof content === 'object') {
                  updateElementContent(element.id, {
                    ...buttonContent,
                    url: e.target.value
                  });
                } else {
                  updateElementContent(element.id, {
                    text: element.text || 'Button',
                    url: e.target.value,
                    style: element.variant || 'primary'
                  });
                }
              }}
              placeholder="Enter URL"
            />
          </div>
          <div className={formClasses.group}>
            <label className={formClasses.label}>Style</label>
            <select
              className={formClasses.select}
              value={
                element.variant || 
                getContentValue(buttonContent, 'style', 'primary')
              }
              onChange={(e) => {
                if (typeof content === 'object') {
                  updateElementContent(element.id, {
                    ...buttonContent,
                    style: e.target.value
                  });
                } else {
                  updateElementContent(element.id, {
                    text: element.text || 'Button',
                    url: element.link || '#',
                    style: e.target.value
                  });
                }
              }}
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="outline">Outline</option>
            </select>
          </div>
        </div>
      );
    case 'spacer':
      let spacerHeight = 50;
      if (typeof element.height === 'number') {
        spacerHeight = element.height;
      } else if (typeof content === 'object' && content !== null && typeof content.height === 'number') {
        spacerHeight = content.height;
      } else if (typeof content === 'number') {
        spacerHeight = content;
      }
      return (
        <div className="p-4 space-y-4">
          <div className={formClasses.group}>
            <label className={formClasses.label}>Height (px)</label>
            <input
              type="number"
              className={formClasses.input}
              value={spacerHeight}
              onChange={(e) => {
                const height = parseInt(e.target.value) || 50;
                if (typeof content === 'object' && content !== null) {
                  updateElementContent(element.id, {
                    ...content,
                    height
                  });
                } else if (element.height !== undefined) {
                  updateElementContent(element.id, {
                    ...element,
                    height
                  }.content);
                } else {
                  updateElementContent(element.id, { height });
                }
              }}
              placeholder="Enter height in pixels"
              min={10}
              max={500}
            />
            <p className={formClasses.helpText}>Height in pixels</p>
          </div>
        </div>
      );
    case 'divider':
      return (
        <div className="p-4 space-y-4">
          <div className={formClasses.group}>
            <label className={formClasses.label}>Style</label>
            <select
              className={formClasses.select}
              value={element.style || getContentValue(content, 'style', 'solid')}
              onChange={(e) => {
                if (typeof content === 'object' && content !== null) {
                  updateElementContent(element.id, {
                    ...content,
                    style: e.target.value
                  });
                } else {
                  updateElementContent(element.id, { style: e.target.value });
                }
              }}
            >
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </select>
          </div>
        </div>
      );
    case 'video':
      const videoContent = typeof content === 'object' ? content : {};
      return (
        <div className="p-4 space-y-4">
          <div className={formClasses.group}>
            <label className={formClasses.label}>Video URL</label>
            <input
              type="text"
              className={formClasses.input}
              value={element.url || getContentValue(videoContent, 'url', '')}
              onChange={(e) => {
                if (typeof content === 'object') {
                  updateElementContent(element.id, {
                    ...videoContent,
                    url: e.target.value
                  });
                } else {
                  updateElementContent(element.id, {
                    url: e.target.value,
                    width: element.width || 560,
                    height: element.height || 315,
                    title: element.title || 'Video'
                  });
                }
              }}
              placeholder="Enter video URL (YouTube embed format recommended)"
            />
            <p className={formClasses.helpText}>YouTube embed format recommended</p>
          </div>
          <div className={formClasses.group}>
            <label className={formClasses.label}>Width (px)</label>
            <input
              type="number"
              className={formClasses.input}
              value={element.width || getContentValue(videoContent, 'width', 560)}
              onChange={(e) => {
                const width = parseInt(e.target.value) || 560;
                if (typeof content === 'object') {
                  updateElementContent(element.id, {
                    ...videoContent,
                    width
                  });
                } else {
                  updateElementContent(element.id, {
                    url: element.url || '',
                    width,
                    height: element.height || 315,
                    title: element.title || 'Video'
                  });
                }
              }}
              placeholder="Width in pixels"
            />
          </div>
          <div className={formClasses.group}>
            <label className={formClasses.label}>Height (px)</label>
            <input
              type="number"
              className={formClasses.input}
              value={element.height || getContentValue(videoContent, 'height', 315)}
              onChange={(e) => {
                const height = parseInt(e.target.value) || 315;
                if (typeof content === 'object') {
                  updateElementContent(element.id, {
                    ...videoContent,
                    height
                  });
                } else {
                  updateElementContent(element.id, {
                    url: element.url || '',
                    width: element.width || 560,
                    height,
                    title: element.title || 'Video'
                  });
                }
              }}
              placeholder="Height in pixels"
            />
          </div>
        </div>
      );
    default:
      return (
        <div className="p-4">
          <div className="mb-4 p-3 bg-purple-50 border border-purple-200 rounded-md">
            <p className="text-purple-800 text-sm">
              This element type ({element.type}) can be edited below. Any changes will be reflected in the preview.
            </p>
          </div>
          {}
          {typeof element.content === 'object' && element.content !== null ? (
            <div className="space-y-4">
              {}
              {Object.entries(element.content).map(([key, value]) => {
                if (typeof value !== 'object' && !Array.isArray(value)) {
                  return (
                    <div key={key} className={formClasses.group}>
                      <label className={formClasses.label}>
                        {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                      </label>
                      {typeof value === 'boolean' ? (
                        <select
                          className={formClasses.select}
                          value={value.toString()}
                          onChange={(e) => {
                            const newValue = e.target.value === 'true';
                            updateElementContent(element.id, {
                              ...element.content,
                              [key]: newValue
                            });
                          }}
                        >
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      ) : (
                        <input
                          type={typeof value === 'number' ? 'number' : 'text'}
                          className={formClasses.input}
                          value={value !== undefined ? value : ''}
                          onChange={(e) => {
                            const newValue = typeof value === 'number' ? 
                              parseFloat(e.target.value) || 0 : 
                              e.target.value;
                            updateElementContent(element.id, {
                              ...element.content,
                              [key]: newValue
                            });
                          }}
                        />
                      )}
                    </div>
                  );
                }
                return null;
              })}
              {}
              <div className="mt-4">
                <label className={formClasses.label}>Advanced JSON Editing</label>
                <pre className="p-3 bg-gray-50 rounded text-xs overflow-auto border border-gray-200 text-gray-800">
                  {JSON.stringify(element.content, null, 2)}
                </pre>
                <p className={formClasses.helpText}>
                  Complex properties must be edited via the Canvas or code.
                </p>
              </div>
            </div>
          ) : (
            <div className={formClasses.group}>
              <label className={formClasses.label}>Content</label>
              <textarea
                className={formClasses.textarea}
                value={
                  typeof element.content === 'string' ? element.content : 
                  (element.content !== undefined ? JSON.stringify(element.content) : '')
                }
                onChange={(e) => {
                  updateElementContent(element.id, e.target.value);
                }}
                rows={6}
                placeholder="Enter content"
              />
            </div>
          )}
        </div>
      );
  }
};
export default ElementPropertyEditor; 