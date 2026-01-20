import { motion } from "framer-motion";
import photo from "../assets/photo.jpg";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-32 text-center">
      <motion.img
        src={photo}
        alt="Petr"
        className="w-40 h-40 rounded-full mx-auto mb-8 object-cover object-top shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-5xl font-bold text-gray-900 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm Piotr
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Fullstack Developer specializing in Java, Spring Boot, React, Node.js
        and scalable web applications.
      </motion.p>

      <motion.a
        href="#projects"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}
