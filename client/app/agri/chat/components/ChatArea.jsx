import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatArea = ({ 
  currentChat, 
  activeUser, 
  message, 
  setMessage, 
  handleSendMessage 
}) => {
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [currentChat]);

  // Empty state when no chat is selected
  if (!currentChat) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm">
        <div className="flex flex-col items-center max-w-md px-8 py-12 text-center">
          <div className="relative">
            <span className="text-7xl">💬</span>
            <span className="absolute -bottom-2 -right-2 text-3xl">🌱</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-6 mb-3">
            Select a conversation
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Choose a contact from the list to start chatting about your agricultural questions and insights
          </p>
          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
              <div className="text-2xl mb-2">👩‍🔬</div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200">Expert Advice</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Get professional guidance for your crops</p>
            </div>
            <div className="bg-white/60 dark:bg-gray-800/60 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
              <div className="text-2xl mb-2">☀️</div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200">Weather Alerts</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Stay updated on conditions affecting your farm</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Format date for the header
  const getLastActiveDate = () => {
    if (!currentChat.messages.length) return '';
    const lastMessage = currentChat.messages[currentChat.messages.length - 1];
    return lastMessage.date;
  };

  return (
    <div className="flex-1 flex flex-col h-full relative">
      {/* Chat header */}
      <div className="p-4 border-b border-green-100 dark:border-green-800/50 flex items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
        <div className="relative">
          <div className="text-3xl bg-gray-100 dark:bg-gray-700 p-2 rounded-full">
            {activeUser?.avatar}
          </div>
          {activeUser?.online && (
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse"></span>
          )}
        </div>
        
        <div className="ml-3 flex-1">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                {activeUser?.name}
                {activeUser?.category === 'expert' && (
                  <span className="ml-2 px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">Verified</span>
                )}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                <span className="mr-1">{
                  activeUser?.category === 'expert' ? '👩‍🔬' : 
                  activeUser?.category === 'farmer' ? '🧑‍🌾' : 
                  activeUser?.category === 'support' ? '🛟' : 
                  activeUser?.category === 'service' ? '🤖' : '👥'
                }</span>
                {activeUser?.role} • {activeUser?.online ? (
                  <span className="flex items-center text-green-600 dark:text-green-400">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                    Online
                  </span>
                ) : (
                  <span>{activeUser?.lastSeen}</span>
                )}
              </p>
            </div>
            <div className="flex space-x-1">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <span role="img" aria-label="call" className="text-gray-600 dark:text-gray-400">📞</span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <span role="img" aria-label="video" className="text-gray-600 dark:text-gray-400">📹</span>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <span role="img" aria-label="info" className="text-gray-600 dark:text-gray-400">ℹ️</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Messages area */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur-sm">
        {/* Date indicator */}
        <div className="text-center mb-6 sticky top-0 z-10">
          <span className="inline-block px-3 py-1 bg-green-100/80 dark:bg-green-900/80 text-green-800 dark:text-green-200 text-xs rounded-full backdrop-blur-sm">
            {getLastActiveDate()}
          </span>
        </div>
        
        {currentChat.messages.map((msg, index) => (
          <ChatMessage 
            key={msg.id} 
            message={msg} 
            isFirstInSequence={
              index === 0 || 
              currentChat.messages[index - 1].sender !== msg.sender
            }
            isLastInSequence={
              index === currentChat.messages.length - 1 || 
              currentChat.messages[index + 1].sender !== msg.sender
            }
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Message input */}
      <ChatInput 
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatArea;
