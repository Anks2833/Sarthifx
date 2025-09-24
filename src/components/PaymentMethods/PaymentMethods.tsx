import { motion } from "framer-motion";
import { FaArrowRight, FaEthereum } from "react-icons/fa";
import { SiVisa, SiMastercard, SiBinance } from "react-icons/si";
import type { ReactNode } from "react";

// Type definitions
interface PaymentMethod {
  name: string;
  color: string;
  textColor: string;
  icon: string | ReactNode;
}

interface PaymentCardProps {
  method: PaymentMethod;
  index: number;
}

const PaymentMethodsSection = () => {
  // Payment methods data with colors and logos
  const paymentMethods: PaymentMethod[] = [
    {
      name: "VISA",
      color: "bg-blue-600",
      textColor: "text-white",
      icon: <SiVisa size={18} />,
    },
    {
      name: "AstroPay",
      color: "bg-orange-500",
      textColor: "text-white",
      icon: "💳",
    },
    {
      name: "MTN",
      color: "bg-yellow-500",
      textColor: "text-black",
      icon: "📱",
    },
    {
      name: "BitcoinCash",
      color: "bg-green-500",
      textColor: "text-white",
      icon: "₿",
    },
    {
      name: "Jetonbank",
      color: "bg-gray-800",
      textColor: "text-white",
      icon: "🏦",
    },
    {
      name: "vodafone",
      color: "bg-red-600",
      textColor: "text-white",
      icon: "📶",
    },
    {
      name: "DOGECOIN",
      color: "bg-yellow-400",
      textColor: "text-black",
      icon: "🐕",
    },
    {
      name: "BINANCE PAY",
      color: "bg-yellow-400",
      textColor: "text-black",
      icon: <SiBinance size={16} />,
    },
    {
      name: "maestro",
      color: "bg-blue-500",
      textColor: "text-white",
      icon: <SiMastercard size={16} />,
    },
    { name: "TRON", color: "bg-red-500", textColor: "text-white", icon: "⚡" },
    {
      name: "NETELLER",
      color: "bg-green-600",
      textColor: "text-white",
      icon: "💰",
    },
    {
      name: "mastercard",
      color: "bg-red-500",
      textColor: "text-white",
      icon: <SiMastercard size={16} />,
    },
    {
      name: "CARDANO",
      color: "bg-blue-400",
      textColor: "text-white",
      icon: "₳",
    },
    {
      name: "M-pesa",
      color: "bg-green-500",
      textColor: "text-white",
      icon: "📱",
    },
    {
      name: "Skrill",
      color: "bg-purple-600",
      textColor: "text-white",
      icon: "💳",
    },
    {
      name: "PayPal",
      color: "bg-blue-500",
      textColor: "text-white",
      icon: "🅿️",
    },
    {
      name: "Ethereum",
      color: "bg-gray-700",
      textColor: "text-white",
      icon: <FaEthereum size={16} />,
    },
    {
      name: "Litecoin",
      color: "bg-gray-400",
      textColor: "text-white",
      icon: "Ł",
    },
  ];

  // Payment method card component
  const PaymentCard = ({ method, index }: PaymentCardProps) => (
    <motion.div
      className={`${method.color} ${method.textColor} rounded-lg px-3 py-2.5 flex items-center space-x-2 min-w-[140px] sm:min-w-[160px] shadow-lg backdrop-blur-sm`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 8px 25px rgba(255,255,255,0.15)",
        transition: { duration: 0.2 },
      }}
    >
      <div className="text-lg sm:text-xl flex-shrink-0">
        {typeof method.icon === "string" ? method.icon : method.icon}
      </div>
      <div className="font-semibold text-xs sm:text-sm truncate">
        {method.name}
      </div>
    </motion.div>
  );

  return (
    <section
      className="py-12 sm:py-16 lg:py-20 overflow-hidden relative"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh] lg:min-h-[70vh]">
          {/* Left Side - Animated Payment Methods Marquee */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full order-2 lg:order-1">
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 right-0 h-16 lg:h-20 bg-gradient-to-b from-[var(--bg-primary)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-16 lg:h-20 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-10 pointer-events-none"></div>

            {/* First Column - Moving Up */}
            <div className="absolute left-0 w-[140px] sm:w-[160px] lg:w-48 h-full overflow-hidden">
              <motion.div
                className="flex flex-col space-y-3 lg:space-y-4"
                animate={{
                  y: ["0%", "-50%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ height: "200%" }}
              >
                {/* First set */}
                {paymentMethods.map((method, index) => (
                  <PaymentCard
                    key={`col1-first-${index}`}
                    method={method}
                    index={index}
                  />
                ))}
                {/* Duplicate for seamless loop */}
                {paymentMethods.map((method, index) => (
                  <PaymentCard
                    key={`col1-second-${index}`}
                    method={method}
                    index={index}
                  />
                ))}
              </motion.div>
            </div>

            {/* Second Column - Moving Down */}
            <div className="absolute right-0 lg:left-52 w-[140px] sm:w-[160px] lg:w-48 h-full overflow-hidden">
              <motion.div
                className="flex flex-col space-y-3 lg:space-y-4"
                animate={{
                  y: ["-50%", "0%"],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ height: "200%" }}
              >
                {/* First set */}
                {paymentMethods
                  .slice()
                  .reverse()
                  .map((method, index) => (
                    <PaymentCard
                      key={`col2-first-${index}`}
                      method={method}
                      index={index}
                    />
                  ))}
                {/* Duplicate for seamless loop */}
                {paymentMethods
                  .slice()
                  .reverse()
                  .map((method, index) => (
                    <PaymentCard
                      key={`col2-second-${index}`}
                      method={method}
                      index={index}
                    />
                  ))}
              </motion.div>
            </div>

            {/* Floating elements */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full opacity-20"
                style={{
                  backgroundColor: "var(--text-accent-orange)",
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
            style={{ color: "var(--text-primary)" }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="block">Your money,</span>
              <span className="block">your way</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Quick deposits, easy withdrawals, and 60+ payment options mean
              your money is always accessible.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { number: "60+", label: "Payment methods" },
                { number: "24/7", label: "Processing" },
                { number: "Instant", label: "Deposits" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-3 sm:p-4 rounded-lg"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-primary)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2"
                    style={{ color: "var(--text-accent-orange)" }}
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(239, 68, 68, 0)",
                        "0 0 20px rgba(239, 68, 68, 0.3)",
                        "0 0 0px rgba(239, 68, 68, 0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Disclaimer */}
            <motion.p
              className="text-xs sm:text-sm leading-relaxed max-w-lg opacity-75"
              style={{ color: "var(--text-secondary)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.75, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              *Availability of payment methods and processing speeds may vary
              based on location and selected payment option.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="group flex items-center space-x-2 font-semibold text-sm sm:text-base lg:text-lg px-6 py-3 rounded-full transition-all duration-300"
                style={{
                  color: "var(--text-primary)",
                  backgroundColor: "var(--text-accent-orange)",
                  border: "2px solid var(--text-accent-orange)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span>Learn more</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight size={14} />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-20"
            style={{
              backgroundColor: "var(--text-accent-blue)",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default PaymentMethodsSection;
