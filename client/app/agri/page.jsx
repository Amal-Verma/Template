"use client"

import React from 'react'
import Link from 'next/link'

const AgriLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-6 animate-fadeIn dark:from-green-400 dark:to-emerald-300">
                Smart Farming Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto animate-fadeIn dark:text-green-300" style={{ animationDelay: '0.2s' }}>
                Transform your agricultural practices with precision technology, 
                real-time insights, and sustainable methods
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <Link href="/agri/register" className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1">
                  Get Started
                </Link>
                <Link href="/agri/login" className="px-8 py-3 bg-white dark:bg-emerald-900 text-green-700 dark:text-emerald-300 font-semibold rounded-full shadow-lg border border-green-200 dark:border-emerald-700 transition duration-300 transform hover:-translate-y-1">
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 dark:text-gray-200">
          Grow Smarter with GrowWise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🌱",
              title: "Precision Planting",
              description: "Optimize seed placement, spacing, and depth with AI-powered recommendations tailored to your soil conditions."
            },
            {
              icon: "💧",
              title: "Smart Irrigation",
              description: "Save water and improve crop health with automated irrigation systems that respond to real-time soil moisture data."
            },
            {
              icon: "📊",
              title: "Yield Forecasting",
              description: "Make data-driven decisions with predictive analytics that forecast yield based on historical data and current conditions."
            },
            {
              icon: "🌡️",
              title: "Climate Monitoring",
              description: "Stay ahead of weather changes with advanced monitoring systems that alert you to potential risks to your crops."
            },
            {
              icon: "🧪",
              title: "Soil Analysis",
              description: "Understand your soil's needs with comprehensive nutrient analysis and targeted fertilization recommendations."
            },
            {
              icon: "📱",
              title: "Mobile Management",
              description: "Control your farm operations from anywhere with our intuitive mobile app that puts data at your fingertips."
            }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-green-100 dark:border-green-800 animate-fadeIn"
              style={{ animationDelay: `${(index + 4) * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 dark:text-gray-200">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-green-100 dark:border-green-800">
          <div className="text-4xl text-center mb-4">❝</div>
          <p className="text-xl text-gray-700 text-center italic mb-6 dark:text-gray-300">
            "Since implementing GrowWise technologies on my farm, crop yields have increased by 28% while reducing water usage by 30%. The real-time insights have transformed how I make decisions."
          </p>
          <div className="text-center">
            <p className="font-bold text-gray-900 dark:text-gray-200">Michael Rodriguez</p>
            <p className="text-green-600 dark:text-green-400">Organic Farmer, California</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 dark:bg-green-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to revolutionize your farming?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of farmers who are growing smarter with GrowWise technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/agri/register" className="px-8 py-3 bg-white text-green-700 font-semibold rounded-full shadow-lg transition duration-300 hover:bg-gray-100 transform hover:-translate-y-1">
              Sign Up Now
            </Link>
            <Link href="/dashboard" className="px-8 py-3 bg-transparent text-white font-semibold rounded-full shadow-lg border border-white transition duration-300 hover:bg-green-700 transform hover:-translate-y-1">
              Explore Dashboard
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent mb-4">
              GrowWise 🌱
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Smart solutions for the modern farmer</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-400">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-400">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600 dark:hover:text-green-400">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
              <p className="text-gray-500 dark:text-gray-400">© 2024 GrowWise Agriculture. All rights reserved.</p>
              <div className="mt-4 flex justify-center space-x-6">
                <a href="/privacy" className="text-gray-500 hover:text-green-600 dark:hover:text-green-400">Privacy</a>
                <a href="/terms" className="text-gray-500 hover:text-green-600 dark:hover:text-green-400">Terms</a>
                <a href="/contact" className="text-gray-500 hover:text-green-600 dark:hover:text-green-400">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AgriLandingPage
