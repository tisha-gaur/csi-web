import React from 'react';
import arrow from '../assets/arrow.png';
import arrow1 from '../assets/arrow1.png';
import arrow2 from '../assets/arrow2.png';

const Responsibilities = () => {
  return (
    <div className="mt-36 pb-16">
      <div className="bg-gray-100 rounded-lg mx-auto w-4/5 flex flex-wrap gap-12 justify-between items-center p-14 pt-8 pb-8 font-semibold relative ">
        <p className="text-3xl w-full">Responsibility</p>

        {/* Circle items for larger screens */}
        <div className="hidden md:flex md:items-center md:justify-center md:h-60 md:w-60 md:rounded-full md:border-2 md:border-blue-500 md:absolute md:right-[39rem]">
          <img src={arrow} className="absolute left-1 -top-3 h-16 w-16" alt="arrow" />
          <p>Complete and<br />submit task on<br />weekly basis</p>
        </div>

        <div className="hidden md:flex md:items-center md:justify-center md:h-60 md:w-60 md:rounded-full md:border-2 md:border-blue-500 md:absolute md:right-[25rem]">
          <img src={arrow1} className="absolute left-1 -top-3 h-16 w-16" alt="arrow" />
          <p>Brushing up<br />the tech and<br />soft skill</p>
        </div>

        <div className="hidden md:flex md:items-center md:justify-center md:h-60 md:w-60 md:rounded-full md:border-2 md:border-blue-500 md:absolute md:right-[11rem]">
          <img src={arrow2} className="absolute left-1 -top-3 h-16 w-16" alt="arrow" />
          <p>Enhance<br />your leadership</p>
        </div>

        {/* Vertical layout for smaller screens */}
        <div className="md:hidden w-full flex flex-col items-center gap-8">
          <div className="flex flex-col items-center">
            <img src={arrow} className="h-16 w-16 mb-2" alt="arrow" />
            <p>Complete and<br />submit task on<br />weekly basis</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={arrow1} className="h-16 w-16 mb-2" alt="arrow" />
            <p>Brushing up<br />the tech and<br />soft skill</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={arrow2} className="h-16 w-16 mb-2" alt="arrow" />
            <p>Enhance<br />your leadership</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsibilities;