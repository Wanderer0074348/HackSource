// src/components/ProjectsList.js
'use client'
import { useState, useEffect } from 'react'
import { JetBrains_Mono } from 'next/font/google'
import { FiGithub, FiUser, FiCode, FiCalender } from 'react-icons/fi' 
const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['700']
})

export default function ProjectsList() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects')
        const data = await response.json()
        
        if (data.success) {
          setProjects(data.projects)
        } else {
          throw new Error(data.error)
        }
      } catch (err) {
        setError('Failed to load projects')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const filteredProjects = projects.filter(project =>
    project.projectName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.projectDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-t-4 border-ubuntu rounded-full animate-spin"></div>
          <div className="absolute inset-0 border-t-4 border-arch rounded-full animate-spin" style={{ animationDelay: '-0.3s' }}></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-8 bg-red-500/10 rounded-xl border border-red-500/20">
        <span className="font-bold">Error:</span> {error}
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h1 className={`${jetbrains.className} text-4xl md:text-5xl font-bold
          bg-gradient-to-r from-ubuntu via-arch to-ubuntu bg-clip-text text-transparent
          animate-gradient-x`}>
          Projects
        </h1>
        <p className="text-gray-400">Explore registered projects</p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 bg-black/40 rounded-xl border border-white/10 
              focus:border-ubuntu focus:ring-1 focus:ring-ubuntu transition-all
              placeholder:text-gray-500 backdrop-blur-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.length === 0 ? (
          <div className="col-span-full text-center py-12 text-gray-400">
            No projects found matching your search.
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div 
              key={project._id}
              className="group relative overflow-hidden backdrop-blur-sm bg-black/40 rounded-xl 
                border border-white/10 hover:border-ubuntu/30 transition-all duration-300
                hover:shadow-lg hover:shadow-ubuntu/5"
            >
              {/* Project Card Header */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ubuntu to-arch transform origin-left 
                scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-bold text-ubuntu group-hover:text-arch transition-colors duration-300">
                    {project.projectName}
                  </h2>
                  <a 
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-black/30 text-gray-400 hover:text-white 
                      transition-colors duration-300"
                  >
                    <FiGithub size={20} />
                  </a>
                </div>

                <p className="text-gray-300 line-clamp-3">
                  {project.projectDescription}
                </p>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <FiUser className="text-ubuntu" />
                      {project.fullName}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <FiCode className="text-arch" />
                      {project.bitsId}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-ubuntu/5 to-arch/5 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
