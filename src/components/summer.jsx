import React from 'react'
import Nav from './nav'
import '../custom.css';
import summer from '../assets/summer1.png'
const Summer = () => {
    return (
        <div>
            <div className="bg-[url('/src/assets/summerBg.png')] bg-cover bg-center h-screen relative">
                
                <div className="ml-28 pt-20 w-3/5 ">
                    <div className="w-full h-full bg-zinc-700 flex items-center justify-center"><img src={summer} className="object-cover w-full h-full" alt=""  /></div>
                </div>
                <div className="h-3/4 w-6/12 bg-white absolute top-28 right-28 p-20 ">
                    <p className='font-bold text-3xl pb-3 gradiant-head'>Unlock Your Potential</p>
                    <div className="flex flex-col justify-between gap-4">
                        <p className='text-5xl font-medium tracking-wider'>Be Brilliant,</p>
                        <p className='text-5xl font-medium tracking-wider'>Be Ambitious,</p>
                        <p className='text-5xl font-medium tracking-wider'>Be First</p>
                    </div>
                    <p className='text-3xl font-semibold pt-4 pb-20 tracking-wider '>with Celebal Technologies.</p>
                    <button className='custom-button text-lg tracking-wide'>Register Now</button>
                </div>
            </div>
        </div>
        
    )
}

export default Summer
