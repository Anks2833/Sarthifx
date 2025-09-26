import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  TrendingUp,
  Monitor,
  BookOpen,
  Info,
  Globe,
  ChevronDown,
  // ExternalLink,
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
  // Newspaper,
  MessageCircle,
  HelpCircle,
  User,
  Target,
  PieChart,
  Coins,
  Building,
  Wallet,
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

  const itemRoutes: Record<string, string> = {
    // Trading
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

    // Platforms
    "Sarthifx MT5": "/trading-platforms/sarthi-mt5",
    "Sarthifx X": "/trading-platforms/sarthi-x",
    "Sarthifx Nakala": "/trading-platforms/sarthi-nakala",
    "Sarthifx cTrader": "/trading-platforms/sarthi-ctrader",
    "Sarthifx Trader": "/trading-platforms/sarthi-trader",
    "Sarthifx Bot": "/trading-platforms/sarthi-bot",
    "Sarthifx Go": "/trading-platforms/sarthi-go",

    // Learning & support
    "Sarthifx Academy": "#",
    "Sarthifx Blog": "/blog",
    Glossary: "/glossary",
    "Help centre": "/help-centre",
    // Community: "/contact-us",
    "Contact us": "/contact-us",

    // About
    "Who we are": "/who-we-are",
    "Why choose us": "/why-choose-us",
    "Regulatory information": "#",
    "Secure & responsible trading": "/secure-trading",
    // Careers: "/careers",
    // Newsroom: "/newsroom",

    // Languages
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

  // Enhanced SVG Icons with animations
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

  // Menu item icons mapping
  const menuIcons = {
    // Trading
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

    // Platforms
    "Sarthifx MT5": Monitor,
    "Sarthifx X": Zap,
    "Sarthifx Nakala": Users,
    "Sarthifx cTrader": BarChart3,
    "Sarthifx Trader": User,
    "Sarthifx Bot": Bot,
    "Sarthifx Go": Smartphone,

    // Learning
    "Sarthifx Academy": BookOpen,
    "Sarthifx Blog": BookOpenText,
    Glossary: BookOpen,
    "Help centre": HelpCircle,
    // Community: Users,
    "Contact us": MessageCircle,

    // About
    "Who we are": Info,
    "Why choose us": Star,
    "Regulatory information": Shield,
    "Secure & responsible trading": Shield,
    // Careers: Briefcase,
    // Newsroom: Newspaper,
  };

  // Enhanced Menu Components
  const TradingMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-4 md:px-10 py-6 z-40 transition-all duration-500 ease-out ${
        activeDropdown === "trading"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("trading")}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl border"
        style={{
          background: `linear-gradient(135deg, var(--bg-secondary) 0%, rgba(30, 31, 46, 0.95) 100%)`,
          borderColor: "var(--border-primary)",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-10">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--text-accent-blue)" }}
                >
                  <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <h3
                  className="font-semibold text-lg"
                  style={{ color: "var(--text-accent-blue)" }}
                >
                  Trade
                </h3>
              </div>
              <ul className="">
                {["CFDs", "Options"].map((item) => {
                  const IconComponent =
                    menuIcons[item as keyof typeof menuIcons];
                  return (
                    <li key={item}>
                      <NavLink
                        to={itemRoutes[item]}
                        className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                        style={{
                          color: "var(--text-primary)",
                          background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "var(--bg-accent)";
                          e.currentTarget.style.borderColor =
                            "var(--border-secondary)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {IconComponent && (
                          <IconComponent className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
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
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--text-accent-orange)" }}
                >
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <h3
                  className="font-semibold text-lg"
                  style={{ color: "var(--text-accent-orange)" }}
                >
                  Markets
                </h3>
              </div>
              <ul className="">
                {[
                  "Forex",
                  "Derived Indices",
                  "Stocks",
                  "Stock Indices",
                  "Commodities",
                  "Cryptocurrencies",
                  "ETFs",
                ].map((item) => {
                  const IconComponent =
                    menuIcons[item as keyof typeof menuIcons];
                  return (
                    <li key={item}>
                      <NavLink
                        to={itemRoutes[item]}
                        className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                        style={{
                          color: "var(--text-primary)",
                          background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "var(--bg-accent)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {IconComponent && (
                          <IconComponent className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
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

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--border-primary)" }}
                >
                  <Wallet className="w-4 h-4 text-black" />
                </div>
                <h3
                  className="font-semibold text-lg"
                  style={{ color: "var(--border-primary)" }}
                >
                  Deposits & withdrawals
                </h3>
              </div>
              <ul className="">
                {["Payment methods"].map((item) => {
                  const IconComponent =
                    menuIcons[item as keyof typeof menuIcons];
                  return (
                    <li key={item}>
                      <NavLink
                        to={itemRoutes[item]}
                        className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                        style={{
                          color: "var(--text-primary)",
                          background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "var(--bg-accent)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {IconComponent && (
                          <IconComponent className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
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
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--text-accent-blue)" }}
                >
                  <Settings className="w-4 h-4 text-white" />
                </div>
                <h3
                  className="font-semibold text-lg"
                  style={{ color: "var(--text-accent-blue)" }}
                >
                  Tools
                </h3>
              </div>
              <ul className="">
                {[
                  "TradingView",
                  "MT5 Signals",
                  "Trading Calculator",
                  "Trading Central",
                  "Economic Calendar",
                ].map((item) => {
                  const IconComponent =
                    menuIcons[item as keyof typeof menuIcons];
                  return (
                    <li key={item}>
                      <NavLink
                        to={itemRoutes[item]}
                        className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                        style={{
                          color: "var(--text-primary)",
                          background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "var(--bg-accent)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {IconComponent && (
                          <IconComponent className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
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

          <div
            className="rounded-2xl p-8 border relative overflow-hidden group hover:scale-105 transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-primary) 100%)`,
              borderColor: "var(--border-secondary)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--text-accent-orange)" }}
                >
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Sarthifx trading competitions
                </h3>
              </div>
              <p
                className="mb-6 text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Compete risk-free with virtual funds and stand a chance to win
                real cash prizes.
              </p>
              <NavLink
                to="#"
                className="inline-flex items-center gap-3 group/link font-medium"
                style={{ color: "var(--text-accent-blue)" }}
              >
                <span>Learn more</span>
                <AnimatedArrowRight />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Similar enhanced treatment for other menus (abbreviated for space)
  const PlatformsMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-4 md:px-10 py-6 z-40 transition-all duration-500 ease-out ${
        activeDropdown === "platforms"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("platforms")}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl border"
        style={{
          background: `linear-gradient(135deg, var(--bg-secondary) 0%, rgba(30, 31, 46, 0.95) 100%)`,
          borderColor: "var(--border-primary)",
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-10">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--text-accent-blue)" }}
                >
                  <Monitor className="w-4 h-4 text-white" />
                </div>
                <h3
                  className="font-semibold text-lg"
                  style={{ color: "var(--text-accent-blue)" }}
                >
                  CFDs trading
                </h3>
              </div>
              <ul className="">
                {["Sarthifx MT5", "Sarthifx X"].map((item) => {
                  const IconComponent =
                    menuIcons[item as keyof typeof menuIcons];
                  return (
                    <li key={item}>
                      <NavLink
                        to={itemRoutes[item]}
                        className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                        style={{
                          color: "var(--text-primary)",
                          background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "var(--bg-accent)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {IconComponent && (
                          <IconComponent className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
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
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--text-accent-orange)" }}
                >
                  <Users className="w-4 h-4 text-white" />
                </div>
                <h3
                  className="font-semibold text-lg"
                  style={{ color: "var(--text-accent-orange)" }}
                >
                  Copy trading
                </h3>
              </div>
              <ul className="">
                {["Sarthifx Nakala", "Sarthifx cTrader"].map((item) => {
                  const IconComponent =
                    menuIcons[item as keyof typeof menuIcons];
                  return (
                    <li key={item}>
                      <NavLink
                        to={itemRoutes[item]}
                        className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                        style={{
                          color: "var(--text-primary)",
                          background: "transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "var(--bg-accent)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {IconComponent && (
                          <IconComponent className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
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

          <div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "var(--border-primary)" }}
                >
                  <Zap className="w-4 h-4 text-black" />
                </div>
                <h3
                  className="font-semibold text-lg"
                  style={{ color: "var(--border-primary)" }}
                >
                  Options trading
                </h3>
              </div>
              <ul className="">
                {["Sarthifx Trader", "Sarthifx Bot", "Sarthifx Go"].map(
                  (item) => {
                    const IconComponent =
                      menuIcons[item as keyof typeof menuIcons];
                    return (
                      <li key={item}>
                        <NavLink
                          to={itemRoutes[item]}
                          className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                          style={{
                            color: "var(--text-primary)",
                            background: "transparent",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "var(--bg-accent)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                          }}
                        >
                          {IconComponent && (
                            <IconComponent className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
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

          <div
            className="rounded-2xl p-8 border relative overflow-hidden group hover:scale-105 transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-primary) 100%)`,
              borderColor: "var(--border-secondary)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--text-accent-blue)" }}
                >
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Sarthifx Trader
                </h3>
              </div>
              <p
                className="mb-6 text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Trade options on financial markets and 24/7 Derived Indices.
              </p>
              <NavLink
                to="#"
                className="inline-flex items-center gap-3 group/link font-medium"
                style={{ color: "var(--text-accent-blue)" }}
              >
                <span>Learn more</span>
                <AnimatedArrowRight />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Simplified versions of other menus for space (similar enhancement pattern)
  const LearningMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-4 md:px-10 py-6 z-40 transition-all duration-500 ease-out ${
        activeDropdown === "learning"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("learning")}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl border"
        style={{
          background: `linear-gradient(135deg, var(--bg-secondary) 0%, rgba(30, 31, 46, 0.95) 100%)`,
          borderColor: "var(--border-primary)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen
                className="w-5 h-5"
                style={{ color: "var(--text-accent-blue)" }}
              />
              <h3
                className="font-semibold text-lg"
                style={{ color: "var(--text-accent-blue)" }}
              >
                Learn
              </h3>
            </div>
            <ul className="">
              {["Sarthifx Blog", "Glossary"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={itemRoutes[item]}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                    style={{ color: "var(--text-primary)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "var(--bg-accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <BookOpenText className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item}
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle
                className="w-5 h-5"
                style={{ color: "var(--text-accent-orange)" }}
              />
              <h3
                className="font-semibold text-lg"
                style={{ color: "var(--text-accent-orange)" }}
              >
                Get support
              </h3>
            </div>
            <ul className="">
              {["Help centre", "Contact us"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={itemRoutes[item]}
                    className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                    style={{ color: "var(--text-primary)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "var(--bg-accent)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {item === "Help centre" && (
                      <HelpCircle className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    )}
                    {/* {item === "Community" && (
                      <Users className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    )} */}
                    {item === "Contact us" && (
                      <MessageCircle className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                    )}
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item}
                    </span>
                    {/* {item === "Community" && <AnimatedExternalLink />} */}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl p-8 border relative overflow-hidden group hover:scale-105 transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-primary) 100%)`,
              borderColor: "var(--border-secondary)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "var(--text-accent-orange)" }}
              >
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Sarthifx Academy
              </h3>
            </div>
            <p
              className="mb-6 text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Expert guides on how to become a trader
            </p>
            <NavLink
              to="#"
              className="inline-flex items-center gap-3 group/link font-medium"
              style={{ color: "var(--text-accent-blue)" }}
            >
              <span>Learn more</span>
              <AnimatedArrowRight />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-4 md:px-10 py-6 z-40 transition-all duration-500 ease-out ${
        activeDropdown === "about"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("about")}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl border"
        style={{
          background: `linear-gradient(135deg, var(--bg-secondary) 0%, rgba(30, 31, 46, 0.95) 100%)`,
          borderColor: "var(--border-primary)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 lg:p-10">
          <div className="lg:col-span-1">
            <ul className="">
              {[
                "Who we are",
                "Why choose us",
                "Secure & responsible trading",
                // "Careers",
                // "Newsroom",
              ].map((item) => {
                const IconComponent = menuIcons[item as keyof typeof menuIcons];
                return (
                  <li key={item}>
                    <NavLink
                      to={itemRoutes[item]}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                      style={{ color: "var(--text-primary)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "var(--bg-accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      {IconComponent && (
                        <IconComponent className="w-4 h-4 opacity-70 group-hover:opacity-100" />
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
          <div
            className="lg:col-span-2 rounded-2xl p-8 border relative overflow-hidden group hover:scale-105 transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-primary) 100%)`,
              borderColor: "var(--border-secondary)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: "var(--border-primary)" }}
              >
                <Star className="w-6 h-6 text-black" />
              </div>
              <h3
                className="text-xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Why choose us
              </h3>
            </div>
            <p
              className="mb-6 text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              For over 25 years, Sarthifx has been a trusted partner of traders
              worldwide.
            </p>
            <NavLink
              to="/why-choose-us"
              className="inline-flex items-center gap-3 group/link font-medium"
              style={{ color: "var(--text-accent-blue)" }}
            >
              <span>Learn more</span>
              <AnimatedArrowRight />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );

  const LanguageMenu = () => (
    <div
      className={`absolute top-full left-0 w-full px-4 md:px-10 py-6 z-40 transition-all duration-500 ease-out ${
        activeDropdown === "language"
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      onMouseEnter={() => handleMouseEnter("language")}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl border max-w-4xl mx-auto"
        style={{
          background: `linear-gradient(135deg, var(--bg-secondary) 0%, rgba(30, 31, 46, 0.95) 100%)`,
          borderColor: "var(--border-primary)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
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
            "العربية",
            "Pусский",
            "हिन्दी",
            "简体中文",
            "Italiano",
            "O'zbek",
          ].map((lang) => (
            <NavLink
              key={lang}
              to="#"
              className="p-3 rounded-xl transition-all duration-300 hover:scale-105 text-center group"
              style={{ color: "var(--text-primary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--bg-accent)";
                e.currentTarget.style.borderColor = "var(--border-secondary)";
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
  );

  // Enhanced Mobile Dropdown Component
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
            icon: Wallet,
            items: ["Payment methods"],
          },
          {
            title: "Tools",
            icon: Settings,
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
            icon: Monitor,
            items: ["Sarthifx MT5", "Sarthifx X"],
          },
          {
            title: "Copy trading",
            icon: Users,
            items: ["Sarthifx Nakala", "Sarthifx cTrader"],
          },
          {
            title: "Options trading",
            icon: Zap,
            items: ["Sarthifx Trader", "Sarthifx Bot", "Sarthifx Go"],
          },
        ],
      },
      learning: {
        sections: [
          {
            title: "Learn",
            icon: BookOpen,
            items: ["Sarthifx Academy", "Sarthifx Blog", "Glossary"],
          },
          {
            title: "Get support",
            icon: HelpCircle,
            items: ["Help centre", "Contact us"],
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
              "Regulatory information",
              "Secure & responsible trading",
              // "Careers",
              // "Newsroom",
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
      <div className="px-4 pb-6 space-y-6">
        {dropdownData[type].sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <div
              className="flex items-center gap-3 mb-4 pb-2 border-b"
              style={{ borderColor: "var(--border-primary)" }}
            >
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    sectionIndex % 2 === 0
                      ? "var(--text-accent-blue)"
                      : "var(--text-accent-orange)",
                }}
              >
                <section.icon className="w-3 h-3 text-white" />
              </div>
              <h4
                className="font-semibold text-sm"
                style={{ color: "var(--text-primary)" }}
              >
                {section.title}
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {section.items.map((item, itemIndex) => {
                const IconComponent = menuIcons[item as keyof typeof menuIcons];
                return (
                  <NavLink
                    key={itemIndex}
                    to={itemRoutes[item] || "#"}
                    className="flex items-center gap-2 py-3 px-3 rounded-lg transition-all duration-300 hover:scale-105 group"
                    style={{ color: "var(--text-primary)" }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onTouchStart={(e) =>
                      (e.currentTarget.style.background = "var(--bg-accent)")
                    }
                    onTouchEnd={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    {IconComponent && (
                      <IconComponent className="w-3 h-3 opacity-60 group-hover:opacity-100 flex-shrink-0" />
                    )}
                    <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">
                      {item}
                    </span>
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-10 ${
        isScrolled ? "py-3" : "py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Enhanced Logo */}
        <div
          className={`flex items-center space-x-3 transition-all duration-700 ${
            isScrolled && !isMobileMenuOpen
              ? "opacity-0 -translate-y-12 scale-90"
              : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="relative w-32 h-24">
              <img
                src="/sarthi_logo.png"
                alt="Sarthifx-logo"
                className="w-24 h-18 md:w-32 md:h-24 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </NavLink>
        </div>

        {/* Enhanced Desktop Navigation */}
        <nav
          className={`hidden lg:block ${
            isScrolled ? "shadow-2xl" : "backdrop-blur-xl"
          } rounded-2xl px-8 py-4 transition-all duration-500 border`}
          style={{
            background: isScrolled
              ? `linear-gradient(135deg, var(--bg-secondary) 0%, rgba(30, 31, 46, 0.98) 100%)`
              : `linear-gradient(135deg, rgba(42, 45, 58, 0.1) 0%, rgba(30, 31, 46, 0.05) 100%)`,
            borderColor: "var(--border-primary)",
            backdropFilter: "blur(20px)",
          }}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="flex items-center space-x-8">
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
                    className={`font-medium transition-all duration-300 ${
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
                  className={`font-medium transition-all duration-300 ${
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

        {/* Enhanced Desktop CTAs */}
        <div
          className={`hidden lg:flex items-center space-x-4 transition-all duration-700 ${
            isScrolled
              ? "opacity-0 -translate-y-12 scale-90"
              : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          <NavLink
            to="/login"
            className="px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg border backdrop-blur-sm group"
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
            className="px-6 py-3 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group"
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

        {/* Enhanced Mobile menu button */}
        <button
          className="lg:hidden z-50 relative p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:bg-white/10"
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

      {/* Enhanced Mobile Menu */}
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
        <div className="max-h-[80vh] overflow-y-auto">
          <nav className="py-6">
            <ul className="space-y-2">
              {[
                { key: "trading", icon: TrendingUp, label: "Trading" },
                { key: "platforms", icon: Monitor, label: "Platforms" },
                {
                  key: "learning",
                  icon: BookOpen,
                  label: "Support",
                },
                { key: "about", icon: Info, label: "About" },
                { key: "language", icon: Globe, label: "EN" },
              ].map(({ key, icon: IconComponent, label }) => (
                <li key={key}>
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 transition-all duration-300 hover:bg-white/5 group"
                    style={{ color: "var(--text-primary)" }}
                    onClick={() => toggleMobileDropdown(key as DropdownType)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{
                          background:
                            activeMobileDropdown === key
                              ? "var(--text-accent-orange)"
                              : "var(--bg-accent)",
                        }}
                      >
                        <IconComponent
                          className={`w-4 h-4 ${
                            activeMobileDropdown === key ? "text-white" : ""
                          }`}
                        />
                      </div>
                      <span className="font-medium text-lg">{label}</span>
                    </div>
                    <AnimatedChevron isActive={activeMobileDropdown === key} />
                  </button>
                  {activeMobileDropdown === key && (
                    <div
                      className="border-l-2 ml-10 mt-2"
                      style={{ borderColor: "var(--text-accent-orange)" }}
                    >
                      <MobileDropdownContent type={key as DropdownType} />
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Enhanced Mobile CTAs */}
            <div
              className="px-6 py-6 border-t mt-6"
              style={{ borderColor: "var(--border-primary)" }}
            >
              <div className="space-y-4">
                <NavLink
                  to="/login"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 hover:scale-105 border backdrop-blur-sm"
                  style={{
                    borderColor: "var(--border-primary)",
                    color: "var(--text-primary)",
                    background: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <User className="w-5 h-5" />
                  <span className="text-lg">Log in</span>
                </NavLink>
                <NavLink
                  to="/register"
                  className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                  style={{
                    background: `linear-gradient(135deg, var(--text-accent-orange) 0%, #ff6b35 100%)`,
                    color: "var(--text-primary)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Zap className="w-5 h-5 relative z-10" />
                  <span className="text-lg relative z-10">Open account</span>
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Enhanced Desktop Dropdown menus */}
      <TradingMenu />
      <PlatformsMenu />
      <LearningMenu />
      <AboutMenu />
      <LanguageMenu />
    </header>
  );
};

export default Navbar;
