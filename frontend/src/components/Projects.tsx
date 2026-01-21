import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  language: string;
}

function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  const allowedProjects = [
    "my-portfolio",
    "Task-Tracker-demo-BE",
    "Task-Tracker-demo-FE",
    "project_weather_app",
    "tic_tac_toe",
    "project_basic_clothers",
    "project_transporte",
    "productSpringBootProject",
    "g_51_shop",
    "chess-champions",
  ];

  const username = import.meta.env.VITE_GITHUB_USER;

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo: Repo) =>
          allowedProjects.includes(repo.name),
        );
        setRepos(filtered);
      })
      .catch((err) => console.error("GitHub API error:", err));
  }, []);

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {repos.map((repo, index) => (
          <motion.div
            key={repo.id}
            className="p-6 border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              {repo.language || "Project"}
            </div> */}

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {repo.name}
            </h3>

            <p className="text-gray-600 text-sm mb-4">
              {repo.description || "No description provided."}
            </p>

            <div className="flex gap-3">
              {repo.language && (
                <span className="px-3 py-1 text-xs bg-blue-50 text-blue-700 rounded-md border border-blue-200">
                  {repo.language}
                </span>
              )}
            </div>

            <div className="mt-6 flex gap-4">
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm shadow hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
              )}

              <a
                href={repo.html_url}
                target="_blank"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm hover:bg-blue-50 transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
