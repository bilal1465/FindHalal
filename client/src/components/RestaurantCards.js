import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { sendRestInfo } from '../actions';
import { useDispatch } from 'react-redux';

function RestaurantCards(props) {

  const dispatch = useDispatch();

  return (
    <div className='flex flex-col w-1/6 h-1/2'>
        <div className='bg-green-400 h-64 w-full bg-cover bg-center overflow-hidden' style={{backgroundImage: `url(${props.image})`}}>
        </div>
        <h1 className='text-white text-sm font-bold pt-2'>{props.title}</h1>
        <Link to="/restaurantInformation">
        <button
        onClick={() => dispatch(sendRestInfo(props.category, props.title))} 
        className='bg-gradient-to-r from-[#1d8f7f] to-[#1b9985] rounded-full p-2 w-1/2 mt-4 text-white font-extrabold m-auto ' >See Info</button>
        </Link>
    </div>
  )
}

export default RestaurantCards