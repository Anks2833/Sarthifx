import { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Eye,
  Monitor,
  ChevronDown,
  LineChart,
  Activity,
  Zap,
  Target,
  Globe,
  Play,
} from "lucide-react";
import { FaApple, FaGooglePlay, FaWindows } from "react-icons/fa";

const TradingViewPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<Record<string, boolean>>({});

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const features = [
    {
      icon: BarChart3,
      title: "100+ indicators for detailed analysis",
      description:
        "Whether it's moving averages, volatility studies, or custom-built indicators, dig deep and craft well-informed trading strategies.",
    },
    {
      icon: Eye,
      title: "See the market your way",
      description:
        "Adapt your perspective to match your strategy. From candlesticks to Renko to Kagi, explore 17 different chart types that let you visualise the market from every angle.",
    },
    {
      icon: Zap,
      title: "Real-time synchronisation",
      description:
        "See your Sarthifx account balance, positions, and orders directly on TradingView.",
    },
  ];

  const accessSteps = [
    {
      number: "1",
      title: "Open a Sarthifx account",
      description:
        "Sign up for a Sarthifx account for free, or log in if you already have one.",
      icon: Target,
    },
    {
      number: "2",
      title: "Get a Sarthifx X account",
      description: "Open a Sarthifx X account in the Trader's Hub.",
      icon: Activity,
    },
    {
      number: "3",
      title: "Load TradingView charts",
      description:
        "In the Tools menu, click TradingView to load the charts into your workspace.",
      icon: LineChart,
    },
    {
      number: "4",
      title: "Start trading",
      description: "Choose your favourite instrument and start trading.",
      icon: TrendingUp,
    },
  ];

  const faqs = [
    {
      id: "what-is",
      question: "What is TradingView?",
      answer:
        "TradingView is one of the world's leading charting and trading platforms, offering an array of technical, drawing, and analytical tools. Available on browser, desktop, and mobile apps, TradingView offers access to live data and charts, such as the BTC USD chart. On Sarthifx, you can access TradingView charts on Sarthifx X.",
    },
    {
      id: "how-to-access",
      question: "How to access TradingView charts on Sarthifx?",
      answer:
        "To access TradingView on Sarthifx, you need to have a Sarthifx X account. Once you have one, go to your Sarthifx X dashboard and look for the Tools section where you can launch TradingView charts.",
    },
    {
      id: "trading-available",
      question: "Is trading available directly on TradingView charts?",
      answer:
        "Yes, you can trade directly from TradingView charts when connected to your Sarthifx X account. This allows for seamless execution of trades while analyzing the markets.",
    },
    {
      id: "are-charts-free",
      question: "Are TradingView charts free on Sarthifx?",
      answer:
        "Yes, TradingView charts are available free of charge to all Sarthifx X account holders. You get access to professional-grade charting tools at no additional cost.",
    },
    {
      id: "mobile-available",
      question: "Can I use TradingView on mobile?",
      answer:
        "Yes, TradingView is available on mobile devices through both web browsers and dedicated mobile apps. You can access your Sarthifx X account and trade on the go.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div
                className="px-3 py-1 rounded-md text-sm font-bold text-white"
                style={{ background: "var(--text-accent-blue)" }}
              >
                TV
              </div>
              <span className="text-lg font-semibold">TradingView</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Chart. Analyse.{" "}
              <span style={{ color: "var(--text-accent-orange)" }}>Trade.</span>
            </h1>

            <p
              className="text-lg sm:text-xl mb-8 leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Tailor your charts, track live prices, and make your move — all
              with the in-depth analysis that TradingView provides. Whether it's
              Forex, Stocks, or 24/7 Derived Indices, you've got the insights at
              your fingertips.
            </p>

            <motion.button
              className="px-8 py-4 rounded-full text-white font-semibold text-lg flex items-center gap-2"
              style={{ background: "var(--text-accent-orange)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play size={20} />
              Try now
            </motion.button>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  <div className="text-center space-y-4">
                    <BarChart3
                      size={48}
                      style={{ color: "var(--text-accent-blue)" }}
                      className="mx-auto"
                    />
                    <div className="space-y-2">
                      <div className="h-2 w-24 bg-green-500 rounded mx-auto"></div>
                      <div className="h-2 w-20 bg-red-500 rounded mx-auto"></div>
                      <div className="h-2 w-28 bg-blue-500 rounded mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -left-4 top-12 px-3 py-2 rounded-lg text-sm font-semibold"
                style={{
                  background: "var(--text-accent-blue)",
                  color: "white",
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Drawing tools
              </motion.div>

              <motion.div
                className="absolute -right-4 top-32 px-3 py-2 rounded-lg text-sm font-semibold"
                style={{
                  background: "var(--text-accent-orange)",
                  color: "white",
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                17 Chart types
              </motion.div>

              <motion.div
                className="absolute -left-6 bottom-16 px-3 py-2 rounded-lg text-sm font-semibold"
                style={{ background: "var(--border-primary)", color: "black" }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                Technical Indicators
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <section
        className="py-12 px-4 sm:px-8 text-center"
        style={{ background: "var(--bg-secondary)" }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          The charting tool millions trust
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">50M+</div>
            <p style={{ color: "var(--text-secondary)" }}>Active users</p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">100+</div>
            <p style={{ color: "var(--text-secondary)" }}>
              Technical indicators
            </p>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">24/7</div>
            <p style={{ color: "var(--text-secondary)" }}>Market access</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 mb-12"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `var(--text-accent-${
                        index % 2 === 0 ? "blue" : "orange"
                      })`,
                    }}
                  >
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p style={{ color: "var(--text-secondary)" }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div
                  className="w-64 h-96 rounded-2xl p-4"
                  style={{ background: "var(--bg-accent)" }}
                >
                  <div className="text-center space-y-6">
                    <div className="text-sm font-medium">EUR/USD</div>
                    <div className="space-y-2">
                      <div className="h-1 w-full bg-gradient-to-r from-green-500 to-red-500 rounded"></div>
                      <div className="h-1 w-3/4 bg-blue-500 rounded"></div>
                      <div className="h-1 w-1/2 bg-yellow-500 rounded"></div>
                    </div>
                    <div className="text-2xl font-bold">1.1234</div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>High: 1.1250</div>
                      <div>Low: 1.1200</div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "var(--text-accent-blue)" }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Activity className="text-white" size={24} />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Platform availability */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span style={{ color: "var(--text-secondary)" }}>
                Available on
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="flex items-center gap-2 px-6 py-3 rounded-lg border transition-colors"
                style={{
                  backgroundColor: "var(--bg-accent)",
                  borderColor: "var(--bg-secondary)",
                }}
                whileHover={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-secondary)",
                }}
              >
                <Globe size={20} />
                Web browser (Mobile & Desktop)
              </motion.button>
              <motion.button
                className="flex items-center gap-2 px-4 py-3 rounded-lg border transition-colors"
                style={{
                  backgroundColor: "var(--bg-accent)",
                  borderColor: "var(--bg-secondary)",
                }}
                whileHover={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-secondary)",
                }}
              >
                <FaApple size={20} />
                iOS
              </motion.button>
              <motion.button
                className="flex items-center gap-2 px-4 py-3 rounded-lg border transition-colors"
                style={{
                  backgroundColor: "var(--bg-accent)",
                  borderColor: "var(--bg-secondary)",
                }}
                whileHover={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-secondary)",
                }}
              >
                <FaGooglePlay size={20} />
                Android
              </motion.button>
              <motion.button
                className="flex items-center gap-2 px-4 py-3 rounded-lg border transition-colors"
                style={{
                  backgroundColor: "var(--bg-accent)",
                  borderColor: "var(--bg-secondary)",
                }}
                whileHover={{
                  backgroundColor: "var(--bg-secondary)",
                  borderColor: "var(--border-secondary)",
                }}
              >
                <FaWindows size={20} />
                Windows
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Access Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="w-full h-80 rounded-2xl flex items-center justify-center"
                style={{ background: "var(--bg-accent)" }}
              >
                <div className="text-center">
                  <Monitor
                    size={64}
                    style={{ color: "var(--text-accent-blue)" }}
                    className="mx-auto mb-4"
                  />
                  <div className="text-lg font-semibold">
                    TradingView Platform
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                How to access TradingView
              </h2>

              <div className="space-y-6">
                {accessSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{
                        background: "var(--text-accent-orange)",
                        color: "white",
                      }}
                    >
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                      <p style={{ color: "var(--text-secondary)" }}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            TradingView FAQs
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="border-b border-white/10 pb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between py-4 text-left hover:bg-white/5 transition-colors rounded-lg px-4"
                >
                  <span className="text-lg sm:text-xl font-semibold pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 transform transition-transform flex-shrink-0 ${
                      expandedFAQ[faq.id] ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFAQ[faq.id] && (
                  <motion.div
                    className="px-4 pb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TradingViewPage;
