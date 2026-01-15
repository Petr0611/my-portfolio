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
          I’m a passionate Frontend Developer focused on building clean, modern,
          and user‑friendly interfaces. I enjoy transforming ideas into
          functional and visually appealing digital experiences using the latest
          web technologies.
        </p>

        <p>
          My main stack includes <strong>React</strong>,{" "}
          <strong>TypeScript</strong>,<strong> Tailwind CSS</strong>, and{" "}
          <strong>Vite</strong>. I love working with tools that help me build
          fast, scalable, and maintainable applications. I’m always exploring
          new approaches to improve UI/UX and deliver smooth, intuitive
          interactions.
        </p>

        <p>
          I’m detail‑oriented, curious, and constantly learning. Whether it’s
          refining a component, optimizing performance, or experimenting with
          new design patterns — I enjoy every part of the process.
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
          "JavaScript",
          "TailWind CSS",
          "Vite",
          "Git",
          "REST APIs",
          "Responsive Design",
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
