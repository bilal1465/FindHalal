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
    <div>
      
    </div>
  )
}

export default RestaurantInfo