import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  FaGoogle,
  FaFacebookF,
  FaApple,
  FaCheck,
  FaGlobe,
  FaChild,
  FaUserPlus,
} from "react-icons/fa";

// Reuse the Floating Label Input from Login Page
const FloatingLabelInput = ({
  id,
  label,
  type,
  value,
  onChange,
  rightIcon,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(value ? true : false);

  return (
    <div className="relative">
      <motion.div
        className="relative rounded-lg overflow-hidden"
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full px-4 pt-6 pb-2 ${
            rightIcon ? "pr-12" : ""
          } border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-300 backdrop-blur-sm`}
        />
        <motion.label
          htmlFor={id}
          className="absolute left-4 pointer-events-none text-gray-600"
          initial={{
            y: value ? -10 : 10,
            scale: value ? 0.8 : 1,
            opacity: 1,
          }}
          animate={{
            y: isFocused || value ? -10 : 10,
            scale: isFocused || value ? 0.8 : 1,
            color: isFocused ? "#ef4444" : "#4b5563",
            opacity: 1,
          }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {label}
        </motion.label>
        {rightIcon && (
          <motion.div
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {rightIcon}
          </motion.div>
        )}
      </motion.div>
      {isFocused && (
        <motion.div
          className="h-0.5 bg-gradient-to-r from-red-400 to-red-600 rounded-full mt-0.5"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};

const RegisterPage = () => {
  const [email, setEmail] = useState("");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2 + custom * 0.1,
        duration: 0.5,
      },
    }),
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 15px -3px rgba(239, 68, 68, 0.3)",
    },
    tap: { scale: 0.98 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-3">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <NavLink to="/" className="flex items-center space-x-2">
            <img
              src="/logo.jpeg"
              alt="Sarthifx Logo"
              className="h-12 rounded-xl"
            />
          </NavLink>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2 text-gray-700 cursor-pointer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <FaGlobe className="text-gray-600" size={16} />
          <span className="font-medium">EN</span>
        </motion.div>
      </header>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 px-6 py-12 max-w-7xl mx-auto">
        {/* Left Side - Content */}
        <motion.div
          className="flex flex-col justify-center space-y-8 lg:pr-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Trusted for 25 years
            </motion.h1>

            <div className="space-y-5 mb-10">
              <motion.div
                className="flex items-center space-x-3"
                custom={0}
                variants={featureVariants}
              >
                <div className="p-2 bg-red-100 rounded-full text-red-600">
                  <FaCheck />
                </div>
                <span className="text-gray-700 text-lg">
                  Unique trade types
                </span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                custom={1}
                variants={featureVariants}
              >
                <div className="p-2 bg-red-100 rounded-full text-red-600">
                  <FaCheck />
                </div>
                <span className="text-gray-700 text-lg">
                  Hundreds of instruments
                </span>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                custom={2}
                variants={featureVariants}
              >
                <div className="p-2 bg-red-100 rounded-full text-red-600">
                  <FaCheck />
                </div>
                <span className="text-gray-700 text-lg">
                  Financial and derived markets
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <p className="text-xl text-gray-600 mb-6">
                Trade anywhere, anytime.
              </p>
              <p className="text-xl font-semibold text-gray-900">
                Get your free demo account today.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Signup Form */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="max-w-md mx-auto w-full bg-white p-8 rounded-xl shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-8"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Join over 3 million traders
            </motion.h2>

            <motion.form
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Email Field with Floating Label */}
              <motion.div variants={itemVariants}>
                <FloatingLabelInput
                  id="register-email"
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </motion.div>

              {/* Terms and Conditions */}
              <motion.div
                className="text-sm text-gray-600 leading-relaxed flex items-start space-x-3"
                variants={itemVariants}
              >
                <FaChild
                  className="flex-shrink-0 mt-1 text-gray-400"
                  size={14}
                />
                <p>
                  By creating an account, you agree to our{" "}
                  <a
                    href="#"
                    className="text-red-500 hover:text-red-600 font-medium"
                  >
                    Terms and conditions
                  </a>{" "}
                  and acknowledge that we may send you updates and marketing
                  materials (see our{" "}
                  <a
                    href="#"
                    className="text-red-500 hover:text-red-600 font-medium"
                  >
                    Security and privacy policy
                  </a>
                  ). Unsubscribe anytime in your account settings.
                </p>
              </motion.div>

              {/* Create Account Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={!email}
                  className={`w-full py-3 rounded-full font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
                    email
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                  variants={buttonVariants}
                  initial="initial"
                  whileHover={email ? "hover" : "initial"}
                  whileTap={email ? "tap" : "initial"}
                >
                  <FaUserPlus size={16} />
                  <span>Create account</span>
                </motion.button>
              </motion.div>
            </motion.form>

            {/* Divider */}
            <motion.div
              className="my-8 relative flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">
                Or sign up with
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </motion.div>

            {/* Social Login Buttons */}
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                whileHover={{
                  y: -2,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ y: 0 }}
              >
                <FaGoogle className="text-[#4285F4]" size={20} />
              </motion.button>

              <motion.button
                className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                whileHover={{
                  y: -2,
                  boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ y: 0 }}
              >
                <FaFacebookF className="text-white" size={20} />
              </motion.button>

              <motion.button
                className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                whileHover={{
                  y: -2,
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ y: 0 }}
              >
                <FaApple className="text-white" size={20} />
              </motion.button>
            </motion.div>

            {/* Login Link */}
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <span className="text-gray-600">Already have an account? </span>
              <motion.a
                href="/login"
                className="text-gray-900 hover:text-red-500 font-medium"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Log in
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;
