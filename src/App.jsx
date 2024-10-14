import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      {/* start  writing from here */}
    </>
  );
}

export default App;
