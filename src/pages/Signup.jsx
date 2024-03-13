import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password, name, gender, date);
      console.log(date);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] py-4 px-4 w-[100%]  border border-orange-600 rounded md:max-w-[450px]">
        <div className="flex flex-col">
          <h1 className="text-white text-3xl font-bold mb-[40px]">
            Регистрация
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col text-white">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 my-2 bg-gray-700 rounded"
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 my-2 bg-gray-700 rounded"
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="p-3 my-2 bg-gray-700 rounded"
              placeholder="Name"
            />
            <div className="flex items-center gap-x-2">
              <div>
                <label htmlFor="genderMan">М</label>
                <input
                  onChange={(e) => setGender(e.target.value)}
                  name="gender"
                  id="genderMan"
                  type="radio"
                  value="male"
                />
              </div>
              <div>
                <label htmlFor="genderWomen">Ж</label>
                <input
                  onChange={(e) => setGender(e.target.value)}
                  name="gender"
                  id="genderWomen"
                  type="radio"
                  value="female"
                />
              </div>
            </div>
            <label className="mb-1" for="birthdate">
              Дата рождения:
            </label>
            <input
              className="text-black"
              type="date"
              id="birthdate"
              name="birthdate"
              onChange={(e) => setDate(e.target.value)}
            ></input>
            <button className="text-white rounded bg-orange-500 font-bold flex items-center justify-center p-3 gap-x-2 hover:bg-orange-600 transition-colors mt-[30px]">
              Регистрация
            </button>
            <div className="flex flex-col gap-y-3 mt-[20px] text-sm  text-gray-600 md:flex-row justify-between">
              <p>
                <input id="remember" className="mr-2" type="checkbox" />
                <label htmlFor="remember">
                  Согласен на обработку личных данных
                </label>
              </p>
              <p>Нужная помощь?</p>
            </div>
            <p className="py-3 text-white">
              <span className="text-gray-600">Уже есть аккаунт? </span>
              <Link to="/login">Войти</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
