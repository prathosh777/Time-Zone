import React from 'react';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CompleteModel from './Components/CompleteModel copy'; // You may want to remove "copy" if that's a mistake
import ContactPage from './Components/Contact';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Navbar /> {/* Optional if you want a Navbar at the top */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/complete" element={<CompleteModel />} />
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      <Footer /> {/* Optional if you want a Footer at the bottom */}
    </div>
  );
};

export default App;
