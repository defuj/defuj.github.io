import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const GitHubStats = () => {
  const username = "defuj";

  return (
    <section id="github" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-blue-700/10 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-center sm:text-5xl">
            GitHub <span className="text-gradient">Activity</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-center text-gray-400">
            My contributions and activity on GitHub
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* GitHub Stats Cards */}
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* GitHub Stats Card */}
            <motion.div
              className="relative overflow-hidden glass-effect rounded-2xl group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">GitHub Stats</h3>
                  <FaGithub className="w-6 h-6 text-blue-400" />
                </div>
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=60a5fa&text_color=e5e7eb&icon_color=3b82f6`}
                  alt="GitHub Stats"
                  className="w-full"
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>

            {/* Top Languages Card */}
            <motion.div
              className="relative overflow-hidden glass-effect rounded-2xl group"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Top Languages</h3>
                  <FaGithub className="w-6 h-6 text-blue-400" />
                </div>
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=60a5fa&text_color=e5e7eb`}
                  alt="Top Languages"
                  className="w-full"
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          </motion.div>

          {/* GitHub Streak Stats */}
          <motion.div
            className="relative overflow-hidden glass-effect rounded-2xl group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.01, y: -5 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Contribution Streak</h3>
                <FaGithub className="w-6 h-6 text-blue-400" />
              </div>
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=00000000&stroke=60a5fa&ring=3b82f6&fire=60a5fa&currStreakNum=e5e7eb&sideNums=e5e7eb&currStreakLabel=60a5fa&sideLabels=60a5fa&dates=9ca3af`}
                alt="GitHub Streak"
                className="w-full"
              />
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>

          {/* GitHub Activity Graph */}
          <motion.div
            className="relative overflow-hidden glass-effect rounded-2xl group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.01, y: -5 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Contribution Graph</h3>
                <FaGithub className="w-6 h-6 text-blue-400" />
              </div>
              <img
                src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true&bg_color=00000000&color=60a5fa&line=3b82f6&point=60a5fa&area=true&area_color=3b82f6`}
                alt="GitHub Activity Graph"
                className="w-full"
              />
            </div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>

          {/* Link to GitHub Profile */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium transition-all duration-300 border-2 rounded-xl glass-effect border-blue-500/50 hover:border-blue-400 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-6 h-6 transition-colors group-hover:text-blue-400" />
              <span className="transition-colors group-hover:text-blue-400">
                View Full Profile
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
