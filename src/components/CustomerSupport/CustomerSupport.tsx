import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomerSupportSection = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isLooping, setIsLooping] = useState(true);

  // Chat conversation data
  const chatMessages = [
    {
      id: 1,
      type: "agent",
      text: "Hi, my name is Tony. How can I help you today?",
      delay: 1000,
    },
    {
      id: 2,
      type: "user",
      text: "Hi, I can't log in to my account. How do I reset my password?",
      delay: 2500,
    },
    {
      id: 3,
      type: "agent",
      text: "You'll just need to click \"Forgot Password\" on the login page, and we'll send a password reset link to your email.",
      delay: 2000,
    },
    {
      id: 4,
      type: "user",
      text: "Okay, I'll do that. Thanks!",
      delay: 1500,
    },
  ];

  // Animation loop logic
  useEffect(() => {
    if (!isLooping) return;

    const timer = setTimeout(() => {
      if (currentMessageIndex < chatMessages.length - 1) {
        setCurrentMessageIndex((prev) => prev + 1);
      } else {
        // Reset conversation after a pause
        setTimeout(() => {
          setCurrentMessageIndex(0);
        }, 3000);
      }
    }, chatMessages[currentMessageIndex]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [currentMessageIndex, isLooping, chatMessages]);

  // Typing indicator component
  const TypingIndicator = () => (
    <motion.div
      className="flex space-x-1 p-3 bg-red-500 text-white rounded-2xl rounded-bl-sm max-w-xs"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <div className="flex space-x-1">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-6xl font-black text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get answers when you need
            </motion.h2>

            <motion.p
              className="text-gray-600 text-lg leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We don't have opening or closing hours. That means you can speak
              to our Support whenever you need, wherever you are.
            </motion.p>

            {/* Features */}
            <motion.div
              className="grid grid-cols-2 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { icon: "🕐", label: "24/7 Support" },
                { icon: "💬", label: "Live Chat" },
                { icon: "📱", label: "Multi-platform" },
                { icon: "🌍", label: "Global Team" },
              ].map((feature, _index) => (
                <motion.div
                  key={feature.label}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#f8fafc",
                  }}
                >
                  <div className="text-2xl">{feature.icon}</div>
                  <div className="font-medium text-gray-800">
                    {feature.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Chat Interface */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Background Person Image */}
            <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden">
              {/* Simulated person */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-300 via-transparent to-gray-100">
                {/* Person representation */}
                <div className="absolute bottom-0 right-8 w-32 h-40 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 rounded-t-full opacity-80"></div>
                <div className="absolute bottom-32 right-12 w-24 h-24 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full shadow-inner">
                  {/* Face features */}
                  <div className="absolute top-6 left-6 w-2 h-2 bg-gray-700 rounded-full"></div>
                  <div className="absolute top-6 right-6 w-2 h-2 bg-gray-700 rounded-full"></div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-gray-700 rounded-b-full"></div>
                </div>

                {/* Background elements */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-green-200 rounded-lg opacity-60"></div>
                <div className="absolute top-16 right-16 w-12 h-12 bg-yellow-200 rounded-full opacity-60"></div>
              </div>

              {/* Chat Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 space-y-3">
                <AnimatePresence>
                  {chatMessages
                    .slice(0, currentMessageIndex + 1)
                    .map((message, _index) => (
                      <motion.div
                        key={`${message.id}-${Math.floor(
                          currentMessageIndex / chatMessages.length
                        )}`}
                        className={`flex ${
                          message.type === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.8 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      >
                        <div
                          className={`max-w-xs p-3 rounded-2xl shadow-lg ${
                            message.type === "agent"
                              ? "bg-red-500 text-white rounded-bl-sm"
                              : "bg-gray-100 text-gray-900 rounded-br-sm"
                          }`}
                        >
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {message.text}
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}

                  {/* Show typing indicator when agent is about to respond */}
                  {currentMessageIndex < chatMessages.length - 1 &&
                    chatMessages[currentMessageIndex + 1]?.type === "agent" &&
                    currentMessageIndex >= 0 && (
                      <motion.div
                        className="flex justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1 }}
                      >
                        <TypingIndicator />
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>

              {/* Online status indicator */}
              <motion.div
                className="absolute top-4 left-4 flex items-center space-x-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <motion.div
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
                <span>Tony is online</span>
              </motion.div>

              {/* Floating help icons */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 180, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut",
                  }}
                >
                  {["💬", "❓", "💡", "📞"][i]}
                </motion.div>
              ))}
            </div>

            {/* Chat controls */}
            <motion.div
              className="absolute bottom-4 right-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => setIsLooping(!isLooping)}
                className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors"
              >
                {isLooping ? "⏸️" : "▶️"}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupportSection;
