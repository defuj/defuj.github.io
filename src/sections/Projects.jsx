import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Manufacturing Lab Portal",
      description:
        "Enterprise dental laboratory management system with multi-role authentication and comprehensive API documentation.",
      tags: ["Nuxt 4", "TypeScript", "TailwindCSS 4", "REST API"],
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with shopping cart, payment integration, and admin dashboard built with modern technologies.",
      tags: ["Vue.js", "TailwindCSS", "PostgreSQL", "Prisma"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Task Management App",
      description:
        "Cross-platform mobile application for managing tasks and projects with real-time collaboration features using Flutter.",
      tags: ["Flutter", "Firebase", "Dart", "REST API"],
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Business Automation System",
      description:
        "Complete business workflow automation platform with document management and approval systems.",
      tags: ["VueJS", "TypeScript", "REST API", "Docker"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Native Android App",
      description:
        "High-performance native Android application with complex UI animations and seamless backend integration.",
      tags: ["Kotlin", "Android Studio", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=400&fit=crop",
      github: "#",
      demo: "#",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Open Source Library",
      description:
        "Popular developer tools library (SweetPop, PrintHub) used by hundreds of developers for better development experience.",
      tags: ["Flutter", "Dart", "Package", "Open Source"],
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      github: "https://github.com/defuj",
      demo: "#",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-center sm:text-5xl">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-center text-gray-400">
            Showcasing some of my best work in web and mobile development
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative overflow-hidden glass-effect rounded-2xl group"
            >
              {/* Gradient border effect on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
              />

              {/* Image container with overlay */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                  animate={{
                    scale: hoveredIndex === idx ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />

                {/* Animated corner decoration */}
                <motion.div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-50 blur-2xl`}
                  animate={{
                    scale: hoveredIndex === idx ? [1, 1.5, 1] : 1,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              <div className="relative z-10 p-6 space-y-4">
                <motion.h3
                  className="text-xl font-semibold transition-all duration-300 group-hover:text-gradient"
                  animate={{
                    x: hoveredIndex === idx ? 5 : 0,
                  }}
                >
                  {project.title}
                </motion.h3>

                <p className="text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 text-xs border rounded-full bg-primary-500/20 text-primary-300 border-primary-500/30"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + tagIdx * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.div
                  className="flex gap-4 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === idx ? 1 : 0.7 }}
                >
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary-400"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-4 h-4" /> Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary-400"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="w-4 h-4" /> Demo
                  </motion.a>
                </motion.div>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 pointer-events-none group-hover:opacity-100"
                animate={{
                  background:
                    hoveredIndex === idx
                      ? [
                          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                          "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                        ]
                      : "linear-gradient(90deg, transparent 0%, transparent 50%, transparent 100%)",
                  backgroundPosition:
                    hoveredIndex === idx ? ["-200%", "200%"] : "0%",
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
