"use client"

import React, { useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeProvider'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();


  return (
    <nav className="bg-gradient-to-r from-yellow-600 to-yellow-800 p-4 dark:from-blue-500 dark:to-purple-500 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">Our Platform ✨</a>
        <div className="flex items-center space-x-4">
          <a href="/register" className="text-white hover:text-yellow-300 dark:hover:text-blue-300">Register</a>
          <a href="/login" className="text-white hover:text-yellow-300 dark:hover:text-blue-300">Login</a>
          <div 
            onClick={toggleTheme} 
            className="relative w-16 h-8 bg-gray-300 rounded-full cursor-pointer dark:bg-gray-700"
          >
            <div 
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transform transition-transform duration-500 ${theme === 'dark' ? 'translate-x-8' : ''}`}
            >
              {theme === 'dark' ? '🌙': '☀️'}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar