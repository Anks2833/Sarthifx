import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const backgroundRef = useRef(null);

  // Framer Motion scroll tracking for the width reduction effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Transform values based on scroll - subtle width reduction
  const backgroundWidth = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["100%", "95%"]
  );
  const backgroundHeight = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["100%", "95%"]
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--bg-primary), var(--bg-accent))`,
      }}
    >
      {/* Dynamic Background with color theme matching logo */}
      <motion.div
        ref={backgroundRef}
        className="absolute z-0"
        style={{
          width: backgroundWidth,
          height: backgroundHeight,
          top: "50%",
          left: "50%",
          x: "-50%",
          y: "-50%",
        }}
      >
        {/* Dark gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, var(--bg-secondary), var(--bg-accent))`,
          }}
        ></div>

        {/* Gold circular pattern resembling logo border */}
        <div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] lg:w-[700px] h-[300px] sm:h-[500px] lg:h-[700px] opacity-10 rounded-full border-4 sm:border-8 lg:border-[12px]"
          style={{ borderColor: "var(--border-primary)" }}
        ></div>

        {/* Currency symbols overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ctext x='10' y='30' font-size='20'%3E$%3C/text%3E%3Ctext x='40' y='50' font-size='20'%3E€%3C/text%3E%3Ctext x='70' y='70' font-size='20'%3E£%3C/text%3E%3Ctext x='30' y='80' font-size='20'%3E¥%3C/text%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-12">
        {/* Left Content */}
        <motion.div
          ref={heroContentRef}
          className="max-w-2xl text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Logo element at the top */}
          <motion.div
            className="mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-center lg:justify-start">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r"
                  style={{
                    background: `linear-gradient(to right, var(--text-accent-blue), var(--text-accent-blue))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Sarthi
                </span>
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r"
                  style={{
                    background: `linear-gradient(to right, var(--text-accent-orange), var(--border-primary))`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  FX
                </span>
              </div>
            </div>
            <div
              className="text-xs mt-1 tracking-wider"
              style={{ color: "var(--text-secondary)" }}
            >
              GLOBAL TRADING SOLUTIONS
            </div>
          </motion.div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-4 sm:mb-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ color: "var(--text-primary)" }}
            >
              Global Markets
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-clip-text text-transparent bg-gradient-to-r"
              style={{
                background: `linear-gradient(to right, var(--border-primary), var(--text-accent-orange))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Limitless Trading
            </motion.div>
          </h1>
          <motion.p
            className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0"
            style={{ color: "var(--text-secondary)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Access global markets with a trusted platform offering
            multi-currency trading, competitive spreads, and advanced tools for
            traders worldwide.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-10">
            <motion.button
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
              style={{
                background: `linear-gradient(to right, var(--text-accent-orange), var(--border-primary))`,
                color: "var(--text-primary)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Open Account
            </motion.button>
            <motion.button
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all transform hover:scale-105"
              style={{
                border: `2px solid var(--text-accent-blue)`,
                color: "var(--text-accent-blue)",
                backgroundColor: "transparent",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "var(--text-accent-blue)",
                color: "white",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Demo Account
            </motion.button>
          </div>

          {/* Currency pairs */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <div className="flex flex-col items-center lg:items-start">
              <span
                className="text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                EUR/USD
              </span>
              <span
                className="font-medium text-sm"
                style={{ color: "var(--text-primary)" }}
              >
                1.0876
              </span>
              <span
                className="text-xs"
                style={{ color: "var(--text-accent-blue)" }}
              >
                +0.05%
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span
                className="text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                GBP/USD
              </span>
              <span
                className="font-medium text-sm"
                style={{ color: "var(--text-primary)" }}
              >
                1.2785
              </span>
              <span
                className="text-xs"
                style={{ color: "var(--text-accent-blue)" }}
              >
                +0.12%
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span
                className="text-xs"
                style={{ color: "var(--text-secondary)" }}
              >
                USD/JPY
              </span>
              <span
                className="font-medium text-sm"
                style={{ color: "var(--text-primary)" }}
              >
                147.25
              </span>
              <span
                className="text-xs"
                style={{ color: "var(--text-accent-orange)" }}
              >
                -0.08%
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Trading Platform Preview */}
        <motion.div
          className="hidden lg:flex flex-col items-center order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Stylized trading platform mockup */}
          <div
            className="relative w-[350px] xl:w-[450px] h-[210px] xl:h-[270px] rounded-lg border shadow-xl overflow-hidden transform rotate-3"
            style={{
              background: `linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))`,
              borderColor: "var(--border-secondary)",
            }}
          >
            {/* Trading chart visualization */}
            <div className="absolute top-10 bottom-0 left-0 right-0 opacity-90">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 500 250"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,125 C20,140 40,100 60,110 C80,120 100,80 120,90 C140,100 160,150 180,160 C200,170 220,120 240,90 C260,60 280,30 300,40 C320,50 340,100 360,110 C380,120 400,80 420,70 C440,60 460,90 480,100 C490,105 495,110 500,115"
                  fill="none"
                  stroke="var(--text-accent-blue)"
                  strokeWidth="2"
                />
                <path
                  d="M0,125 C20,130 40,120 60,130 C80,140 100,160 120,150 C140,140 160,120 180,110 C200,100 220,90 240,100 C260,110 280,150 300,160 C320,170 340,140 360,130 C380,120 400,100 420,110 C440,120 460,140 480,150 C490,155 495,155 500,155"
                  fill="none"
                  stroke="var(--text-accent-orange)"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Platform interface elements */}
            <div
              className="absolute top-0 left-0 right-0 h-10 border-b flex items-center px-4"
              style={{
                backgroundColor: "var(--bg-primary)",
                borderColor: "var(--border-secondary)",
              }}
            >
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <div
                className="text-xs ml-4"
                style={{ color: "var(--text-secondary)" }}
              >
                SarthiFX Trading Platform
              </div>
            </div>

            {/* Currency pairs sidebar */}
            <div
              className="absolute top-10 left-0 bottom-0 w-[100px] border-r flex flex-col"
              style={{
                backgroundColor: "var(--bg-accent)",
                borderColor: "var(--border-secondary)",
              }}
            >
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="py-2 px-2 border-b text-[9px]"
                    style={{
                      borderColor: "var(--border-secondary)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {
                      [
                        "EUR/USD",
                        "GBP/USD",
                        "USD/JPY",
                        "XAU/USD",
                        "BTC/USD",
                        "ETH/USD",
                      ][i]
                    }
                  </div>
                ))}
            </div>

            {/* Bottom panel */}
            <div
              className="absolute bottom-0 left-0 right-0 h-10 border-t"
              style={{
                backgroundColor: "var(--bg-accent)",
                borderColor: "var(--border-secondary)",
              }}
            ></div>
          </div>

          {/* Second trading screen with different angle */}
          <div
            className="relative w-[280px] xl:w-[350px] h-[168px] xl:h-[210px] rounded-lg border shadow-xl overflow-hidden transform -rotate-6 -mt-8 -ml-32"
            style={{
              background: `linear-gradient(to bottom, var(--bg-secondary), var(--bg-primary))`,
              borderColor: "var(--border-secondary)",
            }}
          >
            {/* Chart background */}
            <div className="h-full w-full opacity-70 flex flex-col">
              <div
                className="h-6 border-b"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  borderColor: "var(--border-secondary)",
                }}
              ></div>
              <div className="flex-1 grid grid-cols-6">
                <div
                  className="border-r"
                  style={{ borderColor: "var(--border-secondary)" }}
                ></div>
                <div
                  className="border-r"
                  style={{ borderColor: "var(--border-secondary)" }}
                ></div>
                <div
                  className="border-r"
                  style={{ borderColor: "var(--border-secondary)" }}
                ></div>
                <div
                  className="border-r"
                  style={{ borderColor: "var(--border-secondary)" }}
                ></div>
                <div
                  className="border-r"
                  style={{ borderColor: "var(--border-secondary)" }}
                ></div>
                <div></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Regulation & Trust Indicators */}
      <motion.div
        className="absolute bottom-0 left-0 w-full z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <div
          className="backdrop-blur-md border-t py-3 sm:py-4"
          style={{
            backgroundColor: "var(--bg-primary)",
            borderColor: "var(--border-secondary)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center lg:justify-between items-center gap-4 sm:gap-8">
            {/* Trust indicators */}
            <div className="flex items-center space-x-4 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <div
                  className="h-6 w-6 sm:h-8 sm:w-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--text-accent-blue)" }}
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    style={{ color: "var(--text-primary)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  className="text-xs sm:text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Regulated
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className="h-6 w-6 sm:h-8 sm:w-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--text-accent-blue)" }}
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    style={{ color: "var(--text-primary)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 116 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  className="text-xs sm:text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Secure
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className="h-6 w-6 sm:h-8 sm:w-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--text-accent-orange)" }}
                >
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4"
                    style={{ color: "var(--text-primary)" }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <span
                  className="text-xs sm:text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  24/7 Support
                </span>
              </div>
            </div>

            {/* Trustpilot Rating */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex space-x-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-3 w-3 sm:h-5 sm:w-5`}
                      style={{
                        color:
                          star <= 4
                            ? "var(--text-accent-orange)"
                            : "var(--text-secondary)",
                      }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <span
                className="text-xs sm:text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                4.4 out of 5 based on 67,448 reviews
              </span>
              <span
                className="text-xs sm:text-sm font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                TRUSTPILOT
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
