import { useState } from "react";

const EtfPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState({});

  const toggleFAQ = (faqId) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const benefits = [
    {
      id: "smart-portfolios",
      title: "Smart, diversified portfolios",
      description:
        "Access diverse asset groups and keep your exposure measured with a single trade.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect
            x="30"
            y="40"
            width="40"
            height="30"
            fill="none"
            stroke="white"
            strokeWidth="2"
            rx="5"
          />
          <rect x="35" y="30" width="10" height="10" fill="#ff6b6b" />
          <rect x="50" y="25" width="10" height="10" fill="#ff6b6b" />
          <rect x="65" y="35" width="10" height="10" fill="#ff6b6b" />
        </svg>
      ),
    },
    {
      id: "controlled-risk",
      title: "Controlled risk, unlimited opportunities",
      description:
        "Set your limits and chase your wins with take profit and stop loss features.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M30,70 L50,30 L70,70 Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="50" cy="70" r="15" fill="#ff6b6b" />
        </svg>
      ),
    },
    {
      id: "negative-balance",
      title: "Negative balance protection",
      description: "Protect your account from unexpected market swings.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path d="M30,50 L70,50" stroke="white" strokeWidth="2" />
          <path
            d="M30,70 L70,70"
            stroke="#ff6b6b"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: "swap-free",
      title: "Swap-free trading",
      description:
        "Focus on market movements without worrying about overnight charges.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="30" cy="70" r="15" fill="#ff6b6b" />
          <path d="M35,50 L65,50" stroke="white" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "zero-commission",
      title: "Zero commission trades",
      description:
        "Maximise your potential returns without worrying about extra fees or costs.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect
            x="30"
            y="30"
            width="40"
            height="40"
            rx="5"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path d="M30,50 L70,50" stroke="white" strokeWidth="2" />
          <path
            d="M40,40 L60,40"
            stroke="#ff6b6b"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  const etfTypes = [
    {
      id: "asset-etfs",
      title: "Asset ETFs",
      description:
        "These instruments offer access to global markets with a single ETF — from tech giants to gold reserves.",
    },
    {
      id: "strategy-etfs",
      title: "Strategy ETFs",
      description:
        "Optimise your ETF trades with the strategic hedging and leveraging in these instruments.",
    },
  ];

  const faqs = [
    {
      id: "benefits",
      question: "What are the benefits of trading ETFs?",
      answer:
        "Trading ETFs offers several advantages including instant diversification across sectors or themes, lower costs compared to buying individual stocks, tax efficiency, transparency in holdings, liquidity for easy entry and exit, and reduced risk through broad exposure. ETF CFDs add the benefits of leverage, ability to go short, and no need to own the underlying assets.",
    },
    {
      id: "types",
      question: "What types of ETFs are available for CFD trading?",
      answer:
        "Deriv offers CFDs on various ETF types including: Equity ETFs tracking major indices (S&P 500, NASDAQ), Sector ETFs focusing on specific industries (technology, healthcare), Thematic ETFs targeting trends (clean energy, robotics), Commodity ETFs (gold, silver), Bond ETFs, and Strategy ETFs (leveraged, inverse). This diverse selection allows traders to gain exposure to different markets and investment strategies through a single instrument.",
    },
    {
      id: "costs",
      question: "What are the costs associated with trading ETFs?",
      answer:
        "When trading ETF CFDs on Deriv, costs include spreads (the difference between buy and sell prices), overnight fees for positions held beyond the trading day (except on swap-free accounts), and potential market data fees for advanced charting. Deriv offers competitive zero-spread accounts and transparent fee structures, with no hidden commissions. The actual costs vary by account type and specific ETF being traded.",
    },
    {
      id: "dividends",
      question: "Do ETF CFDs pay dividends?",
      answer:
        "While physical ETFs typically distribute dividends from their underlying assets, ETF CFDs work differently. When trading ETF CFDs on Deriv, you may receive dividend adjustments if you hold a long position when the ETF goes ex-dividend. The amount is typically credited to your account. However, if you hold a short position, a dividend adjustment will be debited from your account.",
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
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Build diversified portfolios with ETFs
              </h1>
              <p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Trade a group of companies all at once with Exchange-traded
                Funds (ETFs) – a one-click gateway to baskets of assets from
                sectors such as tech, energy, healthcare, and more.
              </p>
              <button
                className="px-8 py-4 rounded-full text-white hover:opacity-90 transition-opacity"
                style={{ background: "var(--text-accent-orange)" }}
              >
                Try free demo
              </button>
            </div>

            {/* ETF Cards Visualization */}
            <div className="relative h-96 md:h-[400px]">
              {/* ETFs Central */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-xl bg-blue-100 p-4 shadow-xl z-30">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-blue-600 text-4xl font-bold">
                    ETFs
                  </div>
                </div>
              </div>

              {/* S&P 500 */}
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-44 h-44 rounded-xl bg-blue-50 p-4 shadow-xl z-20">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-6 bg-black rounded flex items-center justify-center text-white text-xs">
                      500
                    </div>
                    <div className="w-8 h-5 overflow-hidden rounded">
                      <div className="w-full h-full">
                        <svg viewBox="0 0 10 6" className="w-8 h-5">
                          <rect fill="#ff0000" width="10" height="1" />
                          <rect fill="#ffffff" y="1" width="10" height="1" />
                          <rect fill="#ff0000" y="2" width="10" height="1" />
                          <rect fill="#ffffff" y="3" width="10" height="1" />
                          <rect fill="#ff0000" y="4" width="10" height="1" />
                          <rect fill="#ffffff" y="5" width="10" height="1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AGG */}
              <div className="absolute top-10 left-10 w-40 h-40 rounded-xl bg-yellow-50 p-4 shadow-xl z-10">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-yellow-600 text-3xl font-bold">
                    AGG
                  </div>
                </div>
              </div>

              {/* ARKK */}
              <div className="absolute bottom-10 left-10 w-40 h-40 rounded-xl bg-green-50 p-4 shadow-xl z-20">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-green-600 text-3xl font-bold">
                    ARKK
                  </div>
                </div>
              </div>

              {/* SPXS */}
              <div className="absolute top-10 right-10 w-36 h-36 rounded-xl bg-indigo-50 p-4 shadow-xl z-10">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-indigo-600 text-3xl font-bold">
                    SPXS
                  </div>
                </div>
              </div>

              {/* VOO */}
              <div className="absolute bottom-10 right-10 w-36 h-36 rounded-xl bg-blue-50 p-4 shadow-xl z-10">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-blue-600 text-3xl font-bold">
                    VOO
                  </div>
                </div>
              </div>

              {/* Background elements */}
              <div className="absolute inset-0 z-0">
                <div
                  className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, var(--gradient-start), var(--gradient-mid-1))",
                    opacity: "0.1",
                  }}
                ></div>
                <div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to right, var(--gradient-mid-2), var(--gradient-end))",
                    opacity: "0.1",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why trade ETFs with Deriv
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.slice(0, 3).map((benefit) => (
              <div key={benefit.id} className="text-center">
                <div className="w-32 h-32 mx-auto mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.slice(3, 5).map((benefit) => (
              <div key={benefit.id} className="text-center">
                <div className="w-32 h-32 mx-auto mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">0</div>
              <p style={{ color: "var(--text-secondary)" }}>Spreads</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30+</div>
              <p style={{ color: "var(--text-secondary)" }}>ETFs</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1.0</div>
              <p style={{ color: "var(--text-secondary)" }}>Minimum size</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available ETFs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            ETF instruments available on Deriv
          </h2>

          <div className="space-y-12">
            {etfTypes.map((type) => (
              <div key={type.id} className="border-b border-white/10 pb-12">
                <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  {type.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button
              className="px-6 py-3 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
              style={{ background: "var(--text-accent-orange)" }}
            >
              Check trading specs
            </button>
          </div>
        </div>
      </section>

      {/* How to Trade Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How to trade ETFs on Deriv
          </h2>

          <div className="bg-white/5 p-8 rounded-xl text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">CFDs</h3>
            <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
              Speculate on the price movements of popular ETFs with high
              leverage and advanced technical indicators.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium"
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
                className="ml-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-6">Platforms</h4>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-xs font-bold">
                    MT5
                  </div>
                  <span>Deriv MT5</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded">
                  <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-xs font-bold">
                    cT
                  </div>
                  <span>Deriv cTrader</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded">
                  <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-xs font-bold">
                    DX
                  </div>
                  <span>Deriv X</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            ETFs FAQs
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white/5 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/10 transition-colors"
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
                  <div className="px-6 pb-6">
                    <div
                      className="text-lg"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {faq.answer}
                    </div>
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

export default EtfPage;
