import React, {useEffect, useState} from 'react';
import Hero from '../components/Hero';
import FeaturedCarousel from '../components/FeaturedCarousel';

function Home() {

    return (
    <main className='overflow-hidden bg-[#191919]'>
      <Hero/>
      <FeaturedCarousel />
    </main>
  )
}

export default Home