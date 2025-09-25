import { useState } from "react";
import {
  Play,
  Apple,
  Smartphone,
  Monitor,
  BarChart3,
  Settings,
  LineChart,
} from "lucide-react";

const SarthiMt5Page = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [selectedAccount, setSelectedAccount] = useState(0); // Default to Standard account

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const accountTypes = [
    {
      title: "Standard account",
      description:
        "Trade derived and financial assets in optimal conditions with competitive spreads and swap fees.",
      highlighted: true,
      details: {
        spreads: "From 0.1 pips",
        commission: "No",
        minimumDeposit: "No",
        assetClasses: "Financials, Derived Indices",
      },
    },
    {
      title: "Zero Spread account",
      description:
        "Trade CFDs with spreads from 0 pips for cost-effective market entries and exits.",
      highlighted: false,
      details: {
        spreads: "From 0 pips",
        commission: "Yes",
        minimumDeposit: "No",
        assetClasses: "Financials, Derived Indices",
      },
    },
    {
      title: "Swap-Free account",
      description:
        "Trade without worrying about overnight swap fees on derived and financial instruments.",
      highlighted: false,
      details: {
        spreads: "From 0.3 pips",
        commission: "No",
        minimumDeposit: "No",
        assetClasses: "Financials, Derived Indices",
      },
    },
    {
      title: "Financial account",
      description:
        "Trade financial markets with the tightest spreads for quick, frequent trades.",
      highlighted: false,
      details: {
        spreads: "From 0.2 pips",
        commission: "No",
        minimumDeposit: "No",
        assetClasses: "Financials",
      },
    },
    {
      title: "Gold account",
      description:
        "Trade gold and precious metals in a dedicated account with tight spreads optimised for value.",
      highlighted: false,
      details: {
        spreads: "From 25 pips",
        commission: "No",
        minimumDeposit: "No",
        assetClasses: "Commodities",
      },
    },
    {
      title: "Financial STP account",
      description:
        "Trade financial assets with zero commission, wider spreads, and direct access to global markets.",
      highlighted: false,
      details: {
        spreads: "From 0.4 pips",
        commission: "No",
        minimumDeposit: "No",
        assetClasses: "Financials",
      },
    },
  ];

  const faqs = [
    {
      id: "mt5-vs-mt4",
      question: "How does MT5 differ from MT4?",
      answer:
        "MT5 was developed as an improved and more advanced version of MT4, offering the following additional features and capabilities for traders:",
      details: [
        {
          title: "Asset classes:",
          content:
            "MT4 predominantly focuses on Forex pairs and a limited selection of other CFDs. In contrast, MT5 broadens its scope by including forex, stocks, indices, bonds, cryptocurrencies, and commodities.",
        },
        {
          title: "Position hedging:",
          content:
            "MT4 permits only one position per symbol, whereas MT5 supports multiple positions on the same symbol and simultaneous Buy and Sell positions for hedging.",
        },
        {
          title: "Timeframes:",
          content:
            "MT4 offers nine timeframes for chart analysis, ranging from one minute to one month. MT5 provides 21 timeframes, affording greater flexibility in analyzing price data, especially beneficial for technical analysis.",
        },
        {
          title: "Technical indicators:",
          content:
            "MT4 comes with 30 built-in technical indicators for chart analysis. In comparison, MT5 offers a wider selection of 38 built-in technical indicators and 44 graphical tools.",
        },
        {
          title: "Depth of market (DOM) data:",
          content:
            "MT4 lacks Depth of Market data, while MT5 incorporates this feature, allowing traders to view bid and ask prices at various levels in the order book.",
        },
      ],
    },
    {
      id: "zero-spread",
      question:
        "Is the spread always zero on a Sarthifx MT5 Zero Spread account?",
      answer:
        "No, while the Zero Spread account offers spreads from 0 pips on major currency pairs during optimal market conditions, spreads may widen during high volatility periods or news events. A commission is charged per trade to compensate for the reduced spreads.",
    },
    {
      id: "mt5-tools",
      question: "What tools can I use on Sarthifx MT5?",
      answer:
        "Sarthifx MT5 provides comprehensive trading tools including 38 built-in technical indicators, 44 graphical tools, advanced charting capabilities, Expert Advisors (EAs), automated trading systems, economic calendar, market depth, and risk management tools like stop loss and take profit orders.",
    },
    {
      id: "market-watch",
      question: "What is Market Watch in Sarthifx MT5 and how do I use it?",
      answer:
        "Market Watch is a window that displays real-time quotes for all available trading instruments. You can add or remove symbols, view bid/ask prices, daily highs/lows, and access trading functions directly. Right-click on any symbol to place orders, view charts, or access detailed market information.",
    },
    {
      id: "order-types",
      question: "What types of orders can I place on Sarthifx MT5?",
      answer:
        "Sarthifx MT5 supports various order types including Market orders (instant execution), Limit orders, Stop orders, Stop Loss, Take Profit, Buy Stop, Buy Limit, Sell Stop, and Sell Limit orders. You can also set expiration dates and use advanced order management features.",
    },
    {
      id: "expert-advisor",
      question: "How do I connect an Expert Advisor (EA) to Sarthifx MT5?",
      answer:
        "To connect an EA: 1) Download the EA file (.ex5), 2) Copy it to the 'Experts' folder in your MT5 data directory, 3) Restart MT5, 4) Drag the EA from Navigator onto your chart, 5) Configure settings and enable 'Allow automated trading' in Tools > Options > Expert Advisors. Ensure the EA is compatible with MT5.",
    },
  ];

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
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            {/* MT5 Logo */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="bg-blue-600 text-white px-3 py-2 rounded text-sm font-bold">
                MT5
              </div>
              <span className="text-xl sm:text-2xl font-bold">
                sarthifx MT5
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              The all-in-one CFD trading platform
            </h1>
            <p
              className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Trade CFDs on Forex, Stocks, Cryptocurrencies, and more. With
              Sarthifx MT5, you'll also get access to swap-free trading, 25+
              indicators, and exclusive access to innovative 24/7 Derived
              Indices.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
              <button
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ background: "var(--text-accent-orange)" }}
              >
                Try free demo
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition-colors font-medium">
                Download now
              </button>
            </div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 sm:w-72 lg:w-80 h-[480px] sm:h-[540px] lg:h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-4">
                {/* Phone Screen Content */}
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-6 bg-black flex items-center justify-between px-4">
                    <span className="text-white text-xs">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-1 bg-green-400 rounded-sm"></div>
                      <div className="w-1 h-1 bg-white rounded-sm"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-4">
                    <div className="text-center mb-4">
                      <div className="text-xs text-gray-600 mb-2">
                        MT5 Trading
                      </div>
                      <div className="text-sm font-semibold text-black">
                        Market Watch
                      </div>
                    </div>

                    {/* Quote List */}
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-black font-medium">EUR/USD</span>
                        <div className="flex space-x-2">
                          <span className="text-red-500 font-mono">1.0967</span>
                          <span className="text-blue-500 font-mono">
                            1.0970
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-black font-medium">GBP/USD</span>
                        <div className="flex space-x-2">
                          <span className="text-blue-500 font-mono">
                            1.2492
                          </span>
                          <span className="text-blue-500 font-mono">
                            1.2498
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-black font-medium">USD/JPY</span>
                        <div className="flex space-x-2">
                          <span className="text-blue-500 font-mono">
                            151.92
                          </span>
                          <span className="text-blue-500 font-mono">
                            151.93
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating currency pairs */}
              <div className="absolute -left-4 sm:-left-8 top-12 sm:top-16 bg-white/90 rounded-lg p-2 sm:p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-blue-600 rounded-sm"></div>
                  <div className="w-4 h-3 bg-yellow-400 rounded-sm"></div>
                  <span className="text-black text-xs sm:text-sm font-semibold">
                    GBP/AUD
                  </span>
                </div>
              </div>
              <div className="absolute -right-2 sm:-right-4 top-24 sm:top-32 bg-white/90 rounded-lg p-2 sm:p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-3 bg-blue-500 rounded-sm"></div>
                  <div className="w-4 h-3 bg-red-500 rounded-sm"></div>
                  <span className="text-black text-xs sm:text-sm font-semibold">
                    EUR/USD
                  </span>
                </div>
              </div>
              <div className="absolute -right-6 sm:-right-8 bottom-20 sm:bottom-24 bg-green-600 text-white rounded-lg p-2 sm:p-3 shadow-lg">
                <span className="text-xs sm:text-sm font-semibold">NVDA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        className="py-12 sm:py-16 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">475k+</div>
              <p style={{ color: "var(--text-secondary)" }}>
                Clients on Sarthifx MT5
              </p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">200+</div>
              <p style={{ color: "var(--text-secondary)" }}>Tradable assets</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold mb-2">24/7</div>
              <p style={{ color: "var(--text-secondary)" }}>Trading</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trade with Sarthifx MT5 */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 lg:mb-16">
            Why trade with Sarthifx MT5
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
            {/* Left Features */}
            <div className="space-y-8 lg:space-y-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  No overnight charges on swap-free accounts
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Leave your positions open overnight without worrying about
                  extra charges.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Multiple assets on a single platform
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Trade Forex, Stocks, Stock Indices, Cryptocurrencies,
                  Commodities, and Derived Indices in one place.
                </p>
              </div>
            </div>

            {/* Center Mobile Mockup */}
            <div className="flex justify-center">
              <div
                className="rounded-2xl p-4 w-56 sm:w-64"
                style={{ background: "var(--bg-accent)" }}
              >
                <div
                  className="rounded-xl p-4 h-80 sm:h-96"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  <div className="text-center mb-4">
                    <div
                      className="text-sm mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      9:41
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Quotes
                    </div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div
                      className="flex justify-between items-center py-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <span>EUR/USD</span>
                      <div className="flex space-x-2">
                        <span className="text-red-400">1.0967</span>
                        <span className="text-red-400">1.0970</span>
                      </div>
                    </div>
                    <div
                      className="flex justify-between items-center py-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <span>GBP/USD</span>
                      <div className="flex space-x-2">
                        <span className="text-blue-400">1.2492</span>
                        <span className="text-blue-400">1.2498</span>
                      </div>
                    </div>
                    <div
                      className="flex justify-between items-center py-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <span>USD/CHF</span>
                      <div className="flex space-x-2">
                        <span className="text-blue-400">0.9131</span>
                        <span className="text-blue-400">0.9132</span>
                      </div>
                    </div>
                    <div
                      className="flex justify-between items-center py-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <span>USD/JPY</span>
                      <div className="flex space-x-2">
                        <span className="text-blue-400">151.92</span>
                        <span className="text-blue-400">151.93</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-8 lg:space-y-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  Licensed and regulated
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Trade with a regulated industry pioneer trusted by traders for
                  more than 20 years.
                </p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                  24/7 trading
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Trade round-the-clock, even on weekends, with our proprietary
                  Derived Indices.
                </p>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div
                className="w-24 h-24 sm:w-32 sm:h-32 border-2 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6"
                style={{
                  background: "var(--bg-secondary)",
                  borderColor: "var(--border-primary)",
                }}
              >
                {/* QR Code placeholder */}
                <div
                  className="w-full h-full rounded grid grid-cols-8 gap-px"
                  style={{ background: "var(--text-primary)" }}
                >
                  {[...Array(64)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm"
                      style={{
                        background:
                          Math.random() > 0.5
                            ? "var(--bg-primary)"
                            : "var(--text-primary)",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-base sm:text-lg font-semibold mb-2">
                  Scan to download
                </div>
                <div className="text-xl sm:text-2xl font-bold">
                  Android, iOS & Huawei
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <button
                className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:opacity-80 transition-opacity text-sm sm:text-base"
                style={{ background: "var(--bg-secondary)" }}
              >
                <Play size={16} className="sm:w-5 sm:h-5" /> Google Play
              </button>
              <button
                className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:opacity-80 transition-opacity text-sm sm:text-base"
                style={{ background: "var(--bg-secondary)" }}
              >
                <Apple size={16} className="sm:w-5 sm:h-5" /> App Store
              </button>
              <button
                className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:opacity-80 transition-opacity text-sm sm:text-base"
                style={{ background: "var(--bg-secondary)" }}
              >
                <Smartphone size={16} className="sm:w-5 sm:h-5" /> AppGallery
              </button>
              <button
                className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:opacity-80 transition-opacity text-sm sm:text-base"
                style={{ background: "var(--bg-secondary)" }}
              >
                <Monitor size={16} className="sm:w-5 sm:h-5" /> Windows
              </button>
              <button
                className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:opacity-80 transition-opacity text-sm sm:text-base"
                style={{ background: "var(--bg-secondary)" }}
              >
                <Monitor size={16} className="sm:w-5 sm:h-5" /> macOS
              </button>
              <button
                className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:opacity-80 transition-opacity text-sm sm:text-base"
                style={{ background: "var(--bg-secondary)" }}
              >
                <Monitor size={16} className="sm:w-5 sm:h-5" /> Linux
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Without Commission */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
                Trade on the world markets without commission
              </h2>
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Enjoy zero commission trading on all assets. Plus, pay no swap
                charges on overnight positions for selected Derived Indices and
                financial assets.
              </p>
            </div>
            <div className="relative order-1 lg:order-2">
              <div
                className="w-full rounded-2xl shadow-2xl overflow-hidden"
                style={{ background: "var(--bg-accent)" }}
              >
                {/* Simulated desktop interface */}
                <div className="h-64 sm:h-80 lg:h-96 p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      Sarthifx MT5 Desktop
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Chart area simulation */}
                  <div
                    className="w-full h-40 sm:h-56 rounded-lg mb-4"
                    style={{ background: "var(--bg-secondary)" }}
                  >
                    <div className="h-full flex items-center justify-center">
                      <BarChart3
                        size={48}
                        style={{ color: "var(--text-accent-orange)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tools */}
              <div className="absolute top-4 right-4 bg-black/80 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1">
                <BarChart3 size={12} /> Analytical tools
              </div>
              <div className="absolute bottom-16 left-4 bg-black/80 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1">
                <Settings size={12} /> Settings
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center gap-1">
                <LineChart size={12} /> Advanced charts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Take Control Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">
            Take control of your trades on Sarthifx MT5
          </h2>
          <div
            className="space-y-4 sm:space-y-6 text-base sm:text-lg max-w-4xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>
              Explore CFDs on Sarthifx MT5, and enjoy high leverage and low
              spreads to increase your returns when the market moves in your
              favour.
            </p>
            <p>
              With the calculators and numerous analytical tools available on
              the Sarthifx MT5 platform, you'll be able to manage your capital
              and trading positions better.
            </p>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 lg:mb-16">
            MT5 account types
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 lg:mb-16">
            <div className="space-y-4 sm:space-y-6">
              {accountTypes.slice(0, 3).map((account, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAccount(index)}
                  className={`w-full text-left p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                    selectedAccount === index
                      ? "border-white/60 shadow-lg"
                      : "border-white/20"
                  }`}
                  style={{
                    background:
                      selectedAccount === index
                        ? "var(--bg-accent)"
                        : "rgba(255,255,255,0.05)",
                  }}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                    {account.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {account.description}
                  </p>
                </button>
              ))}
            </div>

            <div className="space-y-4 sm:space-y-6">
              {accountTypes.slice(3).map((account, index) => (
                <button
                  key={index + 3}
                  onClick={() => setSelectedAccount(index + 3)}
                  className={`w-full text-left p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                    selectedAccount === index + 3
                      ? "border-white/60 shadow-lg"
                      : "border-white/20"
                  }`}
                  style={{
                    background:
                      selectedAccount === index + 3
                        ? "var(--bg-accent)"
                        : "rgba(255,255,255,0.05)",
                  }}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                    {account.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {account.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Account Details Table */}
          <div
            className="rounded-2xl p-6 sm:p-8 transition-all duration-500"
            style={{ background: "var(--bg-accent)" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
              {accountTypes[selectedAccount].title}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
              <div
                className="flex justify-between items-center border-b py-3 sm:py-4"
                style={{ borderColor: "var(--border-primary)" }}
              >
                <span className="font-semibold">Spreads</span>
                <span>{accountTypes[selectedAccount].details.spreads}</span>
              </div>
              <div
                className="flex justify-between items-center border-b py-3 sm:py-4"
                style={{ borderColor: "var(--border-primary)" }}
              >
                <span className="font-semibold">Commission</span>
                <span>{accountTypes[selectedAccount].details.commission}</span>
              </div>
              <div
                className="flex justify-between items-center border-b py-3 sm:py-4"
                style={{ borderColor: "var(--border-primary)" }}
              >
                <span className="font-semibold">Minimum deposit</span>
                <span>
                  {accountTypes[selectedAccount].details.minimumDeposit}
                </span>
              </div>
              <div
                className="flex justify-between items-center border-b py-3 sm:py-4"
                style={{ borderColor: "var(--border-primary)" }}
              >
                <span className="font-semibold">Asset classes</span>
                <span className="text-right">
                  {accountTypes[selectedAccount].details.assetClasses}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 lg:mb-16">
            Sarthifx MT5 FAQs
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border-b border-white/10 pb-4 sm:pb-6"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between py-3 sm:py-4 text-left hover:bg-white/5 transition-colors rounded-lg px-2 sm:px-4"
                >
                  <span className="text-lg sm:text-xl font-semibold pr-4 sm:pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform flex-shrink-0 ${
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

                {expandedFAQ[faq.id] && faq.answer && (
                  <div className="px-2 sm:px-4 pb-3 sm:pb-4">
                    <p
                      className="text-base sm:text-lg mb-4 leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {faq.answer}
                    </p>
                    {faq.details && (
                      <ul className="space-y-3 sm:space-y-4">
                        {faq.details.map((detail, index) => (
                          <li key={index} className="text-sm sm:text-base">
                            <span className="font-semibold">
                              {detail.title}
                            </span>{" "}
                            <span style={{ color: "var(--text-secondary)" }}>
                              {detail.content}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {faq.id === "mt5-vs-mt4" && (
                      <p
                        className="mt-4 sm:mt-6 text-sm sm:text-base"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        For more insights, you can read our{" "}
                        <a
                          href="#"
                          className="underline hover:opacity-80 transition-opacity"
                          style={{ color: "var(--text-accent-blue)" }}
                        >
                          MetaTrader 4 (MT4) vs. MetaTrader 5 (MT5) guide
                        </a>{" "}
                        and the{" "}
                        <a
                          href="#"
                          className="underline hover:opacity-80 transition-opacity"
                          style={{ color: "var(--text-accent-blue)" }}
                        >
                          beginner's guide to Sarthifx MT5
                        </a>
                        .
                      </p>
                    )}
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

export default SarthiMt5Page;
