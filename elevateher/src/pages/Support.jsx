import React, { useState } from 'react';
import Header from '../components/Layout/Header';

const faqCategories = [
  {
    id: "getting-started",
    name: "Getting Started",
    faqs: [
      {
        question: "How do I create my first website?",
        answer: "Once you've signed up, you'll be taken to our templates page. Choose a template that suits your needs, then customize it using our drag and drop editor. When you're happy with your design, click 'Publish' to make your site live."
      },
      {
        question: "Do I need any technical skills to use ElevateHer?",
        answer: "Not at all! ElevateHer is designed to be user-friendly for everyone, regardless of technical expertise. Our drag and drop editor makes it easy to create a professional website without coding knowledge."
      },
      {
        question: "Can I use my own domain name?",
        answer: "Yes! Professional and Business plan subscribers can connect their own custom domain. From your dashboard, go to 'Settings' > 'Domains' and follow the instructions to connect your domain."
      },
      {
        question: "How long does it take to build a website?",
        answer: "With our pre-designed templates and intuitive editor, you can have a basic website up and running in less than an hour. More complex sites with multiple pages and custom content may take a few hours to a few days, depending on your needs."
      }
    ]
  },
  {
    id: "customization",
    name: "Customization",
    faqs: [
      {
        question: "Can I change my template after I've started building?",
        answer: "Yes, you can switch templates at any time. However, please note that switching templates may require some re-arrangement of your content, as each template has a different layout."
      },
      {
        question: "How do I add my own images?",
        answer: "In the editor, click on any image element and then click 'Replace'. You can upload your own images or choose from our integrated image library with thousands of free stock photos."
      },
      {
        question: "Can I customize fonts and colors?",
        answer: "Absolutely! You can change colors, fonts, button styles, and more through the 'Design' panel in our editor. Professional and Business plans offer even more customization options."
      },
      {
        question: "Is it possible to add custom code?",
        answer: "Yes, Business plan users can add custom HTML, CSS, and JavaScript through our 'Custom Code' section in the advanced settings."
      }
    ]
  },
  {
    id: "publishing",
    name: "Publishing & Domains",
    faqs: [
      {
        question: "How do I publish my website?",
        answer: "When you're ready to go live, simply click the 'Publish' button in the top right corner of the editor. Your site will be published to your ElevateHer subdomain (yourname.elevateher.com) or your custom domain if you've set one up."
      },
      {
        question: "Will my website work on mobile devices?",
        answer: "Yes! All ElevateHer websites are fully responsive and will look great on desktops, tablets, and mobile phones. You can preview how your site looks on different devices using the device toggle in the editor."
      },
      {
        question: "How do I connect my social media accounts?",
        answer: "You can add social media links by adding a Social Icons element to your page. In the editor, click 'Add Elements' > 'Social' and then customize the links to point to your social profiles."
      },
      {
        question: "Can I add a blog to my website?",
        answer: "Yes, Professional and Business plans include blogging functionality. You can add a blog section from the 'Pages' menu in your dashboard."
      }
    ]
  },
  {
    id: "account",
    name: "Account & Billing",
    faqs: [
      {
        question: "How do I upgrade my plan?",
        answer: "You can upgrade your plan at any time by going to 'Account Settings' > 'Plans & Billing' in your dashboard. Choose the plan that suits your needs and follow the prompts to complete your purchase."
      },
      {
        question: "Can I cancel my subscription?",
        answer: "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your current plan until the end of your billing period."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and Apple Pay."
      },
      {
        question: "Is there a free trial?",
        answer: "We offer a free Starter plan that lets you build and publish a basic website. This allows you to try out our platform before committing to a paid plan."
      }
    ]
  }
];

const SupportCard = ({ icon, title, description, link, linkText }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl">
      <div className="text-purple-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href={link} 
        className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition-colors duration-200"
      >
        {linkText}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

const Support = () => {
  const [activeCategory, setActiveCategory] = useState("getting-started");
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const currentCategory = faqCategories.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
  
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Help & Support
              </span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help you succeed with your website. Find answers to common questions or get in touch with our support team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <SupportCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title="Knowledge Base"
              description="Browse our extensive library of tutorials, guides, and step-by-step instructions."
              link="#"
              linkText="Visit Knowledge Base"
            />
            <SupportCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              }
              title="Video Tutorials"
              description="Watch helpful tutorials on how to build and customize your website."
              link="#"
              linkText="Watch Videos"
            />
            <SupportCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              }
              title="Contact Support"
              description="Need personalized help? Our support team is ready to assist you."
              link="#contact-form"
              linkText="Get in Touch"
            />
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
            <div className="p-8 bg-gradient-to-r from-purple-600 to-pink-600">
              <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
              <p className="text-white text-opacity-90">Find quick answers to common questions</p>
            </div>
            
            <div className="md:flex">
              <div className="p-6 bg-gray-50 md:w-1/4">
                <nav className="space-y-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                        activeCategory === category.id
                          ? 'bg-purple-100 text-purple-800'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </nav>
              </div>
              
              <div className="p-6 md:w-3/4 border-t md:border-t-0 md:border-l border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6">{currentCategory.name}</h3>
                <div className="space-y-4">
                  {currentCategory.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="flex justify-between items-center w-full text-left font-medium text-gray-900 py-2 focus:outline-none"
                      >
                        <span>{faq.question}</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                            activeAccordion === index ? 'rotate-180' : ''
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          activeAccordion === index ? 'max-h-96 mt-2' : 'max-h-0'
                        }`}
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div id="contact-form" className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Still need help? Get in touch
                </span>
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="mt-1 w-full rounded-lg border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg shadow hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <img src="/logo.svg" alt="ElevateHer" className="h-10 w-auto" />
            <p className="mt-4 text-gray-500 text-center">© 2025 ElevateHer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Support;
