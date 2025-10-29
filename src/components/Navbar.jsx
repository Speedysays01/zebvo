import { useState } from "react";
import { X, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Get a demo", href: "#founder" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-lg border-b border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-white text-2xl font-bold font-sans tracking-tight">
              Zebvo.<span className="text-indigo-500">AI</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-sans font-medium hover:text-indigo-400 transition"
              >
                {link.name}
              </a>
            ))}

            {/* Login / Signup Button */}
            <button
              onClick={() => navigate("/auth")}
              className="bg-white/10 backdrop-blur-md text-white font-medium px-5 py-2 rounded-lg border border-white/20 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300"
            >
              Login / Signup
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden mr-4">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-md bg-white/10 backdrop-blur-md hover:bg-indigo-500/40 transition"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative w-64 bg-black/40 backdrop-blur-2xl border-r border-white/10 p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
            <button
              className="absolute top-4 right-4 bg-white/10 p-2 rounded-lg hover:bg-indigo-500/40 transition"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>

            <div className="mt-10 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-sans text-white hover:text-indigo-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              {/* Login / Signup Button in Mobile Menu */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/auth");
                }}
                className="w-full bg-white/10 backdrop-blur-md text-white font-medium px-5 py-2 rounded-lg border border-white/20 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300"
              >
                Login / Signup
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
