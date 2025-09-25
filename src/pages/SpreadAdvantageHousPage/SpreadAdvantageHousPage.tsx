import { useState } from "react";

const SpreadAdvantageHoursPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<Record<string, boolean>>({
    "benefit-strategy": true,
  });

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const benefits = [
    {
      icon: "💰",
      title: "Lower trading costs",
      description: "Pay less per trade and keep more of every profitable move.",
    },
    {
      icon: "⚡",
      title: "Automatic access",
      description:
        "Discounts apply instantly. No extra steps or volume limits.",
    },
    {
      icon: "🌐",
      title: "Multiple markets",
      description: "Reduced spreads apply across Forex, Commodities, and more.",
    },
  ];

  const scheduleData = [
    {
      market: "Cryptocurrencies",
      instruments: "BTCUSD, ETHUSD, XRPUSD",
      time: "08:00-14:00 GMT",
      reduction: "Up to 50% spread reduction",
    },
    {
      market: "Stock Indices",
      instruments: "US SP 500, US Tech 100, Japan 225",
      time: "12:00-16:00 GMT",
      reduction: "Up to 50% spread reduction",
    },
    {
      market: "Commodities",
      instruments: "XAUUSD, XAGUSD",
      time: "08:00-12:00 GMT",
      reduction: "Up to 50% spread reduction",
    },
    {
      market: "Forex",
      instruments: "EURUSD, USDJPY, GBPUSD",
      time: "08:00-12:00 GMT",
      reduction: "Up to 40% spread reduction",
    },
    {
      market: "Commodities",
      instruments: "UK Brent Oil",
      time: "12:00-16:00 GMT",
      reduction: "Up to 20% spread reduction",
    },
  ];

  const faqs = [
    {
      id: "benefit-strategy",
      question: "How do spread advantage hours benefit my trading strategy?",
      answer:
        "Lower spreads cut your trading costs, help you reach breakeven sooner, and give your strategies – from scalping and day trading to swing trading and automation – more room to perform.",
    },
    {
      id: "automated-trading",
      question:
        "Can I use automated trading (EAs or bots) during spread advantage hours?",
      answer:
        "Yes, you can use Expert Advisors (EAs) and automated trading systems during spread advantage hours. The reduced spreads will apply automatically to all your trades.",
    },
    {
      id: "spread-consistency",
      question: "Will spread reductions always be the same?",
      answer:
        "Spread reductions may vary depending on market conditions and the specific instrument being traded. The percentages shown are maximum possible reductions.",
    },
    {
      id: "minimum-volume",
      question: "Is there a minimum trading volume requirement?",
      answer:
        "No, there is no minimum trading volume requirement to benefit from spread advantage hours. The reduced spreads apply to all eligible trades during the specified time windows.",
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
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Spread advantage hours
        </h1>
        <p
          className="text-lg sm:text-xl max-w-4xl mx-auto mb-12 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Enjoy reduced spreads up to 50% across Forex, Commodities, Crypto, and
          more during dedicated time windows on Deriv MT5.
        </p>

        <button
          className="px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
          style={{ background: "var(--text-accent-orange)" }}
        >
          Try free demo
        </button>
      </section>

      {/* Why Trade During Spread Advantage Hours */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">
            Why trade during spread advantage hours
          </h2>
          <p
            className="text-lg sm:text-xl text-center max-w-4xl mx-auto mb-16 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Whether you're scalping quick moves, day trading, or building
            longer-term positions, spread advantage hours give you the same
            market access with improved conditions and better potential profit
            margins on every trade.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center relative">
                    <span className="text-2xl sm:text-3xl">{benefit.icon}</span>
                    <div className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded"></div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {benefit.title}
                </h3>
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">
            When are these reduced spreads available
          </h2>
          <p
            className="text-lg sm:text-xl text-center max-w-4xl mx-auto mb-12 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Spread advantage hours run at set times each day. Each market has
            dedicated time windows when spreads are automatically reduced,
            giving you the opportunity to plan your trades across multiple
            markets.
          </p>

          {/* Active Period */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3">
              <span className="font-semibold">Active on:</span>
              <span className="font-bold">
                15 September – 17 October (Monday–Friday)
              </span>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="bg-white/5 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-white/10 border-b border-white/10">
                    <th className="text-left py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base">
                      Market
                    </th>
                    <th className="text-left py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base">
                      Instrument
                    </th>
                    <th className="text-left py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base">
                      Time
                    </th>
                    <th className="text-left py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base">
                      Spread reduction
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-4 sm:px-6 font-semibold text-sm sm:text-base">
                        {row.market}
                      </td>
                      <td
                        className="py-4 px-4 sm:px-6 text-xs sm:text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {row.instruments}
                      </td>
                      <td
                        className="py-4 px-4 sm:px-6 text-xs sm:text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {row.time}
                      </td>
                      <td
                        className="py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold"
                        style={{ color: "var(--text-accent-orange)" }}
                      >
                        {row.reduction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Disclaimers */}
          <div
            className="mt-8 space-y-2 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>* Available on Deriv MT5 Standard accounts.</p>
            <p>** Spread discount may vary depending on the instrument.</p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            Spread advantage hours FAQs
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

export default SpreadAdvantageHoursPage;
