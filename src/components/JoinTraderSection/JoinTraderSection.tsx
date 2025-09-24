import { useState, useEffect } from "react";

const JoinTradersSection = () => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  const words = ["Join", "3M+", "Traders"];

  // Auto-cycle through words
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  // Mobile mockup component
  const MobileMockup = () => {
    const accounts = [
      { id: 1, type: "Standard", balance: "1000.25 USD", color: "bg-blue-500" },
      {
        id: 2,
        type: "Financial",
        balance: "120.50 USD",
        color: "bg-green-500",
      },
      {
        id: 3,
        type: "Financial STP",
        balance: "750.50 USD",
        color: "bg-purple-500",
      },
    ];

    return (
      <div
        className="relative w-64 sm:w-72 lg:w-80 h-[500px] sm:h-[550px] lg:h-[600px] rounded-[2.5rem] sm:rounded-[3rem] p-2 mx-auto"
        style={{ backgroundColor: "var(--bg-primary)" }}
      >
        {/* Screen */}
        <div
          className="w-full h-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative"
          style={{ backgroundColor: "var(--bg-secondary)" }}
        >
          {/* Status Bar */}
          <div
            className="flex justify-between items-center px-4 sm:px-6 py-2 sm:py-3"
            style={{ backgroundColor: "var(--bg-secondary)" }}
          >
            <span
              className="text-xs sm:text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              9:41
            </span>
            <div className="flex space-x-1">
              <div
                className="w-3 sm:w-4 h-1.5 sm:h-2 rounded-sm"
                style={{ backgroundColor: "var(--text-primary)" }}
              ></div>
              <div
                className="w-1 h-2 sm:h-3 rounded-full"
                style={{ backgroundColor: "var(--text-primary)" }}
              ></div>
              <div
                className="w-4 sm:w-6 h-2 sm:h-3 rounded-sm"
                style={{ backgroundColor: "var(--text-primary)" }}
              ></div>
            </div>
          </div>

          {/* Header */}
          <div
            className="px-4 sm:px-6 py-3 sm:py-4"
            style={{
              borderBottomColor: "var(--border-secondary)",
              borderBottomWidth: "1px",
            }}
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div
                  className="w-6 sm:w-8 h-6 sm:h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "var(--text-accent-orange)" }}
                >
                  <span
                    className="font-bold text-xs sm:text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    S
                  </span>
                </div>
                <h1
                  className="text-lg sm:text-2xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Hub
                </h1>
              </div>
              <div className="flex space-x-1 sm:space-x-2">
                <button
                  className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full transition-colors duration-200"
                  style={{
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border-secondary)",
                  }}
                >
                  Demo
                </button>
                <button
                  className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full transition-colors duration-200"
                  style={{
                    backgroundColor: "var(--text-accent-orange)",
                    color: "var(--text-primary)",
                  }}
                >
                  Real
                </button>
              </div>
            </div>

            {/* Total Assets */}
            <div
              className="rounded-lg p-3 sm:p-4"
              style={{ backgroundColor: "var(--bg-accent)" }}
            >
              <div className="flex justify-between items-center">
                <div>
                  <span
                    className="text-xs sm:text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Total assets
                  </span>
                  <div
                    className="text-lg sm:text-2xl font-bold flex items-center"
                    style={{ color: "var(--text-primary)" }}
                  >
                    USD 2742.43
                    <span
                      className="ml-2"
                      style={{ color: "var(--text-accent-blue)" }}
                    >
                      ↻
                    </span>
                  </div>
                </div>
                <span
                  className="text-xs sm:text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  View details →
                </span>
              </div>
            </div>
          </div>

          {/* My Trading Accounts */}
          <div className="px-4 sm:px-6 py-3 sm:py-4">
            <h3
              className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base"
              style={{ color: "var(--text-primary)" }}
            >
              My trading accounts
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {accounts.map((account) => (
                <div
                  key={account.id}
                  className="rounded-xl p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 transition-all duration-200 hover:opacity-80"
                  style={{ backgroundColor: "var(--bg-accent)" }}
                >
                  <div
                    className={`w-8 sm:w-10 h-8 sm:h-10 ${account.color} rounded-lg flex items-center justify-center`}
                  >
                    <span
                      className="font-bold text-xs sm:text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {account.type.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div
                      className="font-medium text-xs sm:text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {account.type}
                    </div>
                    <div
                      className="text-xs sm:text-sm"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {account.balance}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div
            className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 py-2 sm:py-3"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderTopColor: "var(--border-secondary)",
              borderTopWidth: "1px",
            }}
          >
            <div className="flex justify-around">
              {["Hub", "CFDs", "Options", "Wallets", "Account"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="flex flex-col items-center space-y-1 transition-all duration-200 hover:opacity-80"
                  >
                    <div
                      className={`w-4 sm:w-6 h-4 sm:h-6 rounded`}
                      style={{
                        backgroundColor:
                          index === 0
                            ? "var(--text-accent-orange)"
                            : "var(--text-secondary)",
                      }}
                    ></div>
                    <span
                      className="text-xs"
                      style={{
                        color:
                          index === 0
                            ? "var(--text-accent-orange)"
                            : "var(--text-secondary)",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `linear-gradient(135deg, var(--bg-primary), var(--bg-accent))`,
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
          {/* Left Side - Text */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="text-center lg:text-left">
              {/* Title */}
              <div className="space-y-1 sm:space-y-2">
                {words.map((word, index) => (
                  <div key={word} className="overflow-hidden">
                    <h1
                      className={`text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-black leading-none transition-all duration-500 ${
                        activeWordIndex === index
                          ? "opacity-100 scale-105"
                          : "opacity-80 scale-100"
                      }`}
                      style={{
                        color:
                          activeWordIndex === index
                            ? "var(--text-accent-orange)"
                            : "var(--text-primary)",
                        textShadow:
                          activeWordIndex === index
                            ? "0 4px 20px rgba(255, 140, 66, 0.3)"
                            : "0 2px 10px rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      {word}
                    </h1>
                  </div>
                ))}
              </div>

              {/* Subtitle */}
              <p
                className="text-lg sm:text-xl lg:text-2xl mt-6 sm:mt-8 max-w-lg mx-auto lg:mx-0 opacity-90"
                style={{ color: "var(--text-secondary)" }}
              >
                Trade with confidence on the world's leading platform
              </p>
            </div>
          </div>

          {/* Right Side - Mobile Mockup */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <MobileMockup />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <button
          className="px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 hover:scale-105"
          style={{
            backgroundColor: "var(--text-accent-orange)",
            color: "var(--text-primary)",
          }}
        >
          Open account
        </button>
      </div>
    </section>
  );
};

export default JoinTradersSection;
