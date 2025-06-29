import React from 'react';
import { 
  CheckCircle, 
  X, 
  ArrowRight, 
  MessageSquare, 
  Shield, 
  Users,
  Building,
  Globe,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Personal',
      price: 'Free',
      description: 'Perfect for individuals and families',
      features: [
        'Send & receive money',
        'SMS payments (1¢ per transaction)',
        'Basic fraud protection',
        'Mobile app access',
        'Customer support',
        'Up to $1,000/month'
      ],
      notIncluded: [
        'Business features',
        'API access',
        'Advanced analytics',
        'Priority support'
      ],
      cta: 'Get Started Free',
      popular: false,
      color: 'border-gray-200 dark:border-gray-700'
    },
    {
      name: 'Business',
      price: '$29',
      period: '/month',
      description: 'For small businesses and merchants',
      features: [
        'Everything in Personal',
        'Business dashboard',
        'Multiple users (up to 5)',
        'Transaction analytics',
        'API access',
        'Priority support',
        'Up to $50,000/month',
        'Custom branding'
      ],
      notIncluded: [
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations'
      ],
      cta: 'Start Business Trial',
      popular: true,
      color: 'border-bolt-green-500 ring-2 ring-bolt-green-500'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations and partners',
      features: [
        'Everything in Business',
        'Unlimited users',
        'White-label solution',
        'Custom integrations',
        'Dedicated account manager',
        'SLA guarantee',
        'Unlimited volume',
        'Advanced security features',
        'Custom fraud rules',
        'Regional compliance'
      ],
      notIncluded: [],
      cta: 'Contact Sales',
      popular: false,
      color: 'border-gray-200 dark:border-gray-700'
    }
  ];

  const feeStructure = [
    {
      type: 'SMS Payments',
      fee: '1¢',
      description: 'Per SMS transaction when offline'
    },
    {
      type: 'Online Payments',
      fee: 'Free',
      description: 'No fees for internet-based transactions'
    },
    {
      type: 'International',
      fee: '2%',
      description: 'Cross-border transactions'
    },
    {
      type: 'Cash Out',
      fee: '1%',
      description: 'Converting to local currency (min $0.10)'
    }
  ];

  const faqs = [
    {
      question: 'Why is SMS payment only 1¢?',
      answer: 'We believe financial inclusion should be affordable. Our 1¢ SMS fee covers the cost of SMS delivery while keeping payments accessible to everyone.'
    },
    {
      question: 'Are online payments really free?',
      answer: 'Yes! When you have internet connection, all payments within TrustPay are completely free. We only charge for SMS when you\'re offline.'
    },
    {
      question: 'What about fraud protection?',
      answer: 'All plans include our AI-powered fraud protection. Enterprise customers get additional custom fraud rules and advanced security features.'
    },
    {
      question: 'Can I upgrade or downgrade anytime?',
      answer: 'Absolutely! You can change your plan at any time. Upgrades take effect immediately, downgrades at the next billing cycle.'
    },
    {
      question: 'Do you offer volume discounts?',
      answer: 'Yes, Enterprise customers can negotiate custom pricing based on transaction volume and specific requirements.'
    }
  ];

  const benefits = [
    {
      icon: MessageSquare,
      title: 'SMS Reliability',
      description: 'Works even when internet fails'
    },
    {
      icon: Shield,
      title: 'Fraud Protection',
      description: 'AI-powered security for all transactions'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Available in 50+ countries'
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Real-time transaction confirmations'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Simple, Transparent
            <br />
            <span className="text-bolt-green-600">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Start free and scale as you grow. No hidden fees, no setup costs, 
            just honest pricing that works for everyone.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-bolt-green-100 dark:bg-bolt-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                <benefit.icon className="w-6 h-6 text-bolt-green-600 dark:text-bolt-green-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{benefit.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 ${plan.color} relative`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-bolt-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-bolt-green-600 dark:text-bolt-green-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
                
                {plan.notIncluded.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3 opacity-50">
                    <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <span className="text-gray-500 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                to={plan.name === 'Enterprise' ? '/contact' : '/login'}
                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-bolt-green-600 text-white hover:bg-bolt-green-700'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Fee Structure */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Transaction Fees
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Clear, upfront pricing with no surprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {feeStructure.map((fee, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {fee.type}
                </h3>
                <div className="text-3xl font-bold text-bolt-green-600 dark:text-bolt-green-400 mb-3">
                  {fee.fee}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {fee.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-bolt-green-50 dark:bg-bolt-green-900/20 border border-bolt-green-200 dark:border-bolt-green-800 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-bolt-green-600 dark:text-bolt-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-bolt-green-800 dark:text-bolt-green-200 mb-2">
                  No Hidden Fees
                </h3>
                <p className="text-bolt-green-700 dark:text-bolt-green-300">
                  What you see is what you pay. No setup fees, no monthly minimums, 
                  no surprise charges. Just transparent pricing that scales with your usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to know about TrustPay pricing
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-bolt-green-600 to-bolt-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-bolt-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust TrustPay for secure, affordable payments
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-bolt-green-600 bg-white rounded-xl hover:bg-gray-50 transition-colors"
            >
              Start Free Today
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
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Cancel anytime</span>
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

export default Pricing;