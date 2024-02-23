import { Navbar } from "./components/Navbar";
import { Route, Routes } from 'react-router-dom';
import { Collection } from "./pages/Collection";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/account" element={<Account />}></Route>     
      </Routes>
    </>
  );
}

export default App;
