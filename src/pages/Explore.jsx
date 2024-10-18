import Card from "../components/Card";
import axios from "axios";
import { useState, useEffect } from "react";

const Explore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchResponse() {
      await axios
        .get("http://localhost:3000/courses/preview")
        .then((response) => {
          console.log(response.data.courses);
          setData(response.data.courses);
        });
    }
    fetchResponse();
  }, []);

  return (
    <div className="flex flex-row mt-20 p-20 bg-[#0a0b10] justify-start  w-full">
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
  );
};

export default Explore;
