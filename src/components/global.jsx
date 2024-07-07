import React from 'react'
import globe from '../assets/globe.png'
const Global = () => {
  return (
    <div className=' pt-28 bg-gray-50 pb-9 flex flex-col items-center'>
      <div className=" font-bold text-3xl text-center gradiant-head">Our Global Presence</div>
      <img src={globe} className=' w-51rem h-96 pt-9 pb-9' alt="" />
      
    </div>
  )
}

export default Global
