import { FaReact, FaVuejs, FaMobile, FaAndroid, FaCode, FaServer } from 'react-icons/fa'
import { SiTailwindcss, SiFlutter, SiKotlin, SiJavascript, SiTypescript, SiHtml5, SiGit, SiDocker, SiPostgresql } from 'react-icons/si'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const categories = [
    { id: 'all', name: 'All Skills', icon: FaCode },
    { id: 'frontend', name: 'Frontend', icon: FaReact },
    { id: 'mobile', name: 'Mobile', icon: FaMobile },
    { id: 'backend', name: 'Backend', icon: FaServer },
  ]

  const skills = [
    // Frontend
    {
      name: 'Vue.js',
      icon: FaVuejs,
      category: 'frontend',
      color: '#42b883',
      gradient: 'from-green-400 to-green-600',
      experience: '5+ years',
      projects: '50+',
      description: 'Expert in Vue 3, Composition API, and Nuxt framework',
    },
    {
      name: 'Nuxt 4',
      icon: FaVuejs,
      category: 'frontend',
      color: '#00DC82',
      gradient: 'from-emerald-400 to-green-500',
      experience: '2 years',
      projects: '10+',
      description: 'Building SSR and SSG applications with latest Nuxt',
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      category: 'frontend',
      color: '#3178c6',
      gradient: 'from-blue-400 to-blue-600',
      experience: '4 years',
      projects: '40+',
      description: 'Type-safe development with advanced TS patterns',
    },
    {
      name: 'TailwindCSS',
      icon: SiTailwindcss,
      category: 'frontend',
      color: '#06b6d4',
      gradient: 'from-cyan-400 to-blue-500',
      experience: '4 years',
      projects: '60+',
      description: 'Utility-first CSS with custom design systems',
    },
    {
      name: 'React',
      icon: FaReact,
      category: 'frontend',
      color: '#61dafb',
      gradient: 'from-cyan-300 to-blue-400',
      experience: '3 years',
      projects: '30+',
      description: 'Building interactive UIs with React and Next.js',
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      category: 'frontend',
      color: '#f7df1e',
      gradient: 'from-yellow-300 to-yellow-500',
      experience: '9+ years',
      projects: '100+',
      description: 'Modern ES6+, async patterns, and optimization',
    },
    {
      name: 'HTML5/CSS3',
      icon: SiHtml5,
      category: 'frontend',
      color: '#e34f26',
      gradient: 'from-orange-400 to-red-500',
      experience: '9+ years',
      projects: '100+',
      description: 'Semantic HTML and modern CSS techniques',
    },
    // Mobile
    {
      name: 'Flutter',
      icon: SiFlutter,
      category: 'mobile',
      color: '#02569B',
      gradient: 'from-blue-500 to-blue-700',
      experience: '5 years',
      projects: '40+',
      description: 'Cross-platform mobile apps with beautiful UIs',
    },
    {
      name: 'Kotlin',
      icon: SiKotlin,
      category: 'mobile',
      color: '#7F52FF',
      gradient: 'from-purple-400 to-purple-600',
      experience: '6 years',
      projects: '35+',
      description: 'Native Android development with modern Kotlin',
    },
    {
      name: 'Android Studio',
      icon: FaAndroid,
      category: 'mobile',
      color: '#3DDC84',
      gradient: 'from-green-400 to-green-600',
      experience: '6 years',
      projects: '35+',
      description: 'Full Android development lifecycle',
    },
    // Backend
    {
      name: 'REST APIs',
      icon: FaServer,
      category: 'backend',
      color: '#0ea5e9',
      gradient: 'from-sky-400 to-blue-500',
      experience: '7 years',
      projects: '80+',
      description: 'RESTful API design and integration',
    },
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
      category: 'backend',
      color: '#4169e1',
      gradient: 'from-blue-500 to-indigo-600',
      experience: '4 years',
      projects: '30+',
      description: 'Relational database design and optimization',
    },
    {
      name: 'Node.js',
      icon: FaServer,
      category: 'backend',
      color: '#339933',
      gradient: 'from-green-500 to-green-700',
      experience: '4 years',
      projects: '25+',
      description: 'Server-side JavaScript and APIs',
    },
    {
      name: 'Git',
      icon: SiGit,
      category: 'backend',
      color: '#f05032',
      gradient: 'from-orange-500 to-red-600',
      experience: '9 years',
      projects: '100+',
      description: 'Version control and collaborative development',
    },
    {
      name: 'Docker',
      icon: SiDocker,
      category: 'backend',
      color: '#2496ED',
      gradient: 'from-blue-400 to-blue-600',
      experience: '3 years',
      projects: '20+',
      description: 'Containerization and deployment',
    },
  ]

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Technologies and tools I master to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {categories.map((cat, idx) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 relative ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30'
                  : 'glass-effect text-gray-400 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <cat.icon className="w-5 h-5" />
              <span>{cat.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-7xl mx-auto"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -2, 2, -2, 0],
                zIndex: 10,
              }}
              className="relative group cursor-pointer"
            >
              {/* Card */}
              <div className="glass-effect rounded-2xl p-6 h-full relative overflow-hidden">
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />

                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  style={{ 
                    background: `radial-gradient(circle at center, ${skill.color}40, transparent)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  {/* Icon */}
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon 
                      className="w-12 h-12 sm:w-16 sm:h-16" 
                      style={{ color: skill.color }}
                    />
                    {/* Icon Glow */}
                    <motion.div
                      className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-50"
                      style={{ color: skill.color }}
                    >
                      <skill.icon className="w-12 h-12 sm:w-16 sm:h-16" />
                    </motion.div>
                  </motion.div>

                  {/* Name */}
                  <h3 className="font-bold text-lg text-white group-hover:text-gradient transition-all">
                    {skill.name}
                  </h3>

                  {/* Stats */}
                  <div className="space-y-1 text-xs text-gray-400">
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      <span>{skill.experience}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                      <span>{skill.projects} projects</span>
                    </div>
                  </div>
                </div>

                {/* Hover Tooltip */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-3 glass-effect rounded-lg text-xs text-gray-300 text-center shadow-xl z-20"
                  >
                    {skill.description}
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                      <div className="border-4 border-transparent border-t-white/10"></div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Floating particles on hover */}
              {hoveredSkill === skill.name && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 rounded-full"
                      style={{ 
                        backgroundColor: skill.color,
                        left: '50%',
                        top: '50%',
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        x: (Math.random() - 0.5) * 100,
                        y: (Math.random() - 0.5) * 100,
                      }}
                      transition={{
                        duration: 1,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glass-effect rounded-3xl p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { label: 'Total Skills', value: skills.length, icon: '💡' },
                { label: 'Years of Experience', value: '9+', icon: '⏱️' },
                { label: 'Projects Completed', value: '100+', icon: '🚀' },
                { label: 'Happy Clients', value: '50+', icon: '😊' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="relative group"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  
                  {/* Glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
