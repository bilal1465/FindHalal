import React from 'react'

function RestaurantCards(props) {

  const sendRestaurantName = async (category,name) => {
    try{
      const response = await fetch('http://localhost:5001/restaurantInfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ category, name })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch restaurant information');
      }
      const restaurantData = await response.json();
      console.log(restaurantData); // Log or process the restaurant data here      
    } catch (error){
      console.log(error)
    }

  }

  return (
    <div className='flex flex-col w-1/6 h-1/2'>
        <div className='bg-green-400 h-64 w-full bg-cover bg-center overflow-hidden' style={{backgroundImage: `url(${props.image})`}}>
        </div>
        <h1 className='text-white text-sm font-bold pt-2'>{props.title}</h1>
        <button onClick={() => sendRestaurantName(props.category, props.title)} className='bg-gradient-to-r from-[#1d8f7f] to-[#1b9985] rounded-full p-2 w-1/2 mt-4 text-white font-extrabold m-auto ' >See Info</button>
    </div>
  )
}

export default RestaurantCards