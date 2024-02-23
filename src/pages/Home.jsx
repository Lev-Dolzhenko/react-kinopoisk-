import React from "react";
import { Main } from "./../components/Main";
import axios from "axios";
import { useState, useEffect } from "react";

export const Home = () => {
  const [films, setFilms] = useState([]);
  const [film, setFilm] = useState(null);

  const url =
    "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=20&selectFields=id&selectFields=name&selectFields=description&selectFields=shortDescription&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=movieLength&selectFields=genres&selectFields=poster&selectFields=backdrop&selectFields=logo&selectFields=persons&selectFields=similarMovies&type=movie";
  const headers = {
    "X-API-KEY": "0G4PNZN-WQQ42Q4-NY9G8M7-9P4KZP1",
  };

  useEffect(() => {
    axios
      .get(url, { headers })
      .then((response) => {
        setFilms(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error.response?.data);
      });
  }, [url]);

  useEffect(() => {
    if (films && films.docs && films.docs.length > 0) {
      setFilm(films.docs[Math.floor(Math.random() * films.docs.length)]);
    }
  }, [films.docs]);
  return (
    // <div>
    <Main film={film} />
    // </div>
  );
};
