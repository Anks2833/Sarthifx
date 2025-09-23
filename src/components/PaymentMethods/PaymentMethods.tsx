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
      icon: <SiVisa size={24} />,
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
      icon: <SiBinance size={20} />,
    },
    {
      name: "maestro",
      color: "bg-blue-500",
      textColor: "text-white",
      icon: <SiMastercard size={20} />,
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
      icon: <SiMastercard size={20} />,
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
      icon: <FaEthereum size={20} />,
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
      className={`${method.color} ${method.textColor} rounded-xl px-4 py-3 flex items-center space-x-3 min-w-[180px] shadow-lg`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(255,255,255,0.1)",
      }}
    >
      <div className="text-2xl">
        {typeof method.icon === "string" ? method.icon : method.icon}
      </div>
      <div className="font-semibold text-sm">{method.name}</div>
    </motion.div>
  );

  return (
    <section className="bg-gray-900 py-20 overflow-hidden relative">
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

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Left Side - Animated Payment Methods Marquee */}
          <div className="relative h-[600px] w-full">
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-900 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent z-10 pointer-events-none"></div>

            {/* First Column - Moving Up */}
            <div className="absolute left-0 w-48 h-full overflow-hidden">
              <motion.div
                className="flex flex-col space-y-4"
                animate={{
                  y: ["0%", "-50%"],
                }}
                transition={{
                  duration: 15,
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
            <div className="absolute left-52 w-48 h-full overflow-hidden">
              <motion.div
                className="flex flex-col space-y-4"
                animate={{
                  y: ["-50%", "0%"],
                }}
                transition={{
                  duration: 18,
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
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                style={{
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
            className="text-white space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Title */}
            <motion.h2
              className="text-6xl font-black leading-tight"
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
              className="text-gray-300 text-xl leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Quick deposits, easy withdrawals, and 60+ payment options mean
              your money is always accessible.
            </motion.p>

            {/* Disclaimer */}
            <motion.p
              className="text-gray-400 text-sm leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              *Availability of payment methods and processing speeds may vary
              based on location and selected payment option.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="group flex items-center space-x-2 text-red-500 font-semibold text-lg hover:text-red-400 transition-colors"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span>Learn more</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaArrowRight />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              {[
                { number: "60+", label: "Payment methods" },
                { number: "24/7", label: "Processing" },
                { number: "Instant", label: "Deposits" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-3xl font-bold text-white mb-2"
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
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
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
