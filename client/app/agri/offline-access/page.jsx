"use client"

import React, { useState } from 'react';
import Link from 'next/link';

// Dummy data for offline resources categories
const categories = [
  { id: 'all', name: 'All Resources', icon: '📚' },
  { id: 'guides', name: 'Farming Guides', icon: '📖' },
  { id: 'videos', name: 'Video Tutorials', icon: '🎬' },
  { id: 'tools', name: 'Apps & Tools', icon: '🔧' },
  { id: 'weather', name: 'Weather & Climate', icon: '🌤️' },
  { id: 'market', name: 'Market Information', icon: '💹' }
];

// Dummy data for download resources
const resources = [
  {
    id: 1,
    title: 'Complete Crop Growing Guide',
    description: 'Comprehensive information on growing 50+ crops with offline reference charts and guides.',
    category: 'guides',
    fileSize: '45 MB',
    format: 'PDF Collection',
    image: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    lastUpdated: '2023-10-15',
    downloadCount: 12850,
    downloaded: false,
    isNew: true,
    estimatedDownloadTime: {
      "2G": "30-40 min",
      "3G": "8-12 min",
      "4G": "2-3 min"
    }
  },
  {
    id: 2,
    title: 'Soil Testing Techniques Video Series',
    description: 'Learn how to test and evaluate your soil quality using simple methods without specialized equipment.',
    category: 'videos',
    fileSize: '320 MB',
    format: 'MP4 Videos',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    lastUpdated: '2023-09-05',
    downloadCount: 8432,
    downloaded: true,
    downloadProgress: 100,
    isNew: false,
    estimatedDownloadTime: {
      "2G": "3-4 hours",
      "3G": "45-60 min",
      "4G": "12-15 min"
    }
  },
  {
    id: 3,
    title: 'FarmCalc - Offline Calculator App',
    description: 'Calculate seed requirements, fertilizer applications, crop yields, and profit margins without internet.',
    category: 'tools',
    fileSize: '25 MB',
    format: 'APK (Android)',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    lastUpdated: '2023-11-01',
    downloadCount: 15678,
    downloaded: true,
    downloadProgress: 100,
    isNew: true,
    estimatedDownloadTime: {
      "2G": "15-20 min",
      "3G": "4-6 min",
      "4G": "1-2 min"
    }
  },
  {
    id: 4,
    title: '5-Year Climate Data Package',
    description: 'Historical weather patterns and climate data for your region to help with long-term farm planning.',
    category: 'weather',
    fileSize: '85 MB',
    format: 'Excel & PDF',
    image: 'https://images.unsplash.com/photo-1526079904738-68fac4263a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    lastUpdated: '2023-08-20',
    downloadCount: 5964,
    downloaded: true,
    downloadProgress: 65,
    isNew: false,
    estimatedDownloadTime: {
      "2G": "50-60 min",
      "3G": "12-18 min",
      "4G": "3-5 min"
    }
  },
  {
    id: 5,
    title: 'Organic Pest Control Handbook',
    description: 'Detailed guide on using natural methods to manage pests and diseases in crops without chemicals.',
    category: 'guides',
    fileSize: '18 MB',
    format: 'PDF',
    image: 'https://images.unsplash.com/photo-1586177726795-42942b5follow?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    lastUpdated: '2023-07-12',
    downloadCount: 22541,
    downloaded: false,
    isNew: false,
    estimatedDownloadTime: {
      "2G": "10-15 min",
      "3G": "3-5 min",
      "4G": "1 min"
    }
  },
  {
    id: 6,
    title: 'Regional Market Price Database',
    description: 'Offline database of crop prices across different markets from the past 12 months for price comparison.',
    category: 'market',
    fileSize: '35 MB',
    format: 'Excel & CSV',
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    lastUpdated: '2023-11-10',
    downloadCount: 9823,
    downloaded: false,
    isNew: true,
    estimatedDownloadTime: {
      "2G": "25-30 min",
      "3G": "6-8 min",
      "4G": "2 min"
    }
  },
  {
    id: 7,
    title: 'Water Management Techniques',
    description: 'Learn irrigation methods and water conservation techniques for efficient water usage.',
    category: 'guides',
    fileSize: '30 MB',
    format: 'PDF & Illustrations',
    image: 'https://images.unsplash.com/photo-1591982736271-c5216a717888?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    lastUpdated: '2023-09-18',
    downloadCount: 11276,
    downloaded: false,
    isNew: false,
    estimatedDownloadTime: {
      "2G": "18-25 min",
      "3G": "5-7 min",
      "4G": "1-2 min"
    }
  },
  {
    id: 8,
    title: 'Seasonal Crop Calendar App',
    description: 'Interactive calendar showing optimal planting and harvesting times for crops in your region.',
    category: 'tools',
    fileSize: '22 MB',
    format: 'APK (Android)',
    image: 'https://images.unsplash.com/photo-1508914599602-513f1c2bc558?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    lastUpdated: '2023-10-25',
    downloadCount: 7854,
    downloaded: true,
    downloadProgress: 32,
    isNew: false,
    estimatedDownloadTime: {
      "2G": "15-18 min",
      "3G": "4-5 min",
      "4G": "1 min"
    }
  }
];

// Storage management data
const storageData = {
  totalStorage: 4.0, // in GB
  usedStorage: 1.2, // in GB
  downloadQueue: [
    { 
      id: 101, 
      title: "Seed Selection Guide", 
      size: "15 MB", 
      progress: 45, 
      timeRemaining: "3 min"
    },
    { 
      id: 102, 
      title: "Livestock Care Videos", 
      size: "250 MB", 
      progress: 12, 
      timeRemaining: "15 min"
    }
  ]
};

const OfflineAccessPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showDownloadingOnly, setShowDownloadingOnly] = useState(false);
  const [showDownloadedOnly, setShowDownloadedOnly] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [connectionType, setConnectionType] = useState('3G');
  const [viewType, setViewType] = useState('grid');
  const [showStorageManager, setShowStorageManager] = useState(false);

  // Filter resources based on selected criteria
  const filteredResources = resources.filter(resource => 
    (selectedCategory === 'all' || resource.category === selectedCategory) &&
    (searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) &&
    (!showDownloadingOnly || (resource.downloaded && resource.downloadProgress < 100)) &&
    (!showDownloadedOnly || (resource.downloaded && resource.downloadProgress === 100))
  );

  // Handle download action
  const handleDownload = (resource) => {
    // In a real application, this would trigger the actual download
    // For this demo, we're just showing the UI changes
    console.log(`Starting download for: ${resource.title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 p-6 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-300">
          Offline Access
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                Download Resources for Offline Use
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
                Download farming guides, videos, and tools to use when you don't have internet access. 
                All resources will be available offline from your device.
              </p>
            </div>
            
            <div className="mt-4 lg:mt-0 flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Storage:</span>
              <div className="w-40 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(storageData.usedStorage / storageData.totalStorage) * 100}%` }}></div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {storageData.usedStorage.toFixed(1)}/{storageData.totalStorage.toFixed(1)} GB
              </span>
              <button 
                onClick={() => setShowStorageManager(!showStorageManager)}
                className="ml-2 px-2 py-1 text-sm text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <i className="fas fa-cog"></i>
              </button>
            </div>
          </div>
          
          {showStorageManager && (
            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">Storage Management</h3>
                <button 
                  onClick={() => setShowStorageManager(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Used Storage</h4>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mr-2">
                      <div className="bg-green-500 h-3 rounded-full" style={{ width: `${(storageData.usedStorage / storageData.totalStorage) * 100}%` }}></div>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm whitespace-nowrap">
                      {Math.round((storageData.usedStorage / storageData.totalStorage) * 100)}%
                    </span>
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {(storageData.totalStorage - storageData.usedStorage).toFixed(1)} GB free of {storageData.totalStorage.toFixed(1)} GB
                    </span>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Resource Categories</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Videos</span>
                      <span className="text-sm font-medium text-gray-800 dark:text-white">650 MB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">PDFs & Guides</span>
                      <span className="text-sm font-medium text-gray-800 dark:text-white">320 MB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Apps & Tools</span>
                      <span className="text-sm font-medium text-gray-800 dark:text-white">230 MB</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Management Options</h4>
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-1.5 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                      <i className="fas fa-trash-alt mr-2 text-red-500"></i> Delete unused resources
                    </button>
                    <button className="w-full text-left px-3 py-1.5 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                      <i className="fas fa-archive mr-2 text-yellow-500"></i> Archive older content
                    </button>
                    <button className="w-full text-left px-3 py-1.5 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
                      <i className="fas fa-sync-alt mr-2 text-blue-500"></i> Check for updates
                    </button>
                  </div>
                </div>
              </div>
              
              {storageData.downloadQueue.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Download Queue</h3>
                  <div className="space-y-3">
                    {storageData.downloadQueue.map(item => (
                      <div key={item.id} className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-800 dark:text-white">{item.title}</span>
                            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{item.size}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500 dark:text-gray-400">{item.timeRemaining} left</span>
                            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                              <i className="fas fa-pause"></i>
                            </button>
                            <button className="text-red-400 hover:text-red-600 dark:hover:text-red-300">
                              <i className="fas fa-times"></i>
                            </button>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${item.progress}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="md:flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for resources..."
                  className="w-full p-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                />
                <div className="absolute left-3 top-2.5 text-gray-400">
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <select
                onChange={(e) => setConnectionType(e.target.value)}
                value={connectionType}
                className="p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
              >
                <option value="2G">2G Connection</option>
                <option value="3G">3G Connection</option>
                <option value="4G">4G Connection</option>
              </select>
              
              <div className="flex border border-gray-300 dark:border-gray-600 rounded-md overflow-hidden">
                <button
                  onClick={() => setViewType('grid')}
                  className={`px-3 py-2 ${
                    viewType === 'grid' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <i className="fas fa-th-large"></i>
                </button>
                <button
                  onClick={() => setViewType('list')}
                  className={`px-3 py-2 ${
                    viewType === 'list' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={showDownloadedOnly}
                onChange={() => {
                  setShowDownloadedOnly(!showDownloadedOnly);
                  if (!showDownloadedOnly) setShowDownloadingOnly(false);
                }}
                className="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Show downloaded only</span>
            </label>
            
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={showDownloadingOnly}
                onChange={() => {
                  setShowDownloadingOnly(!showDownloadingOnly);
                  if (!showDownloadingOnly) setShowDownloadedOnly(false);
                }}
                className="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Show downloading only</span>
            </label>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-green-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
        
        {viewType === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => (
              <div 
                key={resource.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-full object-cover"
                  />
                  {resource.isNew && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </div>
                  )}
                </div>
                
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {categories.find(c => c.id === resource.category)?.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {resource.fileSize} • {resource.format}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>
                      <i className="far fa-calendar-alt mr-1"></i> Updated: {resource.lastUpdated}
                    </span>
                    <span>
                      <i className="fas fa-download mr-1"></i> {resource.downloadCount.toLocaleString()}
                    </span>
                  </div>
                  
                  {resource.downloaded ? (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Download Progress</span>
                        <span className="font-medium">{resource.downloadProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            resource.downloadProgress === 100 
                              ? 'bg-green-500' 
                              : 'bg-blue-500'
                          }`}
                          style={{ width: `${resource.downloadProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <i className="fas fa-clock mr-1"></i>
                        <span>Est. download time ({connectionType}): {resource.estimatedDownloadTime[connectionType]}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex space-x-2">
                    {resource.downloaded ? (
                      resource.downloadProgress === 100 ? (
                        <button className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                          <i className="fas fa-folder-open mr-2"></i> Open
                        </button>
                      ) : (
                        <button className="flex-1 px-4 py-2 bg-gray-500 text-white rounded-lg cursor-not-allowed">
                          Downloading...
                        </button>
                      )
                    ) : (
                      <button 
                        onClick={() => handleDownload(resource)}
                        className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        <i className="fas fa-download mr-2"></i> Download
                      </button>
                    )}
                    
                    <button className="px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg">
                      <i className="fas fa-info-circle"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredResources.map(resource => (
              <div 
                key={resource.id}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 relative">
                    <img 
                      src={resource.image} 
                      alt={resource.title} 
                      className="w-full h-full object-cover min-h-[160px]"
                    />
                    {resource.isNew && (
                      <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                        NEW
                      </div>
                    )}
                  </div>
                  
                  <div className="md:w-3/4 p-5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {categories.find(c => c.id === resource.category)?.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {resource.fileSize} • {resource.format}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{resource.description}</p>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span>
                        <i className="far fa-calendar-alt mr-1"></i> Updated: {resource.lastUpdated}
                      </span>
                      <span>
                        <i className="fas fa-download mr-1"></i> {resource.downloadCount.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="w-1/2 pr-2">
                        {resource.downloaded ? (
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Progress</span>
                              <span className="font-medium">{resource.downloadProgress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  resource.downloadProgress === 100 
                                    ? 'bg-green-500' 
                                    : 'bg-blue-500'
                                }`}
                                style={{ width: `${resource.downloadProgress}%` }}
                              ></div>
                            </div>
                          </div>
                        ) : (
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center">
                              <i className="fas fa-clock mr-1"></i>
                              <span>Est. download time ({connectionType}): {resource.estimatedDownloadTime[connectionType]}</span>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex space-x-2">
                        {resource.downloaded ? (
                          resource.downloadProgress === 100 ? (
                            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                              <i className="fas fa-folder-open mr-2"></i> Open
                            </button>
                          ) : (
                            <button className="px-4 py-2 bg-gray-500 text-white rounded-lg cursor-not-allowed">
                              Downloading...
                            </button>
                          )
                        ) : (
                          <button 
                            onClick={() => handleDownload(resource)}
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                          >
                            <i className="fas fa-download mr-2"></i> Download
                          </button>
                        )}
                        
                        <button className="px-4 py-2 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-600 rounded-lg">
                          <i className="fas fa-info-circle"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {filteredResources.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">No Resources Found</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              We couldn't find any resources matching your current filters. Try adjusting your search or filters to see more content.
            </p>
          </div>
        )}
        
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg shadow">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-6 text-4xl">📱</div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">Mobile App for Better Offline Access</h3>
              <p className="text-gray-600 dark:text-gray-400">
                For an enhanced offline experience with automatic content syncing when connection is available, 
                download our mobile app for Android or iOS.
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors">
                  <i className="fab fa-android mr-2"></i> Android App
                </button>
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors">
                  <i className="fab fa-apple mr-2"></i> iOS App
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflineAccessPage;
