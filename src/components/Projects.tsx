import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-24">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gah-8">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="p-6 border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              Project Preview
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Project Title
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              Short description of the project will go here. You can add tech
              stack, features, or goals.
            </p>

            <div className="flex gap-3">
              <span className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-md border border-blue-200">
                React
              </span>
              <span className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-md border border-blue-200">
                TypeScript
              </span>
            </div>

            <div className="mt-6 flex gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm shadow hover:bg-blue-700 transition">
                Live Demo
              </button>
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm hover:bg-blue-50 transition">
                GitHub
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
