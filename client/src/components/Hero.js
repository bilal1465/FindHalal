import React from 'react'
import { GiChiliPepper, GiOlive, GiHamburger } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='h-svh' >
        <div className="flex items-center justify-center flex-row bg-bottom bg-cover h-4/6 space-x-28" style={{backgroundImage: "url('media/restaurant_hero.jpg')"}}>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center bg-[#1b9985] rounded-full p-4 h-min w-min'>
              <Link to="/desi"><GiChiliPepper className='size-10 text-white' /></Link>
            </div>
            <h1 className='text-white text-2xl' ><a>Desi</a></h1>           
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center bg-[#1b9985] rounded-full p-4 h-min w-min'>
              <GiOlive className='size-10 text-white' />
            </div>
            <h1 className='text-white text-2xl' ><a>Arab</a></h1>            
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center bg-[#1b9985] rounded-full p-4 h-min w-min'>
              <GiHamburger className='size-10 text-white' />
            </div>        
            <h1 className='text-white text-2xl' ><a>Western</a></h1>    
          </div>          
        </div>
        <div className='pt-12'>
          <h1 className='m-auto border-[1px] border-[#1b9985] rounded p-4 text-center w-1/2 text-4xl text-white'>Every halal restaurant in one place.</h1>
        </div>
        <h1 className='text-white mt-12 pl-8 text-4xl' >Featured: Calgary's Choice</h1>
    </div>    
  )
}

export default Hero