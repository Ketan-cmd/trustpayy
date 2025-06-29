import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Clock,
  Shield,
  Smartphone,
  Globe,
  TrendingUp,
  MessageSquare,
  Users
} from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Financial Inclusion: How SMS Payments Are Banking the Unbanked',
    excerpt: 'Exploring how offline-first payment technology is revolutionizing financial access in emerging markets across Africa, Asia, and Latin America.',
    content: 'In a world where 2.5 billion people remain unbanked, traditional financial institutions have failed to reach the most vulnerable populations...',
    author: 'Sarah Chen',
    authorRole: 'CEO & Co-founder',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Financial Inclusion',
    image: 'https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'AI-Powered Fraud Detection: Protecting Every Transaction',
      excerpt: 'How machine learning algorithms analyze transaction patterns to prevent fraud in real-time, even for offline SMS payments.',
      author: 'Ahmed Al-Rashid',
      authorRole: 'Head of Security',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Security',
      image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Building for Offline: Why SMS Payments Matter',
      excerpt: 'The technical challenges and solutions behind creating a payment system that works without internet connectivity.',
      author: 'Marcus Johnson',
      authorRole: 'CTO & Co-founder',
      date: '2024-01-05',
      readTime: '7 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 4,
      title: 'From Street Vendors to Farmers: Real Stories of Impact',
      excerpt: 'Meet the entrepreneurs and workers whose lives have been transformed by accessible digital payments.',
      author: 'Priya Patel',
      authorRole: 'Head of Product',
      date: '2023-12-28',
      readTime: '5 min read',
      category: 'Impact Stories',
      image: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 5,
      title: 'The Economics of Financial Inclusion',
      excerpt: 'Analyzing the economic impact of bringing 2.5 billion unbanked people into the digital economy.',
      author: 'Sarah Chen',
      authorRole: 'CEO & Co-founder',
      date: '2023-12-20',
      readTime: '9 min read',
      category: 'Economics',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 6,
      title: 'Mobile-First Design for Emerging Markets',
      excerpt: 'Design principles and UX considerations when building for users with basic smartphones and limited data.',
      author: 'Priya Patel',
      authorRole: 'Head of Product',
      date: '2023-12-15',
      readTime: '6 min read',
      category: 'Design',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 7,
      title: 'Regulatory Challenges in Cross-Border Payments',
      excerpt: 'Navigating the complex regulatory landscape of international money transfers in developing countries.',
      author: 'Marcus Johnson',
      authorRole: 'CTO & Co-founder',
      date: '2023-12-10',
      readTime: '8 min read',
      category: 'Regulation',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 7, active: true },
    { name: 'Financial Inclusion', count: 2, active: false },
    { name: 'Technology', count: 2, active: false },
    { name: 'Security', count: 1, active: false },
    { name: 'Impact Stories', count: 1, active: false },
    { name: 'Economics', count: 1, active: false }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Financial Inclusion': return Users;
      case 'Technology': return Smartphone;
      case 'Security': return Shield;
      case 'Impact Stories': return Globe;
      case 'Economics': return TrendingUp;
      case 'Design': return MessageSquare;
      default: return MessageSquare;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Financial Inclusion': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'Technology': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'Security': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'Impact Stories': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400';
      case 'Economics': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400';
      case 'Design': return 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            TrustPay
            <br />
            <span className="text-bolt-green-600">Insights & Stories</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Exploring the future of financial inclusion, technology innovations, 
            and real stories from communities we serve worldwide.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category.active
                  ? 'bg-bolt-green-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-bolt-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                  {featuredPost.category}
                </span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {featuredPost.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-bolt-green-100 dark:bg-bolt-green-900/30 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-bolt-green-600 dark:text-bolt-green-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{featuredPost.author}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{featuredPost.authorRole}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-bolt-green-600 dark:text-bolt-green-400 hover:text-bolt-green-700 dark:hover:text-bolt-green-300 font-medium"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const CategoryIcon = getCategoryIcon(post.category);
            
            return (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{post.authorRole}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-bolt-green-600 dark:text-bolt-green-400 hover:text-bolt-green-700 dark:hover:text-bolt-green-300 text-sm font-medium"
                    >
                      Read
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-bolt-green-600 to-bolt-green-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-bolt-green-100 mb-8 max-w-2xl mx-auto">
            Get the latest insights on financial inclusion, technology innovations, 
            and impact stories delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-bolt-green-600 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-bolt-green-100 text-sm mt-3">
              No spam, unsubscribe anytime. Read our privacy policy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;