import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Collection } from "./pages/Collection";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Account } from "./pages/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PageFilm from "./pages/PageFilm";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/collection" element={<Collection />}></Route>
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/film/:filmId" element={<PageFilm />}>
            <Route path=":filmId"></Route>
          </Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
