
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  
  const linkHover = {
    hover: {
      scale: 1.1, 
      rotate: 5,  
      color: "#FF5733",
      transition: {
        type: "spring",
        stiffness: 300, 
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
      <nav className="navbar">
        <div className="flex-1">
          <motion.div
            variants={h1Hover}
            whileHover="hover"
            whileTap="tap"
            style={{ display: "inline-block" }}
          >
            <Link className="link-class btn btn-ghost text-xl text-white" to="/">
              <motion.h1>World Time Zones</motion.h1>
            </Link>
          </motion.div>
        </div>
        <ul>
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
      </nav>
    </div>
  );
};

export default Navbar;
