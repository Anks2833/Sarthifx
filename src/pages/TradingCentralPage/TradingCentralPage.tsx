import { useState } from "react";

const TradingCentralPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<Record<string, boolean>>({
    "how-works": true,
  });

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const tools = [
    {
      title: "Economic Calendar",
      description:
        "Track events that move markets. Filter events, set alerts, and gain historical insights.",
      link: "Go to Economic Calendar",
      available: true,
    },
    {
      title: "Economic Insights",
      description:
        "Monitor, anticipate, and act on market-moving events with event-driven analysis and indicators.",
      link: "Go to Economic Calendar",
      available: true,
    },
    {
      title: "Alpha Generation",
      description:
        "Pinpoint trade opportunities and entry/exit points using market psychology indicators on MT5.",
      link: "",
      available: true,
    },
    {
      title: "Market Buzz and Crowd Insight",
      description:
        "Explore crowd-sourced data and trends to uncover sentiment shifts and opportunities.",
      link: "Go to Market Buzz",
      available: true,
    },
    {
      title: "Newsletters",
      description:
        "Get expert insights, market updates, and actionable trade ideas delivered to your inbox.",
      link: "",
      available: false,
    },
    {
      title: "Technical Views",
      description:
        "Gain expert-driven insights to identify actionable trade opportunities.",
      link: "",
      available: false,
    },
  ];

  const benefits = [
    {
      icon: "📊",
      title: "Live market analysis:",
      description:
        "Stay in sync with the markets with real-time insights and updates.",
    },
    {
      icon: "🤖",
      title: "AI-powered insights:",
      description:
        "Turn cutting-edge analytics into smarter, effective trades.",
    },
    {
      icon: "🔧",
      title: "Comprehensive tools:",
      description:
        "Boost your strategy with trading signals, charting tools, and educational content.",
    },
    {
      icon: "📈",
      title: "Make informed decisions:",
      description: "Transform research and analysis into data-backed trades.",
    },
  ];

  const faqs = [
    {
      id: "how-works",
      question: "How does Trading Central work?",
      answer:
        "Trading Central combines patented pattern recognition technology with expert analyst input to interpret price movements, market data, and financial news. It generates actionable trading ideas, reports, charts, and forecasts for traders.",
    },
    {
      id: "markets",
      question: "What markets does Trading Central cover?",
      answer:
        "Trading Central covers major forex pairs, indices, commodities, and cryptocurrencies, providing comprehensive analysis across multiple asset classes.",
    },
    {
      id: "cost",
      question: "Is there any cost to access Trading Central?",
      answer:
        "Trading Central is available free of charge to Sarthifx clients as part of our commitment to providing professional trading tools.",
    },
    {
      id: "updates",
      question: "How often does Trading Central update its analysis?",
      answer:
        "Trading Central provides real-time updates and analysis throughout trading hours, with continuous monitoring of market conditions.",
    },
    {
      id: "reliability",
      question: "Is Trading Central reliable?",
      answer:
        "Trading Central is an award-winning provider trusted by traders worldwide, with patented technology and expert analysis backing their insights.",
    },
    {
      id: "newsletters",
      question: "How do I subscribe to Trading Central newsletters?",
      answer:
        "Newsletter subscriptions will be available soon. You'll be able to subscribe directly through your Sarthifx account dashboard.",
    },
    {
      id: "alpha",
      question: "How do I access Alpha Generation?",
      answer:
        "Alpha Generation is integrated into MT5 platforms and provides market psychology indicators to help identify trading opportunities.",
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
      {/* Hero Section with Trading Charts Background */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-orange-500/30"></div>
          {/* Trading Chart Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
            <defs>
              <linearGradient
                id="chartGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4a9eff" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#00d4aa" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ffeb3b" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient
                id="chartGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ff4081" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ff8c42" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            {/* Chart Lines */}
            <path
              d="M0,400 Q200,200 400,300 T800,250"
              fill="none"
              stroke="url(#chartGradient1)"
              strokeWidth="3"
              opacity="0.7"
            >
              <animate
                attributeName="d"
                dur="8s"
                repeatCount="indefinite"
                values="M0,400 Q200,200 400,300 T800,250;M0,350 Q200,450 400,250 T800,300;M0,400 Q200,200 400,300 T800,250"
              />
            </path>
            <path
              d="M0,300 Q200,100 400,200 T800,180"
              fill="none"
              stroke="url(#chartGradient2)"
              strokeWidth="2"
              opacity="0.6"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="M0,300 Q200,100 400,200 T800,180;M0,250 Q200,350 400,150 T800,220;M0,300 Q200,100 400,200 T800,180"
              />
            </path>

            {/* Grid Lines */}
            {[...Array(10)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={i * 60}
                x2="800"
                y2={i * 60}
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.1"
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={i * 60}
                y1="0"
                x2={i * 60}
                y2="600"
                stroke="currentColor"
                strokeWidth="0.5"
                opacity="0.1"
              />
            ))}
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center sm:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Trading Central
          </h1>
          <p
            className="text-lg sm:text-xl lg:text-2xl max-w-3xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Access award-winning tools combining AI and expert insights to track
            trends, analyse markets, and spot opportunities. Stay ahead with
            insights that matter.
          </p>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            Trade with tools trusted by traders worldwide
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
            {/* Left Tools */}
            <div className="space-y-8">
              {tools.slice(0, 2).map((tool, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    {tool.title}
                  </h3>
                  <p
                    className="mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {tool.description}
                  </p>
                  {tool.link && (
                    <button
                      className="text-sm font-semibold hover:opacity-80 transition-opacity"
                      style={{ color: "var(--text-accent-blue)" }}
                    >
                      {tool.link} →
                    </button>
                  )}
                </div>
              ))}

              <div className="bg-white/5 rounded-2xl p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {tools[2].title}
                </h3>
                <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                  {tools[2].description}
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {tools[3].title}
                </h3>
                <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                  {tools[3].description}
                </p>
                <button
                  className="text-sm font-semibold hover:opacity-80 transition-opacity"
                  style={{ color: "var(--text-accent-blue)" }}
                >
                  {tools[3].link} →
                </button>
              </div>
            </div>

            {/* Center Mobile Interface */}
            <div className="flex justify-center order-first lg:order-none">
              <div className="w-72 h-[500px] bg-black rounded-3xl p-4 shadow-2xl">
                <div className="bg-gray-900 rounded-2xl h-full p-4 flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-4 text-white text-sm">
                    <span>9:41</span>
                    <span>📶 📶 📶 🔋</span>
                  </div>

                  {/* Trading Interface */}
                  <div className="bg-white rounded-lg p-4 mb-4 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <select className="bg-gray-100 border rounded px-3 py-1 text-sm text-gray-700">
                        <option>EUR/USD</option>
                      </select>
                      <div className="flex gap-2">
                        <div className="w-4 h-4 bg-red-400 rounded-sm"></div>
                        <div className="w-4 h-4 bg-blue-400 rounded-sm"></div>
                        <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                      </div>
                    </div>

                    <div className="text-gray-800 font-bold text-lg mb-2">
                      1.0524
                    </div>
                    <div className="text-gray-500 text-xs mb-4">
                      16:25:00 GMT+4
                    </div>

                    <div className="text-gray-600 text-xs mb-4">
                      Past Events
                    </div>

                    {/* Mini Chart */}
                    <div className="h-32 bg-gradient-to-r from-blue-200 to-blue-400 rounded mb-4 relative">
                      <div className="absolute inset-2 flex items-end justify-center">
                        <div className="flex items-end space-x-1">
                          {[...Array(20)].map((_, i) => (
                            <div
                              key={i}
                              className="w-1 bg-blue-600 rounded-t"
                              style={{ height: `${Math.random() * 80 + 20}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-700 text-xs">
                      <span>EUR/USD</span>
                      <span className="bg-gray-200 px-2 py-1 rounded">
                        Daily
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Tools */}
            <div className="space-y-8">
              {tools.slice(4).map((tool, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-2xl p-6 relative"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    {tool.title}
                  </h3>
                  <p
                    className="mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {tool.description}
                  </p>
                  {!tool.available && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Coming soon
                      </span>
                    </div>
                  )}
                </div>
              ))}

              <div className="bg-white/5 rounded-2xl p-6 relative">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Technical Insights
                </h3>
                <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                  Discover patterns and technical events with award-winning,
                  multi-asset chart analysis.
                </p>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Coming soon
                  </span>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Featured Ideas
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Get bullish and bearish trade ideas, backed by analysis,
                  insights, and backtested strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trading Central Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Desktop Trading Platform Mockup */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-200 rounded-2xl p-4 shadow-2xl">
                <div className="bg-black rounded-lg h-80 p-4 relative overflow-hidden">
                  {/* Trading Platform Interface */}
                  <div className="flex h-full">
                    {/* Sidebar */}
                    <div className="w-48 bg-gray-800 p-2 text-xs">
                      <div className="space-y-1 mb-4">
                        <div className="bg-blue-600 text-white p-1 rounded">
                          Markets
                        </div>
                        <div className="text-gray-300 p-1">Watchlist</div>
                        <div className="text-gray-300 p-1">Indicators</div>
                        <div className="text-gray-300 p-1">Orders</div>
                      </div>

                      <div className="space-y-1 text-gray-300">
                        {["EURUSD", "GBPUSD", "USDJPY", "USDCHF", "AUDUSD"].map(
                          (pair, i) => (
                            <div
                              key={pair}
                              className="flex justify-between p-1"
                            >
                              <span>{pair}</span>
                              <span
                                className={
                                  i % 2 === 0
                                    ? "text-green-400"
                                    : "text-red-400"
                                }
                              >
                                {(1 + Math.random() * 0.1).toFixed(4)}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Main Chart Area */}
                    <div className="flex-1 bg-gray-900 p-2">
                      <div className="h-full bg-black rounded relative">
                        {/* Chart Grid */}
                        <svg className="absolute inset-0 w-full h-full opacity-20">
                          {[...Array(10)].map((_, i) => (
                            <g key={i}>
                              <line
                                x1="0"
                                y1={`${i * 10}%`}
                                x2="100%"
                                y2={`${i * 10}%`}
                                stroke="#333"
                                strokeWidth="0.5"
                              />
                              <line
                                x1={`${i * 10}%`}
                                y1="0"
                                x2={`${i * 10}%`}
                                y2="100%"
                                stroke="#333"
                                strokeWidth="0.5"
                              />
                            </g>
                          ))}
                        </svg>

                        {/* Candlestick Chart */}
                        <div className="absolute inset-4 flex items-end justify-center space-x-1">
                          {[...Array(30)].map((_, i) => (
                            <div key={i} className="flex flex-col items-center">
                              <div
                                className={`w-1 ${
                                  i % 3 === 0 ? "bg-green-500" : "bg-red-500"
                                } rounded-sm`}
                                style={{
                                  height: `${Math.random() * 60 + 20}%`,
                                }}
                              ></div>
                            </div>
                          ))}
                        </div>

                        {/* Trading Central Indicators */}
                        <div className="absolute top-2 right-2 space-y-1">
                          <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                            TC Signal
                          </div>
                          <div className="bg-green-600 text-white px-2 py-1 rounded text-xs">
                            Buy Zone
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                Why Trading Central
              </h2>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg">{benefit.icon}</span>
                    </div>
                    <div>
                      <span className="font-semibold">{benefit.title}</span>
                      <span style={{ color: "var(--text-secondary)" }}>
                        {" "}
                        {benefit.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            FAQs
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-white/10 pb-6">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between py-4 text-left hover:bg-white/5 transition-colors rounded-lg px-4"
                >
                  <span className="text-lg sm:text-xl font-semibold pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 transform transition-transform flex-shrink-0 ${
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
                      className="text-base sm:text-lg leading-relaxed"
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

export default TradingCentralPage;
