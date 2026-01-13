import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="pt-24 max-w-6xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
