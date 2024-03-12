import React from "react";
import { Main } from "./../components/Main";
import axios from "axios";
import { useState, useEffect } from "react";
import { Row } from "../components/Row";
import MobileManu from "../components/MobileManu";

export const Home = () => {
  const [films, setFilms] = useState([]);
  const [film, setFilm] = useState(null);

  const url =
    "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=20&selectFields=id&selectFields=name&selectFields=description&selectFields=shortDescription&selectFields=type&selectFields=year&selectFields=rating&selectFields=ageRating&selectFields=movieLength&selectFields=genres&selectFields=poster&selectFields=backdrop&selectFields=logo&selectFields=persons&selectFields=premiere&selectFields=similarMovies&selectFields=top10&selectFields=top250&sortField=&sortType=1&type=movie&lists=top250";
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
    <>
      <Main film={film} />
      <Row rowId='1' films={films} category="комедия" />
      <Row rowId='2' films={films} category="боевик" />
      <Row rowId='3' films={films} category="драма" />
      <Row rowId='4' films={films} category="криминал" />
    </>
  );
};
