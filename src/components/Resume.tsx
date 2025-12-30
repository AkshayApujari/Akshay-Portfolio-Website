'use client'

import { motion } from 'framer-motion'
import { Download, MapPin, Calendar } from 'lucide-react'

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-xl">My professional journey</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center mb-12"
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-[#0a0a0a] z-10"></div>

            {/* Card */}
            <div className="w-full max-w-lg ml-auto mr-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 hover:glow-purple transition-all duration-300">
              <div className="flex items-center gap-2 text-primary mb-3">
                <Calendar className="w-5 h-5" />
                <span className="text-base font-medium">Feb 2025 - Jul 2025</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">Research Intern</h3>
              
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <MapPin className="w-5 h-5" />
                <span className="text-base">University of Borås, Sweden</span>
              </div>
              
              <p className="text-gray-300 text-base leading-relaxed mb-5">
                Designed computer vision models using ConvNext for textile classification achieving 88.39% accuracy. 
                Engineered data pipelines and optimized model performance for industrial applications.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-5">
                {['Computer Vision', 'ConvNext', 'Python', 'Data Pipelines'].map((tech) => (
                  <span key={tech} className="px-3 py-2 bg-primary/20 text-primary text-sm rounded-full font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-secondary to-primary text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 glow"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}