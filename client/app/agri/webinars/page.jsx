"use client"

import React, { useState } from 'react';
import Link from 'next/link';

// Dummy data for upcoming webinars
const upcomingWebinars = [
  {
    id: 1,
    title: "Sustainable Irrigation Techniques for Small Farms",
    date: "2023-11-15T14:00:00",
    duration: "60 minutes",
    host: {
      name: "Dr. Rajiv Sharma",
      title: "Agricultural Water Management Expert",
      organization: "National Institute of Agricultural Extension",
      image: "https://randomuser.me/api/portraits/men/42.jpg"
    },
    attendees: 156,
    description: "Learn about innovative irrigation methods that conserve water while maintaining optimal crop growth. This webinar will cover drip irrigation, rainwater harvesting, and smart irrigation technologies suitable for small-scale farmers.",
    tags: ["irrigation", "sustainability", "water conservation"],
    isRegistered: true
  },
  {
    id: 2,
    title: "Organic Pest Management: Natural Predators and Companion Planting",
    date: "2023-11-18T10:30:00",
    duration: "90 minutes",
    host: {
      name: "Priya Verma",
      title: "Organic Farming Specialist",
      organization: "Green Earth Foundation",
      image: "https://randomuser.me/api/portraits/women/58.jpg"
    },
    attendees: 97,
    description: "Discover how to control pests organically using natural predators, companion planting strategies, and homemade organic pesticides. Learn to identify beneficial insects and create a balanced ecosystem on your farm.",
    tags: ["organic", "pest control", "companion planting"],
    isRegistered: false
  },
  {
    id: 3,
    title: "Climate-Resilient Agriculture: Adapting to Changing Weather Patterns",
    date: "2023-11-22T15:00:00",
    duration: "75 minutes",
    host: {
      name: "Dr. Anand Patel",
      title: "Climate Scientist",
      organization: "Agricultural Climate Research Center",
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    },
    attendees: 203,
    description: "Learn strategies to make your farming practices more resilient to changing climate conditions. We'll cover drought-resistant crop varieties, modified planting schedules, and risk management approaches.",
    tags: ["climate change", "resilience", "adaptation"],
    isRegistered: false
  }
];

// Dummy data for past webinars
const pastWebinars = [
  {
    id: 101,
    title: "Soil Health Management: Building Fertility Naturally",
    date: "2023-10-28T11:00:00",
    duration: "65 minutes",
    host: {
      name: "Dr. Meena Reddy",
      title: "Soil Scientist",
      organization: "Agricultural Soils Institute",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    attendees: 187,
    views: 345,
    description: "This webinar covers the fundamentals of maintaining and improving soil health using natural methods. Learn about composting, cover crops, minimal tillage, and soil testing.",
    tags: ["soil health", "composting", "fertility"],
    recordingUrl: "/videos/soil-health-webinar.mp4",
    resources: [
      { name: "Soil Health Assessment Guide", type: "PDF" },
      { name: "Composting Basics Handout", type: "PDF" },
      { name: "Cover Crops Selection Tool", type: "Interactive" }
    ]
  },
  {
    id: 102,
    title: "Market Access Strategies for Small-Scale Farmers",
    date: "2023-10-20T15:30:00",
    duration: "70 minutes",
    host: {
      name: "Vikram Choudhary",
      title: "Agricultural Economics Expert",
      organization: "Farmers' Cooperative Alliance",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    attendees: 145,
    views: 290,
    description: "Learn effective strategies to access better markets for your produce. This webinar covers direct-to-consumer sales, farmers' markets, food hubs, and leveraging digital platforms.",
    tags: ["market access", "sales", "economics"],
    recordingUrl: "/videos/market-access-webinar.mp4",
    resources: [
      { name: "Market Selection Worksheet", type: "Excel" },
      { name: "Digital Marketing Guide for Farmers", type: "PDF" }
    ]
  },
  {
    id: 103,
    title: "Livestock Integration in Crop Farming Systems",
    date: "2023-10-14T13:00:00",
    duration: "80 minutes",
    host: {
      name: "Dr. Aisha Khan",
      title: "Integrated Farming Systems Specialist",
      organization: "Sustainable Agriculture Institute",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    attendees: 132,
    views: 276,
    description: "Discover the benefits of integrating livestock with crop production. This webinar explores rotational grazing, manure management, and selecting appropriate livestock for your farming system.",
    tags: ["livestock", "integration", "diversification"],
    recordingUrl: "/videos/livestock-integration-webinar.mp4",
    resources: [
      { name: "Rotational Grazing Planning Tool", type: "PDF" },
      { name: "Livestock Selection Guide", type: "PDF" },
      { name: "Manure Management Best Practices", type: "PDF" }
    ]
  }
];

// Dummy data for featured experts
const featuredExperts = [
  {
    id: 201,
    name: "Dr. Suresh Kumar",
    specialty: "Soil Science",
    organization: "National Agricultural Research Institute",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    experience: "15+ years",
    bio: "Dr. Kumar specializes in soil health and fertility management with a focus on sustainable practices for tropical regions.",
    upcomingWebinars: 2
  },
  {
    id: 202,
    name: "Lakshmi Narayanan",
    specialty: "Organic Farming",
    organization: "Traditional Farming Collective",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    experience: "20+ years",
    bio: "Lakshmi is an expert in traditional and indigenous farming practices, specializing in organic pest management and seed preservation.",
    upcomingWebinars: 1
  },
  {
    id: 203,
    name: "Dr. Mohammad Farooq",
    specialty: "Agricultural Technology",
    organization: "AgTech Innovation Center",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    experience: "12+ years",
    bio: "Dr. Farooq focuses on affordable technology solutions for small-scale farmers, including IoT applications and mobile-based decision support tools.",
    upcomingWebinars: 1
  }
];

const formatDate = (dateString) => {
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const WebinarsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  
  const allTags = [...new Set([
    ...upcomingWebinars.flatMap(webinar => webinar.tags),
    ...pastWebinars.flatMap(webinar => webinar.tags)
  ])];
  
  const filteredUpcomingWebinars = selectedTags.length === 0 
    ? upcomingWebinars 
    : upcomingWebinars.filter(webinar => 
        webinar.tags.some(tag => selectedTags.includes(tag))
      );
      
  const filteredPastWebinars = selectedTags.length === 0 
    ? pastWebinars 
    : pastWebinars.filter(webinar => 
        webinar.tags.some(tag => selectedTags.includes(tag))
      );
  
  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  const submitQuestion = (e) => {
    e.preventDefault();
    // In a real app, this would send the question to a backend
    alert('Your question has been submitted!');
    setQuestion('');
    setEmail('');
    setShowQuestionForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 p-6 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f]">
      <div className="max-w-6xl mx-auto">
        <Link href="/agri" className="inline-flex items-center text-green-600 dark:text-green-400 mb-6 hover:underline">
          <i className="fas fa-arrow-left mr-2"></i> Back to Dashboard
        </Link>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Live Webinars & Expert Q&A</h1>
          <p className="text-gray-600 dark:text-gray-400">Join weekly discussions with agricultural professionals and get your farming questions answered</p>
        </div>
        
        {/* Upcoming Featured Webinar */}
        {upcomingWebinars.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-10">
            <div className="md:flex">
              <div className="md:w-2/3 p-6">
                <div className="flex items-center mb-2">
                  <span className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">LIVE</span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Upcoming Featured Webinar</span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">{upcomingWebinars[0].title}</h2>
                
                <div className="flex items-center mb-4">
                  <img 
                    src={upcomingWebinars[0].host.image} 
                    alt={upcomingWebinars[0].host.name} 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">{upcomingWebinars[0].host.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{upcomingWebinars[0].host.title}, {upcomingWebinars[0].host.organization}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">{upcomingWebinars[0].description}</p>
                
                <div className="flex flex-wrap items-center mb-6">
                  <div className="flex items-center mr-6 mb-2">
                    <i className="far fa-calendar-alt text-green-600 dark:text-green-400 mr-2"></i>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{formatDate(upcomingWebinars[0].date)}</span>
                  </div>
                  <div className="flex items-center mr-6 mb-2">
                    <i className="far fa-clock text-green-600 dark:text-green-400 mr-2"></i>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{upcomingWebinars[0].duration}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <i className="fas fa-user-friends text-green-600 dark:text-green-400 mr-2"></i>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{upcomingWebinars[0].attendees} attendees registered</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {upcomingWebinars[0].tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-x-3">
                  <button className={`px-4 py-2 rounded-lg ${
                    upcomingWebinars[0].isRegistered 
                      ? 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}>
                    {upcomingWebinars[0].isRegistered ? 'Registered' : 'Register Now'}
                  </button>
                  
                  <button className="px-4 py-2 border border-green-500 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/30">
                    Add to Calendar
                  </button>
                  
                  <button 
                    onClick={() => setShowQuestionForm(true)}
                    className="px-4 py-2 border border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  >
                    Submit a Question
                  </button>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-green-50 dark:bg-green-900/20 p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">
                    {new Date(upcomingWebinars[0].date).getDate()}
                  </div>
                  <div className="text-xl font-medium text-green-600 dark:text-green-400 mb-4">
                    {new Date(upcomingWebinars[0].date).toLocaleString('default', { month: 'long' })}
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Starts in:</p>
                    <div className="flex justify-center space-x-2 text-lg font-bold text-gray-800 dark:text-white">
                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">3</div>
                      <div>:</div>
                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">18</div>
                      <div>:</div>
                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">45</div>
                    </div>
                    <div className="flex justify-center space-x-2 text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span className="w-8 text-center">Days</span>
                      <span className="w-8 text-center">Hours</span>
                      <span className="w-8 text-center">Mins</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Question submission form */}
        {showQuestionForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Submit Your Question</h3>
              <form onSubmit={submitQuestion}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Question
                  </label>
                  <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    rows={4}
                    placeholder="What would you like to ask the speaker?"
                    required
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    placeholder="We'll notify you when your question is answered"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    We'll never share your email with anyone else.
                  </p>
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowQuestionForm(false)}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                  >
                    Submit Question
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        
        {/* Navigation tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`py-4 px-1 ${
                  activeTab === 'upcoming'
                    ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Upcoming Webinars
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`py-4 px-1 ${
                  activeTab === 'past'
                    ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Past Recordings
              </button>
              <button
                onClick={() => setActiveTab('experts')}
                className={`py-4 px-1 ${
                  activeTab === 'experts'
                    ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Featured Experts
              </button>
            </nav>
          </div>
        </div>
        
        {/* Tag filters */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Filter by topics:</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTags.includes(tag)
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                #{tag}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
        
        {/* Upcoming webinars tab */}
        {activeTab === 'upcoming' && (
          <div className="space-y-6">
            {filteredUpcomingWebinars.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <i className="fas fa-calendar-times text-gray-400 text-4xl mb-4"></i>
                <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">No upcoming webinars match your filters</h3>
                <p className="text-gray-600 dark:text-gray-400">Try selecting different topics or clear your filters</p>
              </div>
            ) : (
              filteredUpcomingWebinars.map((webinar, index) => (
                index === 0 ? null : (
                  <div key={webinar.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{webinar.title}</h3>
                      
                      <div className="flex items-center mb-4">
                        <img 
                          src={webinar.host.image} 
                          alt={webinar.host.name} 
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Hosted by <span className="font-medium text-gray-800 dark:text-white">{webinar.host.name}</span>
                        </p>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{webinar.description}</p>
                      
                      <div className="flex flex-wrap items-center mb-4">
                        <div className="flex items-center mr-6 mb-2">
                          <i className="far fa-calendar-alt text-green-600 dark:text-green-400 mr-2"></i>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{formatDate(webinar.date)}</span>
                        </div>
                        <div className="flex items-center mr-6 mb-2">
                          <i className="far fa-clock text-green-600 dark:text-green-400 mr-2"></i>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{webinar.duration}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <i className="fas fa-user-friends text-green-600 dark:text-green-400 mr-2"></i>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{webinar.attendees} attendees</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {webinar.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-medium px-2.5 py-0.5 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        <button className={`px-4 py-2 rounded-lg ${
                          webinar.isRegistered 
                            ? 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                            : 'bg-green-600 hover:bg-green-700 text-white'
                        }`}>
                          {webinar.isRegistered ? 'Registered' : 'Register Now'}
                        </button>
                        
                        <button className="px-4 py-2 border border-green-500 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/30">
                          Add to Calendar
                        </button>
                        
                        <button 
                          onClick={() => setShowQuestionForm(true)}
                          className="px-4 py-2 border border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30"
                        >
                          Submit a Question
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )).filter(Boolean)
            )}
          </div>
        )}
        
        {/* Past webinars tab */}
        {activeTab === 'past' && (
          <div className="space-y-6">
            {filteredPastWebinars.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
                <i className="fas fa-video-slash text-gray-400 text-4xl mb-4"></i>
                <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">No past recordings match your filters</h3>
                <p className="text-gray-600 dark:text-gray-400">Try selecting different topics or clear your filters</p>
              </div>
            ) : (
              filteredPastWebinars.map(webinar => (
                <div key={webinar.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gray-100 dark:bg-gray-900 relative">
                      <div className="h-48 md:h-full w-full flex items-center justify-center">
                        <div className="absolute inset-0 z-0 bg-gradient-to-br from-green-500/20 to-blue-500/20"></div>
                        <button className="z-10 w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg">
                          <i className="fas fa-play ml-1"></i>
                        </button>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center mb-1">
                        <span className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">
                          RECORDED
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-xs">
                          {formatDate(webinar.date)}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{webinar.title}</h3>
                      
                      <div className="flex items-center mb-3">
                        <img 
                          src={webinar.host.image} 
                          alt={webinar.host.name} 
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Presented by <span className="font-medium text-gray-800 dark:text-white">{webinar.host.name}</span>
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap items-center mb-3">
                        <div className="flex items-center mr-4 mb-2">
                          <i className="far fa-clock text-gray-500 dark:text-gray-400 mr-1"></i>
                          <span className="text-xs text-gray-600 dark:text-gray-400">{webinar.duration}</span>
                        </div>
                        <div className="flex items-center mr-4 mb-2">
                          <i className="fas fa-user-friends text-gray-500 dark:text-gray-400 mr-1"></i>
                          <span className="text-xs text-gray-600 dark:text-gray-400">{webinar.attendees} attendees</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <i className="fas fa-eye text-gray-500 dark:text-gray-400 mr-1"></i>
                          <span className="text-xs text-gray-600 dark:text-gray-400">{webinar.views} views</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {webinar.tags.map(tag => (
                          <span 
                            key={tag} 
                            className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Resources:</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {webinar.resources.map((resource, index) => (
                          <button 
                            key={index}
                            className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs rounded-full"
                          >
                            {resource.type === 'PDF' && <i className="fas fa-file-pdf mr-1 text-red-500"></i>}
                            {resource.type === 'Excel' && <i className="fas fa-file-excel mr-1 text-green-500"></i>}
                            {resource.type === 'Interactive' && <i className="fas fa-laptop-code mr-1 text-blue-500"></i>}
                            {resource.name}
                          </button>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                          Watch Recording
                        </button>
                        <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                          Download Slides
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
        
        {/* Experts tab */}
        {activeTab === 'experts' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredExperts.map(expert => (
              <div key={expert.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="p-1 bg-gradient-to-r from-green-400 to-blue-500"></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={expert.image} 
                      alt={expert.name} 
                      className="w-16 h-16 rounded-full mr-4 border-2 border-white dark:border-gray-700 shadow-md"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">{expert.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{expert.specialty}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{expert.organization}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs rounded-full">
                      {expert.experience} experience
                    </div>
                    <div className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                      {expert.upcomingWebinars} upcoming {expert.upcomingWebinars === 1 ? 'session' : 'sessions'}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    {expert.bio}
                  </p>
                  
                  <div className="flex space-x-2">
                    <button className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm">
                      View Profile
                    </button>
                    <button className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-sm">
                      Ask a Question
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Newsletter signup */}
        <div className="mt-12 bg-gradient-to-r from-green-700 to-green-900 dark:from-emerald-900 dark:to-green-800 text-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-bold mb-2">Never Miss a Webinar</h3>
              <p className="mb-6 text-green-100">Subscribe to our newsletter to get notifications about upcoming webinars and expert sessions.</p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
                />
                <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-medium rounded-lg whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              
              <p className="mt-3 text-xs text-green-200">
                We'll send you updates about upcoming webinars and learning resources. You can unsubscribe at any time.
              </p>
            </div>
            
            <div className="md:w-1/3 bg-green-800 dark:bg-green-950 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">📅</div>
                <p className="text-lg font-medium">New webinars every week</p>
                <p className="text-sm text-green-200">Join live or watch recordings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarsPage;
