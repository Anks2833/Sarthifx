import { useState } from "react";

const SarthiTraderPage = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const tradingSteps = [
    { id: 1, title: "Choose a trade type", color: "var(--text-accent-orange)" },
    { id: 2, title: "Select an asset", color: "var(--text-primary)" },
    { id: 3, title: "Monitor the chart", color: "var(--text-primary)" },
    { id: 4, title: "Place a trade", color: "var(--text-primary)" },
  ];

  const tradeTypes = [
    "Accumulators",
    "Vanillas",
    "Turbos",
    "Multipliers",
    "Rise/Fall",
    "Higher/Lower",
    "Touch/No Touch",
  ];

  const stats = [
    { value: "80+", label: "Tradable assets" },
    { value: "$1.00", label: "Minimum stake" },
    { value: "1s-365d", label: "Flexible trade duration" },
    { value: ">200%", label: "Potential payout" },
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
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {/* Sarthifx Trader Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                DT
              </div>
              <span className="text-2xl font-bold">Sarthi Trader</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              A user-friendly trading platform
            </h1>
            <p
              className="text-lg sm:text-xl mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Trade options on financial markets and 24/7 Derived Indices. Start
              with just USD 1, and choose from multiple contract types and
              durations to suit your trading strategy.
            </p>

            <div className="flex gap-4 mb-8">
              <button
                className="px-6 sm:px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                style={{ background: "var(--text-accent-orange)" }}
              >
                Try now
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="flex justify-center relative order-1 lg:order-2">
            <div className="relative">
              <div className="w-72 sm:w-80 h-[500px] sm:h-[600px] bg-black rounded-3xl p-3 sm:p-4 shadow-2xl">
                {/* Phone Screen */}
                <div className="bg-gray-900 rounded-2xl h-full p-3 sm:p-4 flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-4 text-white text-xs sm:text-sm">
                    <span>9:41</span>
                    <span>📶 📶 📶 🔋</span>
                  </div>

                  {/* EUR/USD Header */}
                  <div className="bg-blue-600 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white font-semibold text-sm">
                        📊 EUR/USD
                      </span>
                    </div>
                    <div className="text-white text-sm">Set your trade</div>
                  </div>

                  {/* Chart Area */}
                  <div className="h-32 bg-gradient-to-r from-red-600 to-green-600 rounded-lg mb-4 relative flex items-center justify-center">
                    <div className="text-white text-xs bg-black/50 px-2 py-1 rounded">
                      Live Chart
                    </div>
                  </div>

                  {/* Buy/Sell Section */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-green-600 text-white text-center py-2 rounded text-sm font-semibold">
                      UP
                    </div>
                    <div className="bg-red-600 text-white text-center py-2 rounded text-sm font-semibold">
                      DOWN
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Market Cards */}
              <div className="absolute -left-4 sm:-left-8 top-16 sm:top-20 bg-yellow-200 text-black rounded-lg p-2 sm:p-3 shadow-lg max-w-[100px] sm:max-w-none">
                <div className="text-xs sm:text-sm font-bold">🇩🇪</div>
                <div className="text-xs sm:text-sm">Germany 40</div>
              </div>

              <div className="absolute -right-4 sm:-right-8 top-32 sm:top-40 bg-green-200 text-black rounded-lg p-2 sm:p-3 shadow-lg max-w-[100px] sm:max-w-none">
                <div className="text-xs sm:text-sm font-bold">📈</div>
                <div className="text-xs sm:text-sm">Wall Street 30</div>
              </div>

              <div className="absolute -left-6 sm:-left-8 bottom-20 sm:bottom-24 bg-blue-200 text-black rounded-lg p-2 sm:p-3 shadow-lg max-w-[100px] sm:max-w-none">
                <div className="text-xs sm:text-sm font-bold">🇬🇧🇺🇸</div>
                <div className="text-xs sm:text-sm">GBP/USD</div>
              </div>

              <div className="absolute -right-6 sm:-right-8 bottom-32 sm:bottom-36 bg-red-200 text-black rounded-lg p-2 sm:p-3 shadow-lg max-w-[100px] sm:max-w-none">
                <div className="text-xs sm:text-sm font-bold">🇨🇭🇯🇵</div>
                <div className="text-xs sm:text-sm">CHF/JPY</div>
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
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <p style={{ color: "var(--text-secondary)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Make a Trade in 4 Easy Steps */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            Make a trade in 4 easy steps
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mobile Interface Mockup */}
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-6 w-80 shadow-2xl">
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-600 mb-2">9:41</div>
                  <div className="bg-gray-100 p-3 rounded-lg mb-4">
                    <div className="flex items-center gap-2 text-black">
                      <span className="text-red-600">📊</span>
                      <span className="text-sm font-semibold">
                        Volatility 100 (1s) Index
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">245.65</div>
                  </div>

                  <div className="text-black text-sm mb-4">Set your trade</div>

                  {/* Trade Types Dropdown */}
                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <div className="text-black text-sm mb-2">Trade types</div>
                    <div className="space-y-1">
                      {tradeTypes.map((type, index) => (
                        <div
                          key={index}
                          className={`p-2 rounded text-xs ${
                            index === 0
                              ? "bg-black text-white"
                              : "bg-white text-black"
                          }`}
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps List */}
            <div className="space-y-8">
              {tradingSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => setSelectedStep(step.id)}
                >
                  <div
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ color: step.color }}
                  >
                    {step.id}.
                  </div>
                  <div
                    className="text-xl sm:text-2xl font-semibold"
                    style={{ color: step.color }}
                  >
                    {step.title}
                  </div>
                </div>
              ))}

              <div className="mt-8">
                <button
                  className="px-6 sm:px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ background: "var(--text-accent-orange)" }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade What You Want, When You Want */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            Trade what you want, when you want
          </h2>
          <p
            className="text-lg sm:text-xl mb-12 max-w-4xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Enjoy Commodities, Cryptocurrencies, and Stock Indices — whether
            it's the world's most liquid markets or derived synthetic indices,
            you can trade them all.
          </p>
        </div>
      </section>

      {/* Make Smarter Trading Decisions */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                Make smarter trading decisions
              </h2>
              <p
                className="text-lg sm:text-xl leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Customise your chart with technical indicators and widgets —
                everything you need to make smarter trading decisions.
              </p>
            </div>

            {/* Chart Interface Mockups */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Desktop Chart */}
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="h-32 bg-gradient-to-br from-green-200 to-red-200 rounded-lg mb-3 relative">
                  <div className="absolute inset-2 grid grid-cols-8 gap-1">
                    {[...Array(32)].map((_, i) => (
                      <div
                        key={i}
                        className={`${
                          i % 3 === 0 ? "bg-green-500" : "bg-red-500"
                        } rounded-sm opacity-70`}
                        style={{ height: `${Math.random() * 100}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="text-black text-xs">Candlestick Chart</div>
              </div>

              {/* Mobile Chart */}
              <div className="bg-black rounded-2xl p-4 shadow-lg">
                <div className="text-center mb-3">
                  <div className="text-white text-xs">9:41</div>
                  <div className="text-white text-xs mt-1">EUR/USD</div>
                </div>

                <div className="h-24 bg-gray-800 rounded-lg mb-3 relative">
                  <div className="absolute inset-2 flex items-end justify-center space-x-1">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 bg-green-500 rounded-t"
                        style={{ height: `${Math.random() * 60 + 20}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-2">
                  <div className="text-black text-xs font-semibold mb-2">
                    Chart types
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-xs">
                    <div className="text-center p-1">Area</div>
                    <div className="text-center p-1 bg-gray-200 rounded">
                      Candle
                    </div>
                    <div className="text-center p-1">Hollow</div>
                    <div className="text-center p-1">OHLC</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade How You Want */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              {/* Trade Setup Interface */}
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {/* Left Column - Trade Types */}
                  <div>
                    <div className="bg-gray-100 rounded-lg p-3 mb-4">
                      <div className="text-black text-sm font-semibold mb-2">
                        Trade types
                      </div>
                      <div className="space-y-1">
                        <div className="p-2 bg-black text-white rounded text-xs">
                          Multipliers
                        </div>
                        <div className="p-2 bg-gray-50 text-black rounded text-xs">
                          Americas
                        </div>
                        <div className="p-2 bg-gray-50 text-black rounded text-xs">
                          Higher/Lower
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Calendar */}
                  <div>
                    <div className="text-black text-sm font-semibold mb-2">
                      Pick an end date
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="text-center text-black text-xs mb-2">
                        Dec 2024
                      </div>
                      <div className="grid grid-cols-7 gap-1 text-xs">
                        {[...Array(31)].map((_, i) => (
                          <div
                            key={i}
                            className={`text-center p-1 rounded ${
                              i === 23
                                ? "bg-black text-white"
                                : "text-black hover:bg-gray-100"
                            }`}
                          >
                            {i + 1}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 p-3 border rounded-lg">
                      <div className="text-black text-sm font-semibold mb-2">
                        Set your trade
                      </div>
                      <div className="text-black text-xs mb-1">
                        Duration: 1 minute
                      </div>
                      <div className="text-black text-xs mb-1">
                        Stake: 0.35 USD
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-black">Allow equals</span>
                        <div className="w-8 h-4 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                Trade how you want
              </h2>
              <p
                className="text-lg sm:text-xl leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Choose from a variety of customisable trade types with flexible
                durations — from 1 second to 365 days. Start with USD 1.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SarthiTraderPage;
