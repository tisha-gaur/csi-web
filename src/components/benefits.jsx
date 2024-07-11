import React from "react";
import arrow from "../assets/arrow.png";
import arrow1 from "../assets/arrow1.png";
import arrow2 from "../assets/arrow2.png";


const Benefits = () => {
    return (
        <div className="xl:mt-36 mt-5 sm:pb-16">
            <div className=" bg-gray-100 rounded-lg mx-auto w-4/5 flex flex-wrap gap-12 text-center items-center md:p-14 p-6 pt-8 pb-8 font-semibold relative ">
                <p className="text-3xl w-full xl:text-end ">Benefits</p>
                
                {/* Circle items for larger screens */}
                <div className="hidden xl:flex xl:items-center xl:justify-center xl:h-60 xl:w-60 xl:rounded-full  xl:border-2 xl:border-blue-500 xl:absolute xl:right-[42rem]">
                    <img
                        src={arrow}
                        className="absolute left-1 -top-3 h-16 w-16"
                        alt="arrow"
                    />
                    <p>
                        Complete and
                        <br />
                        submit task on
                        <br />
                        weekly basis
                    </p>
                </div>

                <div className="hidden xl:flex xl:items-center xl:justify-center xl:h-60 xl:w-60 xl:rounded-full xl:border-2 xl:border-blue-500 xl:absolute xl:right-[28rem]">
                    <img
                        src={arrow1}
                        className="absolute left-1 -top-3 h-16 w-16"
                        alt="arrow"
                    />
                    <p>
                        Brushing up
                        <br />
                        the tech and
                        <br />
                        soft skill
                    </p>
                </div>

                <div className="hidden xl:flex xl:items-center xl:justify-center xl:h-60 xl:w-60 xl:rounded-full xl:border-2 xl:border-blue-500 xl:absolute right-56  ">
                    <img
                        src={arrow2}
                        className="absolute left-1 -top-3 h-16 w-16"
                        alt="arrow"
                    />
                    <p>
                        Enhance
                        <br />
                        your leadership
                    </p>
                </div>

                {/* Vertical layout for smaller screens */}
                <div className="xl:hidden w-full mx-auto flex flex-col items-start justify-center gap-4">
                    <div className="flex items-center justify-center gap-4">
                        <img src={arrow} className="h-12 w-12 mb-2" alt="arrow" />
                        <p className="w-full">
                            Complete and submit task on weekly basis
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <img src={arrow1} className="h-12 w-12 mb-2" alt="arrow" />
                        <p>
                            Brushing up the tech and soft skill
                        </p>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <img src={arrow2} className="h-12 w-12 mb-2" alt="arrow" />
                        <p>
                            Enhance your leadership
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
