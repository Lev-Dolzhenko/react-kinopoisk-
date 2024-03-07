import React, { useState } from "react";
import logotype from "./../content/navbar/kinopoiskLogo.svg";
import searchIcon from "./../content/navbar/searchIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import SearchList from "./SearchList";

export const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  const showSearchList = () => {
    setIsShow(true)
  };

  const { user, logOut } = UserAuth();
  // console.log(user.email)
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="customContainer py-6 absolute top-0 z-10 w-full">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <img className="w-80" src={logotype} alt="kinopoisk" />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-x-10 text-xl font-bold">
            <li className="text-white opacity-[0.6] hover:opacity-100 transition-opacity">
              <Link to="/">Главная</Link>
            </li>
            <li className="text-white opacity-[0.6] hover:opacity-100 transition-opacity">
              <Link to="/collection">Мое</Link>
            </li>
            <li onClick={showSearchList} className="opacity-[0.6] flex items-center gap-x-4">
              <img className="w-7 h-7 cursor-pointer" src={searchIcon} alt="searchIcon" />
              {/* <input className="rounded opacity-[0.6]" type="text"></input> */}
            </li>
          </ul>
        </nav>
        {user !== null ? (
          <div className="flex gap-x-4 items-center">
            <Link to="/account">
              <div className="w-10 h-10 bg-white rounded-full opacity-[0.5]"></div>
            </Link>
            <button onClick={handleLogout} className="text-white rounded bg-orange-500 font-bold flex items-center justify-center p-3 gap-x-2 hover:bg-orange-600 transition-colors">Logout</button>
          </div>
        ) : (
          <div className="flex gap-x-2">
            <Link to="/signup">
              <button className="text-white rounded bg-orange-500 font-bold flex items-center justify-center p-3 gap-x-2 hover:bg-orange-600 transition-colors">
                Регистрация
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-gray-700 font-bold text-white p-3 rounded hover:bg-gray-800 transition-colors">
                Вход
              </button>
            </Link>
          </div>
        )}
      </div>
      <SearchList isShow={isShow} setIsShow={setIsShow}/>
    </div>
  );
};
