import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// QR Code component (placeholder since we can't import the custom Qr component)
const QrCode = () => (
  <div className="w-16 h-16 bg-black border-2 border-gray-300 rounded flex items-center justify-center">
    <div className="text-xs text-white font-mono">QR</div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-zinc-800">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        {/* Header Section with Logo and Social */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 pb-8 border-b border-gray-800">
          <div className="mb-6 lg:mb-0">
            <div className="relative">
              <img
                src="/sarthi_logo.png"
                alt="Sarthifx-logo"
                className="w-20 h-16 md:w-32 md:h-24 rounded-lg transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-gray-400 text-sm hidden lg:block">
              Follow us:
            </span>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/people/Sarthifxm/61581082793472/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>

              <a
                href="https://x.com/SarthiFxm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-2xl" />
              </a>

              <a
                href="https://www.instagram.com/sarthifxm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
          {/* Trade & Markets Column */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700 inline-block">
              Trade
            </h3>
            <ul className="space-y-3 mb-8">
              <li>
                <a
                  href="/trade/cfds"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm leading-relaxed"
                >
                  CFDs
                </a>
              </li>
              <li>
                <a
                  href="/trade/options"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm leading-relaxed"
                >
                  Options
                </a>
              </li>
            </ul>

            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700 inline-block">
              Markets
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/markets/forex", label: "Forex" },
                { href: "/markets/derived-indices", label: "Derived Indices" },
                { href: "/markets/stocks", label: "Stocks" },
                { href: "/markets/stocks-indices", label: "Stock Indices" },
                { href: "/markets/commodities", label: "Commodities" },
                { href: "/markets/crypto", label: "Cryptocurrencies" },
                { href: "/markets/etf", label: "ETFs" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm leading-relaxed"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms Column */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700 inline-block">
              Platforms
            </h3>
            <ul className="space-y-3">
              {[
                {
                  href: "/trading-platforms/sarthi-mt5",
                  label: "Sarthifx MT5",
                },
                {
                  href: "/trading-platforms/sarthi-copy",
                  label: "Sarthifx Copy",
                },
                { href: "/trading-platforms/sarthi-x", label: "Sarthifx X" },
                {
                  href: "/trading-platforms/sarthi-trader",
                  label: "Sarthifx Trader",
                },
                {
                  href: "/trading-platforms/sarthi-app",
                  label: "Sarthifx App",
                },
                {
                  href: "/trading-platforms/sarthi-bot",
                  label: "Sarthifx Bot",
                },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm leading-relaxed"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn & Support Column */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700 inline-block">
              Payments
            </h3>
            <ul className="space-y-3 mb-8">
              <li>
                <a
                  href="/payment-methods"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm leading-relaxed"
                >
                  Payment methods
                </a>
              </li>
            </ul>

            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700 inline-block">
              Learn
            </h3>
            <ul className="space-y-3 mb-8">
              <li>
                <a
                  href="/blog"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm leading-relaxed"
                >
                  Sarthifx Blog
                </a>
              </li>
              <li>
                <a
                  href="/glossary"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm leading-relaxed"
                >
                  Glossary
                </a>
              </li>
            </ul>

            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700 inline-block">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/help-centre"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm leading-relaxed"
                >
                  Help centre
                </a>
              </li>
            </ul>
          </div>

          {/* About & Legal Column */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700 inline-block">
              About
            </h3>
            <ul className="space-y-3 mb-8">
              <li>
                <a
                  href="/who-we-are"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm leading-relaxed"
                >
                  Who we are
                </a>
              </li>
              <li>
                <a
                  href="/why-choose-us"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm leading-relaxed"
                >
                  Why choose us
                </a>
              </li>
            </ul>

            <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-700 inline-block">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm leading-relaxed"
                >
                  Regulatory information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm leading-relaxed"
                >
                  Terms & conditions
                </a>
              </li>
              <li>
                <a
                  href="/secure-trading"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm leading-relaxed"
                >
                  Secure & responsible trading
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile App Download Section */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 h-full">
              <h3 className="text-white font-bold text-lg mb-6 pb-2 border-b border-gray-600 inline-block">
                Get the Sarthifx App
              </h3>

              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="bg-white p-3 rounded-xl mb-4 shadow-lg">
                    <QrCode />
                  </div>
                  <p className="text-sm text-gray-400 text-center lg:text-left">
                    Scan to download
                  </p>
                </div>

                <div className="flex flex-col space-y-4 w-full lg:w-auto">
                  <a
                    href="#"
                    className="hover:opacity-80 transition-opacity duration-300 transform hover:scale-105"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df583bf331c84b6c6a07_app%20store%20download%20badge%20-%20Google%20Play.svg"
                      alt="Download on Google Play"
                      className="h-12 w-auto rounded-lg shadow-md"
                    />
                  </a>
                  <a
                    href="#"
                    className="hover:opacity-80 transition-opacity duration-300 transform hover:scale-105"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df583bf331c84b6c6a13_app%20store%20download%20badge%20-%20Apple%20App%20Store.svg"
                      alt="Download on App Store"
                      className="h-12 w-auto rounded-lg shadow-md"
                    />
                  </a>
                  <a
                    href="#"
                    className="hover:opacity-80 transition-opacity duration-300 transform hover:scale-105"
                  >
                    <img
                      src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df583bf331c84b6c6a14_app%20store%20download%20badge%20-%20Huawei%20AppGallery.svg"
                      alt="Explore on AppGallery"
                      className="h-12 w-auto rounded-lg shadow-md"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Information Section */}
        <div className="border-t border-gray-700 pt-12">
          <div className="space-y-8">
            {/* Terms Notice */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="text-white font-semibold text-base mb-4">
                Important Notice
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Make sure to read our Terms and Conditions, Risk Disclosure, and
                Secure and Responsible Trading to fully understand the risks
                involved before using our services. Please also note that the
                information on this website does not constitute investment
                advice.
              </p>

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                <p className="text-xs text-gray-300 leading-relaxed">
                  <strong className="text-orange-400">Risk Warning:</strong> The
                  products offered on our website are complex derivative
                  products that carry a significant risk of potential loss. CFDs
                  are complex instruments with a high risk of losing money
                  rapidly due to leverage. You should consider whether you
                  understand how these products work and whether you can afford
                  to take the high risk of losing your money.
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center pt-8 border-t border-gray-800">
              <p className="text-xs text-gray-500">
                © {new Date().getFullYear()} Sarthifx. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
