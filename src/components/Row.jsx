import React, { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const Row = ({ films, category, rowId }) => {
  const [currFilms, setCurrFilms] = useState([]);

  useEffect(() => {
    if (films.docs) {
      const filteredFilms = films.docs.filter((film) =>
        film.genres.some((genre) => genre.name === category)
      );
      setCurrFilms(filteredFilms);
    }
  }, [films, category]);

  console.log(currFilms[0]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div className="mt-5 ml-4">
      <h2 className="font-bold text-4xl text-white first-letter:uppercase mb-2">
        {category}
      </h2>
      <div className="relative flex items-center scroll group">
        <BsChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-0 hover:opacity-100 p-1 cursor-pointer z-30 group-hover:opacity-100 transition-opacity"
          size={40}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-y-hidden overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar"
        >
          {currFilms.map((currFilm) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative inline-block cursor-pointer p-2 hover:z-10">
              <img
                className="rounded hover:scale-110 hover:shadow-[0_0_50px_50px_rgba(0,0,0,1)] transition-transform"
                src={currFilm?.poster.url}
                alt={currFilms?.id}
              />
            </div>
          ))}
        </div>
        <BsChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-0 p-1 cursor-pointer z-30 group-hover:opacity-100 transition-opacity hover:opacity-100"
          size={40}
        />
      </div>
    </div>
  );
};
