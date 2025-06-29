import React from 'react';
import { 
  Users, 
  Target, 
  Heart, 
  Globe, 
  TrendingUp, 
  Shield,
  Award,
  Lightbulb
} from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      bio: 'Former World Bank financial inclusion specialist with 10+ years in emerging markets.',
      avatar: '👩🏻‍💼'
    },
    {
      name: 'Marcus Johnson',
      role: 'CTO & Co-founder',
      bio: 'Ex-Google engineer specializing in offline-first mobile applications and AI.',
      avatar: '👨🏿‍💻'
    },
    {
      name: 'Priya Patel',
      role: 'Head of Product',
      bio: 'Former Stripe product manager focused on payments for underserved markets.',
      avatar: '👩🏽‍💼'
    },
    {
      name: 'Ahmed Al-Rashid',
      role: 'Head of Security',
      bio: 'Cybersecurity expert with experience in fraud detection and financial security.',
      avatar: '👨🏽‍💼'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Financial Inclusion',
      description: 'We believe everyone deserves access to secure financial services, regardless of location or income level.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Advanced AI fraud protection ensures every transaction is safe, building trust in digital payments.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We create solutions that work in real-world conditions, not just ideal circumstances.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our technology bridges the gap between urban and rural, connected and offline communities.'
    }
  ];

  const milestones = [
    {
      year: '2022',
      title: 'Company Founded',
      description: 'Started with a mission to bank the unbanked through mobile technology'
    },
    {
      year: '2023',
      title: 'AI Fraud Detection',
      description: 'Launched advanced machine learning fraud protection system'
    },
    {
      year: '2023',
      title: 'SMS Payments',
      description: 'Pioneered offline payment processing via SMS for rural areas'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Serving communities across Africa, Asia, and Latin America'
    }
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Banking the Unbanked,
            <br />
            <span className="text-bolt-green-600">One Transaction at a Time</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            TrustPay was born from a simple observation: 2.5 billion people worldwide lack access to basic financial services, 
            yet most have mobile phones. We're changing that.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We're building the world's most accessible payment platform. Our technology works offline, 
              on any phone, with AI-powered security that protects every transaction.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              From street vendors in Lagos to farmers in rural Kenya, we're empowering communities 
              to participate in the digital economy on their own terms.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-bolt-green-600 dark:text-bolt-green-400">2.5B</div>
                <div className="text-gray-600 dark:text-gray-300">People We Serve</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bolt-green-600 dark:text-bolt-green-400">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Countries</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-bolt-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-bolt-green-600 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Financial Inclusion</h3>
                  <p className="text-gray-600 dark:text-gray-300">Bringing banking to the unbanked</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Security & Trust</h3>
                  <p className="text-gray-600 dark:text-gray-300">AI-powered fraud protection</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Global Access</h3>
                  <p className="text-gray-600 dark:text-gray-300">Works anywhere, even offline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-bolt-green-100 dark:bg-bolt-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-bolt-green-600 dark:text-bolt-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experienced professionals from fintech, development, and emerging markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-bolt-green-600 dark:text-bolt-green-400 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Key milestones in our mission to democratize financial services
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-bolt-green-600 dark:bg-bolt-green-400"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-600">
                      <div className="text-bolt-green-600 dark:text-bolt-green-400 font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-bolt-green-600 dark:bg-bolt-green-400 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-bolt-green-600 to-bolt-green-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Making a Real Difference
            </h2>
            <p className="text-xl text-bolt-green-100 mb-8 max-w-3xl mx-auto">
              Every transaction on TrustPay represents someone gaining access to the digital economy. 
              We're not just processing payments – we're creating opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">$50M+</div>
                <div className="text-bolt-green-100">Processed for unbanked users</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500K+</div>
                <div className="text-bolt-green-100">Lives impacted</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">99.9%</div>
                <div className="text-bolt-green-100">Fraud prevention rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;