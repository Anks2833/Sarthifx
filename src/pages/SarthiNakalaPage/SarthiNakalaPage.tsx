import { useState } from "react";

const SarthiNakalaPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<Record<string, boolean>>({});

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const faqs = [
    {
      id: "start-trading",
      question: "How do I start trading on Sarthifx Nakala?",
      answer: "You'll need to:",
      steps: [
        "Download the Sarthifx Nakala app from the Google Play Store or iOS App Store.",
        "Sign up with your Sarthifx account email.",
        "Link your Sarthifx MT5 Standard account with Nakala.",
      ],
    },
    {
      id: "link-mt5",
      question: "How do I link my Sarthifx MT5 account to the app?",
    },
    {
      id: "difference",
      question:
        "What's the difference between copy trading on Sarthifx Nakala and Sarthifx cTrader?",
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
            {/* DN Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="text-white px-3 py-1 rounded text-sm font-bold"
                style={{ background: "var(--text-accent-orange)" }}
              >
                DN
              </div>
              <span className="text-2xl font-bold">sarthifx Nakala</span>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              Your go-to copy trading app
            </h1>
            <p
              className="text-lg mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Join a global community of traders and copy top trading strategies
              across Forex, Stocks, Cryptocurrencies, and our exclusive Derived
              Indices.
            </p>

            {/* Download Button */}
            <button
              className="px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "var(--text-accent-orange)" }}
            >
              Download now
            </button>
          </div>

          {/* Mobile App Mockup */}
          <div className="relative">
            <div className="w-80 h-96 bg-black rounded-3xl p-2 shadow-2xl mx-auto">
              <div className="w-full h-full bg-gray-900 rounded-2xl relative overflow-hidden">
                {/* Phone Status Bar */}
                <div className="flex justify-between items-center p-2 text-white text-xs">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* App Interface */}
                <div className="px-4 pb-4">
                  <div className="text-center mb-4">
                    <div className="text-white text-sm font-semibold">
                      Spotlight
                    </div>
                  </div>

                  {/* ROI Card */}
                  <div className="bg-blue-500/20 rounded-xl p-4 mb-4 relative">
                    <div className="absolute -left-4 -top-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                        <img
                          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
                          alt="Trader"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="ml-8">
                      <div className="text-white font-bold text-lg">
                        ROI +135%
                      </div>
                      <div className="text-white/70 text-sm">Sarah</div>
                    </div>
                  </div>

                  {/* Strategy List */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center bg-white/5 rounded p-2">
                      <span className="text-white">Paul Champion</span>
                      <span className="text-green-400">+1,748.56%</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 rounded p-2">
                      <span className="text-white">Dan The Trader</span>
                      <span className="text-green-400">+3,280.34%</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 rounded p-2">
                      <span className="text-white">Mike Johnson</span>
                      <span className="text-green-400">+3,365.37%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-8 bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center">
              <span className="text-black font-bold text-sm">Gold</span>
            </div>

            <div className="absolute top-24 -right-12 bg-white rounded-lg p-3 shadow-lg">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face"
                    alt="Felix"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-black font-bold text-sm">Felix</div>
                <div className="text-gray-600 text-xs">Live return</div>
                <div className="text-black font-bold">4,788.68%</div>
                <button
                  className="mt-2 px-3 py-1 rounded text-white text-xs font-semibold"
                  style={{ background: "var(--text-accent-orange)" }}
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 bg-pink-200 rounded-lg p-3 shadow-lg">
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
                <span className="text-black font-semibold text-sm">
                  EUR/USD
                </span>
              </div>
            </div>

            <div className="absolute -bottom-4 right-8 bg-gray-200 rounded-lg p-3 shadow-lg">
              <div className="text-center">
                <div className="text-black font-bold text-sm">MSFT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trade with Sarthifx Nakala */}
      <section
        className="py-20 px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why trade with Sarthifx Nakala
          </h2>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Features */}
            <div className="space-y-12">
              <div className="text-center lg:text-right">
                <h3 className="text-2xl font-bold mb-4">
                  Global trading insights
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Copy strategies from experienced traders worldwide and grow
                  with shared knowledge.
                </p>
              </div>
              <div className="text-center lg:text-right">
                <h3 className="text-2xl font-bold mb-4">Trade when you want</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Trade round the clock, including holidays and weekends, with
                  our Derived Indices.
                </p>
              </div>
            </div>

            {/* Center Mobile Mockup */}
            <div className="flex justify-center">
              <div className="w-64 h-96 bg-black rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-gray-900 rounded-2xl relative overflow-hidden">
                  {/* Phone Status Bar */}
                  <div className="flex justify-between items-center p-2 text-white text-xs">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <span>📶</span>
                      <span>🔋</span>
                    </div>
                  </div>

                  {/* Trader Profile */}
                  <div className="px-4">
                    <div className="flex items-center gap-2 mb-4">
                      <button className="text-white">←</button>
                      <span className="text-white font-semibold">
                        PentagonForex
                      </span>
                    </div>

                    <div className="text-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-2"></div>
                      <button
                        className="px-4 py-1 rounded text-white text-sm"
                        style={{ background: "var(--text-accent-orange)" }}
                      >
                        Copy
                      </button>
                      <div className="text-white text-xs mt-1">
                        Fee 20% Copiers 945
                      </div>
                    </div>

                    {/* Return History Chart */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">
                        Return history
                      </h4>
                      <div className="bg-white/10 rounded-lg h-24 relative">
                        <svg className="w-full h-full" viewBox="0 0 200 100">
                          <path
                            d="M10,80 Q50,60 100,40 T190,20"
                            stroke="#00ff88"
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                        <div className="absolute bottom-1 left-2 text-white text-xs">
                          0%
                        </div>
                        <div className="absolute top-1 right-2 text-white text-xs">
                          6,000%
                        </div>
                      </div>
                    </div>

                    {/* Profitability Stats */}
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="text-white font-semibold mb-2">
                        Profitability
                      </h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <div className="text-white/70">Realised return</div>
                          <div className="text-green-400 font-bold">
                            +5,247.22%
                          </div>
                        </div>
                        <div>
                          <div className="text-white/70">Live return</div>
                          <div className="text-green-400 font-bold">
                            +5,159.83%
                          </div>
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
                <h3 className="text-2xl font-bold mb-4">Automated trading</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Let the app trade for you based on your chosen strategies.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">200+ assets</h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Get instant access to popular markets like Forex, Crypto,
                  Stocks, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 px-8">
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
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section
        className="py-20 px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Get started in 3 steps
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Happy traders using mobile app"
                className="w-full rounded-2xl"
              />

              {/* Profitability Overlay */}
              <div className="absolute bottom-4 left-4 bg-black/80 text-white rounded-lg p-4">
                <h4 className="font-semibold mb-2">Profitability</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-white/70">Realised return</div>
                    <div className="text-green-400 font-bold">+343.14</div>
                  </div>
                  <div>
                    <div className="text-white/70">Live return</div>
                    <div className="text-green-400 font-bold">+3,898.05%</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                  <div>
                    <div className="text-white/70">Unrealised P/L</div>
                    <div className="text-red-400 font-bold">-$17,720.60</div>
                  </div>
                  <div>
                    <div className="text-white/70">Realised P/L</div>
                    <div className="text-green-400 font-bold">-$17,720.60</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                  <div>
                    <div className="text-white/70">Balance</div>
                    <div className="text-white font-bold">+$19,808.09</div>
                  </div>
                  <div>
                    <div className="text-white/70">Max drawdown</div>
                    <div className="text-red-400 font-bold">-13.82%</div>
                  </div>
                </div>
                <div className="text-sm mt-2">
                  <div className="text-white/70">Leverage: 500:1</div>
                </div>
              </div>
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
                    Open a Nakala account
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    <span className="underline">Download</span> the app and sign
                    up with your Sarthifx account email.
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
                    Link your MT5 account
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Connect your Sarthifx MT5 Standard account directly in the
                    app.
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
                  <h3 className="text-2xl font-bold mb-3">Start copying</h3>
                  <p style={{ color: "var(--text-secondary)" }}>
                    Find a top-performing trader and start copying their trades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Sarthifx Nakala FAQs
          </h2>

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
                      className="text-lg mb-4"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {faq.answer}
                    </p>
                    {faq.steps && (
                      <ol
                        className="list-decimal list-inside space-y-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {faq.steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
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

export default SarthiNakalaPage;
