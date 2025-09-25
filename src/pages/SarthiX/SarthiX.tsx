import { useState } from "react";

interface FAQ {
  id: string;
  question: string;
  answer?: string;
}

const SarthiXPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<Record<string, boolean>>({});

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const faqs: FAQ[] = [
    {
      id: "markets",
      question: "What markets can I trade on Sarthifx X?",
      answer:
        "You can trade CFDs on Forex, Cryptocurrencies, ETFs, Commodities, and our proprietary Synthetic Indices (available to trade 24/7) on Sarthifx X.",
    },
    {
      id: "trading-amount",
      question:
        "What is the minimum and maximum amount to trade on Sarthifx X?",
    },
    {
      id: "deposit-limits",
      question:
        "What is the minimum / maximum I can deposit into my Sarthifx X account?",
    },
  ];

  return (
    <div
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
            {/* DX Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="text-white px-3 py-1 rounded text-sm font-bold"
                style={{ background: "var(--text-accent-orange)" }}
              >
                DX
              </div>
              <span className="text-2xl font-bold">sarthifx X</span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              Power your trades with TradingView
            </h1>
            <p
              className="text-lg mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Catch market movements the second they happen. Create custom
              watchlists, track live data, and place your trades directly on
              TradingView charts. Trade Forex, Commodities, 24/7 Derived
              Indices, Stocks and more.
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                className="px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ background: "var(--text-accent-orange)" }}
              >
                Try free demo
              </button>
              <button className="px-8 py-4 border-2 border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition-colors font-medium">
                Download now
              </button>
            </div>
          </div>

          {/* Desktop/Mobile Mockup */}
          <div className="relative">
            <div className="bg-black rounded-2xl p-4 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
                alt="Sarthifx X TradingView interface"
                className="w-full rounded-xl"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -left-8 top-16 bg-purple-500/90 rounded-lg p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <img
                  src="https://flagcdn.com/w40/eu.png"
                  alt="EUR"
                  className="w-6 h-4"
                />
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="USD"
                  className="w-6 h-4"
                />
                <span className="text-white text-sm font-semibold">
                  EUR/USD
                </span>
              </div>
            </div>

            <div className="absolute -right-8 top-32 bg-blue-500/90 rounded-lg p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <img
                  src="https://flagcdn.com/w40/au.png"
                  alt="AUD"
                  className="w-6 h-4"
                />
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="USD"
                  className="w-6 h-4"
                />
                <span className="text-white text-sm font-semibold">
                  AUD/USD
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-8 bg-red-600 text-white rounded-lg p-3 shadow-lg">
              <div className="text-center">
                <div className="text-xs">🥤</div>
                <span className="text-sm font-semibold">Coca-Cola</span>
              </div>
            </div>

            <div className="absolute -bottom-8 right-16 bg-black text-white rounded-lg p-3 shadow-lg">
              <span className="text-sm font-semibold">AAPL</span>
            </div>
          </div>
        </div>
      </section>

      {/* TradingView Partnership Banner */}
      <section className="py-4 px-8" style={{ background: "var(--bg-accent)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <span style={{ color: "var(--text-secondary)" }}>
            Our charts are powered by
          </span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">TV</span>
            <span className="text-xl font-bold">TradingView</span>
          </div>
          <button
            className="text-sm hover:text-blue-400 transition-colors"
            style={{ color: "var(--text-accent-blue)" }}
          >
            Learn more →
          </button>
        </div>
      </section>

      {/* Why Trade with Sarthifx X */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why trade with Sarthifx X
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Features */}
            <div className="space-y-12">
              <div className="text-center lg:text-right">
                <h3 className="text-2xl font-bold mb-4">
                  Premier TradingView tools
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Use 100+ technical indicators, chart types, and 110+ smart
                  drawing tools designed for you.
                </p>
              </div>
              <div className="text-center lg:text-right">
                <h3 className="text-2xl font-bold mb-4">
                  200 assets, 1 trading platform
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Trade Forex, Stocks, Cryptocurrencies, 24/7 Derived Indices,
                  and more.
                </p>
              </div>
            </div>

            {/* Center Mobile Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-96 bg-black rounded-3xl p-2 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-2xl relative overflow-hidden">
                    {/* Phone Status Bar */}
                    <div className="flex justify-between items-center p-2 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <span>📶</span>
                        <span>📶</span>
                        <span>🔋</span>
                      </div>
                    </div>

                    {/* Phone Content */}
                    <div className="px-4 pb-4">
                      <div className="text-center mb-4">
                        <div
                          className="inline-block px-2 py-1 rounded text-xs font-bold text-white mb-2"
                          style={{ background: "var(--text-accent-orange)" }}
                        >
                          sarthifx X
                        </div>
                      </div>

                      {/* Chart Area */}
                      <div className="bg-blue-900/30 rounded-lg h-48 mb-4 relative">
                        <div className="absolute bottom-4 left-4">
                          <div className="text-white text-xs">AUD/USD</div>
                          <div className="flex gap-2 mt-1">
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">
                              0.68110
                            </span>
                            <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
                              0.68120
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Trading Tools */}
                      <div className="grid grid-cols-4 gap-2">
                        <div className="bg-white/10 rounded p-2 text-center">
                          <div className="text-white text-xs">📈</div>
                        </div>
                        <div className="bg-white/10 rounded p-2 text-center">
                          <div className="text-white text-xs">📊</div>
                        </div>
                        <div className="bg-white/10 rounded p-2 text-center">
                          <div className="text-white text-xs">⚙️</div>
                        </div>
                        <div className="bg-white/10 rounded p-2 text-center">
                          <div className="text-white text-xs">📋</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-12">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">
                  Direct trading on charts
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Stay on top of market trends and place trades directly on
                  TradingView charts, all within the same interface.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">
                  Customisable watchlists and timeframes
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Build watchlists and set timeframes that suit your trading
                  strategy, helping you stay focused on the markets that matter
                  to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section
        className="py-20 px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex items-center gap-8">
              <div className="w-32 h-32 bg-black border-2 border-white rounded-lg p-4">
                {/* QR Code placeholder */}
                <div className="w-full h-full bg-white rounded grid grid-cols-8 gap-1">
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
              <div>
                <div className="text-lg font-semibold mb-2">
                  Scan to download
                </div>
                <div className="text-2xl font-bold">Android & iOS</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <span>▶</span> Google Play
              </button>
              <button className="flex items-center gap-2 px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <span>🍎</span> App Store
              </button>
              <button className="flex items-center gap-2 px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <span>🌐</span> Web browser
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Get started on Sarthifx X
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Sarthifx X desktop platform"
                className="w-full rounded-2xl"
              />
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
                  style={{ background: "var(--text-accent-orange)" }}
                >
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Open a Sarthifx account
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Sign up for a Sarthifx account for free, or log in if you
                    already have one.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
                  style={{ background: "var(--text-accent-orange)" }}
                >
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Get a Sarthifx X account
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Open a Sarthifx X account in the Trader's Hub.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
                  style={{ background: "var(--text-accent-orange)" }}
                >
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Start trading</h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Choose your favourite instrument and start trading with
                    TradingView charts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section
        className="py-20 px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">FAQs</h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border-b border-white/10 pb-6 last:border-b-0"
              >
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

                {expandedFAQ[faq.id] && faq.answer && (
                  <div className="px-4 pb-4">
                    <p
                      className="text-lg"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {faq.answer}
                    </p>
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

export default SarthiXPage;
