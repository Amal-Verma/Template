"use client"

import React from 'react'

const CircularProgressBar = ({ percentage = 76 }) => {
  const radius = 50
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 p-6 dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e] flex items-center justify-center">
      <div className="w-64 h-64 bg-white/90 backdrop-blur-md shadow-2xl p-8 rounded-2xl dark:bg-gray-800/90 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 120 120">
          <circle
            className="text-gray-300 dark:text-gray-700"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
          />
          <circle
            className="text-yellow-600 dark:text-blue-500"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="60"
            cy="60"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
          <text
            x="60"
            y="60"
            textAnchor="middle"
            dy=".3em"
            className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-500"
          >
            {percentage}%
          </text>
        </svg>
      </div>
    </div>
  )
}

export default CircularProgressBar
