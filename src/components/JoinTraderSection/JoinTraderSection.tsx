import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  TrendingUp,
  Users,
  ArrowRight,
  RefreshCw,
  Eye,
  Wallet,
} from "lucide-react";

const JoinTradersSection = () => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(2742.43);

  const words = ["Join", "3M+", "Traders"];

  // Auto-cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  // Animate balance changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBalance((prev) => prev + (Math.random() - 0.5) * 10);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Enhanced Mobile mockup component
  const MobileMockup = React.memo(() => {
    const accounts = [
      {
        id: 1,
        type: "Standard",
        balance: "1,000.25 USD",
        color: "from-blue-500 to-blue-600",
        icon: TrendingUp,
      },
      {
        id: 2,
        type: "Financial",
        balance: "120.50 USD",
        color: "from-green-500 to-green-600",
        icon: Users,
      },
      {
        id: 3,
        type: "Financial STP",
        balance: "750.50 USD",
        color: "from-purple-500 to-purple-600",
        icon: Wallet,
      },
    ];

    return (
      <motion.div
        className="relative w-64 sm:w-72 lg:w-80 h-[420px] sm:h-[480px] lg:h-[520px] rounded-[2rem] sm:rounded-[2.5rem] p-2 mx-auto shadow-2xl"
        style={{ backgroundColor: "var(--bg-primary)" }}
        // initial={{ opacity: 0, y: 50, rotateY: -15 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{
          rotateY: 5,
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
      >
        {/* Screen */}
        <div
          className="w-full h-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden relative backdrop-blur-md"
          style={{
            backgroundColor: "var(--bg-secondary)",
            border: "1px solid var(--border-primary)",
          }}
        >
          {/* Enhanced Status Bar */}
          <motion.div
            className="flex justify-between items-center px-4 sm:px-5 py-2 sm:py-3 backdrop-blur-md"
            style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
            // initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span
              className="text-xs sm:text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              9:41
            </span>
            <div className="flex space-x-1">
              <motion.div
                className="w-3 sm:w-4 h-1.5 sm:h-2 rounded-sm bg-green-400"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="w-1 h-2 sm:h-3 rounded-full bg-white opacity-80" />
              <div className="w-4 sm:w-5 h-2 sm:h-3 rounded-sm bg-white" />
            </div>
          </motion.div>

          {/* Enhanced Header */}
          <motion.div
            className="px-4 sm:px-5 py-3 sm:py-4"
            style={{
              borderBottomColor: "var(--border-secondary)",
              borderBottomWidth: "1px",
            }}
            // initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <motion.div
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-lg flex items-center justify-center shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--text-accent-orange), var(--text-accent-blue))",
                  }}
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Smartphone size={12} className="text-white" />
                </motion.div>
                <h1
                  className="text-base sm:text-lg font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Hub
                </h1>
              </div>
              <div className="flex space-x-1 sm:space-x-2">
                <motion.button
                  className="text-xs px-2 sm:px-3 py-1 rounded-full transition-all duration-200 border"
                  style={{
                    color: "var(--text-secondary)",
                    borderColor: "var(--border-secondary)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demo
                </motion.button>
                <motion.button
                  className="text-xs px-2 sm:px-3 py-1 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: "var(--text-accent-orange)",
                    color: "var(--text-primary)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Real
                </motion.button>
              </div>
            </div>

            {/* Enhanced Total Assets */}
            <motion.div
              className="rounded-lg p-3 sm:p-4 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, var(--bg-accent), var(--bg-secondary))",
                border: "1px solid var(--border-secondary)",
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated background pattern */}
              <motion.div
                className="absolute top-0 right-0 w-16 h-16 opacity-10"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp
                  size={64}
                  style={{ color: "var(--text-accent-orange)" }}
                />
              </motion.div>

              <div className="flex justify-between items-center relative z-10">
                <div>
                  <span
                    className="text-xs flex items-center space-x-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <Wallet size={12} />
                    <span>Total assets</span>
                  </span>
                  <motion.div
                    className="text-lg sm:text-xl font-bold flex items-center mt-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span>USD {currentBalance.toFixed(2)}</span>
                    <motion.div
                      className="ml-2"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <RefreshCw
                        size={14}
                        style={{ color: "var(--text-accent-blue)" }}
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <motion.span
                  className="text-xs flex items-center space-x-1 cursor-pointer"
                  style={{ color: "var(--text-secondary)" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Eye size={12} />
                  <span>View details</span>
                  <ArrowRight size={10} />
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Trading Accounts */}
          <motion.div
            className="px-4 sm:px-5 py-3 sm:py-4"
            // initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h3
              className="font-semibold mb-3 text-sm flex items-center space-x-2"
              style={{ color: "var(--text-primary)" }}
            >
              <Users size={16} />
              <span>My trading accounts</span>
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {accounts.map((account, index) => {
                const IconComponent = account.icon;
                return (
                  <motion.div
                    key={account.id}
                    className="rounded-xl p-3 flex items-center space-x-3 transition-all duration-200 backdrop-blur-sm"
                    style={{ backgroundColor: "var(--bg-accent)" }}
                    // initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <motion.div
                      className={`w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br ${account.color} rounded-lg flex items-center justify-center shadow-lg`}
                      whileHover={{ rotate: 5 }}
                    >
                      <IconComponent size={16} className="text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <div
                        className="font-medium text-xs sm:text-sm"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {account.type}
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {account.balance}
                      </div>
                    </div>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight
                        size={14}
                        style={{ color: "var(--text-secondary)" }}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Enhanced Bottom Navigation */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 px-4 sm:px-5 py-2 sm:py-3 backdrop-blur-md"
            style={{
              backgroundColor: "rgba(0,0,0,0.1)",
              borderTopColor: "var(--border-secondary)",
              borderTopWidth: "1px",
            }}
            // initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex justify-around">
              {["Hub", "CFDs", "Options", "Wallets", "Account"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    className="flex flex-col items-center space-y-1 cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="w-4 sm:w-5 h-4 sm:h-5 rounded"
                      style={{
                        backgroundColor:
                          index === 0
                            ? "var(--text-accent-orange)"
                            : "var(--text-secondary)",
                      }}
                      animate={index === 0 ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span
                      className="text-xs"
                      style={{
                        color:
                          index === 0
                            ? "var(--text-accent-orange)"
                            : "var(--text-secondary)",
                      }}
                    >
                      {item}
                    </span>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Screen reflection effect */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent opacity-5 pointer-events-none"
            animate={{ opacity: [0.05, 0.02, 0.05] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        {/* Device shadow */}
        <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl pointer-events-none" />
      </motion.div>
    );
  });

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--bg-primary), var(--bg-accent))`,
      }}
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl bg-gradient-to-br from-blue-400 to-purple-400"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-xl bg-gradient-to-br from-orange-400 to-pink-400"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20"
            style={{
              backgroundColor: "var(--text-accent-orange)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
          {/* Left Side - Enhanced Text */}
          <motion.div
            className="space-y-4 sm:space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center lg:text-left">
              {/* Enhanced Title with staggered animation */}
              <div className="space-y-1 sm:space-y-2">
                <AnimatePresence mode="wait">
                  {words.map((word, index) => (
                    <motion.div key={word} className="overflow-hidden">
                      <motion.h1
                        className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-none transition-all duration-500`}
                        style={{
                          color:
                            activeWordIndex === index
                              ? "var(--text-accent-orange)"
                              : "var(--text-primary)",
                          textShadow:
                            activeWordIndex === index
                              ? "0 4px 20px rgba(255, 140, 66, 0.3)"
                              : "0 2px 10px rgba(255, 255, 255, 0.1)",
                        }}
                        animate={
                          activeWordIndex === index
                            ? {
                                scale: [1, 1.05, 1],
                                rotateX: [0, 5, 0],
                              }
                            : {}
                        }
                        transition={{ duration: 0.6 }}
                      >
                        {word}
                      </motion.h1>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Enhanced Subtitle */}
              <motion.p
                className="text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 max-w-lg mx-auto lg:mx-0 opacity-90"
                style={{ color: "var(--text-secondary)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.9, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Trade with confidence on the world's leading platform
              </motion.p>

              {/* Stats section */}
              <motion.div
                className="grid grid-cols-3 gap-4 mt-6 sm:mt-8 max-w-md mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {[
                  { number: "3M+", label: "Active traders", icon: Users },
                  { number: "24/7", label: "Support", icon: Smartphone },
                  { number: "100+", label: "Markets", icon: TrendingUp },
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      className="text-center p-3 rounded-lg backdrop-blur-md"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <IconComponent
                        size={20}
                        className="mx-auto mb-2"
                        style={{ color: "var(--text-accent-orange)" }}
                      />
                      <div
                        className="font-bold text-sm"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {stat.number}
                      </div>
                      <div
                        className="text-xs opacity-80"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {stat.label}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Enhanced Mobile Mockup */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <MobileMockup />
          </div>
        </div>
      </div>

      {/* Enhanced CTA Button */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          className="group px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 flex items-center space-x-2 shadow-2xl"
          style={{
            backgroundColor: "var(--text-accent-orange)",
            color: "var(--text-primary)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Open account</span>
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight size={16} />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default JoinTradersSection;
