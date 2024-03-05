import React from "react";
import { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { FaHeart } from "react-icons/fa";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
      console.log(doc.data()?.savedShows);
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
    <div className="ml-4 text-white">
      <h2 className="font-bold text-4xl text-white first-letter:uppercase mb-10">
        Сохраненные
      </h2>
      <ul className="grid grid-cols-6 gap-4">
        {movies.length > 0 &&
          movies.map((movie) => (
            <li
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] relative cursor-pointer hover:scale-110 transition-transform hover:z-10"
              key={movie.id}
            >
              <img src={movie?.poster} />
              <div
                onClick={() => deleteShow(movie.id)}
                className="absolute left-4 top-4 w-[40px] h-[40px] bg-black/70 flex items-center justify-center rounded-full"
              >
                <FaHeart className="w-[30px]  text-red  hover:scale-110" />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SavedShows;
