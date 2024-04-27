import React from 'react'
import { GiChiliPepper, GiOlive, GiHamburger } from "react-icons/gi";
import { Link } from 'react-router-dom';

function HeroNav() {
  return (
    <div className='flex items-center justify-center flex-row h-4/6 space-x-28' >
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
  )
}

export default HeroNav