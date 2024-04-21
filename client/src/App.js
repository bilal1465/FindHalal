import React, {useEffect, useState} from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';

function App() {

  return (
    <main className='overflow-hidden bg-[#191919]'>
      <NavBar/>
      <Hero/>
    </main>
  )
}

export default App