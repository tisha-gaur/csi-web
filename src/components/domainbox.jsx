import React from 'react';

const Domainbox = ({ name, image }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="rounded-sm border border-gray-100 p-4 w-full h-24 flex gap-6 items-center shadow-lg">
        <img src={image} className="w-10 h-fit" alt="" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Domainbox;
