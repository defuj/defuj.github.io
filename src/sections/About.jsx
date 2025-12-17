import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import Tilt from "react-parallax-tilt";

const About = () => {
  const sectionRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const stats = [
    { value: "9+", label: "Years Experience", delay: 0, icon: "⏱️" },
    { value: "100+", label: "Projects Delivered", delay: 0.1, icon: "🚀" },
    { value: "30+", label: "Happy Clients", delay: 0.2, icon: "⚡" },
    { value: "100%", label: "Dedication", delay: 0.3, icon: "✅" },
  ];

  // 3D Floating objects data
  const floatingObjects = [
    { emoji: "💻", delay: 0, duration: 3 },
    { emoji: "🎨", delay: 0.5, duration: 4 },
    { emoji: "⚡", delay: 1, duration: 3.5 },
    { emoji: "🚀", delay: 1.5, duration: 4.5 },
    { emoji: "✨", delay: 2, duration: 3.8 },
  ];

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden"
      ref={sectionRef}
    >
      {/* Parallax Background Decorations */}
      <motion.div
        className="absolute top-20 left-0 w-72 h-72 bg-primary-500/5 rounded-full blur-[100px]"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-[100px]"
        style={{ y: y2 }}
      />

      {/* 3D Rotating Gradient Sphere */}
      <motion.div
        className="absolute w-32 h-32 rounded-full top-1/2 right-10 opacity-20"
        style={{
          rotate,
          background:
            "conic-gradient(from 0deg, #38bdf8, #a855f7, #ec4899, #38bdf8)",
        }}
      />

      {/* Floating 3D Emojis with Parallax */}
      {floatingObjects.map((obj, idx) => (
        <motion.div
          key={idx}
          className="absolute text-4xl pointer-events-none"
          style={{
            left: `${15 + idx * 18}%`,
            top: `${20 + (idx % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: obj.duration,
            delay: obj.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.span
            style={{
              filter: inView ? "blur(0px)" : "blur(5px)",
              y: useTransform(scrollYProgress, [0, 1], [50 * idx, -50 * idx]),
            }}
          >
            {obj.emoji}
          </motion.span>
        </motion.div>
      ))}

      <div
        className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8"
        ref={ref}
      >
        <div className="max-w-6xl mx-auto">
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

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: 3D Tilt Card with Image/Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ scale }}
            >
              <Tilt
                className="parallax-effect"
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#ffffff"
                glarePosition="all"
                glareBorderRadius="24px"
                scale={1.05}
              >
                <div className="relative p-8 overflow-hidden glass-effect rounded-3xl group">
                  {/* 3D Layers Effect */}
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-pink-500/20 group-hover:opacity-100" />

                  {/* Avatar/Profile Placeholder with 3D effect */}
                  <div className="relative">
                    <motion.div
                      className="relative flex items-center justify-center w-full overflow-hidden aspect-square rounded-2xl bg-gradient-to-br from-primary-500/30 to-purple-500/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* 3D Grid Background */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="grid w-full h-full grid-cols-4 grid-rows-4">
                          {[...Array(16)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="border border-primary-400/30"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: [0.3, 0.7, 0.3] }}
                              transition={{
                                duration: 2,
                                delay: i * 0.1,
                                repeat: Infinity,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Center Icon/Avatar */}
                      <motion.div
                        className="relative z-10"
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="text-8xl">👨‍💻</div>
                      </motion.div>

                      {/* Floating particles around avatar */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-primary-400"
                          style={{
                            left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                            top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Info Tags with 3D depth */}
                    <div className="mt-6 space-y-3">
                      {[
                        {
                          label: "Location",
                          value: "Sumedang, Indonesia",
                          icon: "📍",
                        },
                        {
                          label: "Status",
                          value: "Available for Work",
                          icon: "🟢",
                        },
                        {
                          label: "Focus",
                          value: "Frontend Development",
                          icon: "🎯",
                        },
                      ].map((info, idx) => (
                        <Tilt key={idx} scale={1.02} transitionSpeed={2000}>
                          <motion.div
                            className="flex items-center gap-3 px-4 py-3 glass-effect rounded-xl"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            whileHover={{ x: 10, scale: 1.05 }}
                          >
                            <span className="text-2xl">{info.icon}</span>
                            <div>
                              <div className="text-xs text-gray-500">
                                {info.label}
                              </div>
                              <div className="text-sm font-semibold text-gray-300">
                                {info.value}
                              </div>
                            </div>
                          </motion.div>
                        </Tilt>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>

            {/* Right: Content with parallax text */}
            <div className="space-y-6">
              <motion.div
                className="space-y-4 leading-relaxed text-gray-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.p
                  className="text-lg"
                  style={{ y: useTransform(scrollYProgress, [0, 1], [0, -20]) }}
                >
                  Hello! I'm{" "}
                  <span className="font-semibold text-primary-400">
                    Dede Fuji Abdul
                  </span>
                  , also known as{" "}
                  <span className="font-semibold text-primary-400">defuj</span>{" "}
                  across various platforms. I'm a Software Engineer specialized
                  in building scalable and seamless digital experiences across
                  web and mobile platforms.
                </motion.p>

                <motion.p
                  className="text-lg"
                  style={{ y: useTransform(scrollYProgress, [0, 1], [0, -10]) }}
                >
                  With a strong foundation in{" "}
                  <span className="font-semibold text-primary-400">
                    Kotlin (Android)
                  </span>
                  ,{" "}
                  <span className="font-semibold text-primary-400">
                    Flutter
                  </span>
                  ,{" "}
                  <span className="font-semibold text-primary-400">Vue.js</span>
                  , and{" "}
                  <span className="font-semibold text-primary-400">
                    React.js
                  </span>
                  , I focus on crafting responsive, user-centric interfaces
                  optimized for performance and maintainability. Since{" "}
                  <span className="font-semibold text-primary-400">2016</span>,
                  I've been delivering cross-platform applications for
                  industries ranging from e-commerce to business automation.
                </motion.p>

                <motion.p
                  className="text-lg"
                  style={{ y: useTransform(scrollYProgress, [0, 1], [0, -5]) }}
                >
                  Over the past years at{" "}
                  <span className="font-semibold text-primary-400">
                    PT Sawarga Digital Indonesia
                  </span>{" "}
                  , I've delivered multiple production-ready applications
                  ensuring intuitive UI/UX and robust back-end integration using
                  REST APIs.
                </motion.p>

                <motion.p
                  className="text-lg"
                  style={{ y: useTransform(scrollYProgress, [0, 1], [0, 0]) }}
                >
                  I'm passionate about continuous learning and contributing to
                  the developer community through open-source libraries such as{" "}
                  <span className="font-semibold text-primary-400">
                    SweetPop
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-primary-400">
                    PrintHub
                  </span>
                  .
                </motion.p>
              </motion.div>

              {/* Stats with 3D Tilt */}
              <motion.div
                className="pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <Tilt key={stat.label} scale={1.05} transitionSpeed={2000}>
                      <motion.div
                        className="relative p-6 overflow-hidden text-center glass-effect rounded-2xl group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + stat.delay }}
                        whileHover={{ y: -5 }}
                      >
                        {/* Hover glow */}
                        <motion.div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 group-hover:opacity-100" />

                        <div className="relative z-10">
                          <div className="mb-2 text-3xl">{stat.icon}</div>
                          <motion.div
                            className="mb-1 text-3xl font-bold text-gradient"
                            animate={{
                              backgroundPosition: [
                                "0% 50%",
                                "100% 50%",
                                "0% 50%",
                              ],
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            {stat.value}
                          </motion.div>
                          <div className="text-sm text-gray-400">
                            {stat.label}
                          </div>
                        </div>

                        {/* 3D depth indicator */}
                        <div className="absolute bottom-0 left-0 w-full h-1 transition-transform duration-300 transform scale-x-0 bg-gradient-to-r from-primary-500 to-purple-500 group-hover:scale-x-100" />
                      </motion.div>
                    </Tilt>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
