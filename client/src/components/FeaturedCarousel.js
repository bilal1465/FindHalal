import {React, useEffect, useState} from 'react'
import RestaurantCards from './RestaurantCards'

function FeaturedCarousel() {

    const [restaurantData, setRestaurantData] = useState(null);

    useEffect(() => {
        const getImageData = async () => {
            const response = await fetch("http://localhost:5001/featured");
            const data = await response.json();
            setRestaurantData(data);
            console.log(restaurantData)
        }

        getImageData()

    }, [])

  return (
    <div className='flex flex-row space-x-4 items-center justify-center' >
        {restaurantData && restaurantData.map(restaurant => (
            <RestaurantCards
                className='w-2/3 h-2/3'
                key={restaurant.id}
                title={restaurant.title}
                image={restaurant.image}
                category={restaurant.category}
            />
        ))}
    </div>
  )
}

export default FeaturedCarousel