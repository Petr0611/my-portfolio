import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 py-24">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Abot Me
      </motion.h2>
      <motion.div
        className="text-lg text-gray-700 leading-relaxed space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>
          Fullstack Developer with experience building production-level REST
          APIs, scalable backend services, and modern frontend interfaces.
          Strong in Java, Spring Boot, React, and TypeScript. Skilled in
          architecture, data modeling, error handling, and CI/CD workflows.
          Collaborative team player with experience working in cross-functional
          teams of developers and QA testers. Motivated to contribute to
          impactful projects
        </p>
      </motion.div>

      <motion.div
        className="mt-12 flex flex-wrap gap-3 justify-content-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {[
          "React",
          "TypeScript",
          "Node.js",
          "Redux Toolkit",
          "JavaScript",
          "TailWind CSS",
          "Axios",
          "React Router",
          "Formik",
          "Vite",
          "Java",
          "Spring Boot",
          "Hibernate",
          "PostgreSQL",
          "MySQL",
          "JPA",
          "Gradle",
          "Maven",
          "Git",
          "REST APIs",
          "Docker",
          "GitHub Actions",
          "CI/CD",
          "Swagger/OpenAPI",
          "Postmann",
          "Linux CLI",
        ].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-200"
          >
            {skill}
          </span>
        ))}

        <motion.div
          className="mt-12 flex justify-content-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-medium"
          >
            Dounload CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
export default About;
