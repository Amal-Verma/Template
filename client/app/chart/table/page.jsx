"use client"

import React from 'react'

const Table = ({ data }) => {
  const defaultData = [
    { name: 'John Doe', age: 28, email: 'john@example.com' },
    { name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { name: 'Sam Green', age: 45, email: 'sam@example.com' }
  ]

  const tableData = data || defaultData

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 p-6 dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e] flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-md shadow-2xl p-8 rounded-2xl dark:bg-gray-800/90">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-500">
          Beautiful Table ✨
        </h2>
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-yellow-600 text-white dark:bg-blue-500">Name</th>
              <th className="py-2 px-4 bg-yellow-600 text-white dark:bg-blue-500">Age</th>
              <th className="py-2 px-4 bg-yellow-600 text-white dark:bg-blue-500">Email</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="border-b dark:border-gray-700">
                <td className="py-2 px-4 text-gray-800 dark:text-gray-200">{row.name}</td>
                <td className="py-2 px-4 text-gray-800 dark:text-gray-200">{row.age}</td>
                <td className="py-2 px-4 text-gray-800 dark:text-gray-200">{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
