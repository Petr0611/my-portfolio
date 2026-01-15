import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx=auto px-4 py-24">
      <motion.h2
        className="text-4xl font-bold text-center text-gray-900 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-center text-gray-600 text-lg max-w 2xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I’m always open to discussing new opportunities, collaborations, or
        interesting projects. Feel free to reach out through any of the
        platforms below.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Email */}
        <motion.a
          href="mailto:ciolacpp@gmail.com"
          className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition flex flex-col align-items-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Mail className="w-8 h-8 text-blue-600" />
          <span className="text-gray-900 font-medium">Email</span>
          <span className="text-gray-500 text-sm">ciolacpp@gmail.com</span>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/Petr0611"
          target="_blank"
          className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <svg
            className="w-8 h-8 text-blue-600 fill-current"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub</title>
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
                 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61 
                 -.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 
                 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 
                 3.492.997.108-.776.418-1.305.762-1.604-2.665-.3-5.466-1.334-5.466-5.93 
                 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3.003-.404 
                 c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 
                 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
                 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92 
                 .43.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 
                 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297 
                 c0-6.627-5.373-12-12-12"
            />
          </svg>

          <span className="text-gray-900 font-medium">GitHub</span>
          <span className="text-gray-500 text-sm">github.com/Petr0611</span>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/petr-ciolac-304503339/"
          target="_blank"
          className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <svg
            className="w-8 h-8 text-blue-600 fill-current"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LinkedIn</title>
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037 
                -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049 
                 c.476-.9 1.637-1.852 3.368-1.852 3.598 0 4.266 2.37 4.266 5.455v6.288zM5.337 
                 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.814 
                20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 
                1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 
                23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
            />
          </svg>

          <span className="text-gray-900 font-medium">LinkedIn</span>
          <span className="text-gray-500 text-sm">
            linkedin.com/in/petr-ciolac-304503339/
          </span>
        </motion.a>
      </div>
    </section>
  );
}

export default Contact;
