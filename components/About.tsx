'use client'

import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import { FiBookOpen } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl font-bold text-white shadow-2xl animate-pulse-glow relative overflow-hidden">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 opacity-50 animate-pulse"></div>
                <span className="relative z-10 drop-shadow-lg">SV</span>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a proficient and passionate software developer with a focus on innovative solutions in technology. With extensive experience in various programming languages and frameworks, I excel at developing web applications and APIs.
              </p>
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My recent internships provided me with hands-on experience in collaborative teams, enhancing user experience and optimizing workflows. I strive for continuous learning and improvement to contribute effectively to impactful projects.
              </p>
            </motion.div>
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 sm:mt-16"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
              <FaGraduationCap className="w-6 h-6 text-primary-600" />
              Education
            </h3>
            <div className="bg-gradient-to-r from-primary-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 sm:p-6 shadow-xl border border-primary-100 dark:border-gray-600">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="bg-primary-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    B.Tech in Computer Science and Engineering
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    RYMEC, Ballari
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Graduating May 2026 • GPA: 84.47%
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium flex items-center gap-1">
                      <FiBookOpen className="w-4 h-4" />
                      DSA
                    </span>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium flex items-center gap-1">
                      <FiBookOpen className="w-4 h-4" />
                      DBMS
                    </span>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium flex items-center gap-1">
                      <FiBookOpen className="w-4 h-4" />
                      Machine Learning
                    </span>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium flex items-center gap-1">
                      <FiBookOpen className="w-4 h-4" />
                      Web Development
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


