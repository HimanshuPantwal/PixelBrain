import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import GamePreviewCard from '../Components/GamePreviewCard';
import GamePreview1 from '../assets/images/Alabay Games/Alabay Adventure - The Lost Heritage/Abilities.png'
import GamePreview2 from '../assets/images/Alabay Games/Alabay Adventure - The Lost Heritage/artifacts.png'
import GamePreview3 from '../assets/images/Alabay Games/Alabay Guard/image 3 alabay guard.png'
const GamePreviewSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
            img: GamePreview1,
            title: 'Artifact Collected',
            description: 'Explore the world to collect more!',
        },
        {
            img: GamePreview2,
            title: 'Pungent Poop',
            description: 'Collect relics and secrets!',
        },
        {
            img: GamePreview3,
            title: 'Wrath Hound',
            description: 'Use in-game to spook enemies!',
        },
        {
            img: 'https://path/to/another.jpg',
            title: 'New Game',
            description: 'Experience thrilling adventures!',
        },
        {
            img: 'https://path/to/yet-another.jpg',
            title: 'Exciting Quest',
            description: 'Embark on an exciting journey!',
        },
        // Add more cards as needed
    ];

    const cardsPerSlide = 3; // Number of cards visible per slide
    const totalCards = cards.length;

    const moveLeft = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalCards - cardsPerSlide : prevIndex - 1
        );
    };

    const moveRight = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalCards - cardsPerSlide ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="w-[100%] mx-auto text-center flex flex-col items-start">
            <h2 className="text-2xl font-bold mb-4 mx-10 mt-20">Game Previews</h2>
            <div className="relative w-full flex items-center justify-center p-2">

                <button
                    className="absolute left-16 text-4xl font-bold bg-gray-800 text-white p-2 rounded-xl text-[2rem] h-[4rem] shadow-lg"
                    onClick={moveLeft}
                >
                    <FaArrowLeft />
                </button>


                <div className="flex overflow-hidden w-[80%]">
                    <div
                        className="flex transition-transform ease-in-out duration-300"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)`
                        }}
                    >
                        {cards.map((card, index) => (
                            <div key={index} className="w-1/3 flex-shrink-0 p-2 gap-x-4">
                                <GamePreviewCard
                                    img={card.img}
                                    title={card.title}
                                    description={card.description}
                                />
                            </div>
                        ))}
                    </div>
                </div>


                <button
                    className="absolute right-16 text-4xl font-bold bg-gray-800 text-white p-2 rounded-xl text-[2rem] h-[4rem] shadow-lg"
                    onClick={moveRight}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default GamePreviewSlider;
