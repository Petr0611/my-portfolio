import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import photo from "../assets/photo.jpg";

function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center justify-between">
      {/*Left side */}
      <motion.div
        className="max-w-xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-5xl font-bold leading-tight text-gray-900 dark\:text-white">
          Hi, I`m <span className="text-blue-600">Piotr</span>
        </h1>

        <p className="mt-6 text-lg text-gray-700 dark\:text-gray-300">
          <Typewriter
            words={[
              "Fronted Developer",
              "React Enthusiast",
              "TypeScript Fan",
              "UI/UX Explorer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Right side */}
      <motion.div
        className="mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
      >
        <img
          src={photo}
          alt="Piotr"
          className="w-64 h-64 rounded-full object-cover object-top shadow-xl border-4 border-white"
        />
        {/* <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg flex items-center justify-center">
          <span className="text-white text-4xl font-bold">P</span>
        </div> */}
      </motion.div>
    </section>
  );
}
export default Home;
