"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import ChatSidebar from './components/ChatSidebar'
import ChatArea from './components/ChatArea'
import { users, chats } from './data/dummyData'

const ChatPage = () => {
  const [activeChat, setActiveChat] = useState(0)
  const [message, setMessage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')
  
  // Find current chat data and active user
  const currentChat = chats.find(chat => chat.userId === activeChat);
  const activeUser = users.find(user => user.id === activeChat);

  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // In a real app, you would send this to a backend
    // For now, we'll just log it and clear the input
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f] flex flex-col">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20 dark:opacity-10">
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-green-300 dark:bg-green-800 blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-64 h-64 rounded-full bg-lime-300 dark:bg-lime-800 blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/4 w-72 h-72 rounded-full bg-emerald-300 dark:bg-emerald-800 blur-3xl"></div>
        
        {/* Agricultural pattern overlay */}
        <div className="absolute inset-0 bg-repeat opacity-5" 
             style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23087f5b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        ></div>
      </div>

      {/* Main chat container - takes full viewport */}
      <div className="relative z-10 flex flex-col md:flex-row h-full w-full overflow-hidden bg-white/90 dark:bg-gray-800/90 shadow-2xl backdrop-blur-sm border border-green-100 dark:border-green-900 rounded-lg md:m-4">
        {/* Sidebar with user list */}
        <ChatSidebar 
          users={users}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
          activeChat={activeChat}
          setActiveChat={setActiveChat}
        />
        
        {/* Chat content area */}
        <ChatArea 
          currentChat={currentChat}
          activeUser={activeUser}
          message={message}
          setMessage={setMessage}
          handleSendMessage={handleSendMessage}
        />
      </div>
      
      {/* Quick actions - absolute positioned at the bottom */}
      <div className="absolute bottom-6 right-6 flex space-x-3 z-10">
        <div className="relative group transition-all duration-300 hover:scale-105">
          <button 
            className="px-5 py-3 bg-gray-300/80 dark:bg-gray-700/80 rounded-full shadow-lg text-gray-500 dark:text-gray-400 flex items-center cursor-not-allowed opacity-70 backdrop-blur-sm"
            disabled
          >
            <span className="mr-2">🏠</span> Home
          </button>
          <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-black/80 backdrop-blur-sm text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transform group-hover:-translate-y-1">
            Home navigation is currently disabled
          </div>
        </div>
        
        <div className="relative group transition-all duration-300 hover:scale-105">
          <button 
            className="px-5 py-3 bg-green-400/80 dark:bg-green-900/80 rounded-full shadow-lg text-white opacity-70 flex items-center cursor-not-allowed backdrop-blur-sm"
            disabled
          >
            <span className="mr-2">🌾</span> Dashboard
          </button>
          <div className="absolute bottom-full right-0 mb-2 w-48 p-2 bg-black/80 backdrop-blur-sm text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none transform group-hover:-translate-y-1">
            Dashboard navigation is coming soon
          </div>
        </div>
      </div>
      
      {/* Coming Soon Notice */}
      <div className="absolute bottom-6 left-6 z-10 bg-yellow-100/90 dark:bg-yellow-900/90 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200 p-3 rounded-lg shadow-lg text-sm backdrop-blur-sm transform transition-transform duration-300 hover:scale-105">
        <p className="flex items-center">
          <span className="mr-2">🌱</span>
          Navigation features will be enabled in the next update
        </p>
      </div>
    </div>
  )
}

export default ChatPage
