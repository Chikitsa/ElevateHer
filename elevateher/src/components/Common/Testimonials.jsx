import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Jennifer Wilson",
    role: "Fashion Designer",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    content: "ElevateHer helped me create a stunning website for my fashion brand in just a few hours. The templates are beautiful and the customization options are endless!"
  },
  {
    id: 2, 
    name: "Sarah Martinez",
    role: "Life Coach",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    content: "The wellness template was exactly what I needed for my coaching business. I was able to showcase my services and start booking clients right away."
  },
  {
    id: 3,
    name: "Michelle Johnson",
    role: "Bakery Owner",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80",
    content: "As someone with zero tech skills, I was amazed at how easily I could drag and drop elements to create my dream website. My bakery's online presence has never looked better!"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8 rounded-2xl shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Success Stories
          </span>
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-md p-8 relative">
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
                      />
                    </div>
                    <div className="pt-12 text-center">
                      <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-pink-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-pink-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg focus:outline-none hover:bg-pink-50 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg focus:outline-none hover:bg-pink-50 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
