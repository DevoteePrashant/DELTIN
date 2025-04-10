import { Link } from "react-router-dom";
import img from "../assets/img/IMG-20240902-WA0009 - Aarav Godhani 4.png"; // Adjust the path to your logo file
import "../../src/index.css"; // Import your CSS file

function Navbar() {
  return (
    <div className="p-3 lg:w-[1440px] sm:w-full z-50 fixed top-0 left-0 right-0 m-auto">
      <div className="flex items-center justify-between bg-[#127BAA] px-6 py-4 h-20 rounded-full shadow-lg">
        {/* Logo */}
        <Link to="/">
          <img
            src={img}
            alt="Deltine International Logo"
            className="object-contain w-22 sm:w-24"
          />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            id="menu-toggle"
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center space-x-8 text-white font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-gray-200 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-gray-200 transition-colors"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-gray-200 transition-colors"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-gray-200 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-gray-200 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-200 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="bg-white text-[#127BAA] px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-md"
          >
            Inquiry Now
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="lg:hidden hidden flex-col bg-[#127BAA] text-white mt-2 rounded-lg shadow-lg">
        <ul className="flex flex-col items-start space-y-2 p-4 font-medium">
          <li>
            <Link to="/" className="hover:text-gray-200 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200 transition-colors">
              About us
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-200 transition-colors">
              Product
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-gray-200 transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-200 transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-200 transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Contact Button */}
        <div className="p-4">
          <Link
            to="/contact"
            className="bg-white text-[#127BAA] px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-md w-full text-center block"
          >
            Inquiry Now
          </Link>
        </div>
      </div>

      {/* Mobile Menu Toggle Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          const menuToggle = document.getElementById('menu-toggle');
          const mobileMenu = document.getElementById('mobile-menu');
          
          menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
          });
        `
      }} />
    </div>
  );
}

export default Navbar;
