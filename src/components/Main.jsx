import React, { useState } from "react";
import playIcon from "./../content/main/playIcon.svg";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const Main = ({ film }) => {
  console.log(film);
  return (
    <div className="w-full h-[550px] lg:h-[100vh]">
      <div className="absolute w-full h-[550px] lg:h-[100vh] bg-gradient-to-r from-black"></div>
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={film?.backdrop.url}
          alt={film?.id}
        />
        <di v className="absolute top-[40%] left-[1%]">
          <img className="w-[400px] mb-4" src={film?.logo.url} alt="" />
          <div className="max-w-[40%] mb-3">
            <p className="text-white font-bold text-[22px] opacity-[0.6]">
              {film?.shortDescription}
            </p>
          </div>
          <div className="flex gap-5">
            <button className="text-white rounded bg-orange-500 font-bold flex items-center justify-center p-3 gap-x-2">
              <img className="w-7 h-7" src={playIcon} alt="playIcon" />
              Смотреть сериал
            </button>
            <button className="bg-gray-700 font-bold text-white p-3 rounded">
              О сериале
            </button>
            <button className="bg-gray-700 h-[52px] w-[52px] rounded-full flex items-center justify-center text-white text-2xl">
                <AiOutlineHeart />
            </button>
          </div>
        </di>
      </div>
    </div>
  );
};
