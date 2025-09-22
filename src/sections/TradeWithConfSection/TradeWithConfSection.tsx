import { motion } from "framer-motion";

const TradeWithConfidenceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Trade with confidence
          </h2>
          <p className="text-gray-600 text-lg">
            For over 25 years, Sarthifx has been a trusted partner of traders
            worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Awards */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                🏆
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Best Trading Experience - Global
              </h3>
              <p className="text-sm text-gray-600">
                UF Awards
                <br />
                2025
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                🥇
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Broker of the Year - Global
              </h3>
              <p className="text-sm text-gray-600">
                Finance Magnates
                <br />
                2024
              </p>
            </div>
          </motion.div>

          {/* Center Stats */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <div className="text-7xl font-bold text-gray-900 mb-2">168M+</div>
              <p className="text-gray-600">Monthly deals</p>
            </div>
            <div>
              <div className="text-7xl font-bold text-gray-900 mb-2">3M+</div>
              <p className="text-gray-600">Customers worldwide</p>
            </div>
            <div>
              <div className="text-7xl font-bold text-gray-900 mb-2">650B+</div>
              <p className="text-gray-600">Monthly volume</p>
            </div>
            <div>
              <div className="text-7xl font-bold text-gray-900 mb-2">1999</div>
              <p className="text-gray-600">Established Since</p>
            </div>
          </motion.div>

          {/* Right Awards */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                🏅
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Most Trusted Broker
              </h3>
              <p className="text-sm text-gray-600">
                UF Awards
                <br />
                2024
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                ⭐
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Best Customer Service - Global
              </h3>
              <p className="text-sm text-gray-600">
                Global Forex
                <br />
                Awards 2024
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TradeWithConfidenceSection;
