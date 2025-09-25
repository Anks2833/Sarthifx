import { useState } from "react";
import {
  Bot,
  TrendingUp,
  Zap,
  Play,
  Target,
  Settings,
  BarChart3,
  PieChart,
  CloudDownload,
  CloudUpload,
  Monitor,
  Blocks,
  Brain,
  HelpCircle,
  BookOpen,
  Video,
} from "lucide-react";

const SarthiBotPage = () => {
  const [hoveredStrategy, setHoveredStrategy] = useState<string | null>(null);

  const stats = [
    {
      number: "50+",
      label: "Assets to unleash your bot",
      icon: Target,
    },
    {
      number: "FREE",
      label: "Zero cost to build",
      icon: Zap,
    },
    {
      number: "6+",
      label: "Preset strategies",
      icon: Brain,
    },
  ];

  const buildSteps = [
    {
      number: "1",
      title: "Select an asset and trade type",
      description:
        "Choose from 50+ available assets and various trade types to match your strategy.",
      icon: Target,
    },
    {
      number: "2",
      title: "Set the purchase conditions",
      description:
        "Define when your bot should enter trades based on market conditions.",
      icon: Settings,
    },
    {
      number: "3",
      title: "Set the restart conditions",
      description:
        "Configure how your bot behaves after wins, losses, or specific scenarios.",
      icon: TrendingUp,
    },
    {
      number: "4",
      title: "Run the bot",
      description:
        "Start your automated trading bot and monitor its performance in real-time.",
      icon: Play,
    },
  ];

  const strategies = [
    {
      name: "Martingale",
      description:
        "Double your stake after each loss to recover previous losses with a single win.",
      riskLevel: "High",
      color: "var(--text-accent-orange)",
    },
    {
      name: "D'Alembert",
      description:
        "Gradually increase stake after losses and decrease after wins for balanced risk.",
      riskLevel: "Medium",
      color: "var(--text-accent-blue)",
    },
    {
      name: "Oscar's Grind",
      description:
        "Conservative strategy that aims for small, consistent profits over time.",
      riskLevel: "Low",
      color: "var(--border-primary)",
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
      <section className="pt-20 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div
                className="px-3 py-1 rounded-md text-sm font-bold text-white"
                style={{ background: "var(--text-accent-orange)" }}
              >
                DB
              </div>
              <span className="text-lg font-semibold">Sarthifx Bot</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Automated bot trading.{" "}
              <span style={{ color: "var(--text-accent-orange)" }}>
                No coding required.
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Automate your trades in Forex, Stock Indices, Commodities, and
              24/7 Derived Indices. Import a bot, customise a preset strategy,
              or create your own with a simple drag-and-drop interface.
            </p>

            <button
              className="px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
              style={{ background: "var(--text-accent-orange)" }}
            >
              <Play size={20} />
              Try now
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              {/* Phone mockup */}
              <div
                className="w-80 h-96 rounded-3xl p-6 shadow-2xl"
                style={{ background: "var(--bg-secondary)" }}
              >
                <div className="h-full flex flex-col">
                  {/* Phone header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium">Quick Strategy</div>
                    <Bot
                      size={20}
                      style={{ color: "var(--text-accent-blue)" }}
                    />
                  </div>

                  {/* Strategy content */}
                  <div className="space-y-4 flex-1">
                    <div
                      className="p-3 rounded-lg"
                      style={{ background: "var(--bg-accent)" }}
                    >
                      <div className="text-sm font-medium mb-1">Asset</div>
                      <div
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        EUR/CHF
                      </div>
                    </div>

                    <div
                      className="p-3 rounded-lg"
                      style={{ background: "var(--bg-accent)" }}
                    >
                      <div className="text-sm font-medium mb-1">Trade Type</div>
                      <div
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Rise/Fall
                      </div>
                    </div>

                    <div
                      className="p-3 rounded-lg"
                      style={{ background: "var(--bg-accent)" }}
                    >
                      <div className="text-sm font-medium mb-1">Strategy</div>
                      <div
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Martingale
                      </div>
                    </div>
                  </div>

                  {/* Run button */}
                  <button
                    className="w-full py-3 rounded-lg text-white font-medium"
                    style={{ background: "var(--text-accent-orange)" }}
                  >
                    Run Bot
                  </button>
                </div>
              </div>

              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: "var(--border-primary)" }}
              >
                <span className="text-black font-bold text-sm">Gold</span>
              </div>

              <div
                className="absolute -bottom-4 -left-4 w-20 h-12 rounded-lg flex items-center justify-center text-xs font-medium text-white"
                style={{ background: "var(--text-accent-blue)" }}
              >
                Wall Street
              </div>

              <div
                className="absolute top-1/4 -left-6 w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ background: "var(--text-accent-orange)" }}
              >
                <TrendingUp className="text-white" size={20} />
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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `var(--text-accent-${
                        index === 1 ? "blue" : index === 2 ? "orange" : "blue"
                      })`,
                    }}
                  >
                    <stat.icon className="text-white" size={28} />
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <p style={{ color: "var(--text-secondary)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build Steps Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                Build a trading robot in 4 easy steps
              </h2>

              <div className="space-y-6">
                {buildSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{
                        background: "var(--text-accent-orange)",
                        color: "white",
                      }}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ color: "var(--text-accent-orange)" }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ color: "var(--text-secondary)" }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div
                className="w-80 h-96 rounded-2xl p-6"
                style={{ background: "var(--bg-accent)" }}
              >
                <div className="h-full flex flex-col justify-center items-center space-y-6">
                  <Bot size={64} style={{ color: "var(--text-accent-blue)" }} />
                  <div className="text-center">
                    <div className="text-lg font-bold mb-2">Bot Builder</div>
                    <div
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Visual drag-and-drop interface
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div
                      className="h-8 rounded flex items-center justify-center text-xs"
                      style={{ background: "var(--text-accent-blue)" }}
                    >
                      Trade Parameters
                    </div>
                    <div
                      className="h-8 rounded flex items-center justify-center text-xs"
                      style={{ background: "var(--text-accent-orange)" }}
                    >
                      Logic Blocks
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Strategies Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Start with a popular strategy
              </h2>
              <p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Martingale, D'Alembert, Oscar's Grind, and more—load and
                customise proven strategies to fit your trading style.
              </p>

              <button
                className="px-8 py-4 rounded-full text-white font-semibold"
                style={{ background: "var(--text-accent-orange)" }}
              >
                Try live demo
              </button>
            </div>

            <div className="space-y-4">
              {strategies.map((strategy, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border cursor-pointer transition-all duration-300"
                  style={{
                    background:
                      hoveredStrategy === strategy.name
                        ? "var(--bg-primary)"
                        : "var(--bg-accent)",
                    borderColor:
                      hoveredStrategy === strategy.name
                        ? strategy.color
                        : "transparent",
                  }}
                  onMouseEnter={() => setHoveredStrategy(strategy.name)}
                  onMouseLeave={() => setHoveredStrategy(null)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold">{strategy.name}</h3>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: strategy.color,
                        color:
                          strategy.name === "Oscar's Grind" ? "black" : "white",
                      }}
                    >
                      {strategy.riskLevel} Risk
                    </span>
                  </div>
                  <p style={{ color: "var(--text-secondary)" }}>
                    {strategy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Import & Save Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Import and save your bots
          </h2>
          <p
            className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Upload bots from your device or Google Drive, and save your custom
            strategies for future use.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              style={{ background: "var(--text-accent-blue)" }}
            >
              <CloudUpload className="text-white" size={32} />
            </div>
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              style={{ background: "var(--text-accent-orange)" }}
            >
              <Monitor className="text-white" size={32} />
            </div>
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
              style={{ background: "var(--border-primary)" }}
            >
              <CloudDownload className="text-black" size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Builder Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Build your strategy visually
              </h2>
              <p
                className="text-lg mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                Simply drag, drop, and configure pre-built blocks and indicators
                onto a canvas to build your bot. No coding needed.
              </p>
            </div>

            <div className="flex justify-center">
              <div
                className="w-80 h-60 rounded-2xl p-6 flex items-center justify-center"
                style={{ background: "var(--bg-accent)" }}
              >
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-16 rounded-lg flex items-center justify-center"
                      style={{
                        background:
                          i % 2 === 0
                            ? "var(--text-accent-blue)"
                            : "var(--text-accent-orange)",
                      }}
                    >
                      {i % 3 === 0 ? (
                        <Blocks className="text-white" size={20} />
                      ) : i % 2 === 0 ? (
                        <Settings className="text-white" size={20} />
                      ) : (
                        <BarChart3 className="text-white" size={20} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maximize Profits Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-first">
              <div
                className="w-80 h-80 rounded-2xl flex items-center justify-center"
                style={{ background: "var(--bg-accent)" }}
              >
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-lg"
                      style={{
                        background:
                          i === 5
                            ? "var(--text-accent-orange)"
                            : i % 3 === 0
                            ? "var(--text-accent-blue)"
                            : i % 4 === 0
                            ? "var(--border-primary)"
                            : "var(--bg-secondary)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Maximise profits, limit losses
              </h2>
              <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                Use analysis tools, indicators, and smart logic such as take
                profit and stop loss to maximise your profits and limit losses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Tracking Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Track your performance
              </h2>
              <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                See how your bot is performing as it executes each trade and
                receive notifications via Telegram.
              </p>
            </div>

            <div className="flex justify-center">
              <div
                className="w-80 h-60 rounded-2xl p-6"
                style={{ background: "var(--bg-accent)" }}
              >
                <div className="h-full flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">Performance</div>
                    <PieChart
                      size={20}
                      style={{ color: "var(--text-accent-blue)" }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500">
                        $1,250
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Profit
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-500">
                        $850
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Loss
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-xs text-white">3</span>
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      Telegram notifications
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Get integrated help
              </h2>
              <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
                Access tutorials, guides, and reference information as you build
                your bot.
              </p>
            </div>

            <div className="flex justify-center">
              <div
                className="w-80 h-96 rounded-3xl p-6"
                style={{ background: "var(--bg-accent)" }}
              >
                <div className="h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-lg font-bold">Guide</div>
                    <HelpCircle
                      size={20}
                      style={{ color: "var(--text-accent-blue)" }}
                    />
                  </div>

                  <div className="space-y-4 flex-1">
                    <div
                      className="p-4 rounded-lg flex items-center gap-3"
                      style={{ background: "var(--bg-secondary)" }}
                    >
                      <BookOpen
                        size={16}
                        style={{ color: "var(--text-accent-blue)" }}
                      />
                      <div>
                        <div className="text-sm font-medium">User guide</div>
                        <div
                          className="text-xs"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Get started on Sarthifx Bot
                        </div>
                      </div>
                    </div>

                    <div
                      className="p-4 rounded-lg flex items-center gap-3"
                      style={{ background: "var(--bg-secondary)" }}
                    >
                      <Video
                        size={16}
                        style={{ color: "var(--text-accent-orange)" }}
                      />
                      <div>
                        <div className="text-sm font-medium">
                          Let's build a bot!
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Video tutorial
                        </div>
                      </div>
                    </div>

                    <div
                      className="p-4 rounded-lg flex items-center gap-3"
                      style={{ background: "var(--bg-secondary)" }}
                    >
                      <HelpCircle
                        size={16}
                        style={{ color: "var(--border-primary)" }}
                      />
                      <div>
                        <div className="text-sm font-medium">Videos</div>
                        <div
                          className="text-xs"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Sarthifx Bot — your automated trading partner
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SarthiBotPage;
