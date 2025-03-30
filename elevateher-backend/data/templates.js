// Project Expectations:
// - Pre-built templates for female entrepreneurs
// - Basic content management (text, images, contact forms)
// - Simple e-commerce module (list products & accept payments)
// - Payment integration options
// - Basic analytics dashboard (visitor count & engagement)

export const templates = [
  {
    id: 1,
    name: "Women in Business",
    description: "Empowering template for female entrepreneurs with professional components and branding elements",
    category: "Business",
    thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    featured: true,
    updatedAt: "2023-12-15T10:30:00Z",
    colors: {
      primary: "#D946EF",
      secondary: "#8B5CF6",
      accent: "#F59E0B"
    },
    fonts: {
      heading: "Montserrat",
      body: "Inter"
    },
    sections: [
      {
        type: "hero",
        id: "hero-1",
        content: {
          heading: "Empowered Leadership",
          subheading: "Building successful businesses with vision and purpose",
          ctaText: "Learn More",
          ctaUrl: "#services",
          image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          layout: "split",
          backgroundColor: "#F9FAFB",
          alignment: "left"
        }
      },
      {
        type: "features",
        id: "features-1",
        content: {
          heading: "Our Services",
          subheading: "Strategies designed for women-led business growth",
          layout: "grid",
          columns: 3,
          items: [
            { 
              title: "Business Strategy", 
              description: "Customized roadmaps for sustainable business growth", 
              icon: "chart-line",
              color: "#D946EF"
            },
            { 
              title: "Brand Development", 
              description: "Authentic branding that captures your unique vision", 
              icon: "sparkles",
              color: "#8B5CF6"
            },
            { 
              title: "Digital Presence", 
              description: "Comprehensive online strategies for maximum impact", 
              icon: "globe",
              color: "#F59E0B"
            }
          ]
        }
      },
      {
        type: "testimonials",
        id: "testimonials-1",
        content: {
          heading: "Success Stories",
          subheading: "Hear from the women entrepreneurs we've helped elevate",
          backgroundColor: "#F9FAFB",
          items: [
            {
              quote: "This platform transformed how I approach my business. The resources are tailored perfectly for women entrepreneurs like me.",
              author: "Maya Johnson",
              role: "Founder, Elevate Design Co.",
              avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            },
            {
              quote: "The strategic insights provided were invaluable. My business revenue has doubled in just six months following their guidance.",
              author: "Zara Chen",
              role: "CEO, GrowthPath Solutions",
              avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            }
          ]
        }
      },
      {
        type: "payment",
        id: "payment-1",
        content: {
          heading: "Investment Options",
          subheading: "Flexible payment plans for your business needs",
          layout: "cards",
          showPriceComparison: true,
          paymentProviders: ["stripe", "paypal", "applepay", "googlepay"],
          secureCheckout: true,
          items: [
            {
              name: "Strategy Session",
              price: 199,
              currency: "USD",
              billingPeriod: "one-time",
              features: ["90-minute consultation", "Business assessment", "Action plan document"],
              ctaText: "Book Now",
              recommended: false
            },
            {
              name: "Business Growth Package",
              price: 499,
              currency: "USD",
              billingPeriod: "monthly",
              features: ["Weekly strategy calls", "Marketing plan development", "Metrics tracking", "Priority support"],
              ctaText: "Get Started",
              recommended: true
            },
            {
              name: "Enterprise Solution",
              price: 1299,
              currency: "USD",
              billingPeriod: "monthly",
              features: ["Complete business strategy", "Brand development", "Team coaching", "24/7 support"],
              ctaText: "Contact Us",
              recommended: false
            }
          ]
        }
      }
    ]
  },
  {
    id: 2,
    name: "Creative Entrepreneur",
    description: "Stunning portfolio template for women in creative fields with advanced gallery features",
    category: "Portfolio",
    thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
    updatedAt: "2024-01-05T14:20:00Z",
    colors: {
      primary: "#EC4899",
      secondary: "#8B5CF6",
      accent: "#F97316"
    },
    fonts: {
      heading: "Playfair Display",
      body: "Raleway"
    },
    sections: [
      {
        type: "hero",
        id: "hero-2",
        content: {
          heading: "Creative Vision",
          subheading: "Design • Art • Innovation",
          ctaText: "View My Work",
          ctaUrl: "#gallery",
          alignment: "center",
          fullHeight: true,
          overlay: "gradient",
          image: "https://images.unsplash.com/photo-1623119402941-c872e08eae25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
        }
      },
      {
        type: "gallery",
        id: "gallery-1",
        content: {
          heading: "My Portfolio",
          subheading: "A curated collection of my creative work and projects",
          layout: "masonry",
          lightbox: true,
          items: [
            { 
              image: "https://images.unsplash.com/photo-160332981911-999bb7ea010d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80", 
              caption: "Brand Identity Project", 
              category: "Branding",
              width: "large"
            },
            { 
              image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80", 
              caption: "Website Design", 
              category: "Digital",
              width: "medium"
            },
            { 
              image: "https://images.unsplash.com/photo-1524069615294-a50647dba270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80", 
              caption: "Art Direction", 
              category: "Creative",
              width: "medium"
            },
            { 
              image: "https://images.unsplash.com/photo-1600431521340-491eca880813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80", 
              caption: "Product Design", 
              category: "Design",
              width: "small"
            }
          ]
        }
      },
      {
        type: "about",
        id: "about-1",
        content: {
          heading: "About Me",
          image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
          bio: "I'm a multidisciplinary creative entrepreneur with over 7 years of experience building brands, designing digital experiences, and helping businesses tell their stories visually.",
          skills: ["Brand Strategy", "Visual Design", "Digital Experiences", "Creative Direction", "Art Curation"],
          layout: "split",
          backgroundColor: "#FDF2F8"
        }
      },
      {
        type: "payment",
        id: "payment-2",
        content: {
          heading: "Work With Me",
          subheading: "Packages designed to bring your vision to life",
          layout: "horizontal",
          showPriceComparison: true,
          paymentProviders: ["stripe", "paypal"],
          items: [
            {
              name: "Brand Discovery",
              price: 599,
              currency: "USD",
              billingPeriod: "one-time",
              features: ["Brand positioning", "Visual identity concepts", "Design consultation", "Style guide"],
              ctaText: "Select Package",
              recommended: false
            },
            {
              name: "Complete Brand Experience",
              price: 1499,
              currency: "USD",
              billingPeriod: "one-time",
              features: ["Full brand strategy", "Logo & identity system", "Brand guidelines", "Marketing collateral"],
              ctaText: "Select Package",
              recommended: true
            },
            {
              name: "Custom Project",
              price: null,
              currency: "USD",
              billingPeriod: "custom",
              features: ["Tailored to your specific needs", "Custom scope & timeline", "Priority service"],
              ctaText: "Request Quote",
              recommended: false
            }
          ]
        }
      }
    ]
  },
  {
    id: 3,
    name: "Boutique Shop",
    description: "Elegant e-commerce template for women-owned boutiques with advanced product showcasing",
    category: "E-commerce",
    thumbnail: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
    updatedAt: "2024-01-12T09:45:00Z",
    colors: {
      primary: "#DB2777",
      secondary: "#8B5CF6",
      accent: "#F59E0B"
    },
    fonts: {
      heading: "Cormorant Garamond",
      body: "Muli"
    },
    sections: [
      {
        type: "hero",
        id: "hero-3",
        content: {
          heading: "Curated With Care",
          subheading: "Sustainable, ethical products for the modern woman",
          ctaText: "Shop Collection",
          ctaUrl: "#products",
          image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          layout: "fullwidth",
          overlay: "light"
        }
      },
      {
        type: "products",
        id: "products-1",
        content: {
          heading: "Our Collection",
          subheading: "Handpicked products that celebrate craftsmanship",
          layout: "grid",
          columns: 3,
          showPrice: true,
          showAddToCart: true,
          items: [
            { 
              name: "Handcrafted Jewelry Set", 
              price: 129, 
              currency: "USD",
              discountPrice: 99,
              image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
              category: "Accessories",
              badge: "Sale"
            },
            { 
              name: "Organic Skincare Bundle", 
              price: 179, 
              currency: "USD",
              image: "https://images.unsplash.com/photo-1570194065650-d99fb4de8b51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
              category: "Beauty",
              badge: "New"
            },
            { 
              name: "Artisan Home Decor", 
              price: 159, 
              currency: "USD",
              image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
              category: "Home"
            }
          ]
        }
      },
      {
        type: "story",
        id: "story-1",
        content: {
          heading: "Our Story",
          subheading: "Founded with purpose and passion",
          image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
          text: "Founded by women who believe in ethical commerce and sustainable practices, our boutique celebrates artisanal craftsmanship and timeless design. Every product is thoughtfully sourced to support female artisans and entrepreneurs around the world.",
          layout: "image-right",
          backgroundColor: "#FDF2F8"
        }
      },
      {
        type: "checkout",
        id: "checkout-1",
        content: {
          heading: "Secure Checkout",
          subheading: "Multiple payment options for your convenience",
          layout: "standard",
          paymentOptions: [
            {
              name: "Credit Card",
              providers: ["visa", "mastercard", "amex", "discover"],
              processingTime: "Instant"
            },
            {
              name: "Digital Wallet",
              providers: ["paypal", "applepay", "googlepay"],
              processingTime: "Instant"
            },
            {
              name: "Buy Now, Pay Later",
              providers: ["affirm", "klarna", "afterpay"],
              processingTime: "Instant approval"
            }
          ],
          securityFeatures: ["SSL Encryption", "PCI Compliance", "Fraud Protection"],
          showShippingOptions: true,
          internationalShipping: true
        }
      },
      {
        type: "cta",
        id: "cta-1",
        content: {
          heading: "Join Our Community",
          subheading: "Subscribe for exclusive offers and updates",
          ctaText: "Subscribe",
          backgroundColor: "#FDF2F8",
          alignment: "center",
          showEmailForm: true
        }
      }
    ]
  },
  {
    id: 4,
    name: "Wellness Coach",
    description: "Serene design for female coaches, therapists, and wellness professionals with integrated booking",
    category: "Health",
    thumbnail: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
    updatedAt: "2024-02-20T16:15:00Z",
    colors: {
      primary: "#8B5CF6",
      secondary: "#EC4899",
      accent: "#10B981"
    },
    fonts: {
      heading: "Lora",
      body: "Open Sans"
    },
    sections: [
      {
        type: "hero",
        id: "hero-4",
        content: {
          heading: "Empowered Wellness",
          subheading: "Holistic coaching to help women thrive in every aspect of life",
          ctaText: "Book a Session",
          ctaUrl: "#booking",
          image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          layout: "centered",
          backgroundColor: "#F5F3FF",
          textColor: "#4C1D95"
        }
      },
      {
        type: "services",
        id: "services-1",
        content: {
          heading: "My Services",
          subheading: "Tailored approaches to wellness and personal development",
          layout: "cards",
          items: [
            { 
              title: "Life Coaching for Women", 
              description: "Navigate transitions and discover your authentic path", 
              image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
              price: 150,
              currency: "USD",
              duration: "60 min",
              ctaText: "Book Now"
            },
            { 
              title: "Women's Wellness Programs", 
              description: "Holistic approaches to health, balance, and well-being", 
              image: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
              price: 375,
              currency: "USD",
              duration: "4 weeks",
              ctaText: "Learn More"
            },
            { 
              title: "Female Entrepreneur Mentoring", 
              description: "Build a business aligned with your values and vision", 
              image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
              price: 200,
              currency: "USD",
              duration: "75 min",
              ctaText: "Apply Now"
            }
          ]
        }
      },
      {
        type: "testimonials",
        id: "testimonials-2",
        content: {
          heading: "Client Stories",
          subheading: "Transformations and breakthroughs from women I've worked with",
          layout: "slider",
          backgroundColor: "#F5F3FF",
          items: [
            {
              quote: "Working with this coach transformed not only my business but my entire approach to life. I've found balance while growing my business.",
              author: "Elena Martinez",
              role: "Founder, Mindful Marketing",
              avatar: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            },
            {
              quote: "The wellness program helped me reconnect with myself after years of putting everyone else first. I now have tools to maintain my well-being.",
              author: "Priya Sharma",
              role: "Healthcare Professional",
              avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            }
          ]
        }
      },
      {
        type: "booking",
        id: "booking-1",
        content: {
          heading: "Schedule Your Session",
          subheading: "Take the first step toward transformation",
          layout: "calendar",
          availabilityDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          availabilityHours: "9:00 - 17:00",
          serviceDuration: 60,
          backgroundColor: "#F5F3FF"
        }
      },
      {
        type: "payment",
        id: "payment-3",
        content: {
          heading: "Investment Options",
          subheading: "Choose the right package for your journey",
          layout: "vertical",
          showPriceComparison: true,
          paymentProviders: ["stripe", "paypal"],
          items: [
            {
              name: "Single Session",
              price: 150,
              currency: "USD",
              billingPeriod: "one-time",
              features: ["60-minute coaching call", "Session recording", "Follow-up email support"],
              ctaText: "Book Now",
              recommended: false
            },
            {
              name: "Transformation Package",
              price: 550,
              currency: "USD",
              billingPeriod: "one-time",
              features: ["4 coaching sessions", "Email support between sessions", "Custom resources", "Progress tracking"],
              ctaText: "Select Package",
              recommended: true
            },
            {
              name: "VIP Intensive",
              price: 997,
              currency: "USD",
              billingPeriod: "one-time",
              features: ["Half-day intensive coaching", "90-day follow-up access", "Custom wellness plan", "Priority support"],
              ctaText: "Apply Now",
              recommended: false
            }
          ]
        }
      }
    ]
  },
  {
    id: 5,
    name: "Feminine Blog",
    description: "Sophisticated blog template with chic typography and monetization options for women content creators",
    category: "Blog",
    thumbnail: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true,
    updatedAt: "2024-01-28T11:35:00Z",
    colors: {
      primary: "#F472B6",
      secondary: "#8B5CF6",
      accent: "#0EA5E9"
    },
    fonts: {
      heading: "Playfair Display",
      body: "Lato"
    },
    sections: [
      {
        type: "hero",
        id: "hero-5",
        content: {
          heading: "Authentic Perspectives",
          subheading: "Stories, insights, and inspiration from a woman's journey",
          ctaText: "Start Reading",
          ctaUrl: "#blog",
          image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          layout: "minimal",
          overlay: "light"
        }
      },
      {
        type: "blog",
        id: "blog-1",
        content: {
          heading: "Latest Articles",
          layout: "grid",
          showExcerpt: true,
          showDate: true,
          showReadMore: true,
          items: [
            { 
              title: "Leading with Authenticity", 
              excerpt: "Exploring how women leaders can leverage their authentic selves to create meaningful impact in business and beyond.", 
              image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
              date: "2024-01-15",
              readTime: "6 min",
              category: "Leadership",
              featured: true
            },
            { 
              title: "Work-Life Integration", 
              excerpt: "Moving beyond balance to create a life where career and personal fulfillment complement rather than compete with each other.", 
              image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
              date: "2024-01-08",
              readTime: "5 min",
              category: "Lifestyle"
            },
            { 
              title: "Financial Freedom", 
              excerpt: "Practical strategies for women entrepreneurs to build wealth and create financial independence through their businesses.", 
              image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
              date: "2024-01-22",
              readTime: "7 min",
              category: "Finance" 
            }
          ]
        }
      },
      {
        type: "categories",
        id: "categories-1",
        content: {
          heading: "Explore Topics",
          subheading: "Discover content curated for ambitious women",
          layout: "grid",
          columns: 4,
          items: [
            {
              name: "Entrepreneurship",
              image: "https://images.unsplash.com/photo-1571727142199-7e23bd590a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
              count: 24,
              url: "#entrepreneurship"
            },
            {
              name: "Self-Development",
              image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1062&q=80",
              count: 18,
              url: "#self-development"
            },
            {
              name: "Wellness",
              image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              count: 15,
              url: "#wellness"
            },
            {
              name: "Leadership",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
              count: 12,
              url: "#leadership"
            }
          ]
        }
      },
      {
        type: "newsletter",
        id: "newsletter-1",
        content: {
          heading: "Join My Community",
          subheading: "Get exclusive content and updates delivered to your inbox",
          buttonText: "Subscribe",
          layout: "card",
          backgroundColor: "#FDF2F8",
          showNameField: true
        }
      },
      {
        type: "monetization",
        id: "monetization-1",
        content: {
          heading: "Premium Content",
          subheading: "Exclusive resources for your personal and professional growth",
          layout: "cards",
          items: [
            {
              title: "Business Strategy Workbook",
              description: "Interactive templates and exercises to clarify your business vision and strategy",
              price: 29,
              currency: "USD",
              image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1067&q=80",
              ctaText: "Purchase",
              digital: true,
              instant: true
            },
            {
              title: "Monthly Masterclass",
              description: "Live online sessions with industry experts on topics relevant to women entrepreneurs",
              price: 19,
              currency: "USD",
              recurringPrice: true,
              billingPeriod: "monthly",
              image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
              ctaText: "Subscribe",
              digital: true
            }
          ],
          paymentProviders: ["stripe", "paypal"]
        }
      }
    ]
  },
  {
    id: 6,
    name: "Culinary Entrepreneur",
    description: "Appetizing template for women-owned restaurants, bakeries, and food businesses with online ordering",
    category: "Food",
    thumbnail: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    featured: true,
    updatedAt: "2024-02-08T14:50:00Z",
    colors: {
      primary: "#F97316",
      secondary: "#10B981",
      accent: "#EC4899"
    },
    fonts: {
      heading: "Playfair Display",
      body: "Quicksand"
    },
    sections: [
      {
        type: "hero",
        id: "hero-6",
        content: {
          heading: "Culinary Passion",
          subheading: "Authentic flavors crafted with love and creativity",
          ctaText: "View Menu",
          ctaUrl: "#menu",
          image: "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          layout: "fullscreen",
          overlay: "gradient"
        }
      },
      {
        type: "story",
        id: "story-2",
        content: {
          heading: "Our Journey",
          subheading: "From family recipes to celebrated cuisine",
          image: "https://images.unsplash.com/photo-1589309736404-6269d41c7410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
          text: "Founded by a passionate female chef with a vision to bring authentic, thoughtfully-prepared cuisine to our community. Every dish reflects our commitment to quality ingredients, cultural heritage, and sustainable practices. What began as a small catering business has blossomed into a beloved culinary destination.",
          layout: "image-left",
          backgroundColor: "#FFF7ED"
        }
      },
      {
        type: "menu",
        id: "menu-1",
        content: {
          heading: "Our Specialties",
          subheading: "Seasonal dishes crafted with locally-sourced ingredients",
          layout: "tabs",
          categories: ["Signature Dishes", "Seasonal Menu", "Desserts", "Beverages"],
          activeCategory: "Signature Dishes",
          items: [
            { 
              name: "Artisanal Harvest Plate", 
              description: "Local vegetables with house-made dips and artisan bread", 
              price: 16, 
              currency: "USD",
              image: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
              category: "Signature Dishes",
              dietary: ["Vegetarian", "Vegan Option"],
              featured: true
            },
            { 
              name: "Heritage Grain Bowl", 
              description: "Ancient grains with seasonal vegetables and signature sauce", 
              price: 19, 
              currency: "USD",
              image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
              category: "Signature Dishes",
              dietary: ["Vegetarian", "Gluten-Free"]
            },
            { 
              name: "Seasonal Fruit Tart", 
              description: "Housemade pastry with local fruits and edible flowers", 
              price: 12, 
              currency: "USD",
              image: "https://images.unsplash.com/photo-1488477304112-4944851de03d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
              category: "Desserts",
              dietary: ["Vegetarian"]
            }
          ]
        }
      },
      {
        type: "ordering",
        id: "ordering-1",
        content: {
          heading: "Order Online",
          subheading: "Enjoy our cuisine in the comfort of your home",
          layout: "standard",
          showDeliveryOptions: true,
          showPickupOption: true,
          estimatedDeliveryTime: "30-45 minutes",
          deliveryRadius: "5 miles",
          minimumOrder: 20,
          currency: "USD",
          paymentMethods: ["credit-card", "paypal", "apple-pay", "google-pay"],
          orderTracking: true
        }
      },
      {
        type: "gallery",
        id: "gallery-2",
        content: {
          heading: "Our Space",
          subheading: "A warm and inviting atmosphere crafted with attention to detail",
          layout: "grid",
          columns: 3,
          items: [
            { 
              image: "https://images.unsplash.com/photo-1520251160305-fa2993a73c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80", 
              caption: "Main Dining" 
            },
            { 
              image: "https://images.unsplash.com/photo-1530490125459-847a6d437825?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80", 
              caption: "Open Kitchen" 
            },
            { 
              image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80", 
              caption: "Garden Patio" 
            }
          ]
        }
      },
      {
        type: "booking",
        id: "reservations-1",
        content: {
          heading: "Reservations",
          subheading: "Book your table for a memorable dining experience",
          layout: "calendar",
          availabilityDays: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          availabilityHours: "17:00 - 22:00",
          partySize: true,
          specialRequests: true,
          confirmationEmail: true,
          backgroundColor: "#FFF7ED"
        }
      }
    ]
  },
  {
    id: 7,
    name: "Consultant & Advisor",
    description: "Professional template for female consultants and business advisors with client management features",
    category: "Business",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    featured: false,
    updatedAt: "2024-02-15T13:20:00Z",
    colors: {
      primary: "#6366F1",
      secondary: "#F59E0B",
      accent: "#EC4899"
    },
    fonts: {
      heading: "Montserrat",
      body: "Source Sans Pro"
    },
    sections: [
      {
        type: "hero",
        id: "hero-7",
        content: {
          heading: "Strategic Partnership",
          subheading: "Expert guidance to elevate your business to the next level",
          ctaText: "Schedule a Consultation",
          ctaUrl: "#booking",
          image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          layout: "split",
          backgroundColor: "#F7FAFC",
          alignment: "right"
        }
      },
      {
        type: "expertise",
        id: "expertise-1",
        content: {
          heading: "Areas of Expertise",
          subheading: "Specialized knowledge to transform your business challenges into opportunities",
          layout: "grid",
          columns: 3,
          items: [
            {
              title: "Strategic Planning",
              description: "Long-term vision development and actionable roadmaps for sustainable growth",
              icon: "chart-line",
              color: "#6366F1"
            },
            {
              title: "Business Transformation",
              description: "Navigate change and innovation to keep your business competitive and resilient",
              icon: "arrow-trend-up",
              color: "#F59E0B"
            },
            {
              title: "Leadership Development",
              description: "Cultivate strong leadership capabilities within your organization for lasting success",
              icon: "users",
              color: "#EC4899"
            }
          ]
        }
      },
      {
        type: "process",
        id: "process-1",
        content: {
          heading: "My Approach",
          subheading: "A proven methodology tailored to your unique needs",
          layout: "timeline",
          backgroundColor: "#F7FAFC",
          items: [
            {
              title: "Discovery",
              description: "In-depth assessment of your current situation, challenges, and opportunities",
              icon: "magnifying-glass",
              color: "#6366F1"
            },
            {
              title: "Strategy Development",
              description: "Collaborative creation of customized solutions and implementation roadmaps",
              icon: "lightbulb",
              color: "#F59E0B"
            },
            {
              title: "Implementation",
              description: "Hands-on guidance and support throughout the execution process",
              icon: "rocket",
              color: "#EC4899"
            },
            {
              title: "Evaluation & Refinement",
              description: "Measuring outcomes and adjusting strategies for optimal results",
              icon: "chart-bar",
              color: "#6366F1"
            }
          ]
        }
      },
      {
        type: "testimonials",
        id: "testimonials-3",
        content: {
          heading: "Client Success Stories",
          subheading: "Real results from businesses I've partnered with",
          layout: "cards",
          items: [
            {
              quote: "Her strategic guidance helped us navigate a complex transition and emerge stronger than ever. Our revenue has increased by 45% within six months.",
              author: "Sophia Rodriguez",
              role: "CEO, Innovative Solutions",
              avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
              logo: "https://placehold.co/200x80/F7FAFC/6366F1?text=Innovative+Solutions"
            },
            {
              quote: "Working with her transformed not just our business processes but our entire company culture. We're now much more aligned and effective.",
              author: "Rachel Kim",
              role: "Founder, Elevate Digital",
              avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
              logo: "https://placehold.co/200x80/F7FAFC/F59E0B?text=Elevate+Digital"
            }
          ]
        }
      },
      {
        type: "services",
        id: "services-2",
        content: {
          heading: "Consulting Services",
          subheading: "Tailored solutions to meet your specific business needs",
          layout: "detailed",
          items: [
            {
              title: "Business Strategy",
              description: "Comprehensive strategy development to guide your business toward sustainable growth and competitive advantage",
              deliverables: [
                "Market analysis and positioning",
                "Growth strategy planning",
                "Competitive analysis",
                "Business model optimization"
              ],
              duration: "4-6 weeks",
              price: null,
              ctaText: "Learn More"
            },
            {
              title: "Leadership Coaching",
              description: "Personalized coaching to develop leadership capabilities and build high-performing teams",
              deliverables: [
                "Leadership style assessment",
                "Customized development plan",
                "One-on-one coaching sessions",
                "Team dynamics optimization"
              ],
              duration: "3-6 months",
              price: null,
              ctaText: "Learn More"
            }
          ]
        }
      },
      {
        type: "payment",
        id: "payment-4",
        content: {
          heading: "Investment Options",
          subheading: "Flexible engagement models to suit your needs",
          layout: "comparison",
          showPriceComparison: true,
          paymentProviders: ["stripe", "paypal", "bank-transfer"],
          items: [
            {
              name: "Strategy Session",
              price: 599,
              currency: "USD",
              billingPeriod: "one-time",
              features: [
                "90-minute intensive session",
                "Situation assessment",
                "Strategic recommendations",
                "Action plan document",
                "14-day email support"
              ],
              ctaText: "Book Now",
              recommended: false
            },
            {
              name: "Transformation Program",
              price: 2999,
              currency: "USD",
              billingPeriod: "one-time",
              features: [
                "Complete business assessment",
                "Strategic planning workshop",
                "Implementation roadmap",
                "Bi-weekly coaching calls (3 months)",
                "Email and phone support",
                "Progress tracking tools"
              ],
              ctaText: "Apply Now",
              recommended: true
            },
            {
              name: "Retainer Partnership",
              price: 1499,
              currency: "USD",
              billingPeriod: "monthly",
              features: [
                "Ongoing strategic support",
                "Monthly strategy sessions",
                "Implementation guidance",
                "Priority access",
                "Resource library",
                "Team training sessions"
              ],
              ctaText: "Contact Me",
              recommended: false
            }
          ]
        }
      },
      {
        type: "booking",
        id: "booking-2",
        content: {
          heading: "Schedule a Consultation",
          subheading: "Take the first step toward transforming your business",
          layout: "modern",
          availabilityDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          availabilityHours: "9:00 - 16:00",
          serviceDuration: 45,
          calendar: true,
          preConsultationForm: true,
          backgroundColor: "#F7FAFC"
        }
      }
    ]
  },
  {
    id: 8,
    name: "Tech Innovator",
    description: "Dynamic template for female tech entrepreneurs and innovators with product showcasing",
    category: "Technology",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    featured: false,
    updatedAt: "2024-01-25T17:30:00Z",
    colors: {
      primary: "#2563EB",
      secondary: "#9333EA",
      accent: "#F97316"
    },
    fonts: {
      heading: "Poppins",
      body: "Inter"
    },
    sections: [
      {
        type: "hero",
        id: "hero-8",
        content: {
          heading: "Innovation Redefined",
          subheading: "Cutting-edge solutions designed by women in tech",
          ctaText: "Discover Our Products",
          ctaUrl: "#products",
          image: "https://images.unsplash.com/photo-1573167710701-506147e4cd6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
          layout: "modern",
          backgroundColor: "#EFF6FF",
          alignment: "center"
        }
      },
      {
        type: "features",
        id: "features-2",
        content: {
          heading: "Key Features",
          subheading: "Innovative technology designed with users in mind",
          layout: "grid",
          columns: 3,
          items: [
            { 
              title: "Intuitive Interface", 
              description: "User-centered design that makes technology accessible to everyone", 
              icon: "user-group",
              color: "#2563EB"
            },
            { 
              title: "Advanced AI Integration", 
              description: "Smart solutions that adapt to your unique needs", 
              icon: "cpu-chip",
              color: "#9333EA"
            },
            { 
              title: "Seamless Connectivity", 
              description: "Effortless integration with your existing technology ecosystem", 
              icon: "globe-alt",
              color: "#F97316"
            }
          ]
        }
      },
      {
        type: "products",
        id: "products-2",
        content: {
          heading: "Our Solutions",
          subheading: "Innovative products developed by our female-led tech team",
          layout: "showcase",
          items: [
            { 
              name: "Analytics Platform", 
              description: "Comprehensive data analytics solution with AI-powered insights", 
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              ctaText: "Learn More",
              featured: true,
              badge: "Most Popular"
            },
            { 
              name: "Collaboration Suite", 
              description: "Seamless tools for remote teams to work effectively together", 
              image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              ctaText: "Learn More",
              badge: "New Release"
            },
            { 
              name: "Security Solution", 
              description: "Enterprise-grade security with user-friendly implementation", 
              image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              ctaText: "Learn More"
            }
          ]
        }
      },
      {
        type: "team",
        id: "team-1",
        content: {
          heading: "The Women Behind Our Innovation",
          subheading: "Meet our diverse team of tech leaders and visionaries",
          layout: "grid",
          columns: 3,
          backgroundColor: "#EFF6FF",
          items: [
            {
              name: "Dr. Aisha Johnson",
              role: "Founder & CTO",
              bio: "AI researcher with 15+ years experience in machine learning and product development",
              image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
              social: {
                linkedin: "#",
                twitter: "#"
              }
            },
            {
              name: "Maya Rodriguez",
              role: "Head of Product",
              bio: "Former Silicon Valley product leader with expertise in user-centered design",
              image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
              social: {
                linkedin: "#",
                twitter: "#"
              }
            },
            {
              name: "Zara Patel",
              role: "Engineering Director",
              bio: "Engineering leader specializing in scalable architecture and security solutions",
              image: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
              social: {
                linkedin: "#",
                github: "#"
              }
            }
          ]
        }
      },
      {
        type: "subscription",
        id: "subscription-1",
        content: {
          heading: "Pricing Plans",
          subheading: "Flexible options to suit businesses of all sizes",
          layout: "tiered",
          comparison: true,
          currency: "USD",
          annualBilling: true,
          annualDiscount: 20,
          items: [
            {
              name: "Starter",
              price: 29,
              billingPeriod: "monthly",
              description: "Perfect for small teams and startups",
              features: [
                "Up to 5 users",
                "Core features",
                "5GB storage",
                "Basic analytics",
                "Email support"
              ],
              ctaText: "Get Started",
              popular: false
            },
            {
              name: "Professional",
              price: 79,
              billingPeriod: "monthly",
              description: "Ideal for growing businesses",
              features: [
                "Up to 20 users",
                "Advanced features",
                "25GB storage",
                "Full analytics suite",
                "Priority support",
                "API access"
              ],
              ctaText: "Get Started",
              popular: true
            },
            {
              name: "Enterprise",
              price: 199,
              billingPeriod: "monthly",
              description: "For large organizations with complex needs",
              features: [
                "Unlimited users",
                "All features included",
                "100GB storage",
                "Advanced security",
                "Dedicated support",
                "Custom integrations",
                "Onboarding assistance"
              ],
              ctaText: "Contact Us",
              popular: false
            }
          ]
        }
      },
      {
        type: "payment",
        id: "payment-5",
        content: {
          heading: "Payment Options",
          subheading: "Secure, flexible payment processing for your subscription",
          layout: "modern",
          paymentProviders: ["stripe", "paypal", "apple-pay", "google-pay", "ach", "wire-transfer"],
          securityFeatures: ["Encryption", "PCI Compliance", "Fraud Detection", "Data Protection"],
          paymentMethods: [
            {
              type: "credit-card",
              logos: ["visa", "mastercard", "amex", "discover"],
              processing: "Instant"
            },
            {
              type: "digital-wallet",
              logos: ["apple-pay", "google-pay", "paypal"],
              processing: "Instant"
            },
            {
              type: "bank-transfer",
              logos: ["ach", "wire"],
              processing: "1-3 business days"
            }
          ],
          currencies: ["USD", "EUR", "GBP", "CAD", "AUD"],
          billingOptions: [
            {
              period: "Monthly",
              discount: 0
            },
            {
              period: "Annual",
              discount: 20
            },
            {
              period: "Biennial",
              discount: 25
            }
          ],
          enterpriseOptions: {
            available: true,
            contactInfo: "enterprise@techinnovator.com",
            customPricing: true
          }
        }
      },
      {
        type: "testimonials",
        id: "testimonials-4",
        content: {
          heading: "What Our Clients Say",
          subheading: "Success stories from organizations using our technology",
          layout: "carousel",
          items: [
            {
              quote: "Implementing this solution increased our team productivity by 35% and significantly improved our data-driven decision making.",
              author: "Jennifer Adams",
              role: "CIO, Global Innovations",
              logo: "https://placehold.co/200x80/EFF6FF/2563EB?text=Global+Innovations"
            },
            {
              quote: "The intuitive interface and powerful features have revolutionized how our team collaborates and analyzes information.",
              author: "Michelle Cheng",
              role: "Director of Operations, TechForward",
              logo: "https://placehold.co/200x80/EFF6FF/9333EA?text=TechForward"
            }
          ]
        }
      }
    ]
  },
  {
    id: 9,
    name: "Event Planner",
    description: "Elegant template for female event planners, wedding coordinators, and hospitality professionals",
    category: "Events",
    thumbnail: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false,
    updatedAt: "2024-02-10T11:25:00Z",
    colors: {
      primary: "#BE185D",
      secondary: "#8B5CF6",
      accent: "#F59E0B"
    },
    fonts: {
      heading: "Cormorant Garamond",
      body: "Montserrat"
    },
    sections: [
      {
        type: "hero",
        id: "hero-9",
        content: {
          heading: "Unforgettable Experiences",
          subheading: "Creating moments that last a lifetime",
          ctaText: "Plan Your Event",
          ctaUrl: "#services",
          image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80",
          layout: "fullwidth",
          overlay: "gradient",
          alignment: "center"
        }
      },
      {
        type: "services",
        id: "services-3",
        content: {
          heading: "Our Services",
          subheading: "Tailored event planning for every occasion",
          layout: "gallery",
          items: [
            { 
              title: "Weddings", 
              description: "From intimate ceremonies to grand celebrations, we create the wedding of your dreams", 
              image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              ctaText: "Learn More",
              featured: true
            },
            { 
              title: "Corporate Events", 
              description: "Professional planning for conferences, team building, and company milestones", 
              image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
              ctaText: "Learn More"
            },
            { 
              title: "Social Gatherings", 
              description: "Birthday parties, anniversaries, and celebrations that reflect your personality", 
              image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              ctaText: "Learn More"
            }
          ]
        }
      },
      {
        type: "process",
        id: "process-2",
        content: {
          heading: "Our Process",
          subheading: "A seamless journey from concept to celebration",
          layout: "steps",
          backgroundColor: "#FDF2F8",
          items: [
            {
              title: "Consultation",
              description: "We begin by understanding your vision, preferences, and requirements",
              icon: "chat-bubble-left-right",
              number: 1
            },
            {
              title: "Concept Design",
              description: "Creating a detailed event concept tailored to your style and budget",
              icon: "pencil-square",
              number: 2
            },
            {
              title: "Coordination",
              description: "Managing vendors, timelines, and logistics for a flawless execution",
              icon: "clipboard-document-check",
              number: 3
            },
            {
              title: "Celebration",
              description: "Enjoying your special day while we handle every detail behind the scenes",
              icon: "star",
              number: 4
            }
          ]
        }
      },
      {
        type: "gallery",
        id: "gallery-3",
        content: {
          heading: "Our Portfolio",
          subheading: "Beautiful moments from events we've created",
          layout: "masonry",
          lightbox: true,
          items: [
            { 
              image: "https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80", 
              caption: "Garden Wedding", 
              category: "Wedding",
              width: "large"
            },
            { 
              image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80", 
              caption: "Corporate Gala", 
              category: "Corporate",
              width: "medium"
            },
            { 
              image: "https://images.unsplash.com/photo-1470753323753-3f8091bb0232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", 
              caption: "Birthday Celebration", 
              category: "Social",
              width: "medium"
            },
            { 
              image: "https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80", 
              caption: "Elegant Reception", 
              category: "Wedding",
              width: "small"
            }
          ]
        }
      },
      {
        type: "testimonials",
        id: "testimonials-5",
        content: {
          heading: "Client Love",
          subheading: "What our clients say about their experience with us",
          layout: "quotes",
          backgroundColor: "#FDF2F8",
          items: [
            {
              quote: "She transformed our vision into a reality beyond our wildest dreams. Every detail was perfect, and our guests are still talking about it months later.",
              author: "Rebecca & James",
              event: "Wedding, May 2023",
              image: "https://images.unsplash.com/photo-1543922596-b3bbaba80649?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            },
            {
              quote: "Our company retreat was flawlessly executed thanks to her attention to detail and creative vision. She turned a standard corporate event into something truly memorable.",
              author: "Tania Moore",
              event: "Corporate Retreat, September 2023",
              image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            }
          ]
        }
      },
      {
        type: "packages",
        id: "packages-1",
        content: {
          heading: "Investment",
          subheading: "Tailored packages to suit your event needs",
          layout: "cards",
          items: [
            {
              name: "Essentials",
              description: "Perfect for clients who need help with the fundamentals",
              price: 2500,
              currency: "USD",
              starting: true,
              features: [
                "Initial consultation",
                "Vendor recommendations",
                "Timeline creation",
                "Day-of coordination (8 hours)"
              ],
              ctaText: "Learn More",
              popular: false
            },
            {
              name: "Signature",
              description: "Our most popular package for comprehensive planning",
              price: 5500,
              currency: "USD",
              starting: true,
              features: [
                "Everything in Essentials",
                "Full planning & design",
                "Vendor management",
                "Budget tracking",
                "Unlimited consultations",
                "Day-of coordination (12 hours)"
              ],
              ctaText: "Learn More",
              popular: true
            },
            {
              name: "Luxury",
              description: "The ultimate event planning experience",
              price: 9500,
              currency: "USD",
              starting: true,
              features: [
                "Everything in Signature",
                "Premium vendor access",
                "Custom design elements",
                "Guest experience planning",
                "Multiple coordinators",
                "Extended timeline support"
              ],
              ctaText: "Learn More",
              popular: false
            }
          ]
        }
      },
      {
        type: "payment",
        id: "payment-6",
        content: {
          heading: "Secure Your Date",
          subheading: "Flexible payment options to fit your budget",
          layout: "simple",
          backgroundColor: "#FDF2F8",
          depositRequired: true,
          depositAmount: 25,
          installmentPlans: [
            {
              name: "Standard",
              description: "50% deposit, remainder due 30 days before event",
              installments: 2
            },
            {
              name: "Quarterly",
              description: "25% deposit, 3 equal payments over planning period",
              installments: 4
            },
            {
              name: "Monthly",
              description: "Deposit plus equal monthly payments",
              installments: "Variable"
            }
          ],
          paymentMethods: ["credit-card", "bank-transfer", "paypal"],
          cancellationPolicy: {
            full: "90+ days before event",
            partial: "60-89 days before event",
            deposit: "Less than 60 days before event"
          }
        }
      },
      {
        type: "booking",
        id: "consultation-1",
        content: {
          heading: "Book a Consultation",
          subheading: "Let's discuss how to make your event extraordinary",
          layout: "split",
          consultationDuration: 60,
          virtual: true,
          inPerson: true,
          locationOptions: ["Our Studio", "Your Location", "Video Call"],
          availabilityDays: ["Tuesday", "Wednesday", "Thursday", "Friday"],
          availabilityHours: "10:00 - 18:00",
          ctaText: "Schedule Now"
        }
      }
    ]
  },
  {
    id: 11,
    name: "Digital Academy",
    description: "Professional template for female educators, course creators, and online learning entrepreneurs",
    category: "Education",
    thumbnail: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false,
    updatedAt: "2024-02-08T16:35:00Z",
    colors: {
      primary: "#7C3AED",
      secondary: "#EC4899",
      accent: "#F59E0B"
    },
    fonts: {
      heading: "Poppins",
      body: "Roboto"
    },
    sections: [
      {
        type: "hero",
        id: "hero-11",
        content: {
          heading: "Transform Your Knowledge Into Impact",
          subheading: "Expert-led courses and resources for women ready to grow",
          ctaText: "Explore Our Courses",
          ctaUrl: "#courses",
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
          layout: "gradient",
          overlay: "light",
          alignment: "center"
        }
      },
      {
        type: "about",
        id: "about-3",
        content: {
          heading: "Meet Your Instructor",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
          bio: "With over a decade of experience in education and professional development, I'm passionate about empowering women with the skills and knowledge they need to thrive. My teaching approach combines academic expertise with real-world application, creating transformative learning experiences.",
          credentials: [
            "Ph.D. in Educational Leadership",
            "Certified Professional Coach",
            "Author of 'The Female Learning Advantage'",
            "Featured in Forbes, Fast Company, and Inc."
          ],
          layout: "profile",
          backgroundColor: "#F5F3FF"
        }
      },
      {
        type: "courses",
        id: "courses-1",
        content: {
          heading: "Featured Courses",
          subheading: "Comprehensive learning experiences designed for impact",
          layout: "grid",
          filters: ["All", "Beginner", "Intermediate", "Advanced"],
          items: [
            { 
              title: "Leadership Mastery for Women", 
              description: "Develop the leadership skills needed to thrive in today's complex business environment", 
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              level: "Intermediate",
              duration: "8 weeks",
              lessons: 24,
              price: 499,
              currency: "USD",
              enrollmentStatus: "Open",
              startDate: "Flexible",
              featured: true,
              badge: "Most Popular"
            },
            { 
              title: "Digital Marketing Fundamentals", 
              description: "Master the essential digital marketing strategies to grow your business online", 
              image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
              level: "Beginner",
              duration: "6 weeks",
              lessons: 18,
              price: 349,
              currency: "USD",
              enrollmentStatus: "Open",
              startDate: "Flexible"
            },
            { 
              title: "Financial Independence for Women", 
              description: "Take control of your financial future with proven wealth-building strategies", 
              image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              level: "All Levels",
              duration: "10 weeks",
              lessons: 30,
              price: 599,
              currency: "USD",
              enrollmentStatus: "Coming Soon",
              startDate: "July 15, 2024",
              badge: "New Course"
            }
          ]
        }
      },
      {
        type: "features",
        id: "features-3",
        content: {
          heading: "The Learning Experience",
          subheading: "What makes our courses uniquely effective",
          layout: "alternating",
          items: [
            {
              title: "Interactive Curriculum",
              description: "Engage with multimedia content, practical exercises, and real-world applications",
              icon: "academic-cap",
              image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
            {
              title: "Supportive Community",
              description: "Connect with like-minded women for networking, accountability, and collaboration",
              icon: "users",
              image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            },
            {
              title: "Expert Feedback",
              description: "Receive personalized guidance and feedback throughout your learning journey",
              icon: "chat-bubble-left-right",
              image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            }
          ]
        }
      },
      {
        type: "testimonials",
        id: "testimonials-7",
        content: {
          heading: "Student Success Stories",
          subheading: "Hear from women who have transformed their careers through our courses",
          layout: "profiles",
          backgroundColor: "#F5F3FF",
          items: [
            {
              quote: "This course gave me the confidence and skills to negotiate a promotion and 30% salary increase. The ROI was immediate and life-changing.",
              author: "Dana Williams",
              role: "Marketing Director",
              company: "Global Innovations",
              image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
              course: "Leadership Mastery for Women"
            },
            {
              quote: "The practical strategies I learned helped me launch my business and secure my first clients within weeks of completing the course.",
              author: "Elena Mendez",
              role: "Founder",
              company: "Bright Path Consulting",
              image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
              course: "Digital Marketing Fundamentals"
            }
          ]
        }
      },
      {
        type: "subscription",
        id: "subscription-2",
        content: {
          heading: "Membership Options",
          subheading: "Choose the learning path that fits your goals",
          layout: "stacked",
          backgroundColor: "#F5F3FF",
          items: [
            {
              name: "Course Access",
              description: "Purchase individual courses",
              benefits: [
                "Lifetime access to selected courses",
                "Course materials and resources",
                "Community access during course period",
                "Course completion certificate"
              ],
              price: null,
              priceDescription: "Varies by course",
              ctaText: "View Courses",
              featured: false
            },
            {
              name: "All Access Membership",
              description: "Unlimited access to our entire course library",
              benefits: [
                "All current and future courses",
                "Monthly live Q&A sessions",
                "Member-only workshops",
                "Private community access",
                "Resource library",
                "Personalized learning path"
              ],
              price: 99,
              currency: "USD",
              billingPeriod: "monthly",
              ctaText: "Join Now",
              featured: true,
              badge: "Best Value"
            },
            {
              name: "VIP Mentorship",
              description: "All Access plus personalized coaching",
              benefits: [
                "Everything in All Access",
                "Monthly 1:1 coaching calls",
                "Personalized feedback on projects",
                "Priority support",
                "Advanced mastermind group",
                "Annual VIP retreat (virtual)"
              ],
              price: 299,
              currency: "USD",
              billingPeriod: "monthly",
              ctaText: "Apply Now",
              featured: false,
              limitedSpots: true
            }
          ]
        }
      },
      {
        type: "payment",
        id: "payment-8",
        content: {
          heading: "Flexible Payment Options",
          subheading: "Making education accessible for every woman",
          layout: "features",
          items: [
            {
              type: "One-Time Payment",
              description: "Pay in full for individual courses",
              discount: "10% off total price",
              methods: ["credit-card", "paypal", "apple-pay", "google-pay"]
            },
            {
              type: "Payment Plans",
              description: "Split course payments into manageable installments",
              installmentOptions: [
                {
                  months: 3,
                  interest: false
                },
                {
                  months: 6,
                  interest: false,
                  minAmount: 500
                }
              ],
              methods: ["credit-card", "affirm"]
            },
            {
              type: "Subscriptions",
              description: "Recurring payment for All Access and VIP memberships",
              billingOptions: [
                {
                  period: "Monthly",
                  discount: 0
                },
                {
                  period: "Annual",
                  discount: 20
                }
              ],
              cancellation: "Cancel anytime",
              methods: ["credit-card", "paypal"]
            }
          ],
          guarantees: [
            {
              name: "14-Day Money-Back Guarantee",
              description: "Try any course risk-free for two weeks",
              conditions: "Must complete less than 25% of course content"
            },
            {
              name: "7-Day Membership Trial",
              description: "Experience All Access before committing",
              conditions: "Applies to new members only"
            }
          ],
          corporateOptions: {
            available: true,
            description: "Special rates for team enrollments of 5+ members",
            contact: "corporate@digitalacademy.com"
          }
        }
      },
      {
        type: "cta",
        id: "cta-2",
        content: {
          heading: "Begin Your Learning Journey Today",
          subheading: "Take the first step toward transforming your knowledge and skills",
          ctaText: "Explore Courses",
          ctaUrl: "#courses",
          secondaryCtaText: "Join All Access",
          secondaryCtaUrl: "#subscription",
          backgroundColor: "#7C3AED",
          textColor: "#FFFFFF",
          alignment: "center"
        }
      }
    ]
  },
  {
    id: 12,
    name: "Financial Advisor",
    description: "Professional template for female financial advisors, wealth managers, and finance experts",
    category: "Finance",
    thumbnail: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false,
    updatedAt: "2024-02-05T13:15:00Z",
    colors: {
      primary: "#0F766E",
      secondary: "#7E22CE",
      accent: "#F59E0B"
    },
    fonts: {
      heading: "Montserrat",
      body: "Lato"
    },
    sections: [
      {
        type: "hero",
        id: "hero-12",
        content: {
          heading: "Financial Empowerment",
          subheading: "Building wealth and security on your terms",
          ctaText: "Schedule a Consultation",
          ctaUrl: "#booking",
          image: "https://images.unsplash.com/photo-1554260570-9140fd3b7614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          layout: "professional",
          backgroundColor: "#F0FDF9",
          alignment: "left"
        }
      },
      {
        type: "about",
        id: "about-4",
        content: {
          heading: "About My Practice",
          subheading: "A different approach to financial advisory",
          layout: "columns",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
          bio: "As a certified financial advisor with over 15 years of experience, I specialize in helping women build wealth with confidence. My approach emphasizes education, transparency, and personalized strategies aligned with your values and goals. I believe financial empowerment is a key component of gender equality.",
          credentials: [
            "Certified Financial Planner (CFP®)",
            "Chartered Financial Analyst (CFA)",
            "Fiduciary Advisor",
            "Member, Financial Planning Association"
          ],
          philosophy: "My mission is to close the wealth gap by helping women make informed financial decisions. I believe in providing straightforward advice without industry jargon, hidden fees, or conflicting incentives."
        }
      },
      {
        type: "services",
        id: "services-4",
        content: {
          heading: "Financial Services",
          subheading: "Comprehensive solutions for your financial journey",
          layout: "detailed",
          backgroundColor: "#F0FDF9",
          items: [
            {
              title: "Wealth Management",
              description: "Strategic investment management aligned with your goals and values",
              bulletPoints: [
                "Personalized investment strategy",
                "Portfolio construction and monitoring",
                "Risk management",
                "Tax-efficient investing",
                "ESG/Impact investment options"
              ],
              icon: "chart-bar",
              ctaText: "Learn More"
            },
            {
              title: "Financial Planning",
              description: "Comprehensive planning to secure your financial future",
              bulletPoints: [
                "Retirement planning",
                "Education funding",
                "Estate planning coordination",
                "Insurance analysis",
                "Cash flow and budgeting"
              ],
              icon: "document-text",
              ctaText: "Learn More"
            },
            {
              title: "Women in Transition",
              description: "Specialized support during significant life changes",
              bulletPoints: [
                "Divorce financial planning",
                "Widowhood guidance",
                "Career transition planning",
                "Inheritance management",
                "Business succession"
              ],
              icon: "arrows-right-left",
              ctaText: "Learn More"
            }
          ]
        }
      },
      {
        type: "process",
        id: "process-3",
        content: {
          heading: "Our Approach",
          subheading: "A thoughtful process focused on your unique needs",
          layout: "numbered",
          items: [
            {
              title: "Discovery",
              description: "In-depth conversation about your financial situation, goals, challenges, and priorities",
              icon: "magnifying-glass",
              duration: "60 minutes"
            },
            {
              title: "Analysis & Strategy",
              description: "Comprehensive assessment and development of personalized recommendations",
              icon: "document-chart-bar",
              duration: "1-2 weeks"
            },
            {
              title: "Implementation",
              description: "Executing your financial plan with careful attention to detail",
              icon: "cog",
              duration: "Varies by complexity"
            },
            {
              title: "Ongoing Management",
              description: "Regular reviews, adjustments, and ongoing support as your life evolves",
              icon: "arrows-pointing-out",
              duration: "Quarterly/Annual reviews"
            }
          ]
        }
      },
      {
        type: "testimonials",
        id: "testimonials-8",
        content: {
          heading: "Client Stories",
          subheading: "Real experiences from women I've helped achieve financial confidence",
          layout: "quotes",
          backgroundColor: "#F0FDF9",
          items: [
            {
              quote: "She helped me navigate a complex divorce and create a financial plan that gave me confidence in my future. For the first time, I feel in control of my finances.",
              author: "Catherine P.",
              scenario: "Divorce Transition",
              relationship: "Client since 2020"
            },
            {
              quote: "Her approach to financial planning considers my values and goals, not just numbers. I now have a clear path to retirement and feel empowered making investment decisions.",
              author: "Michelle T.",
              scenario: "Retirement Planning",
              relationship: "Client since 2018"
            },
            {
              quote: "After inheriting my family's business, she helped me develop a succession plan that honored our legacy while securing my financial future.",
              author: "Samantha R.",
              scenario: "Business Succession",
              relationship: "Client since 2019"
            }
          ]
        }
      },
      {
        type: "calculator",
        id: "calculator-1",
        content: {
          heading: "Financial Planning Tools",
          subheading: "Interactive calculators to explore your financial scenarios",
          layout: "tabs",
          tools: [
            {
              name: "Retirement Planner",
              description: "Estimate how much you need to save for your ideal retirement",
              fields: [
                "Current age",
                "Retirement age",
                "Current savings",
                "Monthly contribution",
                "Expected annual return",
                "Retirement income needed"
              ],
              chartType: "line"
            },
            {
              name: "Investment Growth",
              description: "Visualize how your investments might grow over time",
              fields: [
                "Initial investment",
                "Monthly addition",
                "Annual return rate",
                "Time horizon",
                "Inflation rate"
              ],
              chartType: "area"
            },
            {
              name: "Education Funding",
              description: "Plan for education expenses for children or grandchildren",
              fields: [
                "Child's current age",
                "Years until college",
                "Expected college cost",
                "Current savings",
                "Monthly contribution",
                "Expected annual return"
              ],
              chartType: "bar"
            }
          ]
        }
      },
      {
        type: "fee",
        id: "fee-1",
        content: {
          heading: "Investment Philosophy & Fees",
          subheading: "Transparent, straightforward fee structure",
          layout: "columns",
          sections: [
            {
              title: "Investment Approach",
              content: "I believe in evidence-based investing using low-cost, diversified portfolios tailored to your risk tolerance and goals. My portfolios emphasize global diversification, tax efficiency, and when desired, sustainable investing principles."
            },
            {
              title: "Fee Structure",
              content: "As a fee-only advisor, I receive no commissions or kickbacks. This ensures my recommendations are based solely on what's best for you.",
              feeOptions: [
                {
                  type: "Asset-Based",
                  details: "Annual fee of 0.75-1.00% of assets under management, depending on portfolio size",
                  minimums: "Portfolio minimum: $250,000",
                  includes: ["Portfolio management", "Financial planning", "Ongoing support"]
                },
                {
                  type: "Project-Based",
                  details: "Fixed fee for specific financial planning projects",
                  range: "$2,500-$5,000 depending on complexity",
                  includes: ["Comprehensive plan", "Specific recommendations", "30-day follow-up"]
                },
                {
                  type: "Hourly Consultation",
                  details: "For specific questions or advice",
                  rate: "$300 per hour",
                  minimums: "Two-hour minimum"
                }
              ]
            }
          ],
          disclosures: "All fees are transparent and discussed upfront. No hidden costs or surprises."
        }
      },
      {
        type: "payment",
        id: "payment-9",
        content: {
          heading: "Payment Options",
          subheading: "Secure and convenient ways to manage your advisory fees",
          layout: "compact",
          options: [
            {
              type: "Direct Fee Deduction",
              description: "Fees automatically deducted from your investment accounts",
              benefits: ["Convenient", "No separate bills", "May be tax-deductible"],
              availability: "Available for Asset-Based clients"
            },
            {
              type: "Electronic Payment",
              description: "Pay securely online via credit card or ACH transfer",
              methods: ["credit-card", "debit-card", "ach-transfer"],
              processingFees: "Client responsible for any processing fees",
              availability: "Available for all service types"
            },
            {
              type: "Traditional Payment",
              description: "Pay by check or bank transfer",
              methods: ["check", "wire-transfer"],
              availability: "Available for all service types"
            }
          ],
          security: {
            encryption: "256-bit encryption for all electronic transactions",
            compliance: "SOC 2 Type II compliant payment processing",
            dataProtection: "Financial data protected according to industry regulations"
          },
          billingSchedule: {
            assetBased: "Quarterly in advance",
            projectBased: "50% initial payment, 50% upon completion",
            hourly: "Due upon service completion"
          }
        }
      },
      {
        type: "booking",
        id: "booking-4",
        content: {
          heading: "Schedule a Consultation",
          subheading: "Take the first step toward financial confidence",
          layout: "professional",
          consultationOptions: [
            {
              name: "Introductory Call",
              duration: 30,
              price: 0,
              description: "Brief call to discuss your situation and how I might help",
              availability: "Wide availability"
            },
            {
              name: "Financial Assessment",
              duration: 60,
              price: 150,
              description: "In-depth discussion of your financial situation with initial recommendations",
              availability: "Limited weekly slots",
              appliedToServices: true
            }
          ],
          schedulingSystem: "integrated",
          calendarSyncing: true,
          preConsultationQuestionnaire: true,
          virtualOptions: ["Zoom", "Microsoft Teams", "Phone Call"],
          inPersonAvailable: true,
          ctaText: "Book Your Session"
        }
      }
    ]
  }
];
