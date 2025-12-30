'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-xl">Ready to build something amazing together?</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300 glow"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Location</h4>
                  <p className="text-gray-400">Vijayapur, Karnataka</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="space-y-4">
                <a
                  href="mailto:akshaypujarix18@gmail.com"
                  className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300">akshaypujarix18@gmail.com</span>
                </a>
                
                <a
                  href="https://github.com/AkshayApujari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300">GitHub</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/akshaypujari27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}