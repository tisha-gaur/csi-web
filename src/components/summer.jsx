import React, { useState, useEffect } from "react";
import Nav from "./nav";
import "../custom.css";
import summer from "../assets/summer1.png";
import Form from './form'
import Slide1 from "./slide1";
import Slide2 from "./slide2";
import Slide3 from "./slide3";

const Summer = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide === 3 ? 1 : prevSlide + 1));
        }, 5000);
       
    }, []);

    return (
        <div>
            <div className="bg-[url('/src/assets/summerBg.png')] bg-cover bg-center md:h-screen h-fit relative ">
                <div className="md:ml-28 md:pt-20 md:w-3/5 sm:mb-0 ">
                    <div className="w-full h-full bg-zinc-700 flex items-center justify-center">
                        <img src={summer} className="object-cover w-full h-full" alt="" />
                    </div>
                </div>
                <div className=" md:w-6/12 bg-white  md:absolute top-28 right-28 p-8 xl:p-20 md:p-12 ">
                    {currentSlide === 1 && <Slide1 />}
                    {currentSlide === 2 && <Slide2 />}
                    {currentSlide === 3 && <Slide3 />}
                    <button onClick={() => setShowModal(true)} className='custom-button text-lg tracking-wide'>
                        Register Now
                    </button>
                </div>
                {showModal && <Form onClose={() => setShowModal(false)} />}
            </div>
        </div>
    );
};

export default Summer;
