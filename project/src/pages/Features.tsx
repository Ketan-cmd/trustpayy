import React from 'react';
import { 
  WifiOff, 
  Shield, 
  Smartphone, 
  DollarSign, 
  MessageSquare, 
  Globe, 
  Zap, 
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  TrendingUp,
  MapPin,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Features: React.FC = () => {
  const mainFeatures = [
    {
      icon: WifiOff,
      title: 'Offline-First Payments',
      description: 'Send and receive money via SMS when internet is unavailable. Perfect for rural areas and unreliable connections.',
      benefits: [
        'Works without internet connection',
        'SMS backup for all transactions',
        'Automatic offline detection',
        'Reliable in remote areas'
      ],
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'AI Fraud Protection',
      description: 'Advanced machine learning analyzes every transaction in real-time to detect and prevent fraudulent activity.',
      benefits: [
        'Real-time risk scoring',
        'Pattern recognition',
        'Velocity monitoring',
        '99.9% fraud prevention rate'
      ],
      color: 'bg-red-500'
    },
    {
      icon: Smartphone,
      title: 'Universal Compatibility',
      description: 'Works on any phone - from the latest smartphones to basic feature phones with SMS capability.',
      benefits: [
        'No app download required',
        'SMS-based transactions',
        'Works on any mobile device',
        'Inclusive by design'
      ],
      color: 'bg-green-500'
    },
    {
      icon: DollarSign,
      title: 'Ultra-Low Fees',
      description: 'Only 1¢ for SMS payments. Much cheaper than traditional banking and money transfer services.',
      benefits: [
        'Transparent pricing',
        'No hidden fees',
        'Affordable for everyone',
        'Cost-effective for businesses'
      ],
      color: 'bg-purple-500'
    }
  ];

  const technicalFeatures = [
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Instant transaction processing with immediate confirmations'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Available in 50+ countries with local currency support'
    },
    {
      icon: Users,
      title: 'Multi-User Support',
      description: 'Family and business accounts with role-based permissions'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock service with 99.9% uptime guarantee'
    }
  ];

  const fraudFeatures = [
    {
      icon: TrendingUp,
      title: 'Velocity Analysis',
      description: 'Monitors transaction frequency to detect rapid-fire attacks',
      example: 'Flags 15 transactions in 1 hour (limit: 10)'
    },
    {
      icon: DollarSign,
      title: 'Amount Anomalies',
      description: 'Compares amounts to user\'s historical patterns',
      example: '$500 payment flagged when average is $50'
    },
    {
      icon: MapPin,
      title: 'Location Tracking',
      description: 'Identifies transactions from unusual locations',
      example: 'Payment from London when user is in Lagos'
    },
    {
      icon: Activity,
      title: 'Pattern Recognition',
      description: 'AI detects suspicious behavioral patterns',
      example: 'Round number amounts indicating automation'
    }
  ];

  const comparisonData = [
    {
      feature: 'Works Offline',
      trustpay: true,
      traditional: false,
      mobile: false
    },
    {
      feature: 'Any Phone',
      trustpay: true,
      traditional: false,
      mobile: true
    },
    {
      feature: 'AI Fraud Protection',
      trustpay: true,
      traditional: false,
      mobile: false
    },
    {
      feature: 'Low Fees (1¢)',
      trustpay: true,
      traditional: false,
      mobile: false
    },
    {
      feature: 'Instant Setup',
      trustpay: true,
      traditional: false,
      mobile: true
    },
    {
      feature: 'Rural Access',
      trustpay: true,
      traditional: false,
      mobile: false
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Features Built for
            <br />
            <span className="text-bolt-green-600">Real-World Conditions</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            TrustPay works where other payment systems fail. Designed for emerging markets with 
            unreliable internet, diverse devices, and security challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {mainFeatures.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-bolt-green-600 dark:text-bolt-green-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Features */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Enterprise-Grade Infrastructure
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Built to scale with robust security, reliability, and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-bolt-green-100 dark:bg-bolt-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-bolt-green-600 dark:text-bolt-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
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

      {/* Fraud Detection Deep Dive */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Advanced Fraud Detection
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our AI analyzes multiple signals to protect every transaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {fraudFeatures.map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {feature.description}
                    </p>
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                      <p className="text-sm text-red-800 dark:text-red-200">
                        <strong>Example:</strong> {feature.example}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/demo/fraud"
              className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
            >
              Try Fraud Detection Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How TrustPay Compares
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              See why TrustPay is the best choice for emerging markets
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-600">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-bolt-green-600 dark:text-bolt-green-400 uppercase tracking-wider">
                      TrustPay
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Traditional Banking
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Mobile Money
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white dark:bg-gray-700' : 'bg-gray-50 dark:bg-gray-600'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {row.trustpay ? (
                          <CheckCircle className="w-6 h-6 text-bolt-green-600 dark:text-bolt-green-400 mx-auto" />
                        ) : (
                          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-500 rounded-full mx-auto"></div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {row.traditional ? (
                          <CheckCircle className="w-6 h-6 text-bolt-green-600 dark:text-bolt-green-400 mx-auto" />
                        ) : (
                          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-500 rounded-full mx-auto"></div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {row.mobile ? (
                          <CheckCircle className="w-6 h-6 text-bolt-green-600 dark:text-bolt-green-400 mx-auto" />
                        ) : (
                          <div className="w-6 h-6 bg-gray-300 dark:bg-gray-500 rounded-full mx-auto"></div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-bolt-green-600 to-bolt-green-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-bolt-green-100 mb-8 max-w-2xl mx-auto">
              Try our live demo to see how TrustPay's features work in real-world scenarios
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-bolt-green-600 bg-white rounded-xl hover:bg-gray-50 transition-colors"
              >
                Try Live Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo/how-to-use"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-xl hover:bg-white hover:text-bolt-green-600 transition-colors"
              >
                See Use Cases
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;