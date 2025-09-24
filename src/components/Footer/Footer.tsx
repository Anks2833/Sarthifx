import Qr from "../Icons/QrCode/Qr";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="flex items-center space-x-2 mb-6 lg:mb-0">
            <img src="/logo.jpeg" alt="logo" className="w-28 h-24 rounded-xl" />
          </div>

          <div className="flex items-center justify-between w-full lg:w-auto">
            <div className="flex items-center space-x-4">
              {/* Social media icons */}
              <a href="#" className="hover:text-[var(--text-accent-orange)] transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[var(--text-accent-orange)] transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:text-[var(--text-accent-orange)] transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[var(--text-accent-orange)] transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[var(--text-accent-orange)] transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="#" className="hover:text-[var(--text-accent-orange)] transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>

            {/* Investors in people badge */}
            <div className="flex items-center ml-10">
              <img
                src="https://picsum.photos/id/237/120/30"
                alt="Investors in People - Platinum"
                className="h-8"
              />
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
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  CFDs
                </a>
              </li>
              <li>
                <a
                  href="#"
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
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Forex
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Derived Indices
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Stocks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Stock Indices
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Commodities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Cryptocurrencies
                </a>
              </li>
              <li>
                <a
                  href="#"
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
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx MT5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx Nakala
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx cTrader
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx Trader
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx Bot
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  <span>SmartTrader</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx P2P
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-bold mt-8 mb-4">Developer tools</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  <span>Sarthifx API</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
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
                  href="#"
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
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  <span>Sarthifx Academy</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Sarthifx Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
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
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Help centre
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  <span>Community</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  <span>Status page</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
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
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Who we are
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Why choose us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Our principles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  <span>Careers</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  <span>Sarthifx Tech</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  <span>Sarthifx Life</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Newsroom
                </a>
              </li>
            </ul>
          </div>

          {/* Partner with us / Legal Column */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4">Partner with us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  <span>Sarthifx Partners</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  <span>Sarthifx Prime</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  <span>API Partnerships</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
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
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Secure & responsible trading
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[var(--text-accent-orange)] transition-colors"
                >
                  Fraud prevention
                </a>
              </li>
            </ul>
          </div>

          {/* Sarthifx GO Column */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 p-6 rounded-lg flex items-start">
              <div className="mr-4">
                <img
                  src="/logo.jpeg"
                  alt="logo"
                  className="w-28 h-24 rounded-xl"
                />
                <h3 className="text-lg font-bold mb-2">Sarthifx GO</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Trade Multipliers and Accumulator Options on our mobile app.
                </p>

                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
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

                  <p className="text-xs text-gray-400">
                    *The availability of Sarthifx GO depends on your country of
                    residence.
                  </p>
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
