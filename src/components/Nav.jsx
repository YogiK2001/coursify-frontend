import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0b10] shadow-md w-full">
      <div className="flex flex-row justify-between items-center p-2 max-w-7xl mx-auto w-full">
        <div
          onClick={() => navigate("/")}
          className="flex flex-row justify-start items-center ml-5 pl-6 cursor-pointer"
        >
          <img
            src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
            alt="100XCourses Logo"
            className="rounded-full w-10 h-10"
          />
          <span className="pl-2 bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-3xl font-bold tracking-tighter text-transparent min-[375px]:block">
            100XCourses
          </span>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row justify-between items-center p-5 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-moon w-6 h-6 text-white"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
            <button
              onClick={() => navigate("/login")}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground dark:text-neutral-950 hover:bg-primary/90 h-10 px-4 py-2"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-blue-400 to-blue-700 text-white font-medium hover:opacity-80 transition-all duration-300 h-10 px-4 py-2"
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
