import { useState } from "react";

const CommoditiesPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState({});

  const toggleFAQ = (faqId) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const benefits = [
    {
      id: "inflation-hedge",
      title: "Inflation hedge",
      description:
        "Protect your portfolio with assets that historically rise in value during inflation.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <g stroke="white" fill="none" strokeWidth="2">
            <circle cx="50" cy="40" r="25" />
            <rect x="40" y="30" width="20" height="20" />
            <line x1="45" y1="40" x2="55" y2="40" />
          </g>
          <path
            d="M35,70 L65,70"
            stroke="#ff6b6b"
            strokeWidth="8"
            strokeLinecap="round"
          />
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
          <g stroke="white" fill="none" strokeWidth="2">
            <rect x="35" y="30" width="30" height="40" rx="5" />
            <path d="M50,30 L50,70" />
          </g>
          <path
            d="M35,60 L65,60"
            stroke="#ff6b6b"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
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
  ];

  const commodityTypes = [
    {
      id: "precious-metals",
      title: "Precious Metals",
      description:
        "Precious Metals like gold and silver are vital indicators that often reflect market sentiment.",
    },
    {
      id: "base-metals",
      title: "Base Metals",
      description:
        "Base Metals like copper and lead drive global industry and development.",
    },
    {
      id: "natural-energies",
      title: "Natural Energies",
      description:
        "Trade crude oil and speculate on price movements shaped by global events and geopolitics.",
    },
    {
      id: "soft-commodities",
      title: "Soft Commodities",
      description:
        "From coffee to cotton, Soft Commodities offer trading opportunities driven by weather and global demand.",
    },
  ];

  const faqs = [
    {
      id: "benefits",
      question: "What are the benefits of trading commodities?",
      answer:
        "Trading commodities offers several advantages including portfolio diversification, inflation hedging, high liquidity in major markets, and opportunities for both short and long-term trading strategies. Commodities often move differently than stocks and bonds, providing balance during market volatility and potential protection against inflation.",
    },
    {
      id: "types",
      question: "What types of commodities are available for trading?",
      answer:
        "Deriv offers multiple types of commodities for trading: Precious Metals (gold, silver), Base Metals (copper), Energy commodities (crude oil variants like Brent and WTI), and Soft Commodities (agricultural products such as coffee, cotton, and sugar). Each category provides unique trading opportunities based on different market drivers.",
    },
    {
      id: "spot-vs-cfd",
      question:
        "What is the difference between commodities spot trading and commodities CFD trading?",
      answer:
        "In spot trading, you're buying the actual commodity for immediate delivery (though typically settled in cash). With CFD trading, you're only speculating on price movements without owning the underlying asset. CFDs offer advantages like leverage, the ability to go short easily, and no physical delivery concerns, but they come with higher risk due to leverage and overnight fees for positions held long-term.",
    },
    {
      id: "storage",
      question:
        "Are there any storage or physical delivery requirements for trading certain commodities?",
      answer:
        "When trading commodity CFDs or options on Deriv, there are no physical delivery or storage requirements. You're simply speculating on price movements rather than taking ownership of the actual commodities. This eliminates concerns about storage costs, insurance, and physical delivery logistics that are associated with trading physical commodities.",
    },
    {
      id: "factors",
      question: "What factors influence commodity prices?",
      answer:
        "Commodity prices are influenced by supply and demand fundamentals, geopolitical events, weather conditions, currency fluctuations (particularly the US dollar), economic data releases, technological developments, government policies and regulations, inflation expectations, and market sentiment. Different commodities may be more sensitive to specific factors—for example, agricultural commodities are highly affected by weather, while oil prices often respond strongly to geopolitical tensions.",
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
                Unlock gold with Commodities
              </h1>
              <p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Trade on assets from the market that moves the world –
                Commodities. Strengthen your portfolio by trading CFDs or
                Options on gold, precious metals, and oil.
              </p>
              <button
                className="px-8 py-4 rounded-full text-white hover:opacity-90 transition-opacity"
                style={{ background: "var(--text-accent-orange)" }}
              >
                Try free demo
              </button>
            </div>

            {/* Commodities Visualization */}
            <div className="relative h-80 md:h-[400px]">
              {/* Gold */}
              <div className="absolute top-0 left-20 w-40 h-40 rounded-xl bg-yellow-50 p-4 shadow-xl z-10">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 mx-auto"></div>
                  <div className="text-center text-yellow-600 text-2xl font-bold">
                    Gold
                  </div>
                </div>
              </div>

              {/* Brent Crude Oil */}
              <div className="absolute top-10 right-10 w-52 h-52 rounded-xl bg-blue-50 p-4 shadow-xl z-20">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex justify-end">
                    <div className="w-8 h-5 overflow-hidden rounded bg-blue-100">
                      <div className="w-full h-1/3 bg-red-600"></div>
                      <div className="w-full h-1/3 bg-white"></div>
                      <div className="w-full h-1/3 bg-blue-600"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-16 bg-blue-600 rounded mb-2 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                    </div>
                    <div className="text-center text-blue-800 text-xl font-bold">
                      Brent Crude Oil
                    </div>
                  </div>
                </div>
              </div>

              {/* West Texas Intermediate */}
              <div className="absolute bottom-0 left-[30%] w-52 h-40 rounded-xl bg-blue-100 p-4 shadow-xl z-10">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex justify-end">
                    <div className="w-8 h-5 overflow-hidden rounded">
                      <div className="w-full h-full bg-red-white-blue"></div>
                    </div>
                  </div>
                  <div className="text-center text-blue-600 text-lg font-bold">
                    West Texas Intermediate
                  </div>
                </div>
              </div>

              {/* Silver */}
              <div className="absolute bottom-10 left-0 w-36 h-36 rounded-xl bg-gray-50 p-4 shadow-xl z-30">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mx-auto"></div>
                  <div className="text-center text-gray-600 text-xl font-bold">
                    Silver
                  </div>
                </div>
              </div>

              {/* Copper */}
              <div className="absolute bottom-10 right-0 w-36 h-36 rounded-xl bg-red-50 p-4 shadow-xl z-10">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-full bg-orange-600 mx-auto"></div>
                  <div className="text-center text-orange-600 text-xl font-bold">
                    Copper
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
            Why trade Commodities with Deriv
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit) => (
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">0%</div>
              <p style={{ color: "var(--text-secondary)" }}>Commission</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">0</div>
              <p style={{ color: "var(--text-secondary)" }}>Swap fees</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">0.01</div>
              <p style={{ color: "var(--text-secondary)" }}>Minimum size</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1:1000</div>
              <p style={{ color: "var(--text-secondary)" }}>Maximum leverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Commodities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Commodities instruments available on Deriv
          </h2>

          <div className="space-y-12">
            {commodityTypes.map((type) => (
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
            How to trade Commodities on Deriv
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-6">CFDs</h3>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Speculate on the price movements of popular Commodities with
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

            <div className="bg-white/5 p-8 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-6">Options</h3>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Predict the market trends of Commodities without the risk of
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
                    <span>Deriv Trader</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded">
                    <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-xs font-bold">
                      DB
                    </div>
                    <span>Deriv Bot</span>
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
            Commodities FAQs
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

export default CommoditiesPage;
