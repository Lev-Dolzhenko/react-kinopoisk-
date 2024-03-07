import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Collection } from "./pages/Collection";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Account } from "./pages/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
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
          
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
