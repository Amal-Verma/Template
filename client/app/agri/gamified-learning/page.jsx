"use client"

import React, { useState } from 'react';
import Link from 'next/link';

// Dummy data for badges and achievements
const badges = [
  {
    id: 1,
    name: "Soil Master",
    description: "Complete all soil management courses",
    icon: "🌱",
    color: "bg-amber-100 dark:bg-amber-900",
    textColor: "text-amber-800 dark:text-amber-200",
    progress: 75,
    unlocked: true,
  },
  {
    id: 2,
    name: "Water Wizard",
    description: "Master water conservation techniques",
    icon: "💧",
    color: "bg-blue-100 dark:bg-blue-900",
    textColor: "text-blue-800 dark:text-blue-200",
    progress: 100,
    unlocked: true,
  },
  {
    id: 3,
    name: "Pest Controller",
    description: "Complete the pest management series",
    icon: "🐛",
    color: "bg-green-100 dark:bg-green-900",
    textColor: "text-green-800 dark:text-green-200",
    progress: 40,
    unlocked: false,
  },
  {
    id: 4,
    name: "Harvest Champion",
    description: "Successfully complete the harvest timing module",
    icon: "🌾",
    color: "bg-yellow-100 dark:bg-yellow-900",
    textColor: "text-yellow-800 dark:text-yellow-200",
    progress: 90,
    unlocked: true,
  },
  {
    id: 5,
    name: "Organic Advocate",
    description: "Master all organic farming techniques",
    icon: "🌿",
    color: "bg-emerald-100 dark:bg-emerald-900",
    textColor: "text-emerald-800 dark:text-emerald-200",
    progress: 20,
    unlocked: false,
  },
  {
    id: 6,
    name: "Tech Farmer",
    description: "Complete all technology integration modules",
    icon: "📱",
    color: "bg-purple-100 dark:bg-purple-900",
    textColor: "text-purple-800 dark:text-purple-200",
    progress: 60,
    unlocked: false,
  },
];

// Dummy data for leaderboard
const leaderboard = [
  { id: 1, name: "Aditya Singh", points: 8750, avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Priya Sharma", points: 7920, avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "Rajesh Kumar", points: 7600, avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 4, name: "You", points: 6840, avatar: "https://randomuser.me/api/portraits/men/11.jpg", isCurrentUser: true },
  { id: 5, name: "Ananya Patel", points: 6250, avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
  { id: 6, name: "Vikram Reddy", points: 5980, avatar: "https://randomuser.me/api/portraits/men/33.jpg" },
];

// Dummy data for courses with rewards
const coursesWithRewards = [
  {
    id: 1,
    title: "Sustainable Irrigation Practices",
    points: 200,
    badge: "Water Conservationist",
    progress: 65,
    daysLeft: 3,
  },
  {
    id: 2,
    title: "Organic Pest Control Methods",
    points: 250,
    badge: "Organic Guardian",
    progress: 30,
    daysLeft: 7,
  },
  {
    id: 3,
    title: "Crop Rotation Fundamentals",
    points: 150,
    badge: "Rotation Expert",
    progress: 100,
    completed: true,
  },
  {
    id: 4,
    title: "Soil Health Improvement",
    points: 300,
    badge: "Soil Scientist",
    progress: 80,
    daysLeft: 2,
  },
];

const GamifiedLearningPage = () => {
  const [activeTab, setActiveTab] = useState('badges');
  const totalPoints = 6840;
  const currentLevel = 12;
  const pointsToNextLevel = 500;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 p-6 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f]">
      <div className="max-w-6xl mx-auto">
        <Link href="/agri" className="inline-flex items-center text-green-600 dark:text-green-400 mb-6 hover:underline">
          <i className="fas fa-arrow-left mr-2"></i> Back to Dashboard
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Gamified Learning</h1>
            <p className="text-gray-600 dark:text-gray-400">Learn, earn points, and collect badges as you grow your farming knowledge</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md">
            <div className="mr-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Your Points</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">{totalPoints.toLocaleString()}</p>
            </div>
            <div className="h-12 w-0.5 bg-gray-200 dark:bg-gray-700 mx-4"></div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Level</p>
              <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{currentLevel}</p>
            </div>
          </div>
        </div>
        
        {/* Level progress bar */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Level {currentLevel}</span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Level {currentLevel + 1}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-amber-400 to-amber-600 h-4 rounded-full" 
              style={{ width: `70%` }}
            ></div>
          </div>
          <div className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            {pointsToNextLevel} more points to reach Level {currentLevel + 1}
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('badges')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'badges'
                  ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Badges & Achievements
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'leaderboard'
                  ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Leaderboard
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'courses'
                  ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Courses & Rewards
            </button>
          </div>
        </div>
        
        {/* Content based on active tab */}
        {activeTab === 'badges' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map((badge) => (
              <div 
                key={badge.id} 
                className={`rounded-lg p-6 shadow-md transition-transform hover:scale-105 ${
                  badge.unlocked 
                    ? 'bg-white dark:bg-gray-800' 
                    : 'bg-gray-100 dark:bg-gray-900/60 filter grayscale'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`w-14 h-14 rounded-full ${badge.color} flex items-center justify-center text-2xl mr-4 ${
                    badge.unlocked ? '' : 'opacity-50'
                  }`}>
                    {badge.icon}
                  </div>
                  <div>
                    <h3 className={`font-bold ${badge.unlocked ? 'text-gray-800 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                      {badge.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{badge.description}</p>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div 
                    className={`${badge.unlocked ? 'bg-green-500' : 'bg-gray-400 dark:bg-gray-600'} h-2.5 rounded-full`} 
                    style={{ width: `${badge.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500 dark:text-gray-400">Progress</span>
                  <span className={`${badge.unlocked ? badge.textColor : 'text-gray-500 dark:text-gray-400'}`}>
                    {badge.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {activeTab === 'leaderboard' && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-green-50 dark:bg-green-900/30">
              <h3 className="font-bold text-gray-800 dark:text-white">This Month's Top Farmers</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Compete with other farmers to earn more points</p>
            </div>
            
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {leaderboard.map((user, index) => (
                <li 
                  key={user.id} 
                  className={`p-4 ${user.isCurrentUser ? 'bg-green-50 dark:bg-green-900/20' : ''}`}
                >
                  <div className="flex items-center">
                    <div className="w-8 text-center font-bold text-gray-500 dark:text-gray-400">
                      #{index + 1}
                    </div>
                    <div className="h-10 w-10 rounded-full overflow-hidden ml-4">
                      <img src={user.avatar} alt={user.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="ml-4 flex-grow">
                      <p className={`font-medium ${user.isCurrentUser ? 'text-green-600 dark:text-green-400' : 'text-gray-800 dark:text-white'}`}>
                        {user.name} {user.isCurrentUser && '(You)'}
                      </p>
                    </div>
                    <div className="font-bold text-amber-600 dark:text-amber-400">
                      {user.points.toLocaleString()} pts
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="p-4 text-center">
              <button className="text-green-600 dark:text-green-400 font-medium hover:underline">
                View Full Leaderboard
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-6">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Current Courses & Rewards</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Complete courses to earn points and unlock special badges</p>
            </div>
            
            {coursesWithRewards.map((course) => (
              <div 
                key={course.id} 
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{course.title}</h3>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center mr-4">
                        <span className="text-amber-500 dark:text-amber-400 mr-1">🏆</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{course.points} points</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-blue-500 dark:text-blue-400 mr-1">🥇</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Badge: {course.badge}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    {course.completed ? (
                      <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-sm font-medium">
                        Completed
                      </span>
                    ) : (
                      <span className="text-sm text-orange-600 dark:text-orange-400 mr-4">
                        {course.daysLeft} days left
                      </span>
                    )}
                    <button
                      className={`ml-4 px-4 py-2 rounded-lg ${
                        course.completed 
                          ? 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400 cursor-default'
                          : 'bg-green-600 hover:bg-green-700 text-white'
                      }`}
                    >
                      {course.completed ? 'Completed' : 'Continue'}
                    </button>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md">
                Explore More Courses
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamifiedLearningPage;
