import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaGoogle,
  FaFacebookF,
  FaApple,
  FaEye,
  FaEyeSlash,
  FaFingerprint,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface FloatingLabelInputProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightIcon?: React.ReactNode;
}

const FloatingLabelInput = ({
  id,
  label,
  type,
  value,
  onChange,
  rightIcon,
}: FloatingLabelInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = (): void => setIsFocused(true);
  const handleBlur = (): void => setIsFocused(value.length > 0);

  const isLabelFloating = isFocused || value.length > 0;

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
          className={`
            w-full px-4 py-4 ${rightIcon ? "pr-12" : ""} 
            bg-white/5 border border-white/10 rounded-xl
            text-white placeholder-transparent
            focus:outline-none focus:border-blue-400 focus:bg-white/10
            transition-all duration-300
            backdrop-blur-sm
          `}
          placeholder=""
          style={{
            backgroundColor: "var(--bg-accent)",
            borderColor: isFocused
              ? "var(--border-secondary)"
              : "var(--border-primary)",
            color: "var(--text-primary)",
          }}
        />

        <motion.label
          htmlFor={id}
          className={`
            absolute left-4 cursor-text select-none pointer-events-none
            transition-all duration-300 ease-out
            ${isFocused ? "text-blue-400" : "text-gray-400"}
          `}
          style={{
            color: isFocused
              ? "var(--text-accent-blue)"
              : "var(--text-secondary)",
          }}
          initial={false}
          animate={{
            top: isLabelFloating ? "8px" : "50%",
            fontSize: isLabelFloating ? "12px" : "16px",
            transform: isLabelFloating ? "translateY(0)" : "translateY(-50%)",
            fontWeight: isLabelFloating ? "500" : "400",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {label}
        </motion.label>

        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants: Variants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)`,
        color: "var(--text-primary)",
      }}
    >
      <motion.div
        className="max-w-md w-full relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo Section */}
        <motion.div
          className="text-center mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <NavLink to="/" className="flex justify-center items-center">
            <div className="relative w-32 h-24">
              <img
                src="/sarthi_logo.png"
                alt="Sarthifx-logo"
                className="w-24 h-18 md:w-32 md:h-24 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </NavLink>
        </motion.div>

        {/* Welcome Section */}
        <motion.div
          className="text-center mb-10"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Welcome back
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>
            Sign in to access your trading account
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.form
          className="space-y-6 mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Email Field */}
          <motion.div variants={itemVariants}>
            <FloatingLabelInput
              id="email"
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          {/* Password Field */}
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
                  className="hover:text-white transition-colors"
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
              href="#"
              className="text-sm font-medium hover:underline"
              style={{ color: "var(--text-accent-blue)" }}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Forgot your password?
            </motion.a>
          </motion.div>

          {/* Login Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              className="w-full py-4 rounded-xl font-semibold text-white shadow-lg"
              style={{
                background: `linear-gradient(135deg, var(--text-accent-blue) 0%, var(--text-accent-orange) 100%)`,
              }}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Sign In
            </motion.button>
          </motion.div>
        </motion.form>

        {/* Divider */}
        <motion.div
          className="relative flex items-center my-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div
            className="flex-grow border-t"
            style={{ borderColor: "var(--bg-accent)" }}
          ></div>
          <span
            className="flex-shrink mx-4 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            Or continue with
          </span>
          <div
            className="flex-grow border-t"
            style={{ borderColor: "var(--bg-accent)" }}
          ></div>
        </motion.div>

        {/* Social Login Buttons */}
        <motion.div
          className="grid grid-cols-3 gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.button
            className="flex items-center justify-center p-4 rounded-xl border transition-all duration-200"
            style={{
              backgroundColor: "var(--bg-accent)",
              borderColor: "var(--bg-accent)",
            }}
            whileHover={{
              y: -2,
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-secondary)",
            }}
            whileTap={{ y: 0 }}
          >
            <FaGoogle className="text-[#4285F4]" size={20} />
          </motion.button>

          <motion.button
            className="flex items-center justify-center p-4 rounded-xl border transition-all duration-200"
            style={{
              backgroundColor: "var(--bg-accent)",
              borderColor: "var(--bg-accent)",
            }}
            whileHover={{
              y: -2,
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-secondary)",
            }}
            whileTap={{ y: 0 }}
          >
            <FaFacebookF className="text-[#1877F2]" size={20} />
          </motion.button>

          <motion.button
            className="flex items-center justify-center p-4 rounded-xl border transition-all duration-200"
            style={{
              backgroundColor: "var(--bg-accent)",
              borderColor: "var(--bg-accent)",
            }}
            whileHover={{
              y: -2,
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-secondary)",
            }}
            whileTap={{ y: 0 }}
          >
            <FaApple className="text-white" size={20} />
          </motion.button>
        </motion.div>

        {/* Biometric Login */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <motion.button
            className="w-full flex items-center justify-center gap-3 p-4 rounded-xl border transition-all duration-200"
            style={{
              backgroundColor: "var(--bg-accent)",
              borderColor: "var(--bg-accent)",
            }}
            whileHover={{
              y: -2,
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border-accent)",
            }}
            whileTap={{ y: 0 }}
          >
            <FaFingerprint
              size={18}
              style={{ color: "var(--text-accent-orange)" }}
            />
            <span
              className="font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Sign in with biometrics
            </span>
          </motion.button>
        </motion.div>

        {/* Sign Up Link */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <span style={{ color: "var(--text-secondary)" }}>
            Don't have an account yet?{" "}
          </span>
          <motion.a
            href="/register"
            className="font-semibold hover:underline"
            style={{ color: "var(--text-accent-orange)" }}
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
