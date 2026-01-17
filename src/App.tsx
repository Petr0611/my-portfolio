import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section id="hero" className="scroll-mt-24">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}
