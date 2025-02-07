import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkHover = {
    hover: {
      scale: 1,
      rotate: 5,
      color: "#FF5733",
      transition: {
        type: "spring",
        damping: 15,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  const h1Hover = {
    hover: {
      scale: 1.1,
      color: "#FF5733",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div>
      <nav className="navbar flex items-center justify-between px-4 py-2 bg-gray-800">
        <div className="flex-1">
          <motion.div
            variants={h1Hover}
            whileHover="hover"
            whileTap="tap"
            style={{ display: "inline-block" }}
          >
            <Link
              className="link-class btn btn-ghost text-xl text-white"
              to="/"
            >
              <motion.h1 className="nav-head">World Time Zones</motion.h1>
            </Link>
          </motion.div>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black border-0 bg-inherit text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className="hidden md:flex md:items-center md:space-x-6">
          <li className="txt">
            <motion.div
              variants={linkHover}
              whileHover="hover"
              whileTap="tap"
              style={{ display: "inline-block" }}
            >
              <Link className="li-class link-class btn" to="/Complete">
                Home
              </Link>
            </motion.div>
          </li>
          <li className="txt">
            <motion.div
              variants={linkHover}
              whileHover="hover"
              whileTap="tap"
              style={{ display: "inline-block" }}
            >
              <Link className="li-class link-class btn" to="/Contact">
                Contact
              </Link>
            </motion.div>
          </li>
        </ul>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 back text-white shadow-lg rounded-b-lg">
            <ul className="zlign items-center space-y-4 py-4">
              <li>
                <motion.div
                  variants={linkHover}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ display: "inline-block" }}
                >
                  <Link
                    className="li-class link-class btn bg-black"
                    to="/Complete"
                  >
                    Home
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div
                  variants={linkHover}
                  whileHover="hover"
                  whileTap="tap"
                  style={{ display: "inline-block" }}
                >
                  <Link
                    className="li-class link-class btn bg-black"
                    to="/Contact"
                  >
                    Contact
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
