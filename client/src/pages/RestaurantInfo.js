import {React, useState, useEffect} from 'react';

function RestaurantInfo() {

    const [data, setData] = useState({});

    useEffect(() => {
        const getData = async () => {
        const response = await fetch("http://localhost:5001/restaurantInfo");
        }
        getData()
    }, []) 

  return (
    <div>

    </div>
  )
}

export default RestaurantInfo