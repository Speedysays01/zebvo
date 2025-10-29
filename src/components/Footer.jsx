import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
   <footer className="bg-black text-white relative z-10 isolate overflow-hidden py-16 px-6 md:px-20 border-t border-gray-800">

      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 bg-black"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* --- Left Section --- */}
        <div>
          <div className="flex items-center gap-2 mb-4">
          
            <h2 className="text-xl font-semibold">Zebvo AI</h2>
          </div>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Unite the power of every leading AI — ChatGPT, Claude, Gemini, and
            more — to create, code, and design in one intelligent workspace.
          </p>

          <h3 className="text-lg font-semibold mb-2">Contact us</h3>
          <p className="text-gray-400 text-sm">+91 1234567890</p>
          <p className="text-gray-400 text-sm">hello@zebvo.ai</p>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* --- Resources --- */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Blog Details</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* --- Other Resources --- */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">404</li>
          </ul>
        </div>
      </motion.div>

      {/* --- Bottom Bar --- */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          Copyright © {new Date().getFullYear()} <span className="text-white">Zebvo AI</span>. All Rights Reserved.
        </p>

        <div className="flex items-center gap-4">
          <span className="text-gray-400">Follow</span>
          <div className="flex gap-3">
            <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
