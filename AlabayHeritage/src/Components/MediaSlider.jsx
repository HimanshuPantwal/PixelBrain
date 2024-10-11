import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SliderItem from "../Components/SliderItem"; 

const MediaSlider = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = {
    all: [
      { id: 1, src: "photo1.jpg", type: "photo" },
      { id: 2, src: "video1.mp4", type: "video" },
      { id: 3, src: "photo2.jpg", type: "photo" },
      { id: 4, src: "video2.mp4", type: "video" },
      { id: 5, src: "photo3.jpg", type: "photo" },
    ],
    photos: [
      { id: 1, src: "photo1.jpg", type: "photo" },
      { id: 3, src: "photo2.jpg", type: "photo" },
      { id: 5, src: "photo3.jpg", type: "photo" },
    ],
    videos: [
      { id: 2, src: "video1.mp4", type: "video" },
      { id: 4, src: "video2.mp4", type: "video" },
    ],
  };

  const itemsToShow = categories[activeCategory];
  const visibleItems = itemsToShow.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex + 3 < itemsToShow.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full mx-auto mt-80  p-2 flex flex-col h-full">
      
      <div className="flex justify-center space-x-4 mb-4 ">
        {["all", "photos", "videos"].map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setCurrentIndex(0); 
            }}
            className={`${
              activeCategory === category ? "text-yellow-400" : "text-black"
            } px-4 font-bold`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      
      <div className="flex items-center justify-center w-full p-2 h-[15rem] relative">
        <button onClick={handlePrev} className=" absolute left-20 top-30 bg-gray-800 text-white p-2 rounded-xl text-[2rem] h-[3.5rem] shadow-lg">
          <FaArrowLeft/>
        </button>

        <div className="flex space-x-4">
          {visibleItems.map((item) => (
            <SliderItem key={item.id} item={item} /> 
          ))}
        </div>

        <button onClick={handleNext} className=" absolute right-20 top-30 bg-gray-800 text-white p-2 rounded-xl text-[2rem] h-[3.5rem] shadow-lg">
          <FaArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default MediaSlider;