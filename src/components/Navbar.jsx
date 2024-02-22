import React, { useState } from "react";
import logotype from "./../content/navbar/kinopoiskLogo.svg";
import searchIcon from "./../content/navbar/searchIcon.svg";

export const Navbar = () => {
  return (
    <div className="customContainer py-6 absolute top-0 z-10 w-full">
      <div className="flex items-center justify-between">
        <div>
          <img className="w-80" src={logotype} alt="kinopoisk" />
        </div>
        <nav>
          <ul className="flex items-center gap-x-10 text-xl font-bold">
            <li className="text-white opacity-[0.6]">Главная</li>
            <li className="text-white opacity-[0.6]">Мое</li>
            <li className="opacity-[0.6] flex items-center gap-x-4">
              <img className="w-7 h-7" src={searchIcon} alt="searchIcon" />
              <input className="rounded opacity-[0.6]" type="text"></input>
            </li>
          </ul>
        </nav>
        <div>
          <div className="w-10 h-10 bg-white rounded-full opacity-[0.5]"></div>
        </div>
      </div>
    </div>
  );
};
