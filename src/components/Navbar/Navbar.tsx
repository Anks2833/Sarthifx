import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  TrendingUp,
  Monitor,
  BookOpen,
  Info,
  Globe,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  BarChart3,
  Zap,
  DollarSign,
  Smartphone,
  Bot,
  Calculator,
  Calendar,
  CreditCard,
  Users,
  Shield,
  Award,
  Briefcase,
  MessageCircle,
  HelpCircle,
  User,
  Target,
  PieChart,
  Coins,
  Building,
  Settings,
  BookOpenText,
  Star,
} from "lucide-react";

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
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeMobileDropdown, setActiveMobileDropdown] =
    useState<DropdownType>(null);
  const timeoutRef = useRef<number | null>(null);
  const lastScrollY = useRef<number>(0);
  const scrollThreshold = 10;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      const scrollDifference = currentScrollY - lastScrollY.current;

      if (Math.abs(scrollDifference) > scrollThreshold) {
        if (scrollDifference > 0 && currentScrollY > 100) {
          setIsNavbarVisible(false);
          setActiveDropdown(null);
          setIsMobileMenuOpen(false);
        } else if (scrollDifference < 0) {
          setIsNavbarVisible(true);
        }

        lastScrollY.current = currentScrollY;
      }

      if (currentScrollY <= 50) {
        setIsNavbarVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const itemRoutes: Record<string, string> = {
    CFDs: "/trade/cfds",
    Options: "/trade/options",
    Forex: "/markets/forex",
    "Derived Indices": "/markets/derived-indices",
    Stocks: "/markets/stocks",
    "Stock Indices": "/markets/stocks-indices",
    Commodities: "/markets/commodities",
    Cryptocurrencies: "/markets/crypto",
    ETFs: "/markets/etf",
    "Payment methods": "/payment-methods",
    TradingView: "/trading-view",
    "MT5 Signals": "/mt5-signals",
    "Trading Calculator": "/trading-calculator",
    "Trading Central": "/trading-central",
    "Economic Calendar": "/economic-calendar",
    "Sarthifx MT5": "/trading-platforms/sarthi-mt5",
    "Sarthifx X": "/trading-platforms/sarthi-x",
    "Sarthifx Copy": "/trading-platforms/sarthi-nakala",
    "Sarthifx Trader": "/trading-platforms/sarthi-trader",
    "Sarthifx Bot": "/trading-platforms/sarthi-bot",
    "Sarthifx App": "/trading-platforms/sarthi-go",
    "Sarthifx Academy": "#",
    "Sarthifx Blog": "/blog",
    Glossary: "/glossary",
    "Help centre": "/help-centre",
    "Contact us": "/contact-us",
    "Who we are": "/who-we-are",
    "Why choose us": "/why-choose-us",
    "Regulatory information": "#",
    "Secure & responsible trading": "/secure-trading",
    English: "#",
    Português: "#",
    "Tiếng Việt": "#",
    Türkçe: "#",
    繁體中文: "#",
    Deutsch: "#",
    Français: "#",
    Español: "#",
    বাংলা: "#",
    Kiswahili: "#",
    한국어: "#",
    Polski: "#",
    العربية: "#",
    Pусский: "#",
    हिन्दी: "#",
    简体中文: "#",
    Italiano: "#",
    "O'zbek": "#",
  };

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

  const AnimatedChevron = ({ isActive }: ChevronDownProps) => (
    <ChevronDown
      className={`w-4 h-4 transition-all duration-300 ease-out ${
        isActive ? "transform rotate-180 text-orange-400" : ""
      }`}
    />
  );

  const AnimatedGlobe = () => (
    <Globe className="w-4 h-4 transition-all duration-300 hover:rotate-12" />
  );

  const AnimatedArrowRight = () => (
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
  );

  const menuIcons = {
    CFDs: BarChart3,
    Options: TrendingUp,
    Forex: DollarSign,
    "Derived Indices": PieChart,
    Stocks: Building,
    "Stock Indices": TrendingUp,
    Commodities: Coins,
    Cryptocurrencies: Zap,
    ETFs: Briefcase,
    "Payment methods": CreditCard,
    TradingView: Monitor,
    "MT5 Signals": Target,
    "Trading Calculator": Calculator,
    "Trading Central": BarChart3,
    "Economic Calendar": Calendar,
    "Sarthifx MT5": Monitor,
    "Sarthifx X": Zap,
    "Sarthifx Copy": Users,
    "Sarthifx Trader": User,
    "Sarthifx Bot": Bot,
    "Sarthifx App": Smartphone,
    "Sarthifx Academy": BookOpen,
    "Sarthifx Blog": BookOpenText,
    Glossary: BookOpen,
    "Help centre": HelpCircle,
    "Contact us": MessageCircle,
    "Who we are": Info,
    "Why choose us": Star,
    "Regulatory information": Shield,
    "Secure & responsible trading": Shield,
  };

  // Mobile Dropdown Content
  const MobileDropdownContent = ({ type }: { type: DropdownType }) => {
    const dropdownData = {
      trading: {
        sections: [
          {
            title: "Trade",
            icon: BarChart3,
            items: ["CFDs", "Options"],
          },
          {
            title: "Markets",
            icon: TrendingUp,
            items: ["Forex", "Derived Indices", "Stocks", "Commodities"],
          },
          {
            title: "Tools",
            icon: Settings,
            items: ["TradingView", "Trading Calculator"],
          },
        ],
      },
      platforms: {
        sections: [
          {
            title: "CFDs trading",
            icon: Monitor,
            items: ["Sarthifx MT5", "Sarthifx X"],
          },
          {
            title: "Options trading",
            icon: Zap,
            items: ["Sarthifx Trader", "Sarthifx Bot", "Sarthifx App"],
          },
        ],
      },
      learning: {
        sections: [
          {
            title: "Learn & Support",
            icon: BookOpen,
            items: ["Sarthifx Blog", "Help centre", "Contact us"],
          },
        ],
      },
      about: {
        sections: [
          {
            title: "About us",
            icon: Info,
            items: [
              "Who we are",
              "Why choose us",
              "Secure & responsible trading",
            ],
          },
        ],
      },
      language: {
        sections: [
          {
            title: "Languages",
            icon: Globe,
            items: [
              "English",
              "Português",
              "Deutsch",
              "Français",
              "Español",
              "한국어",
            ],
          },
        ],
      },
    };

    if (!type || !dropdownData[type]) return null;

    return (
      <div className="px-4 pb-4 space-y-4">
        {dropdownData[type].sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <div
              className="flex items-center gap-2 mb-2 pb-1 border-b"
              style={{ borderColor: "var(--border-primary)" }}
            >
              <section.icon
                className="w-4 h-4"
                style={{ color: "var(--text-accent-blue)" }}
              />
              <h4
                className="font-semibold text-xs"
                style={{ color: "var(--text-primary)" }}
              >
                {section.title}
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {section.items.map((item, itemIndex) => (
                <NavLink
                  key={itemIndex}
                  to={itemRoutes[item] || "#"}
                  className="flex items-center gap-1 py-2 px-2 rounded-lg transition-all duration-300 group"
                  style={{ color: "var(--text-primary)" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-xs">{item}</span>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Main Navbar */}
      <header className="w-full">
        <div className="w-full flex items-center justify-between px-4 lg:px-8 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <NavLink to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/sarthi_logo.png"
                  alt="Sarthifx-logo"
                  className="w-20 h-16 md:w-32 md:h-24 rounded-lg transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:block ${
              isScrolled ? "shadow-2xl" : "backdrop-blur-xl"
            } rounded-2xl px-6 py-2 transition-all duration-500 border relative`}
            style={{
              background: isScrolled
                ? `linear-gradient(135deg, var(--bg-secondary) 0%, rgba(30, 31, 46, 0.98) 100%)`
                : `linear-gradient(135deg, rgba(42, 45, 58, 0.1) 0%, rgba(30, 31, 46, 0.05) 100%)`,
              borderColor: "var(--border-primary)",
              backdropFilter: "blur(20px)",
            }}
            onMouseLeave={handleMouseLeave}
          >
            <ul className="flex items-center space-x-6">
              {[
                { key: "trading", icon: TrendingUp, label: "Trading" },
                { key: "platforms", icon: Monitor, label: "Platforms" },
                { key: "learning", icon: BookOpen, label: "Support" },
                { key: "about", icon: Info, label: "About" },
              ].map(({ key, icon: IconComponent, label }) => (
                <li
                  key={key}
                  className="relative group"
                  style={{ color: "var(--text-primary)" }}
                  onMouseEnter={() => handleMouseEnter(key as DropdownType)}
                >
                  <NavLink
                    to="#"
                    className="flex items-center space-x-2 py-2 px-3 rounded-xl transition-all duration-300 hover:bg-white/5"
                  >
                    <IconComponent className="w-4 h-4 transition-all duration-300 group-hover:scale-110" />
                    <span
                      className={`font-medium transition-all duration-300 text-sm ${
                        activeDropdown === key
                          ? "scale-105"
                          : "group-hover:scale-105"
                      }`}
                      style={{
                        color:
                          activeDropdown === key
                            ? "var(--text-accent-orange)"
                            : "var(--text-primary)",
                      }}
                    >
                      {label}
                    </span>
                    <AnimatedChevron isActive={activeDropdown === key} />
                  </NavLink>
                </li>
              ))}

              <li
                className="relative group"
                style={{ color: "var(--text-primary)" }}
                onMouseEnter={() => handleMouseEnter("language")}
              >
                <NavLink
                  to="#"
                  className="flex items-center space-x-2 py-2 px-3 rounded-xl transition-all duration-300 hover:bg-white/5"
                >
                  <AnimatedGlobe />
                  <span
                    className={`font-medium transition-all duration-300 text-sm ${
                      activeDropdown === "language"
                        ? "scale-105"
                        : "group-hover:scale-105"
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
          <div className="hidden lg:flex items-center space-x-3">
            <NavLink
              to="/login"
              className="px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border backdrop-blur-sm group text-sm"
              style={{
                borderColor: "var(--border-primary)",
                color: "var(--text-primary)",
                background: "rgba(255, 255, 255, 0.05)",
              }}
            >
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Log in
              </span>
            </NavLink>
            <NavLink
              to="/register"
              className="px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group text-sm"
              style={{
                background: `linear-gradient(135deg, var(--text-accent-orange) 0%, #ff6b35 100%)`,
                color: "var(--text-primary)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Open account
              </span>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden z-50 relative p-2 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10"
            style={{ color: "var(--text-primary)" }}
            onClick={toggleMobileMenu}
          >
            <div className="relative w-6 h-6">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 transition-all duration-300 rotate-90" />
              ) : (
                <Menu className="w-6 h-6 transition-all duration-300" />
              )}
            </div>
          </button>
        </div>
      </header>

      {/* Dropdown Container - Positioned directly under navbar */}
      <div className="relative w-full">
        {/* Trading Dropdown */}
        <div
          className={`absolute -top-7 left-0 w-full px-6 pb-4 z-40 transition-all duration-500 ease-out ${
            activeDropdown === "trading"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          onMouseEnter={() => handleMouseEnter("trading")}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl border"
            style={{
              background: `linear-gradient(135deg, var(--bg-secondary) 0%, rgba(30, 31, 46, 0.95) 100%)`,
              borderColor: "var(--border-primary)",
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
              {/* Trade Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--text-accent-blue)" }}
                  >
                    <BarChart3 className="w-3 h-3 text-white" />
                  </div>
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "var(--text-accent-blue)" }}
                  >
                    Trade
                  </h3>
                </div>
                <ul className="space-y-1">
                  {["CFDs", "Options"].map((item) => {
                    const IconComponent =
                      menuIcons[item as keyof typeof menuIcons];
                    return (
                      <li key={item}>
                        <NavLink
                          to={itemRoutes[item]}
                          className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 group text-sm"
                          style={{ color: "var(--text-primary)" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "var(--bg-accent)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {IconComponent && (
                            <IconComponent className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                          )}
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {item}
                          </span>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Markets Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--text-accent-orange)" }}
                  >
                    <TrendingUp className="w-3 h-3 text-white" />
                  </div>
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "var(--text-accent-orange)" }}
                  >
                    Markets
                  </h3>
                </div>
                <ul className="space-y-1">
                  {[
                    "Forex",
                    "Derived Indices",
                    "Stocks",
                    "Commodities",
                    "Cryptocurrencies",
                  ].map((item) => {
                    const IconComponent =
                      menuIcons[item as keyof typeof menuIcons];
                    return (
                      <li key={item}>
                        <NavLink
                          to={itemRoutes[item]}
                          className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 group text-sm"
                          style={{ color: "var(--text-primary)" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "var(--bg-accent)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {IconComponent && (
                            <IconComponent className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                          )}
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {item}
                          </span>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Tools Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--text-accent-blue)" }}
                  >
                    <Settings className="w-3 h-3 text-white" />
                  </div>
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "var(--text-accent-blue)" }}
                  >
                    Tools
                  </h3>
                </div>
                <ul className="space-y-1">
                  {[
                    "TradingView",
                    "Trading Calculator",
                    "Economic Calendar",
                  ].map((item) => {
                    const IconComponent =
                      menuIcons[item as keyof typeof menuIcons];
                    return (
                      <li key={item}>
                        <NavLink
                          to={itemRoutes[item]}
                          className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 group text-sm"
                          style={{ color: "var(--text-primary)" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "var(--bg-accent)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {IconComponent && (
                            <IconComponent className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                          )}
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {item}
                          </span>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Feature Card */}
              <div
                className="rounded-xl p-4 border relative overflow-hidden group"
                style={{
                  background: `linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-primary) 100%)`,
                  borderColor: "var(--border-secondary)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--text-accent-orange)" }}
                  >
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <h3
                    className="text-sm font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Trading competitions
                  </h3>
                </div>
                <p
                  className="mb-3 text-xs leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Compete risk-free with virtual funds.
                </p>
                <NavLink
                  to="#"
                  className="inline-flex items-center gap-2 group/link font-medium text-xs"
                  style={{ color: "var(--text-accent-blue)" }}
                >
                  <span>Learn more</span>
                  <AnimatedArrowRight />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Platforms Dropdown */}
        <div
          className={`absolute -top-7 left-0 w-full px-6 pb-4 z-40 transition-all duration-500 ease-out ${
            activeDropdown === "platforms"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          onMouseEnter={() => handleMouseEnter("platforms")}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden border"
            style={{
              background: `linear-gradient(135deg, var(--bg-secondary) 0%, rgba(30, 31, 46, 0.95) 100%)`,
              borderColor: "var(--border-primary)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--text-accent-blue)" }}
                  >
                    <Monitor className="w-3 h-3 text-white" />
                  </div>
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "var(--text-accent-blue)" }}
                  >
                    CFDs trading
                  </h3>
                </div>
                <ul className="space-y-1">
                  {["Sarthifx MT5", "Sarthifx X"].map((item) => {
                    const IconComponent =
                      menuIcons[item as keyof typeof menuIcons];
                    return (
                      <li key={item}>
                        <NavLink
                          to={itemRoutes[item]}
                          className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 group text-sm"
                          style={{ color: "var(--text-primary)" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "var(--bg-accent)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {IconComponent && (
                            <IconComponent className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                          )}
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {item}
                          </span>
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--text-accent-orange)" }}
                  >
                    <Users className="w-3 h-3 text-white" />
                  </div>
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "var(--text-accent-orange)" }}
                  >
                    Copy trading
                  </h3>
                </div>
                <ul className="space-y-1">
                  <li>
                    <NavLink
                      to={itemRoutes["Sarthifx Copy"]}
                      className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 group text-sm"
                      style={{ color: "var(--text-primary)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "var(--bg-accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <Users className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        Sarthifx Copy
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ background: "var(--border-primary)" }}
                  >
                    <Zap className="w-3 h-3 text-black" />
                  </div>
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "var(--border-primary)" }}
                  >
                    Options trading
                  </h3>
                </div>
                <ul className="space-y-1">
                  {["Sarthifx Trader", "Sarthifx Bot", "Sarthifx App"].map(
                    (item) => {
                      const IconComponent =
                        menuIcons[item as keyof typeof menuIcons];
                      return (
                        <li key={item}>
                          <NavLink
                            to={itemRoutes[item]}
                            className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 group text-sm"
                            style={{ color: "var(--text-primary)" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background =
                                "var(--bg-accent)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent";
                            }}
                          >
                            {IconComponent && (
                              <IconComponent className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                            )}
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                              {item}
                            </span>
                          </NavLink>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Dropdown */}
        <div
          className={`absolute -top-7 left-0 w-full px-6 pb-4 z-40 transition-all duration-500 ease-out ${
            activeDropdown === "learning"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          onMouseEnter={() => handleMouseEnter("learning")}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="max-w-3xl mx-auto rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl border"
            style={{
              background: `linear-gradient(135deg, var(--bg-secondary) 0%, rgba(30, 31, 46, 0.95) 100%)`,
              borderColor: "var(--border-primary)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen
                    className="w-4 h-4"
                    style={{ color: "var(--text-accent-blue)" }}
                  />
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "var(--text-accent-blue)" }}
                  >
                    Learn
                  </h3>
                </div>
                <ul className="space-y-1">
                  {["Sarthifx Blog", "Glossary"].map((item) => (
                    <li key={item}>
                      <NavLink
                        to={itemRoutes[item]}
                        className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 group text-sm"
                        style={{ color: "var(--text-primary)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background =
                            "var(--bg-accent)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        <BookOpenText className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {item}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <HelpCircle
                    className="w-4 h-4"
                    style={{ color: "var(--text-accent-orange)" }}
                  />
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "var(--text-accent-orange)" }}
                  >
                    Get support
                  </h3>
                </div>
                <ul className="space-y-1">
                  {["Help centre", "Contact us"].map((item) => (
                    <li key={item}>
                      <NavLink
                        to={itemRoutes[item]}
                        className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 group text-sm"
                        style={{ color: "var(--text-primary)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background =
                            "var(--bg-accent)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        {item === "Help centre" && (
                          <HelpCircle className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                        )}
                        {item === "Contact us" && (
                          <MessageCircle className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                        )}
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {item}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* About Dropdown */}
        <div
          className={`absolute -top-7 left-0 w-full px-6 pb-4 z-40 transition-all duration-500 ease-out ${
            activeDropdown === "about"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          onMouseEnter={() => handleMouseEnter("about")}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="max-w-2xl mx-auto rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl border"
            style={{
              background: `linear-gradient(135deg, var(--bg-secondary) 0%, rgba(30, 31, 46, 0.95) 100%)`,
              borderColor: "var(--border-primary)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="p-6">
              <ul className="space-y-1">
                {[
                  "Who we are",
                  "Why choose us",
                  "Secure & responsible trading",
                ].map((item) => {
                  const IconComponent =
                    menuIcons[item as keyof typeof menuIcons];
                  return (
                    <li key={item}>
                      <NavLink
                        to={itemRoutes[item]}
                        className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 group text-sm"
                        style={{ color: "var(--text-primary)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background =
                            "var(--bg-accent)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "transparent")
                        }
                      >
                        {IconComponent && (
                          <IconComponent className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                        )}
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {item}
                        </span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Language Dropdown */}
        <div
          className={`absolute -top-7 left-0 w-full px-6 pb-4 z-40 transition-all duration-500 ease-out ${
            activeDropdown === "language"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          onMouseEnter={() => handleMouseEnter("language")}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="max-w-3xl mx-auto rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl border"
            style={{
              background: `linear-gradient(135deg, var(--bg-secondary) 0%, rgba(30, 31, 46, 0.95) 100%)`,
              borderColor: "var(--border-primary)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 p-6">
              {[
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
              ].map((lang) => (
                <NavLink
                  key={lang}
                  to="#"
                  className="p-2 rounded-lg transition-all duration-300 text-center group text-sm"
                  style={{ color: "var(--text-primary)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--bg-accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span className="group-hover:font-medium transition-all duration-300">
                    {lang}
                  </span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
        style={{
          background: `linear-gradient(135deg, var(--bg-secondary) 0%, rgba(30, 31, 46, 0.98) 100%)`,
          borderColor: "var(--border-primary)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="max-h-[70vh] overflow-y-auto">
          <nav className="py-4">
            <ul className="space-y-1">
              {[
                { key: "trading", icon: TrendingUp, label: "Trading" },
                { key: "platforms", icon: Monitor, label: "Platforms" },
                { key: "learning", icon: BookOpen, label: "Support" },
                { key: "about", icon: Info, label: "About" },
                { key: "language", icon: Globe, label: "Language" },
              ].map(({ key, icon: IconComponent, label }) => (
                <li key={key}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 transition-all duration-300 hover:bg-white/5 group"
                    style={{ color: "var(--text-primary)" }}
                    onClick={() => toggleMobileDropdown(key as DropdownType)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{
                          background:
                            activeMobileDropdown === key
                              ? "var(--text-accent-orange)"
                              : "var(--bg-accent)",
                        }}
                      >
                        <IconComponent
                          className={`w-3 h-3 ${
                            activeMobileDropdown === key ? "text-white" : ""
                          }`}
                        />
                      </div>
                      <span className="font-medium text-sm">{label}</span>
                    </div>
                    <AnimatedChevron isActive={activeMobileDropdown === key} />
                  </button>
                  {activeMobileDropdown === key && (
                    <div
                      className="border-l-2 ml-8 mt-1"
                      style={{ borderColor: "var(--text-accent-orange)" }}
                    >
                      <MobileDropdownContent type={key as DropdownType} />
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div
              className="px-4 py-4 border-t mt-4"
              style={{ borderColor: "var(--border-primary)" }}
            >
              <div className="space-y-3">
                <NavLink
                  to="/login"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 border backdrop-blur-sm text-sm"
                  style={{
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                    background: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <User className="w-4 h-4" />
                  <span>Log in</span>
                </NavLink>
                <NavLink
                  to="/register"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 relative overflow-hidden group text-sm"
                  style={{
                    background: `linear-gradient(135deg, var(--text-accent-orange) 0%, #ff6b35 100%)`,
                    color: "var(--text-primary)",
                  }}
                >
                  <Zap className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Open account</span>
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
