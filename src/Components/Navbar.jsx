import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="flex-1">
          
            <Link className="link-class btn btn-ghost text-xl text-white " to="/">
              <h1>World Time Zones</h1>
            </Link>
          
        </div>
        <ul>
       

          <li className=" ">
            <Link className="li-class link-class btn" to="/Complete">
              Home
            </Link>
          </li>
          <li className="">
            <Link className="li-class link-class btn" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

