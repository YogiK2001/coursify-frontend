import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Home,
  AdminHome,
  Explore,
  AdminDashboard,
  UserDashboard,
} from "./pages";
import { UserLayout, AdminLayout } from "./layout/layout";
import { Login, Register, AdminLogin, AdminRegister } from "./components";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          {/* User Routes */}
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user/dashboard" element={<UserDashboard />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHome />} />
            <Route path="login" element={<AdminLogin />} />
            <Route path="register" element={<AdminRegister />} />
            <Route path="dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
