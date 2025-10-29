import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes Zebvo different?",
    answer:
      "Zebvo stands out because it brings every possible use case of AI onto a single, unified platform. From text, image, and code generation to automation tools and analytics, everything is accessible in one place. Plus, our massive and ever-growing library of AI tools ensures you’ll always have what you need to create, build, and innovate faster.",
  },
  {
    question: "Can I use my own API keys?",
    answer:
      "Yes, absolutely. Zebvo allows you to integrate and use your own API keys for a more personalized and flexible experience. This helps you manage costs, control outputs, and experiment with your preferred AI providers.",
  },
  {
    question: "Who can use Zebvo?",
    answer:
      "Anyone! Whether you're a developer, designer, entrepreneur, content creator, or a complete beginner, Zebvo’s intuitive interface and broad range of tools are built to suit every skill level and goal.",
  },
  {
    question: "How fast are results?",
    answer:
      "Zebvo delivers results almost instantly, thanks to optimized APIs and smart caching. You can generate, test, and deploy within seconds — no waiting, just seamless productivity.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked <br /> Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-[#1f1a2e] rounded-2xl overflow-hidden bg-[#0a0a0a]/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left px-6 py-5 text-lg font-semibold"
              >
                {faq.question}
                <span className="text-purple-400">
                  {openIndex === index ? <Minus size={22} /> : <Plus size={22} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="px-6 pb-5 text-gray-300 text-base text-justify"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
