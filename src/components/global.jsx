import React from "react";
import globe from "../assets/globe.png";
const Global = () => {
  return (
    <div className=" py-20 bg-gray-50 flex flex-col items-center">
      <div className=" font-bold text-3xl text-center gradiant-head pb-10">
        Our Global Presence
      </div>
      <img src={globe} className="w-screen md:w-3/5 pt-9 pb-9" alt="" />
    </div>
  );
};

export default Global;
