//!NAvbar
// import React, { useEffect, useState } from "react";
// import moment from "moment-timezone";
// import LoadingSpinner from "./LoadingSpinner";
// // import LoadingSpinnerimg from "./LoadingSpinnerimg";
// import { motion } from "framer-motion";
// const countries = [
//   { name: "Afghanistan", timezone: "Asia/Kabul", continent: "Asia" },
//   { name: "Albania", timezone: "Europe/Tirane", continent: "Europe" },
//   { name: "Algeria", timezone: "Africa/Algiers", continent: "Africa" },
//   { name: "Andorra", timezone: "Europe/Andorra", continent: "Europe" },
//   { name: "Angola", timezone: "Africa/Luanda", continent: "Africa" },
//   { name: "Antigua and Barbuda", timezone: "America/Antigua", continent: "North America" },
//   { name: "Argentina", timezone: "America/Argentina/Buenos_Aires", continent: "South America" },
//   { name: "Armenia", timezone: "Asia/Yerevan", continent: "Asia" },
//   { name: "Australia", timezone: "Australia/Sydney", continent: "Australia" },
//   { name: "Austria", timezone: "Europe/Vienna", continent: "Europe" },
//   { name: "Azerbaijan", timezone: "Asia/Baku", continent: "Asia" },
//   { name: "Bahamas", timezone: "America/Nassau", continent: "North America" },
//   { name: "Bahrain", timezone: "Asia/Bahrain", continent: "Asia" },
//   { name: "Bangladesh", timezone: "Asia/Dhaka", continent: "Asia" },
//   { name: "Barbados", timezone: "America/Barbados", continent: "North America" },
//   { name: "Belarus", timezone: "Europe/Minsk", continent: "Europe" },
//   { name: "Belgium", timezone: "Europe/Brussels", continent: "Europe" },
//   { name: "Belize", timezone: "America/Belize", continent: "North America" },
//   { name: "Benin", timezone: "Africa/Porto-Novo", continent: "Africa" },
//   { name: "Bhutan", timezone: "Asia/Thimphu", continent: "Asia" },
//   { name: "Bolivia", timezone: "America/La_Paz", continent: "South America" },
//   { name: "Bosnia and Herzegovina", timezone: "Europe/Sarajevo", continent: "Europe" },
//   { name: "Botswana", timezone: "Africa/Gaborone", continent: "Africa" },
//   { name: "Brazil", timezone: "America/Sao_Paulo", continent: "South America" },
//   { name: "Brunei", timezone: "Asia/Brunei", continent: "Asia" },
//   { name: "Bulgaria", timezone: "Europe/Sofia", continent: "Europe" },
//   { name: "Burkina Faso", timezone: "Africa/Ouagadougou", continent: "Africa" },
//   { name: "Burundi", timezone: "Africa/Bujumbura", continent: "Africa" },
//   { name: "Cabo Verde", timezone: "Atlantic/Cape_Verde", continent: "Africa" },
//   { name: "Cambodia", timezone: "Asia/Phnom_Penh", continent: "Asia" },
//   { name: "Cameroon", timezone: "Africa/Douala", continent: "Africa" },
//   { name: "Canada", timezone: "America/Toronto", continent: "North America" },
//   { name: "African Republic", timezone: "Africa/Bangui", continent: "Africa" },
//   { name: "Chad", timezone: "Africa/Ndjamena", continent: "Africa" },
//   { name: "Chile", timezone: "America/Santiago", continent: "South America" },
//   { name: "China", timezone: "Asia/Shanghai", continent: "Asia" },
//   { name: "Colombia", timezone: "America/Bogota", continent: "South America" },
//   { name: "Comoros", timezone: "Indian/Comoro", continent: "Africa" },
//   { name: "Congo", timezone: "Africa/Kinshasa", continent: "Africa" },
//   { name: "Costa Rica", timezone: "America/Costa_Rica", continent: "North America" },
//   { name: "Croatia", timezone: "Europe/Zagreb", continent: "Europe" },
//   { name: "Cuba", timezone: "America/Havana", continent: "North America" },
//   { name: "Cyprus", timezone: "Asia/Nicosia", continent: "Asia" },
//   { name: "Czech Republic", timezone: "Europe/Prague", continent: "Europe" },
//   { name: "Denmark", timezone: "Europe/Copenhagen", continent: "Europe" },
//   { name: "Djibouti", timezone: "Africa/Djibouti", continent: "Africa" },
//   // { name: "Dominica", timezone: "America/Dominica", continent: "North America" },
//   { name: "Dominican Republic", timezone: "America/Santo_Domingo", continent: "North America" },
//   { name: "Ecuador", timezone: "America/Guayaquil", continent: "South America" },
//   { name: "Egypt", timezone: "Africa/Cairo", continent: "Africa" },
//   { name: "El Salvador", timezone: "America/El_Salvador", continent: "North America" },
//   { name: "Equatorial Guinea", timezone: "Africa/Malabo", continent: "Africa" },
//   { name: "Eritrea", timezone: "Africa/Asmara", continent: "Africa" },
//   { name: "Estonia", timezone: "Europe/Tallinn", continent: "Europe" },
//   { name: "Eswatini", timezone: "Africa/Mbabane", continent: "Africa" },
//   { name: "Ethiopia", timezone: "Africa/Addis_Ababa", continent: "Africa" },
//   { name: "Fiji", timezone: "Pacific/Fiji", continent: "Australia" },
//   { name: "Finland", timezone: "Europe/Helsinki", continent: "Europe" },
//   { name: "France", timezone: "Europe/Paris", continent: "Europe" },
//   { name: "Gabon", timezone: "Africa/Libreville", continent: "Africa" },
//   { name: "Gambia", timezone: "Africa/Banjul", continent: "Africa" },
//   { name: "Georgia", timezone: "Asia/Tbilisi", continent: "Asia" },
//   { name: "Germany", timezone: "Europe/Berlin", continent: "Europe" },
//   { name: "Ghana", timezone: "Africa/Accra", continent: "Africa" },
//   { name: "Greece", timezone: "Europe/Athens", continent: "Europe" },
//   { name: "Grenada", timezone: "America/Grenada", continent: "North America" },
//   { name: "Guatemala", timezone: "America/Guatemala", continent: "North America" },
//   { name: "Guinea", timezone: "Africa/Conakry", continent: "Africa" },
//   { name: "Guinea-Bissau", timezone: "Africa/Bissau", continent: "Africa" },
//   { name: "Guyana", timezone: "America/Guyana", continent: "South America" },
//   { name: "Haiti", timezone: "America/Port-au-Prince", continent: "North America" },
//   { name: "Honduras", timezone: "America/Tegucigalpa", continent: "North America" },
//   { name: "Hungary", timezone: "Europe/Budapest", continent: "Europe" },
//   { name: "Iceland", timezone: "Atlantic/Reykjavik", continent: "Europe" },
//   { name: "India", timezone: "Asia/Kolkata", continent: "Asia" },
//   { name: "Indonesia", timezone: "Asia/Jakarta", continent: "Asia" },
//   { name: "Iran", timezone: "Asia/Tehran", continent: "Asia" },
//   { name: "Iraq", timezone: "Asia/Baghdad", continent: "Asia" },
//   { name: "Ireland", timezone: "Europe/Dublin", continent: "Europe" },
//   { name: "Israel", timezone: "Asia/Jerusalem", continent: "Asia" },
//   { name: "Italy", timezone: "Europe/Rome", continent: "Europe" },
//   { name: "Jamaica", timezone: "America/Jamaica", continent: "North America" },
//   { name: "Japan", timezone: "Asia/Tokyo", continent: "Asia" },
//   { name: "Jordan", timezone: "Asia/Amman", continent: "Asia" },
//   { name: "Kazakhstan", timezone: "Asia/Almaty", continent: "Asia" },
//   { name: "Kenya", timezone: "Africa/Nairobi", continent: "Africa" },
//   { name: "Kiribati", timezone: "Pacific/Tarawa", continent: "Australia" },
//   // { name: "Kosovo", timezone: "Europe/Pristina", continent: "Europe" },
//   { name: "Kuwait", timezone: "Asia/Kuwait", continent: "Asia" },
//   { name: "Kyrgyzstan", timezone: "Asia/Bishkek", continent: "Asia" },
//   { name: "Laos", timezone: "Asia/Vientiane", continent: "Asia" },
//   { name: "Latvia", timezone: "Europe/Riga", continent: "Europe" },
//   { name: "Lebanon", timezone: "Asia/Beirut", continent: "Asia" },
//   { name: "Lesotho", timezone: "Africa/Maseru", continent: "Africa" },
//   { name: "Liberia", timezone: "Africa/Monrovia", continent: "Africa" },
//   { name: "Libya", timezone: "Africa/Tripoli", continent: "Africa" },
//   { name: "Liechtenstein", timezone: "Europe/Vaduz", continent: "Europe" },
//   { name: "Lithuania", timezone: "Europe/Vilnius", continent: "Europe" },
//   { name: "Luxembourg", timezone: "Europe/Luxembourg", continent: "Europe" },
//   { name: "Madagascar", timezone: "Indian/Antananarivo", continent: "Africa" },
//   { name: "Malawi", timezone: "Africa/Blantyre", continent: "Africa" },
//   { name: "Malaysia", timezone: "Asia/Kuala_Lumpur", continent: "Asia" },
//   { name: "Maldives", timezone: "Indian/Maldives", continent: "Asia" },
//   { name: "Mali", timezone: "Africa/Bamako", continent: "Africa" },
//   { name: "Malta", timezone: "Europe/Malta", continent: "Europe" },
//   { name: "Marshall Islands", timezone: "Pacific/Majuro", continent: "Australia" },
//   { name: "Mauritania", timezone: "Africa/Nouakchott", continent: "Africa" },
//   { name: "Mauritius", timezone: "Indian/Mauritius", continent: "Africa" },
//   { name: "Mexico", timezone: "America/Mexico_City", continent: "North America" },
//   { name: "Micronesia", timezone: "Pacific/Pohnpei", continent: "Australia" },
//   { name: "Moldova", timezone: "Europe/Chisinau", continent: "Europe" },
//   { name: "Monaco", timezone: "Europe/Monaco", continent: "Europe" },
//   { name: "Mongolia", timezone: "Asia/Ulaanbaatar", continent: "Asia" },
//   { name: "Montenegro", timezone: "Europe/Podgorica", continent: "Europe" },
//   { name: "Morocco", timezone: "Africa/Casablanca", continent: "Africa" },
//   { name: "Mozambique", timezone: "Africa/Maputo", continent: "Africa" },
//   { name: "Myanmar", timezone: "Asia/Yangon", continent: "Asia" },
//   { name: "Namibia", timezone: "Africa/Windhoek", continent: "Africa" },
//   { name: "Nauru", timezone: "Pacific/Nauru", continent: "Australia" },
//   { name: "Nepal", timezone: "Asia/Kathmandu", continent: "Asia" },
//   { name: "Netherlands", timezone: "Europe/Amsterdam", continent: "Europe" },
//   { name: "New Zealand", timezone: "Pacific/Auckland", continent: "Australia" },
//   { name: "Nicaragua", timezone: "America/Managua", continent: "North America" },
//   { name: "Niger", timezone: "Africa/Niamey", continent: "Africa" },
//   { name: "Nigeria", timezone: "Africa/Lagos", continent: "Africa" },
//   { name: "North Korea", timezone: "Asia/Pyongyang", continent: "Asia" },
//   { name: "North Macedonia", timezone: "Europe/Skopje", continent: "Europe" },
//   { name: "Norway", timezone: "Europe/Oslo", continent: "Europe" },
//   { name: "Oman", timezone: "Asia/Muscat", continent: "Asia" },
//   { name: "Pakistan", timezone: "Asia/Karachi", continent: "Asia" },
//   { name: "Palau", timezone: "Pacific/Palau", continent: "Australia" },
//   { name: "Panama", timezone: "America/Panama", continent: "North America" },
//   { name: "Papua New Guinea", timezone: "Pacific/Port_Moresby", continent: "Australia" },
//   { name: "Paraguay", timezone: "America/Asuncion", continent: "South America" },
//   { name: "Peru", timezone: "America/Lima", continent: "South America" },
//   { name: "Philippines", timezone: "Asia/Manila", continent: "Asia" },
//   { name: "Poland", timezone: "Europe/Warsaw", continent: "Europe" },
//   { name: "Portugal", timezone: "Europe/Lisbon", continent: "Europe" },
//   { name: "Qatar", timezone: "Asia/Qatar", continent: "Asia" },
//   { name: "Romania", timezone: "Europe/Bucharest", continent: "Europe" },
//   { name: "Russia", timezone: "Europe/Moscow", continent: "Europe" },
//   { name: "Rwanda", timezone: "Africa/Kigali", continent: "Africa" },
//   { name: "Saint Kitts and Nevis", timezone: "America/St_Kitts", continent: "North America" },
//   { name: "Saint Lucia", timezone: "America/St_Lucia", continent: "North America" },
//   { name: "Saint Vincent and the Grenadines", timezone: "America/St_Vincent", continent: "North America" },
//   { name: "Samoa", timezone: "Pacific/Apia", continent: "Australia" },
//   { name: "San Marino", timezone: "Europe/San_Marino", continent: "Europe" },
//   { name: "Sao Tome and Principe", timezone: "Africa/Sao_Tome", continent: "Africa" },
//   { name: "Saudi Arabia", timezone: "Asia/Riyadh", continent: "Asia" },
//   { name: "Senegal", timezone: "Africa/Dakar", continent: "Africa" },
//   { name: "Serbia", timezone: "Europe/Belgrade", continent: "Europe" },
//   { name: "Seychelles", timezone: "Indian/Mahe", continent: "Africa" },
//   { name: "Sierra Leone", timezone: "Africa/Freetown", continent: "Africa" },
//   { name: "Singapore", timezone: "Asia/Singapore", continent: "Asia" },
//   { name: "Slovakia", timezone: "Europe/Bratislava", continent: "Europe" },
//   { name: "Slovenia", timezone: "Europe/Ljubljana", continent: "Europe" },
//   { name: "Solomon Islands", timezone: "Pacific/Guadalcanal", continent: "Australia" },
//   { name: "Somalia", timezone: "Africa/Mogadishu", continent: "Africa" },
//   { name: "South Africa", timezone: "Africa/Johannesburg", continent: "Africa" },
//   { name: "South Korea", timezone: "Asia/Seoul", continent: "Asia" },
//   { name: "South Sudan", timezone: "Africa/Juba", continent: "Africa" },
//   { name: "Spain", timezone: "Europe/Madrid", continent: "Europe" },
//   { name: "Sri Lanka", timezone: "Asia/Colombo", continent: "Asia" },
//   { name: "Sudan", timezone: "Africa/Khartoum", continent: "Africa" },
//   { name: "Suriname", timezone: "America/Paramaribo", continent: "South America" },
//   { name: "Sweden", timezone: "Europe/Stockholm", continent: "Europe" },
//   { name: "Switzerland", timezone: "Europe/Zurich", continent: "Europe" },
//   { name: "Syria", timezone: "Asia/Damascus", continent: "Asia" },
//   { name: "Taiwan", timezone: "Asia/Taipei", continent: "Asia" },
//   { name: "Tajikistan", timezone: "Asia/Dushanbe", continent: "Asia" },
//   { name: "Tanzania", timezone: "Africa/Dar_es_Salaam", continent: "Africa" },
//   { name: "Thailand", timezone: "Asia/Bangkok", continent: "Asia" },
//   { name: "Timor-Leste", timezone: "Asia/Dili", continent: "Asia" },
//   { name: "Togo", timezone: "Africa/Lome", continent: "Africa" },
//   { name: "Tonga", timezone: "Pacific/Tongatapu", continent: "Australia" },
//   { name: "Trinidad and Tobago", timezone: "America/Port_of_Spain", continent: "North America" },
//   { name: "Tunisia", timezone: "Africa/Tunis", continent: "Africa" },
//   { name: "Turkey", timezone: "Europe/Istanbul", continent: "Europe" },
//   { name: "Turkmenistan", timezone: "Asia/Ashgabat", continent: "Asia" },
//   { name: "Tuvalu", timezone: "Pacific/Funafuti", continent: "Australia" },
//   { name: "Uganda", timezone: "Africa/Kampala", continent: "Africa" },
//   { name: "Ukraine", timezone: "Europe/Kiev", continent: "Europe" },
//   { name: "United Arab Emirates", timezone: "Asia/Dubai", continent: "Asia" },
//   { name: "United Kingdom", timezone: "Europe/London", continent: "Europe" },
//   { name: "United States", timezone: "America/New_York", continent: "North America" },
//   { name: "Uruguay", timezone: "America/Montevideo", continent: "South America" },
//   { name: "Uzbekistan", timezone: "Asia/Tashkent", continent: "Asia" },
//   { name: "Vanuatu", timezone: "Pacific/Efate", continent: "Australia" },
//   { name: "Vatican City", timezone: "Europe/Vatican", continent: "Europe" },
//   { name: "Venezuela", timezone: "America/Caracas", continent: "South America" },
//   { name: "Vietnam", timezone: "Asia/Ho_Chi_Minh", continent: "Asia" },
//   { name: "Yemen", timezone: "Asia/Aden", continent: "Asia" },
//   { name: "Zambia", timezone: "Africa/Lusaka", continent: "Africa" },
//   { name: "Zimbabwe", timezone: "Africa/Harare", continent: "Africa" }
// ]

// const fetchCountryImage = async (countryName) => {
//   const response = await fetch(
//     `https://restcountries.com/v3.1/name/${countryName}`
//   );
//   const data = await response.json();
//   return data[0]?.flags?.png;
// };

// const CompleteModel = () => {
//   const [times, setTimes] = useState([]);
//   const [countryImages, setCountryImages] = useState({});
//   const [imageLoading, setImageLoading] = useState({});
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredCountries, setFilteredCountries] = useState(countries);
//   const [isLoading, setIsLoading] = useState(false);

//   // Updates time every second

//   useEffect(() => {
//     const updateTimes = () => {
//       const currentTimes = countries.map((country) => ({
//         name: country.name,
//         time: moment().tz(country.timezone).format("LTS"),
//         date: moment().tz(country.timezone).format("LL"),
//         continent: country.continent,
//       }));
//       setTimes(currentTimes);
//     };

//     updateTimes();
//     const interval = setInterval(updateTimes, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   // Fetch country images
//   useEffect(() => {
//     const fetchImages = async () => {
//       const images = {};
//       const loadingState = {};
//       for (const country of countries) {
//         loadingState[country.name] = true;
//         images[country.name] = await fetchCountryImage(country.name);
//         loadingState[country.name] = false;
//       }
//       setCountryImages(images);
//       setImageLoading(loadingState);
//     };

//     fetchImages();
//   }, []);

//   useEffect(() => {
//     const filtered = countries.filter((country) =>
//       country.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setIsLoading(true);
//     setTimeout(() => {
//       setFilteredCountries(filtered);
//       setIsLoading(false);
//     }, 500);
//   }, [searchTerm]);

//   return (
//     <div>
//       <input
//         id="search"
//         type="text"
//         placeholder="Search countries..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{
//           marginBottom: "20px",
//           padding: "10px",
//           width: "600px",
//           textAlign: "center",
//         }}
//       />
//       {isLoading ? (
//         <LoadingSpinner />
//       ) : (
//         <div className="grid grid-cols-5 gap-4">
//           {filteredCountries.length > 0 ? (
//             filteredCountries.map((country) => {
//               const countryTime = times.find((t) => t.name === country.name);
//               return (
//                 <motion.div  variants={{
//                   hidden: { opacity: 0 },
//                   show: {
//                     opacity: 1,
//                     transition: {
//                       staggerChildren: 0.25,
//                     },
//                   },
//                 }}
//                 initial="hidden"
//                 animate="show"
//              className="card-container" key={country.name}>
//                   <motion.div  variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className="card bg-base-100 w-full shadow-xl ">
//                     <figure>
//                       {imageLoading[country.name] ? (
//                         <span className="loading loading-dots loading-xs"></span>
//                       ) : (
//                         <img
//                           src={countryImages[country.name]}
//                           alt={`${country.name} flag`}
//                           className="flag"
//                         />
//                       )}
//                     </figure>
//                     <div className="card-body">
//                       <h1 className="card-title">{country.name}</h1>
//                       <h4>{countryTime ? countryTime.date : "Loading..."}</h4>
//                       <h3>{countryTime ? countryTime.time : "Loading..."}</h3>
//                       <div className="card-actions justify-end">
//                         <div className="badge badge-outline">
//                           {country.continent}
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               );
//             })
//           ) : (
//             <div className="nofound text-white">
//               <h1>No countries found.</h1>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CompleteModel;

//!navbar
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = ({ searchTerm, setSearchTerm }) => {
//   return (
//     <div>
//       <nav className="navbar">
//         <div className="flex-1">

//             <Link className="link-class btn btn-ghost text-xl text-white " to="/">
//               <h1>World Time Zones</h1>
//             </Link>

//         </div>
//         <ul>

//           <li className="txt ">
//             <Link className="li-class link-class btn" to="/Complete">
//               Home
//             </Link>
//           </li>
//           <li className="txt">
//             <Link className="li-class link-class btn" to="/Contact">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Navbar = ({ searchTerm, setSearchTerm }) => {
//   return (
//     <div>
//       <nav className="navbar">
//         <div className="flex-1">
//           <Link className="link-class btn btn-ghost text-xl text-white " to="/">
//             <h1>World Time Zones</h1>
//           </Link>
//         </div>
//         <ul>
//           <li className="txt">
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Link className="li-class link-class btn" to="/Complete">
//                 Home
//               </Link>
//             </motion.div>
//           </li>
//           <li className="txt">
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
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
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Navbar = ({ searchTerm, setSearchTerm }) => {
//   // Animation variants for links
//   const linkHover = {
//     hover: {
//       scale: 1.1, // Grows slightly on hover
//       rotate: 5,  // Slight tilt
//       color: "#FF5733", // Changes to a vibrant color
//       transition: {
//         type: "spring",
//         stiffness: 300, // Adds a spring-like effect
//         damping: 15,
//       },
//     },
//     tap: {
//       scale: 0.9, // Shrinks a bit on tap
//     },
//   };

//   return (
//     <div>
//       <nav className="navbar">
//         <div className="flex-1">
//           <Link className="link-class btn btn-ghost text-xl text-white " to="/">
//             <h1>World Time Zones</h1>
//           </Link>
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
//!input
{/* <input
        id="search"
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "10px",
          width: "600px",
          textAlign: "center",
        }}
      /> */}


      //!CONTACT

      // import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     emailjs
//       .send(
//         'service_zehhwuy', 
//         'template_rhranf9',
//         formData,
//         'WEJFesRXefUHiJUhj'       
//       )
//       .then((result) => {
//         console.log(result.text);
//         setIsSubmitted(true);
//         setFormData({ name: '', email: '', message: '' }); 
//       })
//       .catch((error) => {
//         console.error('Error sending email:', error.text);
//       });
//   };

//   return (
//     <div className="contact-page">
//       <h2>Contact Us</h2>
//       {isSubmitted ? (
//         <div className="success-message">
//           <p>Thank you for reaching out! We'll get back to you soon.</p>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Send Message</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ContactPage;