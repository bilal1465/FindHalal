import React from 'react'

function FeaturedCards(props) {
  return (
    <div className='w-1/6 h-1/2'>
        <div className='bg-green-400 h-64 w-full bg-cover bg-center overflow-hidden' style={{backgroundImage: `url(${props.image})`}}>
        </div>
        <h1 className='text-white font-bold' >{props.title}</h1>
        <button className='bg-green-600 rounded-full p-2 w-1/2 mt-4 text-white font-extrabold' >See Menu</button>
    </div>
  )
}

export default FeaturedCards