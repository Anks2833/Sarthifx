import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TradeDayNightSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const dayNightProgress = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
  const isDayProgress = useTransform(dayNightProgress, (v) => 1 - v);

  const backgroundBlend = useTransform(
    dayNightProgress,
    (v) => `rgba(255, 255, 255, ${(1 - v) * 0.1})`
  );

  const dayBackgroundOpacity = useTransform(dayNightProgress, (v) => 1 - v);
  const nightBackgroundOpacity = useTransform(dayNightProgress, (v) => v);

  const textColor = useTransform(dayNightProgress, (v) =>
    v > 0.5 ? "white" : "#1f2937"
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 5 + 3,
      })),
    []
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[120vh] sm:min-h-[140vh] lg:min-h-[150vh] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-amber-50"
        style={{ opacity: dayBackgroundOpacity }}
      />

      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900 via-blue-900 to-gray-900"
        style={{ opacity: nightBackgroundOpacity }}
      />

      <motion.div
        className="absolute inset-0 z-5"
        style={{ backgroundColor: backgroundBlend }}
      />

      {/* Sun/Moon positioning - responsive */}
      <div className="absolute right-1/4 sm:right-1/3 lg:right-1/4 top-1/4 sm:top-1/3 z-10">
        <motion.div
          className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-yellow-400 absolute"
          style={{
            opacity: dayBackgroundOpacity,
            scale: useTransform(dayNightProgress, [0, 0.3], [1, 0.8]),
            y: useTransform(dayNightProgress, [0, 0.5], [0, 50]),
            boxShadow: useTransform(
              dayNightProgress,
              (v) =>
                `0 0 ${40 * (1 - v)}px ${20 * (1 - v)}px rgba(250, 204, 21, ${
                  0.5 * (1 - v)
                })`
            ),
          }}
        />

        <motion.div
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-gray-200 absolute"
          style={{
            opacity: nightBackgroundOpacity,
            scale: useTransform(dayNightProgress, [0.5, 0.8], [0.8, 1]),
            y: useTransform(dayNightProgress, [0.5, 1], [50, 0]),
            boxShadow: useTransform(
              dayNightProgress,
              (v) =>
                `0 0 ${30 * v}px ${15 * v}px rgba(226, 232, 240, ${0.4 * v})`
            ),
          }}
        >
          {/* Moon craters - responsive sizes */}
          <motion.div
            className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-gray-300 absolute top-2 left-2 lg:top-3 lg:left-3"
            style={{ opacity: nightBackgroundOpacity }}
          />
          <motion.div
            className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-gray-300 absolute top-6 left-6 lg:top-10 lg:left-8"
            style={{ opacity: nightBackgroundOpacity }}
          />
          <motion.div
            className="w-2.5 h-2.5 lg:w-4 lg:h-4 rounded-full bg-gray-300 absolute bottom-1 right-2 lg:bottom-2 lg:right-3"
            style={{ opacity: nightBackgroundOpacity }}
          />
        </motion.div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              background: useTransform(dayNightProgress, (v) =>
                v > 0.5
                  ? `rgba(147, 197, 253, ${0.4 * v})`
                  : `rgba(252, 211, 77, ${0.4 * (1 - v)})`
              ),
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="sticky top-[10vh] sm:top-[15vh] z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 sm:py-20">
        <motion.div
          className="space-y-6 sm:space-y-8 order-2 lg:order-1"
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0.1, 0.2, 0.8, 0.9],
              [0, 1, 1, 0]
            ),
          }}
        >
          <div className="relative">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight relative z-10"
              style={{
                color: textColor,
                textShadow: useTransform(dayNightProgress, (v) =>
                  v > 0.5
                    ? "0 2px 10px rgba(0, 0, 0, 0.3)"
                    : "0 2px 10px rgba(255, 255, 255, 0.3)"
                ),
              }}
            >
              <div>Trade all</div>
              <div className="flex">
                <motion.span
                  style={{
                    opacity: isDayProgress,
                    position: "absolute",
                  }}
                >
                  day
                </motion.span>
                <motion.span
                  style={{
                    opacity: nightBackgroundOpacity,
                    position: "absolute",
                  }}
                >
                  night
                </motion.span>
                <span className="invisible">night</span> {/* Spacer */}
              </div>
            </motion.h1>

            {/* Enhanced text glow effect */}
            <motion.div
              className="absolute -inset-4 rounded-xl blur-xl z-0"
              style={{
                background: useTransform(dayNightProgress, (v) =>
                  v > 0.5
                    ? "rgba(147, 197, 253, 0.2)"
                    : "rgba(254, 240, 138, 0.2)"
                ),
                scale: useTransform(
                  dayNightProgress,
                  (v) => 1 + Math.sin(v * Math.PI) * 0.05
                ),
                opacity: useTransform(
                  dayNightProgress,
                  (v) => 0.2 + Math.sin(v * Math.PI) * 0.1
                ),
              }}
            />
          </div>

          <motion.p
            className="text-sm sm:text-base lg:text-lg opacity-90 max-w-lg leading-relaxed"
            style={{ color: textColor }}
          >
            Cryptocurrencies and our unique Synthetic Indices are available
            24/7. Trade when it suits you, with no market closes.
          </motion.p>

          {/* Enhanced button */}
          <motion.button
            className="group relative bg-gradient-to-r from-red-500 to-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold overflow-hidden shadow-xl flex items-center"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -skew-x-12"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />

            <span className="relative z-10">Open account</span>
            <motion.svg
              className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.button>

          {/* Enhanced stats section */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-6">
            {[
              { value: "24/7", label: "Trading" },
              { value: "100+", label: "Markets" },
              { value: "0.01s", label: "Execution" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-3 sm:p-4 rounded-lg"
                style={{
                  background: useTransform(dayNightProgress, (v) =>
                    v > 0.5 ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
                  ),
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 text-red-500"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(239, 68, 68, 0)",
                      "0 0 20px rgba(239, 68, 68, 0.5)",
                      "0 0 0px rgba(239, 68, 68, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  className="text-xs sm:text-sm opacity-70"
                  style={{ color: textColor }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center order-1 lg:order-2"
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0.1, 0.2, 0.8, 0.9],
              [0, 1, 1, 0]
            ),
          }}
        >
          {/* Enhanced background glow */}
          <motion.div
            className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: useTransform(dayNightProgress, (v) =>
                v > 0.5 ? "rgba(96, 165, 250, 0.3)" : "rgba(252, 211, 77, 0.3)"
              ),
              scale: useTransform(
                dayNightProgress,
                (v) => 1 + Math.sin(v * Math.PI) * 0.1
              ),
              opacity: useTransform(
                dayNightProgress,
                (v) => 0.2 + Math.sin(v * Math.PI) * 0.1
              ),
            }}
          />

          <motion.div
            className="relative z-10"
            style={{
              y: useTransform(scrollYProgress, [0.3, 0.7], [0, -30]),
            }}
          >
            {/* Responsive device frame */}
            <div className="w-[250px] sm:w-[280px] lg:w-[300px] h-[500px] sm:h-[560px] lg:h-[600px] bg-gray-900 rounded-[32px] lg:rounded-[40px] p-2 lg:p-3 shadow-2xl overflow-hidden border-4 border-gray-800">
              {/* Device screen */}
              <div className="w-full h-full bg-gray-900 rounded-[24px] lg:rounded-[32px] overflow-hidden relative">
                {/* Status bar */}
                <div className="h-6 sm:h-8 w-full bg-black flex items-center justify-between px-3 sm:px-5">
                  <motion.div
                    className="text-white text-xs"
                    style={{
                      opacity: useTransform(
                        scrollYProgress,
                        [0.3, 0.6],
                        [1, 0.8]
                      ),
                    }}
                  >
                    <motion.span
                      style={{
                        opacity: isDayProgress,
                        display: "inline-block",
                        position: "absolute",
                      }}
                    >
                      14:25
                    </motion.span>
                    <motion.span
                      style={{
                        opacity: nightBackgroundOpacity,
                        display: "inline-block",
                        position: "absolute",
                      }}
                    >
                      23:15
                    </motion.span>
                    <span className="invisible">23:15</span>
                  </motion.div>
                  <div className="flex space-x-1">
                    <div className="w-3 h-1 bg-white rounded-sm"></div>
                    <div className="w-2 h-1 bg-white rounded-sm"></div>
                    <div className="w-1.5 h-1 bg-white rounded-sm"></div>
                  </div>
                </div>

                <div className="p-3 sm:p-4">
                  {/* App header */}
                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <div className="text-white font-bold text-sm sm:text-base">
                      SarthiFX Trader
                    </div>
                    <div className="text-red-500 font-medium text-xs sm:text-sm">
                      $4,580.00 USD
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex space-x-1 sm:space-x-2 mb-4 sm:mb-6 overflow-x-auto pb-2">
                    {[
                      "Rise/Fall",
                      "Higher/Lower",
                      "Touch/No Touch",
                      "Multipliers",
                    ].map((tab, index) => (
                      <motion.div
                        key={tab}
                        className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs whitespace-nowrap ${
                          index === 0
                            ? "bg-white text-black"
                            : "bg-gray-800 text-gray-400"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {tab}
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart section */}
                  <div className="bg-gray-800 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <motion.span
                          className="text-xs w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: useTransform(
                              dayNightProgress,
                              (v) => (v > 0.5 ? "#3b82f6" : "#f59e0b")
                            ),
                          }}
                        >
                          <motion.span
                            style={{
                              opacity: isDayProgress,
                              position: "absolute",
                            }}
                          >
                            ₿
                          </motion.span>
                          <motion.span
                            style={{
                              opacity: nightBackgroundOpacity,
                              position: "absolute",
                            }}
                          >
                            Ξ
                          </motion.span>
                          <span className="invisible">X</span>
                        </motion.span>
                        <motion.span className="text-white font-medium text-sm">
                          <motion.span
                            style={{
                              opacity: isDayProgress,
                              position: "absolute",
                            }}
                          >
                            BTC/USD
                          </motion.span>
                          <motion.span
                            style={{
                              opacity: nightBackgroundOpacity,
                              position: "absolute",
                            }}
                          >
                            ETH/USD
                          </motion.span>
                          <span className="invisible">ETH/USD</span>
                        </motion.span>
                      </div>
                      <div className="text-green-400 text-xs sm:text-sm">
                        <motion.span
                          style={{
                            opacity: isDayProgress,
                            position: "absolute",
                          }}
                        >
                          67,241.25
                        </motion.span>
                        <motion.span
                          style={{
                            opacity: nightBackgroundOpacity,
                            position: "absolute",
                          }}
                        >
                          3,452.18
                        </motion.span>
                        <span className="invisible">67,241.25</span>
                      </div>
                    </div>

                    {/* Chart area */}
                    <div className="h-28 sm:h-32 lg:h-40 w-full relative">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 250 100"
                        preserveAspectRatio="none"
                      >
                        {/* Day chart */}
                        <motion.path
                          d="M0,70 C20,60 40,30 60,50 C80,65 100,40 120,30 C140,20 160,40 180,50 C200,60 220,40 240,20"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="2"
                          style={{
                            opacity: isDayProgress,
                            pathLength: useTransform(
                              dayNightProgress,
                              [0, 0.4],
                              [1, 0]
                            ),
                          }}
                        />
                        <motion.path
                          d="M0,70 C20,60 40,30 60,50 C80,65 100,40 120,30 C140,20 160,40 180,50 C200,60 220,40 240,20 L240,100 L0,100 Z"
                          fill="rgba(34, 197, 94, 0.1)"
                          stroke="#22c55e"
                          strokeWidth="1"
                          style={{
                            opacity: isDayProgress,
                          }}
                        />

                        {/* Night chart */}
                        <motion.path
                          d="M0,50 C20,60 40,30 60,70 C80,80 100,60 120,50 C140,40 160,70 180,60 C200,50 220,30 240,60"
                          fill="none"
                          stroke="#ef4444"
                          strokeWidth="2"
                          style={{
                            opacity: nightBackgroundOpacity,
                            pathLength: useTransform(
                              dayNightProgress,
                              [0.6, 1],
                              [0, 1]
                            ),
                          }}
                        />
                        <motion.path
                          d="M0,50 C20,60 40,30 60,70 C80,80 100,60 120,50 C140,40 160,70 180,60 C200,50 220,30 240,60 L240,100 L0,100 Z"
                          fill="rgba(239, 68, 68, 0.1)"
                          stroke="#ef4444"
                          strokeWidth="1"
                          style={{
                            opacity: nightBackgroundOpacity,
                          }}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Trade settings */}
                  <div className="bg-gray-800 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                    <div className="text-gray-400 text-xs mb-2 sm:mb-3">
                      Set your trade
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">Duration</span>
                        <div className="bg-gray-700 px-2 py-1 rounded-md text-white text-xs">
                          5 minutes
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">Stake</span>
                        <div className="text-white text-xs">100 USD</div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">
                          Potential Payout
                        </span>
                        <div className="text-white text-xs">190 USD</div>
                      </div>
                    </div>
                  </div>

                  {/* Trading buttons */}
                  <div className="grid grid-cols-2 gap-2 relative">
                    <motion.button
                      className="bg-green-500 text-white py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium"
                      style={{
                        opacity: isDayProgress,
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Rise
                    </motion.button>
                    <motion.button
                      className="bg-red-500 text-white py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium"
                      style={{
                        opacity: isDayProgress,
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Fall
                    </motion.button>

                    <motion.button
                      className="bg-cyan-500 text-white py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium absolute left-0 bottom-0 w-[48%]"
                      style={{
                        opacity: nightBackgroundOpacity,
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Up
                    </motion.button>
                    <motion.button
                      className="bg-purple-500 text-white py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium absolute right-0 bottom-0 w-[48%]"
                      style={{
                        opacity: nightBackgroundOpacity,
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Down
                    </motion.button>
                  </div>
                </div>

                {/* Screen reflection effect */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-16 sm:h-20 bg-gradient-to-b from-white to-transparent opacity-5"
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
            </div>

            {/* Device notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 sm:w-36 lg:w-40 h-4 sm:h-5 lg:h-6 bg-black rounded-b-2xl lg:rounded-b-3xl z-20"></div>

            {/* Enhanced floating chart elements */}
            <motion.div
              className="absolute -left-12 sm:-left-16 top-24 sm:top-32 p-2 sm:p-3 rounded-lg sm:rounded-xl text-white text-xs font-medium shadow-lg backdrop-blur-md"
              style={{
                backgroundColor: useTransform(dayNightProgress, (v) =>
                  v > 0.5 ? "rgba(59, 130, 246, 0.9)" : "rgba(34, 197, 94, 0.9)"
                ),
                x: useTransform(scrollYProgress, [0.3, 0.4], [-20, 0]),
              }}
            >
              <motion.span style={{ opacity: isDayProgress }}>
                +2.4% 24h
              </motion.span>
              <motion.span style={{ opacity: nightBackgroundOpacity }}>
                +5.2% 24h
              </motion.span>
            </motion.div>

            <motion.div
              className="absolute -right-16 sm:-right-20 top-36 sm:top-48 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-white text-xs font-medium shadow-lg backdrop-blur-md"
              style={{
                backgroundColor: useTransform(dayNightProgress, (v) =>
                  v > 0.5
                    ? "rgba(147, 51, 234, 0.9)"
                    : "rgba(245, 158, 11, 0.9)"
                ),
                x: useTransform(scrollYProgress, [0.3, 0.4], [20, 0]),
              }}
            >
              <motion.span style={{ opacity: isDayProgress }}>
                BTC $67,241
              </motion.span>
              <motion.span style={{ opacity: nightBackgroundOpacity }}>
                ETH $3,452
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TradeDayNightSection;
