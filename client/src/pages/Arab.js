import React, { useEffect, useState } from 'react'
import HeroNav from '../components/HeroNav'
import RestaurantCards from '../components/RestaurantCards'

function Arab() {

    const [arabRestaurants, setArabRestaurants] = useState(null);

    useEffect(() => {
      const getData = async () => {
        const response = await fetch("http://localhost:5001/getArab");
        const data = await response.json();
        setArabRestaurants(data);
      }
      getData()
    }, [])

  return (
    <div className='h-svh' >
    <div className="flex items-center justify-center bg-cover h-4/6" style={{backgroundImage: "url('media/arab.jpg')"}}>
      <HeroNav />
    </div>
    <div className='p-4' >
      <div className='flex flex-row p-4 space-x-6 rounded'>
        {arabRestaurants && arabRestaurants.map(card => (
              <RestaurantCards
                  className='w-2/3 h-2/3'
                  key={card.id}
                  title={card.title}
                  image={card.image}
              />
          ))}
      </div>
    </div>
  </div>
  )
}

export default Arab