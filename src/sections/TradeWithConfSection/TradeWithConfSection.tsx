import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const TradeWithConfidenceSection = () => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  const stats = [
    {
      value: "168M+",
      label: "Monthly deals",
    },
    {
      value: "3M+",
      label: "Customers worldwide",
    },
    {
      value: "$650B+",
      label: "Monthly volume",
    },
    {
      value: "1999",
      label: "Established since",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [stats.length]);

  const leftAwards = [
    {
      title: "Best Trading Experience - Global",
      organization: "UF Awards",
      year: "2025",
    },
    {
      title: "Broker of the Year - Global",
      organization: "Finance Magnates",
      year: "2024",
    },
  ];

  const rightAwards = [
    {
      title: "Most Trusted Broker",
      organization: "UF Awards",
      year: "2024",
    },
    {
      title: "Best Customer Service - Global",
      organization: "Global Forex Awards",
      year: "2024",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Trade with confidence
          </h2>
          <p className="text-gray-600 text-sm">
            For over 25 years, Sarthifx Group has been a trusted partner of
            traders worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Awards */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {leftAwards.map((award, index) => (
              <motion.div
                key={index}
                className="relative text-center p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Left Wheat SVG */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-20">
                  <img
                    src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df573bf331c84b6c6992_right%20wheat.svg"
                    alt="Award decoration"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Right Wheat SVG */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-20">
                  <img
                    src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df573bf331c84b6c6991_left%20wheat.svg"
                    alt="Award decoration"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="font-bold text-gray-900 mb-3 text-md leading-tight">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {award.organization}
                  <br />
                  {award.year}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Auto-Scrolling Stats */}
          <motion.div
            className="text-center relative min-h-[400px] flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStatIndex}
                  initial={{
                    opacity: 0,
                    y: 50,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -50,
                    scale: 0.8,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="text-center"
                >
                  <motion.div
                    className="text-8xl font-black text-gray-900 mb-4 tracking-tight"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(0,0,0,0)",
                        "0 2px 8px rgba(0,0,0,0.1)",
                        "0 0 0px rgba(0,0,0,0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    {stats[currentStatIndex].value}
                  </motion.div>
                  <motion.p
                    className="text-gray-600 text-xl font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {stats[currentStatIndex].label}
                  </motion.p>
                </motion.div>
              </AnimatePresence>

              {/* Animated background elements */}
              <motion.div
                className="absolute -top-10 -left-10 w-4 h-4 bg-blue-500 rounded-full opacity-20"
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-3 h-3 bg-red-500 rounded-full opacity-30"
                animate={{
                  y: [0, 10, 0],
                  x: [0, -5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>

          </motion.div>

          {/* Right Awards */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {rightAwards.map((award, index) => (
              <motion.div
                key={index}
                className="relative text-center p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Left Wheat SVG */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-20">
                  <img
                    src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df573bf331c84b6c6992_right%20wheat.svg"
                    alt="Award decoration"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Right Wheat SVG */}
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-20">
                  <img
                    src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df573bf331c84b6c6991_left%20wheat.svg"
                    alt="Award decoration"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {award.organization}
                  <br />
                  {award.year}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TradeWithConfidenceSection;
