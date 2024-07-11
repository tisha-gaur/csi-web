import React, { useState } from 'react'
import Journeycard from './journeycard'

const Journey = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0); 

  return (
    <div className='bg-white pt-6 lg:pt-14 lg:pb-16 pb-0 w-full'>
      <p className='text-3xl font-semibold text-center pt-20'>Journey with CSI</p>
      <div className="flex flex-wrap gap-4 justify-center items-center mx-auto p-4 sm:p-8 md:p-12 w-full">
        {[0, 1, 2].map((index) => (
          <Journeycard
            key={index}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  )
}

export default Journey
