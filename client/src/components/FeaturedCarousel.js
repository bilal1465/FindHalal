import {React, useEffect, useState} from 'react'
import FeaturedCards from './FeaturedCards'

function FeaturedCarousel() {

    const [restaurantData, setRestaurantData] = useState(null);

    useEffect(() => {
        const getImageData = async () => {
            const response = await fetch("http://localhost:5001/desi");
            const data = await response.json();
            console.log(data)
            setRestaurantData(data);
        }

        getImageData()

    }, [])

  return (
    <div className='flex flex-row space-x-4 items-center justify-center' >
        {restaurantData && restaurantData.map(card => (
            <FeaturedCards
                className='w-2/3 h-2/3'
                key={card.id}
                title={card.title}
                image={card.image}
            />
        ))}
    </div>
  )
}

export default FeaturedCarousel