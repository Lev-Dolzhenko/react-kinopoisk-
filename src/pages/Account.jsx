import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import SavedShows from "../components/SavedShows";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

export const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setName(doc.data()?.name);
      setGender(doc.data()?.gender);
      setDate(doc.data()?.date);
    });
  }, [user?.email]);

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  if (user) {
    return (
      <div className="relative">
        <div className="absolute h-[0] bg-black/70 left-0 right-0 bottom-0 top-0 w-full md:h-[700px] lg:h-[100vh]"></div>
        <img
          className=" w-full h-[0] md:h-[700px] lg:h-[100vh]"
          src="
    https://wallpapers.com/images/hd/american-movie-posters-z0puq43u0qbtr6j2.jpg"
          alt="background"
        />
        <div className="absolute top-[60%] left-[50%] translate-x-[-50%] max-w-[700px] text-white py-10 px-12 rounded bg-black/80 md:top-[15%] ld:top-[15%]">
          <div className="flex flex-col items-center gap-x-20 lg:flex-row">
            <div>
              <span className="w-[200px] h-[200px] bg-slate-600 block rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-[25px] font-semibold">
                Почта: {user.email}
              </span>
              <span className="text-[25px] font-semibold">Имя: {name}</span>
              <span className="text-[25px] font-semibold">
                Год рождения: {date}
              </span>
              <span className="text-[25px] font-semibold">Пол: {gender}</span>
              <span className="text-[25px] font-semibold">Пароль: *****</span>
              <button className="text-white rounded bg-orange-500 font-bold flex items-center justify-center w-full p-3 hover:bg-orange-600 transition-colors mt-[30px]">
                Change
              </button>
            </div>
          </div>
        </div>
        <div className="mt-[50px]">
          <SavedShows />
        </div>
      </div>
    );
  }
};
