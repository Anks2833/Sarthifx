import { useState } from "react";
import {
  Globe,
  Mail,
  Eye,
  EyeOff,
  CheckCircle,
  TrendingUp,
  Shield,
  Users,
  Award,
  ArrowRight,
  User,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "25+ Years of Excellence",
      description: "Trusted by millions of traders worldwide since 1999",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed & Regulated",
      description: "Multiple global financial authorities ensure your security",
      gradient: "from-blue-500/20 to-indigo-500/20",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "3M+ Active Traders",
      description: "Join our global community of successful traders",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award-winning Platform",
      description: "Industry recognition for innovation and service",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
  ];

  const benefits = [
    "Unique synthetic indices available 24/7",
    "Advanced trading platforms (MT5, cTrader)",
    "Competitive spreads from 0.5 pips",
    "Risk management tools included",
    "Professional customer support",
    "Multiple deposit & withdrawal methods",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "var(--bg-primary, #0a1929)",
        color: "var(--text-primary, #ffffff)",
      }}
    >

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-3">
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/logo.jpeg"
                alt="Sarthifx-logo"
                className="w-14 h-12 md:w-18 md:h-14 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </NavLink>
        </div>

        <div className="flex items-center space-x-3 bg-white/5 backdrop-blur border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition-all duration-300 cursor-pointer">
          <Globe className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium">EN</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 px-6 lg:px-8 py-8 max-w-7xl mx-auto">
        {/* Left Side - Features & Benefits */}
        <div className="flex flex-col justify-center space-y-12">
          {/* Hero Section */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Start your{" "}
              <span className="text-[var(--text-accent-orange)]">
                trading journey
              </span>{" "}
              today
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Join millions of traders who trust Sarthifx for their financial
              success. Access global markets, advanced tools, and professional
              support.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br ${feature.gradient} backdrop-blur border border-white/20 rounded-2xl p-6 hover:border-[var(--border-accent)] transition-all duration-500 transform hover:-translate-y-1`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 group-hover:from-white/5 group-hover:to-white/10 rounded-2xl transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-orange-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-6">
              What you'll get:
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            {/* Form Container */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-3xl"></div>

              <div className="relative z-10">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-[var(--bg-accent)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Create Account</h2>
                  <p className="text-gray-400">
                    Join over 3 million traders worldwide
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div className="relative">
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField("")}
                        className="w-full px-4 py-4 pl-12 bg-white/5 border border-white/20 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Enter your email"
                        required
                      />
                      <Mail
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                          focusedField === "email"
                            ? "text-orange-500"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="relative">
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        onFocus={() => setFocusedField("password")}
                        onBlur={() => setFocusedField("")}
                        className="w-full px-4 py-4 pl-12 pr-12 bg-white/5 border border-white/20 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Create a strong password"
                        required
                      />
                      <Shield
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                          focusedField === "password"
                            ? "text-orange-500"
                            : "text-gray-400"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors duration-300"
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="relative">
                    <label className="block text-sm font-semibold mb-2 text-gray-300">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          handleInputChange("confirmPassword", e.target.value)
                        }
                        onFocus={() => setFocusedField("confirmPassword")}
                        onBlur={() => setFocusedField("")}
                        className="w-full px-4 py-4 pl-12 pr-12 bg-white/5 border border-white/20 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Confirm your password"
                        required
                      />
                      <Shield
                        className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                          focusedField === "confirmPassword"
                            ? "text-orange-500"
                            : "text-gray-400"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors duration-300"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-300 leading-relaxed">
                        By creating an account, you agree to our{" "}
                        <a
                          href="#"
                          className="text-orange-400 hover:text-orange-300 font-medium underline"
                        >
                          Terms & Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="text-orange-400 hover:text-orange-300 font-medium underline"
                        >
                          Privacy Policy
                        </a>
                        . You can unsubscribe anytime in your account settings.
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={
                      !formData.email ||
                      !formData.password ||
                      !formData.confirmPassword
                    }
                    className="w-full group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:from-gray-600 disabled:to-gray-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-3"
                  >
                    <span>Create Free Account</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>

                {/* Divider */}
                <div className="my-8 relative flex items-center">
                  <div className="flex-grow border-t border-white/20"></div>
                  <span className="flex-shrink mx-4 text-gray-400 text-sm bg-white/5 px-4 py-2 rounded-full">
                    Or continue with
                  </span>
                  <div className="flex-grow border-t border-white/20"></div>
                </div>

                {/* Social Login */}
                <div className="flex justify-center space-x-4">
                  <button className="w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </button>

                  <button className="w-12 h-12 bg-[#1877F2] hover:bg-[#166FE5] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>

                  <button className="w-12 h-12 bg-black hover:bg-gray-800 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.748.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.744 2.877c-.269 1.033-1.018 2.329-1.516 3.117C9.567 23.763 10.769 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                  </button>
                </div>

                {/* Login Link */}
                <div className="text-center mt-8">
                  <span className="text-gray-400">
                    Already have an account?{" "}
                  </span>
                  <a
                    href="/login"
                    className="text-orange-400 hover:text-orange-300 font-semibold transition-colors duration-300"
                  >
                    Sign in here
                  </a>
                </div>
              </div>
            </div>

            {/* Security Note */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300">
                  256-bit SSL encryption protects your data
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
