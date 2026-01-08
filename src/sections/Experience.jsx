import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaChevronRight } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const experiences = [
    {
      title: 'Frontend Team Leader',
      company: 'bitesoft',
      period: 'Oct 2025 - Present',
      duration: '3 months',
      location: 'Australia (Remote)',
      type: 'Full-time',
      description: 'Led development team in building Manufacturing Lab Portal system for dental laboratory management solutions.',
      highlights: [
        'Led team of 5 developers',
        'Built 29 API endpoints',
        'Achieved 86% test coverage',
        'Managed complete project lifecycle',
      ],
      technologies: ['Nuxt 4', 'TypeScript', 'TailwindCSS 4', 'Docker'],
      color: 'from-blue-500 to-cyan-500',
      icon: '🚀',
    },
    {
      title: 'Front-End Developer',
      company: 'PT Sawarga Digital Indonesia',
      period: 'Dec 2020 - Present',
      duration: '5 years',
      location: 'Indonesia',
      type: 'Full-time',
      description: 'Transformed UI/UX designs into responsive, scalable web and mobile applications across multiple industries.',
      highlights: [
        'Delivered 100+ projects',
        'Built cross-platform apps',
        'Created open-source libraries',
        'Mentored junior developers',
      ],
      technologies: ['Flutter', 'Vue.js', 'TypeScript', 'PostgreSQL'],
      color: 'from-purple-500 to-pink-500',
      icon: '💻',
    },
    {
      title: 'Software Engineer',
      company: 'Freelance & Open Source',
      period: '2016 - 2020',
      duration: '4 years',
      location: 'Indonesia',
      type: 'Freelance',
      description: 'Developed various mobile and web applications for clients while contributing to open-source community.',
      highlights: [
        'Published research papers',
        'Built Firebase apps',
        'Android development',
        'Learned modern frameworks',
      ],
      technologies: ['Kotlin', 'Java', 'Firebase', 'Laravel'],
      color: 'from-orange-500 to-red-500',
      icon: '⚡',
    },
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey building impactful digital solutions
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex justify-center gap-4 flex-wrap">
            {experiences.map((exp, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeIndex === idx
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                    : 'glass-effect text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{exp.icon}</span>
                  <span className="hidden sm:inline">{exp.company}</span>
                  <span className="sm:hidden">{exp.icon}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Experience Content */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass-effect rounded-3xl p-8 sm:p-12 relative overflow-hidden group"
            >
              {/* Gradient Background Decoration */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${experiences[activeIndex].color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Corner Decoration */}
              <motion.div
                className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl ${experiences[activeIndex].color} opacity-20 rounded-full blur-2xl`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                }}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-3 mb-3"
                    >
                      <span className="text-4xl">{experiences[activeIndex].icon}</span>
                      <div>
                        <h3 className="text-3xl font-bold text-gradient">
                          {experiences[activeIndex].title}
                        </h3>
                        <p className="text-xl text-gray-300 font-semibold">
                          {experiences[activeIndex].company}
                        </p>
                      </div>
                    </motion.div>

                    {/* Meta Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex flex-wrap gap-4 text-sm"
                    >
                      <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg">
                        <FaCalendar className="text-blue-400" />
                        <span className="text-gray-300">{experiences[activeIndex].period}</span>
                      </div>
                      <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-lg">
                        <FaMapMarkerAlt className="text-blue-400" />
                        <span className="text-gray-300">{experiences[activeIndex].location}</span>
                      </div>
                      <div className="glass-effect px-4 py-2 rounded-lg">
                        <span className="text-blue-400 font-semibold">{experiences[activeIndex].duration}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-gray-400 mb-8 leading-relaxed"
                >
                  {experiences[activeIndex].description}
                </motion.p>

                {/* Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8"
                >
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Key Achievements
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {experiences[activeIndex].highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        className="flex items-center gap-3 glass-effect px-4 py-3 rounded-xl group cursor-pointer"
                      >
                        <FaChevronRight className="text-blue-400 group-hover:text-blue-300 transition-colors flex-shrink-0" />
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {experiences[activeIndex].technologies.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className={`px-4 py-2 bg-gradient-to-r ${experiences[activeIndex].color} bg-opacity-20 rounded-xl font-medium text-white border border-white/10 cursor-pointer shadow-lg`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timeline Dots - Visual Progress */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mt-12"
        >
          {experiences.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                activeIndex === idx
                  ? 'w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-500'
                  : 'w-3 h-3 bg-gray-600 hover:bg-gray-500'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Navigation Hints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500">
            Click on company names or dots to explore different experiences
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
