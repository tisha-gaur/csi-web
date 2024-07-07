import React from 'react';
import Domainbox from './domainbox';
import { domainData } from '../data/domaildata';

const Domain = () => {
  return (
    <div className='w-4/5 mx-auto pt-10 pb-16'>
      <div className="text-center text-3xl mb-4 sm:text-center md:text-start md:text-4xl">Domains Offered</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-full py-10">
        {domainData.map((item, index) => (
          <div 
            key={item.id} 
            className={`${index >= 8 ? 'col-span-1 md:col-span-2' : 'col-span-1'}`}
          >
            <Domainbox image={item.image} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Domain;
