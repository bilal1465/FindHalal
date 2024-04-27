import React, { useEffect, useState } from 'react'
import HeroNav from '../components/HeroNav'
import RestaurantCards from '../components/RestaurantCards'
import Restaurants from '../components/Restaurants';

function Desi() {

  return (
    <div className='h-svh' >
      <div className="flex items-center justify-center bg-cover h-4/6" style={{backgroundImage: "url('media/desi.jpg')"}}>
        <HeroNav />
      </div>
      <Restaurants apiUrl="getDesi"/>
    </div>
  )
}

export default Desi