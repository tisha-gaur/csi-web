import React from 'react'
import ds from '../assets/ds.png'

const NewCard = ({ image, title, desc }) => {
  return (
    <div className=' h-56 w-72 flex flex-col gap-5 p-8 pb-0 pt-0'>
      <img src={image} className='h-10 w-10' alt="" />
      <p className='font-semibold text-xl'>{title}</p>
      <p className='tracking-wider'>{desc}</p>
    </div>
  )
}

export default NewCard
