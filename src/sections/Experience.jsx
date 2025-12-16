import { FaBriefcase, FaCalendar } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Team Leader',
      company: 'bitesoft',
      period: 'Oct 2025 - Present',
      location: 'Australia (Remote)',
      description: [
        'Led development team in building Manufacturing Lab Portal system for dental laboratory management',
        'Architected full-stack system using Nuxt 4, NuxtUI, TailwindCSS 4 for frontend + TypeScript for backend REST API',
        'Developed 25+ comprehensive technical documents covering API specifications, database schema, and workflows',
        'Implemented security system with HTTP-only cookie authentication and role-based authorization',
        'Achieved 86% test coverage (25/29 endpoints) with multi-role system for Admin & Lab Staff',
      ],
      technologies: ['Nuxt 4', 'Vue 3', 'TypeScript', 'NuxtUI', 'TailwindCSS 4', 'Zod', 'REST API', 'Docker'],
    },
    {
      title: 'Front-End Developer',
      company: 'PT Sawarga Digital Indonesia',
      period: 'Dec 2020 - Present',
      location: 'Indonesia',
      description: [
        'Transformed UI/UX designs into responsive, scalable web and mobile applications',
        'Built cross-platform applications for e-commerce, business automation, and various industries',
        'Developed and maintained multiple Flutter, Vue.js, and React applications',
        'Ensured intuitive UI/UX with robust back-end integration using REST APIs',
        'Created open-source libraries (SweetPop, PrintHub) for developer community',
      ],
      technologies: ['Flutter', 'Vue.js', 'TypeScript', 'Kotlin', 'REST API', 'PostgreSQL', 'Prisma ORM'],
    },
    {
      title: 'Software Engineer',
      company: 'Freelance & Open Source',
      period: '2016 - 2020',
      location: 'Indonesia',
      description: [
        'Developed mobile applications for various clients using Android Studio and Kotlin',
        'Created web applications with modern JavaScript frameworks',
        'Published research papers on VR technology, information systems, and mobile learning applications',
        'Built Firebase Realtime Database applications and Android-based information systems',
      ],
      technologies: ['Android Studio', 'Kotlin', 'Java', 'Firebase', 'Laravel', 'VueJS', 'SQL'],
    },
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="glass-effect rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-primary-400 mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-300 mb-1">
                    <FaBriefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaCalendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                    <span className="text-gray-600">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-400 flex items-start gap-2">
                    <span className="text-primary-400 mt-1.5">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
