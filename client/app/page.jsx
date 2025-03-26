"use client"

import React from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeProvider'

const NavigationPage = () => {
  const { theme } = useTheme();
  
  // Define routes for navigation buttons
  const routes = [
    { path: '/login', name: 'Login', icon: '🔑' },
    { path: '/register', name: 'Register', icon: '📝' },
    { path: '/dashboard', name: 'Dashboard', icon: '📊' },
    { path: '/dashboard1', name: 'Dashboard Alt', icon: '📈' },
    { path: '/chat', name: 'Chat', icon: '💬' },
    { path: '/test_noti', name: 'Notifications', icon: '🔔' },
    { path: '/chart/bargraph', name: 'Bar Graph', icon: '📊' },
    { path: '/chart/graph', name: 'Line Graph', icon: '📉' },
    { path: '/chart/piechart', name: 'Pie Chart', icon: '🥧' },
    { path: '/chart/table', name: 'Table', icon: '🗃️' },
    { path: '/chart/progressbar-linear', name: 'Linear Progress', icon: '📏' },
    { path: '/chart/progressbar-circular', name: 'Circular Progress', icon: '⭕' },
    { path: '/mappa/version', name: 'Version', icon: '🏷️' },
    { path: '/fileTree', name: 'File Tree', icon: '🗂️' },
    { path: '/Extras/multisetform', name: 'Multi-step Form', icon: '📋' },
    { path: '/Extras/carousal', name: 'Carousel', icon: '🎠' },
    { path: '/archive', name: 'Original Homepage', icon: '🏠' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent mb-4 animate-fadeIn dark:from-blue-500 dark:to-purple-500">
            Navigation Hub ✨
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeIn dark:text-blue-300">
            Select a destination to explore our application features
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {routes.map((route, index) => (
            <Link 
              href={route.path} 
              key={index}
              className={`bg-white dark:bg-gray-800 p-6 rounded-xl 
                        shadow-lg hover:shadow-xl transition-all duration-300 
                        transform hover:-translate-y-2 hover:scale-105 border border-yellow-100 dark:border-gray-700
                        animate-fadeIn flex flex-col items-center text-center`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="text-4xl mb-3">{route.icon}</span>
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">{route.name}</h2>
            </Link>
          ))}
        </div>

        <footer className="text-center mt-16 text-gray-600 animate-fadeIn dark:text-gray-400">
          <p>© 2024 Our Platform. All rights reserved. ✨</p>
        </footer>
      </div>
    </div>
  )
}

export default NavigationPage