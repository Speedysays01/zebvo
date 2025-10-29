import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic Plan",
    price: "$29.00",
    period: "/month",
    features: [
      "Access to core AI tools",
      "Up to 3 users",
      "Basic analytics",
      "Standard support",
      "Monthly usage reports",
      "Limited data storage (10GB)",
    ],
  },
  {
    name: "Business Plan",
    price: "$59.00",
    period: "/month",
    features: [
      "All Basic features",
      "Up to 10 users",
      "Advanced analytics dashboard",
      "Priority support",
      "Custom AI workflows",
      "Increased storage (100GB)",
    ],
  },
  {
    name: "Enterprise Plan",
    price: "$99.00",
    period: "/month",
    features: [
      "All Business features",
      "Unlimited users",
      "Full analytics suite",
      "24/7 dedicated support",
      "API access & integration",
      "Unlimited data storage",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Pricing Plans
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Choose the perfect plan to scale your AI capabilities — from individuals to large enterprises.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            className="bg-gradient-to-b from-[#0a0a0a] to-[#141026] border border-indigo-900/30 rounded-3xl p-8 flex flex-col justify-between shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-3">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 ml-1">{plan.period}</span>
              </div>

              <ul className="space-y-3 text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="bg-indigo-600/20 text-indigo-400 p-1 rounded-full">
                      <Check size={16} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
<motion.a
  href="#buy"
  className="mt-8 w-[60%] flex items-center justify-center gap-3 bg-white text-black font-semibold py-3 px-4 rounded-2xl hover:scale-105 transition text-sm md:text-base"
  whileHover={{ y: -3 }}
>
  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500 text-white text-lg">
    →
  </span>
  Buy Now
</motion.a>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
