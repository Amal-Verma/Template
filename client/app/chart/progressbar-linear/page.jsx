"use client"

import React from 'react'

const ProgressBar = ({ percentage = 76 }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 p-6 dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e] flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-md shadow-2xl p-8 rounded-2xl dark:bg-gray-800/90">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-500">
          Progress Bar ✨
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-6 dark:bg-gray-700">
          <div
            className="bg-gradient-to-r from-yellow-600 to-yellow-800 h-6 rounded-full dark:from-blue-500 dark:to-purple-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-center mt-4 text-gray-600 dark:text-gray-400 font-semibold">{percentage}%</p>
      </div>
    </div>
  )
}

export default ProgressBar
