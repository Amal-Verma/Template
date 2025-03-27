"use client"

import React, { useState } from 'react';
import Link from 'next/link';

// Dummy data for learning modules
const modules = [
  {
    id: 1,
    title: "Crop Rotation Fundamentals",
    description: "Learn the basics of crop rotation and how it can improve your soil health and crop yields.",
    duration: "45 minutes",
    level: "Beginner",
    modules: 3,
    quizzes: 2,
    thumbnail: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    progress: 75,
  },
  {
    id: 2,
    title: "Water Management in Dry Seasons",
    description: "Master techniques for water conservation and irrigation during droughts and dry seasons.",
    duration: "60 minutes",
    level: "Intermediate",
    modules: 5,
    quizzes: 3,
    thumbnail: "https://images.unsplash.com/photo-1559905493-5c95ba47e3c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    progress: 30,
  },
  {
    id: 3,
    title: "Organic Pest Control Methods",
    description: "Discover eco-friendly approaches to manage pests without synthetic chemicals.",
    duration: "50 minutes",
    level: "Advanced",
    modules: 4,
    quizzes: 2,
    thumbnail: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    progress: 0,
  },
  {
    id: 4,
    title: "Soil Health Assessment",
    description: "Learn how to test and evaluate your soil's health and nutrient content using simple methods.",
    duration: "35 minutes",
    level: "Beginner",
    modules: 3,
    quizzes: 1,
    thumbnail: "https://images.unsplash.com/photo-1618681317438-a8dd7da06cd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    progress: 100,
  },
];

// Quiz dummy data for the active module
const quizData = [
  {
    id: 1,
    question: "Which of the following crops is best to plant after harvesting tomatoes?",
    options: [
      "More tomatoes",
      "Beans or legumes",
      "Peppers",
      "Eggplant"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "How does crop rotation help soil health?",
    options: [
      "It depletes all nutrients equally",
      "It prevents the buildup of pathogens and pests",
      "It makes the soil more compact",
      "It increases water runoff"
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What is the recommended minimum length of time before planting the same crop family in the same location?",
    options: [
      "1 month",
      "6 months",
      "1 year",
      "3-4 years"
    ],
    correctAnswer: 3
  }
];

const LearningModulesPage = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [activeTab, setActiveTab] = useState('content');
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleModuleSelect = (module) => {
    setActiveModule(module);
    setActiveTab('content');
    setCurrentQuiz(0);
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex
    });
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    quizData.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / quizData.length) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 p-6 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-300">
          Interactive Learning Modules
        </h1>
        
        {!activeModule ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <div 
                key={module.id} 
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={module.thumbnail} 
                    alt={module.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                      {module.level}
                    </span>
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {module.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{module.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{module.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <span className="mr-4">
                      <i className="fas fa-book-open mr-1"></i> {module.modules} Lessons
                    </span>
                    <span>
                      <i className="fas fa-question-circle mr-1"></i> {module.quizzes} Quizzes
                    </span>
                  </div>
                  
                  {module.progress > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600 dark:text-gray-400">Progress</span>
                        <span className="text-green-600 dark:text-green-400">{module.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${module.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <button
                    onClick={() => handleModuleSelect(module)}
                    className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-300"
                  >
                    {module.progress === 100 ? 'Review' : module.progress > 0 ? 'Continue' : 'Start Learning'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => setActiveModule(null)}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  <i className="fas fa-arrow-left mr-2"></i> Back to Modules
                </button>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Module {activeModule.id} of {modules.length}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-3">{activeModule.title}</h2>
              <div className="flex items-center mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="mr-4">
                  <i className="fas fa-clock mr-1"></i> {activeModule.duration}
                </span>
                <span className="mr-4">
                  <i className="fas fa-signal mr-1"></i> {activeModule.level}
                </span>
                <span>
                  <i className="fas fa-question-circle mr-1"></i> {activeModule.quizzes} Quizzes
                </span>
              </div>
            </div>
            
            <div className="border-b border-gray-200 dark:border-gray-700">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('content')}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'content'
                      ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Content
                </button>
                <button
                  onClick={() => setActiveTab('quiz')}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'quiz'
                      ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Quiz
                </button>
                <button
                  onClick={() => setActiveTab('resources')}
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === 'resources'
                      ? 'border-b-2 border-green-500 text-green-600 dark:text-green-400'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  Resources
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {activeTab === 'content' && (
                <div>
                  <div className="aspect-w-16 aspect-h-9 mb-6">
                    <iframe 
                      className="w-full h-[400px] rounded-lg"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="Video Tutorial"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  <div className="prose max-w-none dark:prose-invert prose-lg">
                    <h3>Module Overview</h3>
                    <p>In this module, you'll learn about the importance of crop rotation and how to implement it effectively on your farm. Crop rotation is a systematic approach to deciding which crop to plant where in your vegetable garden from one season to the next.</p>
                    
                    <h3>Key Benefits of Crop Rotation</h3>
                    <ul>
                      <li>Disrupts pest and disease cycles</li>
                      <li>Improves soil structure and fertility</li>
                      <li>Reduces dependence on synthetic fertilizers</li>
                      <li>Manages soil erosion</li>
                      <li>Increases biodiversity on your farm</li>
                    </ul>
                    
                    <h3>Basic Principles</h3>
                    <p>The basic principle of crop rotation is to avoid growing crops from the same family in the same place for consecutive seasons. Different plant families have different nutrient needs and are susceptible to different pests and diseases.</p>
                    
                    <h3>Practical Exercise</h3>
                    <p>Create a simple crop rotation plan for your farm using the worksheet provided in the resources section. Map out your growing areas and plan what to plant in each area for the next 3-4 seasons.</p>
                  </div>
                  
                  <div className="flex justify-between mt-8">
                    <button className="px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50" disabled>
                      <i className="fas fa-arrow-left mr-2"></i> Previous Lesson
                    </button>
                    <button 
                      onClick={() => setActiveTab('quiz')}
                      className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                    >
                      Take Quiz <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'quiz' && (
                <div>
                  {quizSubmitted ? (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 dark:bg-green-900 mb-6">
                        <span className="text-2xl font-bold text-green-600 dark:text-green-400">{calculateScore()}%</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {calculateScore() >= 70 ? 'Congratulations!' : 'Keep Learning!'}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {calculateScore() >= 70 
                          ? 'You\'ve successfully completed this quiz and demonstrated your understanding of crop rotation principles.'
                          : 'You might need to review the content again to better understand crop rotation concepts.'}
                      </p>
                      
                      <div className="flex justify-center space-x-4">
                        <button
                          onClick={() => {
                            setQuizSubmitted(false);
                            setSelectedAnswers({});
                          }}
                          className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg"
                        >
                          Try Again
                        </button>
                        <button
                          onClick={() => setActiveTab('content')}
                          className="px-4 py-2 border border-green-500 text-green-600 dark:text-green-400 rounded-lg"
                        >
                          Review Content
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Quiz: Crop Rotation Fundamentals</h3>
                      
                      {quizData.map((quiz, index) => (
                        <div key={quiz.id} className="mb-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
                          <p className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                            {index + 1}. {quiz.question}
                          </p>
                          <div className="space-y-3">
                            {quiz.options.map((option, optionIndex) => (
                              <div 
                                key={optionIndex}
                                className={`p-3 border rounded-lg cursor-pointer transition-colors duration-200 ${
                                  selectedAnswers[quiz.id] === optionIndex
                                    ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                                }`}
                                onClick={() => handleAnswerSelect(quiz.id, optionIndex)}
                              >
                                <div className="flex items-center">
                                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                                    selectedAnswers[quiz.id] === optionIndex
                                      ? 'border-green-500 bg-green-500'
                                      : 'border-gray-300 dark:border-gray-600'
                                  }`}>
                                    {selectedAnswers[quiz.id] === optionIndex && (
                                      <span className="text-white text-xs">✓</span>
                                    )}
                                  </div>
                                  <span className="text-gray-700 dark:text-gray-300">{option}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                      
                      <button
                        onClick={handleQuizSubmit}
                        disabled={Object.keys(selectedAnswers).length < quizData.length}
                        className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:bg-gray-400"
                      >
                        Submit Quiz
                      </button>
                    </div>
                  )}
                </div>
              )}
              
              {activeTab === 'resources' && (
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Additional Resources</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center">
                        <div className="bg-green-100 dark:bg-green-900 p-3 rounded">
                          <i className="fas fa-file-pdf text-green-600 dark:text-green-400 text-xl"></i>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-800 dark:text-white">Crop Rotation Planning Worksheet</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">PDF, 2.3 MB</p>
                        </div>
                        <button className="ml-auto px-3 py-1 text-sm text-green-600 dark:text-green-400 border border-green-500 rounded">
                          Download
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center">
                        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded">
                          <i className="fas fa-link text-blue-600 dark:text-blue-400 text-xl"></i>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-800 dark:text-white">Companion Planting Guide</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">External Resource</p>
                        </div>
                        <button className="ml-auto px-3 py-1 text-sm text-blue-600 dark:text-blue-400 border border-blue-500 rounded">
                          Visit
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                      <div className="flex items-center">
                        <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded">
                          <i className="fas fa-table text-yellow-600 dark:text-yellow-400 text-xl"></i>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-800 dark:text-white">Crop Family Reference Chart</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Excel, 1.1 MB</p>
                        </div>
                        <button className="ml-auto px-3 py-1 text-sm text-yellow-600 dark:text-yellow-400 border border-yellow-500 rounded">
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningModulesPage;
