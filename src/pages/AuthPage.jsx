import { useState } from "react";
import { Github, Linkedin, Facebook, Globe } from "lucide-react";

const AuthPage = () => {
  const [isActive, setIsActive] = useState(false);

  const socialIcons = [
    { icon: <Globe className="w-5 h-5" />, name: "Google" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook" },
    { icon: <Github className="w-5 h-5" />, name: "Github" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn" },
  ];

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center font-[Montserrat] relative overflow-hidden">
      {/* Glassmorphism container */}
      <div
        className={`relative bg-neutral-900/60 backdrop-blur-xl mt-6 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-[30px] overflow-hidden w-[70vw] h-[70vh] transition-all duration-700 ease-in-out ${
          isActive ? "active" : ""
        }`}
      >
        {/* Sign Up Form */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex items-center justify-center transition-all duration-700 ease-in-out ${
            isActive
              ? "translate-x-full opacity-100 z-[5]"
              : "opacity-0 pointer-events-none z-[1]"
          }`}
        >
          <form className="flex flex-col items-center justify-center h-full px-10 text-white w-full">
            <h1 className="text-3xl font-bold mb-3 text-white">
              Create Account
            </h1>

            <div className="my-5 flex gap-3">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={item.name}
                  className="border border-white/20 rounded-lg w-10 h-10 flex items-center justify-center text-gray-300 hover:text-indigo-400 hover:border-indigo-400 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <span className="text-gray-400 text-sm mb-2">
              or use your email for registration
            </span>

            <input
              type="text"
              placeholder="Name"
              className="bg-white/10 text-gray-200 rounded-lg px-4 py-2 my-2 w-full text-sm outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-white/10 text-gray-200 rounded-lg px-4 py-2 my-2 w-full text-sm outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-white/10 text-gray-200 rounded-lg px-4 py-2 my-2 w-full text-sm outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
            />

            <button className="bg-indigo-600/80 text-white text-xs uppercase font-semibold py-2 px-10 rounded-lg mt-3 border border-transparent hover:bg-white hover:text-indigo-600 hover:border-indigo-600 transition duration-500">
              Sign Up
            </button>
          </form>
        </div>

        {/* Sign In Form */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 flex items-center justify-center transition-all duration-700 ease-in-out ${
            isActive
              ? "translate-x-full opacity-0 pointer-events-none z-[1]"
              : "opacity-100 z-[5]"
          }`}
        >
          <form className="flex flex-col items-center justify-center h-full px-10 text-white w-full">
            <h1 className="text-3xl font-bold mb-3 text-white">Sign In</h1>

            <div className="my-5 flex gap-3">
              {socialIcons.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={item.name}
                  className="border border-white/20 rounded-lg w-10 h-10 flex items-center justify-center text-gray-300 hover:text-indigo-400 hover:border-indigo-400 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <span className="text-gray-400 text-sm mb-2">
              or use your email password
            </span>

            <input
              type="email"
              placeholder="Email"
              className="bg-white/10 text-gray-200 rounded-lg px-4 py-2 my-2 w-full text-sm outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-white/10 text-gray-200 rounded-lg px-4 py-2 my-2 w-full text-sm outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-400"
            />

            <a
              href="#"
              className="text-gray-400 text-sm mt-3 hover:text-indigo-400"
            >
              Forget Your Password?
            </a>

            <button className="bg-indigo-600/80 text-white text-xs uppercase font-semibold py-2 px-10 rounded-lg mt-3 border border-transparent hover:bg-white hover:text-indigo-600 hover:border-indigo-600 transition duration-500">
              Sign In
            </button>
          </form>
        </div>

        {/* Toggle Section */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out z-[1000] ${
            isActive
              ? "translate-x-[-100%] rounded-[0_150px_100px_0]"
              : "rounded-[150px_0_0_100px]"
          }`}
        >
          <div
            className={`bg-linear-to-r from-indigo-500 to-indigo-700 h-full text-white relative left-[-100%] w-[200%] transition-all duration-700 ease-in-out ${
              isActive ? "translate-x-1/2" : "translate-x-0"
            }`}
          >
            {/* Left Panel */}
            <div
              className={`absolute w-1/2 h-full flex flex-col items-center justify-center text-center px-8 transition-all duration-700 ease-in-out ${
                isActive ? "translate-x-0" : "-translate-x-[200%]"
              }`}
            >
              <h1 className="text-2xl font-semibold mb-2">
                Have an account already?
              </h1>
              <p className="text-sm mb-4 text-gray-200">
                Log in to your Zebvo account
              </p>
              <button
                className="bg-transparent border border-white text-white text-xs uppercase font-semibold py-2 px-10 rounded-lg hover:bg-white hover:text-indigo-600 transition"
                onClick={() => setIsActive(false)}
              >
                Sign In
              </button>
            </div>

            {/* Right Panel */}
            <div
              className={`absolute w-1/2 h-full flex flex-col items-center justify-center text-center px-8 right-0 transition-all duration-700 ease-in-out ${
                isActive ? "translate-x-[200%]" : "translate-x-0"
              }`}
            >
              <h1 className="text-2xl font-semibold mb-2">Hello, Friend!</h1>
              <p className="text-sm mb-4 text-gray-200">
                Register to Zebvo.AI to use all site features
              </p>
              <button
                className="bg-transparent border border-white text-white text-xs uppercase font-semibold py-2 px-10 rounded-lg hover:bg-white hover:text-indigo-600 transition"
                onClick={() => setIsActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
