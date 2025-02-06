import React from 'react'

const Card = ({ index, icon, label, value, color }) => {
  return (
    <div 
      style={{"--index": index, animationDelay: `${index * 0.1}s`}}
      className={`bg-gradient-to-br ${color} p-6 rounded-xl 
                shadow-lg hover:shadow-xl transition-all duration-300 
                transform hover:-translate-y-1 border border-yellow-100 dark:border-gray-700
                animate-fadeIn`}
    >
      <div className="text-3xl mb-3">{icon}</div>
      <h2 className="text-sm font-bold text-gray-700 mb-2 dark:text-gray-200">{label}</h2>
      <p className="text-lg text-gray-800 font-medium dark:text-gray-300">{value || "Not provided"}</p>
    </div>
  )
}

export default Card
