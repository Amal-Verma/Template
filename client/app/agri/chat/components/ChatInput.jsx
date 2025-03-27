import React, { useState } from 'react';

const ChatInput = ({ message, setMessage, handleSendMessage }) => {
  const [isFocused, setIsFocused] = useState(false);
  
  // Get placeholder suggestions based on current input
  const getPlaceholder = () => {
    if (message.length > 0) return "";
    return "Type your message...";
  };
  
  // List of quick responses for agricultural chat
  const quickResponses = [
    { emoji: "🌧️", text: "What's the rainfall forecast for this week?" },
    { emoji: "🌱", text: "When is the best time to plant wheat in my region?" },
    { emoji: "🐛", text: "How do I deal with these pests on my crops?" },
    { emoji: "🚜", text: "Can you recommend equipment for small-scale farming?" }
  ];

  return (
    <div className="border-t border-green-100 dark:border-green-800/50 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
      {/* Quick responses */}
      {isFocused && (
        <div className="px-4 py-2 overflow-x-auto flex space-x-2 scrollbar-thin">
          {quickResponses.map((response, index) => (
            <button
              key={index}
              onClick={() => setMessage(response.text)}
              className="whitespace-nowrap px-3 py-1.5 bg-gray-100 dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-green-900/50 rounded-full text-sm text-gray-800 dark:text-gray-200 transition-colors flex items-center"
            >
              <span className="mr-1.5">{response.emoji}</span>
              <span>{response.text}</span>
            </button>
          ))}
        </div>
      )}
      
      {/* Main input form */}
      <div className={`p-4 transition-all duration-300 ${isFocused ? 'bg-green-50/70 dark:bg-green-900/10' : ''}`}>
        <form onSubmit={handleSendMessage} className="flex items-center">
          <div className="flex space-x-1 mr-2">
            <button 
              type="button" 
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span role="img" aria-label="attach">📎</span>
            </button>
            <button 
              type="button" 
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span role="img" aria-label="camera">📷</span>
            </button>
          </div>
          
          <div className="relative flex-1">
            <input
              type="text"
              placeholder={getPlaceholder()}
              className={`w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 dark:text-gray-200 transition-all duration-300 ${
                isFocused ? 'bg-white dark:bg-gray-600' : ''
              }`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {message.length === 0 && (
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 dark:text-gray-500 pointer-events-none">
                Press Enter to send
              </div>
            )}
          </div>
          
          <div className="flex space-x-1 ml-2">
            <button 
              type="button" 
              className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <span role="img" aria-label="emoji">😊</span>
            </button>
            
            <button
              type="submit"
              className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center ${
                message.trim().length > 0 
                  ? 'bg-green-600 hover:bg-green-700 text-white scale-110' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
              }`}
              disabled={message.trim().length === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInput;
