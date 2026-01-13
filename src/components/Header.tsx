import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="text-2xl font-bold">Piotr</h1>

        <ul className="flex gap-6 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-600 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
