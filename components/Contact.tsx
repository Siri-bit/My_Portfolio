'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiSend, FiCopy, FiCheck } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [emailCopied, setEmailCopied] = useState(false)
  const [formContentCopied, setFormContentCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const copyToClipboard = (text: string, type: 'email' | 'content') => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'email') {
        setEmailCopied(true)
        setTimeout(() => setEmailCopied(false), 2000)
      } else {
        setFormContentCopied(true)
        setTimeout(() => setFormContentCopied(false), 2000)
      }
    })
  }

  const getEmailContent = () => {
    return `Hello Sirisha,

Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Using Formspree - free form service that sends emails directly
      // Replace 'YOUR_FORMSPREE_ID' with your Formspree form ID
      // Get it from https://formspree.io (free account)
      const response = await fetch('https://formspree.io/f/xldoqrjp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.name}`,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      
      // Fallback: Use mailto link if Formspree fails
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`)
      const body = encodeURIComponent(getEmailContent())
      const mailtoLink = `mailto:sirishavl.cse.rymec@mail.com?subject=${subject}&body=${body}`
      
      try {
        window.location.href = mailtoLink
        setSubmitStatus('success')
      } catch (err) {
        setSubmitStatus('error')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
                  Feel free to reach out if you'd like to collaborate or have any questions!
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <a
                    href="mailto:sirishavl.cse.rymec@mail.com"
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex-1"
                  >
                    <div className="bg-primary-100 dark:bg-primary-900 p-2 sm:p-3 rounded-lg flex-shrink-0">
                      <FiMail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="font-medium text-sm sm:text-base break-words">sirishavl.cse.rymec@mail.com</p>
                    </div>
                  </a>
                  <button
                    onClick={() => copyToClipboard('sirishavl.cse.rymec@mail.com', 'email')}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    title="Copy email"
                  >
                    {emailCopied ? (
                      <FiCheck className="w-4 h-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <FiCopy className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                    )}
                  </button>
                </div>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <div className="bg-primary-100 dark:bg-primary-900 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="font-medium text-sm sm:text-base">+91 98765 43210</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/sirisha-vl-75b570242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  <div className="bg-primary-100 dark:bg-primary-900 p-2 sm:p-3 rounded-lg flex-shrink-0">
                    <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <p className="font-medium text-sm sm:text-base break-words">linkedin.com/in/sirisha-vl</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-white via-primary-50/50 to-purple-50/50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-4 sm:p-6 shadow-xl border border-gray-100 dark:border-gray-600"
            >
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 sm:mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none text-sm sm:text-base"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                    <div className="space-y-3">
                      <div className="flex items-center justify-center gap-2">
                        <FiCheck className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <p className="text-green-600 dark:text-green-400 text-sm font-semibold">
                          Message sent successfully! I'll get back to you soon.
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setFormData({ name: '', email: '', message: '' })
                          setSubmitStatus('idle')
                        }}
                        className="w-full px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold transition-colors text-sm"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
                    <p className="text-red-600 dark:text-red-400 text-sm text-center mb-3">
                      Failed to send message automatically. Please use one of the options below:
                    </p>
                    <div className="space-y-2">
                      <a
                        href={`mailto:sirishavl.cse.rymec@mail.com?subject=${encodeURIComponent(`Portfolio Contact: ${formData.name}`)}&body=${encodeURIComponent(getEmailContent())}`}
                        className="block w-full text-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors text-sm"
                      >
                        Open Email Client
                      </a>
                      <button
                        onClick={() => copyToClipboard(getEmailContent(), 'content')}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold transition-colors text-sm"
                      >
                        {formContentCopied ? (
                          <>
                            <FiCheck className="w-4 h-4" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <FiCopy className="w-4 h-4" />
                            <span>Copy Message to Clipboard</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


