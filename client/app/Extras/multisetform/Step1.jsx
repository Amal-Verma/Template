import React from 'react'

const Step1 = ({ formData, handleChange }) => (
  <>
    <div className="form-control">
      <label className="label">
        <span className="label-text flex items-center gap-2 dark:text-gray-200">📛 Name</span>
      </label>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleChange}
        className="input input-bordered hover:border-yellow-400 focus:border-yellow-500 text-gray-800 dark:text-gray-200 dark:bg-gray-700"
        required
      />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text flex items-center gap-2 dark:text-gray-200">📧 Email</span>
      </label>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleChange}
        className="input input-bordered hover:border-yellow-400 focus:border-yellow-500 text-gray-800 dark:text-gray-200 dark:bg-gray-700"
        required
      />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text flex items-center gap-2 dark:text-gray-200">🔑 Password</span>
      </label>
      <input
        type="password"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        className="input input-bordered hover:border-yellow-400 focus:border-yellow-500 text-gray-800 dark:text-gray-200 dark:bg-gray-700"
        required
      />
    </div>
  </>
)

export default Step1
