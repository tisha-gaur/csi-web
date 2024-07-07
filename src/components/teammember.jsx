import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa";



const Teammember = ({name,url,image1, image2}) => {

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    };
    const handleMouseLeave = () => {
        setHover(false);
    };

    const onClickHandle = () => {
        window.open(url, "_blank");
    }

    return (
        <div onClick={onClickHandle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`flex flex-col gap-5 justify-center items-center ${hover ? 'border-2 border-purple-700 rounded-md cursor-pointer' : 'border-2 border-white'}`}>
            <img src={hover ? image2 : image1} className='py-7 px-10 h-56 w-auto' alt="" />
            <div className={`flex justify-around items-center p-4 w-full ${hover ? 'bg-purple-700 text-white' : ''}`}>
            <p className={`w-full ${hover ? ' text-white' : 'text-black text-center'}`}>{name}</p>
            <FaLinkedin className={`h-6 w-6 ${hover ? 'block' : 'hidden'}`} />
            </div>
        </div>
    )
}

export default Teammember
