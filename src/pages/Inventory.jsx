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
  // const [thumbnail, setThumbnail] = useState("");
  const [course, setCourseId] = useState("");
  const [postImage, setPostImage] = useState({ myFile: "" });

  async function handleInventory() {
    try {
      // Check if required fields are filled
      if (!title || !price || !postImage.myFile) {
        toast.error("Please fill all required fields and upload an image.");
        return;
      }

      // Prepare the data object with base64 image
      const courseData = {
        title,
        description,
        price,
        myFile: postImage.myFile, // Using the base64 image from postImage state
      };

      // Send the data as JSON
      const response = await axios.post(`${API_URL}/admin/course`, courseData, {
        headers: {
          token: localStorage.getItem("adminToken"),
          "Content-Type": "application/json", // Changed to JSON
        },
      });

      // Handle successful response
      setCourseId(response.data.courseId);
      toast.success("Course Added Successfully✅");

      // Reset form fields
      setTitle("");
      setDescription("");
      setPrice("");
      setPostImage({ myFile: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to Add Course.");
    }
  }

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const base64 = await convertToVBase64(file);
      setPostImage({ myFile: base64 });
      toast.info("Image uploaded successfully");
    } catch (error) {
      console.error("Error converting file:", error);
      toast.error("Failed to process image");
    }
  };

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
              type="file"
              accept="image/*" // Restrict to image files
              onChange={(e) => handleUpload(e)} // Set the selected file
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
        <ToastContainer />
      </section>
    </div>
  );
};

export default Inventory;

function convertToVBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
