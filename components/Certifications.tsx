'use client'

import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified DevOps Professional',
    issuer: 'Oracle',
    type: 'Certification',
  },
  {
    title: 'Programming in Python',
    issuer: 'Infosys',
    type: 'Certification',
  },
  {
    title: 'AWS Certified (Backend Infrastructure Relevance)',
    issuer: 'Infosys',
    type: 'Certification',
  },
  {
    title: 'Workshop on Data Science with Python',
    issuer: 'RYMEC',
    type: 'Workshop',
  },
  {
    title: 'Cyber Job Simulation',
    issuer: 'Deloitte',
    type: 'Simulation',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            Certifications & Training
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary-600 p-2 sm:p-3 rounded-lg text-white flex-shrink-0">
                    <FiAward className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                        {cert.issuer}
                      </p>
                      <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold">
                        {cert.type}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

