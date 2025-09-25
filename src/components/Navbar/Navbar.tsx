import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

type DropdownType =
  | "trading"
  | "platforms"
  | "learning"
  | "about"
  | "language"
  | null;

interface ChevronDownProps {
  isActive: boolean;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeMobileDropdown, setActiveMobileDropdown] =
    useState<DropdownType>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (dropdown: DropdownType) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(null);
  };

  const toggleMobileDropdown = (dropdown: DropdownType) => {
    setActiveMobileDropdown(
      activeMobileDropdown === dropdown ? null : dropdown
    );
  };

  // SVG Icons
  const ChevronDown = ({ isActive }: ChevronDownProps) => (
    <svg
      className={`w-4 h-4 transition-transform duration-300 ${
        isActive ? "transform rotate-180" : ""
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  const ExternalLink = () => (
    <svg
      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  const Globe = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
        clipRule="evenodd"
      />
    </svg>
  );

  const ArrowRight = () => (
    <svg
      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  // Menu components for desktop
  const TradingMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-4 md:px-10 py-4 z-40 transition-all duration-300 ${
        activeDropdown === "trading"
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("trading")}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="rounded-2xl shadow-xl overflow-hidden"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-primary)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 lg:p-8">
          <div>
            <div className="mb-8">
              <h3
                className="font-medium underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Trade
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink
                    to="/trade/cfds"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    CFDs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/trade/options"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Options
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h3
                className="font-medium underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Markets
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink
                    to="/markets/forex"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Forex
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/markets/derived-indices"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Derived Indices
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/markets/stocks"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Stocks
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/markets/stocks-indices"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Stock Indices
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/markets/commodities"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Commodities
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/markets/crypto"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Cryptocurrencies
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/markets/etf"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    ETFs
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="mb-8">
              <h3
                className="font-medium underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Deposits & withdrawals
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink
                    to="/payment-methods"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Payment methods
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h3
                className="font-medium underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Tools
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink
                    to="/trading-view"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    TradingView
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/mt5-signals"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    MT5 Signals
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/trading-calculator"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Trading Calculator
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/trading-central"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Trading Central
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/economic-calendar"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Economic Calendar
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h3
                className="font-medium mt-6 underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Promotions
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink
                    to="/spread-advantage-hours"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Spread Advantage Hours
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="rounded-xl flex flex-col p-6 lg:p-8"
            style={{
              backgroundColor: "var(--bg-accent)",
              border: "1px solid var(--border-secondary)",
            }}
          >
            <div>
              <h3
                className="text-lg lg:text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Sarthifx trading competitions
              </h3>
              <p
                className="mb-6 text-sm lg:text-base"
                style={{ color: "var(--text-secondary)" }}
              >
                Compete risk-free with virtual funds and stand a chance to win
                real cash prizes.
              </p>
            </div>
            <div className="mt-auto">
              <NavLink
                to="#"
                className="inline-flex items-center space-x-2 group"
                style={{ color: "var(--text-accent-blue)" }}
              >
                <span>Learn more</span>
                <ArrowRight />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Similar responsive updates for other menus...
  const PlatformsMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-4 md:px-10 py-4 z-40 transition-all duration-300 ${
        activeDropdown === "platforms"
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("platforms")}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="rounded-2xl shadow-xl overflow-hidden"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-primary)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 lg:p-8">
          <div>
            <div className="mb-8">
              <h3
                className="font-medium underline"
                style={{ color: "var(--text-secondary)" }}
              >
                CFDs trading
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink
                    to="/trading-platforms/sarthi-mt5"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Sarthifx MT5
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/trading-platforms/sarthi-x"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Sarthifx X
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h3
                className="font-medium underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Copy trading
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink
                    to="/trading-platforms/sarthi-nakala"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Sarthifx Nakala
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/trading-platforms/sarthi-ctrader"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Sarthifx cTrader
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3
                className="font-medium underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Options trading
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink
                    to="/trading-platforms/sarthi-trader"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Sarthifx Trader
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/trading-platforms/sarthi-bot"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Sarthifx Bot
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/trading-platforms/sarthi-go"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Sarthifx Go
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    to="#"
                    className="inline-flex items-center space-x-2 transition-colors duration-200 group hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span>SmartTrader</span>
                    <ExternalLink />
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
          <div
            className="rounded-xl flex flex-col p-6 lg:p-8"
            style={{
              backgroundColor: "var(--bg-accent)",
              border: "1px solid var(--border-secondary)",
            }}
          >
            <div>
              <h3
                className="text-lg lg:text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Sarthifx Trader
              </h3>
              <p
                className="mb-6 text-sm lg:text-base"
                style={{ color: "var(--text-secondary)" }}
              >
                Trade options on financial markets and 24/7 Derived Indices.
              </p>
            </div>
            <div className="mt-auto">
              <NavLink
                to="#"
                className="inline-flex items-center space-x-2 group"
                style={{ color: "var(--text-accent-blue)" }}
              >
                <span>Learn more</span>
                <ArrowRight />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LearningMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-4 md:px-10 py-4 z-40 transition-all duration-300 ${
        activeDropdown === "learning"
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("learning")}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="rounded-2xl shadow-xl overflow-hidden"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-primary)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 lg:p-8">
          <div>
            <div>
              <h3
                className="font-medium underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Learn
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink
                    to="/blog"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Sarthifx Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/glossary"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Glossary
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3
                className="font-medium underline"
                style={{ color: "var(--text-secondary)" }}
              >
                Get support
              </h3>
              <ul className="space-y-3">
                <li>
                  <NavLink
                    to="/help-centre"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Help centre
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact-us"
                    className="inline-flex items-center space-x-2 transition-colors duration-200 group hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span>Community</span>
                    <ExternalLink />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact-us"
                    className="transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Contact us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="rounded-xl flex flex-col p-6 lg:p-8"
            style={{
              backgroundColor: "var(--bg-accent)",
              border: "1px solid var(--border-secondary)",
            }}
          >
            <div>
              <h3
                className="text-lg lg:text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Sarthifx Academy
              </h3>
              <p
                className="mb-6 text-sm lg:text-base"
                style={{ color: "var(--text-secondary)" }}
              >
                Expert guides on how to become a trader
              </p>
            </div>
            <div className="mt-auto">
              <NavLink
                to="#"
                className="inline-flex items-center space-x-2 group"
                style={{ color: "var(--text-accent-blue)" }}
              >
                <span>Learn more</span>
                <ArrowRight />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-4 md:px-10 py-4 z-40 transition-all duration-300 ${
        activeDropdown === "about"
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("about")}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="rounded-2xl shadow-xl overflow-hidden"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-primary)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 lg:p-8">
          <div className="lg:col-span-1">
            <ul className="space-y-3">
              <li>
                <NavLink
                  to="/who-we-are"
                  className="transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--text-primary)" }}
                >
                  Who we are
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/why-choose-us"
                  className="transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--text-primary)" }}
                >
                  Why choose us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/secure-trading"
                  className="transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--text-primary)" }}
                >
                  Secure & responsible trading
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  className="transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--text-primary)" }}
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/newsroom"
                  className="transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--text-primary)" }}
                >
                  Newsroom
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="lg:col-span-2 rounded-xl flex flex-col p-6 lg:p-8"
            style={{
              backgroundColor: "var(--bg-accent)",
              border: "1px solid var(--border-secondary)",
            }}
          >
            <div>
              <h3
                className="text-lg lg:text-xl font-bold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Why choose us
              </h3>
              <p
                className="mb-6 text-sm lg:text-base"
                style={{ color: "var(--text-secondary)" }}
              >
                For over 25 years, Sarthifx has been a trusted partner of
                traders worldwide.
              </p>
            </div>
            <div className="mt-auto">
              <NavLink
                to="/why-choose-us"
                className="inline-flex items-center space-x-2 group"
                style={{ color: "var(--text-accent-blue)" }}
              >
                <span>Learn more</span>
                <ArrowRight />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LanguageMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-4 md:px-10 py-4 z-40 transition-all duration-300 ${
        activeDropdown === "language"
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("language")}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="rounded-2xl shadow-xl overflow-hidden"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-primary)",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 lg:p-8">
          <div className="space-y-4">
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              English
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              Português
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              Tiếng Việt
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              Türkçe
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              繁體中文
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              Deutsch
            </NavLink>
          </div>
          <div className="space-y-4">
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              Français
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              Español
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              বাংলা
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              Kiswahili
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              한국어
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              Polski
            </NavLink>
          </div>
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              العربية
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              Pусский
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              हिन्दी
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              简体中文
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              Italiano
            </NavLink>
            <NavLink
              to="#"
              className="block transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--text-primary)" }}
            >
              O'zbek
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );

  // Mobile dropdown component
  const MobileDropdownContent = ({ type }: { type: DropdownType }) => {
    const dropdownData = {
      trading: {
        sections: [
          {
            title: "Trade",
            items: ["CFDs", "Options"],
          },
          {
            title: "Markets",
            items: [
              "Forex",
              "Derived Indices",
              "Stocks",
              "Stock Indices",
              "Commodities",
              "Cryptocurrencies",
              "ETFs",
            ],
          },
          {
            title: "Deposits & withdrawals",
            items: ["Payment methods"],
          },
          {
            title: "Tools",
            items: [
              "TradingView",
              "MT5 Signals",
              "Trading Calculator",
              "Trading Central",
              "Economic Calendar",
            ],
          },
        ],
      },
      platforms: {
        sections: [
          {
            title: "CFDs trading",
            items: ["Sarthifx MT5", "Sarthifx X"],
          },
          {
            title: "Copy trading",
            items: ["Sarthifx Nakala", "Sarthifx cTrader"],
          },
          {
            title: "Options trading",
            items: [
              "Sarthifx Trader",
              "Sarthifx Bot",
              "Sarthifx Go",
              "SmartTrader",
            ],
          },
        ],
      },
      learning: {
        sections: [
          {
            title: "Learn",
            items: ["Sarthifx Academy", "Sarthifx Blog", "Glossary"],
          },
          {
            title: "Get support",
            items: ["Help centre", "Community", "Contact us"],
          },
        ],
      },
      about: {
        sections: [
          {
            title: "About us",
            items: [
              "Who we are",
              "Why choose us",
              "Regulatory information",
              "Secure & responsible trading",
              "Careers",
              "Newsroom",
            ],
          },
        ],
      },
      language: {
        sections: [
          {
            title: "Languages",
            items: [
              "English",
              "Português",
              "Tiếng Việt",
              "Türkçe",
              "繁體中文",
              "Deutsch",
              "Français",
              "Español",
              "বাংলা",
              "Kiswahili",
              "한국어",
              "Polski",
              "العربية",
              "Pусский",
              "हिन्दी",
              "简体中文",
              "Italiano",
              "O'zbek",
            ],
          },
        ],
      },
    };

    if (!type || !dropdownData[type]) return null;

    return (
      <div className="px-4 pb-4">
        {dropdownData[type].sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h4
              className="font-medium mb-3 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <NavLink
                    to="#"
                    className="block py-2 transition-colors duration-200 hover:opacity-80"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-10 ${
        isScrolled ? "py-2" : "py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className={`flex items-center space-x-2 transition-all duration-500 ${
            isScrolled && !isMobileMenuOpen
              ? "opacity-0 -translate-y-10"
              : "opacity-100 translate-y-0"
          }`}
        >
          <NavLink to="/" className="flex items-center space-x-2">
            <img
              src="/logo.jpeg"
              alt="Sarthifx-logo"
              className="w-16 h-12 md:w-20 md:h-16 rounded-xl"
            />
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden lg:block ${
            isScrolled ? "shadow-lg" : "backdrop-blur-md"
          } rounded-full px-6 py-2.5 transition-all duration-300`}
          style={{
            backgroundColor: isScrolled
              ? "var(--bg-secondary)"
              : "rgba(42, 45, 58, 0.1)",
            border: `1px solid var(--border-primary)`,
          }}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="flex items-center space-x-6">
            <li
              className="relative group"
              style={{ color: "var(--text-primary)" }}
              onMouseEnter={() => handleMouseEnter("trading")}
            >
              <NavLink to="#" className="flex items-center space-x-1.5">
                <span
                  className={`font-medium transition-colors duration-200 ${
                    activeDropdown === "trading" ? "" : "group-hover:opacity-80"
                  }`}
                  style={{
                    color:
                      activeDropdown === "trading"
                        ? "var(--text-accent-orange)"
                        : "var(--text-primary)",
                  }}
                >
                  Trading
                </span>
                <ChevronDown isActive={activeDropdown === "trading"} />
              </NavLink>
            </li>

            <li
              className="relative group"
              style={{ color: "var(--text-primary)" }}
              onMouseEnter={() => handleMouseEnter("platforms")}
            >
              <NavLink to="#" className="flex items-center space-x-1.5">
                <span
                  className={`font-medium transition-colors duration-200 ${
                    activeDropdown === "platforms"
                      ? ""
                      : "group-hover:opacity-80"
                  }`}
                  style={{
                    color:
                      activeDropdown === "platforms"
                        ? "var(--text-accent-orange)"
                        : "var(--text-primary)",
                  }}
                >
                  Platforms
                </span>
                <ChevronDown isActive={activeDropdown === "platforms"} />
              </NavLink>
            </li>

            <li
              className="relative group"
              style={{ color: "var(--text-primary)" }}
              onMouseEnter={() => handleMouseEnter("learning")}
            >
              <NavLink to="#" className="flex items-center space-x-1.5">
                <span
                  className={`font-medium transition-colors duration-200 ${
                    activeDropdown === "learning"
                      ? ""
                      : "group-hover:opacity-80"
                  }`}
                  style={{
                    color:
                      activeDropdown === "learning"
                        ? "var(--text-accent-orange)"
                        : "var(--text-primary)",
                  }}
                >
                  Learning & support
                </span>
                <ChevronDown isActive={activeDropdown === "learning"} />
              </NavLink>
            </li>

            <li
              className="relative group"
              style={{ color: "var(--text-primary)" }}
              onMouseEnter={() => handleMouseEnter("about")}
            >
              <NavLink to="#" className="flex items-center space-x-1.5">
                <span
                  className={`font-medium transition-colors duration-200 ${
                    activeDropdown === "about" ? "" : "group-hover:opacity-80"
                  }`}
                  style={{
                    color:
                      activeDropdown === "about"
                        ? "var(--text-accent-orange)"
                        : "var(--text-primary)",
                  }}
                >
                  About
                </span>
                <ChevronDown isActive={activeDropdown === "about"} />
              </NavLink>
            </li>

            {/* <li
              className="relative group"
              style={{ color: "var(--text-primary)" }}
            >
              <NavLink to="#" className="flex items-center space-x-1.5 group">
                <span className="font-medium transition-colors duration-200 group-hover:opacity-80">
                  Partners
                </span>
                <ExternalLink />
              </NavLink>
            </li> */}

            <li
              className="relative group"
              style={{ color: "var(--text-primary)" }}
              onMouseEnter={() => handleMouseEnter("language")}
            >
              <NavLink to="#" className="flex items-center space-x-1.5">
                <Globe />
                <span
                  className={`font-medium transition-colors duration-200 ${
                    activeDropdown === "language"
                      ? ""
                      : "group-hover:opacity-80"
                  }`}
                  style={{
                    color:
                      activeDropdown === "language"
                        ? "var(--text-accent-orange)"
                        : "var(--text-primary)",
                  }}
                >
                  EN
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Desktop CTAs */}
        <div
          className={`hidden lg:flex items-center space-x-4 transition-all duration-500 ${
            isScrolled
              ? "opacity-0 -translate-y-10"
              : "opacity-100 translate-y-0"
          }`}
        >
          <NavLink
            to="/login"
            className="px-6 py-2 rounded-full font-medium transition-all duration-300 hover:opacity-80"
            style={{
              border: `1px solid var(--border-primary)`,
              color: "var(--text-primary)",
            }}
          >
            Log in
          </NavLink>
          <NavLink
            to="/register"
            className="px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            style={{
              backgroundColor: "var(--text-accent-orange)",
              color: "var(--text-primary)",
            }}
          >
            Open account
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden z-50 relative"
          style={{ color: "var(--text-primary)" }}
          onClick={toggleMobileMenu}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-primary)",
        }}
      >
        <div className="max-h-[80vh] overflow-y-auto">
          <nav className="py-4">
            <ul className="space-y-1">
              <li>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--text-primary)" }}
                  onClick={() => toggleMobileDropdown("trading")}
                >
                  <span className="font-medium">Trading</span>
                  <ChevronDown isActive={activeMobileDropdown === "trading"} />
                </button>
                {activeMobileDropdown === "trading" && (
                  <MobileDropdownContent type="trading" />
                )}
              </li>

              <li>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--text-primary)" }}
                  onClick={() => toggleMobileDropdown("platforms")}
                >
                  <span className="font-medium">Platforms</span>
                  <ChevronDown
                    isActive={activeMobileDropdown === "platforms"}
                  />
                </button>
                {activeMobileDropdown === "platforms" && (
                  <MobileDropdownContent type="platforms" />
                )}
              </li>

              <li>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--text-primary)" }}
                  onClick={() => toggleMobileDropdown("learning")}
                >
                  <span className="font-medium">Learning & support</span>
                  <ChevronDown isActive={activeMobileDropdown === "learning"} />
                </button>
                {activeMobileDropdown === "learning" && (
                  <MobileDropdownContent type="learning" />
                )}
              </li>

              <li>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--text-primary)" }}
                  onClick={() => toggleMobileDropdown("about")}
                >
                  <span className="font-medium">About</span>
                  <ChevronDown isActive={activeMobileDropdown === "about"} />
                </button>
                {activeMobileDropdown === "about" && (
                  <MobileDropdownContent type="about" />
                )}
              </li>

              <li>
                <NavLink
                  to="#"
                  className="w-full flex items-center justify-between px-4 py-3 transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--text-primary)" }}
                >
                  <span className="font-medium">Partners</span>
                  <ExternalLink />
                </NavLink>
              </li>

              <li>
                <button
                  className="w-full flex items-center justify-between px-4 py-3 transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--text-primary)" }}
                  onClick={() => toggleMobileDropdown("language")}
                >
                  <div className="flex items-center space-x-2">
                    <Globe />
                    <span className="font-medium">EN</span>
                  </div>
                  <ChevronDown isActive={activeMobileDropdown === "language"} />
                </button>
                {activeMobileDropdown === "language" && (
                  <MobileDropdownContent type="language" />
                )}
              </li>
            </ul>

            {/* Mobile CTAs */}
            <div
              className="px-4 py-4 border-t"
              style={{ borderColor: "var(--border-primary)" }}
            >
              <div className="flex flex-col space-y-3">
                <NavLink
                  to="/login"
                  className="px-6 py-3 rounded-full font-medium text-center transition-all duration-300 hover:opacity-80"
                  style={{
                    border: `1px solid var(--border-primary)`,
                    color: "var(--text-primary)",
                  }}
                >
                  Log in
                </NavLink>
                <NavLink
                  to="/register"
                  className="px-6 py-3 rounded-full font-medium text-center transition-all duration-300 transform hover:scale-105"
                  style={{
                    backgroundColor: "var(--text-accent-orange)",
                    color: "var(--text-primary)",
                  }}
                >
                  Open account
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Desktop Dropdown menus */}
      <TradingMenu />
      <PlatformsMenu />
      <LearningMenu />
      <AboutMenu />
      <LanguageMenu />

      {/* Mobile menu overlay */}
      {/* {isMobileMenuOpen && (
        <div className="lg:hidden fixed z-50" onClick={toggleMobileMenu} />
      )} */}
    </header>
  );
};

export default Navbar;
