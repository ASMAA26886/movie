import './App.css';
import { useState } from 'react';

import {Routes, Route, Link } from "react-router-dom";
import About from './About';
import Home from './Home';


function App() {
  
  return (
   
      <Routes>
         <Route path="/about" element={<About />} />
         <Route path="/" element={<Home />} />

         </Routes>


);
}

export default App;
