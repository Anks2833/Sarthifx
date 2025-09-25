import { useState } from "react";

const CryptoPage = () => {
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
      id: "controlled-risk",
      title: "Controlled risk, unlimited opportunities",
      description:
        "Set your limits and manage your trades with take profit and stop loss features.",
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
      id: "intuitive-platforms",
      title: "Intuitive platforms for effective trades",
      description:
        "Navigate markets seamlessly on our responsive, easy-to-use platforms with advanced tools, with high leverage and super tight spreads.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect
            x="20"
            y="30"
            width="60"
            height="40"
            rx="5"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="20"
            y1="50"
            x2="80"
            y2="50"
            stroke="white"
            strokeWidth="2"
          />
          <rect x="30" y="35" width="10" height="10" fill="#ff6b6b" />
          <rect x="45" y="35" width="10" height="10" fill="#ff6b6b" />
          <rect x="60" y="35" width="10" height="10" fill="#ff6b6b" />
        </svg>
      ),
    },
    {
      id: "easy-access",
      title: "Easy access to your funds",
      description:
        "Deposit or withdraw with your preferred payment method. Quick, hassle-free, on your terms.",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M30,30 L70,30 L70,70 L30,70 Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path d="M20,40 L80,40" stroke="#ff6b6b" strokeWidth="4" />
          <circle cx="35" cy="55" r="10" fill="#ff6b6b" />
        </svg>
      ),
    },
    {
      id: "24-7-trading",
      title: "24/7 trading",
      description:
        "Round-the-clock access to Cryptocurrencies, including weekends and public holidays.",
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
          <path d="M50,30 L50,50 L70,50" stroke="white" strokeWidth="2" />
          <path
            d="M30,70 L70,70"
            stroke="#ff6b6b"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  const cryptoTypes = [
    {
      id: "major-coins",
      title: "Major Coins",
      description:
        "Major coins Bitcoin and Ethereum are the most recognised digital coins whose movements have significant impact on the crypto landscape.",
    },
    {
      id: "altcoins",
      title: "Altcoins",
      description:
        "Alt coins are all other cryptocurrencies other than Bitcoin and Ethereum.",
    },
  ];

  const faqs = [
    {
      id: "benefits",
      question: "What are the benefits of trading cryptocurrencies?",
      answer:
        "Trading cryptocurrencies offers several advantages including 24/7 market access, high volatility creating profit opportunities, portfolio diversification, lower transaction costs compared to traditional markets, and exposure to innovative blockchain technology. Crypto markets often move independently of traditional financial markets, providing additional diversification benefits.",
    },
    {
      id: "spot-vs-cfd",
      question:
        "What is the difference between crypto spot trading and crypto CFD trading?",
      answer:
        "In crypto spot trading, you purchase and own the actual cryptocurrency, which can be transferred to your personal wallet. With CFD trading, you're only speculating on price movements without owning the underlying asset. CFDs offer advantages like leverage, the ability to go short easily, and no need for a crypto wallet, but they come with funding costs for overnight positions and don't provide actual ownership of the digital asset.",
    },
    {
      id: "factors",
      question: "What factors can influence the cryptocurrency prices?",
      answer:
        "Cryptocurrency prices are influenced by multiple factors including market sentiment, adoption rates, regulatory news and developments, technological advancements or setbacks, macroeconomic factors, media coverage, institutional investment, network security and stability, correlation with other markets, and tokenomics (supply and demand dynamics). The crypto market is known for its high volatility as these factors rapidly shift.",
    },
    {
      id: "research",
      question:
        "How can I research and analyse cryptocurrencies before making trading decisions?",
      answer:
        "To research cryptocurrencies effectively, utilize a multi-faceted approach: study the project's fundamentals (team, technology, use case, tokenomics), analyze technical indicators and chart patterns, stay informed on market news and regulatory developments, monitor on-chain metrics (transaction volume, active addresses), assess community engagement and development activity, compare against competing projects, and evaluate market sentiment across social media and crypto communities.",
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
                Access popular cryptos 24/7
              </h1>
              <p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Trade on the price of Bitcoin, Ethereum, and other popular
                cryptocurrencies. Available round the clock with tight spreads,
                fast execution, and 0% commission.
              </p>
              <button
                className="px-8 py-4 rounded-full text-white hover:opacity-90 transition-opacity"
                style={{ background: "var(--text-accent-orange)" }}
              >
                Try free demo
              </button>
            </div>

            {/* Crypto Coins Visualization */}
            <div className="relative h-96 md:h-[400px]">
              {/* BTC */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-xl bg-yellow-50 p-4 shadow-xl z-20">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="w-16 h-16 mx-auto rounded-full bg-orange-500 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">₿</span>
                  </div>
                  <div className="text-center text-orange-600 text-4xl font-bold">
                    BTC
                  </div>
                </div>
              </div>

              {/* ETH */}
              <div className="absolute top-10 left-10 w-40 h-40 rounded-xl bg-blue-50 p-4 shadow-xl z-10">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="w-12 h-12 mx-auto">
                    <svg viewBox="0 0 256 417" className="w-full h-full">
                      <path
                        fill="#343434"
                        d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
                      />
                      <path
                        fill="#8C8C8C"
                        d="M127.962 0L0 212.32l127.962 75.639V154.158z"
                      />
                      <path
                        fill="#3C3C3B"
                        d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.601L256 236.587z"
                      />
                      <path
                        fill="#8C8C8C"
                        d="M127.962 416.905v-104.72L0 236.585z"
                      />
                      <path
                        fill="#141414"
                        d="M127.961 287.958l127.96-75.637-127.96-58.162z"
                      />
                      <path
                        fill="#393939"
                        d="M0 212.32l127.96 75.638v-133.8z"
                      />
                    </svg>
                  </div>
                  <div className="text-center text-blue-600 text-2xl font-bold">
                    ETH
                  </div>
                </div>
              </div>

              {/* USDT */}
              <div className="absolute top-0 right-10 w-40 h-40 rounded-xl bg-green-50 p-4 shadow-xl z-10">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="w-12 h-12 mx-auto rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">T</span>
                  </div>
                  <div className="text-center text-green-600 text-2xl font-bold">
                    USDT
                  </div>
                </div>
              </div>

              {/* DOGE */}
              <div className="absolute bottom-10 left-0 w-40 h-40 rounded-xl bg-yellow-100 p-4 shadow-xl z-30">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="w-12 h-12 mx-auto rounded-full bg-yellow-400 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">Ð</span>
                  </div>
                  <div className="text-center text-yellow-600 text-2xl font-bold">
                    DOGE
                  </div>
                </div>
              </div>

              {/* TRX */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-36 h-36 rounded-xl bg-red-50 p-4 shadow-xl z-10">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="w-10 h-10 mx-auto rounded-full bg-red-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">T</span>
                  </div>
                  <div className="text-center text-red-600 text-2xl font-bold">
                    TRX
                  </div>
                </div>
              </div>

              {/* LTC */}
              <div className="absolute bottom-20 right-0 w-36 h-36 rounded-xl bg-gray-100 p-4 shadow-xl z-10">
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="w-10 h-10 mx-auto rounded-full bg-gray-400 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">Ł</span>
                  </div>
                  <div className="text-center text-gray-600 text-2xl font-bold">
                    LTC
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
            Why trade Crypto with Deriv
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
              <div className="text-5xl font-bold mb-2">0.1</div>
              <p style={{ color: "var(--text-secondary)" }}>Minimum size</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1:1000</div>
              <p style={{ color: "var(--text-secondary)" }}>Maximum leverage</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">0</div>
              <p style={{ color: "var(--text-secondary)" }}>Swap fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Crypto Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Crypto instruments available on Deriv
          </h2>

          <div className="space-y-12">
            {cryptoTypes.map((type) => (
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
            How to trade Crypto on Deriv
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-xl text-center">
              <h3 className="text-3xl font-bold mb-6">CFDs</h3>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                Speculate on the price movements of popular Cryptocurrencies
                with high leverage and advanced technical indicators.
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
                Predict the market trends of Cryptocurrencies without the risk
                of losing your initial stake.
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
                    <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center text-xs font-bold">
                      GO
                    </div>
                    <span>Deriv GO</span>
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
            Crypto FAQs
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

export default CryptoPage;
