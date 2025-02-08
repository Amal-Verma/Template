"use client"

import React, { useEffect, useState } from 'react'
import Card from './Card'
import Button from './Button'

const Page = () => {
  const [username, setUsername] = useState('')
  const [repositories, setRepositories] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [currentRepo, setCurrentRepo] = useState(null)
  const [collaborators, setCollaborators] = useState([])
  const [newCollaborator, setNewCollaborator] = useState('')
  const [accessType, setAccessType] = useState('view')

  useEffect(() => {
    // Fetch user data and repositories
    setUsername('JohnDoe')
    setRepositories([
      { name: 'Repo1' },
      { name: 'Repo2' },
      { name: 'Repo3' }
    ])
  }, [])

  const handleManageAccess = (repoName) => {
    setCurrentRepo(repoName)
    setShowModal(true)
    // Fetch collaborators for the repo
    setCollaborators([
      { name: 'User1', access: 'view' },
      { name: 'User2', access: 'edit' }
    ])
  }

  const handleDeleteRepo = (repoName) => {
    // Logic to delete repository
    console.log(`Delete repository ${repoName}`)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setCurrentRepo(null)
    setNewCollaborator('')
    setAccessType('view')
  }

  const handleAddCollaborator = () => {
    // Logic to add collaborator
    console.log(`Add ${newCollaborator} with ${accessType} access to ${currentRepo}`)
    setCollaborators([...collaborators, { name: newCollaborator, access: accessType }])
    setNewCollaborator('')
    setAccessType('view')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 p-6 dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 border-2 border-yellow-200 dark:bg-gray-800/90 dark:border-gray-700">
          {/* Header section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent mb-2 dark:from-blue-500 dark:to-purple-500">
                Welcome Back, {username}! ✨
              </h1>
              <p className="text-gray-600 dark:text-gray-400">Here's your personal dashboard</p>
            </div>
            <Button 
              onClick={() => {
                // Logic to add a new repository
                console.log('Add new repository')
              }}
              className="btn bg-green-100 text-green-800 hover:bg-green-200 px-6 rounded-full flex items-center gap-2 dark:bg-green-700 dark:text-green-200 dark:hover:bg-green-600"
              icon="➕"
              label="Add Repo"
            />
          </div>

          {/* Repositories info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.map((repo, index) => (
              <Card 
                key={index}
                index={index}
                icon="📁"
                label={repo.name}
                value={`Repository ${index + 1}`}
                color="from-blue-50 to-blue-100 dark:from-blue-700 dark:to-blue-500"
                onAddCollaborator={() => handleManageAccess(repo.name)}
                onDeleteRepo={() => handleDeleteRepo(repo.name)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 w-96">
            <h2 className="text-xl font-bold mb-4">Manage Access: {currentRepo}</h2>
            <div className="mb-4">
              <input 
                type="text" 
                value={newCollaborator}
                onChange={(e) => setNewCollaborator(e.target.value)}
                placeholder="Enter username"
                className="w-full p-2 border rounded mb-2 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              />
              <select 
                value={accessType}
                onChange={(e) => setAccessType(e.target.value)}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
              >
                <option value="view">View</option>
                <option value="edit">Edit</option>
              </select>
              <button 
                onClick={handleAddCollaborator}
                className="btn bg-green-100 text-green-800 hover:bg-green-200 px-4 py-2 rounded-full dark:bg-green-700 dark:text-green-200 dark:hover:bg-green-600 mt-2"
              >
                Add Collaborator
              </button>
            </div>
            <div className="mb-4">
              <h3 className="font-bold mb-2">Current Collaborators</h3>
              <ul>
                {collaborators.map((collab, index) => (
                  <li key={index} className="flex justify-between items-center mb-2">
                    <span>{collab.name} ({collab.access})</span>
                    <button 
                      onClick={() => {
                        // Logic to remove collaborator
                        console.log(`Remove ${collab.name} from ${currentRepo}`)
                        setCollaborators(collaborators.filter(c => c.name !== collab.name))
                      }}
                      className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-600"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button 
              onClick={handleCloseModal}
              className="btn bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-2 rounded-full dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page