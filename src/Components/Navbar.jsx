
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Navbar = ({ searchTerm, setSearchTerm }) => {
  
//   const linkHover = {
//     hover: {
//       scale: 1.1, 
//       rotate: 5,  
//       color: "#FF5733",
//       transition: {
//         type: "spring",
//         stiffness: 300, 
//         damping: 15,
//       },
//     },
//     tap: {
//       scale: 0.9, 
//     },
//   };

//   const h1Hover = {
//     hover: {
//       scale: 1.1,
//       color: "#FF5733", 
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 12,
//       },
//     },
//     tap: {
//       scale: 0.95,
//     },
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <div className="flex-1">
//           <motion.div
//             variants={h1Hover}
//             whileHover="hover"
//             whileTap="tap"
//             style={{ display: "inline-block" }}
//           >
//             <Link className="link-class btn btn-ghost text-xl text-white" to="/">
//               <motion.h1 className="nav-head">World Time Zones</motion.h1>
//             </Link>
//           </motion.div>
//         </div>
//         <ul>
//           <li className="txt">
//             <motion.div
//               variants={linkHover}
//               whileHover="hover"
//               whileTap="tap"
//               style={{ display: "inline-block" }}
//             >
//               <Link className="li-class link-class btn" to="/Complete">
//                 Home
//               </Link>
//             </motion.div>
//           </li>
//           <li className="txt">
//             <motion.div
//               variants={linkHover}
//               whileHover="hover"
//               whileTap="tap"
//               style={{ display: "inline-block" }}
//             >
//               <Link className="li-class link-class btn" to="/Contact">
//                 Contact
//               </Link>
//             </motion.div>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the burger menu

// const Navbar = ({ searchTerm, setSearchTerm }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu visibility

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const linkHover = {
//     hover: {
//       scale: 1.1,
//       rotate: 5,
//       color: "#FF5733",
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 15,
//       },
//     },
//     tap: {
//       scale: 0.9,
//     },
//   };

//   const h1Hover = {
//     hover: {
//       scale: 1.1,
//       color: "#FF5733",
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 12,
//       },
//     },
//     tap: {
//       scale: 0.95,
//     },
//   };

//   return (
//     <div>
//       <nav className="navbar flex items-center justify-between px-4 py-2">
//         <div className="flex-1">
//           <motion.div
//             variants={h1Hover}
//             whileHover="hover"
//             whileTap="tap"
//             style={{ display: "inline-block" }}
//           >
//             <Link className="link-class btn btn-ghost text-xl text-white" to="/">
//               <motion.h1 className="nav-head">World Time Zones</motion.h1>
//             </Link>
//           </motion.div>
//         </div>

//         {/* Burger menu icon for small screens */}
//         <div className="md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-white text-2xl focus:outline-none"
//           >
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Links for larger screens */}
//         <ul className={`md:flex md:items-center md:space-x-6 ${isMenuOpen ? "block" : "hidden"} md:block`}>
//           <li className="txt">
//             <motion.div
//               variants={linkHover}
//               whileHover="hover"
//               whileTap="tap"
//               style={{ display: "inline-block" }}
//             >
//               <Link className="li-class link-class btn" to="/Complete">
//                 Home
//               </Link>
//             </motion.div>
//           </li>
//           <li className="txt">
//             <motion.div
//               variants={linkHover}
//               whileHover="hover"
//               whileTap="tap"
//               style={{ display: "inline-block" }}
//             >
//               <Link className="li-class link-class btn" to="/Contact">
//                 Contact
//               </Link>
//             </motion.div>
//           </li>
//         </ul>
//       </nav>

//       {/* Menu items for mobile view when burger menu is opened */}
//       {isMenuOpen && (
//         <div className="md:hidden flex flex-col items-center space-y-4">
//           <motion.div
//             variants={linkHover}
//             whileHover="hover"
//             whileTap="tap"
//             style={{ display: "inline-block" }}
//           >
//             <Link className="li-class link-class btn" to="/Complete">
//               Home
//             </Link>
//           </motion.div>
//           <motion.div
//             variants={linkHover}
//             whileHover="hover"
//             whileTap="tap"
//             style={{ display: "inline-block" }}
//           >
//             <Link className="li-class link-class btn" to="/Contact">
//               Contact
//             </Link>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the burger menu

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <nav className="navbar flex items-center justify-between px-4 py-2 bg-gray-800">
        <div className="flex-1">
          <motion.div
            variants={h1Hover}
            whileHover="hover"
            whileTap="tap"
            style={{ display: "inline-block" }}
          >
            <Link className="link-class btn btn-ghost text-xl text-white" to="/">
              <motion.h1 className="nav-head">World Time Zones</motion.h1>
            </Link>
          </motion.div>
        </div>

        {/* Burger menu icon for small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black border-0 bg-inherit text-2xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links for larger screens */}
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

        {/* Dropdown menu for mobile view */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-700 text-white shadow-lg rounded-b-lg">
            <ul className="zlign items-center space-y-4 py-4">
              <li>
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
              <li>
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
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

