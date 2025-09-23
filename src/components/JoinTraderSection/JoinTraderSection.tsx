import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const JoinTradersSection = () => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  const words = ["Join", "3M+", "Traders"];

  // Auto-cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % words.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [words.length]);

  // Mobile mockup component
  const MobileMockup = () => {
    const accounts = [
      { id: 1, type: "Standard", balance: "1000.25 USD", color: "bg-blue-500" },
      {
        id: 2,
        type: "Financial",
        balance: "120.50 USD",
        color: "bg-green-500",
      },
      {
        id: 3,
        type: "Financial STP",
        balance: "750.50 USD",
        color: "bg-purple-500",
      },
    ];

    return (
      <motion.div
        className="relative w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl"
        initial={{ opacity: 0, y: 50, rotateY: 15 }}
        animate={{
          opacity: 1,
          y: 0,
          rotateY: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          y: -10,
          rotateY: 5,
          transition: { duration: 0.3 },
        }}
      >
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-6 py-3 bg-white">
            <span className="text-sm font-semibold">9:41</span>
            <div className="flex space-x-1">
              <div className="w-4 h-2 bg-black rounded-sm"></div>
              <div className="w-1 h-3 bg-black rounded-full"></div>
              <div className="w-6 h-3 bg-black rounded-sm"></div>
            </div>
          </div>

          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">D</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Hub</h1>
              </div>
              <div className="flex space-x-2">
                <button className="text-sm text-gray-600 px-3 py-1 rounded-full border border-gray-300">
                  Demo
                </button>
                <button className="text-sm text-white px-3 py-1 rounded-full bg-red-500">
                  Real
                </button>
              </div>
            </div>

            {/* Total Assets */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-gray-600 text-sm">Total assets</span>
                  <motion.div
                    className="text-2xl font-bold text-gray-900 flex items-center"
                    animate={{
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    USD 2742.43
                    <motion.span
                      className="ml-2 text-blue-500"
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ↻
                    </motion.span>
                  </motion.div>
                </div>
                <span className="text-gray-400 text-sm">View details →</span>
              </div>
            </div>
          </div>

          {/* My Trading Accounts */}
          <div className="px-6 py-4">
            <h3 className="text-gray-900 font-semibold mb-4">
              My trading accounts
            </h3>
            <div className="space-y-3">
              {accounts.map((account, index) => (
                <motion.div
                  key={account.id}
                  className="bg-gray-50 rounded-xl p-4 flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "#f8fafc",
                  }}
                >
                  <div
                    className={`w-10 h-10 ${account.color} rounded-lg flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-sm">
                      {account.type.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm">
                      {account.type}
                    </div>
                    <motion.div
                      className="text-gray-600 text-sm"
                      animate={{
                        color: ["#6b7280", "#16a34a", "#6b7280"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {account.balance}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3">
            <div className="flex justify-around">
              {["Hub", "CFDs", "Options", "Wallets", "Account"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    className="flex flex-col items-center space-y-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className={`w-6 h-6 rounded ${
                        index === 0 ? "bg-red-500" : "bg-gray-300"
                      }`}
                    ></div>
                    <span
                      className={`text-xs ${
                        index === 0 ? "text-red-500" : "text-gray-400"
                      }`}
                    >
                      {item}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Screen Reflection */}
        <motion.div
          className="absolute inset-2 bg-gradient-to-tr from-transparent via-white to-transparent opacity-5 rounded-[2.5rem] pointer-events-none"
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    );
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-500 to-red-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* Left Side - Animated Text */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center lg:text-left">
              {/* Animated Title */}
              <div className="space-y-2">
                {words.map((word, index) => (
                  <motion.div
                    key={word}
                    className="overflow-hidden"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + index * 0.2,
                      type: "spring",
                      stiffness: 100,
                    }}
                  >
                    <motion.h1
                      className={`text-8xl lg:text-9xl font-black leading-none transition-colors duration-500 ${
                        activeWordIndex === index ? "text-black" : "text-white"
                      }`}
                      animate={{
                        scale: activeWordIndex === index ? 1.05 : 1,
                        textShadow:
                          activeWordIndex === index
                            ? "0 4px 20px rgba(0,0,0,0.3)"
                            : "0 2px 10px rgba(255,255,255,0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {word}
                    </motion.h1>
                  </motion.div>
                ))}
              </div>

              {/* Subtitle */}
              <motion.p
                className="text-white/80 text-xl lg:text-2xl mt-8 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Trade with confidence on the world's leading platform
              </motion.p>
            </div>
          </motion.div>

          {/* Right Side - Mobile Mockup */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <MobileMockup />
          </motion.div>
        </div>
      </div>

      {/* CTA Button */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.button
          className="bg-black text-white px-12 py-4 rounded-full text-xl font-semibold shadow-2xl"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            style={{
              background: "linear-gradient(45deg, #fff, #ff6b6b, #fff)",
              backgroundSize: "200% 100%",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            Open account
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Floating Elements */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default JoinTradersSection;
