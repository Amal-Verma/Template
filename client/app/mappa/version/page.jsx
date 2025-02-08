"use client"

import React, { useState } from 'react'

const VersionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReadOnlyModalOpen, setIsReadOnlyModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleReadOnlyModal = () => {
    setIsReadOnlyModalOpen(!isReadOnlyModalOpen);
  };

  const dummyData = [
    { version: '1.0.0', description: 'Initial release', username: 'admin' },
    { version: '1.1.0', description: 'Added new features', username: 'developer' },
    { version: '1.2.0', description: 'Bug fixes', username: 'tester' }
  ];

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  const handleReadOnly = () => {
    setIsModalOpen(false);
    setIsReadOnlyModalOpen(true);
  };

  const handleRevert = () => {
    alert('Revert: ' + JSON.stringify(dummyData[selectedRow]));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e] flex items-center justify-center">
      <button
        onClick={toggleModal}
        className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Open Modal
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4">Version Information</h2>
            <table className="min-w-full bg-white dark:bg-gray-800 text-center">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-yellow-600 text-white dark:bg-blue-500">Version</th>
                  <th className="py-2 px-4 bg-yellow-600 text-white dark:bg-blue-500">Description</th>
                  <th className="py-2 px-4 bg-yellow-600 text-white dark:bg-blue-500">Username</th>
                </tr>
              </thead>
              <tbody>
                {dummyData.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b dark:border-gray-700 cursor-pointer ${selectedRow === index ? 'bg-yellow-200 dark:bg-gray-700' : ''}`}
                    onClick={() => handleRowClick(index)}
                  >
                    <td className="py-2 px-4 text-gray-800 dark:text-gray-200">{row.version}</td>
                    <td className="py-2 px-4 text-gray-800 dark:text-gray-200">{row.description}</td>
                    <td className="py-2 px-4 text-gray-800 dark:text-gray-200">{row.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {selectedRow !== null && (
              <div className="mt-4 flex justify-center space-x-4">
                <button
                  onClick={handleReadOnly}
                  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Read Only
                </button>
                <button
                  onClick={handleRevert}
                  className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
                >
                  Revert
                </button>
              </div>
            )}
            <button
              onClick={toggleModal}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isReadOnlyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4">Read Only Version Details</h2>
            <p className="text-gray-800 dark:text-gray-200"><strong>Version:</strong> {dummyData[selectedRow].version}</p>
            <p className="text-gray-800 dark:text-gray-200"><strong>Description:</strong> {dummyData[selectedRow].description}</p>
            <p className="text-gray-800 dark:text-gray-200"><strong>Username:</strong> {dummyData[selectedRow].username}</p>
            <button
              onClick={toggleReadOnlyModal}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default VersionPage
