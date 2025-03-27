"use client"

import React, { useState, useRef } from 'react';
import Link from 'next/link';

// Dummy data for audio lessons
const audioLessons = [
  {
    id: 1,
    title: "Basics of Crop Rotation",
    description: "Learn how to implement crop rotation to improve soil health and reduce pests.",
    duration: "8:25",
    imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    audioUrl: "/audio/crop-rotation.mp3", // This would be a real audio file in production
    category: "soil",
    level: "beginner",
    transcriptAvailable: true,
    languageOptions: ["English", "Hindi", "Tamil"]
  },
  {
    id: 2,
    title: "Water Conservation Methods",
    description: "Discover the best practices for water conservation during dry seasons.",
    duration: "12:10",
    imageUrl: "https://images.unsplash.com/photo-1559905493-5c95ba47e3c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    audioUrl: "/audio/water-conservation.mp3",
    category: "water",
    level: "intermediate",
    transcriptAvailable: true,
    languageOptions: ["English", "Hindi", "Bengali", "Telugu"]
  },
  {
    id: 3,
    title: "Natural Pest Control",
    description: "Learn about organic methods to control pests without harmful chemicals.",
    duration: "15:45",
    imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    audioUrl: "/audio/pest-control.mp3",
    category: "pests",
    level: "intermediate",
    transcriptAvailable: false,
    languageOptions: ["English", "Hindi", "Marathi"]
  },
  {
    id: 4,
    title: "Seed Selection Guide",
    description: "How to select the right seeds for your specific growing conditions.",
    duration: "10:30",
    imageUrl: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    audioUrl: "/audio/seed-selection.mp3",
    category: "seeds",
    level: "beginner",
    transcriptAvailable: true,
    languageOptions: ["English", "Hindi", "Telugu", "Kannada"]
  },
  {
    id: 5,
    title: "Harvest Timing",
    description: "Learn when and how to harvest your crops for maximum yield and quality.",
    duration: "7:15",
    imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    audioUrl: "/audio/harvest-timing.mp3",
    category: "harvest",
    level: "advanced",
    transcriptAvailable: true,
    languageOptions: ["English", "Hindi", "Tamil", "Malayalam"]
  },
  {
    id: 6,
    title: "Understanding Soil Types",
    description: "Learn about different soil types and which crops grow best in each.",
    duration: "14:20",
    imageUrl: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    audioUrl: "/audio/soil-types.mp3",
    category: "soil",
    level: "beginner",
    transcriptAvailable: true,
    languageOptions: ["English", "Hindi", "Gujarati", "Punjabi"]
  },
];

// Dummy data for featured playlists
const featuredPlaylists = [
  { 
    id: 1, 
    title: "Beginner Farming Essentials", 
    lessons: 12, 
    duration: "1hr 45min",
    imageUrl: "https://images.unsplash.com/photo-1592982537447-53ac840cc61d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  { 
    id: 2, 
    title: "Organic Farming Techniques", 
    lessons: 8, 
    duration: "1hr 20min",
    imageUrl: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  { 
    id: 3, 
    title: "Seasonal Farming Guide", 
    lessons: 10, 
    duration: "1hr 30min",
    imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
];

const categories = ["all", "soil", "water", "pests", "seeds", "harvest"];
const levels = ["all", "beginner", "intermediate", "advanced"];
const languages = ["English", "Hindi", "Tamil", "Telugu", "Bengali", "Marathi", "Gujarati", "Malayalam", "Punjabi", "Kannada"];

const VoiceLearningPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showTranscript, setShowTranscript] = useState(false);
  
  const audioRef = useRef(null);
  
  const filteredLessons = audioLessons.filter(lesson => 
    (selectedCategory === 'all' || lesson.category === selectedCategory) &&
    (selectedLevel === 'all' || lesson.level === selectedLevel)
  );
  
  const playAudio = (lesson) => {
    setCurrentlyPlaying(lesson);
    setIsPlaying(true);
    
    // In a real implementation, we would actually play the audio file
    // Since we're using dummy data, we'll just simulate the behavior
    
    // If we had a real audio player, we would do something like this:
    // if (audioRef.current) {
    //   audioRef.current.src = lesson.audioUrl;
    //   audioRef.current.play();
    // }
  };
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    
    // In a real implementation:
    // if (audioRef.current) {
    //   if (isPlaying) {
    //     audioRef.current.pause();
    //   } else {
    //     audioRef.current.play();
    //   }
    // }
  };
  
  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    
    // In a real implementation:
    // if (audioRef.current) {
    //   audioRef.current.playbackRate = speed;
    // }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 p-6 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f]">
      <div className="max-w-6xl mx-auto">
        <Link href="/agri" className="inline-flex items-center text-green-600 dark:text-green-400 mb-6 hover:underline">
          <i className="fas fa-arrow-left mr-2"></i> Back to Dashboard
        </Link>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Voice-Based Learning</h1>
          <p className="text-gray-600 dark:text-gray-400">Listen and learn farming techniques with our audio guides</p>
        </div>
        
        {/* Language selector */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="mb-4 sm:mb-0">
              <h3 className="font-bold text-gray-800 dark:text-white">Select Your Preferred Language</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">All audio lessons are available in multiple languages</p>
            </div>
            
            <div className="w-full sm:w-auto">
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full sm:w-48 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {languages.map(language => (
                  <option key={language} value={language}>{language}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Currently playing section (shown when a lesson is playing) */}
        {currentlyPlaying && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-8 overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 h-48 rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-6">
                  <img 
                    src={currentlyPlaying.imageUrl} 
                    alt={currentlyPlaying.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {currentlyPlaying.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {currentlyPlaying.description}
                  </p>
                  
                  <div className="flex items-center mb-6">
                    <span className="text-gray-600 dark:text-gray-400 text-sm mr-4">
                      <i className="far fa-clock mr-1"></i> {currentlyPlaying.duration}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm mr-4">
                      <i className="fas fa-signal mr-1"></i> {currentlyPlaying.level.charAt(0).toUpperCase() + currentlyPlaying.level.slice(1)}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      <i className="fas fa-language mr-1"></i> {selectedLanguage}
                    </span>
                  </div>
                  
                  {/* Audio player controls */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-4">
                    <div className="bg-green-500 h-1.5 rounded-full w-1/3"></div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <span>2:45</span>
                    <span>{currentlyPlaying.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white mr-4">
                        <i className="fas fa-step-backward text-xl"></i>
                      </button>
                      <button 
                        onClick={togglePlayPause}
                        className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center"
                      >
                        <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} ${isPlaying ? '' : 'ml-1'}`}></i>
                      </button>
                      <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white ml-4">
                        <i className="fas fa-step-forward text-xl"></i>
                      </button>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="relative mr-4">
                        <button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
                          <i className="fas fa-volume-up"></i>
                        </button>
                      </div>
                      
                      <div className="relative">
                        <button 
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                          onClick={() => setShowTranscript(!showTranscript)}
                        >
                          <i className="fas fa-closed-captioning"></i>
                        </button>
                      </div>
                      
                      <div className="ml-4">
                        <select 
                          value={playbackSpeed}
                          onChange={(e) => handleSpeedChange(parseFloat(e.target.value))}
                          className="p-1 text-sm border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                        >
                          <option value="0.5">0.5x</option>
                          <option value="0.75">0.75x</option>
                          <option value="1">1x</option>
                          <option value="1.25">1.25x</option>
                          <option value="1.5">1.5x</option>
                          <option value="2">2x</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Transcript section */}
            {showTranscript && currentlyPlaying.transcriptAvailable && (
              <div className="p-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Transcript</h4>
                <div className="text-gray-600 dark:text-gray-400 max-h-48 overflow-y-auto">
                  <p className="mb-2">
                    In this lesson, we will learn about {currentlyPlaying.title.toLowerCase()}. This is a crucial aspect of successful farming.
                  </p>
                  <p className="mb-2">
                    First, let's understand why this technique is important. It helps improve soil health, reduces pests and diseases, and can increase your overall yield.
                  </p>
                  <p className="mb-2">
                    Let me explain how to implement this in your own farm. You'll need to consider your specific conditions and crops.
                  </p>
                  <p>
                    By following these simple steps, you can see significant improvements in your farming results within one growing season.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Filters */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Browse Audio Lessons</h2>
          <div className="flex flex-wrap gap-2">
            <div className="mb-4 mr-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Level
              </label>
              <div className="flex flex-wrap gap-2">
                {levels.map(level => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedLevel === level
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Audio lessons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredLessons.map(lesson => (
            <div 
              key={lesson.id} 
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={lesson.imageUrl} 
                  alt={lesson.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <button 
                    onClick={() => playAudio(lesson)}
                    className="w-12 h-12 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center"
                  >
                    <i className="fas fa-play ml-1"></i>
                  </button>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full">
                    {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {lesson.duration}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{lesson.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{lesson.description}</p>
                
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center">
                    <i className="fas fa-language mr-1"></i> 
                    {lesson.languageOptions.length} languages
                  </span>
                  {lesson.transcriptAvailable && (
                    <span className="flex items-center ml-4">
                      <i className="fas fa-closed-captioning mr-1"></i> 
                      Transcript
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Playlists */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Featured Playlists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPlaylists.map(playlist => (
              <div 
                key={playlist.id} 
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-36 overflow-hidden relative">
                  <img 
                    src={playlist.imageUrl} 
                    alt={playlist.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="text-white text-center">
                      <p className="font-bold">{playlist.lessons} Lessons</p>
                      <p className="text-sm">{playlist.duration}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 dark:text-white">{playlist.title}</h3>
                  <button className="mt-2 w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm">
                    Start Playlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Download instructions for offline listening */}
        <div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <i className="fas fa-info-circle text-blue-600 dark:text-blue-400"></i>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">Listen Offline</h3>
              <div className="mt-2 text-sm text-blue-700 dark:text-blue-400">
                <p>Download lessons for offline listening. Perfect for areas with limited connectivity.</p>
              </div>
              <div className="mt-2">
                <button className="px-3 py-1 text-sm text-blue-600 dark:text-blue-400 border border-blue-500 rounded hover:bg-blue-100 dark:hover:bg-blue-800">
                  Learn how
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hidden audio element for actual implementation */}
      <audio ref={audioRef} style={{ display: 'none' }} />
    </div>
  );
};

export default VoiceLearningPage;
