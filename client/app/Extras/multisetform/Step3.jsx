import React from 'react'

const Step3 = ({ formData, handleChange }) => (
  <>
    <div className="form-control">
      <label className="label">
        <span className="label-text flex items-center gap-2 dark:text-gray-200">🎂 Birthdate</span>
      </label>
      <input
        type="date"
        name="birthdate"
        value={formData.birthdate}
        onChange={handleChange}
        className="input input-bordered hover:border-yellow-400 focus:border-yellow-500 text-gray-800 dark:text-gray-200 dark:bg-gray-700"
        required
      />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text flex items-center gap-2 dark:text-gray-200">✅ Terms and Conditions</span>
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChange}
          className="checkbox checkbox-primary"
          required
        />
        <span className="text-gray-800 dark:text-gray-200">I agree to the terms and conditions</span>
      </label>
    </div>
  </>
)

export default Step3
