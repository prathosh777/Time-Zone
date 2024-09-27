import React from 'react';
import Hero from './Components/Hero';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import CompleteModel from './Components/CompleteModel copy'; 
import ContactPage from './Components/Contact';

const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/complete" element={<CompleteModel />} />
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      <Footer /> 
    </div>
  );
};

export default App;
