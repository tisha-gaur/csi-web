import React from 'react'
import arrow from '../assets/arrow.png'
import arrow1 from '../assets/arrow1.png';
import arrow2 from '../assets/arrow2.png';

const Benefits = () => {
  return (
    <div className=" mt-48 pb-16">

            <div className=' bg-gray-100 rounded-lg mx-auto w-4/5 flex flex-wrap gap-12 justify-between items-center p-14 font-semibold text-center relative'>

                <div className=" flex items-center justify-center left-60  h-60 w-60 rounded-full border-2 border-blue-500 absolute">
                    <img src={arrow} className='absolute left-1 -top-3 h-16 w-16' alt="" />
                    <p>Complete and<br />submit task on<br />weakly basis</p>
                </div>

                <div className=" flex items-center justify-center right-32rem  h-60 w-60 rounded-full border-2 border-blue-500 absolute">
                    <img src={arrow1} className='absolute left-1 -top-3 h-16 w-16' alt="" />
                    <p>Brushing up<br />the tech and<br />soft skill</p>
                </div>

                <div className=" flex items-center justify-center right-72  h-60 w-60 rounded-full border-2 border-blue-500 absolute">
                    <img src={arrow2} className='absolute left-1 -top-3 h-16 w-16' alt="" />
                    <p>Enhance<br />your leadership</p>
                </div>

                <p className='text-3xl absolute right-20'>Benefits</p>

            </div>
        </div >
  )
}

export default Benefits
