import React from "react";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
      // console.log(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedId) => {
    try {
      const result = movies.filter((item) => item.id !== passedId);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ml-4 text-white customContainer">
      <h2 className="font-bold text-4xl text-white first-letter:uppercase mb-10">
        Сохраненные
      </h2>
      {movies ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {movies.length > 0 &&
            movies.map((movie) => (
              <li className="w-[250px] sm:w-[200px] md:w-[180px] lg:w-[200px] xl:w-[250px] 2xl:w-[300px] justify-self-center relative cursor-pointer hover:scale-110 transition-transform hover:z-10">
                <Link to={`/film/${movie?.id}`} key={movie.id}>
                  <img src={movie?.poster} />
                </Link>
                <div
                  onClick={() => deleteShow(movie.id)}
                  className="absolute left-4 top-4 w-[40px] h-[40px] bg-black/70 flex items-center justify-center rounded-full"
                >
                  <FaHeart className="w-[30px]  text-red  hover:scale-110" />
                </div>
              </li>
            ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SavedShows;
