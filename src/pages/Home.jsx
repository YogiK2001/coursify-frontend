//  implement the home page UI here.
import { useNavigate } from "react-router-dom";

// compoents imports
// import Login from "../components/Login";
// import Register from "../components/Register";
// import Courses from "../components/Courses";
import ImageCarousel from "../components/ImageCarousel";

const Home = () => {
  const navigate = useNavigate();
  return (
    //  write home page UI code here
    <section className="dark bg-[#0a0b10] flex flex-col">
      <div className="flex flex-col h-screen items-center justify-center gap-8 p-4">
        <div
          className="flex max-w-7xl flex-col items-center justify-center gap-4 px-4"
          style={{ opacity: 1, willChange: "auto", transform: "none" }}
        >
          <h1 className="max-w-4xl py-2 text-center text-4xl font-extrabold tracking-tighter md:text-4xl xl:text-8xl">
            <span className="w-fit bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text pr-1.5 text-center text-transparent">
              100xCourse
            </span>{" "}
            <span className="bg-gradient-to-b from-primary/90 to-primary/60 bg-clip-text py-1 text-transparent">
              because 10x ain't enough!
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-center text-xl font-medium tracking-tight text-primary/80 md:text-2xl">
            100X Your Skills and Dominate in your Domain.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 opacity: 1; will-change: auto; transform: none">
          <button
            target="_blank"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-blue-400 to-blue-700 text-white font-medium hover:opacity-80 transition-all duration-300 h-11 rounded-md px-8"
            onClick={() => navigate("/explore")}
          >
            Explore Courses
          </button>
          <a
            target="_blank"
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground dark:text-neutral-950 hover:bg-primary/90 h-11 rounded-md px-8"
            href=""
          >
            Demo Courses
          </a>
        </div>
        <ImageCarousel />
      </div>
    </section>
  );
};

export default Home;
