import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGoogle,
  FaFacebookF,
  FaApple,
  FaEye,
  FaEyeSlash,
  FaFingerprint,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Enhanced Floating Label Input Component
const FloatingLabelInput = ({
  id,
  label,
  type,
  value,
  onChange,
  rightIcon,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(value ? true : false);

  return (
    <div className="relative">
      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`w-full px-4 py-3 ${
            rightIcon ? "pr-12" : ""
          } border border-gray-300 rounded-md focus:outline-none focus:border-red-400 transition-all duration-200`}
          placeholder=""
        />
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: "16px",
            top: isFocused || value ? "8px" : "50%",
            transform:
              isFocused || value
                ? "translateY(0) scale(0.85)"
                : "translateY(-50%) scale(1)",
          }}
          initial={false}
          animate={{
            top: isFocused || value ? "8px" : "50%",
            y: isFocused || value ? 0 : "-50%",
            scale: isFocused || value ? 0.85 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          <span
            className={`${
              isFocused ? "text-red-500" : "text-gray-500"
            } transition-all duration-200`}
          >
            {label}
          </span>
        </motion.div>
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <motion.div
        className="max-w-md w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <NavLink to="/" className="w-full flex justify-center mb-8">
          <img src="/logo.jpeg" alt="Sarthifx Logo" className="h-16 rounded-xl" />
        </NavLink>

        {/* Welcome Title */}
        <motion.div
          className="text-left mb-6"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-light text-gray-700">Welcome back</h2>
        </motion.div>

        {/* Login Form */}
        <motion.form
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Email Field with Floating Label */}
          <motion.div variants={itemVariants}>
            <FloatingLabelInput
              id="email"
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          {/* Password Field with Floating Label */}
          <motion.div variants={itemVariants}>
            <FloatingLabelInput
              id="password"
              type={showPassword ? "text" : "password"}
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <FaEyeSlash size={18} />
                  ) : (
                    <FaEye size={18} />
                  )}
                </button>
              }
            />
          </motion.div>

          {/* Forgot Password */}
          <motion.div className="text-right" variants={itemVariants}>
            <motion.a
              href="/forgot-password"
              className="text-red-500 hover:text-red-600 text-sm font-medium"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Forgot password?
            </motion.a>
          </motion.div>

          {/* Login Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-full font-medium shadow-md"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0.3 }}
            >
              Log in
            </motion.button>
          </motion.div>
        </motion.form>

        {/* Divider */}
        <motion.div
          className="my-8 relative flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-sm">
            Or continue with
          </span>
          <div className="flex-grow border-t border-gray-300"></div>
        </motion.div>

        {/* Social Login Buttons */}
        <motion.div
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.button
            className="flex items-center justify-center p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            whileHover={{
              y: -2,
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ y: 0 }}
          >
            <FaGoogle className="text-[#4285F4]" size={20} />
          </motion.button>

          <motion.button
            className="flex items-center justify-center p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            whileHover={{
              y: -2,
              boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ y: 0 }}
          >
            <FaFacebookF size={20} />
          </motion.button>

          <motion.button
            className="flex items-center justify-center p-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            whileHover={{
              y: -2,
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)",
            }}
            whileTap={{ y: 0 }}
          >
            <FaApple size={20} />
          </motion.button>
        </motion.div>

        {/* Biometrics Login */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="w-full flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            whileHover={{
              y: -2,
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ y: 0 }}
          >
            <FaFingerprint className="text-red-500" size={18} />
            <span className="font-medium text-gray-700">
              Log in with biometrics
            </span>
          </motion.button>
        </motion.div>

        {/* Sign Up Link */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <span className="text-gray-600">Don't have an account yet? </span>
          <motion.a
            href="/register"
            className="text-red-500 hover:text-red-600 font-medium"
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Sign up
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
