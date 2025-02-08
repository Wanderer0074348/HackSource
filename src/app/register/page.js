'use client'
import { useState } from 'react'
import { JetBrains_Mono } from 'next/font/google'

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['700']
})

export default function RegisterPage() {
  const [registrationType, setRegistrationType] = useState('project')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    bitsId: '',
    projectName: '',
    projectDescription: '',
    githubRepo: '',
    githubProfile: '',
    skills: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validateForm = () => {
    if (!formData.fullName || !formData.bitsId) {
      setMessage('Please fill in all required fields')
      return false
    }

    const bitsIdRegex = /^20\d{2}[A-Z0-9]{4}\d{4}[A-Z]$/
    if (!bitsIdRegex.test(formData.bitsId)) {
      setMessage('Please enter a valid BITS ID format (e.g., 2021A7PS001U)')
      return false
    }

    if (registrationType === 'project') {
      if (!formData.projectName || !formData.projectDescription || !formData.githubRepo) {
        setMessage('Please fill in all project fields')
        return false
      }
      if (!formData.githubRepo.startsWith('https://github.com/')) {
        setMessage('Please enter a valid GitHub repository URL')
        return false
      }
    } else {
      if (!formData.githubProfile || !formData.skills) {
        setMessage('Please fill in all contributor fields')
        return false
      }
      if (!formData.githubProfile.startsWith('https://github.com/')) {
        setMessage('Please enter a valid GitHub profile URL')
        return false
      }
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return
    if (!validateForm()) return

    setIsSubmitting(true)
    setMessage('')

    try {
      const dataToSubmit = {
        type: registrationType,
        fullName: formData.fullName.trim(),
        bitsId: formData.bitsId.trim(),
        ...(registrationType === 'project' 
          ? {
              projectName: formData.projectName.trim(),
              projectDescription: formData.projectDescription.trim(),
              githubRepo: formData.githubRepo.trim(),
            }
          : {
              githubProfile: formData.githubProfile.trim(),
              skills: formData.skills.trim(),
            }
        )
      }

      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      })

      // Handle rate limiting
      if (response.status === 429) {
        setMessage('Too many attempts. Please try again later.')
        return
      }

      const result = await response.json()

      if (result.success) {
        setMessage('Registration successful! 🎉')
        setFormData({
          fullName: '',
          bitsId: '',
          projectName: '',
          projectDescription: '',
          githubRepo: '',
          githubProfile: '',
          skills: '',
        })
      } else {
        // Handle specific error messages from backend
        setMessage(result.error || 'Registration failed. Please try again.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      setMessage('An error occurred during registration. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Toggle Buttons */}
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

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="relative backdrop-blur-sm bg-black/40 p-6 md:p-8 rounded-xl border border-white/10">
          <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${registrationType === 'project' ? 'text-ubuntu' : 'text-arch'}`}>
            {registrationType === 'project' ? 'Register Your Project' : 'Register as Contributor'}
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-gray-300">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700
                  focus:border-${registrationType === 'project' ? 'ubuntu' : 'arch'} 
                  focus:ring-1 focus:ring-${registrationType === 'project' ? 'ubuntu' : 'arch'} 
                  transition-colors duration-200`}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-gray-300">BITS ID</label>
              <input
                type="text"
                name="bitsId"
                value={formData.bitsId}
                onChange={handleChange}
                required
                placeholder="2021ABCD1234"
                className={`w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700
                  focus:border-${registrationType === 'project' ? 'ubuntu' : 'arch'} 
                  focus:ring-1 focus:ring-${registrationType === 'project' ? 'ubuntu' : 'arch'} 
                  transition-colors duration-200`}
              />
            </div>

            {registrationType === 'project' ? (
              <>
                <div className="space-y-2">
                  <label className="block text-gray-300">Project Name</label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700
                      focus:border-ubuntu focus:ring-1 focus:ring-ubuntu transition-colors duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-300">Project Description</label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700
                      focus:border-ubuntu focus:ring-1 focus:ring-ubuntu transition-colors duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-300">GitHub Repository Link</label>
                  <input
                    type="url"
                    name="githubRepo"
                    value={formData.githubRepo}
                    onChange={handleChange}
                    required
                    placeholder="https://github.com/username/project"
                    className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700
                      focus:border-ubuntu focus:ring-1 focus:ring-ubuntu transition-colors duration-200"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="block text-gray-300">GitHub Profile</label>
                  <input
                    type="url"
                    name="githubProfile"
                    value={formData.githubProfile}
                    onChange={handleChange}
                    required
                    placeholder="https://github.com/username"
                    className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700
                      focus:border-arch focus:ring-1 focus:ring-arch transition-colors duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-300">Skills & Interests</label>
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="What technologies are you interested in? What kind of projects would you like to contribute to?"
                    className="w-full px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-700
                      focus:border-arch focus:ring-1 focus:ring-arch transition-colors duration-200"
                  />
                </div>
              </>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 ${
              registrationType === 'project' ? 'bg-ubuntu' : 'bg-arch'
            } text-white rounded-lg
              hover:bg-opacity-90 transition-colors duration-200
              font-bold text-lg mt-8 
              disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSubmitting 
              ? 'Registering...' 
              : registrationType === 'project' 
                ? 'Register Project' 
                : 'Register as Contributor'}
          </button>
        </form>

        {message && (
          <div className={`mt-4 p-4 rounded-lg text-center ${
            message.includes('successful') 
              ? 'bg-green-900/50 text-green-300'
              : 'bg-red-900/50 text-red-300'
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  )
}
