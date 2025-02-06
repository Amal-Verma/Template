"use client"

import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

const Graph = ({ data }) => {
  const defaultData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 p-6 dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e] flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-md shadow-2xl p-8 rounded-2xl dark:bg-gray-800/90">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-500">
          Beautiful Line Graph ✨
        </h2>
        <Line data={data || defaultData} />
      </div>
    </div>
  )
}

export default Graph
