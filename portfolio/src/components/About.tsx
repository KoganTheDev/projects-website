import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-light-cyan/20 to-pacific-cyan/20 -z-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-federal-blue to-pacific-cyan"
          >
            About Me
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hi! I'm Yuval Kogan, a passionate software developer with expertise in building robust and scalable applications. 
              I specialize in full-stack development, with a strong focus on creating intuitive user experiences and efficient backend systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-federal-blue">Skills</h3>
                <div className="grid grid-cols-2 gap-x-4">
                  <ul className="space-y-3">
                    {['Python', 'C++', 'C', 'Java', 'JavaScript', 'TypeScript', 'React'].map((skill, index) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="flex items-center text-lg md:text-xl text-gray-700"
                      >
                        <span className="w-3 h-3 bg-pacific-cyan rounded-full mr-3" />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                  <ul className="space-y-3">
                    {['Node.js', 'Next.js', 'SQL', 'HTML', 'CSS', 'UNIX/Linux'].map((skill, index) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + (index + 7) * 0.1 }}
                        className="flex items-center text-lg md:text-xl text-gray-700"
                      >
                        <span className="w-3 h-3 bg-pacific-cyan rounded-full mr-3" />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-federal-blue">Education</h3>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-6"
                >
                  <div>
                    <h4 className="font-medium text-xl md:text-2xl text-gray-800">Ort Braude College of Engineering</h4>
                    <p className="text-gray-600 text-lg md:text-xl">B.Sc. in Software Engineering</p>
                    <p className="text-gray-500 text-base md:text-lg">2022 - Present</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 