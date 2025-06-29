import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send,
  CheckCircle,
  Clock,
  Users,
  Building
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: 'general',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help from our support team',
      contact: 'support@trustpay.com',
      response: 'Response within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      contact: '+1 (555) 123-4567',
      response: 'Available 9 AM - 6 PM EST'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Instant help when you need it',
      contact: 'Available in app',
      response: 'Average response: 2 minutes'
    },
    {
      icon: Building,
      title: 'Enterprise Sales',
      description: 'Custom solutions for large organizations',
      contact: 'sales@trustpay.com',
      response: 'Response within 4 hours'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Market Street, Suite 400',
      country: 'United States',
      phone: '+1 (555) 123-4567'
    },
    {
      city: 'Lagos',
      address: '45 Victoria Island Road',
      country: 'Nigeria',
      phone: '+234 (0) 123 456 789'
    },
    {
      city: 'Nairobi',
      address: '78 Kenyatta Avenue',
      country: 'Kenya',
      phone: '+254 (0) 123 456 789'
    },
    {
      city: 'São Paulo',
      address: '321 Avenida Paulista',
      country: 'Brazil',
      phone: '+55 (11) 1234-5678'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with TrustPay?',
      answer: 'Simply sign up for a free account and start sending money immediately. No credit check or bank account required.'
    },
    {
      question: 'What phones are supported?',
      answer: 'TrustPay works on any phone with SMS capability - from smartphones to basic feature phones.'
    },
    {
      question: 'How secure are my transactions?',
      answer: 'All transactions are protected by our AI-powered fraud detection system with 99.9% accuracy.'
    },
    {
      question: 'Can I use TrustPay for business?',
      answer: 'Yes! We offer business plans with additional features like analytics, API access, and multi-user support.'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about TrustPay? We're here to help. Reach out to our team 
            and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-bolt-green-100 dark:bg-bolt-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-6 h-6 text-bolt-green-600 dark:text-bolt-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {method.description}
              </p>
              <p className="text-bolt-green-600 dark:text-bolt-green-400 font-medium mb-1">
                {method.contact}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {method.response}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-bolt-green-600 dark:text-bolt-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-bolt-green-500 focus:border-bolt-green-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-bolt-green-500 focus:border-bolt-green-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-bolt-green-500 focus:border-bolt-green-500 transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-bolt-green-500 focus:border-bolt-green-500 transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales & Partnerships</option>
                    <option value="press">Press & Media</option>
                    <option value="careers">Careers</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-bolt-green-500 focus:border-bolt-green-500 transition-colors"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-bolt-green-600 rounded-lg hover:bg-bolt-green-700 transition-colors"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
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

            <div className="mt-8 bg-bolt-green-50 dark:bg-bolt-green-900/20 border border-bolt-green-200 dark:border-bolt-green-800 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Clock className="w-6 h-6 text-bolt-green-600 dark:text-bolt-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-bolt-green-800 dark:text-bolt-green-200 mb-2">
                    Quick Response Guarantee
                  </h3>
                  <p className="text-bolt-green-700 dark:text-bolt-green-300">
                    We respond to all inquiries within 24 hours. For urgent matters, 
                    use our live chat or phone support for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Global Offices
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're building financial inclusion worldwide with teams across four continents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-bolt-green-100 dark:bg-bolt-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-bolt-green-600 dark:text-bolt-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {office.city}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
                  {office.address}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                  {office.country}
                </p>
                <p className="text-bolt-green-600 dark:text-bolt-green-400 font-medium text-sm">
                  {office.phone}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-bolt-green-600 to-bolt-green-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Payments?
            </h2>
            <p className="text-xl text-bolt-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust TrustPay for secure, accessible financial services
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/login"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-bolt-green-600 bg-white rounded-xl hover:bg-gray-50 transition-colors"
              >
                Try Free Demo
              </a>
              <a
                href="mailto:sales@trustpay.com"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-xl hover:bg-white hover:text-bolt-green-600 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;