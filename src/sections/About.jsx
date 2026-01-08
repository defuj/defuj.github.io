import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { value: "9+", label: "Years Experience", delay: 0 },
    { value: "100+", label: "Projects Delivered", delay: 0.1 },
    { value: "30+", label: "Happy Clients", delay: 0.2 },
    { value: "100%", label: "Dedication", delay: 0.3 },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-blue-700/5 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-4xl font-bold text-center sm:text-5xl">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="max-w-2xl mx-auto mb-12 text-center text-gray-400">
              Get to know me better - my journey, skills, and passion
            </p>
          </motion.div>

          <motion.div
            className="relative p-8 space-y-6 overflow-hidden glass-effect rounded-3xl sm:p-12 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Animated corner accent */}
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 rounded-bl-full bg-gradient-to-bl from-blue-500/20 to-transparent"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            <div className="relative z-10 space-y-4 leading-relaxed text-gray-300">
              <motion.p
                className="text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Hello! I'm{" "}
                <span className="font-semibold text-blue-400">
                  Dede Fuji Abdul
                </span>
                , also known as{" "}
                <span className="font-semibold text-blue-400">defuj</span>{" "}
                across various platforms. I'm a Software Engineer specialized in
                building scalable and seamless digital experiences across web
                and mobile platforms.
              </motion.p>

              <motion.p
                className="text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                With a strong foundation in{" "}
                <span className="font-semibold text-blue-400">
                  Kotlin (Android)
                </span>
                ,{" "}
                <span className="font-semibold text-blue-400">Flutter</span>,{" "}
                <span className="font-semibold text-blue-400">Vue.js</span>,
                and{" "}
                <span className="font-semibold text-blue-400">React.js</span>
                , I focus on crafting responsive, user-centric interfaces
                optimized for performance and maintainability. Since{" "}
                <span className="font-semibold text-blue-400">2016</span>,
                I've been delivering cross-platform applications for industries
                ranging from e-commerce to business automation.
              </motion.p>

              <motion.p
                className="text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Over the past years at{" "}
                <span className="font-semibold text-blue-400">
                  PT Sawarga Digital Indonesia
                </span>{" "}
                and currently as a{" "}
                <span className="font-semibold text-blue-400">
                  Frontend Team Leader at bitesoft
                </span>
                , I've delivered multiple production-ready applications ensuring
                intuitive UI/UX and robust back-end integration using REST APIs.
              </motion.p>

              <motion.p
                className="text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                I'm passionate about continuous learning and contributing to the
                developer community through open-source libraries such as{" "}
                <span className="font-semibold text-blue-400">SweetPop</span>{" "}
                and{" "}
                <span className="font-semibold text-blue-400">PrintHub</span>
                . My core strengths include Flutter, Vue.js, TypeScript, Kotlin,
                REST API integration, and scalable architecture design.
              </motion.p>
            </div>

            {/* Stats Section with animations */}
            <motion.div
              className="pt-8 border-t border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="relative space-y-2 group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + stat.delay }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    {/* Glow effect on hover */}
                    <motion.div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 bg-blue-500/20 blur-xl group-hover:opacity-100" />

                    <motion.div
                      className="relative z-10 text-3xl font-bold sm:text-4xl text-gradient"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="relative z-10 text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
