import { useState } from "react";

const TradingCalculatorPage = () => {
  const [formData, setFormData] = useState({
    symbol: "",
    volume: "",
    assetPrice: "",
    contractSize: "",
    effectiveLeverage: "",
    pipSize: "",
    pointSize: "",
  });

  const [results, setResults] = useState({
    marginRequired: 0,
    tradeVolume: 0,
    pipValue: 0,
    swapChargeLong: 0,
    swapChargeShort: 0,
    swapLongRate: 0,
    swapShortRate: 0,
  });

  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({
    margin: false,
    pip: false,
    swapPoints: false,
    swapPercentage: false,
  });

  const [expandedFAQ, setExpandedFAQ] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCalculate = () => {
    // Simple calculation logic for demonstration
    const volume = parseFloat(formData.volume) || 0;
    const price = parseFloat(formData.assetPrice) || 0;
    const leverage = parseFloat(formData.effectiveLeverage) || 100;

    setResults({
      marginRequired: (volume * price * 100000) / leverage,
      tradeVolume: volume * 100000,
      pipValue: volume * 10,
      swapChargeLong: volume * 2.5,
      swapChargeShort: volume * -1.8,
      swapLongRate: 2.5,
      swapShortRate: -1.8,
    });
  };

  const handleReset = () => {
    setFormData({
      symbol: "",
      volume: "",
      assetPrice: "",
      contractSize: "",
      effectiveLeverage: "",
      pipSize: "",
      pointSize: "",
    });
    setResults({
      marginRequired: 0,
      tradeVolume: 0,
      pipValue: 0,
      swapChargeLong: 0,
      swapChargeShort: 0,
      swapLongRate: 0,
      swapShortRate: 0,
    });
  };

  const calculationSections = [
    {
      id: "margin",
      title: "Margin calculation",
      content:
        "Margin is calculated as: (Volume × Contract Size × Asset Price) ÷ Leverage. This determines the minimum amount required to open a position.",
    },
    {
      id: "pip",
      title: "Pip calculation",
      content:
        "Pip value is calculated as: (Volume × Pip Size) ÷ Exchange Rate. This shows the monetary value of each pip movement.",
    },
    {
      id: "swapPoints",
      title: "Swap calculation (In points)",
      content:
        "Swap in points is calculated based on the interest rate differential and the number of days the position is held.",
    },
    {
      id: "swapPercentage",
      title: "Swap calculation (In percentage)",
      content:
        "Swap percentage shows the annualised interest rate differential between the two currencies in a currency pair.",
    },
  ];

  const faqs = [
    {
      id: "what-is",
      question: "What is a trading calculator?",
      answer:
        "Deriv's CFDs trading calculator is a trading tool that can help traders calculate relevant data like margin required, pip value of your trades, and swap charges required to keep positions open overnight. These values can help you make more informed decisions about your trades.",
    },
    {
      id: "accuracy",
      question: "How accurate is the CFD trading calculator?",
      answer:
        "The calculator provides estimates based on current market conditions and may vary slightly from actual trading conditions due to market volatility and spread variations.",
    },
    {
      id: "margin-calc",
      question: "What is a margin calculator?",
      answer:
        "A margin calculator helps determine the required margin to open a position based on your trade size, leverage, and current asset price.",
    },
    {
      id: "pip-calc",
      question: "What is a pip calculator?",
      answer:
        "A pip calculator determines the monetary value of each pip movement in your base currency, helping you understand potential profits and losses.",
    },
    {
      id: "swap-calc",
      question: "What is a swap calculator?",
      answer:
        "A swap calculator shows the interest charges or credits applied to positions held overnight, based on the interest rate differential between currencies.",
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
          Trading calculator
        </h1>
        <p
          className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Use our margin, pip value, and swap calculator to estimate these
          values for all your CFD trades on Deriv MT5 and Deriv cTrader.
        </p>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="bg-white/5 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Calculator</h2>

            <div className="space-y-6">
              {/* Symbols Field */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Symbols <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.symbol}
                  onChange={(e) => handleInputChange("symbol", e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none"
                  placeholder="e.g., EUR/USD"
                />
                <div
                  className="grid grid-cols-2 gap-4 mt-4 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <div>Contract size = --</div>
                  <div>Pip size = --</div>
                  <div>Effective Leverage = --</div>
                  <div>Point size = --</div>
                </div>
              </div>

              {/* Volume Field */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Volume in Lots <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={formData.volume}
                  onChange={(e) => handleInputChange("volume", e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none"
                  placeholder="1.00"
                  step="0.01"
                />
              </div>

              {/* Asset Price Field */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Asset price <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  value={formData.assetPrice}
                  onChange={(e) =>
                    handleInputChange("assetPrice", e.target.value)
                  }
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:border-white/40 focus:outline-none"
                  placeholder="1.1234"
                  step="0.0001"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleReset}
                  className="flex-1 px-6 py-3 border-2 border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition-colors font-semibold"
                >
                  Reset
                </button>
                <button
                  onClick={handleCalculate}
                  className="flex-1 px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ background: "var(--text-accent-orange)" }}
                >
                  Calculate
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white/5 rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Results</h2>

            <div className="space-y-6">
              {/* Margin Required */}
              <div>
                <div
                  className="text-sm font-semibold mb-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Margin Required
                </div>
                <div className="text-2xl font-bold">
                  ${results.marginRequired.toFixed(2)}
                </div>
              </div>

              {/* Trade Volume and Pip Value */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div
                    className="text-sm font-semibold mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Trade Volume
                  </div>
                  <div className="text-xl font-bold">
                    ${results.tradeVolume.toFixed(0)}
                  </div>
                </div>
                <div>
                  <div
                    className="text-sm font-semibold mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Pip value
                  </div>
                  <div className="text-xl font-bold">
                    ${results.pipValue.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Swap Charges */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div
                    className="text-sm font-semibold mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Swap Charge Long
                  </div>
                  <div className="text-xl font-bold">
                    ${results.swapChargeLong.toFixed(2)}
                  </div>
                </div>
                <div>
                  <div
                    className="text-sm font-semibold mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Swap Charge Short
                  </div>
                  <div className="text-xl font-bold">
                    ${results.swapChargeShort.toFixed(2)}
                  </div>
                </div>
              </div>

              {/* Swap Rates */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Swap long rate = {results.swapLongRate}%
                  </div>
                </div>
                <div>
                  <div
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Swap short rate = {results.swapShortRate}%
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div
                className="space-y-2 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <div>Swap calculation type: -</div>
                <div>Three-day swap: -</div>
                <div>Weekend swaps: -</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Calculations Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            Trading calculations
          </h2>

          <div className="space-y-6">
            {calculationSections.map((section) => (
              <div
                key={section.id}
                className="bg-white/5 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg sm:text-xl font-semibold">
                    {section.title}
                  </span>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      expandedSections[section.id] ? "rotate-180" : ""
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

                {expandedSections[section.id] && (
                  <div className="px-6 pb-6 border-t border-white/10">
                    <p
                      className="text-base sm:text-lg pt-4"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            Trading calculator FAQs
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

export default TradingCalculatorPage;
