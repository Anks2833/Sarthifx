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
      Array.from({ length: 15 }).map((_, i) => ({
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
      className="relative min-h-[150vh] flex items-center justify-center overflow-hidden"
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

      <div className="absolute right-1/4 top-1/3 z-10">
        <motion.div
          className="w-20 h-20 rounded-full bg-yellow-400 absolute"
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
          className="w-16 h-16 rounded-full bg-gray-200 absolute"
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
          <motion.div
            className="w-3 h-3 rounded-full bg-gray-300 absolute top-3 left-3"
            style={{
              opacity: nightBackgroundOpacity,
            }}
          />
          <motion.div
            className="w-2 h-2 rounded-full bg-gray-300 absolute top-10 left-8"
            style={{
              opacity: nightBackgroundOpacity,
            }}
          />
          <motion.div
            className="w-4 h-4 rounded-full bg-gray-300 absolute bottom-2 right-3"
            style={{
              opacity: nightBackgroundOpacity,
            }}
          />
        </motion.div>
      </div>

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

      <div className="sticky top-[15vh] z-30 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        <motion.div
          className="space-y-8"
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
              className="text-7xl font-black leading-tight relative z-10"
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

            {/* Text glow effect */}
            <motion.div
              className="absolute -inset-2 rounded-xl blur-xl z-0"
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
            className="text-xl opacity-90 max-w-lg leading-relaxed"
            style={{ color: textColor }}
          >
            Cryptocurrencies and our unique Synthetic Indices are available
            24/7. Trade when it suits you, with no market closes.
          </motion.p>

          <motion.button
            className="group relative bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden shadow-xl flex items-center"
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
              className="ml-2 w-5 h-5"
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

          <div className="flex gap-8 mt-4">
            <div>
              <div className="text-red-500 text-3xl font-bold mb-1">24/7</div>
              <motion.div
                className="text-sm opacity-70"
                style={{ color: textColor }}
              >
                Trading
              </motion.div>
            </div>

            <div>
              <div className="text-red-500 text-3xl font-bold mb-1">100+</div>
              <motion.div
                className="text-sm opacity-70"
                style={{ color: textColor }}
              >
                Markets
              </motion.div>
            </div>

            <div>
              <div className="text-red-500 text-3xl font-bold mb-1">0.01s</div>
              <motion.div
                className="text-sm opacity-70"
                style={{ color: textColor }}
              >
                Execution
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative flex justify-center items-center"
          style={{
            opacity: useTransform(
              scrollYProgress,
              [0.1, 0.2, 0.8, 0.9],
              [0, 1, 1, 0]
            ),
          }}
        >
          <motion.div
            className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
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
            {/* Device frame */}
            <div className="w-[300px] h-[600px] bg-gray-900 rounded-[40px] p-3 shadow-2xl overflow-hidden border-4 border-gray-800">
              {/* Device screen */}
              <div className="w-full h-full bg-gray-900 rounded-[32px] overflow-hidden relative">
                {/* Status bar */}
                <div className="h-8 w-full bg-black flex items-center justify-between px-5">
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
                  <div className="flex space-x-1.5">
                    <div className="w-4 h-1 bg-white rounded-sm"></div>
                    <div className="w-3 h-1 bg-white rounded-sm"></div>
                    <div className="w-2 h-1 bg-white rounded-sm"></div>
                  </div>
                </div>

                <div className="p-4">
                  {/* App header */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="text-white font-bold">SarthiFX Trader</div>
                    <div className="text-red-500 font-medium text-sm">
                      $4,580.00 USD
                    </div>
                  </div>

                  <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
                    {[
                      "Rise/Fall",
                      "Higher/Lower",
                      "Touch/No Touch",
                      "Multipliers",
                    ].map((tab, index) => (
                      <motion.div
                        key={tab}
                        className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap ${
                          index === 0
                            ? "bg-white text-black"
                            : "bg-gray-800 text-gray-400"
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {tab}
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-gray-800 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <motion.span
                          className="text-sm w-6 h-6 rounded-full flex items-center justify-center"
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
                        <motion.span className="text-white font-medium">
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
                      <div className="text-green-400 text-sm">
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

                    <div className="h-40 w-full relative">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 250 100"
                        preserveAspectRatio="none"
                      >
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

                  <div className="bg-gray-800 rounded-xl p-4 mb-4">
                    <div className="text-gray-400 text-xs mb-3">
                      Set your trade
                    </div>

                    <div className="space-y-3">
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

                  <div className="grid grid-cols-2 gap-2">
                    <motion.button
                      className="bg-green-500 text-white py-3 rounded-xl text-sm font-medium"
                      style={{
                        opacity: isDayProgress,
                      }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Rise
                    </motion.button>
                    <motion.button
                      className="bg-red-500 text-white py-3 rounded-xl text-sm font-medium"
                      style={{
                        opacity: isDayProgress,
                      }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Fall
                    </motion.button>

                    <motion.button
                      className="bg-cyan-500 text-white py-3 rounded-xl text-sm font-medium absolute left-0 bottom-0 w-[46%]"
                      style={{
                        opacity: nightBackgroundOpacity,
                      }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Up
                    </motion.button>
                    <motion.button
                      className="bg-purple-500 text-white py-3 rounded-xl text-sm font-medium absolute right-0 bottom-0 w-[46%]"
                      style={{
                        opacity: nightBackgroundOpacity,
                      }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Down
                    </motion.button>
                  </div>
                </div>

                <motion.div
                  className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-5"
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
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-20"></div>

            {/* Floating chart elements */}
            <motion.div
              className="absolute -left-16 top-32 p-3 rounded-xl text-white text-xs font-medium shadow-lg"
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
              className="absolute -right-20 top-48 px-3 py-2 rounded-xl text-white text-xs font-medium shadow-lg"
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
