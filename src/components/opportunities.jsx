import React from 'react';
import arrow3 from '../assets/Arrow 3.png';
import oppL from '../assets/oppL.png';

const Opportunities = () => {
  return (
    <div className="min-h-full xl:h-fit xl:pt-12 xl:pb-20 py-6 px-4 flex flex-col  xl:gap-8 w-full bg-gradient-to-r from-violet-400 via-indigo-400 to-blue-400 mb-12 xl:relative">
      <p className='xl:text-3xl text-2xl font-semibold text-white xl:px-24 px-auto text-center xl:text-left'>
        An Opportunity for Pre-Final Year Students - Register Now!
      </p>
      <div className="flex flex-row flex-wrap  xl:flex-row justify-center xl:flex-nowrap xl:justify-end items-center xl:p-20 xl:h-44 h-fit p-6 mt-6 gap-6">
        <img src={oppL} className='hidden xl:block xl:absolute h-56 left-24' alt="" />
        <div className="rounded-md bg-violet-100 p-4 flex flex-col justify-center text-xl text-center h-40  text-black xl:p-8 xl:text-left xl:absolute xl:left-36  xl:text-zinc-600">
          <p className='tracking-wider text-2xl'>Registration Starts from</p>
          <p className='font-bold'>8th April - 6th May</p>
          <img src={arrow3} className='hidden xl:block xl:w-16 xl:h-auto pt-6 mx-auto xl:mx-0' alt="" />
        </div>
        <div className="hidden xl:flex xl:flex-row xl:justify-between xl:pl-72 xl:pr-16 xl:py-10 gap-6 xl:gap-10 text-xl xl:border xl:rounded-r-md xl:border-white xl:border-l-0 width-fit text-white">
          <div className="rounded-md bg-violet-100 p-8 h-40 flex flex-col gap-2 xl:bg-transparent sm:rounded-md sm:bg-violet-100 sm:p-8 sm:h-40 sm:text-xl sm:text-center sm:text-black xl:text-white">
            <p className='tracking-wider font-semibold'>Shortlisting Process</p>
            <p className='font-bold'>7th May - 15th May</p>
          </div>
          <div className="rounded-md bg-violet-100 p-8 h-40 flex flex-col gap-2 xl:bg-transparent sm:rounded-md sm:bg-violet-100 sm:p-8 sm:h-40 sm:text-xl sm:text-center sm:text-black xl:text-white">
            <p className='tracking-wider font-semibold'>1st Batch Date</p>
            <p className='font-bold'>20th May</p>
          </div>
          <div className="rounded-md bg-violet-100 p-8 h-40 flex flex-col gap-2 xl:bg-transparent sm:rounded-md sm:bg-violet-100 sm:p-8 sm:h-40 sm:text-xl sm:text-center sm:text-black xl:text-white">
            <p className='tracking-wider font-semibold'>2nd Batch Date</p>
            <p className='font-bold'>3rd June</p>
          </div>
        </div>

          {/* when less than xl */}
          <div className="xl:hidden rounded-md bg-violet-100  p-14 h-40  flex flex-col justify-center text-xl text-center  text-black ">
            <p className='tracking-wider font-semibold'>Shortlisting Process</p>
            <p className='font-bold'>7th May - 15th May</p>
          </div>
          <div className="xl:hidden rounded-md bg-violet-100  p-5.4rem h-40  flex flex-col justify-center text-xl text-center  text-black">
            <p className='tracking-wider font-semibold'>1st Batch Date</p>
            <p className='font-bold'>20th May</p>
          </div>
          <div className="xl:hidden rounded-md bg-violet-100  p-20 h-40  flex flex-col justify-center text-xl text-center  text-black">
            <p className='tracking-wider font-semibold'>2nd Batch Date</p>
            <p className='font-bold'>3rd June</p>
          </div>
        

      </div>
    </div>
  );
}

export default Opportunities;
