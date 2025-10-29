import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import hero from "../assets/dashboard.png";
import {
  Database,
  Send,
  Scan,
  Code,
  FileAudio,
  Image,
  BarChart3,
  PenTool,
  FileText,
  Headphones,
  Wand2,
  Layout,
  Video,
  Mic,
  Zap,
  Globe,
} from "lucide-react";

const Hero = () => {
  const controls = useAnimation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Infinite marquee scroll
  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: { repeat: Infinity, duration: 25, ease: "linear" },
    });
  }, [controls]);

  const features = [
    { icon: <Code className="w-8 h-8" />, name: "Code" },
    { icon: <FileAudio className="w-8 h-8" />, name: "Audio" },
    { icon: <Image className="w-8 h-8" />, name: "Logo" },
    { icon: <BarChart3 className="w-8 h-8" />, name: "Data Visualization" },
    { icon: <PenTool className="w-8 h-8" />, name: "Image" },
    { icon: <FileText className="w-8 h-8" />, name: "Text" },
    { icon: <Headphones className="w-8 h-8" />, name: "Transcribe" },
    { icon: <Wand2 className="w-8 h-8" />, name: "Surprise Me" },
    { icon: <Layout className="w-8 h-8" />, name: "UI/UX" },
    { icon: <Video className="w-8 h-8" />, name: "Video Generation" },
    { icon: <Database className="w-8 h-8" />, name: "Analytics" },
    { icon: <Mic className="w-8 h-8" />, name: "Voice" },
    { icon: <Zap className="w-8 h-8" />, name: "Automation" },
    { icon: <Globe className="w-8 h-8" />, name: "Global Reach" },
  ];

  const allFeatures = [...features, ...features];

  return (
    <section className="relative bg-black text-white flex flex-col items-center justify-center min-h-screen px-6 text-center overflow-hidden">
      {/* === MOUSE FOLLOWER BLOB === */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-80 h-80 rounded-full blur-3xl z-0"
        style={{
         background: "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.5), rgba(37,99,235,0.25))",

        }}
        animate={{
          x: mousePos.x - 160,
          y: mousePos.y - 160,
          rotate: [0, 360],
        }}
        transition={{
          x: { type: "spring", stiffness: 60, damping: 20 },
          y: { type: "spring", stiffness: 60, damping: 20 },
          rotate: { repeat: Infinity, duration: 20, ease: "linear" },
        }}
      />

      {/* === MAIN CONTENT === */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mb-6 mt-30 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        The Future of creation starts with  <span className="text-indigo-500">Zebvo</span> Ai.
      </motion.h1>

      <motion.p
        className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        Unite the power of every leading AI: ChatGPT, Claude, Gemini, and more... to create, code, and design in one intelligent workspace.
      </motion.p>

   <motion.a
  href="#demo"
  className="bg-white text-black font-semibold py-3 px-8 rounded-4xl shadow-lg flex items-center gap-3 transition hover:scale-105 hover:shadow-xl relative z-10"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
>
  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-white text-lg">
    →
  </span>
  Try Zebvo.AI for free
</motion.a>


      <motion.img
        src={hero}
        alt="Hero"
        className="w-[80%] h-auto mx-auto rounded-lg object-contain mt-6 relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      />

      {/* === FEATURE HIGHLIGHTS === */}
      <div className="flex justify-center items-center gap-12 py-8 relative z-10">
        {[
          {
            icon: <Scan className="w-6 h-6" />,
            text: "Automate your screening process",
          },
          {
            icon: <Database className="w-6 h-6" />,
            text: "Real-time talent data",
          },
          {
            icon: <Send className="w-6 h-6" />,
            text: "Reach millions of developers",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.1,
              y: -4,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex items-center gap-3 text-gray-300 cursor-pointer"
          >
            <div className="bg-neutral-800 p-2 rounded-lg flex items-center justify-center">
              {item.icon}
            </div>
            <span className="font-medium text-white">{item.text}</span>
          </motion.div>
        ))}
      </div>

      {/* === FEATURES MARQUEE === */}
      <div className="bg-black py-16 w-full overflow-hidden relative z-10" id="features">
        <h2 className="text-center text-white text-3xl font-semibold mb-10">
          Features
        </h2>

        <motion.div
          animate={controls}
          className="flex items-center gap-6 whitespace-nowrap px-6"
        >
          {allFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.15,
           boxShadow: "0 0 30px rgba(255, 255, 255, 0.6)",

                background:
               "linear-gradient(145deg, rgba(99,102,241,0.35), rgba(37,99,235,0.25))",

              }}
              whileTap={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="flex flex-col items-center justify-center bg-neutral-900 rounded-2xl py-6 px-4 text-white hover:text-indigo-200 cursor-pointer min-w-[150px] transition-all duration-300"
            >
              <div className="mb-3">{feature.icon}</div>
              <p className="text-sm font-medium text-center">{feature.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
