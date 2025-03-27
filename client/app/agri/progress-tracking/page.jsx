"use client"

import React, { useState } from 'react';
import Link from 'next/link';

// Dummy data for overall progress stats
const progressStats = {
  coursesCompleted: 7,
  coursesInProgress: 3,
  totalHoursLearned: 48,
  averageScore: 82,
  streak: 12, // Days in a row of learning
  skillsImproved: 14,
  certificatesEarned: 4
};

// Dummy data for skills
const skillsData = [
  { id: 1, name: "Sustainable Irrigation", level: 75, recentImprovement: 12 },
  { id: 2, name: "Organic Pest Control", level: 90, recentImprovement: 5 },
  { id: 3, name: "Soil Management", level: 60, recentImprovement: 20 },
  { id: 4, name: "Crop Rotation", level: 85, recentImprovement: 8 },
  { id: 5, name: "Climate Adaptation", level: 45, recentImprovement: 15 },
  { id: 6, name: "Livestock Integration", level: 30, recentImprovement: 10 }
];

// Dummy data for current courses
const currentCoursesData = [
  {
    id: 1,
    title: "Advanced Water Conservation Techniques",
    progress: 75,
    deadline: "2023-12-20",
    lastActivity: "2023-11-08",
    nextUnit: "Groundwater Management"
  },
  {
    id: 2,
    title: "Organic Certification Process",
    progress: 45,
    deadline: "2023-12-10",
    lastActivity: "2023-11-10",
    nextUnit: "Documentation Requirements"
  },
  {
    id: 3,
    title: "Agricultural Market Analysis",
    progress: 20,
    deadline: "2024-01-15",
    lastActivity: "2023-11-09",
    nextUnit: "Price Trend Analysis"
  }
];

// Dummy data for recent activities
const recentActivities = [
  { id: 1, type: "course_progress", title: "Completed Module 3 in Water Conservation", date: "2023-11-10", icon: "📚" },
  { id: 2, type: "quiz_completed", title: "Scored 92% on Pest Management Quiz", date: "2023-11-09", icon: "✅" },
  { id: 3, type: "certificate", title: "Earned Basic Soil Management Certificate", date: "2023-11-07", icon: "🏆" },
  { id: 4, type: "assessment", title: "Completed Farming Practices Assessment", date: "2023-11-05", icon: "📝" },
  { id: 5, type: "webinar", title: "Attended Climate Change Adaptation Webinar", date: "2023-11-03", icon: "👥" }
];

// Dummy data for learning path
const learningPathData = [
  { id: 1, title: "Fundamentals of Sustainable Farming", completed: true },
  { id: 2, title: "Water Management Essentials", completed: true },
  { id: 3, title: "Advanced Irrigation Techniques", completed: false, current: true },
  { id: 4, title: "Soil Health and Regeneration", completed: false },
  { id: 5, title: "Organic Farming Certification", completed: false },
  { id: 6, title: "Climate-Smart Agriculture", completed: false }
];

// Dummy recommendations
const recommendations = [
  { id: 1, title: "Drip Irrigation Systems", reason: "Based on your interest in water conservation" },
  { id: 2, title: "Advanced Composting Techniques", reason: "Complement your soil management skills" },
  { id: 3, title: "Climate Monitoring Tools", reason: "Improve your lowest-scoring area" }
];

const ProgressTrackingPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Helper function to format dates
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 p-6 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f]">
      <div className="max-w-6xl mx-auto">
        <Link href="/agri" className="inline-flex items-center text-green-600 dark:text-green-400 mb-6 hover:underline">
          <i className="fas fa-arrow-left mr-2"></i> Back to Dashboard
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Your Learning Progress</h1>
            <p className="text-gray-600 dark:text-gray-400">Track your agricultural learning journey and skill improvement</p>
          </div>
          
          <div className="mt-4 md:mt-0 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-md">
            <div className="flex items-center">
              <div className="flex flex-col items-center mr-6">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">{progressStats.streak}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Day streak</span>
              </div>
              
              <div className="h-10 w-0.5 bg-gray-200 dark:bg-gray-700 mx-2"></div>
              
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">{progressStats.averageScore}%</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Avg. score</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'overview'
                  ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'courses'
                  ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Current Courses
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'skills'
                  ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Skills & Competencies
            </button>
            <button
              onClick={() => setActiveTab('path')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'path'
                  ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              Learning Path
            </button>
          </div>
        </div>
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Courses Completed</h3>
                  <span className="text-3xl text-green-500 dark:text-green-400">📚</span>
                </div>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">{progressStats.coursesCompleted}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {progressStats.coursesInProgress} in progress
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Learning Hours</h3>
                  <span className="text-3xl text-blue-500 dark:text-blue-400">⏱️</span>
                </div>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">{progressStats.totalHoursLearned}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Total hours of content consumed
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Skills Improved</h3>
                  <span className="text-3xl text-purple-500 dark:text-purple-400">📈</span>
                </div>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">{progressStats.skillsImproved}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Across {skillsData.length} tracked competencies
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Certificates</h3>
                  <span className="text-3xl text-amber-500 dark:text-amber-400">🏆</span>
                </div>
                <p className="text-3xl font-bold text-gray-800 dark:text-white">{progressStats.certificatesEarned}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Certifications earned so far
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="md:col-span-2 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-xl">
                        {activity.icon}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-800 dark:text-white">{activity.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <button className="text-green-600 dark:text-green-400 text-sm font-medium hover:underline">
                    View All Activity
                  </button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Recommended Next Steps</h3>
                <div className="space-y-4">
                  {recommendations.map((rec) => (
                    <div key={rec.id} className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800 dark:text-white">{rec.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{rec.reason}</p>
                      <button className="mt-2 text-green-600 dark:text-green-400 text-sm font-medium hover:underline">
                        Explore
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Current Courses Tab */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-6">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Your Current Learning Journey</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Track your progress on courses you're currently taking</p>
            </div>
            
            {currentCoursesData.map((course) => (
              <div 
                key={course.id} 
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">{course.title}</h3>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center mr-4">
                        <span className="text-gray-500 dark:text-gray-400 mr-1">📅</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Deadline: {formatDate(course.deadline)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">
                      Continue Learning
                    </button>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-col sm:flex-row sm:justify-between text-sm">
                  <div className="mb-2 sm:mb-0">
                    <span className="text-gray-600 dark:text-gray-400">Last activity: </span>
                    <span className="text-gray-800 dark:text-white">{formatDate(course.lastActivity)}</span>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Next unit: </span>
                    <span className="text-gray-800 dark:text-white">{course.nextUnit}</span>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md">
                Browse More Courses
              </button>
            </div>
          </div>
        )}
        
        {/* Skills & Competencies Tab */}
        {activeTab === 'skills' && (
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-6">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Skills & Competency Tracking</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Monitor your agricultural knowledge areas and identify growth opportunities</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillsData.map((skill) => (
                <div key={skill.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
                    <div className="text-sm font-medium text-green-600 dark:text-green-400">
                      {skill.recentImprovement > 0 && (
                        <span className="flex items-center">
                          <i className="fas fa-arrow-up mr-1"></i> +{skill.recentImprovement}%
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
                      <div 
                        className={`h-4 rounded-full ${
                          skill.level >= 80 ? 'bg-green-500' : 
                          skill.level >= 60 ? 'bg-blue-500' : 
                          skill.level >= 40 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-gray-500 dark:text-gray-400">Beginner</span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.level}%</span>
                      <span className="text-gray-500 dark:text-gray-400">Expert</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <button className="w-full py-2 text-sm text-center text-green-600 dark:text-green-400 border border-green-300 dark:border-green-700 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/30">
                      Improve this skill
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md">
                Take Skills Assessment
              </button>
            </div>
          </div>
        )}
        
        {/* Learning Path Tab */}
        {activeTab === 'path' && (
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-6">
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Your Personalized Learning Path</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Follow this recommended sequence to build your agricultural expertise</p>
            </div>
            
            <div className="relative">
              {/* Vertical line connecting learning path items */}
              <div className="absolute left-6 top-0 bottom-0 w-1 bg-green-200 dark:bg-green-900/50"></div>
              
              <div className="space-y-6">
                {learningPathData.map((pathItem, index) => (
                  <div key={pathItem.id} className="relative">
                    <div 
                      className={`absolute left-6 w-12 h-12 rounded-full transform -translate-x-1/2 flex items-center justify-center ${
                        pathItem.completed 
                          ? 'bg-green-500 text-white' 
                          : pathItem.current
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {pathItem.completed ? (
                        <i className="fas fa-check"></i>
                      ) : pathItem.current ? (
                        <i className="fas fa-play"></i>
                      ) : (
                        index + 1
                      )}
                    </div>
                    
                    <div className="ml-16 bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
                      <h3 className={`font-medium ${
                        pathItem.completed 
                          ? 'text-green-600 dark:text-green-400 line-through' 
                          : pathItem.current
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-gray-800 dark:text-white'
                      }`}>
                        {pathItem.title}
                      </h3>
                      
                      {pathItem.current && (
                        <div className="mt-3">
                          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm">
                            Continue Learning
                          </button>
                        </div>
                      )}
                      
                      {!pathItem.completed && !pathItem.current && (
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          Complete previous modules to unlock
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md">
                Customize Learning Path
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressTrackingPage;
