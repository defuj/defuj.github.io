import { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/defuj', label: 'LinkedIn', color: '#0077B5' },
    { icon: FaGithub, url: 'https://github.com/defuj', label: 'GitHub', color: '#333' },
    { icon: FaInstagram, url: 'https://www.instagram.com/defuj17', label: 'Instagram', color: '#E4405F' },
    { icon: FaTiktok, url: 'https://www.tiktok.com/@defuj.dev', label: 'TikTok', color: '#000' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-[500px] h-[500px] bg-primary-500/30 rounded-full blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '-20%', left: '-10%' }}
        />
        <motion.div 
          className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px]"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '-20%', right: '-10%' }}
        />
        <motion.div 
          className="absolute w-[300px] h-[300px] bg-pink-500/20 rounded-full blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '50%', left: '50%' }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -100,
            x: Math.random() * window.innerWidth,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Mouse follower */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-primary-400/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Main Title with Stagger Animation */}
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm{' '}
            <motion.span 
              className="text-gradient inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Dede Fuji Abdul
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Software Engineer | Front-End Developer
          </motion.p>

          <motion.p 
            className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Crafting Seamless Experiences Across Web & Mobile Platforms
          </motion.p>
          
          {/* Social Links with Hover Effects */}
          <motion.div 
            className="flex justify-center gap-6 pt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-4 rounded-full group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  y: -5,
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <social.icon className="w-6 h-6 text-gray-300 group-hover:text-primary-400 transition-colors relative z-10" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons with Shine Effect */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
              }}
              className="relative px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl font-medium overflow-hidden group shine"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 glass-effect rounded-xl font-medium border-2 border-primary-500/50 hover:border-primary-400 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="group-hover:text-primary-400 transition-colors">Get In Touch</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 bg-primary-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
