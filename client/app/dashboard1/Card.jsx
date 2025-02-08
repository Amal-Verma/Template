import React from 'react'

const Card = ({ index, icon, label, value, color, onAddCollaborator, onDeleteRepo }) => {
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
      {onAddCollaborator && onDeleteRepo && (
        <div className="mt-4 flex gap-2">
          <button 
            onClick={onAddCollaborator}
            className="btn bg-green-100 text-green-800 hover:bg-green-200 px-4 py-2 rounded-full dark:bg-green-700 dark:text-green-200 dark:hover:bg-green-600"
          >
            Add Collaborator
          </button>
          <button 
            onClick={onDeleteRepo}
            className="btn bg-red-100 text-red-800 hover:bg-red-200 px-4 py-2 rounded-full dark:bg-red-700 dark:text-red-200 dark:hover:bg-red-600"
          >
            Delete Repo
          </button>
        </div>
      )}
    </div>
  )
}

export default Card
