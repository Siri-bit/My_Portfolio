'use client'

import { motion } from 'framer-motion'
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiGit,
  SiTensorflow,
  SiOpencv,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiFlask,
} from 'react-icons/si'
import { FaDatabase, FaLanguage } from 'react-icons/fa'

const skillCategories = [
  {
    title: 'Languages',
    icon: <SiPython className="w-6 h-6" />,
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'Java', icon: null },
      { name: 'C', icon: null },
      { name: 'C++', icon: null },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
  {
    title: 'Web Technologies',
    icon: <SiReact className="w-6 h-6" />,
    skills: [
      { name: 'React.js', icon: SiReact },
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Flask', icon: SiFlask },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
    ],
  },
  {
    title: 'Databases',
    icon: <FaDatabase className="w-6 h-6" />,
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Firebase', icon: null },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: <SiGit className="w-6 h-6" />,
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
      { name: 'Selenium', icon: null },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'Mediapipe', icon: null },
      { name: 'OpenCV', icon: SiOpencv },
    ],
  },
  {
    title: 'APIs & Other',
    icon: null,
    skills: [
      { name: 'RESTful APIs', icon: null },
    ],
  },
  {
    title: 'Languages Known',
    icon: <FaLanguage className="w-6 h-6" />,
    skills: [
      { name: 'English', icon: null },
      { name: 'Hindi', icon: null },
      { name: 'Telugu', icon: null },
      { name: 'Kannada', icon: null },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon && (
                    <div className="text-primary-600 dark:text-primary-400">
                      {category.icon}
                    </div>
                  )}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const IconComponent = skill.icon
                    return (
                      <span
                        key={skill.name}
                        className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {IconComponent && (
                          <IconComponent className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                        )}
                        {skill.name}
                      </span>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

