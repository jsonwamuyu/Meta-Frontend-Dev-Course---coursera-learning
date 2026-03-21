import { Link } from "react-router-dom";
import LoginLogoutButton from "./LoginLogoutButton";

import { useState } from "react";

const Navbar = () => {
  // const userName = useContext(UserContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="w-full bg-gray-800 text-white py-2">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        <Link to="/">
          <h2 className="text-4xl font-extrabold">
            <span className="text-green-500">L</span>
            <span className="white">M</span>
            <span className="text-blue-500">P</span>
          </h2>
        </Link>

        <nav className="my-4 md:my-0">
          <Link to="/" className="inline-block mr-4">
            Home
          </Link>
          <Link to="/assets" className="inline-block mr-4">
            Assets
          </Link>
          <Link to="/about" className="inline-block mr-4">
            About Us
          </Link>
          <Link to="/contact" className="inline-block mr-4">
            Contact Us
          </Link>
          <Link to="/signup" className="inline-block mr-4">
            Sign up
          </Link>
        </nav>
        <div>
          <LoginLogoutButton
            isLoggedIn={isLoggedIn}
            handleLoginLogout={handleLoginLogout}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
