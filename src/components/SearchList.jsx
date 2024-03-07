import React from "react";
import { useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";

import axios from "axios";

const SearchList = ({ isShow, setIsShow }) => {
  const [films, setFilms] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  // console.log(films);
  const url =
    "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=20&selectFields=id&selectFields=name&selectFields=description&selectFields=shortDescription&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=movieLength&selectFields=genres&selectFields=poster&selectFields=backdrop&selectFields=logo&selectFields=persons&selectFields=premiere&selectFields=similarMovies&selectFields=top10&selectFields=top250&sortField=&sortType=1&type=movie&lists=top250";
  const headers = {
    "X-API-KEY": "0G4PNZN-WQQ42Q4-NY9G8M7-9P4KZP1",
  };

  useEffect(() => {
    if (isShow === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  },[isShow]);

  // console.log(searchVal);

  const closeShow = () => {
    setIsShow(false);
  };

  useEffect(() => {
    axios
      .get(url, { headers })
      .then((response) => {
        setFilms(response.data.docs);
        // console.log(response.data.docs);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error.response?.data);
      });
  }, [url]);
  return (
    <div
      className={`fixed left-[50%] top-[40%] translate-x-[-50%] translate-y-[-50%] w-[600px] h-[500px] bg-black/70 rounded py-5 px-2 ${
        isShow ? "block" : "hidden"
      }`}
    >
      <div className="flex  justify-between">
        <strong className="text-orange-500">Найди свой любимый фильм</strong>
        <IoIosCloseCircle
          onClick={closeShow}
          className="text-orange-500 mb-3 w-6 h-6 cursor-pointer"
        />
      </div>
      <input
        onChange={(e) => setSearchVal(e.target.value)}
        type="text"
        className="w-full rounded bg-zinc-900 border border-orange-500 h-[50px] text-white mb-3 px-3"
        placeholder="Поиск..."
      />
      <div className="max-h-[350px] overflow-hidden overflow-y-scroll no-scrollbar">
        <ul className="flex flex-col gap-y-4 ">
          {films
            .filter((item) => {
              if (searchVal === "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(searchVal.toLowerCase())
              ) {
                return item;
              }
            })
            .map((film) => (
              <li 
              key={film.id} className="text-white flex items-center gap-x-4 cursor-pointer">
                <img
                  className="w-[100px]"
                  src={film?.poster.url}
                  alt={film?.id}
                />
                <span className="text-2xl">{film?.name}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchList;
