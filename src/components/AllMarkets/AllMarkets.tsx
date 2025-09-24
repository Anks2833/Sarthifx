import { useRef, useState, useEffect } from "react";
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
  const [_activeSection, setActiveSection] = useState<number>(0);

  const marketsData: Market[] = [
    {
      title: "Forex",
      description:
        "Trade the most popular currency pairs with high leverage, tight spreads, and fast execution.",
      cards: [
        { pair: "EUR/USD", color: "bg-blue-400", flag: "🇪🇺" },
        { pair: "GBP/USD", color: "bg-red-400", flag: "🇬🇧" },
      ],
      mobileImage: "/MobileMockups/mobileMockup1.webp",
      mockupPosition: "right",
    },
    {
      title: "Derived Indices",
      description:
        "Trade 24/7 on exclusive Synthetic and Derived Indices. Choose volatility levels that match your strategy.",
      cards: [
        { pair: "VOL 100", color: "bg-teal-400", flag: "📈" },
        { pair: "USD BASKET", color: "bg-blue-400", flag: "💱" },
      ],
      mobileImage: "/MobileMockups/mobileMockup2.webp",
      mockupPosition: "right",
    },
    {
      title: "Stocks",
      description: "Trade global market leaders like Apple, Tesla, and NVIDIA.",
      cards: [
        { pair: "AAPL", color: "bg-gray-800", flag: "🍎" },
        { pair: "TSLA", color: "bg-gray-400", flag: "🚗" },
      ],
      mobileImage: "/MobileMockups/mobileMockup3.webp",
      mockupPosition: "right",
    },
    {
      title: "Commodities",
      description: "Trade gold, silver, oil, natural gas, sugar, and more.",
      cards: [
        { pair: "GOLD", color: "bg-yellow-500", flag: "🥇" },
        { pair: "SILVER", color: "bg-gray-400", flag: "🥈" },
      ],
      mobileImage: "/MobileMockups/mobileMockup4.webp",
      mockupPosition: "right",
    },
    {
      title: "Cryptos",
      description:
        "Trade round the clock on the volatility of cryptocurrencies like Bitcoin and Ethereum.",
      cards: [
        { pair: "BTC/USD", color: "bg-orange-500", flag: "₿" },
        { pair: "ETH/USD", color: "bg-gray-700", flag: "Ξ" },
      ],
      mobileImage: "/MobileMockups/mobileMockup5.webp",
      mockupPosition: "right",
    },
    {
      title: "Stock Indices",
      description: "Trade offerings that track the top global stock indices.",
      cards: [
        { pair: "WALL ST 30", color: "bg-green-500", flag: "🏛️" },
        { pair: "US 500", color: "bg-blue-400", flag: "📊" },
      ],
      mobileImage: "/MobileMockups/mobileMockup6.webp",
      mockupPosition: "right",
    },
  ];

  const MarketSection = ({ market, index }: MarketSectionProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setActiveSection(index);
          }
        },
        { threshold: 0.5 }
      );

      if (sectionRef.current) observer.observe(sectionRef.current);

      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    }, [index]);

    return (
      <div
        ref={sectionRef}
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto w-full items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              {market.title}
            </h2>

            <p
              className="text-lg sm:text-xl mb-8 max-w-md leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {market.description}
            </p>

            {/* Trading Cards - Mobile */}
            <div className="flex flex-wrap gap-4 mb-8 lg:hidden">
              {market.cards.map((card: Card) => (
                <div
                  key={`${market.title}-${card.pair}-mobile`}
                  className="p-4 rounded-xl shadow-lg"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-secondary)",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-xl">{card.flag}</div>
                    <div
                      className="font-bold text-base"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {card.pair}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="flex items-center space-x-2 font-semibold text-lg lg:text-xl group"
              style={{ color: "var(--text-accent-orange)" }}
            >
              <span>Learn more</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Content - Desktop Only */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[500px] xl:min-h-[600px] order-1 lg:order-2">
            {/* Trading Cards - Desktop */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 space-y-6 z-10">
              {market.cards.map((card: Card) => (
                <div
                  key={`${market.title}-${card.pair}-desktop`}
                  className="p-4 rounded-xl shadow-xl"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "2px solid var(--border-primary)",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{card.flag}</div>
                    <div
                      className="font-bold text-lg"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {card.pair}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Phone Mockup */}
            <div className="relative z-0 ml-32">
              <img
                src={market.mobileImage}
                alt={`${market.title} Trading App`}
                className="h-[500px] xl:h-[650px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Mobile Image */}
          <div className="flex justify-center order-1 lg:hidden">
            <img
              src={market.mobileImage}
              alt={`${market.title} Trading App`}
              className="h-[350px] sm:h-[400px] w-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="py-12 lg:py-20">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 px-4">
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            All your markets in one place
          </h2>
        </div>

        {/* Market Sections */}
        {marketsData.map((market, index) => (
          <MarketSection key={market.title} market={market} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AllMarkets;
