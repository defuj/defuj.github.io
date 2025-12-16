const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="glass-effect rounded-2xl p-8 sm:p-12 space-y-6 hover:bg-white/10 transition-all duration-300">
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Hello! I'm{" "}
                <span className="text-primary-400 font-semibold">
                  Dede Fuji Abdul
                </span>
                , also known as{" "}
                <span className="text-primary-400 font-semibold">defuj</span>{" "}
                across various platforms. I'm a Software Engineer specialized in
                building scalable and seamless digital experiences across web
                and mobile platforms.
              </p>

              <p className="text-lg">
                With a strong foundation in{" "}
                <span className="text-primary-400 font-semibold">Flutter</span>,{" "}
                <span className="text-primary-400 font-semibold">Vue.js</span>,
                and{" "}
                <span className="text-primary-400 font-semibold">
                  TypeScript
                </span>
                , I focus on crafting responsive, user-centric interfaces
                optimized for performance and maintainability. Since{" "}
                <span className="text-primary-400 font-semibold">2016</span>,
                I've been delivering cross-platform applications for industries
                ranging from e-commerce to business automation.
              </p>

              <p className="text-lg">
                Over the past years at{" "}
                <span className="text-primary-400 font-semibold">
                  PT Sawarga Digital Indonesia
                </span>{" "}
                and currently as a{" "}
                <span className="text-primary-400 font-semibold">
                  Frontend Team Leader at bitesoft
                </span>
                , I've delivered multiple production-ready applications ensuring
                intuitive UI/UX and robust back-end integration using REST APIs.
              </p>

              <p className="text-lg">
                I'm passionate about continuous learning and contributing to the
                developer community through open-source libraries such as{" "}
                <span className="text-primary-400 font-semibold">SweetPop</span>{" "}
                and{" "}
                <span className="text-primary-400 font-semibold">PrintHub</span>
                . My core strengths include Flutter, Vue.js, TypeScript, Kotlin,
                REST API integration, and scalable architecture design.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-700">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient">9+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient">100+</div>
                  <div className="text-sm text-gray-400">
                    Projects Delivered
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient">30+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient">100%</div>
                  <div className="text-sm text-gray-400">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
