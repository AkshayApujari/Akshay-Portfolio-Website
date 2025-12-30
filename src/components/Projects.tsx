'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Personal Growth Guide',
    tech: 'Next.js, MERN, JWT',
    description: 'Full-stack app with secure authentication and user management',
    color: 'from-primary to-blue-400',
    glow: 'glow',
    github: 'https://github.com/AkshayApujari/personal-growthguide',
    live: 'https://personal-growth-guide-ckehgtcwj-akshay-pujaris-projects.vercel.app/'
  },
  {
    title: 'Facial Emotion Recognition',
    tech: 'Vision Transformers, Python',
    description: '84% accuracy on AffectNet dataset using advanced ML models',
    color: 'from-secondary to-pink-400',
    glow: 'glow-purple',
    github: 'https://github.com/AkshayApujari/Facial-Emotion-Recognition',
    live: '#'
  },
  {
    title: 'Bidirectional Lead-Task Sync',
    tech: 'Python, FastAPI',
    description: 'Automated sync system for Google Sheets and lead tracking',
    color: 'from-accent to-green-400',
    glow: 'glow-lime',
    github: 'https://github.com/AkshayApujari/automation-two-way-sync-AkshayPujari',
    live: '#'
  },
  {
    title: 'E-Commerce Platform',
    tech: 'React, Node.js, MongoDB',
    description: 'Complete shopping solution with cart and product management',
    color: 'from-orange-400 to-red-400',
    glow: 'glow',
    github: 'https://github.com/AkshayApujari/ecommerce-app',
    live: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-xl">Innovative solutions I&apos;ve built</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:${project.glow} transition-all duration-300 cursor-pointer ${index === 0 ? 'md:col-span-2' : ''} min-h-[280px]`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-primary text-base font-medium mb-4">{project.tech}</p>
                <p className="text-gray-300 text-base mb-6 flex-grow">{project.description}</p>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary/20 text-primary rounded-lg hover:bg-primary hover:text-black transition-all duration-300 text-base font-medium"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-black transition-all duration-300 text-base font-medium"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}