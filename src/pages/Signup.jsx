import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] py-4 px-4 w-[100%] max-w-[450px] border border-orange-600 rounded">
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
            <button className="text-white rounded bg-orange-500 font-bold flex items-center justify-center p-3 gap-x-2 hover:bg-orange-600 transition-colors mt-[30px]">
              Регистрация
            </button>
            <div className="flex justify-between mt-[20px] text-sm text-gray-600">
              <p>
                <input id="remember" className="mr-2" type="checkbox" />
                <label htmlFor="remember">
                  Согласен на обработку личных данных
                </label>
              </p>
              <p>Нужная помощь?</p>
            </div>
            <p className="py-8 text-white">
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
