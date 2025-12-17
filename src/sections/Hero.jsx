import { useEffect, useState, useRef } from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaArrowDown } from 'react-icons/fa'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)
  
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  // Smooth spring for mouse movement
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseXSpring = useSpring(0, springConfig)
  const mouseYSpring = useSpring(0, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX - innerWidth / 2) / innerWidth
      const y = (clientY - innerHeight / 2) / innerHeight
      
      setMousePosition({ x: clientX, y: clientY })
      mouseXSpring.set(x * 50)
      mouseYSpring.set(y * 50)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseXSpring, mouseYSpring])

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/defuj', label: 'LinkedIn', color: '#0077B5' },
    { icon: FaGithub, url: 'https://github.com/defuj', label: 'GitHub', color: '#333' },
    { icon: FaInstagram, url: 'https://www.instagram.com/defuj17', label: 'Instagram', color: '#E4405F' },
    { icon: FaTiktok, url: 'https://www.tiktok.com/@defuj.dev', label: 'TikTok', color: '#000' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={sectionRef}>
      {/* Sophisticated 3D Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep parallax layer 1 */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: y1 }}
        >
          <motion.div 
            className="absolute w-[600px] h-[600px] rounded-full blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)',
              top: '10%',
              left: '10%',
              x: mouseXSpring,
              y: mouseYSpring,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Parallax layer 2 */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: y2 }}
        >
          <motion.div 
            className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
              bottom: '10%',
              right: '10%',
              x: useTransform(mouseXSpring, (x) => -x * 0.5),
              y: useTransform(mouseYSpring, (y) => -y * 0.5),
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Premium 3D grid with perspective */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(56, 189, 248, 0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.8) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: 'perspective(1000px) rotateX(60deg) scale(2)',
            transformOrigin: 'center bottom',
          }}
        />

        {/* Floating orbs with 3D effect */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#38bdf8' : '#a855f7'}, transparent)`,
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              boxShadow: `0 0 20px ${i % 2 === 0 ? '#38bdf8' : '#a855f7'}`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, -15, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Premium light rays */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(56, 189, 248, 0.5), transparent)',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scaleY: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ opacity, scale }}
      >
        <div className="text-center space-y-8">
          {/* Tagline with luxury animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-block glass-effect px-6 py-2 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
              style={{
                boxShadow: '0 0 30px rgba(56, 189, 248, 0.3)',
              }}
            >
              <span className="text-sm text-primary-400 font-medium">✨ Available for Projects</span>
            </motion.div>
          </motion.div>

          {/* Premium Typing Animation */}
          <div className="min-h-[120px] sm:min-h-[150px] lg:min-h-[180px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <TypeAnimation
                sequence={[
                  "Hi, I'm Dede Fuji Abdul",
                  2000,
                  "Hi, I'm a Software Engineer",
                  2000,
                  "Hi, I'm a Frontend Developer",
                  2000,
                  "Hi, I'm defuj 👨‍💻",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={60}
                cursor={true}
                repeat={Infinity}
                className="text-gradient bg-gradient-to-r from-primary-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
                style={{ 
                  backgroundSize: '200% auto',
                  textShadow: '0 0 40px rgba(56, 189, 248, 0.3)',
                }}
              />
            </motion.div>
          </div>

          {/* Premium Tagline */}
          <motion.p 
            className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}
          >
            Crafting Seamless Experiences Across Web & Mobile Platforms
          </motion.p>

          {/* Sophisticated CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)',
                boxShadow: '0 10px 40px rgba(56, 189, 248, 0.4)',
              }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative text-white font-semibold flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              href="#contact"
              className="group relative px-8 py-4 rounded-xl glass-effect border border-white/10"
              whileHover={{ scale: 1.05, y: -5, borderColor: 'rgba(56, 189, 248, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative text-white font-semibold group-hover:text-primary-400 transition-colors">
                Get In Touch
              </span>
            </motion.a>
          </motion.div>

          {/* Premium Social Links */}
          <motion.div 
            className="flex gap-6 justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + idx * 0.1, type: "spring" }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.9 }}
              >
                <div 
                  className="w-12 h-12 rounded-xl glass-effect flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-all relative overflow-hidden"
                  style={{
                    boxShadow: `0 0 0 rgba(${link.color}, 0)`,
                  }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: `radial-gradient(circle, ${link.color}40, transparent)`,
                    }}
                  />
                  
                  <link.icon 
                    className="w-5 h-5 relative z-10 transition-all group-hover:scale-110"
                    style={{ 
                      color: '#fff',
                      filter: 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.5))',
                    }}
                  />
                </div>

                {/* Tooltip */}
                <motion.div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 glass-effect rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  }}
                >
                  {link.label}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator with sophisticated animation */}
          <motion.div
            className="pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="flex flex-col items-center gap-2 cursor-pointer"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-sm text-gray-500">Scroll to explore</span>
              <motion.div
                className="w-6 h-10 rounded-full border-2 border-primary-400/30 flex justify-center relative overflow-hidden"
                whileHover={{ scale: 1.1, borderColor: 'rgba(56, 189, 248, 0.6)' }}
              >
                <motion.div
                  className="w-1.5 h-1.5 bg-primary-400 rounded-full absolute"
                  animate={{
                    y: [4, 20, 4],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Premium floating particles for depth */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            background: i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#a855f7' : '#ec4899',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: 'blur(1px)',
            boxShadow: `0 0 10px ${i % 3 === 0 ? '#38bdf8' : i % 3 === 1 ? '#a855f7' : '#ec4899'}`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </section>
  )
}

export default Hero
