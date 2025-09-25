import { useState } from "react";

const SarthiCTraderPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<Record<string, boolean>>({});

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const features = [
    {
      title: "Integrated Trading Central",
      description:
        "Analyse price movements with expert recommendations and market insights.",
      position: "left",
    },
    {
      title: "24/7 trading",
      description:
        "Trade Synthetic Indices anytime, even on weekends and holidays.",
      position: "right",
    },
    {
      title: "AI-powered trading insights",
      description:
        "Refine strategies, analyse markets, and more with integrated ChatGPT.",
      position: "left",
    },
    {
      title: "Copy trading",
      description: "Copy the trading strategies of seasoned traders at a fee.",
      position: "right",
    },
    {
      title: "Quick account sign-up",
      description:
        "Practise with a demo account preloaded with unlimited virtual funds.",
      position: "left",
    },
    {
      title: "One platform, multiple assets",
      description:
        "Access Forex, Stocks, Commodities, 24/7 markets, and more in one place.",
      position: "right",
    },
  ];

  const copyTradingFeatures = [
    {
      title: "Various trading strategies",
      description:
        "Choose from a list of strategy providers and find the trading strategy that suits you.",
    },
    {
      title: "You call the shots",
      description:
        "Choose to stop a trade or unsubscribe from a strategy provider whenever you want.",
    },
    {
      title: "Risk-management tools",
      description:
        "Minimise the potential risks associated with your chosen trading strategies.",
    },
  ];

  const faqs = [
    {
      id: "copy-trading",
      question: "What is copy trading and how does it work?",
      answer:
        "Copy trading lets you automatically copy the trades of experienced traders (called strategy providers) in real time. When they trade, your account does the same — no manual input needed.",
      link: "Learn more in our beginner-friendly guide to how copy trading works.",
    },
    {
      id: "strategy-provider",
      question: "How do I become a strategy provider on Sarthifx cTrader?",
    },
    {
      id: "fees",
      question: "What are the fees for copy trading on Sarthifx cTrader?",
    },
    {
      id: "manage-strategy",
      question: "How can I manage my strategy after publishing it on cTrader?",
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
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {/* cTrader Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                CT
              </div>
              <span className="text-2xl font-bold">Sarthi cTrader</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              A CFD platform for copy trading
            </h1>
            <p
              className="text-lg sm:text-xl mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Replicate the trades of successful CFD traders with copy trading.
              Plus, access to 60+ custom indicators, chart trading, and over 150
              financial and synthetic instruments on Sarthifx cTrader.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                className="px-6 sm:px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ background: "var(--text-accent-orange)" }}
              >
                Try free demo
              </button>
              <button className="px-6 sm:px-8 py-4 border-2 border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition-colors font-medium">
                Download now
              </button>
            </div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="flex justify-center relative order-1 lg:order-2">
            <div className="relative">
              <div className="w-72 sm:w-80 h-[500px] sm:h-[600px] bg-black rounded-3xl p-3 sm:p-4 shadow-2xl">
                {/* Phone Screen */}
                <div className="bg-gray-900 rounded-2xl h-full p-3 sm:p-4 flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-4 text-white text-xs sm:text-sm">
                    <span>11:10</span>
                    <span>Michael Stern</span>
                  </div>

                  {/* Strategy Stats Header */}
                  <div className="bg-gray-800 rounded-lg p-3 mb-4">
                    <div className="text-white text-sm mb-2">
                      Strategy Stats
                    </div>
                    <div className="text-green-400 text-lg font-bold">
                      $6,879
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="h-32 bg-gradient-to-r from-red-600 to-green-600 rounded-lg mb-4 relative">
                    <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
                  </div>

                  {/* All Trades Section */}
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-white text-sm mb-2">All Trades</div>
                    <div className="text-green-400 text-xs">Start Copying</div>
                  </div>
                </div>
              </div>

              {/* Floating Trader Cards */}
              <div className="absolute -left-4 sm:-left-8 top-16 sm:top-20 bg-yellow-100 text-black rounded-lg p-2 sm:p-3 shadow-lg max-w-[120px] sm:max-w-none">
                <div className="w-8 h-8 bg-yellow-500 rounded-full mb-2"></div>
                <div className="text-xs sm:text-sm font-bold">ROI +135%</div>
                <div className="text-xs">Sarah</div>
                <div className="text-xs text-purple-600 mt-1">COPY TRADING</div>
              </div>

              <div className="absolute -right-4 sm:-right-8 bottom-20 sm:bottom-24 bg-white text-black rounded-lg p-2 sm:p-3 shadow-lg max-w-[120px] sm:max-w-none">
                <div className="w-8 h-8 bg-gray-400 rounded-full mb-2"></div>
                <div className="text-xs sm:text-sm font-bold">ROI +452%</div>
                <div className="text-xs">Michael</div>
              </div>

              {/* Floating Currency Cards */}
              <div className="absolute -left-6 bottom-32 bg-red-200 rounded-lg p-2 shadow-lg">
                <div className="text-xs text-red-800 font-semibold">GBP</div>
              </div>
              <div className="absolute -right-6 top-40 bg-blue-200 rounded-lg p-2 shadow-lg">
                <div className="text-xs text-blue-800 font-semibold">META</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        className="py-16 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">150+</div>
              <p style={{ color: "var(--text-secondary)" }}>Tradeable assets</p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
              <p style={{ color: "var(--text-secondary)" }}>Trading</p>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="text-4xl sm:text-5xl font-bold mb-2">Zero</div>
              <p style={{ color: "var(--text-secondary)" }}>Commission</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trade with Sarthifx cTrader */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            Why trade with Sarthifx cTrader
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
            {/* Left Features */}
            <div className="space-y-12">
              {features
                .filter((feature) => feature.position === "left")
                .map((feature, index) => (
                  <div key={index}>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">
                      {feature.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)" }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
            </div>

            {/* Center Mobile Mockup */}
            <div className="flex justify-center order-first lg:order-none">
              <div className="bg-white rounded-2xl p-4 w-64 shadow-2xl">
                <div className="text-center text-black mb-4">
                  <div className="text-sm mb-2">9:41</div>
                  <div className="text-xs mb-4">USD/JPY</div>
                </div>

                {/* Trading Interface */}
                <div className="space-y-2 text-xs text-black mb-4">
                  <div className="flex justify-between items-center">
                    <span>$100.83</span>
                    <span>$140.83</span>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 p-2 rounded mb-2">
                      Overview | Positions | Orders | Price
                    </div>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 p-2 rounded">
                    <span>USD/JPY</span>
                    <span className="text-green-600">+0.14%</span>
                  </div>
                </div>

                {/* Buy/Sell Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-red-500 text-white text-center py-3 rounded">
                    <div className="text-xs">SELL</div>
                    <div className="text-sm font-bold">156.38</div>
                  </div>
                  <div className="bg-green-500 text-white text-center py-3 rounded">
                    <div className="text-xs">BUY</div>
                    <div className="text-sm font-bold">156.39</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-12">
              {features
                .filter((feature) => feature.position === "right")
                .map((feature, index) => (
                  <div key={index}>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">
                      {feature.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)" }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
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
                <div className="text-2xl font-bold">Android & iOS</div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
                <span>📱</span> Google Play
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
                <span>🍎</span> App Store
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
                <span>🖥</span> Windows
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
                <span>🌐</span> Web browser
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm">
                <span>🖥</span> macOS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Copy Trading Your Way */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Copy trading your way
              </h2>
              <p
                className="text-lg sm:text-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                Manage your risk by spreading your funds across different
                trading strategies.
              </p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 relative">
              <div className="bg-white rounded-xl p-4 h-64 overflow-hidden">
                {/* Desktop Trading Interface Mockup */}
                <div className="h-full bg-gradient-to-br from-green-100 to-blue-100 rounded-lg relative">
                  <div className="absolute top-2 right-2 bg-gray-800 text-white px-2 py-1 rounded text-xs">
                    📊 Advanced charts
                  </div>
                  <div className="absolute bottom-2 left-2 bg-gray-800 text-white px-2 py-1 rounded text-xs">
                    📋 Copy trading
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {copyTradingFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* An Intuitive Interface */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-6 relative">
                {/* Mobile Copy Trading Interface */}
                <div className="text-center mb-4">
                  <div className="text-sm text-gray-600">9:41</div>
                  <div className="text-lg font-bold text-gray-800">
                    cTrader Copy
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Strategy Providers List */}
                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-semibold text-gray-800">
                          Lora May
                        </span>
                      </div>
                      <div className="text-green-600 text-sm">+1,595.46%</div>
                    </div>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-semibold text-gray-800">
                          Jane Markson
                        </span>
                      </div>
                      <div className="text-green-600 text-sm">+792,789.77%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                An intuitive interface
              </h2>
              <p
                className="text-lg sm:text-xl leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Take advantage of an easy-to-use interface for trading and
                charting that both new and experienced traders can enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Your Favourite Assets */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            All your favourite assets in one place
          </h2>
          <p
            className="text-lg sm:text-xl mb-12 max-w-4xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Trade derived and financial assets on one CFD account, without
            needing to switch between multiple accounts.
          </p>

          {/* Asset Icons */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mb-16">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              90
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
              15
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">
              600
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-600 rounded-lg flex items-center justify-center text-white font-bold">
              900
            </div>
          </div>

          {/* Country Flags */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500 rounded-full"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-700 rounded-full"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-700 rounded-full"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-800 rounded-full"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-600 rounded-full"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full"></div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-800 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Sarthifx cTrader FAQs
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
                      className="text-base sm:text-lg mb-4"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {faq.answer}
                    </p>
                    {faq.link && (
                      <p style={{ color: "var(--text-secondary)" }}>
                        <a
                          href="#"
                          className="underline"
                          style={{ color: "var(--text-accent-blue)" }}
                        >
                          {faq.link}
                        </a>
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

export default SarthiCTraderPage;
