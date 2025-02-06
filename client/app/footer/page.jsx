"use client"

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-yellow-600 to-yellow-800 p-6 dark:from-blue-500 dark:to-purple-500 text-white">
      <div className="container mx-auto text-center">
        <p>© 2024 Our Platform. All rights reserved. ✨</p>
        <div className="mt-4 space-x-4">
          <a href="/privacy" className="hover:text-yellow-300 dark:hover:text-blue-300">Privacy Policy</a>
          <a href="/terms" className="hover:text-yellow-300 dark:hover:text-purple-300">Terms of Service</a>
          <a href="/contact" className="hover:text-yellow-300 dark:hover:text-green-300">Contact Us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
