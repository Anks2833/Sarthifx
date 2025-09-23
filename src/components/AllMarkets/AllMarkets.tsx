import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Type definitions
interface Card {
  pair: string;
  color: string;
  flag: string;
}

interface Market {
  title: string;
  description: string;
  cards: Card[];
  mobileImage: string;
  mockupPosition: string;
}

interface MarketSectionProps {
  market: Market;
  index: number;
}

const AllMarkets = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  const marketsData: Market[] = [
    {
      title: "Forex",
      description:
        "Trade the most popular currency pairs with high leverage, tight spreads, and fast execution.",
      cards: [
        {
          pair: "EUR/USD",
          color: "bg-blue-400",
          flag: "🇪🇺",
        },
        {
          pair: "GBP/USD",
          color: "bg-red-400",
          flag: "🇬🇧",
        },
      ],
      mobileImage:
        "https://unsplash.com/photos/red-and-blue-light-streaks-fiXLQXAhCfk", // placeholder - replace with actual path
      mockupPosition: "right",
    },
    {
      title: "Derived Indices",
      description:
        "Trade 24/7 on exclusive Synthetic and Derived Indices. Choose volatility levels that match your strategy.",
      cards: [
        {
          pair: "VOL 100",
          color: "bg-teal-400",
          flag: "📈",
        },
        {
          pair: "USD BASKET",
          color: "bg-blue-400",
          flag: "💱",
        },
      ],
      mobileImage:
        "https://unsplash.com/photos/red-and-blue-light-streaks-fiXLQXAhCfk", // placeholder
      mockupPosition: "right",
    },
    {
      title: "Stocks",
      description: "Trade global market leaders like Apple, Tesla, and NVIDIA.",
      cards: [
        {
          pair: "AAPL",
          color: "bg-gray-800",
          flag: "🍎",
        },
        {
          pair: "TSLA",
          color: "bg-gray-400",
          flag: "🚗",
        },
      ],
      mobileImage:
        "https://unsplash.com/photos/red-and-blue-light-streaks-fiXLQXAhCfk", // placeholder
      mockupPosition: "right",
    },
    {
      title: "Commodities",
      description: "Trade gold, silver, oil, natural gas, sugar, and more.",
      cards: [
        {
          pair: "GOLD",
          color: "bg-yellow-500",
          flag: "🥇",
        },
        {
          pair: "SILVER",
          color: "bg-gray-400",
          flag: "🥈",
        },
      ],
      mobileImage:
        "https://unsplash.com/photos/red-and-blue-light-streaks-fiXLQXAhCfk", // placeholder
      mockupPosition: "right",
    },
    {
      title: "Cryptos",
      description:
        "Trade round the clock on the volatility of cryptocurrencies like Bitcoin and Ethereum.",
      cards: [
        {
          pair: "BTC/USD",
          color: "bg-orange-500",
          flag: "₿",
        },
        {
          pair: "ETH/USD",
          color: "bg-gray-700",
          flag: "Ξ",
        },
      ],
      mobileImage:
        "https://unsplash.com/photos/red-and-blue-light-streaks-fiXLQXAhCfk", // placeholder
      mockupPosition: "right",
    },
    {
      title: "Stock Indices",
      description: "Trade offerings that track the top global stock indices.",
      cards: [
        {
          pair: "WALL ST 30",
          color: "bg-green-500",
          flag: "🏛️",
        },
        {
          pair: "US 500",
          color: "bg-blue-400",
          flag: "📊",
        },
      ],
      mobileImage:
        "https://unsplash.com/photos/red-and-blue-light-streaks-fiXLQXAhCfk", // placeholder
      mockupPosition: "right",
    },
  ];

  // Simple implementation to match the screenshots
  const MarketSection = ({ market, index }: MarketSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { amount: 0.6 });

    useEffect(() => {
      if (isInView) {
        setActiveSection(index);
      }
    }, [isInView, index]);

    return (
      <div
        ref={sectionRef}
        className="min-h-screen flex items-center justify-between px-6 py-20 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-6xl font-black text-gray-900 mb-6">
              {market.title}
            </h2>

            <p className="text-xl text-gray-600 mb-8 max-w-md leading-relaxed">
              {market.description}
            </p>

            <motion.a
              href="#"
              className="flex items-center space-x-2 text-red-500 font-semibold text-xl"
              whileHover={{ x: 5 }}
            >
              <span>Learn more</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Right Content with Phone and Cards */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[600px]">
            {index === activeSection && (
              <>
                {/* Trading cards */}
                <AnimatePresence>
                  {market.cards.map((card: Card, cardIndex: number) => (
                    <motion.div
                      key={`${market.title}-${card.pair}`}
                      className={`absolute ${card.color} p-4 rounded-2xl shadow-xl text-white z-10`}
                      style={{
                        top: cardIndex === 0 ? "20%" : "60%",
                        left: "5%",
                      }}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4, delay: cardIndex * 0.1 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{card.flag}</div>
                        <div className="font-bold text-lg">{card.pair}</div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Connecting lines */}
                <motion.div
                  className="absolute z-10 left-[30%] top-1/2 transform -translate-y-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <svg
                    width="150"
                    height="300"
                    viewBox="0 0 150 300"
                    fill="none"
                  >
                    <motion.path
                      d={`M0,${market.cards[0].pair.length * 5} H100 V150 H140`}
                      stroke="#ff0040"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                    <motion.path
                      d={`M0,${
                        250 - market.cards[1].pair.length * 5
                      } H100 V150 H140`}
                      stroke="#ff0040"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    />
                  </svg>
                </motion.div>

                {/* Phone Mockup */}
                <motion.div
                  className="relative z-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Mobile mockup with screenshot */}
                  {index === 0 && (
                    <img
                      src="/MobileMockups/mobileMockup1.webp"
                      alt="Forex Trading App"
                      className="h-[650px] w-auto object-contain"
                    />
                  )}
                  {index === 1 && (
                    <img
                      src="/MobileMockups/mobileMockup2.webp"
                      alt="Derived Indices Trading App"
                      className="h-[650px] w-auto object-contain"
                    />
                  )}
                  {index === 2 && (
                    <img
                      src="/MobileMockups/mobileMockup3.webp"
                      alt="Stocks Trading App"
                      className="h-[650px] w-auto object-contain"
                    />
                  )}
                  {index === 3 && (
                    <img
                      src="/MobileMockups/mobileMockup4.webp"
                      alt="Commodities Trading App"
                      className="h-[650px] w-auto object-contain"
                    />
                  )}
                  {index === 4 && (
                    <img
                      src="/MobileMockups/mobileMockup5.webp"
                      alt="Crypto Trading App"
                      className="h-[650px] w-auto object-contain"
                    />
                  )}
                  {index === 5 && (
                    <img
                      src="/MobileMockups/mobileMockup6.webp"
                      alt="Stock Indices Trading App"
                      className="h-[650px] w-auto object-contain"
                    />
                  )}
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white overflow-hidden">
      <div className="py-20">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-black text-gray-900 mb-4">
            All your markets in one place
          </h2>
          <motion.div
            className="h-1 w-24 bg-red-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Market Sections */}
        {marketsData.map((market, index) => (
          <MarketSection key={market.title} market={market} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AllMarkets;
