import {
  ShieldCheck,
  Award,
  Users,
  Lock,
  Headphones,
  Globe,
  BookOpen,
  CreditCard,
  Star,
  ArrowRight,
  TrendingUp,
  Zap,
  Shield,
} from "lucide-react";

const WhyChooseUs = () => {
  const awards = [
    {
      title: "Best Trading Experience - Global",
      org: "UF Awards",
      year: "2025",
    },
    { title: "Best CFD Broker LATAM", org: "UF Awards", year: "2025" },
    { title: "Most Innovative Broker MEA", org: "UF Awards", year: "2025" },
    {
      title: "Affiliate Program of the Year",
      org: "Forex Expo Dubai",
      year: "2024",
    },
    {
      title: "Best Customer Service - Global",
      org: "Global Forex Awards",
      year: "2024",
    },
    { title: "Most Trusted Broker", org: "UF Awards", year: "2024" },
  ];

  const features = [
    {
      title: "Proven track record",
      description:
        "Since 1999, we've been trusted by traders worldwide with a legacy of innovation.",
      icon: <Award className="w-10 h-10 text-orange-500" />,
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
    },
    {
      title: "Licensed & regulated",
      description:
        "We are licensed by multiple global financial authorities ensuring security and compliance.",
      icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
      gradient: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      title: "Client money protection",
      description:
        "Your funds are segregated in secure institutions and always available for withdrawal.",
      icon: <Lock className="w-10 h-10 text-green-500" />,
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
    },
    {
      title: "Risk awareness & management",
      description:
        "We provide tools and education to help traders make responsible decisions.",
      icon: <BookOpen className="w-10 h-10 text-orange-400" />,
      gradient: "from-orange-400/20 to-yellow-500/20",
      borderColor: "border-orange-400/30",
    },
    {
      title: "24/7 Support",
      description:
        "Our support team is available around the clock to assist you anytime.",
      icon: <Headphones className="w-10 h-10 text-purple-500" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Customer-first trading",
      description:
        "Our platforms are intuitive and packed with resources for smarter trading.",
      icon: <Users className="w-10 h-10 text-pink-500" />,
      gradient: "from-pink-500/20 to-rose-500/20",
      borderColor: "border-pink-500/30",
    },
    {
      title: "Global access",
      description:
        "Trade across multiple markets and platforms with seamless experience.",
      icon: <Globe className="w-10 h-10 text-indigo-500" />,
      gradient: "from-indigo-500/20 to-blue-600/20",
      borderColor: "border-indigo-500/30",
    },
    {
      title: "Secure transactions",
      description:
        "Best-in-class encryption ensures your personal and financial data remain safe.",
      icon: <CreditCard className="w-10 h-10 text-red-500" />,
      gradient: "from-red-500/20 to-pink-600/20",
      borderColor: "border-red-500/30",
    },
  ];

  const demoFeatures = [
    {
      title: "Unlimited virtual funds",
      description: "Practise trading with no risk and no hidden fees.",
      icon: <Star className="w-10 h-10 text-yellow-500" />,
      gradient: "from-yellow-400/20 to-orange-500/20",
    },
    {
      title: "All markets & platforms",
      description: "Enjoy full access to our wide range of markets and tools.",
      icon: <TrendingUp className="w-10 h-10 text-blue-500" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "No credit card needed",
      description: "Sign up free with just your email — no deposit required.",
      icon: <Zap className="w-10 h-10 text-green-500" />,
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  const stats = [
    {
      number: "25+",
      label: "Years of Excellence",
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: "2M+",
      label: "Global Traders",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "150+",
      label: "Countries Served",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      number: "99.9%",
      label: "Uptime Guaranteed",
      icon: <Shield className="w-8 h-8" />,
    },
  ];

  return (
    <div
      className="pt-16 sm:pt-20 relative overflow-hidden"
      style={{
        background: "var(--bg-primary, #0f0f0f)",
        color: "var(--text-primary, #ffffff)",
      }}
    >
      {/* Hero Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium text-orange-300">
                  Trusted Since 1999
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
                Why choose
                <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Sarthifx
                </span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
                <p>
                  For over 25 years, Sarthifx has been a trusted partner for
                  millions of traders worldwide.
                </p>
                <p>
                  Our regulated services, strong track record, and client-first
                  approach make us the broker of choice.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 sm:p-6 text-center hover:from-white/10 hover:to-white/15 transition-all duration-300 group"
                >
                  <div className="text-orange-500 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-orange-500/25 flex items-center justify-center gap-2">
                Start Trading Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-transparent border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/5 backdrop-blur">
                Try Free Demo
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl p-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur">
              <div className="rounded-2xl overflow-hidden bg-black/20 backdrop-blur">
                <img
                  src="/whychooseus.webp"
                  alt="Happy customer"
                  className="w-full h-72 sm:h-80 lg:h-96 object-cover"
                />

                {/* Floating Trustpilot Card */}
                <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <Star
                        className="w-5 h-5 text-white"
                        fill="currentColor"
                      />
                    </div>
                    <span className="text-white font-bold text-lg">
                      Trustpilot
                    </span>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? "text-green-400" : "text-gray-500"
                        }`}
                        fill={i < 4 ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-300">
                    4.2/5 from 12,847 reviews
                  </div>
                </div>

                {/* Floating Success Metric */}
                <div className="absolute bottom-6 right-6 bg-gradient-to-r from-blue-500/90 to-purple-600/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
                  <div className="text-2xl font-bold text-white mb-1">
                    98.7%
                  </div>
                  <div className="text-sm text-blue-100">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Award-winning excellence
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Recognition from industry leaders validates our commitment to
              providing world-class trading experiences
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {awards.map((award, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 hover:from-white/10 hover:to-white/15 hover:border-orange-500/30 transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 rounded-2xl transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-2 text-white group-hover:text-orange-300 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-1">{award.org}</p>
                  <p className="text-sm text-orange-400 font-semibold">
                    {award.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Built for your success
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Every feature is designed with your trading success in mind,
              backed by decades of expertise
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className={`group relative bg-gradient-to-br ${feature.gradient} backdrop-blur border ${feature.borderColor} rounded-3xl p-8 hover:scale-105 transition-all duration-500 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-500"></div>

                <div className="relative z-10 flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white group-hover:text-opacity-90 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Risk-Free Trading
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Start with a demo account
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Experience our platform with zero risk. Practice your strategies
              and get familiar with our tools before trading with real money.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {demoFeatures.map((demo, i) => (
              <div
                key={i}
                className={`group relative bg-gradient-to-br ${demo.gradient} backdrop-blur border border-white/20 rounded-3xl p-8 text-center hover:scale-105 transition-all duration-500 overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 group-hover:from-white/5 group-hover:to-white/10 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {demo.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white">
                    {demo.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {demo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 inline-flex items-center gap-3">
              Create Free Demo Account
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-gray-500 mt-4">
              No credit card required • Takes 30 seconds
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
