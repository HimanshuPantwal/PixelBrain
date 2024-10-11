import React, { useState } from 'react';
import GameCard from './GameCard'
import Game1 from '../assets/images/Alabay Games/alabay guard prev 2 1.png'
import Game2 from '../assets/images/Alabay Games/alabay lost heritage prev 1.png'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const GameSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const gameCards = [
    {
      image: Game1,
      title: 'Game 1',
      link: '/game-1',
    },
    {
      image: Game2,
      title: 'Game 2',
      link: '/game-2',
    },
    // {
    //   image: 'https://path_to_image_3.jpg', 
    //   title: 'Game 3',
    //   link: '/game-3',
    // },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? gameCards.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === gameCards.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-full overflow-hidden p-4 rounded-lg z-20 ">
      <div
        className="flex transition-transform duration-500 gap-x-4 "
        style={{ transform: `translateX(-${currentIndex * 102}%)` }}
      >
        {gameCards.map((card, index) => (
          <GameCard key={index} image={card.image} title={card.title} link={card.link} />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-l-xl text-[2rem]"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r-xl text-[2rem]"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default GameSlider;