
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
     
    >
   
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="hero-content relative z-10 flex flex-col items-center text-center lg:text-left lg:flex-row">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-lg lg:mr-10"
        >
          <h1 className="text-6xl font-bold text-white mb-4">
            World Time Zones
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Discover and explore the world's time zones in real-time. Search for countries and get instant updates on local times, all dynamically displayed in a sleek interface.
          </p>
          <Link to={"/Complete"}>
            <motion.button
              className="btn bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="hidden lg:block"
        >
          {/* <img
            src="https://example.com/4k-world-map.jpg"
            alt="World Map"
            className="max-w-sm rounded-lg shadow-2xl"
          /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
