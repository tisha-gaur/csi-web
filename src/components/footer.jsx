import React from 'react'
import loc from '../assets/loc.png'
import logo from '../assets/Logo Celebal 1.svg'

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-slate-500 via-violet-400 to-slate-500 mt-32 w-full h-80'>
            <div className="flex flex-wrap justify-between items-start w-4/5 mx-auto p-16">
                <img src={logo} className='w-44' alt="" />


                <div className="flex flex-wrap justify-end gap-8 w-1/2 text-white ">
                    <div className="flex flex-col gap-3 w-1/4">
                        <p className='text-sm'>Company</p>
                        <p>About Us</p>
                        <p>Events & News</p>
                        <p>Celebal Website</p>
                    </div>

                    <div className="flex flex-col gap-3 w-1/2">
                        <p className='text-sm'>Address</p>
                        <div className="flex gap-4">
                            <img src={loc} className='h-5 w-5' alt="" />
                            <p>3rd Floor, A Wing, F-202-204,Mansarovar, RIICO Industrial Area,Jaipur, Rajasthan, 302020</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-t border-gray-300"/>

        </div>
    )
}

export default Footer
