import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo4 from "./logo_princess4.png";
import { useAuth } from "../../Context/useAuth"; // Assuming useAuth provides user data and logout

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu
  const { user, logout } = useAuth(); // Access user and logout function from context

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img
              src={logo4}
              alt="Logo"
              style={{
                width: "400px",
                height: "60px",
                objectFit: "contain",
                borderRadius: "50%",
              }}
            />
          </Link>
        </div>

        {/* Hamburger Icon (visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Links (Desktop and Mobile) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row items-center space-x-6`}
        >
          {/* Common Navbar Links */}
          <Link to="/search" className="text-black hover:text-darkBlue">
            Search
          </Link>

          {/* Conditional Rendering for Authenticated Users */}
          {user ? (
            <>
            <Link to="/loggedinsearchpage" className="hover:text-darkBlue">
            loggedinsearchpage
            </Link>
              <div className="hover:text-darkBlue">
                Welcome, {user.userName || "Guest"}
              </div>
              <button
                onClick={logout}
                className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-darkBlue">
                Login
              </Link>
              <Link
                to="/register"
                className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
              >
                Signup
              </Link>
              <Link to="/loggedinsearchpage" className="hover:text-darkBlue">
            loggedinsearchpage
            </Link>
            </>
     
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
