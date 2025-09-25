import {
  ShieldCheck,
  Lock,
  TrendingUp,
  BookOpen,
  Wallet,
  Brain,
  CheckCircle2,
  Info,
  BarChart,
  FileText,
} from "lucide-react";

const SecureTrading = () => {
  const securityTips = [
    "Use strong and varied passwords. Make them as difficult as possible for anyone to guess.",
    "Use a secure web browser such as Google Chrome. Always install the latest software updates because they include security patches.",
    "Keep your login details secure and enable two-factor authentication to prevent unauthorised usage of your account.",
    "Use antivirus and firewalls to further secure your devices.",
  ];

  const responsibleTradingCards = [
    {
      title:
        "Understand the risks of online trading. Never trade using borrowed money or money you can't afford to lose.",
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
    },
    {
      title:
        "Use our free demo account, and trade with unlimited virtual funds. It's the easiest way to learn how to use our products.",
      icon: <BookOpen className="w-8 h-8 text-orange-500" />,
    },
    {
      title:
        "Set a limit for your losses, and stick to it. Put aside some of your winnings to avoid losing all your money.",
      icon: <Wallet className="w-8 h-8 text-orange-500" />,
    },
    {
      title:
        "Trade wisely, and don't let your emotions influence your decisions. Don't trade when you're prone to bad judgement.",
      icon: <Brain className="w-8 h-8 text-orange-500" />,
    },
  ];

  const tradingLimitsFeatures = [
    "Limit the amount of money you may trade within a specified period.",
    "Limit the losses you may incur within a specified period.",
    "Limit the amount of time you may trade in a session.",
    "Exclude yourself from trading on our website for a definite or indefinite period.",
  ];

  const fairTradingCommitments = [
    "Complying with international regulations",
    "Conducting regular internal audits",
    "Enforcing risk management protocols",
  ];

  const transparencyCommitments = [
    "Providing real-time data",
    "Offering detailed reports",
    "Delivering clear information on fees and risks",
  ];

  return (
    <div
      className="pt-20"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Hero Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 text-center max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Secure and Responsible Trading
        </h1>
        <p
          className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Trading online can be exciting, but it’s important to remember that
          risks are involved. Secure your accounts and trade responsibly to
          experience the best in online trading.
        </p>
      </section>

      {/* Securing Your Account Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Securing Your Account
            </h2>
            <div className="space-y-6">
              {securityTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <p
                    style={{ color: "var(--text-secondary)" }}
                    className="leading-relaxed"
                  >
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-2xl shadow-xl bg-[var(--bg-accent)] p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Two-Factor Authentication</h3>
                <Lock className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-sm mb-4 text-[var(--text-secondary)]">
                Protect your account with 2FA. Each time you log in, you’ll need
                your password and a code from an authenticator app.
              </p>
              <div className="flex items-center gap-2 bg-red-500/20 rounded-lg p-3">
                <Info className="text-red-500 w-5 h-5" />
                <span className="text-xs text-red-400">
                  Scan the QR code below with Authy or Google Authenticator.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Responsibly Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Trading Responsibly
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {responsibleTradingCards.map((card, index) => (
              <div
                key={index}
                className="p-6 bg-[var(--bg-secondary)] rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">{card.icon}</div>
                <p
                  style={{ color: "var(--text-secondary)" }}
                  className="text-sm leading-relaxed text-center"
                >
                  {card.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Limits and Self-Exclusion Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Trading Limits & Self-Exclusion
            </h2>
            <p
              className="text-base sm:text-lg mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              Sarthifx lets you set personal limits or self-exclude directly in
              your account settings. You can:
            </p>
            <div className="space-y-4">
              {tradingLimitsFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mt-1" />
                  <p style={{ color: "var(--text-secondary)" }}>{feature}</p>
                </div>
              ))}
            </div>
            <button className="mt-8 text-blue-500 font-semibold hover:underline">
              Go to account settings →
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-2xl shadow-xl bg-[var(--bg-accent)] p-6">
              <h3 className="font-semibold mb-4">Account Limits</h3>
              <p
                className="text-xs mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                Default limits applied to your accounts.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Max. open positions</span>
                  <span>100</span>
                </div>
                <div className="flex justify-between">
                  <span>Max. cash balance</span>
                  <span>Not set</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fair Trading Practices Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-20 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Fair Trading Practices
          </h2>
          <p
            className="text-base sm:text-lg max-w-3xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            At Sarthifx, fairness and transparency guide all our trading
            practices. We are committed to providing an ethical, sustainable,
            and reliable trading environment.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Our Commitment to Fair Trading
            </h3>
            <div className="space-y-4">
              {fairTradingCommitments.map((commitment, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FileText className="w-6 h-6 text-blue-500 mt-1" />
                  <p style={{ color: "var(--text-secondary)" }}>{commitment}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Transparency in Trading</h3>
            <div className="space-y-4">
              {transparencyCommitments.map((commitment, index) => (
                <div key={index} className="flex items-start gap-3">
                  <BarChart className="w-6 h-6 text-blue-500 mt-1" />
                  <p style={{ color: "var(--text-secondary)" }}>{commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecureTrading;
