import React, { useState } from 'react';
import Header from '../components/Layout/Header';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Creating a Website That Converts",
    excerpt: "Learn the essential elements that make a website not just beautiful, but effective at turning visitors into customers.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Web Design",
    date: "March 18, 2025",
    readTime: "8 min read",
    author: {
      name: "Emma Rodriguez",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  },
  {
    id: 2,
    title: "Building Your Personal Brand as a Woman Entrepreneur",
    excerpt: "Discover how to craft a compelling personal brand that resonates with your audience and sets you apart from competitors.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Personal Branding",
    date: "March 15, 2025",
    readTime: "12 min read",
    author: {
      name: "Sophia Chen",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=922&q=80"
    }
  },
  {
    id: 3,
    title: "How to Create a Content Strategy That Grows Your Business",
    excerpt: "A comprehensive guide to developing a content strategy that attracts your ideal clients and builds your authority in your niche.",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Content Marketing",
    date: "March 10, 2025",
    readTime: "15 min read",
    author: {
      name: "Maya Johnson",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  },
  {
    id: 4,
    title: "Case Study: How Sarah Grew Her Coaching Business Online",
    excerpt: "See how one life coach used ElevateHer to create a website that helped her double her client base in just three months.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    category: "Success Stories",
    date: "March 5, 2025",
    readTime: "10 min read",
    author: {
      name: "Taylor Wilson",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }
  },
  {
    id: 5,
    title: "E-commerce Essentials: Setting Up Your Online Store",
    excerpt: "Everything you need to know about creating an online store that looks professional and drives sales.",
    image: "https://images.unsplash.com/photo-1559842438-2942c907c8fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    category: "E-commerce",
    date: "March 1, 2025",
    readTime: "18 min read",
    author: {
      name: "Olivia Park",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  },
  {
    id: 6,
    title: "The Psychology of Color in Website Design",
    excerpt: "Learn how different colors can influence your visitors' emotions and actions, and how to choose the right palette for your brand.",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Design Psychology",
    date: "February 25, 2025",
    readTime: "14 min read",
    author: {
      name: "Jamie Lee",
      avatar: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80"
    }
  }
];

const categories = ["All", "Web Design", "Personal Branding", "Content Marketing", "Success Stories", "E-commerce", "Design Psychology"];

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="h-64 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
            {post.category}
          </span>
          <span className="text-sm text-gray-500">•</span>
          <span className="text-sm text-gray-500">{post.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center space-x-3">
            <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h4 className="text-sm font-medium text-gray-900">{post.author.name}</h4>
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </div>
          
          <Link 
            to={`/blog/${post.id}`} 
            className="inline-flex items-center text-pink-600 font-medium hover:text-pink-700 transition-colors duration-200"
          >
            Read more
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const FeaturedPost = ({ post }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-purple-700 to-pink-600 shadow-xl">
      <div className="absolute inset-0">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover mix-blend-overlay opacity-60"
        />
      </div>
      
      <div className="relative p-8 sm:p-12 flex flex-col h-full min-h-[400px] justify-end">
        <div className="flex items-center space-x-3 mb-4">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-white text-pink-600">
            {post.category}
          </span>
          <span className="text-sm text-white">{post.date}</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{post.title}</h2>
        <p className="text-white text-opacity-90 mb-6">{post.excerpt}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full border-2 border-white" />
            <h4 className="text-sm font-medium text-white">{post.author.name}</h4>
          </div>
          
          <Link 
            to={`/blog/${post.id}`} 
            className="inline-flex items-center bg-white text-pink-600 px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200"
          >
            Read article
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

const SubscribeSection = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-100 rounded-2xl p-8 sm:p-12 shadow-lg">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Subscribe to our newsletter
          </span>
        </h2>
        <p className="text-gray-600 mb-8">
          Get the latest articles, resources, and tips for women entrepreneurs delivered straight to your inbox.
        </p>
        
        <form className="sm:flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-96 px-5 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 mb-4 sm:mb-0"
          />
          <button
            type="submit"
            className="w-full sm:w-auto sm:ml-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg shadow hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-sm text-gray-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);
  
  const featuredPost = blogPosts[0];
  
  return (
    <div className="min-h-screen flex flex-col">
   
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                The ElevateHer Blog
              </span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Resources, tips, and inspiration for women entrepreneurs building their digital presence.
            </p>
          </div>
          
          <div className="mb-16">
            <FeaturedPost post={featuredPost} />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-16">
            <SubscribeSection />
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

export default Blog;
