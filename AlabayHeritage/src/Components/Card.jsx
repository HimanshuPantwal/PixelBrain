// src/components/Card.jsx
import React from 'react';

const Card = ({ title, description, imgSrc }) => {
  {
    return title && description ?
      <div className="min-w-[250px] h-[140px] bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center">
        <img src={imgSrc} alt="Icon" className="mb-4 w-12 h-12" />
        <h4 className="text-lg">{title}</h4>
        <p className="text-sm">{description}</p>
      </div> : <img src={imgSrc} className='min-w-[300px] h-[140px] rounded-lg '></img>
  }
};

export default Card;
