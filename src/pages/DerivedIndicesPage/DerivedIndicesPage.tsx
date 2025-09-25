import { useState } from "react";
import {
  Clock,
  Shield,
  Zap,
  BarChart3,
  DollarSign,
  Target,
  Scale,
  Calendar,
} from "lucide-react";

import { FaCoins } from "react-icons/fa";

const DerivedIndicesPage = () => {
  const [activeTab, setActiveTab] = useState("synthetic");
  const [expandedFAQ, setExpandedFAQ] = useState<Record<string, boolean>>({});

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const tabs = [
    { id: "synthetic", label: "Synthetic Indices" },
    { id: "basket", label: "Basket Indices" },
    { id: "tactical", label: "Tactical Indices" },
    { id: "derived-fx", label: "Derived FX" },
  ];

  const syntheticBenefits = [
    {
      icon: <Clock size={40} />,
      title: "24/7 trading",
      description:
        "Round-the-clock access to Synthetic Indices, including weekends and public holidays.",
    },
    {
      icon: <Shield size={40} />,
      title: "Free from real-world risks",
      description:
        "Simulated markets that are not affected by regular market hours or real-world market and liquidity risks.",
    },
    {
      icon: <Zap size={40} />,
      title: "Up to 1:1000 leverage",
      description:
        "Leverage up to 1:1000 on selected instruments to make the most of your capital.",
    },
  ];

  const syntheticTypes = [
    {
      name: "Drift Switching Indices",
      description:
        "These instruments shift between bullish, bearish, or side-ways trends. Ideal for smart buys, strategic sells, and timely pauses. And the best part? Predictable shifts at average durations of 10, 20, or 30 minutes mean you can anticipate and plan ahead.",
    },
    {
      name: "DEX Indices",
      description:
        "Expect dramatic spikes and drops every 10, 15, or 25 minutes (on average) with smaller fluctuations in between.",
    },
    {
      name: "Volatility Indices",
      description:
        "Choose from a range of constant volatilities from a serene 10% to a stormy 250%. Plus, set your pace with tick speeds of every 2 seconds for normal, or every second for fast action.",
    },
    {
      name: "Crash/Boom Indices",
      description:
        "Take your pick from Crash Indices for sudden downturns or Boom Indices for rapid surges. Dial in the action with frequencies of 300, 500, 600, 900, or 1,000 ticks to determine how often (on average) your market will crash or boom.",
    },
    {
      name: "Jump Indices",
      description:
        "Expect prices to leap every 20 minutes (on average), with an equal chance of soaring or plunging around 30x the normal volatility of the index. And you can choose from 10%, 25%, 50%, 75%, and 100% volatility.",
    },
    {
      name: "Step Indices",
      description:
        "With each tick, the price of this instrument steps up or down by 0.1, 0.2, 0.3, 0.4, or 0.5 – no wild swings or complicated trends. Just fixed, step-by-step movements.",
    },
    {
      name: "Range Break Indices",
      description:
        "A ranging market where the price bounces between upper and lower boundaries, with sudden high or low breaks to create a new range. Tailor to your pace with a choice of break frequencies – every 100 or 200 boundary hits (on average).",
    },
    {
      name: "Daily Reset Indices",
      description:
        "These instruments simulate simplified bull (rising) and bear (falling) market trends. Mirroring real-world economic upturns driven by positive sentiment or downturns driven by pessimism. Each index resets daily to a baseline.",
    },
    {
      name: "Multi Step Indices",
      description:
        "These indices would likely jump or dip by 0.1 but can move up or down by 0.2, 0.25, 0.3, or 0.5 steps in less frequent instances.",
    },
    {
      name: "Hybrid Indices",
      description:
        "Experience the predictability of Crash/Boom indices with a 20% volatility boost. Capture movements based on real markets, combining steady patterns and dynamic jumps.",
    },
    {
      name: "Skew Step Indices",
      description:
        "Move beyond traditional Step Indices and trade with asymmetric step sizes and probabilities. With 80% or 90% probabilities for small shifts and 10% or 20% for sharp movements, every tick offers an opportunity to capitalise on dynamic market changes.",
    },
    {
      name: "Trek Indices",
      description:
        "Most price changes are small, but the distribution skews toward larger movements in one direction. Choose up or down to access 30% volatility markets with built-in directional bias.",
    },
    {
      name: "Volatility Switch Indices",
      description:
        "Trade in shifting market conditions with volatility levels like 10%, 50%, or 100%, each lasting 5 to 60 minutes on average.",
    },
    {
      name: "Stable Spread Instruments",
      description:
        "Avoid unexpected spread increases with pricing that stays steady throughout the day, even during high-volatility periods. These instruments minimise sudden spread changes for more predictable trading costs.",
    },
  ];

  const basketBenefits = [
    {
      icon: <Target size={40} />,
      title: "Diversified exposure",
      description:
        "Trade a mix of currencies in one position, with each currency in the basket equally weighted.",
    },
    {
      icon: <FaCoins size={36} />,
      title: "Lower transaction costs",
      description:
        "Save on spreads and commissions by trading multiple currencies within a single instrument.",
    },
    {
      icon: <Shield size={40} />,
      title: "Risk management features",
      description:
        "Utilise stop loss, take profit, and negative balance protection to protect your capital.",
    },
  ];

  const basketTypes = [
    {
      name: "Gold Basket",
      description:
        "With the gold basket, you can hedge with gold against 5 global currencies with a single trade.",
    },
    {
      name: "Forex Basket",
      description:
        "Currency baskets measure the value of 1 major currency against a basket of 5 global currencies.",
    },
  ];

  const tacticalBenefits = [
    {
      icon: <DollarSign size={40} />,
      title: "Reduced trading costs",
      description:
        "Minimal manual intervention reduces the costs associated with frequent trading.",
    },
    {
      icon: <Target size={40} />,
      title: "Pre-built strategies",
      description:
        "Unique indices with 4 ready-made strategies designed for different market conditions.",
    },
    {
      icon: <Scale size={40} />,
      title: "Automatic rebalancing",
      description:
        "Index prices adjust automatically based market signals. No constant monitoring required.",
    },
  ];

  const tacticalTypes = [
    {
      name: "RSI Rebound Index",
      description:
        "When you buy this index, you're choosing a strategy designed to capitalise on potential upward price reversals in Silver, Gold or Forex. The strategy uses RSI signals to identify moments when prices may rebound, positioning you to take advantage of these movements.",
    },
    {
      name: "RSI Pullback Index",
      description:
        "Buying this index means you're following a strategy aimed at potentially profiting from short-term price drops during an overall uptrend. The index uses RSI signals to detect pullbacks and adjusts your positions accordingly.",
    },
    {
      name: "RSI Trend Up Index",
      description:
        "Buying this index aligns you with a strategy focused on capturing sustained upward trends in Silver, Gold or Forex prices. The index uses RSI signals to track bullish momentum and adjust trades to stay in line with rising prices.",
    },
    {
      name: "RSI Trend Down Index",
      description:
        "By buying this index, you're adopting a strategy that targets prolonged downward movements in Silver, Gold or Forex. The index uses RSI signals to follow bearish momentum and adjusts positions to potentially benefit from falling prices.",
    },
  ];

  const derivedFXBenefits = [
    {
      icon: <Shield size={40} />,
      title: "Limited real-world influence",
      description:
        "Market-based values with minimal influence from global events.",
    },
    {
      icon: <Calendar size={40} />,
      title: "Weekday trading",
      description:
        "Trade in sync with global forex market hours, from Monday to Friday.",
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Tighter spreads",
      description:
        "Benefit from competitive spreads for cost-efficient trading.",
    },
  ];

  const platforms = {
    cfds: ["MT5", "cTrader", "Deriv X"],
    options: ["Deriv Trader", "Deriv Bot", "Deriv GO"],
  };

  const faqs = {
    synthetic: [
      {
        id: "swap-free",
        question: "Can I trade Synthetic Indices on swap-free accounts?",
        answer:
          "Yes, selected Synthetic Indices are available on the Deriv MT5 swap-free account.",
      },
      {
        id: "technical-indicators",
        question:
          "Do technical indicators work the same for Synthetic Indices?",
        answer:
          "Technical indicators work similarly on Synthetic Indices as they do on other markets, but results may vary due to the unique characteristics of simulated markets.",
      },
      {
        id: "news-impact",
        question:
          "Can external news events impact the price of Synthetic Indices?",
        answer:
          "No, Synthetic Indices are generated by cryptographically secure random number generators and are not affected by real-world news or market events.",
      },
      {
        id: "live-trading",
        question: "Are Synthetic Indices available for live trading?",
        answer:
          "Yes, Synthetic Indices are available for both demo and live trading on our platforms.",
      },
    ],
    basket: [
      {
        id: "trading-hours",
        question: "When can I trade Basket Indices?",
        answer: "Basket Indices are available 24/5, during market hours.",
      },
      {
        id: "technical-indicators-basket",
        question: "Do technical indicators work the same for Basket Indices?",
        answer:
          "Yes, technical indicators work on Basket Indices similar to other forex instruments.",
      },
      {
        id: "news-impact-basket",
        question:
          "Can external news events impact the price of Basket Indices?",
        answer:
          "Yes, since Basket Indices are based on real currency movements, they can be influenced by economic news and global events affecting the underlying currencies.",
      },
    ],
    tactical: [
      {
        id: "rsi-usage",
        question: "How is RSI used in Tactical Indices?",
        answer:
          "RSI (Relative Strength Index) is a momentum oscillator that helps identify overbought or oversold conditions in the market. Based on this signal, the Tactical Indices automatically generate buy or sell signals to capitalise on short-term market movements. To understand more about how RSI works, read our beginner's guide to Tactical Indices.",
      },
      {
        id: "customise-parameters",
        question: "Can I customise the parameters of Tactical Indices?",
        answer:
          "No, the parameters of Tactical Indices are pre-set and cannot be customised. However, you can choose from different index types based on your trading strategy.",
      },
      {
        id: "trading-hours-tactical",
        question: "What are the trading hours of Tactical Indices?",
        answer:
          "Tactical Indices follow the same trading hours as the underlying assets (Silver, Gold, or Forex pairs).",
      },
      {
        id: "platforms-tactical",
        question: "On which platforms are Tactical Indices offered?",
        answer:
          "Tactical Indices are available on Deriv MT5, Deriv cTrader, and Deriv X platforms.",
      },
    ],
    derivedFX: [
      {
        id: "difference-regular-fx",
        question: "What's the difference between Derived FX and regular FX?",
        answer:
          "Derived FX instruments are based on real FX rates but have minimal influence from real-world market sentiment and news events, providing a more stable trading environment focused on technical analysis.",
      },
      {
        id: "trading-hours-dfx",
        question: "What are the trading hours for Derived FX?",
        answer:
          "Derived FX follows standard forex market hours, typically Monday to Friday, 24 hours a day.",
      },
    ],
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "synthetic":
        return (
          <div className="">
            {/* Benefits Section */}
            <section>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
                Why trade Synthetic Indices with Sarthifx
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {syntheticBenefits.map((benefit, index) => (
                  <div key={index} className="text-center space-y-4 border border-zinc-600 p-5 rounded-xl mb-20">
                    <div className="text-6xl flex justify-center">{benefit.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {benefit.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Synthetic Types Section */}
            <section>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
                Synthetic Indices available on Sarthifx
              </h2>
              <div className="space-y-8 sm:space-y-12">
                {syntheticTypes.map((type, index) => (
                  <div
                    key={index}
                    className="border-b border-white/10 pb-8 sm:pb-12"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">
                      {type.name}
                    </h3>
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button
                  className="px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ background: "var(--text-accent-orange)" }}
                >
                  Check trading specs
                </button>
              </div>
            </section>
          </div>
        );

      case "basket":
        return (
          <div className="space-y-16 sm:space-y-20">
            {/* Description */}
            <section className="text-center">
              <p
                className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Trade Sarthifx's Basket Indices, including Forex Baskets (AUD,
                EUR, GBP, USD) and a Gold Basket, each against a mix of five
                major currencies, equally weighted.
              </p>
            </section>

            {/* Benefits Section */}
            <section>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
                Why trade Basket Indices with Sarthifx
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {basketBenefits.map((benefit, index) => (
                  <div key={index} className="text-center space-y-4 border border-zinc-600 p-5 rounded-xl mb-20">
                    <div className="text-6xl flex justify-center">{benefit.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {benefit.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Basket Types Section */}
            <section>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
                Basket Indices available on Sarthifx
              </h2>
              <div className="space-y-8 sm:space-y-12">
                {basketTypes.map((type, index) => (
                  <div
                    key={index}
                    className="border-b border-white/10 pb-8 sm:pb-12"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">
                      {type.name}
                    </h3>
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button
                  className="px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ background: "var(--text-accent-orange)" }}
                >
                  Check trading specs
                </button>
              </div>
            </section>
          </div>
        );

      case "tactical":
        return (
          <div className="space-y-16 sm:space-y-20">
            {/* Description */}
            <section className="text-center">
              <p
                className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Trade Tactical Indices designed to move based on signals from
                technical indicators. These indices provide structured price
                action, independent of real-world market events.
              </p>
            </section>

            {/* Benefits Section */}
            <section>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
                Why trade Tactical Indices with Sarthifx
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {tacticalBenefits.map((benefit, index) => (
                  <div key={index} className="text-center space-y-4 border border-zinc-600 p-5 rounded-xl mb-20">
                    <div className="text-6xl flex justify-center">{benefit.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {benefit.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Tactical Types Section */}
            <section>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
                Tactical Indices available on Sarthifx
              </h2>
              <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
                {tacticalTypes.map((type, index) => (
                  <div
                    key={index}
                    className="p-6 sm:p-8 rounded-2xl"
                    style={{ background: "var(--bg-secondary)" }}
                  >
                    <div className="mb-6">
                      <div
                        className="w-full h-48 rounded-xl mb-4 flex items-center justify-center"
                        style={{ background: "var(--bg-accent)" }}
                      >
                        <BarChart3 size={64} />
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">
                      {type.name}
                    </h3>
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <button
                  className="px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ background: "var(--text-accent-orange)" }}
                >
                  Check trading specs
                </button>
              </div>
            </section>
          </div>
        );

      case "derived-fx":
        return (
          <div className="space-y-16 sm:space-y-20">
            {/* Description */}
            <section className="text-center">
              <p
                className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Trade Derived FX on demo accounts with minimal influence from
                market sentiment and news. Stay focused on technical analysis
                and strategy development without distractions.
              </p>
            </section>

            {/* Benefits Section */}
            <section>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
                Why trade Derived FX with Sarthifx
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {derivedFXBenefits.map((benefit, index) => (
                  <div key={index} className="text-center space-y-4 border border-zinc-600 p-5 rounded-xl mb-20">
                    <div className="text-6xl flex justify-center">{benefit.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {benefit.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="pt-16 sm:pt-20"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section className="text-center pt-20 mb-20">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Get real opportunities with{" "}
            <span style={{ color: "var(--text-accent-orange)" }}>
              virtual markets
            </span>
          </h1>
          <p
            className="text-lg sm:text-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Trade our exclusive Derived Indices that simulate real-world
            markets. Choose a market with volatility that suits your trading
            style. Most Derived Indices are available to trade 24/7.
          </p>
          <button
            className="px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            style={{ background: "var(--text-accent-orange)" }}
          >
            Try free demo
          </button>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                style={{
                  background:
                    activeTab === tab.id
                      ? "var(--text-accent-orange)"
                      : "transparent",
                  border:
                    activeTab === tab.id
                      ? "none"
                      : "2px solid var(--bg-secondary)",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">{renderTabContent()}</div>
      </section>

      {/* How to Trade Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
            How to trade {tabs.find((tab) => tab.id === activeTab)?.label} on
            Sarthifx
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* CFDs */}
            <div className="text-center space-y-8">
              <h3 className="text-3xl sm:text-4xl font-bold">CFDs</h3>
              <p
                className="text-base sm:text-lg leading-relaxed max-w-md mx-auto"
                style={{ color: "var(--text-secondary)" }}
              >
                Speculate on the price movements of popular{" "}
                {tabs.find((tab) => tab.id === activeTab)?.label} with high
                leverage and advanced technical indicators.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity"
                style={{ color: "var(--text-accent-blue)" }}
              >
                Learn more
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>

              <div className="space-y-4">
                <h4 className="text-xl font-bold">Platforms</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {platforms.cfds.map((platform, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg"
                      style={{ background: "var(--bg-accent)" }}
                    >
                      <div
                        className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold text-white"
                        style={{
                          background:
                            platform === "MT5"
                              ? "var(--text-accent-blue)"
                              : platform === "cTrader"
                              ? "var(--text-accent-orange)"
                              : "var(--text-accent-orange)",
                        }}
                      >
                        {platform === "MT5"
                          ? "MT5"
                          : platform === "cTrader"
                          ? "cT"
                          : "DX"}
                      </div>
                      <span className="text-sm sm:text-base">
                        Sarthifx {platform}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="text-center space-y-8">
              <h3 className="text-3xl sm:text-4xl font-bold">Options</h3>
              <p
                className="text-base sm:text-lg leading-relaxed max-w-md mx-auto"
                style={{ color: "var(--text-secondary)" }}
              >
                Predict the market trends of{" "}
                {tabs.find((tab) => tab.id === activeTab)?.label} without the
                risk of losing your initial stake.
              </p>
              <a
                href="#"
                className="inline-flex items-center font-semibold hover:opacity-80 transition-opacity"
                style={{ color: "var(--text-accent-blue)" }}
              >
                Learn more
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>

              <div className="space-y-4">
                <h4 className="text-xl font-bold">Platforms</h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {platforms.options.map((platform, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg"
                      style={{ background: "var(--bg-accent)" }}
                    >
                      <div
                        className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: "var(--text-accent-orange)" }}
                      >
                        {platform === "Deriv Trader"
                          ? "DT"
                          : platform === "Deriv Bot"
                          ? "DB"
                          : "GO"}
                      </div>
                      <span className="text-sm sm:text-base">{platform}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
            {tabs.find((tab) => tab.id === activeTab)?.label} FAQs
          </h2>

          <div className="space-y-6">
            {faqs[activeTab as keyof typeof faqs]?.map((faq) => (
              <div key={faq.id} className="border-b border-white/10 pb-6">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between py-4 text-left hover:opacity-80 transition-opacity"
                >
                  <span className="text-lg sm:text-xl font-semibold pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 transform transition-transform flex-shrink-0 ${
                      expandedFAQ[faq.id] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {expandedFAQ[faq.id] && (
                  <div className="pb-4">
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DerivedIndicesPage;
