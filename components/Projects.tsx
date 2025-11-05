'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { SiFigma } from 'react-icons/si'

const projects = [
  {
    id: 1,
    title: 'AI Shopping Jarvis',
    year: '2025',
    description:
      'An intelligent shopping assistant powered by AI that helps users find and compare products across multiple platforms using Flask, Selenium, and OpenAI.',
    techStack: ['Flask', 'Selenium', 'Python', 'OpenAI'],
    category: 'AI',
    github: 'https://github.com/Siri-bit/AI_Shopping_Jarvis-updated',
    demo: null,
  },
  {
    id: 2,
    title: 'Online Senior Support Group System',
    year: '2024',
    description:
      'A comprehensive web platform built with PHP and MySQL to connect senior citizens with support groups, resources, and community services.',
    techStack: ['PHP', 'MySQL', 'HTML', 'CSS'],
    category: 'Web',
    github: 'https://github.com/Siri-bit/Senior-Supprt-Group-Management-System',
    demo: null,
  },
  {
    id: 3,
    title: 'Train & Bus Enquiry System',
    year: '2025',
    description:
      'A real-time transportation enquiry system providing train and bus schedules, routes, and booking information using Flask and REST APIs.',
    techStack: ['Flask', 'REST API', 'Python'],
    category: 'Web',
    github: null,
    demo: null,
  },
  {
    id: 4,
    title: 'Driver Drowsiness Detection',
    year: '2024',
    description:
      'An AI-powered system that monitors driver alertness in real-time using computer vision techniques to detect drowsiness and prevent accidents.',
    techStack: ['Python', 'OpenCV', 'Mediapipe'],
    category: 'AI',
    github: 'https://github.com/Siri-bit/Driver_Drowsiness-_Detection',
    demo: null,
  },
  {
    id: 5,
    title: 'LeadFlow - Lead Management System',
    year: '2025',
    description:
      'A modern SaaS CRM dashboard for HSR Motors to streamline lead management. Features include smart lead listing, Kanban pipeline, detailed lead profiles, and real-time analytics dashboard for sales teams and managers.',
    techStack: ['Figma', 'UX Pilot', 'FigJam'],
    category: 'Design',
    github: null,
    demo: 'https://www.figma.com/design/Esgp8ZZqXe8mqDltawBPrr/Untitled?node-id=3-3408&t=pC5pgPhlqMUtuw0k-1',
  },
]

const categories = ['All', 'Web', 'AI', 'Design']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-primary-50/50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <span className="text-sm bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                      {project.year}
                    </span>
                  </div>
                    <span className="px-3 py-1 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full text-xs font-semibold shadow-md">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {project.category === 'Design' ? (
                        <>
                          <SiFigma className="w-5 h-5" />
                          <span className="text-sm font-medium">Figma</span>
                        </>
                      ) : (
                        <>
                          <FiExternalLink className="w-5 h-5" />
                          <span className="text-sm font-medium">Demo</span>
                        </>
                      )}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


