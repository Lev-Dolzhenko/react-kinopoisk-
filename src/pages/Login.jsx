import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] py-4 px-4 w-[100%] max-w-[450px] border border-orange-600 rounded text-white">
      <div className="flex flex-col">
        <h1 className=" text-3xl font-bold mb-[40px]">Вход</h1>
        {error ? <p className="p-3 bg-red-400 mb-2">{error}</p> : null}
        <form onSubmit={handleSubmit} className="flex flex-col">
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
            Вход
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
            <span className="text-gray-600">Еще нет аккаунта? </span>{" "}
            <Link to="/signup">Зарегистрироваться</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
