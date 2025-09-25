import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Type definitions
interface Platform {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  badge: string;
  badgeColor: string;
  image: string;
}

interface VisualProps {
  isActive: boolean;
}

interface PlatformSectionProps {
  platform: Platform;
  index: number;
}

const TradeYourWaySection = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Platform data matching the screenshots
  const platforms: Platform[] = [
    {
      id: 0,
      title: "Copy expert traders",
      subtitle: "cTrader",
      description:
        "On Sarthifx cTrader, tap into the expertise of seasoned traders. Follow their strategies, and mirror their trades automatically.",
      cta: "Explore Sarthifx cTrader",
      badge: "CT",
      badgeColor: "bg-red-500",
      image: "https://i.ibb.co/NFVvnxj/copy-traders.jpg",
    },
    {
      id: 1,
      title: "Power of MT5 with 24/7 trading",
      subtitle: "MetaTrader 5",
      description:
        "Sarthifx MT5 brings you the world's favourite platform with the widest range of forex, stocks, commodities, cryptocurrencies, and exclusive Derived Indices with zero commissions and swap-free trading.",
      cta: "Explore Sarthifx MT5",
      badge: "MT5",
      badgeColor: "bg-blue-500",
      image: "https://i.ibb.co/1RcHsTS/mt5-platform.jpg",
    },
    {
      id: 2,
      title: "Sharp insights with TradingView charts",
      subtitle: "Sarthifx X",
      description:
        "Sarthifx X gives you access to TradingView charts, with 110+ tools to analyse markets, track trends, and execute trades instantly — all from a single screen.",
      cta: "Explore Sarthifx X",
      badge: "DX",
      badgeColor: "bg-red-500",
      image: "https://i.ibb.co/WFJv8Jz/tradingview.jpg",
    },
    {
      id: 3,
      title: "Optimised payouts, limited downsides",
      subtitle: "Sarthifx Trader",
      description:
        "On Sarthifx Trader, you'll never lose more than you put in. Know your maximum risk upfront when trading global markets and round-the-clock indices.",
      cta: "Explore Sarthifx Trader",
      badge: "DT",
      badgeColor: "bg-red-500",
      image: "https://i.ibb.co/Bnd9PQk/mobile-trader.jpg",
    },
    {
      id: 4,
      title: "Automate your trades",
      subtitle: "Sarthifx Bot",
      description:
        "Sarthifx Bot keeps your strategies running on 24/7 exclusive indices and traditional markets. Trade with predetermined risk - no surprises, no coding required.",
      cta: "Explore Sarthifx Bot",
      badge: "DB",
      badgeColor: "bg-red-500",
      image: "https://i.ibb.co/CBYxSQH/automate-trades.jpg",
    },
  ];

  // Animated visual elements for each platform
  const CopyTraderVisual = ({ isActive }: VisualProps) => {
    return (
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="relative w-[500px]">
          {/* Grid of trader profiles */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {[...Array(9)].map((_, index) => (
              <motion.div
                key={`trader-${index}`}
                className="relative w-full h-28 overflow-hidden rounded-lg bg-red-500/10"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: isActive ? 0 : 20,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-red-500/40 to-red-600/70"
                  animate={{
                    opacity: [0.6, 0.8, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.2,
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Performance card */}
          <motion.div
            className="bg-white rounded-xl p-6 shadow-xl w-[300px] mx-auto relative z-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: isActive ? 0 : 30,
              opacity: isActive ? 1 : 0,
              boxShadow: isActive
                ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                : "0 0 0 0 rgba(0, 0, 0, 0)",
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center text-white font-bold text-xl">
                CT
              </div>
              <div className="ml-4">
                <div className="text-3xl font-bold text-green-600">+37.5%</div>
                <div className="text-gray-600">Performance</div>
              </div>
            </div>
            <motion.div className="h-16 w-full overflow-hidden">
              <motion.svg viewBox="0 0 300 60" className="w-full h-full">
                <motion.path
                  d="M0,50 L20,45 L40,48 L60,40 L80,30 L100,35 L120,25 L140,20 L160,25 L180,15 L200,20 L220,10 L240,15 L260,5 L280,10 L300,5"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isActive ? 1 : 0 }}
                  transition={{ duration: 1.5 }}
                />
              </motion.svg>
            </motion.div>
            <motion.button
              className="mt-4 bg-red-500 text-white w-full py-3 rounded-full text-base font-medium"
              whileHover={{ scale: 1.02, backgroundColor: "#ef4444" }}
              whileTap={{ scale: 0.98 }}
            >
              Copy
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  const MT5Visual = ({ isActive }: VisualProps) => {
    return (
      <motion.div
        className="relative w-full h-full flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Laptop with MT5 */}
        <motion.div
          className="mb-6 relative perspective-1000"
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: isActive ? 0 : 30,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-[500px] relative"
            animate={{
              rotateX: isActive ? [-2, 2, -2] : 0,
              y: isActive ? [0, -5, 0] : 0,
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <div className="absolute top-0 right-0 z-10">
                <div className="bg-blue-500 text-white font-bold text-xl p-3 rounded-lg">
                  MT5
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          className="flex space-x-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isActive ? 0 : 20,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div
            className="bg-gray-100 p-5 rounded-xl w-60"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="flex space-x-2 mb-3">
              <div className="w-6 h-6 rounded bg-red-400"></div>
              <div className="w-6 h-6 rounded bg-purple-400"></div>
              <div className="w-6 h-6 rounded bg-yellow-400"></div>
            </div>
            <div className="text-lg font-bold text-gray-900">
              Multiple assets
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-900 text-white p-5 rounded-xl w-60"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="flex justify-between mb-3">
              <motion.div
                className="text-white text-2xl"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↑
              </motion.div>
              <motion.div
                className="text-white text-2xl"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                ↓
              </motion.div>
            </div>
            <div className="text-lg font-bold text-white">Spreads</div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  const TradingViewVisual = ({ isActive }: VisualProps) => {
    return (
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-[500px]"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isActive ? 0 : 20,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.6 }}
        >
          {/* TradingView chart interface */}
          <div className="rounded-xl overflow-hidden shadow-xl bg-gray-900">
            {/* Chart header */}
            <div className="flex items-center justify-between p-2 bg-gray-800">
              <div className="text-white text-sm font-medium">
                EUR vs US Dollar · 1h
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
            </div>

            {/* Chart area */}
            <div className="relative h-64 p-2">
              <div className="absolute top-2 right-2 z-10 flex space-x-2">
                <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                  DX
                </div>
                <div className="bg-gray-600 text-white px-2 py-1 rounded text-xs font-bold">
                  TV
                </div>
              </div>

              <motion.svg viewBox="0 0 500 200" className="w-full h-full">
                {/* Price grid lines */}
                {[...Array(5)].map((_, i) => (
                  <line
                    key={`h-line-${i}`}
                    x1="0"
                    y1={40 * i}
                    x2="500"
                    y2={40 * i}
                    stroke="#333"
                    strokeWidth="0.5"
                  />
                ))}

                {/* Time grid lines */}
                {[...Array(10)].map((_, i) => (
                  <line
                    key={`v-line-${i}`}
                    x1={50 * i}
                    y1="0"
                    x2={50 * i}
                    y2="200"
                    stroke="#333"
                    strokeWidth="0.5"
                  />
                ))}

                {/* Candles */}
                {[...Array(20)].map((_, i) => {
                  const isUp = Math.random() > 0.5;
                  const height = Math.random() * 20 + 10;
                  const candleWidth = 10;
                  const x = i * 25 + 10;
                  const baseY = 100 + (Math.random() * 40 - 20);

                  return (
                    <g key={`candle-${i}`}>
                      {/* Wick */}
                      <line
                        x1={x + candleWidth / 2}
                        y1={baseY - 10}
                        x2={x + candleWidth / 2}
                        y2={baseY + height + 10}
                        stroke={isUp ? "#22c55e" : "#ef4444"}
                        strokeWidth="1"
                      />

                      {/* Candle body */}
                      <rect
                        x={x}
                        y={isUp ? baseY : baseY}
                        width={candleWidth}
                        height={height}
                        fill={isUp ? "#22c55e" : "#ef4444"}
                      />
                    </g>
                  );
                })}

                {/* Animated trendline */}
                <motion.path
                  d="M0,100 C83,80 167,130 250,90 C333,50 417,110 500,70"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: isActive ? 1 : 0 }}
                  transition={{ duration: 1.5 }}
                />
              </motion.svg>
            </div>

            {/* Chart tools */}
            <div className="bg-gray-800 p-2 flex justify-between items-center">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`tool-${i}`}
                    className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center"
                    whileHover={{ backgroundColor: "#4b5563" }}
                  >
                    <div className="w-3 h-3 rounded-sm bg-gray-500"></div>
                  </motion.div>
                ))}
              </div>
              <div className="text-gray-400 text-xs">09:08:12 (UTC)</div>
            </div>
          </div>

          {/* Person image at bottom */}
          <div className="mt-4 h-16 bg-gradient-to-r from-yellow-100 to-orange-200 rounded-b-xl relative overflow-hidden">
            <div className="absolute right-6 top-2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const MobileTraderVisual = ({ isActive }: VisualProps) => {
    return (
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center space-x-8">
          {/* Phone mockup */}
          <motion.div
            className="relative"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: isActive ? 0 : 20,
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative w-64 h-[500px] bg-black rounded-[40px] p-3 shadow-xl border-4 border-gray-800"
              animate={{
                rotateY: isActive ? [-3, 3, -3] : 0,
                y: isActive ? [0, -5, 0] : 0,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                {/* Phone header */}
                <div className="h-6 bg-black flex justify-center items-end pb-1">
                  <div className="w-20 h-4 bg-black rounded-b-xl"></div>
                </div>

                {/* App content */}
                <div className="p-3 relative">
                  {/* App header */}
                  <div className="flex justify-between mb-3">
                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                      <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    </div>
                  </div>

                  {/* Trading pair */}
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-red-500 mr-1"></div>
                      <div className="text-sm font-medium">EUR/CHF</div>
                    </div>
                    <div className="text-sm font-bold">1.0845</div>
                  </div>

                  {/* Chart */}
                  <div className="w-full h-40 bg-gray-50 rounded-lg mb-3 relative overflow-hidden">
                    <motion.svg viewBox="0 0 100 40" className="w-full h-full">
                      {/* Up candles */}
                      <motion.path
                        d="M0,20 L5,18 L10,22 L15,20 L20,16 L25,14 L30,18 L35,16 L40,12 L45,14 L50,10"
                        stroke="#22c55e"
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isActive ? 1 : 0 }}
                        transition={{ duration: 1 }}
                      />

                      {/* Down candles */}
                      <motion.path
                        d="M50,10 L55,14 L60,18 L65,20 L70,24 L75,22 L80,26 L85,24 L90,28 L95,26 L100,30"
                        stroke="#ef4444"
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: isActive ? 1 : 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </motion.svg>
                  </div>

                  {/* Duration & stake */}
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-500">Duration</div>
                      <div className="bg-gray-100 rounded px-2 py-1 text-xs">
                        15 minutes
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-500">Stake</div>
                      <div className="text-xs font-medium">100 USD</div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <motion.button
                      className="bg-green-500 text-white py-2 rounded-lg text-sm font-medium"
                      whileHover={{ scale: 1.02, backgroundColor: "#22c55e" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Rise
                    </motion.button>
                    <motion.button
                      className="bg-red-500 text-white py-2 rounded-lg text-sm font-medium"
                      whileHover={{ scale: 1.02, backgroundColor: "#ef4444" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Fall
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature card */}
          <motion.div
            className="bg-gray-900 text-white p-6 rounded-xl w-64"
            initial={{ x: 20, opacity: 0 }}
            animate={{
              x: isActive ? 0 : 20,
              opacity: isActive ? 1 : 0,
              boxShadow: isActive
                ? "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                : "none",
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center text-white font-bold text-xl mb-4">
              DT
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-red-500 text-sm mb-1">✕</div>
                <div className="text-lg font-bold">Multipliers</div>
              </div>
              <div>
                <div className="text-red-500 text-sm mb-1">📊</div>
                <div className="text-lg font-bold">Optionsilators</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const BotTradingVisual = ({ isActive }: VisualProps) => {
    return (
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative w-[500px]"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isActive ? 0 : 20,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.6 }}
        >
          {/* Background scene */}
          <div className="relative h-[400px] bg-gradient-to-b from-yellow-200 via-orange-200 to-yellow-300 rounded-xl overflow-hidden">
            {/* People silhouettes */}
            <div className="absolute bottom-0 left-20 w-16 h-28 bg-gradient-to-t from-orange-600 to-red-500 rounded-t-full opacity-80"></div>
            <div className="absolute bottom-0 left-40 w-16 h-24 bg-gradient-to-t from-red-600 to-pink-500 rounded-t-full opacity-80"></div>

            {/* Run button */}
            <motion.div
              className="absolute top-10 right-10 flex"
              animate={{
                y: isActive ? [0, -5, 0] : 0,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="bg-red-500 text-white font-bold p-3 rounded-lg mr-2">
                DB
              </div>
              <div className="bg-green-500 text-white font-bold px-4 py-3 rounded-lg flex items-center">
                <span className="mr-2">Run</span>
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent"></div>
              </div>
            </motion.div>

            {/* Trade notification */}
            <motion.div
              className="absolute top-40 left-10 bg-gray-900 text-white p-4 rounded-lg shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: isActive ? 1 : 0.9,
                opacity: isActive ? 1 : 0,
                y: isActive ? [0, -5, 0] : 0,
              }}
              transition={{
                scale: { duration: 0.3, delay: 0.5 },
                opacity: { duration: 0.3, delay: 0.5 },
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.8,
                },
              }}
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center text-white font-bold mr-2">
                  DB
                </div>
                <div className="text-green-400 text-lg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-400">$45</div>
              <div className="text-sm text-gray-400">trade closed!</div>
            </motion.div>

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                }}
                animate={{
                  y: isActive ? [0, -15, 0] : 0,
                  opacity: isActive ? [0.3, 0.7, 0.3] : 0.3,
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Visual components mapping
  const visualComponents = [
    <CopyTraderVisual key="copy-trader" isActive={activeSection === 0} />,
    <MT5Visual key="mt5" isActive={activeSection === 1} />,
    <TradingViewVisual key="tradingview" isActive={activeSection === 2} />,
    <MobileTraderVisual key="mobile-trader" isActive={activeSection === 3} />,
    <BotTradingVisual key="bot-trading" isActive={activeSection === 4} />,
  ];

  // Platform section component
  const PlatformSection = ({ platform, index }: PlatformSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { amount: 0.6, once: false });

    useEffect(() => {
      if (isInView) {
        setActiveSection(index);
      }
    }, [isInView, index]);

    return (
      <motion.div
        ref={sectionRef}
        className="min-h-screen flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="space-y-6">
          {/* Badge */}
          <motion.div
            className={`inline-flex items-center ${platform.badgeColor} text-white px-4 py-2 rounded-full font-bold`}
            whileHover={{ scale: 1.05 }}
          >
            {platform.badge}
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-5xl font-black text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {platform.title}
          </motion.h3>

          {/* Subtitle */}
          {platform.subtitle && (
            <motion.div
              className="text-xl text-gray-600 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {platform.subtitle}
            </motion.div>
          )}

          {/* Description */}
          <motion.p
            className="text-gray-600 text-lg leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {platform.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group flex items-center space-x-2 text-red-500 font-semibold text-lg hover:text-red-600 transition-colors"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span>{platform.cta}</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      className="bg-white py-20 overflow-hidden"
      id="trade-your-way-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-black text-gray-900 mb-4">
            Trade the way you want
          </h2>
          <motion.div
            className="w-24 h-1 bg-red-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative"
        >
          {/* Left Side - Sticky Visuals */}
          <div className="flex items-center">
            <div className="w-full h-full relative">{visualComponents}</div>
          </div>

          {/* Right Side - Scrolling Content */}
          <div className="">
            {platforms.map((platform, index) => (
              <PlatformSection
                key={platform.id}
                platform={platform}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeYourWaySection;
