import React from 'react'
import technical from '../assets/technical.png'
import hr from '../assets/hr.png'
import bubble1 from '../assets/bubble1.png'
import bubble2 from '../assets/bubble2.png'
import bubble3 from '../assets/bubble3.png'
const Activities = () => {
    return (
        <div className='flex flex-wrap w-full mt-32'>
            <div className="bg-violet-600 w-1/2 text-white flex flex-col items-end p-14 gap-6 tracking-wider relative">
            <img src={bubble2} className='absolute left-0 bottom-6' alt="" />
            <img src={bubble1} className='absolute left-12 top-16' alt="" />
                <img src={technical} className='h-10 w-12' alt="" />
                <p className='text-2xl'><span className='font-semibold'>Technical</span><br />Activities</p>
                <div className="">
                    <p>Task Assignment -</p>
                    <p>Project Allotment -</p>
                </div>
            </div>

            <div className="bg-violet-700 w-1/2 text-white flex flex-col items-start p-14 gap-6 tracking-wider relative">
            <img src={bubble3} className='absolute right-0 top-20' alt="" />
            <img src={bubble1} className='absolute right-12 bottom-10' alt="" />
                <img src={hr} className='h-10 w-12' alt="" />
                <p className='text-2xl'><span className='font-semibold'>Technical</span><br />Activities</p>
                <div className="">
                    <p>- Fun Engagments</p>
                    <p>- Team Building Activities</p>
                </div>
            </div>

        </div>
    )
}

export default Activities
