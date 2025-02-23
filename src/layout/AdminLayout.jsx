import { AdminNav, Footer } from "../components/index";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <AdminNav />
      <main className="mt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AdminLayout;
