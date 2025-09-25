import {
  Brain,
  Globe,
  Sparkles,
  Target,
  ShieldCheck,
  Group,
  Trophy,
  Star,
} from "lucide-react";

const CareersPage = () => {
  const workAreas = [
    {
      title: "Take on hard problems",
      description:
        'You\'ll take on challenges that will stretch your abilities. Every project at Sarthifx is impactful, not just "business as usual".',
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      icon: <Brain className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Innovate with the best",
      description:
        "You'll adapt and innovate with agility, using an AI-first mindset to help us scale faster and smarter.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
      icon: <Sparkles className="w-8 h-8 text-orange-500" />,
    },
    {
      title: "Create global reach",
      description:
        "You'll help millions experience financial markets in ways that work for them by simplifying access to global markets and creating user-friendly experiences.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      icon: <Globe className="w-8 h-8 text-orange-500" />,
    },
  ];

  const cultureValues = [
    {
      title: "Customer Focus",
      description:
        "We put customers at the heart of everything we do, constantly pushing boundaries to exceed their expectations.",
      icon: <Target className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Integrity",
      description:
        "We believe in doing the right thing, even when no one is watching. Our commitment to honesty builds trust.",
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Teamwork",
      description:
        "We thrive on collaboration, bringing together diverse talents to achieve extraordinary results every day.",
      icon: <Group className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Competence",
      description:
        "We pursue excellence relentlessly, learning and adapting to deliver outstanding results in a fast-moving industry.",
      icon: <Trophy className="w-6 h-6 text-orange-500" />,
    },
  ];

  const employees = [
    {
      name: "[Name]",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "[Name]",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      name: "[Name]",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
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
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Diverse team collaborating"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h1 className="text-5xl font-extrabold mb-8">Why Sarthifx?</h1>
            <div
              className="space-y-6 text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              <p>
                We're driven by the need to innovate and powered by the freedom
                to experiment. Where you're free to explore, create, and even
                fail—because that's how breakthroughs happen.
              </p>
              <p>
                Whether you're building technology, creating products, growing
                business, or supporting operations, you'll be part of a team
                that turns ideas into action.
              </p>
              <p>
                If you bring curiosity, energy, and courage to try new
                things—you belong here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do Your Best Work Here */}
      <section
        className="py-24 px-6 md:px-12"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Do your best work here
          </h2>
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {workAreas.map((area, index) => (
              <div
                key={index}
                className="text-center bg-white/5 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                <p
                  style={{ color: "var(--text-secondary)" }}
                  className="mb-6 leading-relaxed text-base"
                >
                  {area.description}
                </p>
                <div className="aspect-video rounded-xl overflow-hidden shadow-sm">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button
              className="px-8 py-4 rounded-full text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-md"
              style={{ background: "var(--text-accent-orange)" }}
            >
              Open roles
            </button>
          </div>
        </div>
      </section>

      {/* Our Culture Values */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Culture Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 rounded-2xl shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  {value.icon}
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p
                  style={{ color: "var(--text-secondary)" }}
                  className="text-sm leading-relaxed"
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Spotlight */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Employee Spotlight
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
            {employees.map((employee, index) => (
              <div
                key={index}
                className="text-center bg-white/5 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-40 h-40 object-cover rounded-full border-4 border-orange-500 shadow-md"
                  />
                </div>
                <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 text-orange-500" />
                  {employee.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
