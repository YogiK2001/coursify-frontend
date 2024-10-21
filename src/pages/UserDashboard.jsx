import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Courses } from "../components";
import Purchases from "../components/Purchases";
import Explore from "../pages/Explore";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("courses");
  return (
    <div className=" relative flex flex-row mt-20 pt-5 bg-[#0a0b10] justify-between w-full h-[700px]">
      <div className="w-[20vw] md-shadow p-4 rounded-lg bg-[#1c1f2d] ">
        <div className="flex flex-col items-center justify-center gap-2">
          <div
            className="px-4 py-5 flex justify-start items-start text-gray-300 w-full hover:bg-blue-500 rounded-lg"
            onClick={() => setActiveTab("courses")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <span>Your Courses</span>
          </div>
          <div
            className="px-4 py-5 flex justify-start items-start text-gray-300 w-full hover:bg-blue-500 rounded-lg"
            onClick={() => setActiveTab("purchases")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span>Purchases</span>
          </div>
          <div
            className="px-4 py-5 flex justify-start items-start text-gray-300 w-full hover:bg-blue-500 rounded-lg"
            onClick={() => setActiveTab("explore")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span>Explore</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        {activeTab === "courses" && <Courses />}
        {activeTab === "purchases" && <Purchases />}
        {activeTab === "explore" && <Explore />}
      </div>
    </div>
  );
};

export default UserDashboard;
