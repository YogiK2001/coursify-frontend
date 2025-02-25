import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSetRecoilState } from "recoil";
import { adminState } from "../context/auth";
import { useState } from "react";
import API_URL from "../config";

const Inventory = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImage] = useState("");
  const [course, setCourseId] = useState("");

  async function handleInventory() {
    try {
      const response = await axios.post(
        `${API_URL}/admin/course`,
        {
          title,
          description,
          imageUrl,
          price,
        },
        {
          headers: {
            token: localStorage.getItem("adminToken"),
          },
        }
      );

      setCourseId(response.data.courseId);
      toast.success("Course Added Successfully✅");
    } catch (error) {
      console.error(error);
      toast.error("Failed to Add Course.");
    }
  }
  return (
    <div className="w-full h-full grid place-items-center">
      {" "}
      {/* Changed to grid */}
      <section className="w-full max-w-md px-4">
        {" "}
        {/* New section styles */}
        <div
          className="flex flex-col rounded-2xl bg-primary/5 p-8 w-full"
          style={{ opacity: 1, willChange: "auto", transform: "none" }}
        >
          <div className="flex flex-col text-center mb-6">
            <h2 className="text-4xl font-semibold tracking-tighter text-white">
              Add Course
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-800 text-white p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-gray-800 text-white p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="bg-gray-800 text-white p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onChange={(e) => setImage(e.target.value)}
              className="bg-gray-800 text-white p-2 rounded-lg"
            />
            <button
              onClick={handleInventory}
              className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Add Course
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inventory;
