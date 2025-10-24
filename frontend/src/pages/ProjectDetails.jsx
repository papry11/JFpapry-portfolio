import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const ProjectDetails = () => {
  const { id } = useParams()
  const { ProjectsData } = useContext(AppContext)
  const [projectInfo, setProjectInfo] = useState(null)

  const fetchProjectInfo = () => {
    if (ProjectsData && ProjectsData.length > 0) {
      const project = ProjectsData.find(project => String(project._id) === String(id))
      setProjectInfo(project)
    }
  }

  useEffect(() => {
    fetchProjectInfo()
  }, [ProjectsData, id])

  return (
    <div className="min-h-screen flex items-center justify-center   pt-10">
      {projectInfo ? (
        <div className="max-w-5xl w-full bg-white rounded-2xl border border-primary-dull shadow-lg overflow-hidden flex flex-col md:flex-row gap-6">

          
          {/* Image Section */}
          <div className="md:w-1/2">
            <img 
              src={projectInfo.image} 
              alt={projectInfo.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Info Section */}
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{projectInfo.title}</h2>
              <p className="text-gray-600 mb-6">{projectInfo.description}</p>
              <p className="text-indigo-600 font-medium mb-4">
                Live URL: <a href={projectInfo.liveUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-indigo-800">{projectInfo.liveUrl}</a>
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {(Array.isArray(projectInfo.techStack) ? projectInfo.techStack : projectInfo.techStack.split(',')).map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-lg">Project not found.</p>
      )}
    </div>
  )
}

export default ProjectDetails
