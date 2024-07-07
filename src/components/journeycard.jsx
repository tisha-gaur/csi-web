import React from 'react'
import learning from '../assets/learning.png'

const Journeycard = ({ isHovered, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="relative w-96"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col">
        <img src={learning} className='w-96 h-auto' alt="" />
        <div className={`info-box w-full h-full bg-white text-black tracking-wider border-blue-400 border-2 px-10 py-7 flex flex-col justify-center gap-3 text-lg transition-opacity duration-100 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <ul className='list-disc w-fit p-2'>
            <li>Onboarding</li>
            <li>Commencing training with CSI portal</li>
            <li>Overview of Learning Path</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Journeycard
