'use client'

import { motion } from 'framer-motion'

const skills = [
  { category: 'Languages', items: ['C++', 'Python', 'JavaScript', 'SQL'] },
  { category: 'Frameworks', items: ['React', 'Next.js', 'Node.js', 'Express.js'] },
  { category: 'Tools/Cloud', items: ['Git', 'Docker', 'MongoDB', 'MySQL'] },
  { category: 'Core', items: ['Data Structures & Algorithms', 'OOP', 'REST APIs'] }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-xl">Tools I use to build amazing things</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, x: groupIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">{skillGroup.category}</h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (groupIndex * 0.1) + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <span className="text-gray-300 text-base">{skill}</span>
                    <div className="w-28 h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${85 + Math.random() * 15}%` }}
                        transition={{ duration: 1, delay: (groupIndex * 0.1) + (index * 0.1) }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}