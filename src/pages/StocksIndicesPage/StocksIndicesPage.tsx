import { useState } from "react";

const StockIndicesPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<Record<string, boolean>>({});

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const benefits = [
    {
      id: "swap-free",
      title: "Swap-free trading, no overnight fees",
      description:
        "Focus on market movements without worrying about overnight charges.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="30" cy="70" r="15" fill="#ff6b6b" />
          <path
            d="M30,50 L70,50 M50,30 L50,70"
            stroke="white"
            strokeWidth="0"
          />
        </svg>
      ),
    },
    {
      id: "diversified",
      title: "Smart, diversified portfolios",
      description:
        "Access diverse asset groups and keep your exposure measured with a single trade.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect
            x="40"
            y="40"
            width="20"
            height="40"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="70" cy="30" r="10" fill="#ff6b6b" />
          <rect
            x="20"
            y="50"
            width="15"
            height="30"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path d="M50,30 L70,50" stroke="#ff6b6b" strokeWidth="4" />
        </svg>
      ),
    },
    {
      id: "protection",
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
          <path d="M35,50 L65,50" stroke="white" strokeWidth="2" />
          <path
            d="M30,70 L70,70"
            fill="none"
            stroke="#ff6b6b"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: "spread-risk",
      title: "Spread your risk",
      description:
        "Gain broader market exposure and spread risk across leading companies in one trade.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M30,70 L50,30 L70,70 Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="50" cy="20" r="10" fill="#ff6b6b" />
          <path d="M20,80 L80,80" stroke="#ff6b6b" strokeWidth="4" />
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
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M35,50 L65,50 M35,60 L65,60"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M40,40 L60,40"
            fill="none"
            stroke="#ff6b6b"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  const regions = [
    {
      id: "north-america",
      title: "North America",
      description:
        "North American indices range from Wall Street's powerhouses to Silicon Valley's tech titans.",
    },
    {
      id: "europe",
      title: "Europe",
      description:
        "European indices offer a diverse trading landscape, covering indices from London's financial hubs to Berlin's innovation centres.",
    },
    {
      id: "asia-pacific",
      title: "Asia Pacific",
      description:
        "A region on the rise, Asian indices represent the world's fastest growing economies.",
    },
  ];

  const faqs = [
    {
      id: "what-are-indices",
      question: "What are stock indices?",
      answer:
        "Stock indices are weighted measurements of a collection of stocks, representing a particular market or segment. They provide a snapshot of market performance and allow traders to gain exposure to an entire economy or sector with a single trade, rather than investing in individual companies.",
    },
    {
      id: "trading-costs",
      question: "What are the costs of trading CFDs on stock indices?",
      answer:
        "The main costs associated with trading CFDs on stock indices include spreads (the difference between buy and sell prices), overnight fees (for positions held beyond the trading day), and potentially swap rates. At Sarthifx, we offer zero commission, competitive spreads, and swap-free options on many indices.",
    },
    {
      id: "popular-indices",
      question: "What are the most popular indices available for trading?",
      answer:
        "Popular indices for trading include the US 500 (based on S&P 500), US Tech 100 (based on NASDAQ), Wall Street 30 (based on Dow Jones), UK 100 (based on FTSE 100), Germany 40 (based on DAX), Japan 225 (based on Nikkei), and Australia 200 (based on ASX 200).",
    },
    {
      id: "weighted-indices",
      question:
        "What is the difference between price-weighted and market-cap weighted indices?",
      answer:
        "Price-weighted indices (like the Dow Jones Industrial Average) give higher weight to stocks with higher share prices, regardless of company size. Market-cap weighted indices (like the S&P 500) assign weight based on the total market value of companies, giving larger companies more influence on the index's movement.",
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
                Tap into global Stock Indices
              </h1>
              <p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Trade on the overall movement of the stock markets with the
                world's top exchanges. Combine high leverage with advanced
                risk-management tools to keep your trades a step ahead.
              </p>
              <button
                className="px-8 py-4 rounded-full text-white hover:opacity-90 transition-opacity"
                style={{ background: "var(--text-accent-orange)" }}
              >
                Try free demo
              </button>
            </div>

            {/* Stock Indices Visualization */}
            <div className="relative h-96 md:h-[400px]">
              {/* US 500 */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-xl bg-blue-100 p-4 shadow-xl z-30">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs">
                      500
                    </div>
                    <div className="w-8 h-6 overflow-hidden rounded">
                      <div className="w-full h-full bg-red-500"></div>
                      <div className="w-full h-1/3 bg-white mt-[-8px]"></div>
                      <div className="w-full h-1/3 bg-blue-500 mt-[-8px]"></div>
                    </div>
                  </div>
                  <div className="text-center text-blue-800 text-3xl font-bold">
                    US 500
                  </div>
                </div>
              </div>

              {/* Germany 40 */}
              <div className="absolute top-10 left-10 w-40 h-40 rounded-xl bg-yellow-50 p-4 shadow-xl z-10">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-6 bg-yellow-600 rounded flex items-center justify-center text-white text-xs">
                      40
                    </div>
                    <div className="w-8 h-5 overflow-hidden rounded">
                      <div className="w-full h-1/3 bg-black"></div>
                      <div className="w-full h-1/3 bg-red-600 mt-[-2px]"></div>
                      <div className="w-full h-1/3 bg-yellow-400 mt-[-2px]"></div>
                    </div>
                  </div>
                  <div className="text-center text-yellow-800 text-2xl font-bold">
                    Germany 40
                  </div>
                </div>
              </div>

              {/* Euro 50 */}
              <div className="absolute top-0 right-10 w-36 h-36 rounded-xl bg-blue-50 p-4 shadow-xl z-10">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs">
                      50
                    </div>
                    <div className="w-6 h-5 overflow-hidden rounded bg-blue-600 flex items-center justify-center">
                      <div className="text-yellow-400 text-xs">€</div>
                    </div>
                  </div>
                  <div className="text-center text-blue-700 text-2xl font-bold">
                    Euro 50
                  </div>
                </div>
              </div>

              {/* Wall Street 30 */}
              <div className="absolute bottom-10 left-0 w-40 h-40 rounded-xl bg-green-50 p-4 shadow-xl z-20">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-6 bg-green-600 rounded flex items-center justify-center text-white text-xs">
                      30
                    </div>
                    <div className="w-8 h-6 text-center text-xs font-bold text-green-800">
                      WALL
                    </div>
                  </div>
                  <div className="text-center text-green-800 text-xl font-bold">
                    Wall Street 30
                  </div>
                </div>
              </div>

              {/* Swiss 20 */}
              <div className="absolute bottom-0 right-10 w-36 h-36 rounded-xl bg-red-50 p-4 shadow-xl z-10">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-6 bg-red-600 rounded flex items-center justify-center text-white text-xs">
                      20
                    </div>
                    <div className="w-6 h-5 overflow-hidden rounded bg-white flex items-center justify-center">
                      <div className="text-red-600 font-bold text-xs">+</div>
                    </div>
                  </div>
                  <div className="text-center text-red-600 text-2xl font-bold">
                    Swiss 20
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why trade Stock Indices with Sarthifx
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              <div className="text-5xl font-bold mb-2">0.1</div>
              <p style={{ color: "var(--text-secondary)" }}>Minimum size</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">0%</div>
              <p style={{ color: "var(--text-secondary)" }}>Commission</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">0</div>
              <p style={{ color: "var(--text-secondary)" }}>Spreads</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Indices Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Stock Indices available on Sarthifx
          </h2>

          <div className="space-y-12">
            {regions.map((region) => (
              <div key={region.id} className="border-b border-white/10 pb-12">
                <h3 className="text-2xl font-bold mb-4">{region.title}</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  {region.description}
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
            How to trade Stock Indices on Sarthifx
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-6">CFDs</h3>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Speculate on the price movements of popular Stock Indices with
                high leverage and advanced technical indicators.
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
                    <span>Sarthifx MT5</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded">
                    <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-xs font-bold">
                      cT
                    </div>
                    <span>Sarthifx cTrader</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded">
                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center text-xs font-bold">
                      DX
                    </div>
                    <span>Sarthifx X</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-6">Options</h3>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Predict the market trends of Stock Indices without the risk of
                losing your initial stake.
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
                    <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-xs font-bold">
                      DT
                    </div>
                    <span>Sarthifx Trader</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded">
                    <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-xs font-bold">
                      DB
                    </div>
                    <span>Sarthifx Bot</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded">
                    <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center text-xs font-bold">
                      GO
                    </div>
                    <span>Sarthifx App</span>
                  </div>
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
            Stock Indices FAQs
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

export default StockIndicesPage;
