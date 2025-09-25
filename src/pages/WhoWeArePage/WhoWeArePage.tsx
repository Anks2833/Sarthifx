import {
  ShieldCheck,
  Users,
  Brain,
  Handshake,
  CheckCircle,
  Scale,
  Eye,
  Shield,
  Linkedin,
} from "lucide-react";

const WhoWeArePage = () => {
  const stats = [
    { value: "3M+", label: "Traders worldwide" },
    { value: "USD 46M+", label: "Monthly withdrawals" },
    { value: "187M+", label: "Monthly trades" },
    { value: "USD 33T+", label: "Total trade turnover" },
  ];

  const values = [
    {
      title: "Integrity",
      description:
        "We serve our customers with fairness and transparency. We settle all contracts by the book and speak plainly and truthfully.",
      icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
    },
    {
      title: "Customer focus",
      description:
        "We put the customer first and strive to build products that deliver the best customer experience.",
      icon: <Users className="w-12 h-12 text-orange-500" />,
    },
    {
      title: "Competence",
      description:
        "We value colleagues with the ability to use good judgement and an aptitude to learn and grow.",
      icon: <Brain className="w-12 h-12 text-green-500" />,
    },
    {
      title: "Teamwork",
      description:
        "We value team players that collaborate freely across departments with humility and ambition.",
      icon: <Handshake className="w-12 h-12 text-purple-500" />,
    },
  ];

  const principles = [
    {
      title: "Be reliable",
      icon: <CheckCircle className="w-12 h-12 text-blue-400" />,
    },
    { title: "Be fair", icon: <Scale className="w-12 h-12 text-orange-400" /> },
    {
      title: "Be transparent",
      icon: <Eye className="w-12 h-12 text-green-400" />,
    },
    {
      title: "Be responsible",
      icon: <Shield className="w-12 h-12 text-red-400" />,
    },
  ];

  const leaders = [
    {
      name: "[Founder-Name]",
      title: "Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "[CEO Name]",
      title: "Chief Executive Officer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "[Name]",
      title: "Chief Risk & Compliance Officer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "[Name]",
      title: "Co-Chief Financial Officer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <div
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Who we are</h1>
            <div
              className="space-y-6 text-base md:text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>
                Sarthifx is one of the world's largest online brokers. We offer
                CFDs and other derivatives on forex, stocks & indices,
                cryptocurrencies, commodities, and derived indices to millions
                of registered users across the globe.
              </p>
              <p>
                From inception, our goal was to break free of the high
                commissions and clunky products offered by traditional brokers.
                Also, we aim to deliver a first-class experience to digitally
                inclined traders, regardless of the size of their accounts.
              </p>
              <p>
                As Sarthifx marks its 25th anniversary this year, we celebrate a
                legacy of innovation and a commitment to making trading
                accessible to anyone, anywhere. Over the past quarter century,
                we have grown to serve over 3 million customers worldwide,
                continually advancing to meet the dynamic needs of the markets
                and our clients. This milestone is a testament to our unwavering
                dedication to the traders we serve.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop"
              alt="Team collaboration"
              className="rounded-xl object-cover h-40 md:h-56 w-full shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop"
              alt="Office meeting"
              className="rounded-xl object-cover h-56 w-full shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=300&h=300&fit=crop"
              alt="Team celebration"
              className="rounded-xl object-cover h-56 w-full shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=300&h=200&fit=crop"
              alt="Workshop"
              className="rounded-xl object-cover h-40 md:h-56 w-full shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
              <div
                className="mt-2 text-sm md:text-base"
                style={{ color: "var(--text-secondary)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Our values are the fabric of our culture
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-6 text-center shadow hover:shadow-md"
              >
                <div className="flex justify-center mb-4">{v.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                <p
                  className="text-sm md:text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Our principles are the framework for our decisions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-xl p-6 text-center hover:shadow-md"
              >
                <div className="flex justify-center mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Our leaders
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, i) => (
              <div
                key={i}
                className="text-center bg-white/5 p-6 rounded-xl shadow hover:shadow-lg"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold">{leader.name}</h3>
                <p
                  className="text-sm mb-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {leader.title}
                </p>
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-500 mx-auto">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeArePage;
