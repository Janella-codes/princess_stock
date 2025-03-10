
import { Link } from "react-router-dom";
import logo from "./logo.png";
import logo2 from "./logo_princess3.png"
import logo4 from "./logo_princess4.png"
import { useAuth } from "../../Context/useAuth";

interface Props {}

const Navbar = (props: Props) => {

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to="/">
          <img src={logo4} alt="" style={{ width: '400px', height: '60px', objectFit: 'contain', borderRadius: '50%' }} />
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Search
            </Link>
          </div>
        </div>
        
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <div className="hover:text-darkBlue">Welcome, </div>
            <a
              href="/"
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen 
              hover:opacity-70"
            >
              Logout
            </a>
          </div>
      
          <div className="hidden lg:flex items-center space-x-6 text-back">
            <Link to="/login" className="hover:text-darkBlue">
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen 
              hover:opacity-70"
            >
              Signup
            </Link>
          </div>
        
      </div>
    </nav>
  );
};

export default Navbar;