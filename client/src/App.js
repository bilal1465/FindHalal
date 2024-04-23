import React, {useEffect, useState} from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FeaturedCarousel from './components/FeaturedCarousel';

function App() {


  

  return (
    <main className='overflow-hidden bg-[#191919]'>
      <NavBar/>
      <Hero/>
      <FeaturedCarousel />
    </main>
  )
}

export default App