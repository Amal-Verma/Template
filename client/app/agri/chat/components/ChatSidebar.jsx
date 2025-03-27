import React from 'react';

const ChatSidebar = ({ 
  users, 
  searchTerm, 
  setSearchTerm, 
  filter, 
  setFilter, 
  activeChat, 
  setActiveChat 
}) => {
  // Filter users based on search and category
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.role.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    return matchesSearch && user.category === filter;
  });

  return (
    <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-50/90 dark:bg-gray-900/90 border-r border-green-100 dark:border-green-800/50 flex flex-col h-full backdrop-blur-sm relative overflow-hidden">
      {/* Decorative plant element */}
      <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10 dark:opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M30,90 C30,70 50,60 50,40 C50,60 70,70 70,90" fill="none" stroke="currentColor" strokeWidth="4" className="text-green-800 dark:text-green-300" />
          <path d="M50,40 L50,90" fill="none" stroke="currentColor" strokeWidth="4" className="text-green-800 dark:text-green-300" />
          <path d="M25,70 C25,60 40,55 50,40 C50,55 60,60 75,70" fill="none" stroke="currentColor" strokeWidth="3" className="text-green-800 dark:text-green-300" />
          <path d="M20,50 C20,40 35,35 50,25 C50,35 65,40 80,50" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-800 dark:text-green-300" />
        </svg>
      </div>
      
      {/* Header */}
      <div className="p-5 border-b border-green-100 dark:border-green-800/50">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center">
          <span className="mr-2">🌾</span> GrowWise Chat
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Connect with experts & farmers</p>
      </div>
      
      {/* Search and filter */}
      <div className="p-4 border-b border-green-100 dark:border-green-800/50">
        <div className="relative transition-all duration-300 focus-within:scale-[1.02]">
          <input
            type="text"
            placeholder="Search contacts..."
            className="w-full py-3 pl-10 pr-4 rounded-xl border border-green-100 dark:border-green-900 bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-3 top-3.5 text-gray-400">🔍</span>
        </div>
        
        <div className="flex mt-3 space-x-2 overflow-x-auto pb-2 scrollbar-thin">
          {[
            { id: 'all', label: 'All', icon: '🔄' },
            { id: 'expert', label: 'Experts', icon: '👩‍🔬' },
            { id: 'farmer', label: 'Farmers', icon: '🧑‍🌾' },
            { id: 'support', label: 'Support', icon: '🛟' },
            { id: 'service', label: 'Services', icon: '🤖' },
            { id: 'group', label: 'Groups', icon: '👥' }
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-3 py-1.5 text-sm rounded-full transition-all duration-300 flex items-center space-x-1
                ${filter === category.id 
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/30'} 
                whitespace-nowrap border border-transparent hover:border-green-200 dark:hover:border-green-800/50`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Contact list - flex-grow to take remaining height */}
      <div className="overflow-y-auto flex-grow">
        {filteredUsers.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-5 text-gray-500 dark:text-gray-400">
            <span className="text-4xl mb-2">🔍</span>
            <p>No contacts found</p>
            <p className="text-sm">Try a different search term</p>
          </div>
        ) : (
          filteredUsers.map(user => (
            <div 
              key={user.id}
              onClick={() => setActiveChat(user.id)}
              className={`p-4 hover:bg-white/60 dark:hover:bg-gray-800/60 flex items-start cursor-pointer relative transition-all duration-300
                         ${activeChat === user.id 
                            ? 'bg-white dark:bg-gray-800 border-l-4 border-green-600 shadow-sm' 
                            : 'border-l-4 border-transparent'}`}
            >
              <div className="relative">
                <div className={`text-3xl transition-all duration-300 ${activeChat === user.id ? 'transform scale-110' : ''}`}>
                  {user.avatar}
                </div>
                {user.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></span>
                )}
              </div>
              
              <div className="ml-3 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className={`font-medium transition-all duration-300 ${
                    activeChat === user.id 
                      ? 'text-green-700 dark:text-green-400' 
                      : 'text-gray-800 dark:text-gray-200'
                  }`}>
                    {user.name}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{user.lastSeen}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{user.role}</p>
                <div className="flex items-center mt-1.5">
                  <span className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/70 text-green-800 dark:text-green-200 rounded-full">
                    {user.badge}
                  </span>
                  {user.category === 'group' && (
                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 flex items-center">
                      <span className="mr-1">👥</span> {user.members}
                    </span>
                  )}
                </div>
              </div>
              
              {user.unread > 0 && (
                <span className="absolute top-4 right-4 flex items-center justify-center min-w-5 h-5 px-1.5 text-xs bg-green-600 text-white rounded-full animate-pulse">
                  {user.unread}
                </span>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatSidebar;
