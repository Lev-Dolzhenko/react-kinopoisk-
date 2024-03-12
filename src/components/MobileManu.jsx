import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

import { useLocation } from "react-router-dom";

const MobileManu = ({ isMobMenu, setIsMobMenu }) => {
  useEffect(() => {
    setIsMobMenu(false);
  }, [location.pathname]);

  const { user, logOut } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${isMobMenu ? "block" : "hidden"}`}>
      <div className="fixed left-0 right-0 top-0 bottom-0 bg-black/70 z-20"></div>
      <div className="fixed left-[50%] top-[20%] translate-x-[-50%] z-20">
        <ul className="flex flex-col gap-y-2 items-center justify-center text-white text-2xl font-bold">
          <li>
            <Link to="/">
              <button>Главное</button>
            </Link>
          </li>
          <li>
            <Link to="/collection">
              <button>Мое</button>
            </Link>
          </li>
          {user !== null ? (
            <li>
              <button
                onClick={handleLogout}
                className="text-white rounded bg-orange-500 font-semibold flex items-center justify-center p-1 gap-x-2 hover:bg-orange-600 transition-colors lg:flex "
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signup">
                  <button className="text-white rounded bg-orange-500 font-semibold flex items-center justify-center p-1 gap-x-2 hover:bg-orange-600 transition-colors">
                    Регистрация
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button className="bg-gray-700 font-semibold text-white p-1 rounded hover:bg-gray-800 transition-colors">
                    Вход
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MobileManu;
