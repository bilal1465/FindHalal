import {React, useState, useEffect} from 'react'
import RestaurantCards from './RestaurantCards'

function Restaurants(props) {

    const [restaurants, setRestaurants] = useState([]);

    let countries = ["Any"]

    const [selectedCountry, setCountry] = useState("Any")

    useEffect(() => {
        const getData = async () => {
        const response = await fetch(`http://localhost:5001/${props.apiUrl}`);
        const data = await response.json();
        setRestaurants(data);
        }
        getData()
    }, [])

    restaurants.map((restaurant) => {
        if (!countries.includes(restaurant.country)) {
        countries.push(restaurant.country)
        }
    })    

  return (
    <div className='p-4' >
    <label for="filter-country" className="text-white ml-3" >Country: </label>
    <select onChange={(event) => setCountry(event.target.value)} id="filter-country" className="w-1/6 rounded border border-black bg-white pl-1">
        {countries && countries.map((country,index) => (
            <option value={country} key={index}>{country}</option>
        ))}
    </select>
    <div className='flex flex-row p-4 space-x-6 rounded'>
      {restaurants && restaurants.map((restaurant,index) => {
        if (restaurant.country == selectedCountry) {              
          return <RestaurantCards
          className='w-2/3 h-2/3'
          key={index}
          title={restaurant.title}
          image={restaurant.image}
          category={restaurant.category}
          />
        } else if (selectedCountry == "Any") {
          return <RestaurantCards
          className='w-2/3 h-2/3'
          key={index}
          title={restaurant.title}
          image={restaurant.image}
          category={restaurant.category}
          />
        }
})}
    </div>
  </div>
  )
}

export default Restaurants