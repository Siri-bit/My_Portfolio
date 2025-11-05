'use client'

import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiCalendar } from 'react-icons/fi'

const experiences = [
  {
    title: 'Technical Events Coordinator',
    period: 'October 2025',
    organization: 'RYMEC',
    description: [
      'Organized 10+ technical events and bootcamps',
      'Managed 100+ participants effectively',
      'Led volunteer teams and coordinated logistics',
    ],
    icon: <FiUsers className="w-6 h-6" />,
  },
  {
    title: 'Smart India Hackathon 2024',
    period: '2024',
    organization: 'National Level',
    description: [
      'Developed AI/ML-based solution for real-world problem',
      'Collaborated with team members in competitive environment',
      'Gained experience in innovative problem-solving',
    ],
    icon: <FiAward className="w-6 h-6" />,
  },
  {
    title: 'State-Level Hackathon',
    period: '2024 & 2025',
    organization: 'State Level',
    description: [
      'Participated in multiple hackathons',
      'Built innovative solutions addressing local challenges',
      'Enhanced problem-solving and teamwork skills',
    ],
    icon: <FiAward className="w-6 h-6" />,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-primary-600 p-2 sm:p-3 rounded-lg text-white flex-shrink-0">
                    {experience.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {experience.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 text-xs sm:text-sm font-medium">
                        <FiCalendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        {experience.period}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 font-medium">
                      {experience.organization}
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {experience.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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


