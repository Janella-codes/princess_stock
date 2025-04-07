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
          <Link to="/search" className="flex items-center">
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
  
     {/* Three Dots Icon (visible on small screens) */}
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
    <circle cx="12" cy="5" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="12" cy="19" r="1.5" />
  </svg>
</button>

  
        {/* Links (Desktop and Mobile) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row items-center space-x-6`}
        >
  <div className="flex flex-col space-y-4">
  {user ? (
    <>
      <Link
        to="/loggedinsearchpage"
        className="px-8 py-3 font-bold rounded text-white bg-cyan-300 hover:opacity-70"
      >
        My Stocks
      </Link>
      <div className="text-lg font-semibold text-darkBlue">
        Welcome, <span className="text-cyan-500">{user?.userName || "Guest"}</span>
      </div>
      <button
        onClick={logout}
        className="px-8 py-3 font-bold rounded text-white bg-cyan-300 hover:opacity-70"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <Link
        to="/search"
        className="px-8 py-3 font-bold rounded text-white bg-cyan-300 hover:opacity-70"
      >
        Search
      </Link>
      <Link to="/login" className="px-8 py-3 font-bold rounded text-white bg-cyan-300 hover:opacity-70">
        Login
      </Link>
      <Link
        to="/register"
        className="px-8 py-3 font-bold rounded text-white bg-cyan-300 hover:opacity-70"
      >
        Signup
      </Link>
    </>
  )}
</div>



        </div>
      </div>
    </nav>
  );
}  

export default Navbar;
