import { motion } from "framer-motion";
import { FaHeart, FaCoffee, FaPaypal } from "react-icons/fa";
import { SiKofi } from "react-icons/si";

const Donation = () => {
  const donationPlatforms = [
    {
      name: "Saweria",
      description: "Support via Saweria",
      url: "https://saweria.co/defuj",
      icon: FaHeart,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      hoverColor: "hover:border-red-400",
    },
    {
      name: "Ko-fi",
      description: "Buy me a coffee",
      url: "https://ko-fi.com/defuj",
      icon: FaCoffee,
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      hoverColor: "hover:border-yellow-400",
    },
    {
      name: "PayPal",
      description: "Donate via PayPal",
      url: "https://paypal.me/defuj",
      icon: FaPaypal,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      hoverColor: "hover:border-blue-400",
    },
  ];

  return (
    <section id="donation" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-700/10 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-4xl font-bold text-center sm:text-5xl">
            Support My <span className="text-gradient">Work</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-center text-gray-400">
            If you find my work helpful or want to support my open-source
            contributions, consider buying me a coffee! ☕
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {donationPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative overflow-hidden glass-effect rounded-2xl group border-2 border-blue-500/20 ${platform.hoverColor} transition-all duration-300`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background gradient effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Animated corner decoration */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${platform.color} opacity-20 blur-2xl`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                />

                <div className="relative z-10 p-8 space-y-4 text-center">
                  {/* Icon */}
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${platform.bgColor}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <platform.icon className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors" />
                  </motion.div>

                  {/* Platform name */}
                  <h3 className="text-2xl font-bold group-hover:text-gradient transition-all">
                    {platform.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {platform.description}
                  </p>

                  {/* Button */}
                  <motion.div
                    className={`inline-block px-6 py-2 text-sm font-medium rounded-full ${platform.bgColor} border border-blue-500/30 group-hover:border-white/50 transition-all`}
                    whileHover={{ scale: 1.1 }}
                  >
                    Support Now
                  </motion.div>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 pointer-events-none group-hover:opacity-100"
                  initial={{ backgroundPosition: "-200%" }}
                  whileHover={{
                    backgroundPosition: "200%",
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                  }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Thank you message */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              className="inline-block p-8 glass-effect rounded-2xl max-w-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <FaHeart className="w-6 h-6 text-red-400 animate-pulse" />
                <h3 className="text-xl font-semibold">Thank You!</h3>
                <FaHeart className="w-6 h-6 text-red-400 animate-pulse" />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your support helps me continue creating open-source projects,
                building helpful tools, and sharing knowledge with the developer
                community. Every contribution, no matter the size, is greatly
                appreciated! 🙏
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
