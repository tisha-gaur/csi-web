import React , {useState} from 'react'
import logo from '../assets/Logo Celebal 1.svg'
import Form from './form';



const Nav = () => {

  const [showModal, setShowModal] = useState(false);
  

  return (
    <div>
      <nav className=' bg-white w-full py-4 px-8 flex justify-between'>
        <img src={logo} />
        <button onClick={() => setShowModal(true)} className='custom-button text-lg tracking-wide'>Register Now</button>
        {showModal && <Form onClose={() => setShowModal(false)} />}
      </nav>
    </div>
  )
}
export default Nav;
