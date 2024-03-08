import React from "react";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Actors = ({ persons }) => {
  const slideLeft = () => {
    const slider = document.getElementById("sliderActors");
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  console.log(persons);
  const slideRight = () => {
    const slider = document.getElementById("sliderActors");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div className="customContainer mt-[100px] mb-[100px]">
      <div className="relative group">
        <BsChevronLeft
          onClick={slideLeft}
          className="bg-white top-[50%] translate-y-[-50%] left-0 rounded-full absolute opacity-0 hover:opacity-100 p-1 cursor-pointer z-30 group-hover:opacity-100 transition-opacity"
          size={40}
        />
        <ul
          id="sliderActors"
          className="w-full h-full gap-x-5 flex overflow-y-hidden overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar"
        >
          {persons?.map((person, index) => (
            <li
              key={person?.name + index}
              className="flex-shrink-0 cursor-pointer relative"
            >
              <img className="h-full w-[200px]" src={person?.photo} alt="/" />
              <div className="absolute left-0 bottom-0 w-full h-full opacity-0 bg-black/60 flex flex-col items-center justify-center hover:opacity-100 transition-opacity">
                <strong className="text-white text-xl text-wrap text-center">
                  {person?.description}
                </strong>
                <span className="text-white">{person?.name}</span>
              </div>
            </li>
          ))}
        </ul>
        <BsChevronRight
          onClick={slideRight}
          className="bg-white right-0 top-[50%] translate-y-[-50%] rounded-full absolute opacity-0 p-1 cursor-pointer z-30 group-hover:opacity-100 transition-opacity hover:opacity-100"
          size={40}
        />
      </div>
    </div>
  );
};

export default Actors;
