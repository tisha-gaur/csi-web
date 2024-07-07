import React from 'react'
import logo from '../assets/Logo Celebal 1.svg'

const Nav = () => {
  return (
    <div>
      <nav className=' bg-white w-full py-4 px-8 flex justify-between'>
        <img src={logo} />
        <button className='custom-button text-lg tracking-wide'>Register Now</button>
      </nav>
    </div>
  )
}
export default Nav;
