import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSetRecoilState } from "recoil";
import { adminState } from "../context/auth";
import { useState, useEffect } from "react";

const Profile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      await axios
        .get("http://localhost:3000/admin/course/bulk", {
          headers: {
            token: localStorage.getItem("adminToken"),
          },
        })
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        });
    }
    fetchCourses();
  }, []);

  // const handleUpdate = () => {};

  // const handleDelete = () => {};

  return (
    <div className="flex xl:flex-row flex-col mt-20 p-20 bg-[#0a0b10] justify-start  w-full">
      {data.map((course) => {
        return (
          <div
            key={course._id}
            className="flex flex-wrap justify-start dark bg-[#0a0b10]"
          >
            <span>
              courseId={course._id}
              title={course.title}
              imageURL={course.imageUrl}
              price={course.price}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Profile;
