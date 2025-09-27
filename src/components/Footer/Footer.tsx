import Qr from "../Icons/QrCode/Qr";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-t-zinc-800">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="relative w-32 h-24">
            <img
              src="/sarthi_logo.png"
              alt="Sarthifx-logo"
              className="w-32 h-24 md:w-32 md:h-24 rounded-xl transition-all duration-300"
            />
          </div>

          <div className="flex items-center justify-between w-full lg:w-auto">
            <div className="flex items-center space-x-4">
              {/* Social media icons */}
              <a
                href="https://www.facebook.com/people/Sarthifxm/61581082793472/"
                target="_blank"
                className="hover:text-[var(--text-accent-orange)] transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>

              <a
                href="https://x.com/SarthiFxm"
                target="_blank"
                className="hover:text-[var(--text-accent-orange)] transition-colors"
              >
                <FaXTwitter className="text-2xl" />
              </a>

              <a
                href="https://www.instagram.com/sarthifxm/"
                target="_blank"
                className="hover:text-[var(--text-accent-orange)] transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8">
          {/* Trade Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Trade</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/trade/cfds"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  CFDs
                </a>
              </li>
              <li>
                <a
                  href="/trade/options"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Options
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-8 mb-4">Markets</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/markets/forex"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Forex
                </a>
              </li>
              <li>
                <a
                  href="/markets/derived-indices"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Derived Indices
                </a>
              </li>
              <li>
                <a
                  href="/markets/stocks"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Stocks
                </a>
              </li>
              <li>
                <a
                  href="/markets/stocks-indices"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Stock Indices
                </a>
              </li>
              <li>
                <a
                  href="/markets/commodities"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Commodities
                </a>
              </li>
              <li>
                <a
                  href="/markets/crypto"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Cryptocurrencies
                </a>
              </li>
              <li>
                <a
                  href="/markets/etf"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  ETFs
                </a>
              </li>
            </ul>
          </div>

          {/* Platforms Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Platforms</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/trading-platforms/sarthi-mt5"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx MT5
                </a>
              </li>
              <li>
                <a
                  href="/trading-platforms/sarthi-copy"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx Copy
                </a>
              </li>
              <li>
                <a
                  href="/trading-platforms/sarthi-x"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx X
                </a>
              </li>
              <li>
                <a
                  href="/trading-platforms/sarthi-trader"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx Trader
                </a>
              </li>
              <li>
                <a
                  href="/trading-platforms/sarthi-app"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx App
                </a>
              </li>
              <li>
                <a
                  href="/trading-platforms/sarthi-bot"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx Bot
                </a>
              </li>
            </ul>
          </div>

          {/* Payments/Learn/Support Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Payments</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/payment-methods"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Payment methods
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-8 mb-4">Learn</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/blog"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx Blog
                </a>
              </li>
              <li>
                <a
                  href="/glossary"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Glossary
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-8 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/help-centre"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Help centre
                </a>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/who-we-are"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Who we are
                </a>
              </li>
              <li>
                <a
                  href="/why-choose-us"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Why choose us
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-8 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Regulatory information
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Terms & conditions
                </a>
              </li>
              <li>
                <a
                  href="/secure-trading"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Secure & responsible trading
                </a>
              </li>
            </ul>
          </div>

          {/* Sarthifx App Column */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-6 rounded-lg flex items-start">
              <div className="mr-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center mb-10">
                    <div className="bg-white p-2 rounded mr-4">
                      <Qr />
                    </div>
                    <p className="text-sm text-gray-300">Scan to download</p>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <a href="#" className="hover:opacity-90 transition-opacity">
                      <img
                        src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df583bf331c84b6c6a07_app%20store%20download%20badge%20-%20Google%20Play.svg"
                        alt="Google Play Store"
                        className="h-10 border rounded-lg"
                      />
                    </a>
                    <a href="#" className="hover:opacity-90 transition-opacity">
                      <img
                        src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df583bf331c84b6c6a13_app%20store%20download%20badge%20-%20Apple%20App%20Store.svg"
                        alt="Apple App Store"
                        className="h-10 border rounded-lg"
                      />
                    </a>
                    <a href="#" className="hover:opacity-90 transition-opacity">
                      <img
                        src="https://cdn.prod.website-files.com/66585fe0e1dc7e70cc75d440/6757df583bf331c84b6c6a14_app%20store%20download%20badge%20-%20Huawei%20AppGallery.svg"
                        alt="Huawei AppGallery"
                        className="h-10 border rounded-lg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory notices */}
        <div className="mt-12 text-xs text-gray-400 space-y-2 border-t border-gray-700 pt-8">
          <p>
            Sarthifx Investments (Europe) Limited is licensed and regulated by
            the Malta Financial Services Authority under the Investment Services
            Act.
          </p>
          <p>
            Sarthifx (FX) Ltd is licensed by the Labuan Financial Services
            Authority.
          </p>
          <p>
            Sarthifx (BVI) Ltd is licensed by the British Virgin Islands
            Financial Services Commission.
          </p>
          <p>
            Sarthifx (V) Ltd is licensed and regulated by the Vanuatu Financial
            Services Commission.
          </p>
          <p>
            Sarthifx (Mauritius) Ltd is licensed by the Financial Services
            Commission, Mauritius.
          </p>
        </div>
        <div>
          <p className="mt-6 text-xs text-gray-400 space-y-2">
            Make sure to read our Terms and Conditions, Risk Disclosure, and
            Secure and Responsible Trading to fully understand the risks
            involved before using our services. Please also note that the
            information on this website does not constitute investment advice.
          </p>

          <p className="mt-6 text-xs text-gray-400 space-y-2 bg-gray-800 p-3 rounded-lg">
            The products offered on our website are complex derivative products
            that carry a significant risk of potential loss. CFDs are complex
            instruments with a high risk of losing money rapidly due to
            leverage. You should consider whether you understand how these
            products work and whether you can afford to take the high risk of
            losing your money.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
