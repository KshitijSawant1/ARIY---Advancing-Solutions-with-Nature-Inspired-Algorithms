import React from "react";
import { Link, useNavigate } from "react-router-dom";
import arilogo from "../assets/arilogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={arilogo} alt="ARI Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link
              to="/"
              className="inline-block rounded-sm border border-red-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:rotate-2 focus:ring-3 focus:outline-none"
            >
              Hero
            </Link>
          </li>
          <li>
            <Link
              to="/visualizer"
              className="inline-block rounded-sm border border-red-500 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:-rotate-2 focus:ring-3 focus:outline-none"
            >
              Visualizer
            </Link>
          </li>
        </ul>
        {/* CTA Button */}
        <button
          onClick={() => navigate("/visualizer")}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-red-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Go to Visualizer
          </span>
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          <Link
            to="/"
            className="block py-2 text-indigo-400 border border-indigo-500 rounded px-4 hover:text-white hover:bg-indigo-600 transition"
          >
            Hero
          </Link>
          <Link
            to="/visualizer"
            className="block py-2 text-white bg-indigo-600 rounded px-4 hover:bg-indigo-700 transition"
          >
            Visualizer
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
