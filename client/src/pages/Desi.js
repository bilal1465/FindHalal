import React, { useEffect, useState } from 'react'
import HeroNav from '../components/HeroNav'
import RestaurantCards from '../components/RestaurantCards'

function Desi() {

  const [desiRestaurants, setDesiRestaurants] = useState([]);

  let countries = ["Any"]

  const [selectedCountry, setCountry] = useState("")

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:5001/getDesi");
      const data = await response.json();
      setDesiRestaurants(data);
    }
    getData()
  }, [])

  desiRestaurants.map((restaurant) => {
    if (!countries.includes(restaurant.country)) {
      countries.push(restaurant.country)
    }
  })    

  return (
    <div className='h-svh' >
      <div className="flex items-center justify-center bg-cover h-4/6" style={{backgroundImage: "url('media/desi.jpg')"}}>
        <HeroNav />
      </div>
      <div className='p-4' >
        <label for="filter-country" className="text-white ml-3" >Country: </label>
        <select onChange={(event) => setCountry(event.target.value)} id="filter-country" className="w-1/6 rounded border border-black bg-white pl-1">
            {countries && countries.map((country,index) => (
                <option value={country} key={index}>{country}</option>
            ))}
        </select>
        <div className='flex flex-row p-4 space-x-6 rounded'>
          {desiRestaurants && desiRestaurants.map((restaurant,index) => {
            if (restaurant.country == selectedCountry) {              
              return <RestaurantCards
              className='w-2/3 h-2/3'
              key={index}
              title={restaurant.title}
              image={restaurant.image}
              />
            } else if (selectedCountry == "Any") {
              return <RestaurantCards
              className='w-2/3 h-2/3'
              key={index}
              title={restaurant.title}
              image={restaurant.image}
              />
            }
})}
        </div>
      </div>
    </div>
  )
}

export default Desi