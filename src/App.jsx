import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import { Login, Register, Nav, Footer } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* start  writing from here */}
    </>
  );
}

export default App;
