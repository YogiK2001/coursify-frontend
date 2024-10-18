import { useState } from "react";

const AdminRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  return (
    <section className="dark bg-[#100a0a] wrapper relative flex min-h-screen items-center justify-center overflow-hidden antialiased">
      <div
        className="flex w-full flex-col justify-between gap-12 rounded-2xl bg-primary/5 p-8 md:max-w-[30vw]"
        style={{ opacity: 1, willChange: "auto", transform: "none" }}
      >
        <div className="flex flex-col text-center">
          <h2 className="text-3xl font-semibold tracking-tighter md:text-4xl">
            Welcome to{" "}
            <span className="bg-gradient-to-b from-red-400 to-red-700 bg-clip-text pr-1 font-black tracking-tighter text-transparent">
              100XCreator
            </span>
          </h2>
          <p className="text-lg font-medium tracking-tighter text-primary/75 md:text-xl">
            Sign Up to get Access
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-row justify-between gap-2">
              <div className="relative flex flex-col gap-2 w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-700/50 px-2 focus:ring-none border-none bg-primary/5 focus:outline-none"
                  id="firstName"
                  placeholder="John"
                  name="firstName"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="relative flex flex-col gap-2 w-full">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-700/50 px-2 focus:ring-none border-none bg-primary/5 focus:outline-none"
                  id="lastName"
                  placeholder="Doe"
                  name="lastName"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="relative flex flex-col gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="flex h-10 w-full rounded-md border border-gray-700/50 px-2 focus:ring-none border-none bg-primary/5 focus:outline-none"
                id="email"
                placeholder="name@email.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative flex flex-col gap-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Password
              </label>
              <div className="flex relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="flex h-10 w-full rounded-md border border-gray-700/50 px-2 focus:ring-none border-none bg-primary/5 focus:outline-none"
                  id="password"
                  placeholder="••••••••"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="absolute right-0 flex h-10 items-center px-4 text-neutral-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-b from-red-400 to-red-700 text-white font-medium hover:opacity-80 transition-all duration-300 h-11 rounded-md px-8">
            Register
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminRegister;
