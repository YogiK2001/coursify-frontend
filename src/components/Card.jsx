/* eslint-disable react/prop-types */

import { useRecoilValue } from "recoil";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isAuthenticatedState } from "../context/auth";
import API_URL from "../config";
import { useState } from "react";
const Card = ({ courseId, title, description, imageUrl, myFile, price }) => {
  const isLoggedIn = useRecoilValue(isAuthenticatedState);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();

  const handleBuyFunction = () => {
    if (isLoggedIn) {
      // Redirect to the course page

      axios
        .post(
          `${API_URL}/courses/purchases`,
          { courseId: courseId },
          {
            headers: {
              token: localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          console.log("Course purchased successfully");
          toast.success("Course purchased successfully");
        });
    } else {
      toast.warning("Please Log in First");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  const getImageSource = () => {
    if (imageError) {
      return "https://via.placeholder.com/400x300?text=No+Image+Available"; // Fallback image
    }

    // Try each possible image field, in order of preference
    if (myFile) {
      return myFile;
    } else if (imageUrl) {
      return imageUrl;
    }

    // If no image is found, use a placeholder
    return "https://via.placeholder.com/400x300?text=No+Image";
  };

  return (
    <div
      className="flex flex-col gap-2 p-3 m-2 rounded-3xl shadow-xl 
          bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white/10
          border border-white/20  "
    >
      <span className="text-gray-500">Course Id: {courseId}</span>
      <div className="rounded-xl overflow-cover p-2 ">
        <img
          src={getImageSource()}
          alt="course image"
          height={400}
          width={400}
          className="rounded-xl h-[300px] w-[456px] object-center object-cover "
          onError={() => setImageError(true)}
        />
      </div>
      <h3 className="text-white/90 text-xl font-semibold px-2">{title}</h3>
      <p className="text-white/70 px-2">{description}</p>
      <p className="font-semibold text-white/90 px-2 text-blue-500 ">{`Rs. ${price}`}</p>
      <button
        className="bg-blue-600 hover:bg-blue-500 transition-colors 
            duration-300 rounded-full p-4 text-white font-medium
            mx-2"
        onClick={() => handleBuyFunction()}
      >
        View Details
      </button>
      <ToastContainer />
    </div>
  );
};

export default Card;
