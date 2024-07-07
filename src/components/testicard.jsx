import React from 'react'


const Testicard = ({image,name,description}) => {
  return (
    <div className='rounded-md w-96 h-auto p-4 border'>
      <div className="flex items-center gap-4">
        <img src={image} className='w-12 h-12 ml-4' />
        <p className='font-semibold text-xl'>{name}</p>
      </div>
      <p className='text-sm p-4'>{description}</p>
    </div>
  )
}

export default Testicard
