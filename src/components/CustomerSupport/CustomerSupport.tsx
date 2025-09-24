import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CustomerSupportSection = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isLooping, _setIsLooping] = useState(true);

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
      className="flex space-x-1 p-3 rounded-2xl rounded-bl-sm max-w-xs"
      style={{
        backgroundColor: "var(--text-accent-orange)",
        color: "var(--text-primary)",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <div className="flex space-x-1">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--text-primary)" }}
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
    <section
      className="py-12 sm:py-16 lg:py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight"
              style={{ color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get answers when you need
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg leading-relaxed max-w-lg"
              style={{ color: "var(--text-secondary)" }}
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
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 lg:pt-8"
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
                  className="flex items-center space-x-3 p-3 sm:p-4 rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-secondary)",
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                >
                  <div className="text-xl sm:text-2xl">{feature.icon}</div>
                  <div
                    className="font-medium text-sm sm:text-base"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {feature.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Chat Interface */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Background Chat Interface */}
            <div
              className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, var(--bg-secondary), var(--bg-accent))`,
              }}
            >
              {/* Background Design Elements */}
              <div className="absolute inset-0">
                {/* Person representation */}
                <div
                  className="absolute bottom-0 right-4 sm:right-8 w-24 sm:w-32 h-32 sm:h-40 rounded-t-full opacity-80"
                  style={{
                    background: `linear-gradient(to top, var(--text-accent-blue), var(--text-accent-orange))`,
                  }}
                ></div>
                <div
                  className="absolute bottom-24 sm:bottom-32 right-8 sm:right-12 w-16 sm:w-24 h-16 sm:h-24 rounded-full shadow-inner"
                  style={{ backgroundColor: "var(--border-primary)" }}
                >
                  {/* Face features */}
                  <div
                    className="absolute top-4 sm:top-6 left-4 sm:left-6 w-2 h-2 rounded-full"
                    style={{ backgroundColor: "var(--bg-primary)" }}
                  ></div>
                  <div
                    className="absolute top-4 sm:top-6 right-4 sm:right-6 w-2 h-2 rounded-full"
                    style={{ backgroundColor: "var(--bg-primary)" }}
                  ></div>
                  <div
                    className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-1 sm:h-2 border-b-2 rounded-b-full"
                    style={{ borderColor: "var(--bg-primary)" }}
                  ></div>
                </div>

                {/* Background decorative elements */}
                <div
                  className="absolute top-6 sm:top-8 left-6 sm:left-8 w-12 sm:w-16 h-12 sm:h-16 rounded-lg opacity-60"
                  style={{ backgroundColor: "var(--text-accent-blue)" }}
                ></div>
                <div
                  className="absolute top-12 sm:top-16 right-12 sm:right-16 w-8 sm:w-12 h-8 sm:h-12 rounded-full opacity-60"
                  style={{ backgroundColor: "var(--text-accent-orange)" }}
                ></div>
              </div>

              {/* Chat Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 space-y-2 sm:space-y-3">
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
                          className={`max-w-xs p-3 rounded-2xl shadow-lg text-sm sm:text-base ${
                            message.type === "agent"
                              ? "rounded-bl-sm"
                              : "rounded-br-sm"
                          }`}
                          style={{
                            backgroundColor:
                              message.type === "agent"
                                ? "var(--text-accent-orange)"
                                : "var(--bg-primary)",
                            color: "var(--text-primary)",
                            border:
                              message.type === "user"
                                ? "1px solid var(--border-secondary)"
                                : "none",
                          }}
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
                className="absolute top-3 sm:top-4 left-3 sm:left-4 flex items-center space-x-2 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                style={{
                  backgroundColor: "var(--text-accent-blue)",
                  color: "var(--text-primary)",
                }}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--text-primary)" }}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupportSection;
