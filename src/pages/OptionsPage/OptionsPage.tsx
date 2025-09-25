import {
  TrendingUp,
  Zap,
  CheckCircle,
  BarChart3,
  XCircle,
  Smartphone,
  DollarSign,
  Wallet,
} from "lucide-react";


const OptionsPage = () => {
  const optionTypes = [
    {
      icon: <TrendingUp size={28} />, // ↕ Digital Options
      title: "Digital Options",
      description:
        "Predict the outcome and earn a fixed payout if your prediction is correct.",
      link: "Learn more",
    },
    {
      icon: <Zap size={28} />, // ⚡ Accumulators
      title: "Accumulators",
      description:
        "Amplify potential profits with up to 5% compounding growth per tick.",
      link: "Learn more",
    },
    {
      icon: <CheckCircle size={28} />, // ✓ Vanillas
      title: "Vanillas",
      description:
        "Earn a high payout if your predictions are correct within the contract period.",
      link: "Learn more",
    },
    {
      icon: <BarChart3 size={28} />, // 📊 Turbos
      title: "Turbos",
      description:
        "Earn a payout if your prediction is accurate and the price stays within the set barrier.",
      link: "Learn more",
    },
    {
      icon: <XCircle size={28} />, // ✕ Multipliers
      title: "Multipliers",
      description:
        "Multiply your potential profit by up to 4,000x if the market moves in your favour.",
      link: "Learn more",
    },
  ];

  const benefits = [
    {
      icon: <Smartphone size={32} />, // 📱
      title: "Diverse contract types",
      description:
        "Pick from various contract types and durations to match your trading strategy.",
    },
    {
      icon: <DollarSign size={32} />, // 💲
      title: "Low cost to entry",
      description:
        "Start trading with as little as USD 1, and a minimum of USD 5 in your account.",
    },
    {
      icon: <Wallet size={32} />, // 💰
      title: "Flexible payouts",
      description: "Opt for fixed payouts or maximise with variable payouts.",
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
      <section className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              80+ assets to trade Options
            </h1>
            <p
              className="text-lg sm:text-xl mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Options contracts let you speculate on market movements across
              Forex, Stock Indices, Commodities, our exclusive Derived Indices,
              and more. Choose how you want to trade — whether predicting price
              direction or range — with your potential returns and risk clearly
              defined upfront.
            </p>

            <div className="flex gap-4 mb-8">
              <button
                className="px-6 sm:px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
                style={{ background: "var(--text-accent-orange)" }}
              >
                Try free demo
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
                    <span>9:41</span>
                    <span>📶 📶 📶 🔋</span>
                  </div>

                  {/* EUR/GBP Header */}
                  <div className="bg-gray-800 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white font-semibold text-sm">
                        ← EUR/GBP
                      </span>
                      <span className="text-green-400 text-xs">Rise</span>
                    </div>
                    <div className="text-white text-lg font-bold">0.85834</div>

                    {/* Mini Chart */}
                    <div className="h-20 bg-gradient-to-r from-red-600 to-green-600 rounded-lg mt-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute bottom-2 left-2 text-white text-xs">
                        Price change
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Option Cards */}
              <div className="absolute -left-4 sm:-left-8 top-16 sm:top-20 bg-yellow-400 text-black rounded-lg p-2 sm:p-3 shadow-lg max-w-[100px] sm:max-w-none">
                <div className="text-xs sm:text-sm font-semibold">📈</div>
                <div className="text-xs sm:text-sm font-bold">
                  Turbo Options
                </div>
              </div>

              <div className="absolute -right-4 sm:-right-8 top-32 sm:top-40 bg-green-500 text-white rounded-lg p-2 sm:p-3 shadow-lg max-w-[100px] sm:max-w-none">
                <div className="text-xs sm:text-sm font-semibold">📊</div>
                <div className="text-xs sm:text-sm font-bold">
                  Vanilla Options
                </div>
              </div>

              <div className="absolute -left-6 sm:-left-8 bottom-20 sm:bottom-24 bg-blue-500 text-white rounded-lg p-2 sm:p-3 shadow-lg max-w-[100px] sm:max-w-none">
                <div className="text-xs sm:text-sm font-semibold">✕</div>
                <div className="text-xs sm:text-sm font-bold">Multipliers</div>
              </div>

              <div className="absolute -right-6 sm:-right-8 bottom-32 sm:bottom-36 bg-purple-500 text-white rounded-lg p-2 sm:p-3 shadow-lg max-w-[100px] sm:max-w-none">
                <div className="text-xs sm:text-sm font-semibold">⚙️</div>
                <div className="text-xs sm:text-sm font-bold">
                  Digital Options
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trade Options Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">
            Why trade Options on Sarthifx
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl">
                  {benefit.icon}
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

      {/* What is Options Trading Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">
            What is Options trading?
          </h2>

          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg lg:text-xl leading-relaxed max-w-5xl mx-auto">
            <p style={{ color: "var(--text-secondary)" }}>
              Options allow you to trade contracts based on your market
              predictions. Decide how to trade — whether on price direction or
              ranges — and customise your conditions. Each contract is built
              with clear parameters: prediction type, timeframe, and trade
              amount, with risk always capped at what you choose to trade.
            </p>

            <p style={{ color: "var(--text-secondary)" }}>
              Digital Options let you trade price movements, Accumulators
              compound within ranges, Vanilla Options let you trade with fixed
              expiry times, Turbo Options enable quick positions, and
              Multipliers provide amplified exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Options Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">
            Types of Options
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {optionTypes.map((option, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-colors group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    {option.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base leading-relaxed mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {option.description}
                  </p>
                </div>

                <button
                  className="text-sm sm:text-base font-semibold hover:opacity-80 transition-opacity flex items-center gap-2 group-hover:gap-3 transition-all"
                  style={{
                    color:
                      index === 2
                        ? "var(--text-accent-orange)"
                        : "var(--text-accent-blue)",
                  }}
                >
                  {option.link}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OptionsPage;
