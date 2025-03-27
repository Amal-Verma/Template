"use client"

import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f]">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-8 animate-fadeIn dark:from-green-400 dark:to-emerald-300">
            Welcome to GrowWise 🌱
          </h1>
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto animate-fadeIn dark:text-green-300" style={{ animationDelay: '0.2s' }}>
            Join our community of farmers and gardeners. Grow smarter, harvest better, 
            and cultivate a sustainable future with our precision agriculture platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          {[
            {
              title: "Start Growing",
              description: "Create your farm profile today!",
              icon: "🌱",
              link: "/agri/register",
              style: "from-emerald-50 to-emerald-100 dark:from-emerald-800 dark:to-emerald-700"
            },
            {
              title: "Already Farming?",
              description: "Log in to access your farm dashboard",
              icon: "🌿",
              link: "/agri/login",
              style: "from-lime-50 to-lime-100 dark:from-green-800 dark:to-green-700"
            }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`bg-gradient-to-br ${item.style} p-8 rounded-2xl 
                       shadow-lg hover:shadow-xl transition-all duration-300 
                       transform hover:-translate-y-1 border border-green-100 dark:border-green-700
                       animate-fadeIn flex flex-col items-center text-center`}
              style={{ animationDelay: `${(index + 2) * 0.1}s` }}
            >
              <span className="text-5xl mb-4">{item.icon}</span>
              <h2 className="text-2xl font-bold text-gray-800 mb-2 dark:text-gray-200">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Sustainable", icon: "🌾", desc: "Eco-friendly farming practices" },
            { title: "Smart Monitoring", icon: "🌡️", desc: "Real-time crop insights" },
            { title: "24/7 Support", icon: "🌻", desc: "We're here to help you grow" }
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 animate-fadeIn"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <span className="text-4xl mb-4 inline-block">{feature.icon}</span>
              <h3 className="text-xl font-bold text-gray-800 mb-2 dark:text-gray-200">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        <footer className="text-center mt-24 text-gray-600 animate-fadeIn dark:text-gray-400" style={{ animationDelay: '0.8s' }}>
          <p>© 2024 GrowWise Agriculture. All rights reserved. 🌱</p>
          <div className="mt-4 space-x-4">
            <a href="/privacy" className="hover:text-green-700 dark:hover:text-green-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-green-700 dark:hover:text-lime-400">Terms of Service</a>
            <a href="/contact" className="hover:text-green-700 dark:hover:text-emerald-400">Contact Us</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Page
