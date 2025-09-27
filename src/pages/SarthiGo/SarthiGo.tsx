import { useState } from "react";
import {
  Smartphone,
  Download,
  Clock,
  DollarSign,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Globe,
  Play,
  Users,
  ArrowUpRight,
  QrCode,
} from "lucide-react";

const SarthiGo = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    {
      value: "50+",
      label: "Tradable assets",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "var(--text-accent-blue)",
    },
    {
      value: "$1",
      label: "Minimum stake",
      icon: <DollarSign className="w-8 h-8" />,
      color: "var(--text-accent-orange)",
    },
    {
      value: "24/7",
      label: "Trading",
      icon: <Clock className="w-8 h-8" />,
      color: "var(--border-primary)",
    },
  ];

  const features = [
    {
      title: "24/7 trading",
      description:
        "Trade Synthetic Indices and Cryptocurrencies round the clock and Forex during regular market hours.",
      icon: <Clock className="w-12 h-12" />,
      color: "var(--text-accent-blue)",
    },
    {
      title: "User-friendly features",
      description:
        "Enjoy a smooth trading experience with easy-to-use charts and a pleasant dark theme.",
      icon: <Users className="w-12 h-12" />,
      color: "var(--text-accent-orange)",
    },
    {
      title: "Easy access",
      description:
        "Get instant access to your trades wherever you are whenever you want.",
      icon: <Zap className="w-12 h-12" />,
      color: "var(--border-primary)",
    },
  ];

  const riskFeatures = [
    {
      title: "Better risk management",
      description:
        "Customise your contracts to suit your risk appetite using innovative features like stop loss, take profit, and deal cancellation.",
      icon: <Shield className="w-12 h-12" />,
      color: "var(--text-accent-blue)",
    },
    {
      title: "Multiply your profit and limit your loss",
      description:
        "Amplify your potential profits up to 4000x without losing more than your initial capital with Multipliers.",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "var(--text-accent-orange)",
    },
  ];

  const currencyPairs = [
    { base: "AUD", quote: "USD", flag1: "🇦🇺", flag2: "🇺🇸" },
    { base: "EUR", quote: "USD", flag1: "🇪🇺", flag2: "🇺🇸" },
    { base: "GBP", quote: "USD", flag1: "🇬🇧", flag2: "🇺🇸" },
    { base: "USD", quote: "JPY", flag1: "🇺🇸", flag2: "🇯🇵" },
    { base: "USD", quote: "CHF", flag1: "🇺🇸", flag2: "🇨🇭" },
    { base: "CAD", quote: "USD", flag1: "🇨🇦", flag2: "🇺🇸" },
  ];

  return (
    <div
      className="pt-20"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div
                className="px-3 py-1 rounded-md text-sm font-bold text-white"
                style={{ background: "var(--text-accent-orange)" }}
              >
                GO
              </div>
              <span className="text-lg font-semibold">Sarthifx App</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A mobile trading platform for{" "}
              <span style={{ color: "var(--text-accent-orange)" }}>
                on-the-go traders
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Take your trades wherever you go. Trade Multipliers and
              Accumulator Options on Forex, Cryptocurrencies and 24/7 Derived
              Indices without risking more than your initial capital.
            </p>

            <button
              className="px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
              style={{ background: "var(--text-accent-orange)" }}
            >
              <Download size={20} />
              Download now
            </button>
          </div>

          <div className="relative">
            {/* Main Phone Mockup */}
            <div className="relative z-10">
              <div
                className="w-80 h-[500px] rounded-3xl p-6 shadow-2xl mx-auto"
                style={{ background: "var(--bg-secondary)" }}
              >
                <div className="h-full flex flex-col">
                  {/* Phone header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm">9:41</div>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Trading interface */}
                  <div className="flex-1 space-y-4">
                    <div
                      className="p-4 rounded-xl"
                      style={{ background: "var(--bg-accent)" }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">AUD/JPY</span>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-xs text-green-500">+0.4</span>
                        </div>
                      </div>
                      <div className="h-20 flex items-end justify-between">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 rounded-t"
                            style={{
                              height: `${Math.random() * 60 + 10}px`,
                              background:
                                Math.random() > 0.5
                                  ? "var(--text-accent-blue)"
                                  : "var(--text-accent-orange)",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div
                      className="p-4 rounded-xl"
                      style={{ background: "var(--bg-accent)" }}
                    >
                      <div className="text-sm font-medium mb-2">
                        Trade Amount
                      </div>
                      <div className="text-2xl font-bold">$25.00</div>
                    </div>

                    <button
                      className="w-full py-3 rounded-xl text-white font-medium"
                      style={{ background: "var(--text-accent-orange)" }}
                    >
                      Start Trade
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Currency Pairs */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute -top-4 -left-8 px-4 py-2 rounded-lg text-sm font-semibold"
                style={{
                  background: "var(--text-accent-blue)",
                  color: "white",
                }}
              >
                GBP/USD
              </div>

              <div
                className="absolute top-20 -right-12 px-4 py-2 rounded-lg text-sm font-semibold"
                style={{
                  background: "var(--text-accent-orange)",
                  color: "white",
                }}
              >
                USD/JPY
              </div>

              <div
                className="absolute bottom-20 -left-8 px-4 py-2 rounded-lg text-sm font-semibold"
                style={{
                  background: "var(--border-primary)",
                  color: "black",
                }}
              >
                AUD/USD
              </div>

              <div
                className="absolute bottom-4 -right-8 px-4 py-2 rounded-lg text-sm font-semibold"
                style={{
                  background: "var(--text-accent-blue)",
                  color: "white",
                }}
              >
                EUR/USD
              </div>

              <div
                className="absolute top-1/2 -right-16 px-4 py-2 rounded-lg text-sm font-semibold"
                style={{
                  background: "var(--text-accent-orange)",
                  color: "white",
                }}
              >
                USD/CAD
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        className="py-16 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div
                  className={`p-8 rounded-2xl border transition-all duration-500 ${
                    hoveredStat === index ? "scale-105 -translate-y-2" : ""
                  }`}
                  style={{
                    background: `linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-primary) 100%)`,
                    borderColor:
                      hoveredStat === index ? stat.color : "var(--bg-accent)",
                    boxShadow:
                      hoveredStat === index
                        ? `0 25px 50px -12px ${stat.color}40`
                        : "none",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{
                      background:
                        hoveredStat === index ? stat.color : `${stat.color}20`,
                    }}
                  >
                    <div
                      style={{
                        color: hoveredStat === index ? "white" : stat.color,
                      }}
                    >
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-4">
                    {stat.value}
                  </div>
                  <div
                    className="text-lg font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trade Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why trade with Sarthifx App
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    activeFeature === index ? "scale-105" : "hover:scale-105"
                  }`}
                  style={{
                    background: `linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-secondary) 100%)`,
                    borderColor:
                      activeFeature === index
                        ? feature.color
                        : "var(--bg-accent)",
                  }}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background:
                          activeFeature === index
                            ? feature.color
                            : `${feature.color}20`,
                      }}
                    >
                      <div
                        style={{
                          color:
                            activeFeature === index ? "white" : feature.color,
                        }}
                      >
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">
                        {feature.title}
                      </h3>
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <div
                className="w-64 h-96 rounded-3xl p-6 shadow-2xl"
                style={{ background: "var(--bg-accent)" }}
              >
                <div className="h-full flex flex-col justify-center items-center space-y-6">
                  <div className="text-center">
                    <Smartphone
                      size={48}
                      style={{ color: "var(--text-accent-blue)" }}
                      className="mx-auto mb-4"
                    />
                    <div className="text-lg font-bold">Mobile Trading</div>
                    <div
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Trade anywhere, anytime
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div
                      className="p-3 rounded-lg text-center"
                      style={{ background: "var(--bg-secondary)" }}
                    >
                      <div className="text-sm font-medium">Forex</div>
                    </div>
                    <div
                      className="p-3 rounded-lg text-center"
                      style={{ background: "var(--bg-secondary)" }}
                    >
                      <div className="text-sm font-medium">Crypto</div>
                    </div>
                    <div
                      className="p-3 rounded-lg text-center"
                      style={{ background: "var(--bg-secondary)" }}
                    >
                      <div className="text-sm font-medium">Indices</div>
                    </div>
                    <div
                      className="p-3 rounded-lg text-center"
                      style={{ background: "var(--bg-secondary)" }}
                    >
                      <div className="text-sm font-medium">24/7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-8">
                <div
                  className="w-32 h-32 rounded-2xl border-4 p-4"
                  style={{ borderColor: "var(--text-primary)" }}
                >
                  <div className="w-full h-full bg-white rounded-lg grid grid-cols-8 gap-1">
                    {[...Array(64)].map((_, i) => (
                      <div
                        key={i}
                        className={`${
                          Math.random() > 0.5 ? "bg-black" : "bg-white"
                        } rounded-sm`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="text-lg font-semibold mb-2 flex items-center justify-center lg:justify-start gap-2">
                  <QrCode size={20} />
                  Scan to download
                </div>
                <div className="text-2xl font-bold">Android, iOS & Huawei</div>
                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  *The availability of Sarthifx App depends on your country of
                  residence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <button
                className="flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-accent)",
                  borderColor: "var(--bg-accent)",
                }}
              >
                <Play size={24} style={{ color: "var(--text-accent-blue)" }} />
                <span className="text-sm font-medium">Google Play</span>
              </button>

              <button
                className="flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-accent)",
                  borderColor: "var(--bg-accent)",
                }}
              >
                <Download
                  size={24}
                  style={{ color: "var(--text-accent-orange)" }}
                />
                <span className="text-sm font-medium">App Store</span>
              </button>

              <button
                className="flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-accent)",
                  borderColor: "var(--bg-accent)",
                }}
              >
                <Smartphone
                  size={24}
                  style={{ color: "var(--border-primary)" }}
                />
                <span className="text-sm font-medium">AppGallery</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Management Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {riskFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: feature.color }}
                    >
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold">
                      {feature.title}
                    </h2>
                  </div>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {feature.description}
                  </p>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className="w-80 h-96 rounded-3xl p-6 mx-auto"
                    style={{ background: "var(--bg-accent)" }}
                  >
                    <div className="h-full flex flex-col justify-center items-center">
                      {index === 0 ? (
                        <div className="space-y-6 w-full">
                          <div className="text-center mb-6">
                            <Shield
                              size={48}
                              style={{ color: "var(--text-accent-blue)" }}
                              className="mx-auto mb-3"
                            />
                            <div className="text-lg font-bold">
                              Risk Management
                            </div>
                          </div>

                          <div
                            className="p-4 rounded-xl"
                            style={{ background: "var(--bg-secondary)" }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm">Take Profit</span>
                              <span className="text-green-400 font-medium">
                                $100.00
                              </span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Stop Loss</span>
                              <span className="text-red-400 font-medium">
                                $50.00
                              </span>
                            </div>
                          </div>

                          <div className="flex justify-center gap-2">
                            {[100, 200, 300, 500, 1000].map((multiplier) => (
                              <button
                                key={multiplier}
                                className="px-3 py-1 rounded-lg text-xs font-medium border"
                                style={{
                                  backgroundColor: "var(--bg-secondary)",
                                  borderColor: "var(--border-primary)",
                                }}
                              >
                                x{multiplier}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="text-center space-y-6">
                          <TrendingUp
                            size={48}
                            style={{ color: "var(--text-accent-orange)" }}
                            className="mx-auto"
                          />
                          <div className="text-lg font-bold">Multipliers</div>

                          <div className="space-y-4">
                            <div
                              className="p-4 rounded-xl"
                              style={{ background: "var(--bg-secondary)" }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm">
                                  Potential Profit
                                </span>
                                <span className="text-green-400 font-bold">
                                  4000x
                                </span>
                              </div>
                            </div>

                            <div
                              className="p-4 rounded-xl"
                              style={{ background: "var(--bg-secondary)" }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm">Max Risk</span>
                                <span className="text-orange-400 font-bold">
                                  Initial Capital
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forex Trading Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Forex trading on the go
          </h2>
          <p
            className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Access the world's most traded market and take advantage of currency
            price movements.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {currencyPairs.map((pair, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl border transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-accent)",
                  borderColor: "var(--bg-primary)",
                }}
              >
                <span className="text-2xl">{pair.flag1}</span>
                <span className="text-2xl">{pair.flag2}</span>
                <span className="font-semibold">
                  {pair.base}/{pair.quote}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compounding Growth Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--text-accent-blue)" }}
                >
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Compounding growth
                </h2>
              </div>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Enjoy up to 5% compounding growth per tick in sideways markets
                with Accumulator Options.
              </p>
            </div>

            <div className="relative">
              <div
                className="w-80 h-96 rounded-3xl p-6 mx-auto"
                style={{ background: "var(--bg-accent)" }}
              >
                <div className="h-full flex flex-col justify-center items-center space-y-6">
                  <div className="text-center">
                    <BarChart3
                      size={48}
                      style={{ color: "var(--text-accent-blue)" }}
                      className="mx-auto mb-3"
                    />
                    <div className="text-lg font-bold">Accumulator</div>
                    <div
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Compounding growth
                    </div>
                  </div>

                  <div
                    className="px-6 py-3 rounded-full border"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      borderColor: "var(--border-primary)",
                    }}
                  >
                    <span className="font-bold">Up to 5%</span> growth per tick
                  </div>

                  <div
                    className="p-4 rounded-xl w-full"
                    style={{ background: "var(--bg-secondary)" }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Maximum payout</span>
                      <span className="font-bold text-green-400">
                        70,000.00 USD
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synthetic Indices Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div
                className="w-80 h-96 rounded-3xl p-6 mx-auto"
                style={{ background: "var(--bg-accent)" }}
              >
                <div className="h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold mb-2">Synthetics</h3>
                    <div
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Volatility and Crash/Boom Indices
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "Volatility 10 (1s) Index",
                      "Volatility 25 (1s) Index",
                      "Volatility 50 (1s) Index",
                      "Volatility 75 (1s) Index",
                      "Volatility 100 (1s) Index",
                    ].map((index, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-lg"
                        style={{ background: "var(--bg-secondary)" }}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              background:
                                i % 2 === 0
                                  ? "var(--text-accent-blue)"
                                  : "var(--text-accent-orange)",
                            }}
                          />
                          <span className="text-xs">{index}</span>
                        </div>
                        <span
                          className="text-xs font-medium"
                          style={{
                            color:
                              i % 2 === 0
                                ? "var(--text-accent-blue)"
                                : "var(--text-accent-orange)",
                          }}
                        >
                          {i % 2 === 0 ? "+0.05%" : "-0.03%"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--text-accent-orange)" }}
                >
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Trade Synthetic Indices
                </h2>
              </div>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Trade Volatility and Crash/Boom Indices that simulate the
                movements of real-world markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="p-12 rounded-3xl border relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-secondary) 100%)`,
              borderColor: "var(--border-secondary)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="relative z-10 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Start trading on the go today
                </h2>
                <p
                  className="text-lg max-w-2xl mx-auto leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Download Sarthifx App and take your trading anywhere. Available
                  on Android, iOS, and Huawei devices.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, var(--text-accent-orange) 0%, #ff6b35 100%)`,
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Now
                  </span>
                </button>

                <button
                  className="px-8 py-4 rounded-2xl font-semibold border transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                    background: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Try Demo
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SarthiGo;
