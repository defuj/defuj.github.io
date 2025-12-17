import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const About = () => {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  // Spring animation for smooth mouse tracking
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        mouseX.set(x * 20);
        mouseY.set(y * 20);
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const stats = [
    { value: "9+", label: "Years Experience", delay: 0 },
    { value: "100+", label: "Projects Delivered", delay: 0.1 },
    { value: "30+", label: "Happy Clients", delay: 0.2 },
    { value: "100%", label: "Dedication", delay: 0.3 },
  ];

  return (
    <section
      id="about"
      className="relative py-20 overflow-hidden"
      ref={sectionRef}
    >
      {/* Premium 3D Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Layer 1 - Deep background */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{ y, opacity }}
        >
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-transparent rounded-full blur-[100px]" />
        </motion.div>

        {/* Layer 2 - Mid layer with 3D depth */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-purple-500/20 via-pink-500/20 to-transparent rounded-full blur-[80px]"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
            opacity,
          }}
        />

        {/* Sophisticated grid overlay with perspective */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
            transform: "perspective(1000px) rotateX(60deg)",
            transformOrigin: "center top",
          }}
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
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

        <div className="max-w-4xl mx-auto">
          {/* Main Content Card with 3D Transform */}
          <motion.div
            className="relative p-8 overflow-hidden glass-effect rounded-3xl sm:p-12 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              scale,
              rotateX: useTransform(mouseY, [-0.5, 0.5], [2, -2]),
              rotateY: useTransform(mouseX, [-0.5, 0.5], [-2, 2]),
              transformStyle: "preserve-3d",
            }}
          >
            {/* Luxury gradient overlay with 3D depth */}
            <motion.div
              className="absolute inset-0 transition-opacity duration-700 opacity-0 bg-gradient-to-br from-primary-500/10 via-purple-500/10 to-pink-500/10 group-hover:opacity-100"
              style={{
                transform: "translateZ(10px)",
              }}
            />

            {/* Premium corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary-500/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/30 rounded-br-3xl" />

            {/* Content with subtle 3D layering */}
            <div
              className="relative space-y-6 leading-relaxed text-gray-300"
              style={{ transform: "translateZ(20px)" }}
            >
              <motion.p
                className="text-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Hello! I'm{" "}
                <span className="font-semibold text-primary-400">
                  Dede Fuji Abdul
                </span>
                , also known as{" "}
                <span className="font-semibold text-primary-400">defuj</span>{" "}
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
                <span className="font-semibold text-primary-400">Flutter</span>,{" "}
                <span className="font-semibold text-primary-400">Vue.js</span>,
                and{" "}
                <span className="font-semibold text-primary-400">
                  TypeScript
                </span>
                , I focus on crafting responsive, user-centric interfaces
                optimized for performance and maintainability. Since{" "}
                <span className="font-semibold text-primary-400">2016</span>,
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
                <span className="font-semibold text-primary-400">
                  PT Sawarga Digital Indonesia
                </span>{" "}
                and currently as a{" "}
                <span className="font-semibold text-primary-400">
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
                <span className="font-semibold text-primary-400">SweetPop</span>{" "}
                and{" "}
                <span className="font-semibold text-primary-400">PrintHub</span>
                . My core strengths include Flutter, Vue.js, TypeScript, Kotlin,
                REST API integration, and scalable architecture design.
              </motion.p>
            </div>

            {/* Stats Section with 3D Cards */}
            <motion.div
              className="pt-10 mt-10 border-t border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.7 + stat.delay,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.05,
                      y: -10,
                      rotateY: 5,
                      transition: { duration: 0.3 },
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Premium glass card with depth */}
                    <div className="relative p-6 overflow-hidden glass-effect rounded-2xl">
                      {/* Animated gradient background */}
                      <motion.div
                        className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-primary-500/20 via-purple-500/20 to-transparent group-hover:opacity-100"
                        style={{ transform: "translateZ(-5px)" }}
                      />

                      {/* Shimmer effect on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                        }}
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                      />

                      {/* Content */}
                      <div
                        className="relative z-10 text-center"
                        style={{ transform: "translateZ(10px)" }}
                      >
                        <motion.div
                          className="mb-2 text-4xl font-bold text-gradient"
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
                        <div className="text-sm font-medium text-gray-400">
                          {stat.label}
                        </div>
                      </div>

                      {/* 3D depth indicator */}
                      <div className="absolute inset-0 transition-colors border rounded-2xl border-white/5 group-hover:border-white/10" />
                    </div>

                    {/* Floating shadow for depth perception */}
                    <motion.div
                      className="absolute inset-0 bg-black/20 rounded-2xl blur-xl -z-10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 0.3, y: 15 }}
                      whileHover={{ opacity: 0.5, y: 20 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Floating accent elements with 3D parallax */}
          <motion.div
            className="absolute w-40 h-40 rounded-full -right-20 top-1/4 bg-gradient-to-br from-primary-500/10 to-transparent blur-3xl"
            style={{
              x: useTransform(mouseX, [0, 1], [0, 30]),
              y: useTransform(mouseY, [0, 1], [0, 30]),
            }}
          />
          <motion.div
            className="absolute w-40 h-40 rounded-full -left-20 bottom-1/4 bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl"
            style={{
              x: useTransform(mouseX, [0, 1], [0, -30]),
              y: useTransform(mouseY, [0, 1], [0, -30]),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
