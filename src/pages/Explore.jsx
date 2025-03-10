import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";
import API_URL from "../config";

const Explore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchResponse() {
      await axios.get(`${API_URL}/courses/preview`).then((response) => {
        console.log(response.data.courses);
        setData(response.data.courses);
      });
    }
    fetchResponse();
  }, []);

  return (
    <div className="flex xl:flex-row flex-wrap flex-col mt-20 p-20 bg-[#0a0b10] justify-start  w-full">
      {data.map((course) => {
        return (
          <div
            key={course._id}
            className="flex flex-wrap justify-start dark bg-[#0a0b10]"
          >
            <Card
              courseId={course._id}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              myFile={course.myFile}
              price={course.price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Explore;
