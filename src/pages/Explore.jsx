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
    <div>
      {data.map((course) => {
        return (
          <Card
            key={course._id}
            title={course.title}
            description={course.description}
            imageURL={course.imageUrl}
            price={course.price}
          />
        );
      })}
    </div>
  );
};

export default Explore;
