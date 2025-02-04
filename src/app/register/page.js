// src/app/register/page.js
'use client'
import { useState } from 'react'
import { JetBrains_Mono } from 'next/font/google'
import Navbar from '@/components/NavBar'

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['700']
})

export default function RegisterPage() {
  const [registrationType, setRegistrationType] = useState('project')

  return (
<>
    <Navbar></Navbar>  
    <div className="min-h-screen bg-black text-white pt-48 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Registration Type Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 p-1 rounded-lg backdrop-blur-sm border border-white/10">
            <button
              onClick={() => setRegistrationType('project')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                registrationType === 'project'
                  ? 'bg-ubuntu text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Project Registration
            </button>
            <button
              onClick={() => setRegistrationType('contributor')}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                registrationType === 'contributor'
                  ? 'bg-arch text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Contributor Registration
            </button>
          </div>
        </div>

        {/* Registration Forms */}
        <div className="relative backdrop-blur-sm bg-black/40 p-6 md:p-8 rounded-xl border border-white/10">
          {registrationType === 'project' ? (
            // Project Registration Form
            <form className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-ubuntu mb-8">Register Your Project</h2>
              
              <div className="space-y-2">
                <label className="block text-gray-300">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 
                           focus:border-ubuntu focus:ring-1 focus:ring-ubuntu
                           transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300">BITS ID</label>
                <input
                  type="text"
                  required
                  placeholder="2021ABCD1234"
                  className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 
                           focus:border-ubuntu focus:ring-1 focus:ring-ubuntu
                           transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300">Project Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 
                           focus:border-ubuntu focus:ring-1 focus:ring-ubuntu
                           transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300">Project Description</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 
                           focus:border-ubuntu focus:ring-1 focus:ring-ubuntu
                           transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300">GitHub Repository Link</label>
                <input
                  type="url"
                  required
                  placeholder="https://github.com/username/project"
                  className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 
                           focus:border-ubuntu focus:ring-1 focus:ring-ubuntu
                           transition-colors duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-ubuntu text-white rounded-lg
                         hover:bg-opacity-90 transition-colors duration-200
                         font-bold text-lg mt-8"
              >
                Register Project
              </button>
            </form>
          ) : (
            // Contributor Registration Form
            <form className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-arch mb-8">Register as Contributor</h2>
              
              <div className="space-y-2">
                <label className="block text-gray-300">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 
                           focus:border-arch focus:ring-1 focus:ring-arch
                           transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300">BITS ID</label>
                <input
                  type="text"
                  required
                  placeholder="2021ABCD1234"
                  className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 
                           focus:border-arch focus:ring-1 focus:ring-arch
                           transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300">GitHub Profile</label>
                <input
                  type="url"
                  required
                  placeholder="https://github.com/username"
                  className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 
                           focus:border-arch focus:ring-1 focus:ring-arch
                           transition-colors duration-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300">Skills & Interests</label>
                <textarea
                  required
                  rows={4}
                  placeholder="What technologies are you interested in? What kind of projects would you like to contribute to?"
                  className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700 
                           focus:border-arch focus:ring-1 focus:ring-arch
                           transition-colors duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-arch text-white rounded-lg
                         hover:bg-opacity-90 transition-colors duration-200
                         font-bold text-lg mt-8"
              >
                Register as Contributor
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
    </>
  )
}
