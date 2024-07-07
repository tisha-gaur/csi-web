import React, { useState } from 'react';
import zo from '../assets/01.svg';
import tick from '../assets/tick.svg';
import { aboutcontent } from '../data/aboutcontent';

const About = () => {
    const [selectedItem, setSelectedItem] = useState(0); 
    const handleItemClick = (index) => {
        setSelectedItem(index); // Set item index
    };


    return (
        <div className="bg-gray-50  h-fit pb-24">
            <div className='pt-20 w-4/5 mx-auto'>
                <p className='text-2xl font-bold pb-0 gradiant-head'>About CSI</p>
                <div className="flex flex-row  items-center gap-10 mt-0 pt-0">

                    <div className="w-2/5 flex flex-col justify-left">
                        <div className='flex flex-col gap-8'>

                            {aboutcontent.map((item, index) => (
                                <div
                                    key={index}
                                    className={`px-10 py-6 w-11/12 ${selectedItem === index ? 'border border-blue-400 bg-white' : ''}`}
                                    onClick={() => handleItemClick(index)}
                                >
                                    <p className="flex items-center space-x-10 font-semibold">
                                        <span className='z-10'>0{index + 1}.</span>
                                        {selectedItem === index && (
                                            <img src={zo} className='absolute left-36 z-0 max-xl:hidden' alt="" />
                                        )}
                                        <span className='text-xl font-bold cursor-pointer'>{item.title}</span>
                                    </p> 
                                </div>
                            ))}

                        </div>
                    </div>

                    <div className="w-3/5 p-12">
                        <div className='flex flex-col gap-6 tracking-widest'>
                            {aboutcontent[selectedItem].details.map((detail, index) => (
                                <div key={index}>
                                    <p className="flex items-center space-x-4">
                                        <img src={tick} className='w-6 h-6' alt="" />
                                        <span className='text-lg'>{detail}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
