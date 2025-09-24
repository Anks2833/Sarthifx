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
    <section
      className="py-12 sm:py-16 lg:py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3"
            style={{ color: "var(--text-primary)" }}
          >
            Trade with confidence
          </h2>
          <p
            className="text-sm sm:text-base"
            style={{ color: "var(--text-secondary)" }}
          >
            For over 25 years, Sarthifx Group has been a trusted partner of
            traders worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Awards */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {leftAwards.map((award, index) => (
              <motion.div
                key={index}
                className="relative text-center p-4 lg:p-6 rounded-lg"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-primary)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Left Wheat SVG */}
                <div className="absolute left-2 lg:left-0 top-1/2 transform -translate-y-1/2 w-6 h-8 lg:w-8 lg:h-12">
                  <img
                    src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df573bf331c84b6c6992_right%20wheat.svg"
                    alt="Award decoration"
                    className="w-full h-full object-contain opacity-60"
                  />
                </div>

                {/* Right Wheat SVG */}
                <div className="absolute right-2 lg:right-0 top-1/2 transform -translate-y-1/2 w-6 h-8 lg:w-8 lg:h-12">
                  <img
                    src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df573bf331c84b6c6991_left%20wheat.svg"
                    alt="Award decoration"
                    className="w-full h-full object-contain opacity-60"
                  />
                </div>

                <h3
                  className="font-bold mb-2 text-xs sm:text-sm lg:text-base leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {award.title}
                </h3>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {award.organization}
                  <br />
                  <span style={{ color: "var(--text-accent-orange)" }}>
                    {award.year}
                  </span>
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Center Auto-Scrolling Stats */}
          <motion.div
            className="text-center relative min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div
              className="relative p-6 lg:p-8 rounded-2xl"
              style={{
                backgroundColor: "var(--bg-secondary)",
                border: "2px solid var(--border-primary)",
              }}
            >
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
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 tracking-tight"
                    style={{ color: "var(--text-accent-blue)" }}
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(74,158,255,0)",
                        "0 2px 8px rgba(74,158,255,0.3)",
                        "0 0 0px rgba(74,158,255,0)",
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
                    className="text-sm sm:text-base lg:text-lg font-medium"
                    style={{ color: "var(--text-secondary)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    {stats[currentStatIndex].label}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right Awards */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {rightAwards.map((award, index) => (
              <motion.div
                key={index}
                className="relative text-center p-4 lg:p-6 rounded-lg"
                style={{
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px solid var(--border-primary)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Left Wheat SVG */}
                <div className="absolute left-2 lg:left-0 top-1/2 transform -translate-y-1/2 w-6 h-8 lg:w-8 lg:h-12">
                  <img
                    src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df573bf331c84b6c6992_right%20wheat.svg"
                    alt="Award decoration"
                    className="w-full h-full object-contain opacity-60"
                  />
                </div>

                {/* Right Wheat SVG */}
                <div className="absolute right-2 lg:right-0 top-1/2 transform -translate-y-1/2 w-6 h-8 lg:w-8 lg:h-12">
                  <img
                    src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df573bf331c84b6c6991_left%20wheat.svg"
                    alt="Award decoration"
                    className="w-full h-full object-contain opacity-60"
                  />
                </div>

                <h3
                  className="font-bold mb-2 text-xs sm:text-sm lg:text-base leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {award.title}
                </h3>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {award.organization}
                  <br />
                  <span style={{ color: "var(--text-accent-orange)" }}>
                    {award.year}
                  </span>
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
