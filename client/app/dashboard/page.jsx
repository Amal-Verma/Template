"use client"

import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    // Use dummy data for now
    const dummyStats = {
      totalPosts: 120,
      followers: 350,
      following: 180,
      likes: 450,
      comments: 75,
      shares: 30
    }
    setStats(dummyStats)
  }, [])

  if (!stats) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 p-6 dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-500">
          User Dashboard ✨
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Total Posts", value: stats.totalPosts, icon: "📝" },
            { title: "Followers", value: stats.followers, icon: "👥" },
            { title: "Following", value: stats.following, icon: "🔗" },
            { title: "Likes", value: stats.likes, icon: "❤️" },
            { title: "Comments", value: stats.comments, icon: "💬" },
            { title: "Shares", value: stats.shares, icon: "🔄" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <span className="text-4xl">{stat.icon}</span>
                <div className="text-right">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{stat.value}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{stat.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
