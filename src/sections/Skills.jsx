import { FaReact, FaVuejs, FaMobile, FaAndroid } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFlutter,
  SiKotlin,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiGit,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useState } from "react";

const Skills = () => {
  const [inView, setInView] = useState(false);

  const skillCategories = [
    {
      title: "Web Development",
      icon: FaReact,
      skills: [
        { name: "Vue.js", icon: FaVuejs, level: 95, color: "#42b883" },
        { name: "Nuxt 4", icon: FaVuejs, level: 90, color: "#00DC82" },
        { name: "TypeScript", icon: SiTypescript, level: 90, color: "#3178c6" },
        {
          name: "TailwindCSS",
          icon: SiTailwindcss,
          level: 95,
          color: "#06b6d4",
        },
        { name: "ReactJS", icon: FaReact, level: 85, color: "#61dafb" },
        { name: "JavaScript", icon: SiJavascript, level: 90, color: "#f7df1e" },
        { name: "HTML5/CSS3", icon: SiHtml5, level: 95, color: "#e34f26" },
      ],
    },
    {
      title: "Mobile Development",
      icon: FaMobile,
      skills: [
        { name: "Flutter", icon: SiFlutter, level: 95, color: "#02569B" },
        { name: "Kotlin", icon: SiKotlin, level: 85, color: "#7F52FF" },
        {
          name: "Android Studio",
          icon: FaAndroid,
          level: 85,
          color: "#3DDC84",
        },
      ],
    },
    {
      title: "Backend & Tools",
      icon: SiGit,
      skills: [
        { name: "REST APIs", level: 95, color: "#0ea5e9" },
        { name: "PostgreSQL", level: 85, color: "#4169e1" },
        { name: "Prisma ORM", level: 85, color: "#2D3748" },
        { name: "Git", icon: SiGit, level: 90, color: "#f05032" },
        { name: "Docker", level: 80, color: "#2496ED" },
        { name: "Node.js", level: 85, color: "#339933" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-center sm:text-5xl">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-center text-gray-400">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setInView(true)}
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              className="relative p-6 transition-all duration-300 glass-effect rounded-2xl hover:shadow-2xl group"
            >
              {/* Animated gradient background on hover */}
              <motion.div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-primary-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl group-hover:opacity-100" />

              <div className="relative z-10 flex items-center gap-3 mb-6">
                <motion.div
                  className="relative p-3 rounded-lg bg-primary-500/20"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className="w-6 h-6 text-primary-400" />

                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-primary-400/20"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="relative z-10 space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + skillIdx * 0.05 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {skill.icon && (
                          <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                            <skill.icon
                              className="w-4 h-4"
                              style={{ color: skill.color }}
                            />
                          </motion.div>
                        )}
                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                      </div>
                      <motion.span
                        className="text-xs font-semibold text-primary-400"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: idx * 0.1 + skillIdx * 0.05 + 0.2,
                        }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    {/* Animated progress bar */}
                    <div className="relative h-2 overflow-hidden bg-gray-800 rounded-full">
                      <motion.div
                        className="relative h-full overflow-hidden rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${
                            skill.color || "#0ea5e9"
                          }, #a855f7)`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: idx * 0.1 + skillIdx * 0.05,
                          ease: "easeOut",
                        }}
                      >
                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ["-100%", "200%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Corner decoration */}
              <motion.div className="absolute bottom-0 right-0 w-20 h-20 transition-opacity duration-500 rounded-tl-full opacity-0 bg-gradient-to-tl from-primary-500/20 to-transparent group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
