import React, { useState, useEffect } from 'react';
import { IoArrowForwardCircle, IoArrowBackCircle } from 'react-icons/io5';
import Testicard from './testicard';
import { testidata } from '../data/testidata';

const Testi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function getVisibleCards() {
    if (window.innerWidth >= 1468) {
      return 3;
    } else if (window.innerWidth>=997) {
      return 2;
    } else {
      return 1;
    }
  }

  const handleNext = () => {
    if (currentIndex < testidata.length - visibleCards) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className='w-4/5 mx-auto mt-28 mb-28'>
      <p className='gradiant-head text-xl font-bold tracking-wide'>What Our Happy Students Say!</p>
      <div className="flex justify-between items-center p-1">
        <div className="font-medium tracking-wide text-3xl pt-2">Testimonials</div>
        <div className="flex gap-2">
          <IoArrowBackCircle
            className={`h-9 w-auto cursor-pointer ${currentIndex === 0 ? 'fill-gray-300 cursor-not-allowed' : 'fill-violet-700'}`}
            onClick={currentIndex > 0 ? handlePrev : null}
          />
          <IoArrowForwardCircle
            className={`h-9 w-auto cursor-pointer ${currentIndex >= testidata.length - visibleCards ? 'fill-gray-300 cursor-not-allowed' : 'fill-violet-700'}`}
            onClick={currentIndex < testidata.length - visibleCards ? handleNext : null}
          />
        </div>
      </div>
      <div className="overflow-hidden relative mt-12">
        <div
          className="flex transition-transform duration-500 ease-in-out gap-1"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
          {testidata.map((data, index) => (
            <div key={index} className="min-w-fit" style={{ flex: `0 0 ${100 / visibleCards}%` }}>
              <Testicard image={data.image} name={data.name} description={data.desc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testi;
