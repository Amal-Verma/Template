"use client"

import React from 'react'
import { useState } from 'react'

const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-100 p-6 dark:from-[#1e3b2f] dark:via-[#1e3b2f] dark:to-[#1e3b2f]">
      <div className="hero min-h-screen">
        <div className="hero-content w-full max-w-md">
          <div className="card bg-white/90 backdrop-blur-md shadow-2xl w-full dark:bg-gray-800/90 border border-green-100 dark:border-green-900">
            <div className="card-body">
              <div className="flex justify-center mb-4">
                <span className="text-5xl">🌿</span>
              </div>
              <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-300">
                Welcome Back, Farmer
              </h2>
              <form className="space-y-4" onSubmit={handleLogin}>
                {[
                  { label: "Email", type: "email", value: email, setter: setEmail, icon: "📧" },
                  { label: "Password", type: "password", value: password, setter: setPassword, icon: "🔒" }
                ].map((field, index) => (
                  <div key={index} className="form-control" style={{"--index": index}}>
                    <label className="label">
                      <span className="label-text flex items-center gap-2 dark:text-gray-200">
                        {field.icon} {field.label}
                      </span>
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.label.toLowerCase()}
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      className="input input-bordered hover:border-green-400 focus:border-green-500 text-gray-800 dark:text-gray-200 dark:bg-gray-700"
                      required
                    />
                  </div>
                ))}

                <div className="form-control mt-6">
                  <button className="btn bg-green-600 hover:bg-green-700 text-white border-0 dark:bg-emerald-600 dark:hover:bg-emerald-700">
                    Log into Your Farm 🌱
                  </button>
                </div>
                
                <p className="text-center text-sm text-gray-600 mt-4 dark:text-gray-400">
                  New to GrowWise?{' '}
                  <a href="/agri/register" className="text-green-600 hover:text-green-700 font-medium dark:text-green-400 dark:hover:text-green-500">
                    Start growing with us
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
