// import React from "react";

// const Hero = () => {
//   return (
//     <div>
//       <div
//         className="hero min-h-screen"
//         style={{
//           backgroundImage:
//             "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
//         }}
//       >
//         <div className="hero-overlay bg-opacity-60"></div>
//         <div className="hero-content text-neutral-content text-center">
//           <div className="max-w-md">
//             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//             <p className="mb-5">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//               excepturi exercitationem quasi. In deleniti eaque aut repudiandae
//               et a id nisi.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
//?=================================================================================================================================
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Hero = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate('/src/Components/CompleteModel copy.jsx');
//   };

//   return (
//     <div>
//       <div
//         className="hero min-h-screen"
//         style={{
//           backgroundImage:
//             'url((link unavailable))',
//         }}
//       >
//         <div className="hero-overlay bg-opacity-60"></div>
//         <div className="hero-content text-neutral-content text-center">
//           <div className="max-w-md">
//             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//             <p className="mb-5">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut
//               assumenda excepturi exercitationem quasi. In deleniti eaque aut
//               repudiandae et a id nisi.
//             </p>
//             <button className="btn btn-primary" onClick={handleGetStarted}>
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
//?=================================================================================================================================

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Hero = () => {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     // Correctly navigate to the route defined in your App component
//     navigate(`./CompleteModel copy.jsx`);
//   };

//   return (
//     <div>
//       <div
//         className="hero min-h-screen"
//         style={{
//           backgroundImage: 'url("your-image-url-here")', // Replace with your actual image URL
//         }}
//       >
//         <div className="hero-overlay bg-opacity-60"></div>
//         <div className="hero-content text-neutral-content text-center">
//           <div className="max-w-md">
//             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//             <p className="mb-5">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut
//               assumenda excepturi exercitationem quasi. In deleniti eaque aut
//               repudiandae et a id nisi.
//             </p>
//             <button className="btn btn-primary" onClick={handleGetStarted}>
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
//?=================================================================================================================================
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Hero = () => {
//   return (
//     <div>
//       <div
//         className="hero min-h-screen"
//         style={{
//           backgroundImage: 'url("your-image-url-here")', // Replace with your actual image URL
//         }}
//       >
//         <div className="hero-overlay bg-opacity-60"></div>
//         <div className="hero-content text-neutral-content text-center">
//           <div className="max-w-md">
//             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//             <p className="mb-5">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut
//               assumenda excepturi exercitationem quasi. In deleniti eaque aut
//               repudiandae et a id nisi.
//             </p>
//             <Link to="./CompleteModel copy.jsx">
//               <button className="btn btn-primary">
//                 Get Started
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        {/* <img
          src="../assets/4k-worl-map.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        /> */}
        <div className="test">
          <h1 className="h11 text-5xl font-bold">World Time Zones!!</h1>
          <p className="py-6 text-black pp">
                   The Time Zones Project is a React-based web application that allows
            users to view and search for countries along with their current
            local times, displayed dynamically in real-time.
          </p>
         <Link to={"/Complete"}> <button className="btn buttonn">Get Started</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
