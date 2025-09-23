import { useState, useEffect, useRef } from "react";

// Type definitions
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

  // Menu components
  const TradingMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-10 py-4 z-40 transition-all duration-300 ${
        activeDropdown === "trading"
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("trading")}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-3 gap-8 p-8">
          <div>
            <div className="mb-8">
              <h3 className="text-gray-400 font-medium mb-4">Trade</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    CFDs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Options
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 font-medium mb-4">Markets</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Forex
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Derived Indices
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Stocks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Stock Indices
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Commodities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Cryptocurrencies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    ETFs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="mb-8">
              <h3 className="text-gray-400 font-medium mb-4">
                Deposits & withdrawals
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Payment methods
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 font-medium mb-4">Tools</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    TradingView
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    MT5 Signals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Trading Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Trading Central
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Economic Calendar
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl flex flex-col p-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-3">
                Sarthifx trading competitions
              </h3>
              <p className="text-white text-opacity-80 mb-6">
                Compete risk-free with virtual funds and stand a chance to win
                real cash prizes.
              </p>
            </div>
            <div className="mt-auto">
              <a
                href="#"
                className="inline-flex items-center text-white space-x-2 group"
              >
                <span>Learn more</span>
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const PlatformsMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-10 py-4 z-40 transition-all duration-300 ${
        activeDropdown === "platforms"
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("platforms")}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-3 gap-8 p-8">
          <div>
            <div className="mb-8">
              <h3 className="text-gray-400 font-medium mb-4">CFDs trading</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Sarthifx MT5
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Sarthifx X
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 font-medium mb-4">Copy trading</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Sarthifx Nakala
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Sarthifx cTrader
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-gray-400 font-medium mb-4">
                Options trading
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Sarthifx Trader
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Sarthifx Bot
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Sarthifx Go
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 text-gray-700 hover:text-red-500 transition-colors duration-200 group"
                  >
                    <span>SmartTrader</span>
                    <ExternalLink />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl flex flex-col p-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-3">
                Sarthifx Trader
              </h3>
              <p className="text-white text-opacity-80 mb-6">
                Trade options on financial markets and 24/7 Derived Indices.
              </p>
            </div>
            <div className="mt-auto">
              <a
                href="#"
                className="inline-flex items-center text-white space-x-2 group"
              >
                <span>Learn more</span>
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LearningMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-10 py-4 z-40 transition-all duration-300 ${
        activeDropdown === "learning"
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("learning")}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-3 gap-8 p-8">
          <div>
            <div>
              <h3 className="text-gray-400 font-medium mb-4">Learn</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 text-gray-700 hover:text-red-500 transition-colors duration-200 group"
                  >
                    <span>Sarthifx Academy</span>
                    <ExternalLink />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Sarthifx Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Glossary
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-gray-400 font-medium mb-4">Get support</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Help centre
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 text-gray-700 hover:text-red-500 transition-colors duration-200 group"
                  >
                    <span>Community</span>
                    <ExternalLink />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl flex flex-col p-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-3">
                Sarthifx Academy
              </h3>
              <p className="text-white text-opacity-80 mb-6">
                Expert guides on how to become a trader
              </p>
            </div>
            <div className="mt-auto">
              <a
                href="#"
                className="inline-flex items-center text-white space-x-2 group"
              >
                <span>Learn more</span>
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-10 py-4 z-40 transition-all duration-300 ${
        activeDropdown === "about"
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("about")}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-3 gap-8 p-8">
          <div>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                >
                  Who we are
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                >
                  Why choose us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                >
                  Regulatory information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                >
                  Secure & responsible trading
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-red-500 transition-colors duration-200"
                >
                  Newsroom
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 bg-gray-900 rounded-xl flex flex-col p-8">
            <div>
              <h3 className="text-white text-xl font-bold mb-3">
                Why choose us
              </h3>
              <p className="text-white text-opacity-80 mb-6">
                For over 25 years, Sarthifx has been a trusted partner of
                traders worldwide.
              </p>
            </div>
            <div className="mt-auto">
              <a
                href="#"
                className="inline-flex items-center text-white space-x-2 group"
              >
                <span>Learn more</span>
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LanguageMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-10 py-4 z-40 transition-all duration-300 ${
        activeDropdown === "language"
          ? "opacity-100"
          : "opacity-0 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("language")}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-3 gap-8 p-8">
          <div className="space-y-4">
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              English
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              Português
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              Tiếng Việt
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              Türkçe
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              繁體中文
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              Deutsch
            </a>
          </div>
          <div className="space-y-4">
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              Français
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              Español
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              বাংলা
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              Kiswahili
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              한국어
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              Polski
            </a>
          </div>
          <div className="space-y-4">
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              العربية
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              Pусский
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              हिन्दी
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              简体中文
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              Italiano
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-red-500 transition-colors duration-200"
            >
              O'zbek
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-10 ${
        isScrolled ? "py-2" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className={`flex items-center space-x-2 transition-all duration-500 ${
            isScrolled
              ? "opacity-0 -translate-y-10"
              : "opacity-100 translate-y-0"
          }`}
        >
          <div className="flex items-center space-x-2">
            <img
              src="/logo.jpeg"
              alt="Sarthifx-logo"
              className="w-20 h-16 rounded-xl"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`${
            isScrolled ? "bg-white shadow-lg" : "bg-white/10 backdrop-blur-md"
          } rounded-full px-6 py-2.5 transition-all duration-300`}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="flex items-center space-x-6">
            <li
              className={`relative group ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
              onMouseEnter={() => handleMouseEnter("trading")}
            >
              <a href="#" className="flex items-center space-x-1.5">
                <span
                  className={`font-medium transition-colors duration-200 ${
                    activeDropdown === "trading"
                      ? "text-red-500"
                      : "group-hover:text-red-400"
                  }`}
                >
                  Trading
                </span>
                <ChevronDown isActive={activeDropdown === "trading"} />
              </a>
            </li>

            <li
              className={`relative group ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
              onMouseEnter={() => handleMouseEnter("platforms")}
            >
              <a href="#" className="flex items-center space-x-1.5">
                <span
                  className={`font-medium transition-colors duration-200 ${
                    activeDropdown === "platforms"
                      ? "text-red-500"
                      : "group-hover:text-red-400"
                  }`}
                >
                  Platforms
                </span>
                <ChevronDown isActive={activeDropdown === "platforms"} />
              </a>
            </li>

            <li
              className={`relative group ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
              onMouseEnter={() => handleMouseEnter("learning")}
            >
              <a href="#" className="flex items-center space-x-1.5">
                <span
                  className={`font-medium transition-colors duration-200 ${
                    activeDropdown === "learning"
                      ? "text-red-500"
                      : "group-hover:text-red-400"
                  }`}
                >
                  Learning & support
                </span>
                <ChevronDown isActive={activeDropdown === "learning"} />
              </a>
            </li>

            <li
              className={`relative group ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
              onMouseEnter={() => handleMouseEnter("about")}
            >
              <a href="#" className="flex items-center space-x-1.5">
                <span
                  className={`font-medium transition-colors duration-200 ${
                    activeDropdown === "about"
                      ? "text-red-500"
                      : "group-hover:text-red-400"
                  }`}
                >
                  About
                </span>
                <ChevronDown isActive={activeDropdown === "about"} />
              </a>
            </li>

            <li
              className={`relative group ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <a href="#" className="flex items-center space-x-1.5 group">
                <span className="font-medium transition-colors duration-200 group-hover:text-red-400">
                  Partners
                </span>
                <ExternalLink />
              </a>
            </li>

            <li
              className={`relative group ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
              onMouseEnter={() => handleMouseEnter("language")}
            >
              <a href="#" className="flex items-center space-x-1.5">
                <Globe />
                <span
                  className={`font-medium transition-colors duration-200 ${
                    activeDropdown === "language"
                      ? "text-red-500"
                      : "group-hover:text-red-400"
                  }`}
                >
                  EN
                </span>
              </a>
            </li>
          </ul>
        </nav>

        {/* CTAs */}
        <div
          className={`flex items-center space-x-4 transition-all duration-500 ${
            isScrolled
              ? "opacity-0 -translate-y-10"
              : "opacity-100 translate-y-0"
          }`}
        >
          <a
            href="/login"
            className="border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Log in
          </a>
          <a
            href="/register"
            className="bg-red-500 text-white px-6 py-2 rounded-full font-medium hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
          >
            Open account
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menus */}
      <TradingMenu />
      <PlatformsMenu />
      <LearningMenu />
      <AboutMenu />
      <LanguageMenu />
    </header>
  );
};

export default Navbar;
