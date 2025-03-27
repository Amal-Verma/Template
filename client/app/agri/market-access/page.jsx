"use client"

import React, { useState } from 'react';
import Link from 'next/link';

// Dummy data for market access resources
const marketTopics = [
  {
    id: 'selling',
    title: 'Selling Your Produce',
    icon: '🏪',
    description: 'Learn effective strategies to sell your agricultural products for maximum profit.'
  },
  {
    id: 'pricing',
    title: 'Understanding Pricing',
    icon: '💰',
    description: 'Learn how to price your products competitively and profitably.'
  },
  {
    id: 'buyers',
    title: 'Finding Buyers',
    icon: '🤝',
    description: 'Connect with potential buyers and establish reliable business relationships.'
  },
  {
    id: 'branding',
    title: 'Farm Branding',
    icon: '🏷️',
    description: 'Create a distinctive brand to make your products stand out in the market.'
  },
  {
    id: 'digital',
    title: 'Digital Marketing',
    icon: '📱',
    description: 'Use digital tools to market your products and reach more customers.'
  },
  {
    id: 'logistics',
    title: 'Transportation & Storage',
    icon: '🚚',
    description: 'Learn about efficient and cost-effective methods for product handling.'
  }
];

const priceData = {
  crops: [
    { name: 'Rice', currentPrice: 18.75, previousPrice: 17.50, unit: 'per kg', trend: 'up' },
    { name: 'Wheat', currentPrice: 22.30, previousPrice: 23.15, unit: 'per kg', trend: 'down' },
    { name: 'Maize', currentPrice: 15.20, previousPrice: 14.80, unit: 'per kg', trend: 'up' },
    { name: 'Soybeans', currentPrice: 45.60, previousPrice: 46.75, unit: 'per kg', trend: 'down' },
    { name: 'Tomatoes', currentPrice: 35.25, previousPrice: 30.15, unit: 'per kg', trend: 'up' },
    { name: 'Potatoes', currentPrice: 12.75, previousPrice: 14.30, unit: 'per kg', trend: 'down' },
    { name: 'Onions', currentPrice: 28.50, previousPrice: 25.80, unit: 'per kg', trend: 'up' },
    { name: 'Apples', currentPrice: 65.30, previousPrice: 63.20, unit: 'per kg', trend: 'up' }
  ],
  markets: [
    { name: 'Delhi Agricultural Market', location: 'North India', type: 'Wholesale', contactInfo: '+91 11 2345 6789' },
    { name: 'Mumbai Farmers Market', location: 'West India', type: 'Retail & Wholesale', contactInfo: '+91 22 8765 4321' },
    { name: 'Bangalore Organic Exchange', location: 'South India', type: 'Organic Specialty', contactInfo: '+91 80 5566 7788' },
    { name: 'Kolkata Produce Hub', location: 'East India', type: 'Wholesale', contactInfo: '+91 33 4433 2211' },
    { name: 'Chennai Fresh Market', location: 'South India', type: 'Retail', contactInfo: '+91 44 9988 7766' }
  ]
};

const resources = [
  {
    id: 1,
    title: 'Direct-to-Consumer Sales Guide',
    description: 'Learn how to sell your products directly to consumers, bypassing intermediaries for better profits.',
    type: 'guide',
    topic: 'selling',
    format: 'PDF',
    fileSize: '2.4 MB',
    readTime: '25 min',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    title: 'Market Price Calculation Worksheet',
    description: 'A template to help you calculate fair market prices for your agricultural products.',
    type: 'tool',
    topic: 'pricing',
    format: 'Excel',
    fileSize: '1.8 MB',
    readTime: 'N/A',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    title: 'Connecting with Wholesale Buyers',
    description: 'Strategies for finding and establishing relationships with wholesale buyers in your region.',
    type: 'guide',
    topic: 'buyers',
    format: 'PDF',
    fileSize: '3.5 MB',
    readTime: '35 min',
    image: 'https://images.unsplash.com/photo-1560693512-8f3d11372002?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    title: 'Farm Brand Development Kit',
    description: 'Templates and guidelines to create a memorable brand identity for your farm products.',
    type: 'tool',
    topic: 'branding',
    format: 'ZIP',
    fileSize: '12.6 MB',
    readTime: 'N/A',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 5,
    title: 'Social Media Marketing for Farmers',
    description: 'Learn how to use platforms like Facebook and Instagram to market your farm products effectively.',
    type: 'guide',
    topic: 'digital',
    format: 'PDF',
    fileSize: '4.2 MB',
    readTime: '40 min',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 6,
    title: 'Post-Harvest Handling Best Practices',
    description: 'Techniques to maintain product quality during transportation and storage.',
    type: 'guide',
    topic: 'logistics',
    format: 'PDF',
    fileSize: '5.1 MB',
    readTime: '45 min',
    image: 'https://images.unsplash.com/photo-1627633532586-2494ecd55943?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 7,
    title: 'Seasonal Price Trend Analysis',
    description: 'Historical data on price fluctuations by season to help you time your market entry.',
    type: 'tool',
    topic: 'pricing',
    format: 'Excel',
    fileSize: '3.7 MB',
    readTime: 'N/A',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 8,
    title: 'Contract Farming Templates',
    description: 'Legal templates for establishing contracts with buyers for secure and predictable sales.',
    type: 'tool',
    topic: 'buyers',
    format: 'DOC',
    fileSize: '1.5 MB',
    readTime: 'N/A',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  }
];

const successStories = [
  {
    id: 1,
    farmerName: 'Rajesh Patel',
    location: 'Gujarat, India',
    crop: 'Organic Cotton',
    story: 'By implementing direct-to-manufacturer sales and obtaining organic certification, Rajesh was able to increase his income by 45% within one growing season.',
    image: 'https://images.unsplash.com/photo-1629218270548-be1dc2982fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    farmerName: 'Lakshmi Devi',
    location: 'Tamil Nadu, India',
    crop: 'Rice and Vegetables',
    story: 'Lakshmi started a WhatsApp group for local customers and now sells 80% of her produce directly to consumers at a 30% premium over market rates.',
    image: 'https://images.unsplash.com/photo-1605818351976-926d9a8098c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    farmerName: 'Amit Singh',
    location: 'Punjab, India',
    crop: 'Wheat and Pulses',
    story: 'By forming a cooperative with neighboring farmers, Amit gained bargaining power with buyers and secured contracts 15% above market average.',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  }
];

const MarketAccessPage = () => {
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [selectedResourceType, setSelectedResourceType] = useState('all');
  const [activeResource, setActiveResource] = useState(null);
  const [activeTab, setActiveTab] = useState('resources');

  const filteredResources = resources.filter(resource => 
    (selectedTopic === 'all' || resource.topic === selectedTopic) &&
    (selectedResourceType === 'all' || resource.type === selectedResourceType)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 p-6 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-300">
          Market Access Guidance
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap">
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'resources'
                    ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Resources & Guides
              </button>
              <button
                onClick={() => setActiveTab('prices')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'prices'
                    ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Market Prices
              </button>
              <button
                onClick={() => setActiveTab('stories')}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === 'stories'
                    ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                    : 'text-gray-600 dark:text-gray-400'
                }`}
              >
                Success Stories
              </button>
            </div>
          </div>
          
          <div className="p-6">
            {activeTab === 'resources' && !activeResource && (
              <div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                    Market Access Topics
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                    <button
                      onClick={() => setSelectedTopic('all')}
                      className={`p-4 rounded-lg border transition-colors ${
                        selectedTopic === 'all'
                          ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                          : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      <div className="text-2xl mb-2">📚</div>
                      <div className="font-medium">All Topics</div>
                    </button>
                    
                    {marketTopics.map(topic => (
                      <button
                        key={topic.id}
                        onClick={() => setSelectedTopic(topic.id)}
                        className={`p-4 rounded-lg border transition-colors ${
                          selectedTopic === topic.id
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200'
                            : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <div className="text-2xl mb-2">{topic.icon}</div>
                        <div className="font-medium">{topic.title}</div>
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <button
                      onClick={() => setSelectedResourceType('all')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedResourceType === 'all'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      All Resources
                    </button>
                    <button
                      onClick={() => setSelectedResourceType('guide')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedResourceType === 'guide'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      Guides
                    </button>
                    <button
                      onClick={() => setSelectedResourceType('tool')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedResourceType === 'tool'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      Tools & Templates
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.length > 0 ? (
                    filteredResources.map(resource => (
                      <div 
                        key={resource.id}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={resource.image} 
                            alt={resource.title} 
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-5">
                          <div className="flex justify-between items-center mb-2">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full 
                              ${resource.type === 'guide' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                                'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'}`}>
                              {resource.type === 'guide' ? 'Guide' : 'Tool'}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {resource.format} • {resource.fileSize}
                            </span>
                          </div>
                          
                          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{resource.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{resource.description}</p>
                          
                          {resource.readTime !== 'N/A' && (
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                              <i className="far fa-clock mr-1"></i> Reading time: {resource.readTime}
                            </div>
                          )}
                          
                          <div className="flex justify-between">
                            <button
                              onClick={() => setActiveResource(resource)}
                              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                            >
                              View Details
                            </button>
                            <button className="px-3 py-2 text-green-600 dark:text-green-400 border border-green-500 rounded-lg">
                              <i className="fas fa-download"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                      <div className="text-5xl mb-4">📚</div>
                      <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">No Resources Found</h3>
                      <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                        We couldn't find any resources matching your current filters. Try selecting a different topic or resource type.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            
            {activeTab === 'resources' && activeResource && (
              <div>
                <button
                  onClick={() => setActiveResource(null)}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white mb-6 flex items-center"
                >
                  <i className="fas fa-arrow-left mr-2"></i> Back to Resources
                </button>
                
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={activeResource.image} 
                      alt={activeResource.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full 
                        ${activeResource.type === 'guide' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 
                          'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'}`}>
                        {activeResource.type === 'guide' ? 'Guide' : 'Tool'}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {activeResource.format} • {activeResource.fileSize}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{activeResource.title}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{activeResource.description}</p>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 p-5 rounded-lg mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Resource Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <span className="text-gray-600 dark:text-gray-400 mr-2">Type:</span>
                          <span className="font-medium text-gray-800 dark:text-white capitalize">{activeResource.type}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 dark:text-gray-400 mr-2">Topic:</span>
                          <span className="font-medium text-gray-800 dark:text-white capitalize">
                            {marketTopics.find(t => t.id === activeResource.topic)?.title}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 dark:text-gray-400 mr-2">Format:</span>
                          <span className="font-medium text-gray-800 dark:text-white">{activeResource.format}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-600 dark:text-gray-400 mr-2">Size:</span>
                          <span className="font-medium text-gray-800 dark:text-white">{activeResource.fileSize}</span>
                        </div>
                        {activeResource.readTime !== 'N/A' && (
                          <div className="flex items-center">
                            <span className="text-gray-600 dark:text-gray-400 mr-2">Reading time:</span>
                            <span className="font-medium text-gray-800 dark:text-white">{activeResource.readTime}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="prose max-w-none dark:prose-invert mb-6">
                      <h3>What You'll Learn</h3>
                      <ul>
                        <li>Understanding market dynamics for agricultural products</li>
                        <li>Strategies for negotiating better prices with buyers</li>
                        <li>Methods to identify and connect with potential customers</li>
                        <li>Tools for tracking market trends and pricing information</li>
                        <li>Step-by-step processes for implementing successful market access strategies</li>
                      </ul>
                      
                      <h3>Who This Is For</h3>
                      <p>
                        This resource is designed for small to medium-scale farmers who want to improve their market position, 
                        increase profits, and establish sustainable business relationships with buyers.
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300">
                        <i className="fas fa-download mr-2"></i> Download Resource
                      </button>
                      <button className="px-4 py-3 text-green-600 dark:text-green-400 border border-green-500 rounded-lg">
                        <i className="fas fa-bookmark mr-2"></i> Save for Later
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'prices' && (
              <div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Current Market Prices</h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        Average wholesale prices as of {new Date().toLocaleDateString()}. Prices may vary by location and quality.
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
                        <i className="fas fa-download mr-2"></i> Download Full Price List
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <div className="lg:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Crop Prices (₹)</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
                        <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700">
                          <tr>
                            <th scope="col" className="px-6 py-3">Crop</th>
                            <th scope="col" className="px-6 py-3">Current Price</th>
                            <th scope="col" className="px-6 py-3">Previous Price</th>
                            <th scope="col" className="px-6 py-3">Change</th>
                            <th scope="col" className="px-6 py-3">Unit</th>
                          </tr>
                        </thead>
                        <tbody>
                          {priceData.crops.map((crop, index) => (
                            <tr key={index} className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                              <td className="px-6 py-4 font-medium">{crop.name}</td>
                              <td className="px-6 py-4">₹{crop.currentPrice.toFixed(2)}</td>
                              <td className="px-6 py-4">₹{crop.previousPrice.toFixed(2)}</td>
                              <td className="px-6 py-4">
                                <span className={`flex items-center ${
                                  crop.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                                }`}>
                                  {crop.trend === 'up' ? (
                                    <>
                                      <i className="fas fa-arrow-up mr-1"></i>
                                      {((crop.currentPrice - crop.previousPrice) / crop.previousPrice * 100).toFixed(1)}%
                                    </>
                                  ) : (
                                    <>
                                      <i className="fas fa-arrow-down mr-1"></i>
                                      {((crop.previousPrice - crop.currentPrice) / crop.previousPrice * 100).toFixed(1)}%
                                    </>
                                  )}
                                </span>
                              </td>
                              <td className="px-6 py-4">{crop.unit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Price Trend Analysis</h3>
                    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        Current market trends show price increases for vegetables and staple grains, while pulses are 
                        seeing slight decreases. Factors influencing current prices:
                      </p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                        <li className="flex items-start">
                          <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                          Seasonal shifts in supply and demand
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                          Recent rainfall patterns affecting harvest volume
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                          Transport costs fluctuations
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                          Changes in export demand
                        </li>
                      </ul>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <h4 className="font-medium text-gray-800 dark:text-white mb-2">Price Forecast</h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          Analysts predict rice and vegetable prices will continue to rise through the next month, 
                          while wheat prices are expected to stabilize.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Regional Markets</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {priceData.markets.map((market, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                        <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-1">{market.name}</h4>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">{market.location}</div>
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="block text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">Type</span>
                            <span className="text-gray-800 dark:text-white">{market.type}</span>
                          </div>
                          <div>
                            <span className="block text-xs uppercase text-gray-500 dark:text-gray-400 mb-1">Contact</span>
                            <span className="text-gray-800 dark:text-white">{market.contactInfo}</span>
                          </div>
                          <button className="px-3 py-1 text-sm text-green-600 dark:text-green-400 border border-green-500 rounded-lg">
                            Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'stories' && (
              <div>
                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg mb-8">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Farmer Success Stories</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Learn from farmers who have successfully implemented market access strategies to improve their businesses.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {successStories.map(story => (
                    <div key={story.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md">
                      <div className="h-56 overflow-hidden">
                        <img 
                          src={story.image} 
                          alt={story.farmerName} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{story.farmerName}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{story.location} • {story.crop}</p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{story.story}</p>
                        <button className="px-4 py-2 text-green-600 dark:text-green-400 border border-green-500 rounded-lg w-full">
                          Read Full Story
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAccessPage;
