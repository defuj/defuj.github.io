import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-effect shadow-2xl py-3' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with animated gradient */}
          <motion.a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="text-2xl font-bold relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-gradient">defuj.dev</span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-400 to-purple-500"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item.id ? 'text-primary-400' : 'text-gray-300 hover:text-primary-400'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-primary-500/20 rounded-lg"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
                
                {/* Hover effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-purple-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: activeSection === item.id ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-gray-300 hover:text-primary-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="glass-effect rounded-2xl p-6 space-y-3 overflow-hidden"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
              >
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                      activeSection === item.id 
                        ? 'bg-primary-500/20 text-primary-400 shadow-lg' 
                        : 'text-gray-300 hover:text-primary-400 hover:bg-white/5'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      {activeSection === item.id && (
                        <motion.div
                          className="w-1.5 h-6 bg-gradient-to-b from-primary-400 to-purple-500 rounded-full"
                          layoutId="mobile-indicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span>{item.name}</span>
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
