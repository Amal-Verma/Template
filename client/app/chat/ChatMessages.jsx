"use client"

import React from 'react'

const ChatMessages = ({ conversation }) => {
  const formatMessage = (message) => {
    const maxLength = 30
    const words = message.split(' ')
    let formattedMessage = ''
    let line = ''

    words.forEach(word => {
      if ((line + word).length > maxLength) {
        formattedMessage += line.trim() + '\n'
        line = ''
      }
      line += word + ' '
    })

    formattedMessage += line.trim()
    return formattedMessage
  }

  return (
    <div className="max-h-full overflow-y-auto p-4 bg-yellow-50 dark:bg-gray-700 rounded-lg flex flex-col space-y-4">
      {conversation.map((msg, index) => (
        <div key={index} className={`chat ${msg.sender === 'User1' ? 'chat-start' : 'chat-end'}`}>
          <div className={`chat-bubble chat-bubble-${msg.type} max-w-[70%] bg-yellow-100 dark:bg-gray-800 border border-yellow-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 text-xl`}>
            {formatMessage(msg.message)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChatMessages
