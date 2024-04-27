import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import NavBar from './components/NavBar';
import Desi from './pages/Desi';
import Arab from './pages/Arab';
import Western from './pages/Western';

function App() {



  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='desi' element={<Desi/>}/>
        <Route path='arab' element={<Arab />} />
        <Route path='western' element={<Western />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App