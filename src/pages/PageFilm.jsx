import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import playIcon from "./../content/main/playIcon.svg";
import Actors from "../components/Actors";
import { useParams } from "react-router-dom";

const PageFilm = () => {
  const params = useParams();
  const [film, setFilm] = useState({});
  const url = `https://api.kinopoisk.dev/v1.4/movie/${params?.filmId}`;
  const headers = {
    "X-API-KEY": "0G4PNZN-WQQ42Q4-NY9G8M7-9P4KZP1",
  };
  const [genres, setGenres] = useState([]);
  const [countries, setCountries] = useState([]);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  useEffect(() => {
    axios
      .get(url, { headers })
      .then((response) => {
        setFilm(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error.response?.data);
      });
  }, [url]);

  useEffect(() => {
    let newGenres = [];
    for (let i = 0; i < film?.genres?.length; i++) {
      newGenres.push(film?.genres[i]?.name);
    }
    setGenres(newGenres);
  }, [film.genres, setGenres]);

  useEffect(() => {
    let newCountries = [];
    for (let i = 0; i < film?.countries?.length; i++) {
      newCountries.push(film?.countries[i].name);
    }
    setCountries(newCountries);
  }, []);

  return (
    <>
      <div className="w-full h-[800px] lg:h-[100vh] text-white/60">
        <div className="absolute w-full h-[800px] lg:h-[100vh] bg-gradient-to-r from-black"></div>
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src={film?.backdrop?.url}
            alt={film?.id}
          />
          <div className="absolute top-[20%] left-[1%] customContainer">
            <img
              className="w-[300px] mb-4 lg:w-[400px]"
              src={film?.logo?.url}
              alt=""
            />
            <ul className="text-xs font-semibold flex items-center gap-x-[10px] mb-4 flex-wrap gap-y-1">
              <li className="psevdoAfter">{film?.rating?.imdb}</li>
              <>
                {genres.map((genre) => (
                  <li key={genre} className="text-xs psevdoAfter">
                    {genre}
                  </li>
                ))}
              </>
              <li className="psevdoAfter">
                <span>длительность</span>: {film?.movieLength}м
              </li>
              <li className="psevdoAfter">{film?.ageRating}+</li>
              <>
                {countries.map((countrie) => (
                  <li className="psevdoAfter" key="countrie">
                    {countrie}
                  </li>
                ))}
              </>
            </ul>
            <div className="max-w-[100%] mb-5">
              <p className="text-white font-medium text-[16px] opacity-[0.6] lg:text-[22px]">
                {truncateString(film?.description, 300)}
              </p>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row">
              <button className="text-white rounded bg-orange-500 font-bold flex items-center justify-center p-3 gap-x-2 hover:bg-orange-600 transition-colors">
                <img className="w-7 h-7" src={playIcon} alt="playIcon" />
                Смотреть
              </button>
              <button className="bg-gray-700 font-bold text-white p-3 rounded hover:bg-gray-800 transition-colors">
                О сериале
              </button>
              <button className="bg-gray-700 h-[52px] w-[52px] rounded-full flex items-center justify-center text-white text-2xl hover:bg-gray-800 transition-colors">
                <AiOutlineHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Actors persons={film?.persons} />
    </>
  );
};

export default PageFilm;
