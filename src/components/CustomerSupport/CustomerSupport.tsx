import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MessageCircle, Smartphone, Globe, User, Circle } from "lucide-react";

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
      className="flex space-x-1 p-3 rounded-2xl rounded-bl-sm max-w-xs backdrop-blur-sm"
      style={{
        backgroundColor: "var(--text-accent-orange)",
        color: "var(--text-primary)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 10 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className="flex space-x-1">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--text-primary)" }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );

  // Features data with lucide icons
  const features = [
    { 
      icon: Clock, 
      label: "24/7 Support",
      description: "Always available",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: MessageCircle, 
      label: "Live Chat",
      description: "Instant responses",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      icon: Smartphone, 
      label: "Multi-platform",
      description: "Any device",
      gradient: "from-purple-500 to-violet-500"
    },
    { 
      icon: Globe, 
      label: "Global Team",
      description: "Worldwide coverage",
      gradient: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 overflow-hidden relative"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl opacity-20 bg-gradient-to-br from-blue-400 to-purple-400"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-xl opacity-20 bg-gradient-to-br from-orange-400 to-pink-400"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight"
              style={{ color: "var(--text-primary)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get answers when you need
            </motion.h2>

            <motion.p
              className="text-sm sm:text-base leading-relaxed max-w-lg"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We don't have opening or closing hours. That means you can speak
              to our Support whenever you need, wherever you are.
            </motion.p>

            {/* Enhanced Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 lg:pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    className="group relative p-4 rounded-xl transition-all duration-300 overflow-hidden"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-secondary)",
                    }}
                    whileHover={{
                      scale: 1.03,
                      y: -2,
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    {/* Gradient background on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />
                    
                    <div className="flex items-center space-x-3 relative z-10">
                      <motion.div
                        className={`p-2 rounded-lg bg-gradient-to-r ${feature.gradient}`}
                        whileHover={{ rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent 
                          size={18} 
                          className="text-white"
                        />
                      </motion.div>
                      <div className="flex-1">
                        <div
                          className="font-semibold text-sm"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {feature.label}
                        </div>
                        <div
                          className="text-xs opacity-75"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {feature.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Call-to-action */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="group flex items-center space-x-2 px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300"
                style={{
                  backgroundColor: "var(--text-accent-orange)",
                  color: "var(--text-primary)",
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={18} />
                <span>Start live chat</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Enhanced Chat Interface */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Chat Interface */}
            <div
              className="relative w-full h-[380px] sm:h-[420px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background: `linear-gradient(135deg, var(--bg-secondary), var(--bg-accent))`,
                border: "1px solid var(--border-primary)",
              }}
            >
              {/* Header */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-12 sm:h-14 flex items-center justify-between px-4 sm:px-6 backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderBottom: "1px solid var(--border-secondary)",
                }}
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <User size={16} className="text-white" />
                  </motion.div>
                  <div>
                    <div 
                      className="font-medium text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Support Team
                    </div>
                    <div className="flex items-center space-x-1">
                      <Circle 
                        size={8} 
                        className="fill-green-400 text-green-400"
                      />
                      <span 
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Online
                      </span>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  className="flex space-x-1"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </motion.div>
              </motion.div>

              {/* Chat Messages Container */}
              <div className="absolute inset-0 pt-12 sm:pt-14 flex flex-col justify-end p-4 sm:p-6 space-y-2 sm:space-y-3 max-h-full overflow-hidden">
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
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                      >
                        <motion.div
                          className={`max-w-[280px] sm:max-w-xs p-3 rounded-2xl shadow-lg text-sm backdrop-blur-sm ${
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
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                          }}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {message.text}
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    ))}

                  {/* Enhanced typing indicator */}
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


              {/* Subtle screen reflection effect */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent opacity-5 pointer-events-none"
                animate={{
                  opacity: [0.05, 0.02, 0.05],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupportSection;