import React, { useEffect, useState } from 'react'
import HeroNav from '../components/HeroNav'
import Restaurants from '../components/Restaurants'

function Arab() {

  return (
  <div className='h-svh' >
    <div className="flex items-center justify-center bg-cover h-4/6" style={{backgroundImage: "url('media/arab.jpg')"}}>
      <HeroNav />
    </div>
    <Restaurants apiUrl="getArab"/>
  </div>
  )
}

export default Arab