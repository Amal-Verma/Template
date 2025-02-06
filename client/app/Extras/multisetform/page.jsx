"use client"

import React, { useState } from 'react'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const MultiStepForm = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    interests: [],
    birthdate: '',
    terms: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleMultiCheckboxChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => {
      const interests = prevState.interests.includes(value)
        ? prevState.interests.filter((interest) => interest !== value)
        : [...prevState.interests, value]
      return { ...prevState, [name]: interests }
    })
  }

  const nextStep = () => setStep((prevStep) => prevStep + 1)
  const prevStep = () => setStep((prevStep) => prevStep - 1)
  const goToStep = (stepNumber) => setStep(stepNumber)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 p-6 dark:from-[#1a1a2e] dark:via-[#1a1a2e] dark:to-[#1a1a2e]">
      <div className="hero min-h-screen">
        <div className="hero-content w-full max-w-md">
          <div className="card bg-white/90 backdrop-blur-md shadow-2xl w-full dark:bg-gray-800/90">
            <div className="card-body">
              <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent dark:from-blue-500 dark:to-purple-500">
                Multi-Step Form ✨
              </h2>
              <div className="flex justify-center mb-6">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`h-2 w-1/4 mx-2 cursor-pointer ${step === num ? 'bg-yellow-600 dark:bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                    onClick={() => goToStep(num)}
                  />
                ))}
              </div>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {step === 1 && <Step1 formData={formData} handleChange={handleChange} />}
                {step === 2 && <Step2 formData={formData} handleChange={handleChange} handleMultiCheckboxChange={handleMultiCheckboxChange} />}
                {step === 3 && <Step3 formData={formData} handleChange={handleChange} />}
                <div className="form-control mt-6 flex justify-between gap-4">
                  {step > 1 && (
                    <button type="button" onClick={prevStep} className="btn btn-secondary text-white dark:bg-blue-600 dark:hover:bg-blue-700">
                      Previous
                    </button>
                  )}
                  {step < 3 ? (
                    <button type="button" onClick={nextStep} className="btn btn-primary text-white dark:bg-blue-600 dark:hover:bg-blue-700">
                      Next
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-primary text-white dark:bg-blue-600 dark:hover:bg-blue-700">
                      Submit
                    </button>
                  )}
                </div>
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Step {step} of 3</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultiStepForm
