import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white ">
           <Link className="link-class" to="/"><h1>World Time Zones</h1></Link> 
          </a>
        </div>
<ul>
      {/* <li>  <div className="color-search navbar-end">
          <a href="#search" className="btn search-button btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
          </div>
          </li> */}

          <li className="li-class " ><Link className="link-class btn" to="/Complete">Home</Link></li>
          <li className="li-class" ><Link className="link-class btn" to="/Contact">Contact</Link></li>

        </ul>
      </nav>
    </div>
  );
};

export default Navbar;


// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ searchTerm, setSearchTerm }) => {
//   return (
//     <nav className="navbar">
//       <div className="flex-1">
//         <Link to="/" className="btn btn-ghost text-xl text-white">
//           <h1>World Time Zones</h1>
//         </Link>
//       </div>

//       <div className="navbar-end">
//         <ul className="menu menu-horizontal px-1">
//           {/* Search Button */}
//           <li>
//             <div className="color-search">
//               <a href="#search" className="btn search-button btn-ghost">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//               </a>
//             </div>
//           </li>

//           <li>
//             <Link to="/Contact" className="btn btn-ghost">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
