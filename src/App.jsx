import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminHome from "./pages/AdminHome";
import Explore from "./pages/Explore";
import { UserLayout, AdminLayout } from "./layout/layout";
import { Login, Register, AdminLogin, AdminRegister } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="login" element={<AdminLogin />} />
          <Route path="register" element={<AdminRegister />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
