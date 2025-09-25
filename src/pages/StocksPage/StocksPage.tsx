import { useState } from "react";

const StocksPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState({
    "what-are-stocks": true,
  });

  const toggleFAQ = (faqId) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const stockCategories = [
    {
      id: "technology",
      title: "Technology",
      description:
        "Tech stocks represent companies that lead the charge in digital evolution and breakthroughs.",
    },
    {
      id: "transportation",
      title: "Transportation & Aviation",
      description:
        "These companies connect the world, moving people and goods across borders.",
    },
    {
      id: "finance",
      title: "Financial Services",
      description:
        "Trade the world's leading financial services companies, from banking and insurance to fintech.",
    },
    {
      id: "healthcare",
      title: "Healthcare & Pharmaceuticals",
      description:
        "These companies are at the forefront of medical innovation and healthcare technology.",
    },
    {
      id: "consumer",
      title: "Consumer Goods & Retail",
      description:
        "Consumer goods and retail companies mirror society's trends and behaviours.",
    },
    {
      id: "entertainment",
      title: "Entertainment & Media",
      description:
        "This sector represents companies that shape how we watch, listen, and play.",
    },
  ];

  const faqs = [
    {
      id: "what-are-stocks",
      question: "What are Stocks?",
      answer: (
        <>
          Stocks represent ownership and a claim to part of a company's future
          profits. When you purchase shares of a company's stock, you become a
          partial owner of that business.
          <p className="mt-2">
            To see how stock ownership can translate into trading opportunities,
            here's a{" "}
            <a
              href="#"
              className="underline"
              style={{ color: "var(--text-accent-blue)" }}
            >
              guide to swing trading in stocks
            </a>{" "}
            that shows how traders aim to profit from price movements over a few
            days or weeks.
          </p>
        </>
      ),
    },
    {
      id: "spot-vs-cfd",
      question:
        "What is the difference between stock spot trading and stock CFD trading?",
      answer:
        "With stock spot trading, you actually own the underlying asset and may receive dividends and voting rights. With stock CFDs, you're only speculating on price movements without owning the asset. CFDs offer advantages like leverage, the ability to go short, and usually lower fees, but don't provide ownership rights and carry higher risk due to leverage.",
    },
    {
      id: "dividends",
      question: "Do CFDs on Stocks pay dividends?",
      answer:
        "Yes, when trading CFDs on dividend-paying stocks, you may receive dividend adjustments if you hold a long position when the stock goes ex-dividend. The amount is typically credited to your account. However, if you hold a short position, a dividend adjustment will be debited from your account.",
    },
    {
      id: "price-movements",
      question: "What makes Stock prices go up and down?",
      answer:
        "Stock prices fluctuate due to supply and demand dynamics influenced by company performance, industry trends, economic indicators, interest rates, market sentiment, geopolitical events, and institutional trading activity. Technical factors like trading volume and momentum can also drive short-term price movements.",
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
                Take positions on popular Stocks
              </h1>
              <p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Trade stock CFDs on your favourite brands like TSLA, AMZN, and
                AAPL without actually owning them. Manage risks while enjoying
                tight spreads and the flexibility to go long or short on global
                stocks across industries.
              </p>
              <button
                className="px-8 py-4 rounded-full text-white hover:opacity-90 transition-opacity"
                style={{ background: "var(--text-accent-orange)" }}
              >
                Try free demo
              </button>
            </div>

            {/* Stock Cards Visualization */}
            <div className="relative h-96 md:h-[500px]">
              {/* Nike */}
              <div className="absolute top-0 right-[15%] w-44 h-44 rounded-xl bg-black p-4 shadow-xl transform -rotate-3 z-20">
                <div className="w-full h-full flex flex-col justify-between">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 192.756 192.756"
                    fill="#fff"
                  >
                    <path d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z" />
                  </svg>
                  <div className="text-center text-white text-3xl font-bold">
                    NKE
                  </div>
                </div>
              </div>

              {/* Microsoft */}
              <div className="absolute top-10 right-0 w-36 h-36 rounded-xl bg-green-50 p-4 shadow-xl transform rotate-6 z-10">
                <div className="w-full h-full flex flex-col justify-between">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 21 21"
                    fill="#00a2ed"
                  >
                    <path d="M0 0h10v10H0zm11 0h10v10H11zm-11 11h10v10H0zm11 0h10v10H11z" />
                  </svg>
                  <div className="text-center text-gray-700 text-2xl font-bold">
                    MSFT
                  </div>
                </div>
              </div>

              {/* McDonald's */}
              <div className="absolute top-40 left-0 w-40 h-40 rounded-xl bg-yellow-50 p-4 shadow-xl z-10">
                <div className="w-full h-full flex flex-col justify-between">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 50 50"
                    fill="#FF0000"
                  >
                    <path d="M49.7 23c0-2.3-0.6-3.5-1.9-3.5-1.2 0-1.9 1.2-1.9 3.5 0 2.3 0.6 3.5 1.9 3.5 1.3 0 1.9-1.2 1.9-3.5z" />
                    <path d="M42 23c0-2.3-0.6-3.5-1.9-3.5-1.2 0-1.9 1.2-1.9 3.5 0 2.3 0.6 3.5 1.9 3.5 1.3 0 1.9-1.2 1.9-3.5z" />
                    <path d="M34.3 23c0-2.3-0.6-3.5-1.9-3.5-1.2 0-1.9 1.2-1.9 3.5 0 2.3 0.6 3.5 1.9 3.5 1.3 0 1.9-1.2 1.9-3.5z" />
                    <path d="M26.6 23c0-2.3-0.6-3.5-1.9-3.5-1.2 0-1.9 1.2-1.9 3.5 0 2.3 0.6 3.5 1.9 3.5 1.3 0 1.9-1.2 1.9-3.5z" />
                    <path d="M19 23c0-2.3-0.6-3.5-1.9-3.5-1.2 0-1.9 1.2-1.9 3.5 0 2.3 0.6 3.5 1.9 3.5 1.2 0 1.9-1.2 1.9-3.5z" />
                    <path d="M11.3 23c0-2.3-0.6-3.5-1.9-3.5-1.2 0-1.9 1.2-1.9 3.5 0 2.3 0.6 3.5 1.9 3.5 1.3 0 1.9-1.2 1.9-3.5z" />
                    <path d="M3.6 23c0-2.3-0.6-3.5-1.9-3.5-1.2 0-1.7 1.2-1.7 3.5 0 2.3 0.5 3.5 1.7 3.5 1.3 0 1.9-1.2 1.9-3.5z" />
                  </svg>
                  <div className="text-center text-yellow-600 text-2xl font-bold">
                    MCD
                  </div>
                </div>
              </div>

              {/* Meta */}
              <div className="absolute bottom-10 left-[15%] w-52 h-52 rounded-xl bg-blue-50 p-4 shadow-xl transform -rotate-3 z-30">
                <div className="w-full h-full flex flex-col justify-between">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="#0866ff"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <div className="text-center text-blue-600 text-3xl font-bold">
                    META
                  </div>
                </div>
              </div>

              {/* IBM */}
              <div className="absolute bottom-20 left-[30%] w-40 h-40 rounded-xl bg-blue-100 p-4 shadow-xl z-10">
                <div className="w-full h-full flex flex-col justify-between">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                    fill="#1F70C1"
                  >
                    <path d="M0 0v32h32V0H0zm24.295 27.617H17.21v-1.95h7.085v1.95zm2.261-12.617v7.594H5.445v-7.594h3.512v5.1h1.569v-5.1h3.425v5.1h1.569v-5.1h3.435v5.1h1.569v-5.1h3.522v5.1h1.569v-5.1h1.441zM26.556 13h-21.11V6.628h21.11V13z" />
                  </svg>
                  <div className="text-center text-blue-700 text-2xl font-bold">
                    IBM
                  </div>
                </div>
              </div>

              {/* Mastercard */}
              <div className="absolute bottom-0 right-0 w-44 h-44 rounded-xl bg-red-100 p-4 shadow-xl transform rotate-6 z-10">
                <div className="w-full h-full flex flex-col justify-between">
                  <svg width="35" height="35" viewBox="0 0 24 24">
                    <circle cx="7" cy="12" r="6" fill="#eb001b" />
                    <circle cx="17" cy="12" r="6" fill="#f79e1b" />
                    <path
                      d="M12 17.5a6 6 0 000-11 6 6 0 000 11z"
                      fill="#ff5f00"
                    />
                  </svg>
                  <div className="text-center text-red-500 text-2xl font-bold">
                    MA
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
        </div>
      </section>

      {/* Why Trade Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why trade Stocks with Sarthifx
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect
                    x="20"
                    y="20"
                    width="60"
                    height="60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transform rotate-12"
                  />
                  <circle cx="35" cy="80" r="10" fill="#ff6b6b" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Controlled risk, unlimited opportunities
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Set your limits and manage your trades with take profit and stop
                loss features.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <rect
                    x="30"
                    y="30"
                    width="40"
                    height="10"
                    fill="#fff"
                    className="transform -rotate-12"
                  />
                  <circle cx="70" cy="30" r="10" fill="#ff6b6b" />
                  <circle cx="50" cy="20" r="6" fill="#ff6b6b" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Go big with high leverage
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Maximise your stock market exposure with high leverage and super
                tight spreads.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M30,70 L50,30 L70,70 Z"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <circle cx="70" cy="30" r="10" fill="#ff6b6b" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Easy access to your funds
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Deposit or withdraw with your preferred payment method. Quick,
                hassle-free, on your terms.
              </p>
            </div>

            <div className="text-center md:col-start-1 lg:col-start-auto">
              <div className="w-32 h-32 mx-auto mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M40,50 L60,50 M50,40 L50,60"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M30,70 L70,70"
                    fill="none"
                    stroke="#ff6b6b"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Negative balance protection
              </h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Protect your account from unexpected market swings.
              </p>
            </div>

            <div className="text-center md:col-start-2 lg:col-start-auto">
              <div className="w-32 h-32 mx-auto mb-6">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <path
                    d="M35,50 L65,50 M35,60 L65,60"
                    stroke="#fff"
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
              </div>
              <h3 className="text-xl font-bold mb-2">Zero commission trades</h3>
              <p style={{ color: "var(--text-secondary)" }}>
                Maximise your potential returns without worrying about extra
                fees or costs.
              </p>
            </div>
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
              <div className="text-5xl font-bold mb-2">50+</div>
              <p style={{ color: "var(--text-secondary)" }}>Global stocks</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">0.1</div>
              <p style={{ color: "var(--text-secondary)" }}>Minimum size</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">0%</div>
              <p style={{ color: "var(--text-secondary)" }}>Commission</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stock Instruments Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Stock instruments available on Sarthifx
          </h2>

          <div className="space-y-12">
            {stockCategories.map((category) => (
              <div key={category.id} className="border-b border-white/10 pb-12">
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  {category.description}
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
            How to trade Stocks on Sarthifx
          </h2>

          <div className="bg-white/5 p-8 rounded-xl text-center">
            <h3 className="text-3xl font-bold mb-6">CFDs</h3>
            <p
              className="max-w-3xl mx-auto mb-6"
              style={{ color: "var(--text-secondary)" }}
            >
              Speculate on the price movements of popular Stocks with high
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

            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6">Platforms</h4>
              <div className="flex flex-wrap justify-center gap-6">
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
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Stocks FAQs
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

export default StocksPage;
