import { useState } from "react";

const ForexMarket = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const faqs = [
    {
      id: "mt5-vs-mt4",
      question: "How does MT5 differ from MT4?",
      answer:
        "MT5 was developed as an improved and more advanced version of MT4, offering additional features and capabilities for traders:",
      details: [
        {
          title: "Asset classes:",
          content:
            "MT4 predominantly focuses on Forex pairs and a limited selection of other CFDs. MT5 broadens its scope by including forex, stocks, indices, bonds, cryptocurrencies, and commodities.",
        },
        {
          title: "Position hedging:",
          content:
            "MT4 permits only one position per symbol, whereas MT5 supports multiple positions on the same symbol and simultaneous Buy and Sell positions for hedging.",
        },
        {
          title: "Timeframes:",
          content:
            "MT4 offers nine timeframes for chart analysis. MT5 provides 21 timeframes, affording greater flexibility in analyzing price data.",
        },
        {
          title: "Technical indicators:",
          content:
            "MT4 comes with 30 built-in technical indicators. MT5 offers a wider selection of 38 built-in technical indicators and 44 graphical tools.",
        },
        {
          title: "Depth of Market (DOM) data:",
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
        "No, Zero Spread accounts offer spreads starting from 0 pips, but the actual spread varies depending on market conditions, liquidity, and volatility. During major market events or high volatility periods, spreads typically widen. In exchange for the tighter spreads, Zero Spread accounts usually charge a small commission per trade.",
    },
    {
      id: "mt5-tools",
      question: "What tools can I use on Sarthifx MT5?",
      answer:
        "Sarthifx MT5 offers a comprehensive suite of tools for advanced trading and analysis, including 38 built-in technical indicators, 44 analytical objects, economic calendar, market depth information, multiple chart types, expert advisors (EAs) for automated trading, customizable alerts, multi-timeframe analysis, and one-click trading for faster execution.",
    },
    {
      id: "market-watch",
      question: "What is Market Watch in Sarthifx MT5 and how do I use it?",
      answer:
        "Market Watch in MT5 is a window that displays all available trading instruments and their current bid and ask prices. To use it, simply click on an instrument to select it for trading, right-click to open a context menu with additional options, drag instruments to reorder them based on your preferences, and use the search function to quickly find specific instruments in the list.",
    },
    {
      id: "order-types",
      question: "What types of orders can I place on Sarthifx MT5?",
      answer:
        "Sarthifx MT5 supports various order types including Market orders (immediate execution at current price), Pending orders (Limit and Stop orders that execute when price reaches a specified level), Take Profit orders (automatically close positions at profit targets), Stop Loss orders (limit potential losses), and Trailing Stop orders (dynamic stop loss that moves with favorable price movements).",
    },
    {
      id: "expert-advisor",
      question: "How do I connect an Expert Advisor (EA) to Sarthifx MT5?",
      answer:
        "To connect an Expert Advisor to MT5, first download the EA file (.ex5 or .mq5), place it in the MT5 'Experts' folder, restart MT5, open the Navigator window, find the EA under 'Expert Advisors', drag it onto your chart, configure the settings in the dialog that appears, and click 'OK' to activate it. Ensure algorithmic trading is enabled in the platform settings for the EA to function properly.",
    },
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
      <section className="py-20 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* MT5 Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">
                MT5
              </div>
              <span className="text-2xl font-bold">sarthifx MT5</span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              Move with global currency markets
            </h1>
            <p
              className="text-lg mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Trade 24/5 on assets in the foreign exchange market. We offer over
              50 major, minor, and exotic currency pairs, with competitive
              spreads, sharp prices, fast execution, and 0% commission.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                className="px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ background: "var(--text-accent-orange)" }}
              >
                Try free demo
              </button>
              <button className="px-8 py-4 border-2 border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition-colors font-medium">
                Open account
              </button>
            </div>
          </div>

          {/* Currency Pairs Visualization */}
          <div className="relative">
            <div className="bg-white/5 rounded-2xl p-8 h-96 relative overflow-hidden">
              <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-lg z-10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
                  <div className="w-6 h-4 bg-red-600 rounded-sm"></div>
                  <span className="text-white text-sm font-semibold">
                    EUR/USD
                  </span>
                </div>
                <div
                  className="mt-2 text-sm font-semibold"
                  style={{ color: "var(--text-accent-blue)" }}
                >
                  1.0967
                </div>
              </div>

              <div className="absolute top-24 right-16 bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-lg z-10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-4 bg-red-600 rounded-sm"></div>
                  <div className="w-6 h-4 bg-white rounded-sm"></div>
                  <span className="text-white text-sm font-semibold">
                    GBP/USD
                  </span>
                </div>
                <div
                  className="mt-2 text-sm font-semibold"
                  style={{ color: "var(--text-accent-blue)" }}
                >
                  1.2492
                </div>
              </div>

              <div className="absolute bottom-24 left-12 bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-lg z-10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-4 bg-yellow-500 rounded-sm"></div>
                  <div className="w-6 h-4 bg-blue-800 rounded-sm"></div>
                  <span className="text-white text-sm font-semibold">
                    USD/JPY
                  </span>
                </div>
                <div
                  className="mt-2 text-sm font-semibold"
                  style={{ color: "var(--text-accent-blue)" }}
                >
                  151.92
                </div>
              </div>

              <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-lg z-10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-4 bg-red-600 rounded-sm"></div>
                  <div className="w-6 h-4 bg-green-600 rounded-sm"></div>
                  <span className="text-white text-sm font-semibold">
                    AUD/CAD
                  </span>
                </div>
                <div
                  className="mt-2 text-sm font-semibold"
                  style={{ color: "var(--text-accent-blue)" }}
                >
                  0.8931
                </div>
              </div>

              {/* Background elements */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-full h-0.5 bg-white/30 absolute"></div>
                <div className="h-full w-0.5 bg-white/30 absolute"></div>
              </div>

              <div
                className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full"
                style={{
                  background:
                    "linear-gradient(to right, var(--gradient-start), var(--gradient-mid-1))",
                  opacity: "0.2",
                }}
              ></div>
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full"
                style={{
                  background:
                    "linear-gradient(to right, var(--gradient-mid-2), var(--gradient-end))",
                  opacity: "0.2",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        className="py-16 px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p style={{ color: "var(--text-secondary)" }}>Currency pairs</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1:1000</div>
              <p style={{ color: "var(--text-secondary)" }}>Maximum leverage</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0%</div>
              <p style={{ color: "var(--text-secondary)" }}>Commission</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0</div>
              <p style={{ color: "var(--text-secondary)" }}>
                Swap fees on swap-free accounts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trade with Sarthifx MT5 */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why trade Forex with Sarthifx
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Swap-free trading, no overnight fees
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Focus on market movements without worrying about overnight
                  charges.
                </p>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Go big with up to 1:1000 leverage
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Maximise your forex market exposure with high leverage and
                  super tight spreads.
                </p>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 mb-4">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Trade major, minor, exotic pairs
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Capitalise on diverse market dynamics for potential gains with
                  a wide range of currency pairs.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Trade on the world markets without commission
              </h3>
              <p
                className="text-lg mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                Enjoy zero commission trading on all assets. Plus, pay no swap
                charges on overnight positions for selected Derived Indices and
                financial assets.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12l5 5L20 7"></path>
                    </svg>
                  </div>
                  <span>No commission on trades</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12l5 5L20 7"></path>
                    </svg>
                  </div>
                  <span>Tight spreads from 0.1 pips</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12l5 5L20 7"></path>
                    </svg>
                  </div>
                  <span>Fast execution with minimal slippage</span>
                </li>
              </ul>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/10 z-10"></div>
              <div className="absolute top-8 left-8 bg-black/80 text-white px-3 py-1 rounded-full text-sm z-20">
                📊 Advanced charts
              </div>
              <div className="absolute bottom-8 left-8 bg-black/80 text-white px-3 py-1 rounded-full text-sm z-20">
                ⚙️ Custom indicators
              </div>
              <div className="absolute bottom-8 right-8 bg-black/80 text-white px-3 py-1 rounded-full text-sm z-20">
                📈 Multi-timeframe analysis
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30"></div>
              <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Forex Instruments */}
      <section
        className="py-20 px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Forex instruments available on Sarthifx
          </h2>

          <div className="space-y-12">
            <div className="bg-white/5 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Major pairs</h3>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Major currency pairs focus on the world's top currencies used in
                international trade. Also available as swap-free CFDs.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                    <div className="w-5 h-5 rounded-full bg-red-600"></div>
                  </div>
                  <span>EUR/USD</span>
                </div>
                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-red-600"></div>
                    <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                  </div>
                  <span>GBP/USD</span>
                </div>
                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                    <div className="w-5 h-5 rounded-full bg-red-600"></div>
                  </div>
                  <span>USD/JPY</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Minor pairs</h3>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Minor currency pairs have less liquidity than major pairs, and
                offer a chance to explore different market behaviors.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                    <div className="w-5 h-5 rounded-full bg-red-600"></div>
                  </div>
                  <span>EUR/GBP</span>
                </div>
                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-red-600"></div>
                    <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                  </div>
                  <span>AUD/CAD</span>
                </div>
                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                    <div className="w-5 h-5 rounded-full bg-red-600"></div>
                  </div>
                  <span>CHF/JPY</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Exotic pairs</h3>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Exotic pairs combine major currencies with those from growing
                economies.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                    <div className="w-5 h-5 rounded-full bg-red-600"></div>
                  </div>
                  <span>USD/TRY</span>
                </div>
                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-red-600"></div>
                    <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                  </div>
                  <span>USD/ZAR</span>
                </div>
                <div className="bg-white/5 p-4 rounded-lg flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 rounded-full bg-blue-600"></div>
                    <div className="w-5 h-5 rounded-full bg-red-600"></div>
                  </div>
                  <span>EUR/MXN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Trade Forex */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            How to trade Forex on Sarthifx
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/5 p-8 rounded-xl">
              <div className="mb-4 flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "var(--text-accent-blue)" }}
                >
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold">CFDs</h3>
              </div>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Speculate on the price movements of popular Forex pairs with
                high leverage and advanced technical indicators.
              </p>
              <div className="flex items-center gap-2">
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--text-accent-blue)" }}
                >
                  Learn more
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "var(--text-accent-blue)" }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-xl">
              <div className="mb-4 flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "var(--text-accent-orange)" }}
                >
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold">Options</h3>
              </div>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Predict the market trends of FX currency pairs without the risk
                of losing your initial stake.
              </p>
              <div className="flex items-center gap-2">
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--text-accent-blue)" }}
                >
                  Learn more
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  style={{ color: "var(--text-accent-blue)" }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8">Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center hover:bg-white/10 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded bg-blue-600 flex items-center justify-center mb-2">
                  <span className="font-bold text-sm">MT5</span>
                </div>
                <span className="text-sm">Sarthifx MT5</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center hover:bg-white/10 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded bg-red-600 flex items-center justify-center mb-2">
                  <span className="font-bold text-sm">cT</span>
                </div>
                <span className="text-sm">Sarthifx cTrader</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center hover:bg-white/10 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded bg-purple-600 flex items-center justify-center mb-2">
                  <span className="font-bold text-sm">DX</span>
                </div>
                <span className="text-sm">Sarthifx X</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center hover:bg-white/10 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded bg-red-600 flex items-center justify-center mb-2">
                  <span className="font-bold text-sm">DT</span>
                </div>
                <span className="text-sm">Sarthifx Trader</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center hover:bg-white/10 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded bg-green-600 flex items-center justify-center mb-2">
                  <span className="font-bold text-sm">DB</span>
                </div>
                <span className="text-sm">Sarthifx Bot</span>
              </div>
              <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center hover:bg-white/10 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded bg-orange-600 flex items-center justify-center mb-2">
                  <span className="font-bold text-sm">GO</span>
                </div>
                <span className="text-sm">Sarthifx GO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Forex FAQs</h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-white/10 pb-6">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between py-4 text-left hover:bg-white/5 transition-colors rounded-lg px-4"
                >
                  <span className="text-xl font-semibold pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
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
                  <div className="px-4 pb-4">
                    <p
                      className="text-lg mb-4"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {faq.answer}
                    </p>
                    {faq.details && (
                      <ul className="space-y-4 mb-6">
                        {faq.details.map((detail, index) => (
                          <li key={index}>
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
                    <p
                      className="mt-4"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      For more insights, you can read our{" "}
                      <a
                        href="#"
                        className="underline"
                        style={{ color: "var(--text-accent-blue)" }}
                      >
                        MetaTrader 4 (MT4) vs. MetaTrader 5 (MT5) guide
                      </a>{" "}
                      and the{" "}
                      <a
                        href="#"
                        className="underline"
                        style={{ color: "var(--text-accent-blue)" }}
                      >
                        beginner's guide to Sarthifx MT5
                      </a>
                      .
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to start trading Forex with Sarthifx MT5?
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Join over 475,000 traders worldwide and experience the power of MT5
            with Sarthifx.
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "var(--text-accent-orange)" }}
            >
              Try free demo
            </button>
            <button
              className="px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "var(--text-accent-blue)" }}
            >
              Open account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForexMarket;
