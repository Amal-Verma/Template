"use client"

import React, { useState } from 'react'

const ChatInput = ({ addMessage }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (message.trim()) {
      addMessage({ sender: 'User1', message, type: 'primary' })
      setMessage('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow p-2 rounded-l-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200"
        placeholder="Type your message..."
      />
      <button type="submit" className="p-2 bg-yellow-600 text-white rounded-r-lg dark:bg-blue-500">
        Send
      </button>
    </form>
  )
}

export default ChatInput
