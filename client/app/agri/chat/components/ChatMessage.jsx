import React from 'react';

const ChatMessage = ({ message, isFirstInSequence, isLastInSequence }) => {
  const isSender = message.sender === 'you';
  const isGroupMember = message.sender === 'Member';
  
  return (
    <div className={`mb-2 ${isSender ? 'text-right' : ''} animate-fadeIn`} style={{ animationDuration: '0.3s' }}>
      {isGroupMember && isFirstInSequence && (
        <p className="text-xs text-gray-600 dark:text-gray-400 ml-12 mb-1 font-medium">{message.name}</p>
      )}
      
      <div className={`flex items-end ${isSender ? 'justify-end' : ''}`}>
        {!isSender && isFirstInSequence && !isGroupMember && (
          <div className="flex-shrink-0 mr-2 mb-1">
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-sm">
              {message.sender === 'them' ? '👤' : '👥'}
            </div>
          </div>
        )}
        
        <div 
          className={`inline-block max-w-[85%] px-4 py-2 shadow-sm ${
            isSender 
              ? isLastInSequence
                ? 'rounded-t-2xl rounded-bl-2xl rounded-br-md bg-green-600 text-white' 
                : 'rounded-t-2xl rounded-bl-2xl bg-green-600 text-white'
              : isLastInSequence
                ? isGroupMember
                  ? 'rounded-t-2xl rounded-br-2xl rounded-bl-md bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                  : 'rounded-t-2xl rounded-br-2xl rounded-bl-md bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                : isGroupMember
                  ? 'rounded-t-2xl rounded-br-2xl bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
                  : 'rounded-t-2xl rounded-br-2xl bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200'
          }`}
        >
          <p className="whitespace-pre-wrap break-words">{message.text}</p>
        </div>
      </div>
      
      <div className={`text-xs mt-1 text-gray-500 dark:text-gray-400 ${isSender ? 'text-right mr-1' : 'text-left ml-10'}`}>
        {message.time}
        {isSender && (
          <span className="ml-1.5 inline-flex">
            {message.status === 'read' 
              ? <span className="text-blue-500 dark:text-blue-400">✓✓</span>  
              : <span>✓</span>}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
