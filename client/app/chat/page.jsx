"use client"

import React, { useState } from 'react'
import ChatInput from './ChatInput'
import ChatMessages from './ChatMessages'

const Chat = () => {
  const [conversation, setConversation] = useState([
    { sender: 'User1', message: 'What kind of nonsense is this', type: 'primary' },
    { sender: 'User1', message: 'Put me on the Council and not make me a Master!?', type: 'secondary' },
    { sender: 'User1', message: "That's never been done in the history of the Jedi. It's insulting!", type: 'accent' },
    { sender: 'User2', message: 'Calm down, Anakin.', type: 'info' },
    { sender: 'User2', message: 'You have been given a great honor.', type: 'success' },
    { sender: 'User2', message: 'To be on the Council at your age.', type: 'warning' },
    { sender: 'User2', message: "It's never happened before.", type: 'error' }
  ])

  const addMessage = (message) => {
    setConversation([...conversation, message])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e] flex flex-col items-center justify-center">
      <div className="relative w-full h-screen bg-gradient-to-r from-yellow-100 to-orange-100 backdrop-blur-md shadow-2xl p-8 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 flex flex-col">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-500">
          Chat UI ✨
        </h2>
        <div className="flex-grow overflow-y-auto p-4 bg-yellow-50 dark:bg-gray-700 rounded-lg flex flex-col space-y-4">
          <ChatMessages conversation={conversation} />
        </div>
        <ChatInput addMessage={addMessage} />
      </div>
    </div>
  )
}

export default Chat
