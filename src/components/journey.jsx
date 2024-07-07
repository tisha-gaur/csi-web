import React, { useState } from 'react'
import Journeycard from './journeycard'

const Journey = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0); // Default hover on the first card

  return (
    <div className='bg-white pt-14 pb-16'>
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
