import React from 'react'

const Step2 = ({ formData, handleChange, handleMultiCheckboxChange }) => (
  <>
    <div className="form-control">
      <label className="label">
        <span className="label-text flex items-center gap-2 dark:text-gray-200">👫 Gender</span>
      </label>
      <select
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        className="select select-bordered hover:border-yellow-400 focus:border-yellow-500 text-gray-800 dark:text-gray-200 dark:bg-gray-700"
        required
      >
        <option value="" disabled>Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text flex items-center gap-2 dark:text-gray-200">🎨 Interests</span>
      </label>
      <div className="flex flex-wrap gap-2">
        {['Sports', 'Music', 'Movies', 'Tech'].map((interest) => (
          <label key={interest} className="flex items-center gap-2">
            <input
              type="checkbox"
              name="interests"
              value={interest}
              checked={formData.interests.includes(interest)}
              onChange={handleMultiCheckboxChange}
              className="checkbox checkbox-primary"
            />
            <span className="text-gray-800 dark:text-gray-200">{interest}</span>
          </label>
        ))}
      </div>
    </div>
  </>
)

export default Step2
