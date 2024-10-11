import React, { useState } from 'react';

const FeatureCard = ({ bgColor,imageSrc,title,subtitle,index}) => {
    return (
    <div className={`relative p-2 shadow-lg  overflow-hidden`} style={{background:bgColor}}>
    <div className='w-full flex flex-col items-center'>
      <h2 className="text-[1.5rem] font-bold text-center font-montserrat text-white w-[7rem]">{title}</h2>
      <p className="text-center ml-6 font-montserrat font-bold text-white">{subtitle}</p>
    </div>
      <img src={imageSrc} alt={title} />
      
    </div>);
};

export default FeatureCard;