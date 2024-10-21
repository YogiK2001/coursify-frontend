import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState, isAuthenticatedState } from "../context/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Courses = () => {
  const setUserState = useSetRecoilState(userState);
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          "http://localhost:3000/user/purchases",
          {
            headers: {
              token: token,
              userId: userId,
            },
          }
        );
        setData(response.data.coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }
    fetchCourses();
  }, [isAuthenticated]);

  return (
    <div className=" w-[50vw]">
      {isAuthenticated ? (
        <div>
          {data.map((course) => {
            return (
              <div
                key={course._id}
                className="flex flex-wrap justify-start dark bg-[#0a0b10]"
              >
                <Card
                  title={course.title}
                  description={course.description}
                  imageURL={course.imageUrl}
                  price={course.price}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className=" text-red-300">You are not logged in</div>
      )}
    </div>
  );
};

export default Courses;
