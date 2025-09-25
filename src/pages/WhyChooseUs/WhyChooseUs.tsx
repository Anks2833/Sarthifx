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
        "Since 1999, we’ve been trusted by traders worldwide with a legacy of innovation.",
      icon: <Award className="w-10 h-10 text-orange-500" />,
    },
    {
      title: "Licensed & regulated",
      description:
        "We are licensed by multiple global financial authorities ensuring security and compliance.",
      icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Client money protection",
      description:
        "Your funds are segregated in secure institutions and always available for withdrawal.",
      icon: <Lock className="w-10 h-10 text-green-500" />,
    },
    {
      title: "Risk awareness & management",
      description:
        "We provide tools and education to help traders make responsible decisions.",
      icon: <BookOpen className="w-10 h-10 text-orange-400" />,
    },
    {
      title: "24/7 Support",
      description:
        "Our support team is available around the clock to assist you anytime.",
      icon: <Headphones className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Customer-first trading",
      description:
        "Our platforms are intuitive and packed with resources for smarter trading.",
      icon: <Users className="w-10 h-10 text-pink-500" />,
    },
    {
      title: "Global access",
      description:
        "Trade across multiple markets and platforms with seamless experience.",
      icon: <Globe className="w-10 h-10 text-indigo-500" />,
    },
    {
      title: "Secure transactions",
      description:
        "Best-in-class encryption ensures your personal and financial data remain safe.",
      icon: <CreditCard className="w-10 h-10 text-red-500" />,
    },
  ];

  const demoFeatures = [
    {
      title: "Unlimited virtual funds",
      description: "Practise trading with no risk and no hidden fees.",
      icon: <Star className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "All markets & platforms",
      description: "Enjoy full access to our wide range of markets and tools.",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "No credit card needed",
      description: "Sign up free with just your email — no deposit required.",
      icon: <CreditCard className="w-8 h-8 text-green-500" />,
    },
  ];

  return (
    <div
    className="pt-20"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Hero Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Why choose us
            </h1>
            <p className="text-lg sm:text-xl mb-4 text-gray-400">
              For over 25 years, Sarthifx has been a trusted partner for
              millions of traders worldwide.
            </p>
            <p className="text-lg sm:text-xl text-gray-400">
              Our regulated services, strong track record, and client-first
              approach make us the broker of choice.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-lg">
              <img
                src="/whychooseus.webp"
                alt="Happy customer"
                className="w-full h-72 sm:h-80 object-cover rounded-2xl"
              />
              <div className="absolute top-4 left-4 bg-black/70 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-green-400" />
                  <span className="text-white font-semibold">Trustpilot</span>
                </div>
                <div className="flex mt-2 gap-1">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-16 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Our awards
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {awards.map((award, i) => (
              <div
                key={i}
                className="p-4 rounded-lg shadow hover:shadow-lg bg-white/5 transition"
              >
                <Award className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-sm font-semibold">{award.title}</h3>
                <p className="text-xs text-gray-400">{award.org}</p>
                <p className="text-xs text-gray-500">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex gap-4 items-start p-6 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              <div>{f.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-16 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Trade risk-free with a demo account
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoFeatures.map((d, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition"
              >
                <div className="flex justify-center mb-4">{d.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{d.title}</h3>
                <p className="text-gray-400">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
