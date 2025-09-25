import { useState } from "react";

const SarthiMt5Page = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<{ [key: string]: boolean }>(
    {}
  );

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
    },
    {
      title: "Zero Spread account",
      description:
        "Trade CFDs with spreads from 0 pips for cost-effective market entries and exits.",
    },
    {
      title: "Swap-Free account",
      description:
        "Trade without worrying about overnight swap fees on derived and financial instruments.",
    },
    {
      title: "Financial account",
      description:
        "Trade financial markets with the tightest spreads for quick, frequent trades.",
    },
    {
      title: "Gold account",
      description:
        "Trade gold and precious metals in a dedicated account with tight spreads optimised for value.",
    },
    {
      title: "Financial STP account",
      description:
        "Trade financial assets with zero commission, wider spreads, and direct access to global markets.",
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
    },
    {
      id: "mt5-tools",
      question: "What tools can I use on Sarthifx MT5?",
    },
    {
      id: "market-watch",
      question: "What is Market Watch in Sarthifx MT5 and how do I use it?",
    },
    {
      id: "order-types",
      question: "What types of orders can I place on Sarthifx MT5?",
    },
    {
      id: "expert-advisor",
      question: "How do I connect an Expert Advisor (EA) to Sarthifx MT5?",
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
            {/* MT5 Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">
                MT5
              </div>
              <span className="text-2xl font-bold">sarthifx MT5</span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              The all-in-one CFD trading platform
            </h1>
            <p
              className="text-lg mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Trade CFDs on Forex, Stocks, Cryptocurrencies, and more. With
              Sarthifx MT5, you'll also get access to swap-free trading, 25+
              indicators, and exclusive access to innovative 24/7 Derived
              Indices.
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

          {/* Mobile Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop"
                alt="Sarthifx MT5 mobile app interface"
                className="w-80 h-auto rounded-3xl shadow-2xl"
              />
              {/* Floating currency pairs */}
              <div className="absolute -left-8 top-16 bg-white/90 rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <img
                    src="https://flagcdn.com/w40/gb.png"
                    alt="GBP"
                    className="w-6 h-4"
                  />
                  <img
                    src="https://flagcdn.com/w40/au.png"
                    alt="AUD"
                    className="w-6 h-4"
                  />
                  <span className="text-black text-sm font-semibold">
                    GBP/AUD
                  </span>
                </div>
              </div>
              <div className="absolute -right-4 top-32 bg-white/90 rounded-lg p-3 shadow-lg">
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
                  <span className="text-black text-sm font-semibold">
                    EUR/USD
                  </span>
                </div>
              </div>
              <div className="absolute -right-8 bottom-24 bg-green-600 text-white rounded-lg p-3 shadow-lg">
                <span className="text-sm font-semibold">NVDA</span>
              </div>
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
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">475k+</div>
              <p style={{ color: "var(--text-secondary)" }}>
                Clients on Sarthifx MT5
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <p style={{ color: "var(--text-secondary)" }}>Tradable assets</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p style={{ color: "var(--text-secondary)" }}>Trading</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trade with Sarthifx MT5 */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why trade with Sarthifx MT5
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
            {/* Left Features */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  No overnight charges on swap-free accounts
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Leave your positions open overnight without worrying about
                  extra charges.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
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
              <div className="bg-white/10 rounded-2xl p-4 w-64">
                <div className="bg-white rounded-xl p-4 h-96">
                  <div className="text-center text-black mb-4">
                    <div className="text-sm">9:41</div>
                    <div className="text-xs">Quotes</div>
                  </div>
                  <div className="space-y-2 text-xs text-black">
                    <div className="flex justify-between">
                      <span>EUR/USD</span>
                      <span className="text-red-500">1.0967</span>
                      <span className="text-red-500">1.0970</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GBP/USD</span>
                      <span className="text-blue-500">1.2492</span>
                      <span className="text-blue-500">1.2498</span>
                    </div>
                    <div className="flex justify-between">
                      <span>USD/CHF</span>
                      <span className="text-blue-500">0.9131</span>
                      <span className="text-blue-500">0.9132</span>
                    </div>
                    <div className="flex justify-between">
                      <span>USD/JPY</span>
                      <span className="text-blue-500">151.92</span>
                      <span className="text-blue-500">151.93</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Licensed and regulated
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Trade with a regulated industry pioneer trusted by traders for
                  more than 20 years.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">24/7 trading</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Trade round-the-clock, even on weekends, with our proprietary
                  Derived Indices.
                </p>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-32 h-32 bg-black border-2 border-white rounded-lg p-4 mb-6">
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
                <div className="text-2xl font-bold">Android, iOS & Huawei</div>
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
                <span>📱</span> AppGallery
              </button>
              <button className="flex items-center gap-2 px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <span>🖥</span> Windows
              </button>
              <button className="flex items-center gap-2 px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <span>🖥</span> macOS
              </button>
              <button className="flex items-center gap-2 px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <span>🐧</span> Linux
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Without Commission */}
      <section
        className="py-20 px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Trade on the world markets without commission
              </h2>
              <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                Enjoy zero commission trading on all assets. Plus, pay no swap
                charges on overnight positions for selected Derived Indices and
                financial assets.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Desktop trading platform"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                📊 Analytical tools
              </div>
              <div className="absolute bottom-4 left-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                ⚙️ Settings
              </div>
              <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm">
                📈 Advanced charts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Take Control Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 mb-8"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-4 border-white/20"></div>
                <div
                  className="absolute top-8 left-8 w-8 h-8 rounded-full"
                  style={{ background: "var(--text-accent-orange)" }}
                ></div>
                <div
                  className="absolute -bottom-4 -right-4 w-12 h-12 rounded-full"
                  style={{ background: "var(--border-primary)" }}
                ></div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Take control of your trades on Sarthifx MT5
              </h2>
              <div
                className="space-y-6 text-lg"
                style={{ color: "var(--text-secondary)" }}
              >
                <p>
                  Explore CFDs on Sarthifx MT5, and enjoy high leverage and low
                  spreads to increase your returns when the market moves in your
                  favour.
                </p>
                <p>
                  With the calculators and numerous analytical tools available
                  on the Sarthifx MT5 platform, you'll be able to manage your
                  capital and trading positions better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Account Types */}
      <section
        className="py-20 px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            MT5 account types
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {accountTypes.slice(0, 3).map((account, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 ${
                    account.highlighted
                      ? "border-white/40 bg-white/10"
                      : "border-white/20 bg-white/5"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-3">{account.title}</h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {account.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {accountTypes.slice(3).map((account, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border-2 border-white/20 bg-white/5"
                >
                  <h3 className="text-xl font-bold mb-3">{account.title}</h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {account.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Account Details Table */}
          <div className="mt-16 bg-white/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Standard account
            </h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex justify-between border-b border-white/20 py-4">
                <span className="font-semibold">Spreads</span>
                <span>From 0.1 pips</span>
              </div>
              <div className="flex justify-between border-b border-white/20 py-4">
                <span className="font-semibold">Commission</span>
                <span>No</span>
              </div>
              <div className="flex justify-between border-b border-white/20 py-4">
                <span className="font-semibold">Minimum deposit</span>
                <span>No</span>
              </div>
              <div className="flex justify-between border-b border-white/20 py-4">
                <span className="font-semibold">Asset classes</span>
                <span>Financials, Derived Indices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Sarthifx MT5 FAQs
          </h2>

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

                {expandedFAQ[faq.id] && faq.answer && (
                  <div className="px-4 pb-4">
                    <p
                      className="text-lg mb-4"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {faq.answer}
                    </p>
                    {faq.details && (
                      <ul className="space-y-4">
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
                      className="mt-6"
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

      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-current rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-current rounded"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-current rounded-full"></div>
        <div className="absolute bottom-20 right-40 w-20 h-20 border-2 border-current rounded"></div>
      </div>
    </div>
  );
};

export default SarthiMt5Page;
