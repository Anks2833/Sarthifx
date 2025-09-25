import { useState } from "react";

const Mt5SignalsPage = () => {
  const [activeTab, setActiveTab] = useState<"subscriber" | "provider">(
    "subscriber"
  );
  const [expandedFAQ, setExpandedFAQ] = useState<Record<string, boolean>>({});

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const benefits = [
    {
      icon: "⚙️",
      title: "Easy to set up – no installation required.",
      description: "Get started quickly without complex setup procedures.",
    },
    {
      icon: "💰",
      title: "Additional income stream from monthly subscriptions.",
      description:
        "Earn passive income from traders who subscribe to your signals.",
    },
    {
      icon: "⏰",
      title:
        "Save time – trades are automatically copied to your subscriber's account.",
      description:
        "Your trading decisions are instantly replicated across all subscriber accounts.",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Register as a seller",
      description:
        'Log in to your MQL5 account. In the signals page, click "Register" and follow these steps.',
      image: "register",
    },
    {
      number: 2,
      title: "Add a signal",
      description:
        'Click "Create signal" and complete the form with your Deriv MT5 account credentials.',
      image: "add-signal",
    },
    {
      number: 3,
      title: "Manage signals",
      description: 'Go to the "My Signals" section to manage your signals.',
      image: "manage",
    },
  ];

  const faqs = [
    {
      id: "earnings",
      question: "How much can I earn as an MT5 signals provider?",
      answer:
        "This depends on the subscription fee that you set and the number of subscribers you have.",
    },
    {
      id: "cost",
      question: "Is there a cost to set up a signal?",
      answer:
        "No, setting up a signal is completely free. You only need a valid MT5 account to get started.",
    },
    {
      id: "requirements",
      question: "What are the requirements to become a signals provider?",
      answer:
        "You need a valid Deriv MT5 account with a proven trading history and consistent performance.",
    },
    {
      id: "subscribers",
      question: "How do I attract subscribers to my signal?",
      answer:
        "Maintain consistent performance, provide detailed descriptions, and engage with the trading community.",
    },
    {
      id: "management",
      question: "How do I manage my subscribers?",
      answer:
        "You can view and manage all your subscribers through the MQL5 signals dashboard in your account.",
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
          Deriv MT5 signals
        </h1>
        <p
          className="text-lg sm:text-xl max-w-4xl mx-auto mb-12 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          The MT5 trading signals service allows you to subscribe and copy the
          trades of more experienced traders or provide your strategies to other
          traders for a subscription fee.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 rounded-full p-1 inline-flex">
            <button
              onClick={() => setActiveTab("subscriber")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "subscriber"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Signal subscriber
            </button>

            <button
              onClick={() => setActiveTab("provider")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === "provider"
                  ? "bg-white text-black"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Signal provider
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "subscriber" && (
          <div className="max-w-4xl mx-auto">
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Automatically copy expert trades on your Deriv MT5 account for
              free or for a fee. Once you've subscribed to a trading signal, the
              provider's deals will be automatically replicated on your Deriv
              MT5 trading account each time they place a trade.
            </p>
          </div>
        )}

        {/* Tab Content */}
        {activeTab === "provider" && (
          <div className="max-w-4xl mx-auto">
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              If you are a professional trader, share your strategies with other
              traders for free or through a subscription plan. When traders
              subscribe to your trading signal, your deals are automatically
              replicated on their accounts each time you place a trade.
            </p>
          </div>
        )}
      </section>

      {/* Benefits Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Illustration */}
              <div className="bg-white/10 rounded-2xl p-8 mb-8 lg:mb-0">
                <div className="relative">
                  {/* Computer/Chart Illustration */}
                  <div className="bg-white rounded-xl p-6 mb-4">
                    <div className="h-32 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg mb-4 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-end justify-center">
                        <div className="flex items-end space-x-1 mb-4">
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 rounded-t ${
                                i % 3 === 0
                                  ? "bg-green-500 h-8"
                                  : i % 3 === 1
                                  ? "bg-red-500 h-6"
                                  : "bg-blue-500 h-10"
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-gray-600 text-sm">
                      <span>Chart Analysis</span>
                      <span>Signal Generation</span>
                    </div>
                  </div>

                  {/* Arrow pointing to signal box */}
                  <div className="flex justify-center mb-4">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
                  </div>

                  {/* Signal box */}
                  <div className="bg-red-500 rounded-lg p-4 text-white text-center">
                    <div className="font-bold">Trading Signal</div>
                    <div className="text-sm">Auto-copied to subscribers</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                Benefits of being an MT5 trading signals provider
              </h2>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-lg">{benefit.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p style={{ color: "var(--text-secondary)" }}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Become a Provider Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            How to become a trading signals provider
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                {/* Step Interface Mockup */}
                <div className="bg-white/5 rounded-2xl p-6 mb-6 h-64 flex items-center justify-center">
                  <div className="bg-white rounded-lg p-4 w-full h-full">
                    {step.image === "register" && (
                      <div className="h-full flex flex-col">
                        <div className="bg-blue-100 p-2 rounded mb-2">
                          <div className="text-xs text-gray-700">
                            MQL5 Signals
                          </div>
                        </div>
                        <div className="flex-1 bg-gray-50 rounded p-2">
                          <div className="text-xs text-gray-600 mb-2">
                            Register as seller
                          </div>
                          <div className="space-y-1">
                            <div className="bg-white p-1 rounded text-xs">
                              Profile Setup
                            </div>
                            <div className="bg-white p-1 rounded text-xs">
                              Trading History
                            </div>
                            <div className="bg-white p-1 rounded text-xs">
                              Verification
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {step.image === "add-signal" && (
                      <div className="h-full flex flex-col">
                        <div className="bg-green-100 p-2 rounded mb-2">
                          <div className="text-xs text-gray-700">
                            Create Signal
                          </div>
                        </div>
                        <div className="flex-1 bg-gray-50 rounded p-2">
                          <div className="text-xs text-gray-600 mb-2">
                            Signal Details
                          </div>
                          <div className="space-y-1">
                            <div className="bg-white p-1 rounded text-xs">
                              Account Credentials
                            </div>
                            <div className="bg-white p-1 rounded text-xs">
                              Pricing
                            </div>
                            <div className="bg-white p-1 rounded text-xs">
                              Description
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {step.image === "manage" && (
                      <div className="h-full flex flex-col">
                        <div className="bg-purple-100 p-2 rounded mb-2">
                          <div className="text-xs text-gray-700">
                            My Signals
                          </div>
                        </div>
                        <div className="flex-1 bg-gray-50 rounded p-2">
                          <div className="text-xs text-gray-600 mb-2">
                            Management Panel
                          </div>
                          <div className="space-y-1">
                            <div className="bg-white p-1 rounded text-xs">
                              Active Signals
                            </div>
                            <div className="bg-white p-1 rounded text-xs">
                              Subscribers
                            </div>
                            <div className="bg-white p-1 rounded text-xs">
                              Performance
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className="text-2xl sm:text-3xl font-bold mb-4"
                  style={{ color: "var(--text-accent-orange)" }}
                >
                  {step.number}.
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {step.title}
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-8">
            <div className="text-blue-900 mb-4">
              <strong>Note:</strong>
            </div>
            <div className="text-blue-800 mb-4">
              When you create a signal, enter the following as your account
              server name in the <strong>Broker</strong> field of the form:
            </div>
            <div className="space-y-2 text-blue-800">
              <div>
                <strong>a.</strong>{" "}
                <span className="font-semibold">Deriv-Demo</span> if your signal
                is for demo accounts only
              </div>
              <div>
                <strong>b.</strong>{" "}
                <span className="font-semibold">DerivSVG-Server</span> or{" "}
                <span className="font-semibold">DerivSVG-Server-02</span> if
                your signal is for real accounts only. (You can find the account
                server name on your Deriv MT5 dashboard.)
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              className="px-8 py-4 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ background: "var(--text-accent-orange)" }}
            >
              Go to Deriv MT5
            </button>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16">
            MT5 Signals FAQs
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

                {expandedFAQ[faq.id] && faq.answer && (
                  <div className="px-4 pb-4">
                    <p
                      className="text-base sm:text-lg"
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

export default Mt5SignalsPage;
