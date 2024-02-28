import React, { useState } from "react";
import logotype from "./../content/navbar/kinopoiskLogo.svg";
import searchIcon from "./../content/navbar/searchIcon.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="customContainer py-6 absolute top-0 z-10 w-full left-[50%] translate-x-[-50%]">
      <div className="flex items-center justify-between">
        <div>
          <img className="w-80" src={logotype} alt="kinopoisk" />
        </div>
        <nav>
          <ul className="flex items-center gap-x-10 text-xl font-bold">
            <li className="text-white opacity-[0.6] hover:opacity-100 transition-opacity">
              <Link to="/">Главная</Link>
            </li>
            <li className="text-white opacity-[0.6] hover:opacity-100 transition-opacity">
              <Link to="/collection">Мое</Link>
            </li>
            <li className="opacity-[0.6] flex items-center gap-x-4">
              <img className="w-7 h-7" src={searchIcon} alt="searchIcon" />
              <input className="rounded opacity-[0.6]" type="text"></input>
            </li>
          </ul>
        </nav>
        <div>
          <Link to="/account">
            <div className="w-10 h-10 bg-white rounded-full opacity-[0.5]"></div>
          </Link>
        </div>
        {/* <div className="flex gap-x-2">
          <button className="text-white rounded bg-orange-500 font-bold flex items-center justify-center p-3 gap-x-2 hover:bg-orange-600 transition-colors">Регистрация</button>
          <button className="bg-gray-700 font-bold text-white p-3 rounded hover:bg-gray-800 transition-colors">Вход</button>
        </div> */}
      </div>
    </div>
  );
};
