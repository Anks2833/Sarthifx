import { useState } from "react";
import { MessageCircle, Phone, Search, ChevronRight } from "lucide-react"; // lucide icons

const HelpCenterPage = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [searchQuery, setSearchQuery] = useState("");

  const generalCategories = [
    {
      title: "Account",
      questions: [
        "How can I change my personal details?",
        "How can I change the currency of my account?",
        "Can I change my email address?",
      ],
    },
    {
      title: "Verification",
      questions: [
        "How do I verify my account?",
        "What documents do I need to verify my account?",
        "Can I trade without verifying my account?",
      ],
    },
    {
      title: "Trader's Hub",
      questions: [
        "What is Trader's Hub?",
        "How do I add a Sarthifx MT5 trading account on Trader's Hub?",
        "How do I add a Sarthifx X trading account on Trader's Hub?",
      ],
    },
    {
      title: "Trading",
      questions: [
        "Is it normal to see candle timing differences across trading platforms?",
        "Which instruments are affected by the candle timing difference?",
        "Does the candle timing difference affect all timeframes?",
      ],
    },
    {
      title: "Deposits and withdrawals",
      questions: [
        "What payment methods can I use for deposits and withdrawals?",
        "How long does it take for my deposits and withdrawals to be processed?",
        "What is the minimum deposit or withdrawal amount?",
      ],
    },
    {
      title: "Trading tools",
      questions: [
        "How do I calculate the margin required for a leveraged trade using the trading calculator?",
        "Where can I access Trading Central?",
        "What indicators are available for TradingView users?",
      ],
    },
    {
      title: "Security",
      questions: [
        "Do I need to verify my Sarthifx account?",
        "I lost my phone. How can I disable two-factor authentication (2FA)?",
        "How can I identify emails from impersonators of Sarthifx customer support?",
      ],
    },
    {
      title: "Fraud prevention",
      questions: [
        "What is phishing?",
        "What are some best practices to avoid being phished/scammed?",
        "What are the main causes that can compromise my account?",
      ],
    },
    {
      title: "About Sarthifx",
      questions: ["Is Sarthifx regulated?", "Where is my money held?"],
    },
  ];

  const platformCategories = [
    {
      title: "Sarthifx Copy",
      questions: [
        "How do I choose the correct Sarthifx MT5 server on Nakala?",
        "Can I link my Sarthifx MT5 demo account?",
        "What is a strategy provider on Sarthifx Copy?",
      ],
    },
    {
      title: "Sarthifx MT5",
      questions: [
        "What is Sarthifx MetaTrader 5 (Sarthifx MT5)?",
        "What are the main differences between your digital options and CFD platforms?",
        "How can I change my Sarthifx MT5 password?",
      ],
    },
    {
      title: "Sarthifx Trader",
      questions: [
        "What is Sarthifx Trader?",
        "What markets can I trade on Sarthifx Trader?",
        "What contract types do you offer on Sarthifx Trader?",
      ],
    },
    {
      title: "Sarthifx Bot",
      questions: [
        "What is Sarthifx Bot?",
        "Where do I find the blocks I need?",
        "How do I remove blocks from the workspace?",
      ],
    },
    {
      title: "Sarthifx P2P",
      questions: [
        "What is Sarthifx P2P?",
        "How secure is Sarthifx P2P?",
        "I did not receive the verification email. What should I do?",
      ],
    },
    {
      title: "Sarthifx cTrader",
      questions: [
        "What is Sarthifx cTrader?",
        "What markets can I trade on Sarthifx cTrader?",
        "How do I add a Sarthifx cTrader account?",
      ],
    },
    {
      title: "Sarthifx App",
      questions: [
        "What trade types are available on Sarthifx App?",
        "How can I place a trade on Sarthifx App?",
        "Where can I get a view of my overall open and close positions?",
      ],
    },
  ];

  const currentCategories =
    activeTab === "general" ? generalCategories : platformCategories;

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
      <section className="pt-20 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto text-center">
        <h1
          className="text-4xl sm:text-5xl font-bold mb-6"
          style={{ color: "var(--text-secondary)" }}
        >
          How can we help?
        </h1>
        <p
          className="text-lg sm:text-xl mb-10 sm:mb-12"
          style={{ color: "var(--text-secondary)" }}
        >
          Search for your answers or explore the FAQ section. You can also
          connect with us via live chat or WhatsApp.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 sm:mb-16">
          <button
            className="px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition flex items-center gap-3 shadow-lg"
            style={{ background: "var(--text-accent-orange)" }}
          >
            <MessageCircle size={20} />
            Live chat
          </button>
          <button className="px-8 py-4 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition flex items-center gap-3">
            <Phone size={20} />
            WhatsApp
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} style={{ color: "var(--text-secondary)" }} />
            </div>
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-base sm:text-lg rounded-full border border-white/20 bg-transparent focus:outline-none focus:border-white/40 transition-colors"
              style={{ color: "var(--text-primary)" }}
            />
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-6 sm:gap-10">
          <button
            onClick={() => setActiveTab("general")}
            className={`px-6 py-2 font-medium transition relative ${
              activeTab === "general"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            General
            {activeTab === "general" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("platforms")}
            className={`px-6 py-2 font-medium transition relative ${
              activeTab === "platforms"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Platforms
            {activeTab === "platforms" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
            )}
          </button>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 sm:py-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {currentCategories.map((category, index) => (
              <div
                key={index}
                className="space-y-5 bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition"
              >
                <h3 className="text-xl font-bold">{category.title}</h3>
                <div className="space-y-3">
                  {category.questions.map((question, qIndex) => (
                    <button
                      key={qIndex}
                      className="block text-left w-full hover:text-blue-400 transition-colors text-sm sm:text-base"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
                <button
                  className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  View all <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenterPage;
