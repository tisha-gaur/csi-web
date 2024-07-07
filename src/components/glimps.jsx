import React from 'react'
import yt from '../assets/yt.png'
import glimp1 from '../assets/glimp1.png'
import glimp2 from '../assets/glimp2.png'

const Glimps = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <p className='gradiant-head text-xl font-bold tracking-wide'>Glimpse 2023</p>

            <div className="grid grid-cols-3 grid-rows-2 gap-1  h-30rem mt-6">
                <div className="col-span-1 row-span-2 bg-stone-100 "></div>

                <div className="col-span-2 bg-red-300">
                    <img  className="w-full h-full object-cover hover:cursor-pointer" onClick={() => window.open('https://www.youtube.com/results?search_query=celebal+technologies')} src={yt} alt="" />
                </div>

                <div className="bg-gray-400">
                <img  className="w-full h-full object-cover" src={glimp1} alt="" />
                </div>

                <div className="bg-gray-500">
                <img  className="w-full h-full object-cover" src={glimp2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Glimps
