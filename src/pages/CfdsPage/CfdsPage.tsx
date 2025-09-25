const CfdsPage = () => {
  const assetClasses = [
    {
      name: "Forex",
      icon: "💱",
      spreads: "0.3",
      leverage: "1:1000",
    },
    {
      name: "Derived Indices",
      icon: "🌐",
      spreads: "0.24",
      leverage: "1:4000",
    },
    {
      name: "Stocks",
      icon: "📈",
      spreads: "0.6",
      leverage: "1:50",
    },
    {
      name: "Stock Indices",
      icon: "📊",
      spreads: "0.6",
      leverage: "1:100",
    },
    {
      name: "ETFs",
      icon: "📋",
      spreads: "1",
      leverage: "1:5",
    },
    {
      name: "Commodities",
      icon: "🏗️",
      spreads: "0.6",
      leverage: "1:500",
    },
    {
      name: "Cryptocurrencies",
      icon: "₿",
      spreads: "0.8",
      leverage: "1:100",
    },
  ];

  const benefits = [
    {
      icon: "⚡",
      title: "High leverage up to 1:1000",
      description: "Unlock bigger opportunities with smaller initial capitals.",
    },
    {
      icon: "💎",
      title: "Tight spreads from 0 pips",
      description: "Get the most value from every trade.",
    },
    {
      icon: "🔢",
      title: "Over 250 diverse instruments",
      description:
        "From 24/7 Synthetic Indices to FX, Stocks, ETFs, Gold, and Cryptocurrencies.",
    },
    {
      icon: "🛡️",
      title: "Zero-balance protection",
      description:
        "Guarantees that you'll never lose more funds than you have deposited.",
    },
    {
      icon: "🏆",
      title: "Leading platforms",
      description:
        "MetaTrader or cTrader – choose from the world's leading CFD trading platforms.",
    },
    {
      icon: "⚙️",
      title: "Multiple account types",
      description:
        "Standard, swap-free, or zero spread accounts to match your strategy.",
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
            <h1 className="text-6xl font-bold mb-6">
              Trade CFDs on global markets
            </h1>
            <p
              className="text-xl mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Manage bigger positions with less capital. Go long or short on a
              wide range of markets, from Stocks and Forex to Commodities and
              24/7 Derived Indices. Explore the possibilities with
              commission-free CFD trading on Sarthifx MT5 and Sarthifx cTrader.
            </p>

            <div className="flex gap-4 mb-8">
              <button
                className="px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                style={{ background: "var(--text-accent-orange)" }}
              >
                Try free demo
              </button>
            </div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="flex justify-center relative">
            <div className="relative">
              <div className="w-80 h-[600px] bg-black rounded-3xl p-4 shadow-2xl">
                {/* Phone Screen */}
                <div className="bg-gray-900 rounded-2xl h-full p-4 flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-4 text-white text-sm">
                    <span>9:41</span>
                    <span>📶 📶 📶 🔋</span>
                  </div>

                  {/* Trading Interface */}
                  <div className="bg-gray-800 rounded-lg p-4 mb-4">
                    <div className="text-center mb-4">
                      <div className="text-2xl font-bold text-green-400">
                        +1.45%
                      </div>
                      <div className="text-sm text-gray-400">Portfolio</div>
                    </div>

                    {/* Chart Area */}
                    <div className="h-32 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg mb-4 flex items-end justify-center">
                      <div className="text-white text-xs bg-black/50 px-2 py-1 rounded">
                        EUR/USD 📈
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-gray-700 p-2 rounded">
                        <div className="text-gray-400">Balance</div>
                        <div className="text-white font-bold">$10,450</div>
                      </div>
                      <div className="bg-gray-700 p-2 rounded">
                        <div className="text-gray-400">P&L</div>
                        <div className="text-green-400 font-bold">+$152.30</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -left-8 top-20 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-black text-sm font-semibold">
                    USD 500
                  </span>
                </div>
              </div>
              <div className="absolute -right-8 top-32 bg-white/90 backdrop-blur rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-black text-sm font-semibold">1000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trade CFDs Section */}
      <section
        className="py-20 px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Why trade CFDs on Sarthifx
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-2xl flex items-center justify-center text-3xl">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asset Selection Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Trade smarter with Sarthifx's hand-picked asset selection
            </h2>
            <p className="text-xl" style={{ color: "var(--text-secondary)" }}>
              Top FX pairs, leading Stocks, ETFs, Cryptocurrencies, Gold, and
              other precious metals, plus Derived Indices that are available
              24/7 and only on Sarthifx.
            </p>
          </div>

          {/* Asset Table */}
          <div className="bg-white/5 rounded-2xl overflow-hidden">
            <div className="bg-white/10 px-8 py-6">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-xl font-bold">Asset Class</div>
                <div className="text-xl font-bold text-center">
                  Spreads from (pips)
                </div>
                <div className="text-xl font-bold text-center">
                  Max leverage
                </div>
              </div>
            </div>

            {assetClasses.map((asset, index) => (
              <div
                key={index}
                className="border-t border-white/10 px-8 py-6 hover:bg-white/5 transition-colors"
              >
                <div className="grid grid-cols-3 gap-8 items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{asset.icon}</span>
                    <span className="text-lg font-semibold">{asset.name}</span>
                  </div>
                  <div className="text-center text-lg">{asset.spreads}</div>
                  <div className="text-center text-lg font-semibold">
                    {asset.leverage}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              className="px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "var(--text-accent-orange)" }}
            >
              Check trading specs
            </button>
          </div>
        </div>
      </section>

      {/* Platform Selection Section */}
      <section
        className="py-20 px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Friendly platforms for serious traders
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Sarthifx MT5 */}
            <div className="bg-white/5 rounded-3xl p-8 hover:bg-white/10 transition-colors">
              <div className="mb-8">
                <div className="h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-6 flex items-center justify-center">
                  <div className="w-64 h-52 bg-black rounded-2xl p-4">
                    {/* Mobile MT5 Interface */}
                    <div className="bg-blue-900 h-full rounded-lg p-3">
                      <div className="text-white text-xs mb-2">MT5</div>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between text-white">
                          <span>EURUSD</span>
                          <span className="text-red-400">1.0865</span>
                        </div>
                        <div className="flex justify-between text-white">
                          <span>GBPUSD</span>
                          <span className="text-blue-400">1.2492</span>
                        </div>
                        <div className="flex justify-between text-white">
                          <span>USDJPY</span>
                          <span className="text-green-400">151.92</span>
                        </div>
                        <div className="h-16 bg-gradient-to-r from-red-500 to-green-500 rounded mt-2">
                          {/* Chart representation */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-bold">
                  MT5
                </div>
                <span className="text-2xl font-bold">Sarthifx MT5</span>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                The CFD trading platform of choice
              </h3>
              <p
                className="text-lg mb-6 leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Sarthifx MT5 offers a comprehensive trading environment,
                equipped with intuitive charts, 21 timeframes, and 38 advanced
                indicators for in-depth price analysis. Plus, the MT5 community
                provides a network of support for traders of all levels to share
                insights and strategies.
              </p>

              <button className="px-6 py-3 border-2 border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition-colors">
                Learn more
              </button>
            </div>

            {/* Sarthifx cTrader */}
            <div className="bg-white/5 rounded-3xl p-8 hover:bg-white/10 transition-colors">
              <div className="mb-8">
                <div className="h-80 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-2xl p-6 flex items-center justify-center">
                  <div className="w-64 h-52 bg-white rounded-2xl p-4">
                    {/* Mobile cTrader Interface */}
                    <div className="h-full">
                      <div className="text-black text-xs mb-2 flex items-center gap-2">
                        <span>GBP/USD</span>
                        <span className="text-green-600">+0.37%</span>
                      </div>
                      <div className="h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded mb-2">
                        {/* Chart representation */}
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-green-500 text-white text-xs p-2 rounded text-center">
                          BUY
                          <br />
                          1.2565
                        </div>
                        <div className="bg-red-500 text-white text-xs p-2 rounded text-center">
                          SELL
                          <br />
                          1.2563
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-bold">
                  CT
                </div>
                <span className="text-2xl font-bold">Sarthifx cTrader</span>
              </div>

              <h3 className="text-2xl font-bold mb-4">
                The powerful copy trading platform
              </h3>
              <p
                className="text-lg mb-6 leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Sarthifx cTrader is packed with features including in-built copy
                trading facilities, 54 timeframes, and 70 indicators for
                detailed market insights. Its intuitive interface offers a
                customisable CFD trading environment with easy access to
                multiple chart types and quick trade execution.
              </p>

              <button className="px-6 py-3 border-2 border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CfdsPage;
