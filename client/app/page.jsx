"use client"

import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent mb-8 animate-fadeIn dark:from-blue-500 dark:to-purple-500">
            Welcome to Our Platform ✨
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fadeIn dark:text-blue-300" style={{ animationDelay: '0.2s' }}>
            Join our amazing community and experience the best service we have to offer. 
            Simple, secure, and delightful!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          {[
            {
              title: "Get Started",
              description: "Create your account and join us today!",
              icon: "🚀",
              link: "/register",
              style: "from-blue-50 to-blue-100 dark:from-blue-700 dark:to-blue-500"
            },
            {
              title: "Already a Member?",
              description: "Login to access your dashboard",
              icon: "✨",
              link: "/login",
              style: "from-green-50 to-green-100 dark:from-purple-700 dark:to-purple-500"
            }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`bg-gradient-to-br ${item.style} p-8 rounded-2xl 
                       shadow-lg hover:shadow-xl transition-all duration-300 
                       transform hover:-translate-y-1 border border-yellow-100 dark:border-blue-700
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
            { title: "Secure", icon: "🔒", desc: "Your data is safe with us" },
            { title: "Fast", icon: "⚡", desc: "Lightning quick responses" },
            { title: "24/7 Support", icon: "💬", desc: "We're here to help" }
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
          <p>© 2024 Our Platform. All rights reserved. ✨</p>
          <div className="mt-4 space-x-4">
            <a href="/privacy" className="hover:text-yellow-700 dark:hover:text-blue-500">Privacy Policy</a>
            <a href="/terms" className="hover:text-yellow-700 dark:hover:text-purple-500">Terms of Service</a>
            <a href="/contact" className="hover:text-yellow-700 dark:hover:text-green-500">Contact Us</a>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Page