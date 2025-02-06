"use client"

import React, { useEffect } from 'react'
import Card from './Card'
import Button from './Button'

const Page = () => {
  const [username, setUsername] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [mobile, setMobile] = React.useState('')
  const [dob, setDob] = React.useState('')
  const [gender, setGender] = React.useState('')
  const [isAdmin, setIsAdmin] = React.useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 p-6 dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 border-2 border-yellow-200 dark:bg-gray-800/90 dark:border-gray-700">
          {/* Header section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent mb-2 dark:from-blue-500 dark:to-purple-500">
                Welcome Back, {username}! ✨
              </h1>
              <p className="text-gray-600 dark:text-gray-400">Here's your personal dashboard</p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              {isAdmin && (
                <>
                  <Button 
                    onClick={() => window.location.href = '/admin'}
                    className="btn btn-primary px-6 rounded-full flex items-center gap-2 transform hover:scale-105 transition-all dark:bg-blue-600 dark:hover:bg-blue-700"
                    icon="👑"
                    label="Admin Panel"
                  />
                  <Button 
                    onClick={() => window.location.href = '/delete-account-permanently'}
                    className="btn bg-red-100 text-red-800 hover:bg-red-200 px-6 rounded-full flex items-center gap-2 dark:bg-red-700 dark:text-red-200 dark:hover:bg-red-600"
                    icon="⚠️"
                    label="Admin Delete"
                  />
                </>
              )}
              <Button 
                onClick={() => {
                  localStorage.clear();
                  window.location.href = '/login';
                }}
                className="btn bg-yellow-100 text-yellow-800 hover:bg-yellow-200 px-6 rounded-full flex items-center gap-2 dark:bg-yellow-700 dark:text-yellow-200 dark:hover:bg-yellow-600"
                icon="👋"
                label="Logout"
              />
            </div>
          </div>

          {/* User info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Username", value: username, icon: "👤", color: "from-blue-50 to-blue-100 dark:from-blue-700 dark:to-blue-500" },
              { label: "First Name", value: firstName, icon: "📝", color: "from-green-50 to-green-100 dark:from-green-700 dark:to-green-500" },
              { label: "Last Name", value: lastName, icon: "📝", color: "from-purple-50 to-purple-100 dark:from-purple-700 dark:to-purple-500" },
              { label: "Mobile", value: mobile, icon: "📱", color: "from-pink-50 to-pink-100 dark:from-pink-700 dark:to-pink-500" },
              { label: "Date of Birth", value: dob, icon: "🎂", color: "from-orange-50 to-orange-100 dark:from-orange-700 dark:to-orange-500" },
              { label: "Gender", value: gender, icon: "👥", color: "from-teal-50 to-teal-100 dark:from-teal-700 dark:to-teal-500" }
            ].map((item, index) => (
              <Card 
                key={index}
                index={index}
                icon={item.icon}
                label={item.label}
                value={item.value}
                color={item.color}
              />
            ))}
          </div>

          {/* Action buttons section */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button 
              href="/forgot-password" 
              className="btn bg-blue-100 text-blue-800 hover:bg-blue-200 px-6 rounded-full flex items-center gap-2 dark:bg-blue-700 dark:text-blue-200 dark:hover:bg-blue-600"
              icon="🔑"
              label="Reset Password"
            />
            <Button 
              href="/delete-account" 
              className="btn bg-red-100 text-red-800 hover:bg-red-200 px-6 rounded-full flex items-center gap-2 dark:bg-red-700 dark:text-red-200 dark:hover:bg-red-600"
              icon="🗑️"
              label="Delete Account"
            />
          </div>

          {/* <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Need to update your information? 
              <a href="/profile/edit" className="text-yellow-600 hover:text-yellow-700 ml-2 font-medium dark:text-blue-400 dark:hover:text-blue-500">
                Edit Profile ✏️
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Page