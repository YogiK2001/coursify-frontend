import { Nav, Footer } from "../components/index";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Nav />
      <main className="mt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default UserLayout;
