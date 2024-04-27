import React from 'react'
import HeroNav from './HeroNav'

function Hero() {
  return (
    <div className='h-svh' >
      <div className='flex items-center justify-center bg-cover bg-bottom h-4/6' style={{backgroundImage: "url(media/restaurant_hero.jpg)"}} >
        <HeroNav />
      </div> 
        <div className='pt-12'>
          <h1 className='m-auto border-[1px] border-[#1b9985] rounded p-4 text-center w-1/2 text-4xl text-white'>Every halal restaurant in one place.</h1>
        </div>
        <h1 className='text-white mt-12 pl-8 text-4xl' >Featured: Calgary's Choice</h1>
    </div>    
  )
}

export default Hero