import { useState } from "react";

const PaymentMethodsPage = () => {
  const [expandedSections, setExpandedSections] = useState({
    cards: true,
    banking: false,
    mobile: false,
    wallets: false,
    crypto: false,
    onramp: false,
    voucher: false,
    p2p: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const paymentMethods = {
    cards: {
      title: "Credit & debit cards",
      description: "Make deposits via cards easily.",
      methods: [
        {
          name: "Visa",
          logo: "💳",
          currencies: "USD, EUR, GBP",
          minMaxDeposit: "10 - 5,000",
          minMaxWithdrawal: "10 - 10,000",
          depositTime: "Instant",
          withdrawalTime: "1 working day",
        },
        {
          name: "Visa Secure",
          logo: "💳",
          currencies: "USD, EUR, GBP",
          minMaxDeposit: "10 - 5,000",
          minMaxWithdrawal: "10 - 10,000",
          depositTime: "Instant",
          withdrawalTime: "1 working day",
        },
        {
          name: "Mastercard",
          logo: "💳",
          currencies: "USD, EUR, GBP",
          minMaxDeposit: "10 - 5,000",
          minMaxWithdrawal: "10 - 10,000",
          depositTime: "Instant",
          withdrawalTime: "1 working day",
        },
        {
          name: "Maestro",
          logo: "💳",
          currencies: "USD, EUR, GBP",
          minMaxDeposit: "10 - 5,000",
          minMaxWithdrawal: "Not applicable",
          depositTime: "Instant",
          withdrawalTime: "Not applicable",
        },
        {
          name: "Diners Club",
          logo: "💳",
          currencies: "USD, GBP",
          minMaxDeposit: "10 - 5,000",
          minMaxWithdrawal: "Not applicable",
          depositTime: "Instant",
          withdrawalTime: "Not applicable",
        },
        {
          name: "Discover",
          logo: "💳",
          currencies: "USD, GBP",
          minMaxDeposit: "10 - 5,000",
          minMaxWithdrawal: "Not applicable",
          depositTime: "Instant",
          withdrawalTime: "Not applicable",
        },
      ],
    },
    banking: {
      title: "Online banking",
      description: "Send and receive payments directly from your bank account.",
      methods: [
        {
          name: "Bank Transfer",
          logo: "🏦",
          currencies: "USD",
          minMaxDeposit: "10 - 1,000",
          minMaxWithdrawal: "10 - 1,000",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
        {
          name: "Wire Transfer",
          logo: "🏦",
          currencies: "USD",
          minMaxDeposit: "10 - 1,000",
          minMaxWithdrawal: "10 - 1,000",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
        {
          name: "PIX",
          logo: "🔄",
          currencies: "USD, EUR",
          minMaxDeposit: "10 - 1,000",
          minMaxWithdrawal: "10 - 800",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
        {
          name: "Help2Pay",
          logo: "💰",
          currencies: "USD",
          minMaxDeposit: "15 - 5,000",
          minMaxWithdrawal: "15 - 10,000",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
        {
          name: "ZingPay",
          logo: "⚡",
          currencies: "USD",
          minMaxDeposit: "10 - 4,000",
          minMaxWithdrawal: "10 - 4,000",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
      ],
    },
    mobile: {
      title: "Mobile Payments",
      description: "Pay on the go with your phone for instant convenience.",
      methods: [
        {
          name: "M-PESA",
          logo: "📱",
          currencies: "USD",
          minMaxDeposit: "5 - 1,000",
          minMaxWithdrawal: "5 - 1,000",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
        {
          name: "MTN",
          logo: "📱",
          currencies: "USD",
          minMaxDeposit: "5 - 150",
          minMaxWithdrawal: "5 - 750",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
        {
          name: "Vodafone",
          logo: "📱",
          currencies: "USD",
          minMaxDeposit: "5 - 1,000",
          minMaxWithdrawal: "5 - 1,000",
          depositTime: "Instant",
          withdrawalTime: "1 working day",
        },
        {
          name: "Airtel",
          logo: "📱",
          currencies: "USD",
          minMaxDeposit: "5 - 150",
          minMaxWithdrawal: "5 - 750",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
        {
          name: "Equitel",
          logo: "📱",
          currencies: "USD",
          minMaxDeposit: "5 - 150",
          minMaxWithdrawal: "5 - 150",
          depositTime: "Instant",
          withdrawalTime: "1 working day",
        },
        {
          name: "Orange",
          logo: "📱",
          currencies: "USD",
          minMaxDeposit: "5 - 150",
          minMaxWithdrawal: "5 - 750",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
      ],
    },
    wallets: {
      title: "E-wallets",
      description:
        "Benefit from quick and secure Sarthifx payments with your e-wallet.",
      methods: [
        {
          name: "Volet",
          logo: "💼",
          currencies: "USD",
          minMaxDeposit: "5 - 4,000",
          minMaxWithdrawal: "5 - 10,000",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
        {
          name: "AIRTM",
          logo: "💼",
          currencies: "USD",
          minMaxDeposit: "5 - 2,500",
          minMaxWithdrawal: "5 - 2,500",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
        {
          name: "AstroPay",
          logo: "💼",
          currencies: "USD",
          minMaxDeposit: "5 - 1,000",
          minMaxWithdrawal: "5 - 1,000",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
        {
          name: "Jetonbank",
          logo: "💼",
          currencies: "USD, GBP",
          minMaxDeposit: "5 - 1,000",
          minMaxWithdrawal: "5 - 10,000",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
        {
          name: "NETELLER",
          logo: "💼",
          currencies: "USD, EUR, GBP",
          minMaxDeposit: "10 - 10,000",
          minMaxWithdrawal: "10 - 10,000",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
        {
          name: "Skrill",
          logo: "💼",
          currencies: "USD, EUR, GBP",
          minMaxDeposit: "10 - 10,000",
          minMaxWithdrawal: "10 - 10,000",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
      ],
    },
    crypto: {
      title: "Cryptocurrencies",
      description: "Make payments with top cryptocurrencies.",
      methods: [
        {
          name: "Bitcoin",
          logo: "₿",
          currencies: "BTC",
          minMaxDeposit: "No minimum",
          minMaxWithdrawal: "0.00008938",
          depositTime: "Subject to internal checks",
          withdrawalTime: "Funds available as soon as confirmed",
        },
        {
          name: "Ethereum",
          logo: "Ξ",
          currencies: "ETH",
          minMaxDeposit: "No minimum",
          minMaxWithdrawal: "0.01235891",
          depositTime: "Subject to internal checks",
          withdrawalTime: "Funds available as soon as confirmed",
        },
        {
          name: "Litecoin",
          logo: "Ł",
          currencies: "LTC",
          minMaxDeposit: "No minimum",
          minMaxWithdrawal: "0.04790419",
          depositTime: "Subject to internal checks",
          withdrawalTime: "Funds available as soon as confirmed",
        },
        {
          name: "USD Coin",
          logo: "🪙",
          currencies: "USDC",
          minMaxDeposit: "No minimum",
          minMaxWithdrawal: "50.01",
          depositTime: "Subject to internal checks",
          withdrawalTime: "Funds available as soon as confirmed",
        },
        {
          name: "Tether ERC20",
          logo: "₮",
          currencies: "Tether ERC20 (eUSDT)",
          minMaxDeposit: "No minimum",
          minMaxWithdrawal: "49.9",
          depositTime: "Subject to internal checks",
          withdrawalTime: "Funds available as soon as confirmed",
        },
        {
          name: "Tether TRC20",
          logo: "₮",
          currencies: "Tether TRC20 (tUSDT)",
          minMaxDeposit: "50",
          minMaxWithdrawal: "24.95",
          depositTime: "Subject to internal checks",
          withdrawalTime: "Funds available as soon as confirmed",
        },
      ],
    },
    onramp: {
      title: "On-ramp / Off-ramp",
      description:
        "Send crypto directly to your Sarthifx account, get credited in fiat.",
      methods: [
        {
          name: "Coins Crypto",
          logo: "🪙",
          currencies: "USD",
          minMaxDeposit: "20 - 500",
          minMaxWithdrawal: "15 - 2,000",
          depositTime: "Instant",
          withdrawalTime: "1 working day",
        },
        {
          name: "Bitcoin Cash",
          logo: "₿",
          currencies: "USD, EUR, GBP",
          minMaxDeposit: "5 - 1,000",
          minMaxWithdrawal: "5 - 1,000",
          depositTime: "Instant",
          withdrawalTime: "1 working day",
        },
        {
          name: "Bitcoin",
          logo: "₿",
          currencies: "USD, EUR",
          minMaxDeposit: "20 - 1,000",
          minMaxWithdrawal: "20 - 1,000",
          depositTime: "Instant",
          withdrawalTime: "1 working day",
        },
        {
          name: "Dogecoin",
          logo: "🐕",
          currencies: "USD, EUR",
          minMaxDeposit: "10 - 1,000",
          minMaxWithdrawal: "10 - 1,000",
          depositTime: "Instant",
          withdrawalTime: "1 working day",
        },
        {
          name: "Ethereum",
          logo: "Ξ",
          currencies: "USD, EUR",
          minMaxDeposit: "50 - 1,000",
          minMaxWithdrawal: "50 - 1,000",
          depositTime: "Instant",
          withdrawalTime: "1 working day",
        },
        {
          name: "Litecoin",
          logo: "Ł",
          currencies: "USD, EUR",
          minMaxDeposit: "5 - 1,000",
          minMaxWithdrawal: "5 - 1,000",
          depositTime: "Instant",
          withdrawalTime: "1 working day",
        },
      ],
    },
    voucher: {
      title: "Voucher",
      description:
        "A convenient way to make payments without cards or bank accounts.",
      methods: [
        {
          name: "Cash Voucher",
          logo: "🎫",
          currencies: "USD",
          minMaxDeposit: "10 - 1,000",
          minMaxWithdrawal: "Not applicable",
          depositTime: "Instant",
          withdrawalTime: "Not applicable",
        },
        {
          name: "OXXO",
          logo: "🎫",
          currencies: "USD",
          minMaxDeposit: "10 - 100",
          minMaxWithdrawal: "Not applicable",
          depositTime: "Instant",
          withdrawalTime: "Not applicable",
        },
        {
          name: "Pago Efectivo",
          logo: "🎫",
          currencies: "USD, EUR, GBP",
          minMaxDeposit: "10 - 700",
          minMaxWithdrawal: "Not applicable",
          depositTime: "Instant",
          withdrawalTime: "Not applicable",
        },
        {
          name: "1Voucher",
          logo: "🎫",
          currencies: "USD",
          minMaxDeposit: "10 - 200",
          minMaxWithdrawal: "Not applicable",
          depositTime: "Instant",
          withdrawalTime: "Not applicable",
        },
        {
          name: "Jeton Cash",
          logo: "🎫",
          currencies: "USD, EUR",
          minMaxDeposit: "10 - 250",
          minMaxWithdrawal: "10 - 250",
          depositTime: "Instant",
          withdrawalTime: "Instant",
        },
        {
          name: "IRIS",
          logo: "🎫",
          currencies: "USD",
          minMaxDeposit: "15 - 5,000",
          minMaxWithdrawal: "Not applicable",
          depositTime: "Instant",
          withdrawalTime: "Not applicable",
        },
      ],
    },
    p2p: {
      title: "Sarthifx P2P",
      description:
        "Fund your account securely through our peer-to-peer deposit and withdrawal service.",
      methods: [
        {
          name: "Sarthifx P2P",
          logo: "🤝",
          currencies: "Your local currency",
          supportedAccounts: "Sarthifx USD account",
          dailyDepositLimits: "Up to USD 10,000+",
          dailyWithdrawalLimits: "Up to USD 10,000+",
          processingTime: "Max 1 Hour",
        },
        {
          name: "ChipPay",
          logo: "💰",
          currencies: "USD",
          supportedAccounts: "10 - 6,000",
          dailyDepositLimits: "15 - 6,000",
          dailyWithdrawalLimits: "Instant",
          processingTime: "Instant",
        },
      ],
    },
  };

  const PaymentTable = ({ methods, isP2P = false }) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-4 px-2 sm:px-4 font-semibold text-sm sm:text-base">
              Method
            </th>
            <th className="text-left py-4 px-2 sm:px-4 font-semibold text-sm sm:text-base">
              {isP2P ? "Supported Sarthifx accounts" : "Currencies"}
            </th>
            <th className="text-left py-4 px-2 sm:px-4 font-semibold text-sm sm:text-base">
              {isP2P ? "Daily deposit limits" : "Min-max deposit"}
            </th>
            <th className="text-left py-4 px-2 sm:px-4 font-semibold text-sm sm:text-base">
              {isP2P ? "Daily withdrawal limits" : "Min-max withdrawal"}
            </th>
            <th className="text-left py-4 px-2 sm:px-4 font-semibold text-sm sm:text-base">
              {isP2P ? "Processing time" : "Deposit processing time"}
            </th>
            {!isP2P && (
              <th className="text-left py-4 px-2 sm:px-4 font-semibold text-sm sm:text-base">
                Withdrawal processing time
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {methods.map((method, index) => (
            <tr
              key={index}
              className="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              <td className="py-4 px-2 sm:px-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="text-lg sm:text-xl">{method.logo}</span>
                  <span className="font-semibold text-sm sm:text-base">
                    {method.name}
                  </span>
                </div>
              </td>
              <td
                className="py-4 px-2 sm:px-4 text-xs sm:text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {isP2P ? method.supportedAccounts : method.currencies}
              </td>
              <td
                className="py-4 px-2 sm:px-4 text-xs sm:text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {isP2P ? method.dailyDepositLimits : method.minMaxDeposit}
              </td>
              <td
                className="py-4 px-2 sm:px-4 text-xs sm:text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {isP2P ? method.dailyWithdrawalLimits : method.minMaxWithdrawal}
              </td>
              <td
                className="py-4 px-2 sm:px-4 text-xs sm:text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                {isP2P ? method.processingTime : method.depositTime}
              </td>
              {!isP2P && (
                <td
                  className="py-4 px-2 sm:px-4 text-xs sm:text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {method.withdrawalTime}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div
    className="pt-20"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Payment methods
        </h1>
        <p
          className="text-lg sm:text-xl max-w-3xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          Fund your account with a variety of deposit and withdrawal options.
        </p>
      </section>

      {/* Payment Methods Sections */}
      <section className="px-4 sm:px-8 max-w-7xl mx-auto pb-16 sm:pb-20">
        {Object.entries(paymentMethods).map(([key, section]) => (
          <div key={key} className="mb-8">
            <div
              className="bg-white/5 rounded-t-2xl border-b border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
              onClick={() => toggleSection(key)}
            >
              <div className="flex items-center justify-between p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold">
                  {section.title}
                </h2>
                <svg
                  className={`w-6 h-6 transform transition-transform ${
                    expandedSections[key] ? "rotate-180" : ""
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
              </div>
            </div>

            {expandedSections[key] && (
              <div className="bg-white/5 rounded-b-2xl">
                <div className="p-4 sm:p-6 border-b border-white/10">
                  <p
                    className="text-base sm:text-lg"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {section.description}
                  </p>
                </div>
                <div className="p-4 sm:p-6">
                  <PaymentTable
                    methods={section.methods}
                    isP2P={key === "p2p"}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Sarthifx P2P Feature Section */}
      <section
        className="py-16 sm:py-20 px-4 sm:px-8"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Sarthifx peer-to-peer (Sarthifx P2P)
            </h2>
            <p
              className="text-lg sm:text-xl max-w-4xl mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              A fast and secure peer-to-peer deposit and withdrawal service.
              Easily exchange with fellow traders to move funds in and out of
              your Sarthifx account.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mobile Interface Mockup */}
            <div className="flex justify-center">
              <div className="w-80 h-[600px] bg-black rounded-3xl p-4 shadow-2xl">
                <div className="bg-gray-900 rounded-2xl h-full p-4 flex flex-col">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-4 text-white text-sm">
                    <span>9:41</span>
                    <span>📶 📶 📶 🔋</span>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-white">🇺🇸 10,000.00 USD</span>
                  </div>

                  {/* Buy/Sell Tabs */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="text-center py-2 text-white border-b-2 border-white">
                      Buy
                    </div>
                    <div className="text-center py-2 text-gray-400">Sell</div>
                  </div>

                  {/* Trader Cards */}
                  <div className="space-y-3 flex-1">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                        <span className="text-white text-sm">
                          Kathryn Murphy
                        </span>
                        <span className="bg-green-500 text-black text-xs px-2 py-1 rounded">
                          99%
                        </span>
                      </div>
                      <div className="text-white text-lg font-bold">
                        14,328.7854 IDR
                      </div>
                      <div className="text-gray-400 text-xs">
                        Limit: 151K - 200K IDR
                      </div>
                      <button className="bg-red-500 text-white px-4 py-1 rounded mt-2 text-sm">
                        Sell USD
                      </button>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                        <span className="text-white text-sm">
                          Albert Flores
                        </span>
                        <span className="bg-green-500 text-black text-xs px-2 py-1 rounded">
                          98%
                        </span>
                      </div>
                      <div className="text-white text-lg font-bold">
                        14,329.9765 IDR
                      </div>
                      <div className="text-gray-400 text-xs">
                        Limit: 151K - 400K IDR
                      </div>
                      <button className="bg-red-500 text-white px-4 py-1 rounded mt-2 text-sm">
                        Sell USD
                      </button>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                        <span className="text-white text-sm">
                          Cameron Williamson
                        </span>
                        <span className="bg-green-500 text-black text-xs px-2 py-1 rounded">
                          95%
                        </span>
                      </div>
                      <div className="text-white text-lg font-bold">
                        14,330.8956 IDR
                      </div>
                      <div className="text-gray-400 text-xs">
                        Limit: 151K - 500K IDR
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Choose the best rates
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Exchange your local currency at your preferred rate.
                </p>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Make speedy deposits and withdrawals
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  On Sarthifx P2P, all exchanges are completed within 2 hours.
                </p>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Get our help
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Our support team is always ready to help resolve any disputes.
                </p>
              </div>

              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Exchange with trusted traders
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Traders are rated based on their completion rate and speed of
                  exchanges.
                </p>
              </div>

              <div className="text-center sm:text-left sm:col-span-2">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  Communicate in real-time
                </h3>
                <p style={{ color: "var(--text-secondary)" }}>
                  Chat in-app with your chosen trader for faster exchanges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentMethodsPage;
