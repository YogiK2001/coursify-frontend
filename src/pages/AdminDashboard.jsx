import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { Explore, Inventory, Profile } from "./index";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <div className=" flex flex-row mt-20 pt-5 bg-[#0a0b10] justify-between pr-10  w-full h-[700px]">
      <div className="xl:w-[15vw] w-[10] md-shadow p-4 rounded-lg bg-[#1c1f2d] ">
        <div className="flex flex-col items-center justify-center lg:gap-2 ">
          <div
            className="px-4 py-5 flex justify-start items-center text-gray-300 w-full hover:bg-red-600 rounded-lg"
            onClick={() => setActiveTab("profile")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="h-5 w-5 mr-3"
              fill="currentColor"
            >
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            </svg>
            <span className=" xl:visible lg:visible max-md:hidden">
              Profile
            </span>
          </div>
          <div
            className="px-4 py-5 flex justify-start items-center text-gray-300 w-full hover:bg-red-600 rounded-lg"
            onClick={() => setActiveTab("inventory")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="h-5 w-5 mr-3"
              fill="currentColor"
            >
              <path d="M3 3h14v4h-1v10H4V7H3V3zm2 5v8h10V8H5zm2-6h6v2H7V2z" />
            </svg>
            <span className=" xl:visible lg:visible max-md:hidden">
              Inventory
            </span>
          </div>
          <div
            className="px-4 py-5 flex justify-start items-center text-gray-300 w-full hover:bg-red-600 rounded-lg"
            onClick={() => setActiveTab("explore")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="h-5 w-5 mr-3"
              fill="currentColor"
            >
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM2.48 8.62a.75.75 0 01-.488-1.06l3-7a.75.75 0 011.06-.488l7 3a.75.75 0 01.488 1.06l-3 7a.75.75 0 01-1.06.488l-7-3z" />
            </svg>
            <span className=" xl:visible lg:visible max-md:hidden">
              Explore
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        {activeTab === "profile" && (
          <div>
            <Profile />
          </div>
        )}
        {activeTab === "inventory" && (
          <div>
            <Inventory />
          </div>
        )}
        {activeTab === "explore" && <Explore />}
      </div>
    </div>
  );
};

export default AdminDashboard;
