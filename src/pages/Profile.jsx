import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import API_URL from "../config";
import ActionButton from "../components/ActionButton";

const Profile = () => {
  const [data, setData] = useState({ courses: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/admin/course/bulk`, {
          headers: {
            token: localStorage.getItem("adminToken"),
          },
        });

        if (Array.isArray(response.data)) {
          setData({ courses: response.data });
        } else if (response.data?.courses) {
          setData(response.data);
        } else {
          setError("Courses not found");
        }
      } catch (err) {
        setError("Failed to load courses");
        toast.error("Failed to load courses");
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  if (loading) return <div className="text-white p-4">Loading...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  if (!data.courses || data.courses.length === 0)
    return <div className="text-white p-4">No courses available</div>;

  const handleDelete = async (courseId) => {};
  return (
    <div className="p-8 bg-gray-900 w-full h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Course Inventory</h1>

        <div className="overflow-x-auto rounded-lg border border-gray-700">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Course ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3  text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-gray-900 divide-y divide-gray-700">
              {data.courses.map((course) => (
                <tr
                  key={course._id}
                  className="hover:bg-gray-800 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-300 max-w-xs truncate">
                    {course._id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {course.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300 max-w-md">
                    {course.description || "No description"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-400">
                    ₹{course.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                    {course.imageUrl || course.myFile ? (
                      <span className="text-green-500">✓</span>
                    ) : (
                      <span className="text-red-500">✗</span>
                    )}
                  </td>
                  <td className="flex flex-wrap text-center gap-2 items-center justify-center mt-2 ">
                    <ActionButton
                      type="delete"
                      onClick={handleDelete(course._id)}
                    />
                    <ActionButton
                      type="update"
                      onClick={handleDelete(course._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
