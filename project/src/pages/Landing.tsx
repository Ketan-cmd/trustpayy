import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Smartphone, 
  Globe, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Play,
  Star,
  MessageSquare,
  WifiOff,
  DollarSign,
  Zap
} from 'lucide-react';

const Landing: React.FC = () => {
  const features = [
    {
      icon: WifiOff,
      title: 'Offline Payments',
      description: 'Send money via SMS when internet is unavailable. Perfect for rural areas and emerging markets.',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'AI Fraud Protection',
      description: 'Advanced machine learning detects suspicious patterns and protects every transaction in real-time.',
      color: 'bg-red-500'
    },
    {
      icon: Smartphone,
      title: 'Any Phone Works',
      description: 'From smartphones to basic feature phones - everyone can participate in the digital economy.',
      color: 'bg-green-500'
    },
    {
      icon: DollarSign,
      title: 'Low Cost',
      description: 'Only 1¢ for SMS payments. Much cheaper than traditional banking and money transfer services.',
      color: 'bg-purple-500'
    }
  ];

  const stats = [
    { number: '2.5B', label: 'Unbanked People Worldwide' },
    { number: '68%', label: 'Have Mobile Phones' },
    { number: '1¢', label: 'SMS Payment Fee' },
    { number: '99.9%', label: 'Uptime Reliability' }
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Street Vendor, Lagos',
      content: 'TrustPay changed my business. Now I can accept payments even when the internet is down. My customers love the convenience.',
      avatar: '👩🏾‍💼'
    },
    {
      name: 'John Kimani',
      role: 'Farmer, Rural Kenya',
      content: 'I can now sell my crops to buyers in the city and receive payment instantly via SMS. No more waiting weeks for payment.',
      avatar: '👨🏿‍🌾'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Small Business Owner',
      content: 'The fraud protection gives me peace of mind. I know my money is safe, and my customers trust the security.',
      avatar: '👨🏽‍💼'
    }
  ];

  const useCases = [
    {
      title: 'Street Vendors',
      description: 'Accept digital payments without internet',
      icon: '🛒',
      users: '50M+ vendors'
    },
    {
      title: 'Rural Farmers',
      description: 'Sell crops to urban buyers remotely',
      icon: '🌾',
      users: '200M+ farmers'
    },
    {
      title: 'Domestic Workers',
      description: 'Receive wages safely and securely',
      icon: '🏠',
      users: '100M+ workers'
    },
    {
      title: 'Small Businesses',
      description: 'Manage payments and cash flow',
      icon: '🏪',
      users: '300M+ businesses'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bolt-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Bank the <span className="text-bolt-green-600">unbanked</span>.
                <br />
                Simply. Securely.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Empowering 2.5 billion people with secure mobile payments that work offline. 
                AI-powered fraud protection meets SMS reliability for true financial inclusion.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-bolt-green-600 rounded-xl hover:bg-bolt-green-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Try Live Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo/how-to-use"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-bolt-green-600 dark:text-bolt-green-400 bg-white dark:bg-gray-800 border-2 border-bolt-green-600 dark:border-bolt-green-400 rounded-xl hover:bg-bolt-green-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Link>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-bolt-green-600" />
                  <span>No credit check required</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-bolt-green-600" />
                  <span>Works on any phone</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-4 h-4 text-bolt-green-600" />
                  <span>Instant setup</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-bolt-green-600 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Live Transaction</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Real-time fraud detection</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300">Amount: $25.00</span>
                    <span className="text-bolt-green-600 dark:text-bolt-green-400 font-medium">✓ Verified</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300">Method: SMS</span>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">Offline Mode</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="text-gray-700 dark:text-gray-300">Risk Score: 5%</span>
                    <span className="text-bolt-green-600 dark:text-bolt-green-400 font-medium">Low Risk</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-bolt-green-50 dark:bg-bolt-green-900/20 rounded-lg border border-bolt-green-200 dark:border-bolt-green-800">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-bolt-green-600 dark:text-bolt-green-400" />
                    <span className="text-bolt-green-800 dark:text-bolt-green-200 font-medium">Payment Approved</span>
                  </div>
                  <p className="text-sm text-bolt-green-700 dark:text-bolt-green-300 mt-1">
                    Transaction completed successfully via SMS
                  </p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-bolt-green-100 dark:bg-bolt-green-900/30 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-bolt-green-600 dark:text-bolt-green-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-bolt-green-600 dark:text-bolt-green-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why TrustPay Works for Everyone
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built specifically for emerging markets with unreliable internet and diverse phone capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Real People, Real Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how TrustPay is transforming lives across different communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {useCase.description}
                </p>
                <p className="text-sm text-bolt-green-600 dark:text-bolt-green-400 font-medium">
                  {useCase.users}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/demo/how-to-use"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-bolt-green-600 dark:text-bolt-green-400 bg-white dark:bg-gray-700 border-2 border-bolt-green-600 dark:border-bolt-green-400 rounded-lg hover:bg-bolt-green-50 dark:hover:bg-gray-600 transition-colors"
            >
              See Real-World Examples
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Communities Worldwide
            </h2>
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-600 dark:text-gray-300">4.9/5 from 10,000+ users</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bolt-green-600 to-bolt-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Join the Financial Revolution?
          </h2>
          <p className="text-xl text-bolt-green-100 mb-8 max-w-2xl mx-auto">
            Start accepting payments today. No setup fees, no monthly charges, just secure transactions that work everywhere.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-bolt-green-600 bg-white rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
            >
              Start Free Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-xl hover:bg-white hover:text-bolt-green-600 transition-colors"
            >
              Contact Sales
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-8 text-bolt-green-100">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>No contracts</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;