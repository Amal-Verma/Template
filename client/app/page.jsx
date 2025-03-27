"use client"

import React from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeProvider'

const NavigationPage = () => {
  const { theme } = useTheme();
  
  // Define routes for navigation buttons
  const routes = [
    { path: '/agri', name: 'Agricultural Hub', icon: '🚜', highlight: true },
    { path: '/agri/login', name: 'Farmer Login', icon: '🌿' },
    { path: '/agri/register', name: 'Join GrowWise', icon: '🌱' },
    { path: '/dashboard', name: 'Farm Dashboard', icon: '🌾' },
    { path: '/dashboard1', name: 'Crop Analysis', icon: '📊' },
    { path: '/chat', name: 'Farmer Chat', icon: '💬' },
    { path: '/test_noti', name: 'Weather Alerts', icon: '☀️' },
    { path: '/chart/bargraph', name: 'Yield Reports', icon: '📈' },
    { path: '/chart/graph', name: 'Growth Trends', icon: '📉' },
    { path: '/chart/piechart', name: 'Crop Distribution', icon: '🥧' },
    { path: '/chart/table', name: 'Planting Schedule', icon: '🗃️' },
    { path: '/chart/progressbar-linear', name: 'Growth Progress', icon: '📏' },
    { path: '/chart/progressbar-circular', name: 'Harvest Cycle', icon: '⭕' },
    { path: '/mappa/version', name: 'Version', icon: '🏷️' },
    { path: '/fileTree', name: 'File Tree', icon: '🗂️' },
    { path: '/Extras/multisetform', name: 'Multi-step Form', icon: '📋' },
    { path: '/Extras/carousal', name: 'Carousel', icon: '🎠' },
    { path: '/archive', name: 'Original Homepage', icon: '🏠' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-4 animate-fadeIn dark:from-green-400 dark:to-emerald-300">
            GrowWise Farm Hub 🌱
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fadeIn dark:text-green-300">
            Select a feature to manage and monitor your crops
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {routes.map((route, index) => (
            <Link 
              href={route.path} 
              key={index}
              className={`${route.highlight ? 'bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600 col-span-full md:col-span-2 lg:col-span-2' : 'bg-white dark:bg-gray-800'} p-6 rounded-xl 
                        shadow-lg hover:shadow-xl transition-all duration-300 
                        transform hover:-translate-y-2 hover:scale-105 border ${route.highlight ? 'border-green-500 dark:border-green-600' : 'border-green-100 dark:border-green-900'}
                        animate-fadeIn flex flex-col items-center text-center`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-4xl mb-3">{route.icon}</span>
              <h2 className={`text-xl font-bold ${route.highlight ? 'text-white' : 'text-gray-800 dark:text-gray-200'}`}>{route.name}</h2>
              {route.highlight && (
                <p className="mt-2 text-green-100 text-sm">Explore our new agricultural hub</p>
              )}
            </Link>
          ))}
        </div>

        <footer className="text-center mt-16 text-gray-600 animate-fadeIn dark:text-gray-400">
          <p>© 2024 GrowWise Agriculture. All rights reserved. 🌱</p>
        </footer>
      </div>
    </div>
  )
}

export default NavigationPage