import React, { useState } from "react";
import playIcon from "./../content/main/playIcon.svg";
import { Link } from "react-router-dom";

export const Main = ({ film }) => {
  return (
    <div className="w-full h-[600px] lg:h-[100vh]">
      <div className="absolute w-full h-[600px] lg:h-[100vh] bg-gradient-to-r from-black"></div>
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={film?.backdrop.url}
          alt={film?.id}
        />
        <div className="absolute customContainer top-[30%] left-[1%] lg:top-[40%]">
          <img
            className="w-[300px] mb-4 lg:w-[400px]"
            src={film?.logo.url}
            alt=""
          />
          <div className="max-w-[100%] mb-3 sm:max-w-[70%]">
            <p className="text-white font-bold text-[16px] opacity-[0.6] lg:text-[22px]">
              {film?.shortDescription}
            </p>
          </div>
          <div className=" flex flex-col gap-5 sm:flex-row">
            <Link to={`/film/${film?.id}`}>
              <button className="text-white rounded bg-orange-500 font-bold flex items-center justify-center p-3 gap-x-2 hover:bg-orange-600 transition-colors">
                <img className="w-7 h-7" src={playIcon} alt="playIcon" />
                Смотреть
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
