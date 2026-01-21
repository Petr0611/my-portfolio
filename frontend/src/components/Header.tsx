// import { Link } from "react-router-dom";
// function Header() {
//   return (
//     <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
//       <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
//         <h1 className="text-2xl font-bold">Piotr</h1>

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

//         <ul className="flex gap-6 text-lg">
//           <li>
//             <Link to="/" className="hover:text-blue-600 transition">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:text-blue-600 transition">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/projects" className="hover:text-blue-600 transition">
//               Projects
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-blue-600 transition">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
// export default Header;
function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition backdrop-blur-md ${
        scrolled ? "bg-white/70 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <a href="#hero" className="text-xl font-semibold textgray-900">
          Piotr
        </a>
        {/* Navigation Links */}
        <div className="hidden sm:flex gap-8 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
export default Header;
