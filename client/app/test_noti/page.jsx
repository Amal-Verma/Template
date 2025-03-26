"use client"

import React, { useState, useEffect } from 'react'

const TestNotification = () => {
  const [permissionStatus, setPermissionStatus] = useState('default')

  useEffect(() => {
    // Check if browser supports notifications
    if ('Notification' in window) {
      setPermissionStatus(Notification.permission)
    }
  }, [])

  const requestPermission = async () => {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission()
      setPermissionStatus(permission)
      return permission
    }
    return 'denied'
  }

  const showNotification = async () => {
    // If permission is not granted, request it
    if (permissionStatus !== 'granted') {
      const permission = await requestPermission()
      if (permission !== 'granted') {
        alert('Please allow notifications to use this feature')
        return
      }
    }

    // Create and show the notification
    const notification = new Notification('Test Notification', {
      body: 'This is a test notification from your app!',
      icon: '/icon.png' // You can replace with your app's icon
    })

    // Optional: Handle notification events
    notification.onclick = () => {
      window.focus()
      notification.close()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e] flex items-center justify-center">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl p-8 rounded-2xl dark:bg-gray-800/90">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-500">
          Notification Test ✨
        </h2>
        
        <div className="mb-4 text-gray-600 dark:text-gray-400 text-center">
          {permissionStatus === 'default' && 'Click the button to enable notifications'}
          {permissionStatus === 'granted' && 'Notifications are enabled'}
          {permissionStatus === 'denied' && 'Notifications are blocked. Please update your browser settings.'}
        </div>
        
        <button 
          onClick={showNotification}
          className="w-full bg-gradient-to-r from-yellow-600 to-yellow-800 dark:from-blue-500 dark:to-purple-500 text-white py-3 px-6 rounded-lg text-lg font-bold hover:opacity-90 transition-opacity"
        >
          Send Notification
        </button>
      </div>
    </div>
  )
}

export default TestNotification
