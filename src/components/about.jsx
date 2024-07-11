import React, { useState } from "react";
import zo from "../assets/01.svg";
import tick from "../assets/tick.svg";
import { aboutcontent } from "../data/aboutcontent";

const About = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="bg-gray-50 w-full p-6  sm:pb-24 ">
      <div className="pt-20 px-2 md:w-4/5 mx-auto">
        <p className="text-2xl font-bold pb-0 gradiant-head">About CSI</p>
        <div className="flex flex-col md:flex-row items-center ">
          <div className="md:w-1/2 flex md:flex-col gap-8 mt-10">
            {aboutcontent.map((item, index) => (
              <div
                key={index}
                className={`md:px-10 md:py-6 md:w-11/12 ${
                  selectedItem === index &&
                  " border-b-2  md:border border-blue-400 md:bg-white"
                }`}
                onClick={() => handleItemClick(index)}
              >
                <p className="flex gap-6 items-center font-semibold relative">
                  {/* <p className="flex items-center space-x-10 font-semibold"> */}
                  <span className="hidden md:block z-10 pl-2">0{index + 1}.</span>
                  {selectedItem === index && (
                    <img
                      src={zo}
                      className="hidden md:block absolute left-0 z-0 max-xl:hidden"
                      alt=""
                    />
                  )}
                  <span className="text-lg font-semibold  md:text-xl md:font-bold cursor-pointer">
                    {item.title}
                  </span>
                </p>
              </div>
            ))}
          </div>

          <div className="md:w-1/2 p-8 ">
            <div className="flex flex-col gap-8 tracking-widest">
              {aboutcontent[selectedItem].details.map((detail, index) => (
                <div key={index}>
                  <p className="flex items-center space-x-4">
                    <img src={tick} className="w-6 " alt="" />
                    <span className="text-lg font-medium">{detail}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
