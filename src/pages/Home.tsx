function Home() {
  return (
    <section className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-20">
      {/*Left side */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold leading-tight">
          Hi, I`m <span className="text-blue-600">Piotr</span>
        </h1>

        <p className="mt-6 text-lg text-gray-700">
          A passionate Frontend Developer specializing in React, TypeScript, and
          modern UI/UX.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right side */}
      <div className="mt-10 md:mt-0">
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg flex items-center justify-center">
          <span className="text-white text-4xl font-bold">P</span>
        </div>
      </div>
    </section>
  );
}
export default Home;
