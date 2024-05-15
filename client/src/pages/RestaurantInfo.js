import {React, useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

function RestaurantInfo() {

  const [data, setData] = useState({});

  const restInfo = {
    restCategory: useSelector(state => state.sendInfo.restCategory),
    restName: useSelector(state => state.sendInfo.restName)
  }

  useEffect(() => {
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
        setData(restaurantData);   
      } catch (error){
        console.log(error)
      }
      }            
    sendRestaurantName(restInfo.restCategory, restInfo.restName)
  }, [])


  return (
    <div className='p-2 space-y-6'>
    <h1 className='text-[#1b9985] text-6xl text-center'>{data.title}</h1>
      <div className='flex flex-row text-white mt-2 space-x-6'>
        <img className='w-1/2' src={data.image} />
        <div className='ml-2 space-y-2'>
          <h1 className='text-3xl text-[#1b9985]'>Description</h1>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default RestaurantInfo