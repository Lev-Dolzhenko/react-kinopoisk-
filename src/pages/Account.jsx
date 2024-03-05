import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import SavedShows from "../components/SavedShows";

export const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

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
        <div className="absolute bg-black/70 left-0 right-0 bottom-0 top-0 w-full h-[100vh]"></div>
        <img 
        className="h-[100vh] w-full"
          src="
    https://wallpapers.com/images/hd/american-movie-posters-z0puq43u0qbtr6j2.jpg"
          alt="background"
        />
        <div className="absolute top-[15%] left-[50%] translate-x-[-50%] w-[700px] text-white py-10 px-12 rounded bg-black/80">
          <div className="flex items-center gap-x-20">
            <div>
              <span className="w-[200px] h-[200px] bg-slate-600 block rounded-full"></span>
            </div>
            <div className="flex flex-col">
              <span className="text-[25px] font-semibold">
                Почта: {user.email}
              </span>
              <span className="text-[25px] font-semibold">
                Имя: {user.email}
              </span>
              <div className="flex justify-between">
                <span className="text-[25px] font-semibold">Год рождения</span>
                <span className="text-[25px] font-semibold">Пол</span>
              </div>
              <span className="text-[25px] font-semibold">Пароль</span>
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
