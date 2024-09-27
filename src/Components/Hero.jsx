
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
          <h1 className="h11 text-5xl font-bold bg-black">World Time Zones!!</h1>
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
